import React, { createContext, useContext, useEffect, useState } from 'react'

const SETTINGS_KEY = 'typeflow_settings'
const defaults = {
  duration: 60, difficulty: 'easy', caretStyle: 'line', autoRestart: false,
  showLiveWpm: true, showAccuracy: true, virtualKeyboard: false, fingerGuide: true,
  keyHighlight: true, keyPressAnimation: true, soundEnabled: true, volume: 68,
  soundPack: 'mechanical', errorSound: true, correctSound: true, spacebarSound: true,
  backspaceSound: true, finishSound: true, uiClickSound: false,
  compactMode: false, reduceAnimations: false, highContrast: false, largerText: false,
}
const SettingsContext = createContext()

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try { return { ...defaults, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') } } catch { return defaults }
  })

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
    const root = document.documentElement
    root.classList.toggle('compact-mode', settings.compactMode)
    root.classList.toggle('reduce-motion', settings.reduceAnimations)
    root.classList.toggle('high-contrast', settings.highContrast)
    root.classList.toggle('larger-text', settings.largerText)
  }, [settings])

  const updateSettings = (changes) => setSettings(previous => ({ ...previous, ...changes }))
  const resetSettings = () => setSettings(defaults)
  return <SettingsContext.Provider value={{ settings, updateSettings, resetSettings }}>{children}</SettingsContext.Provider>
}

export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) throw new Error('useSettings must be used within a SettingsProvider')
  return context
}
