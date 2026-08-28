import React, { useEffect, useRef } from 'react'
import { MousePointerClick, Sparkles } from 'lucide-react'
import { Card } from '../common/Card'
import { cn } from '../../lib/utils'

export function TypingArea({
  text,
  userInput,
  status,
  isFocused,
  setIsFocused,
  inputRef,
  handleKeyDown,
  handlePaste,
  focusInput
}) {
  const containerRef = useRef(null)
  const activeCharRef = useRef(null)

  // Keep active character in view
  useEffect(() => {
    if (activeCharRef.current && containerRef.current) {
      const charEl = activeCharRef.current
      const containerEl = containerRef.current
      
      const charTop = charEl.offsetTop - containerEl.offsetTop
      const containerHeight = containerEl.clientHeight

      if (charTop > containerHeight - 60) {
        containerEl.scrollTop = charTop - 60
      } else if (charTop < 40) {
        containerEl.scrollTop = 0
      }
    }
  }, [userInput.length])

  return (
    <div className="relative">
      <Card
        onClick={focusInput}
        className={cn(
          'relative p-6 sm:p-8 min-h-[220px] max-h-[280px] overflow-y-auto cursor-text select-none font-mono text-[clamp(1.1rem,2.25vw,1.55rem)] leading-[1.8] tracking-normal transition-all border',
          isFocused
            ? 'border-brand-500/50 shadow-lg shadow-brand-500/5 ring-4 ring-brand-500/10'
            : 'border-slate-200 dark:border-slate-800'
        )}
      >
        {/* Hidden Input field for keyboard capture */}
        <textarea
          ref={inputRef}
          value=""
          onChange={() => {}}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck="false"
          className="absolute opacity-0 pointer-events-none w-0 h-0 p-0 m-0 -top-9999px"
          aria-label="Typing test input"
        />

        {/* Start hint badge */}
        {status === 'idle' && (
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-sans font-semibold animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Start typing to begin the test
          </div>
        )}

        {/* Render characters */}
        <div ref={containerRef} className="typing-passage break-words" aria-live="polite">
          {text.split('').map((char, index) => {
            const isTyped = index < userInput.length
            const isCurrent = index === userInput.length
            const isCorrect = isTyped && userInput[index] === char
            const isIncorrect = isTyped && userInput[index] !== char

            let charClass = 'text-slate-500 dark:text-slate-400'

            if (isCorrect) {
              charClass = 'text-emerald-600 dark:text-emerald-400 font-medium'
            } else if (isIncorrect) {
              charClass = 'text-red-500 dark:text-red-400 bg-red-500/20 underline decoration-red-500 decoration-2'
            }

            return (
              <span
                key={index}
                ref={isCurrent ? activeCharRef : null}
                className={cn(
                  'relative inline-block min-w-[0.28em] transition-colors duration-75',
                  charClass,
                  isCurrent && 'typing-current text-slate-800 dark:text-white font-medium'
                )}
              >
                {char === ' ' ? (
                  isIncorrect ? (
                    <span aria-label="incorrect space" className="text-red-400 font-sans">·</span>
                  ) : (
                    <span aria-label={isCurrent ? 'next character: space' : undefined} className="inline-block w-[0.45em]" />
                  )
                ) : (
                  char
                )}
              </span>
            )
          })}
        </div>

        {/* Focus status remains deliberately lightweight so the passage stays readable. */}
        {!isFocused && status !== 'completed' && (
          <div 
            onClick={focusInput}
            className="absolute right-4 top-4 z-20 cursor-pointer rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm transition hover:border-brand-400 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
          >
            <span className="flex items-center gap-1.5"><MousePointerClick className="h-3.5 w-3.5" /> Click to continue</span>
          </div>
        )}
      </Card>
    </div>
  )
}
