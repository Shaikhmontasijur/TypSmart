import React from 'react'
import { cn } from '../../lib/utils'

export function VirtualKeyboard({ activeKey = '', pressedKey = { key: '', sequence: 0 }, className = '' }) {
  // Normalize active key
  const normalizedKey = activeKey.toLowerCase()
  const normalizedPressedKey = pressedKey.key.toLowerCase()
  const requiresShift = activeKey.length === 1 && activeKey !== activeKey.toLowerCase()

  const keyboardRows = [
    [
      { label: 'Esc', finger: 'lp', width: 'w-10 sm:w-12' },
      { label: '`', shift: '~', finger: 'lp', width: 'w-8 sm:w-10' },
      { label: '1', shift: '!', finger: 'lp', width: 'w-8 sm:w-10' },
      { label: '2', shift: '@', finger: 'lr', width: 'w-8 sm:w-10' },
      { label: '3', shift: '#', finger: 'lm', width: 'w-8 sm:w-10' },
      { label: '4', shift: '$', finger: 'li', width: 'w-8 sm:w-10' },
      { label: '5', shift: '%', finger: 'li', width: 'w-8 sm:w-10' },
      { label: '6', shift: '^', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: '7', shift: '&', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: '8', shift: '*', finger: 'rm', width: 'w-8 sm:w-10' },
      { label: '9', shift: '(', finger: 'rr', width: 'w-8 sm:w-10' },
      { label: '0', shift: ')', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: '-', shift: '_', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: '=', shift: '+', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: 'Backspace', finger: 'rp', width: 'w-14 sm:w-20' },
    ],
    [
      { label: 'Tab', finger: 'lp', width: 'w-12 sm:w-14' },
      { label: 'q', shift: 'Q', finger: 'lp', width: 'w-8 sm:w-10' },
      { label: 'w', shift: 'W', finger: 'lr', width: 'w-8 sm:w-10' },
      { label: 'e', shift: 'E', finger: 'lm', width: 'w-8 sm:w-10' },
      { label: 'r', shift: 'R', finger: 'li', width: 'w-8 sm:w-10' },
      { label: 't', shift: 'T', finger: 'li', width: 'w-8 sm:w-10' },
      { label: 'y', shift: 'Y', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: 'u', shift: 'U', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: 'i', shift: 'I', finger: 'rm', width: 'w-8 sm:w-10' },
      { label: 'o', shift: 'O', finger: 'rr', width: 'w-8 sm:w-10' },
      { label: 'p', shift: 'P', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: '[', shift: '{', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: ']', shift: '}', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: '\\', shift: '|', finger: 'rp', width: 'w-10 sm:w-12' },
    ],
    [
      { label: 'Caps', finger: 'lp', width: 'w-14 sm:w-16' },
      { label: 'a', shift: 'A', finger: 'lp', width: 'w-8 sm:w-10', home: true },
      { label: 's', shift: 'S', finger: 'lr', width: 'w-8 sm:w-10', home: true },
      { label: 'd', shift: 'D', finger: 'lm', width: 'w-8 sm:w-10', home: true },
      { label: 'f', shift: 'F', finger: 'li', width: 'w-8 sm:w-10', home: true, bump: true },
      { label: 'g', shift: 'G', finger: 'li', width: 'w-8 sm:w-10' },
      { label: 'h', shift: 'H', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: 'j', shift: 'J', finger: 'ri', width: 'w-8 sm:w-10', home: true, bump: true },
      { label: 'k', shift: 'K', finger: 'rm', width: 'w-8 sm:w-10', home: true },
      { label: 'l', shift: 'L', finger: 'rr', width: 'w-8 sm:w-10', home: true },
      { label: ';', shift: ':', finger: 'rp', width: 'w-8 sm:w-10', home: true },
      { label: "'", shift: '"', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: 'Enter', finger: 'rp', width: 'w-16 sm:w-20' },
    ],
    [
      { label: 'Shift', finger: 'lp', width: 'w-16 sm:w-20' },
      { label: 'z', shift: 'Z', finger: 'lp', width: 'w-8 sm:w-10' },
      { label: 'x', shift: 'X', finger: 'lr', width: 'w-8 sm:w-10' },
      { label: 'c', shift: 'C', finger: 'lm', width: 'w-8 sm:w-10' },
      { label: 'v', shift: 'V', finger: 'li', width: 'w-8 sm:w-10' },
      { label: 'b', shift: 'B', finger: 'li', width: 'w-8 sm:w-10' },
      { label: 'n', shift: 'N', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: 'm', shift: 'M', finger: 'ri', width: 'w-8 sm:w-10' },
      { label: ',', shift: '<', finger: 'rm', width: 'w-8 sm:w-10' },
      { label: '.', shift: '>', finger: 'rr', width: 'w-8 sm:w-10' },
      { label: '/', shift: '?', finger: 'rp', width: 'w-8 sm:w-10' },
      { label: 'Shift', finger: 'rp', width: 'w-16 sm:w-20' },
    ],
    [
      { label: 'Ctrl', finger: 'lp', width: 'w-12 sm:w-14' },
      { label: 'Alt', finger: 'lp', width: 'w-10 sm:w-12' },
      { label: ' ', displayLabel: 'Space', finger: 'th', width: 'w-48 sm:w-72' },
      { label: 'Alt', finger: 'rp', width: 'w-10 sm:w-12' },
      { label: 'Ctrl', finger: 'rp', width: 'w-12 sm:w-14' },
    ]
  ]

  const fingerColorMap = {
    lp: 'border-pink-500/30 text-pink-700 dark:text-pink-400',
    lr: 'border-purple-500/30 text-purple-700 dark:text-purple-400',
    lm: 'border-blue-500/30 text-blue-700 dark:text-blue-400',
    li: 'border-emerald-500/30 text-emerald-700 dark:text-emerald-400',
    ri: 'border-emerald-500/30 text-emerald-700 dark:text-emerald-400',
    rm: 'border-blue-500/30 text-blue-700 dark:text-blue-400',
    rr: 'border-purple-500/30 text-purple-700 dark:text-purple-400',
    rp: 'border-pink-500/30 text-pink-700 dark:text-pink-400',
    th: 'border-amber-500/30 text-amber-700 dark:text-amber-400',
  }

  const isKeyActive = (key) => {
    if (!activeKey) return false
    if (key.label === ' ' && activeKey === ' ') return true
    if (key.label.toLowerCase() === normalizedKey) return true
    if (key.shift && key.shift === activeKey) return true
    return false
  }

  const isKeyPressed = (key) => {
    if (!pressedKey.key) return false
    if (key.label === ' ' && pressedKey.key === ' ') return true
    return key.label.toLowerCase() === normalizedPressedKey
  }

  return (
    <div className={cn('p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm overflow-x-auto', className)}>
      <div className="flex flex-col items-center gap-1.5 min-w-[620px]">
        {keyboardRows.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-1 sm:gap-1.5">
            {row.map((key, kIdx) => {
              const active = isKeyActive(key) || (requiresShift && key.label === 'Shift')
              const pressed = isKeyPressed(key)
              return (
                <div
                  key={`${rIdx}-${kIdx}-${pressed ? pressedKey.sequence : 0}`}
                  className={cn(
                    'h-10 sm:h-12 rounded-xl flex flex-col items-center justify-center font-mono text-xs font-bold transition-all duration-100 select-none relative border',
                    key.width,
                    active
                      ? 'bg-brand-500 text-white border-brand-400 scale-105 shadow-md shadow-brand-500/30 z-10'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700/80',
                    pressed && 'keyboard-key-pressed',
                    key.home && !active && 'border-b-2 border-b-brand-500/50'
                  )}
                >
                  <span key={pressed ? pressedKey.sequence : undefined}>{key.displayLabel || key.label}</span>
                  {key.bump && (
                    <span className="w-2 h-0.5 bg-slate-400 dark:text-slate-500 rounded-full mt-0.5" />
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Finger Legend */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-center gap-3 text-[11px] text-slate-500">
        <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">Finger Guide:</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-pink-400" /> Pinky</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-400" /> Ring</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-blue-400" /> Middle</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Index</span>
        <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Thumb (Space)</span>
      </div>
    </div>
  )
}
