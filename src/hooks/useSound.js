import { useCallback } from 'react'
import { useSettings } from '../contexts/SettingsContext'

let context
let masterGain
let lastErrorAt = 0
let noiseBufferCache

function getEngine() {
  if (typeof window === 'undefined') return null
  const AudioContextClass = window.AudioContext || window.webkitAudioContext
  if (!AudioContextClass) return null
  if (!context) {
    context = new AudioContextClass()
    masterGain = context.createGain()
    masterGain.gain.value = 0.9
    masterGain.connect(context.destination)
  }
  if (context.state === 'suspended') context.resume().catch(() => {})
  return context
}

function getNoiseBuffer(engine) {
  if (!noiseBufferCache) {
    const length = Math.max(4096, Math.floor(engine.sampleRate * 0.35))
    const buffer = engine.createBuffer(1, length, engine.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < length; i++) {
      const envelope = 1 - (i / length)
      data[i] = (Math.random() * 2 - 1) * envelope * 0.8
    }
    noiseBufferCache = buffer
  }
  return noiseBufferCache
}

const packs = {
  mechanical: { type: 'triangle', frequency: 720, length: .028, gain: .09, attack: .003 },
  soft: { type: 'sine', frequency: 420, length: .045, gain: .065, attack: .004 },
  typewriter: { type: 'triangle', frequency: 350, length: .024, gain: .08, attack: .0025 },
  minimal: { type: 'sine', frequency: 660, length: .018, gain: .04, attack: .002 },
  click: { type: 'triangle', frequency: 1040, length: .016, gain: .07, attack: .002 },
}

export function useSound() {
  const { settings } = useSettings()
  const playSound = useCallback((kind = 'correct') => {
    if (!settings.soundEnabled || settings.volume === 0 || settings.soundPack === 'silent') return
    if ((kind === 'error' && !settings.errorSound) || (kind === 'correct' && !settings.correctSound) || (kind === 'space' && !settings.spacebarSound) || (kind === 'backspace' && !settings.backspaceSound) || (kind === 'finish' && !settings.finishSound)) return
    try {
      const engine = getEngine()
      if (!engine || !masterGain) return

      const now = engine.currentTime + .001
      const config = packs[settings.soundPack] || packs.mechanical
      const volumeScale = Math.min(0.9, (settings.volume / 100) * 0.9)

      if (kind === 'error') {
        if (now - lastErrorAt < 0.04) return
        lastErrorAt = now

        const noiseSource = engine.createBufferSource()
        const noiseFilter = engine.createBiquadFilter()
        const noiseGain = engine.createGain()
        const tone = engine.createOscillator()
        const toneFilter = engine.createBiquadFilter()
        const toneGain = engine.createGain()

        const variation = (Math.random() - 0.5) * 22
        const basePitch = 220 + variation

        noiseSource.buffer = getNoiseBuffer(engine)
        noiseFilter.type = 'lowpass'
        noiseFilter.frequency.setValueAtTime(2600, now)
        noiseFilter.frequency.exponentialRampToValueAtTime(780, now + 0.36)
        noiseGain.gain.setValueAtTime(0.0001, now)
        noiseGain.gain.linearRampToValueAtTime(0.07 * volumeScale, now + 0.01)
        noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.36)

        tone.type = 'sawtooth'
        tone.frequency.setValueAtTime(basePitch, now)
        tone.frequency.exponentialRampToValueAtTime(Math.max(120, basePitch * 0.58), now + 0.34)
        toneFilter.type = 'lowpass'
        toneFilter.frequency.setValueAtTime(1800, now)
        toneFilter.frequency.exponentialRampToValueAtTime(600, now + 0.34)
        toneGain.gain.setValueAtTime(0.0001, now)
        toneGain.gain.linearRampToValueAtTime(0.085 * volumeScale, now + 0.012)
        toneGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34)

        noiseSource.connect(noiseFilter)
        noiseFilter.connect(noiseGain)
        noiseGain.connect(masterGain)

        tone.connect(toneFilter)
        toneFilter.connect(toneGain)
        toneGain.connect(masterGain)

        noiseSource.start(now)
        tone.start(now)
        noiseSource.stop(now + 0.36)
        tone.stop(now + 0.34)
        return
      }

      const oscillator = engine.createOscillator()
      const gain = engine.createGain()
      const subtleVariation = kind === 'correct' || kind === 'space' || kind === 'backspace'
        ? (Math.random() - 0.5) * 22
        : 0

      const baseFrequency = kind === 'backspace'
        ? 250
        : kind === 'finish'
          ? 890
          : config.frequency

      const finalFrequency = Math.max(120, baseFrequency + subtleVariation)
      const attack = config.attack
      const duration = kind === 'finish' ? 0.09 : config.length
      const baseVolume = kind === 'finish'
        ? volumeScale * 0.15
        : volumeScale * config.gain
      const warmVolume = Math.min(0.18, baseVolume + ((Math.random() - 0.5) * 0.015))

      oscillator.type = config.type
      oscillator.frequency.setValueAtTime(finalFrequency, now)
      oscillator.frequency.exponentialRampToValueAtTime(
        Math.max(90, finalFrequency * 0.48),
        now + duration
      )

      gain.gain.setValueAtTime(0.0001, now)
      gain.gain.linearRampToValueAtTime(warmVolume, now + attack)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

      oscillator.connect(gain)
      gain.connect(masterGain)
      oscillator.start(now)
      oscillator.stop(now + duration)
    } catch { /* Audio is always best-effort and never blocks input. */ }
  }, [settings])
  return { playSound, playKeySound: playSound }
}
