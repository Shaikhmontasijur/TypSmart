import React from 'react'
import { cn } from '../../lib/utils'

export function VirtualKeyboard({ activeKey = '', className = '', showFingerGuide = true, keyHighlight = true, keyPressAnimation = true }) {
  // Normalize active key
  const normalizedKey = activeKey.toLowerCase()

  const keyboardRows = [
    [
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
    if (!keyHighlight || !activeKey) return false
    if (key.label === ' ' && activeKey === ' ') return true
    if (key.label.toLowerCase() === normalizedKey) return true
    if (key.shift && key.shift === activeKey) return true
    return false
  }

  return (
    <div className={cn('overflow-x-auto rounded-2xl border border-slate-700/80 bg-slate-900/80 p-4 shadow-[0_18px_35px_-24px_rgba(15,23,42,0.75)] backdrop-blur-sm sm:p-5', className)}>
      <div className="flex min-w-[560px] flex-col items-center gap-1.5">
        {keyboardRows.map((row, rIdx) => (
          <div key={rIdx} className="flex gap-1.5 sm:gap-1.5">
            {row.map((key, kIdx) => {
              const active = isKeyActive(key)
              return (
                <div
                  key={kIdx}
                  className={cn(
                    'relative flex h-9 select-none flex-col items-center justify-center rounded-xl border font-mono text-[11px] font-bold transition-all duration-100 sm:h-10',
                    key.width,
                    active
                      ? `z-10 border-sky-400 bg-sky-500 text-white shadow-[0_12px_22px_-16px_rgba(56,189,248,0.9)] ${keyPressAnimation ? 'keyboard-key-pressed' : ''}`
                      : 'border-slate-700 bg-slate-800/80 text-slate-200',
                    key.home && !active && 'border-b-sky-500/40'
                  )}
                >
                  <span>{key.displayLabel || key.label}</span>
                  {key.bump && (
                    <span className="mt-0.5 h-0.5 w-2 rounded-full bg-slate-400/80" />
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      {showFingerGuide && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 border-t border-slate-700/80 pt-3 text-[11px] text-slate-400">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">Finger Guide</span>
          <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-pink-400" /> Pinky</span>
          <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-purple-400" /> Ring</span>
          <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-blue-400" /> Middle</span>
          <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Index</span>
          <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /> Thumb</span>
        </div>
      )}
    </div>
  )
}
