import { useCallback, useRef } from 'react'

export function useSound() {
  const audioCtxRef = useRef(null)

  const getAudioContext = () => {
    if (!audioCtxRef.current && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx()
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume()
    }
    return audioCtxRef.current
  }

  const playKeySound = useCallback((isError = false) => {
    try {
      const ctx = getAudioContext()
      if (!ctx) return

      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      if (isError) {
        // Low error buzz
        osc.type = 'sawtooth'
        osc.frequency.setValueAtTime(140, now)
        osc.frequency.exponentialRampToValueAtTime(80, now + 0.08)
        gain.gain.setValueAtTime(0.08, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08)
        osc.start(now)
        osc.stop(now + 0.08)
      } else {
        // Crisp tactile mechanical click
        osc.type = 'triangle'
        osc.frequency.setValueAtTime(600 + Math.random() * 200, now)
        osc.frequency.exponentialRampToValueAtTime(120, now + 0.035)
        gain.gain.setValueAtTime(0.05, now)
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035)
        osc.start(now)
        osc.stop(now + 0.035)
      }
    } catch {
      // Audio playback silently ignored if blocked by browser policy
    }
  }, [])

  return { playKeySound }
}
