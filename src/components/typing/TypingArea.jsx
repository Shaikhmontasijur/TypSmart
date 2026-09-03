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
  handleInput,
  handlePaste,
  handleCompositionStart,
  handleCompositionEnd,
  focusInput
}) {
  const containerRef = useRef(null)
  const activeCharRef = useRef(null)

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
          'relative min-h-[220px] max-h-[290px] overflow-y-auto cursor-text select-none border border-slate-200/70 bg-slate-950/90 p-4 text-left shadow-[0_22px_40px_-26px_rgba(2,6,23,0.9)] transition-all duration-200 typing-text dark:border-slate-800 sm:p-6',
          isFocused
            ? 'border-sky-400/50 ring-2 ring-sky-500/10 shadow-[0_22px_42px_-28px_rgba(56,189,248,0.75)]'
            : 'border-slate-700/80 opacity-95'
        )}
      >
        <textarea
          ref={inputRef}
          defaultValue=""
          onInput={handleInput}
          onChange={() => {}}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          inputMode="text"
          enterKeyHint="done"
          aria-label="Typing test input"
          tabIndex={0}
          rows={1}
          className="absolute left-0 top-0 z-0 h-px w-px resize-none border-0 bg-transparent p-0 opacity-0 outline-none"
        />

        {status === 'idle' && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-1 text-[11px] font-medium tracking-[0.18em] text-sky-200 uppercase dark:text-sky-300">
            <Sparkles className="w-3.5 h-3.5" />
            Press any key to start
          </div>
        )}

        <div
          ref={containerRef}
          className="typing-passage break-words text-slate-200"
        >
          {Array.from(text).map((char, index) => {
            const isTyped = index < userInput.length
            const isCurrent = index === userInput.length
            const isCorrect = isTyped && userInput[index] === char
            const isIncorrect = isTyped && userInput[index] !== char
            const isSpace = char === ' '

            let charClass = 'text-slate-400/90'

            if (isCorrect) {
              charClass =
                'text-emerald-300 bg-emerald-500/8 rounded-[0.12rem]'
            } else if (isIncorrect) {
              charClass =
                'text-red-300 bg-red-500/10 rounded-[0.12rem] underline decoration-red-400 decoration-2 underline-offset-2'
            }

            return (
              <span
                key={index}
                ref={isCurrent ? activeCharRef : null}
                className={cn(
                  'relative inline-block transition-colors duration-100',
                  charClass,
                  isCurrent && 'typing-cursor-container',
                  isSpace && 'min-w-[0.52em]'
                )}
                style={isSpace ? { whiteSpace: 'pre' } : undefined}
              >
                {char}
              </span>
            )
          })}
        </div>

        {!isFocused && status !== 'completed' && (
          <div
            onClick={(e) => {
              e.stopPropagation()
              focusInput()
            }}
            className="absolute bottom-3 right-3 z-10 inline-flex cursor-pointer items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-[11px] font-medium text-slate-200 shadow-sm backdrop-blur-sm"
          >
            <MousePointerClick className="w-3.5 h-3.5 text-sky-400" />
            {status === 'idle'
              ? 'Press any key to start'
              : 'Press any key to resume'}
          </div>
        )}
      </Card>
    </div>
  )
}