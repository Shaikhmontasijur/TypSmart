import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { lessonService } from '../services/lessonService'
import { useLessonEngine } from '../hooks/useLessonEngine'
import { useTypingStats } from '../contexts/TypingStatsContext'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { ProgressBar } from '../components/common/ProgressBar'
import { Modal } from '../components/common/Modal'
import { VirtualKeyboard } from '../components/typing/VirtualKeyboard'
import {
  ArrowLeft,
  RotateCcw,
  CheckCircle2,
  Volume2,
  VolumeX,
  ArrowRight,
  MousePointerClick,
  Sparkles,
  Zap,
  Target,
  Eye,
  EyeOff
} from 'lucide-react'
import { cn } from '../lib/utils'
import confetti from 'canvas-confetti'

export function LessonDetail() {
  const { lessonSlug } = useParams()
  const navigate = useNavigate()

  const [lesson, setLesson] = useState(null)
  const [soundEnabled, setSoundEnabled] = useState(true)
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [showCompletionModal, setShowCompletionModal] = useState(false)
  const [completionResult, setCompletionResult] = useState(null)

  const { recordLessonCompletion } = useTypingStats()

  useEffect(() => {
    async function fetchLesson() {
      const data = await lessonService.getLessonBySlug(lessonSlug)

      if (data) {
        setLesson(data)
      } else {
        navigate('/practice')
      }
    }

    fetchLesson()
  }, [lessonSlug, navigate])

  const handleLessonComplete = async (result) => {
    setCompletionResult(result)
    setShowCompletionModal(true)

    if (lesson) {
      await recordLessonCompletion(
        lesson.id,
        result.wpm,
        result.accuracy
      )
    }

    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 }
      })
    } catch {
      // Ignore confetti errors
    }
  }

  const {
    userInput,
    status,
    isFocused,
    setIsFocused,
    inputRef,
    currentWpm,
    currentAccuracy,
    progressPercent,
    handleKeyDown,
    handleInput,
    handlePaste,
    focusInput,
    resetLesson
  } = useLessonEngine({
    lessonContent: lesson?.content || '',
    soundEnabled,
    onComplete: handleLessonComplete
  })

  // Keep the typing input focused when the lesson loads.
  useEffect(() => {
    if (lesson) {
      const timer = setTimeout(() => {
        focusInput()
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [focusInput, lesson])

  if (!lesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-slate-500">
          Loading lesson curriculum...
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title={`${lesson.title} — Practice Lesson`}
        description={lesson.description}
      />

      {/* Top Navigation */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/practice"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 dark:hover:text-white transition"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Lessons
        </Link>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setShowKeyboard(!showKeyboard)
              setTimeout(() => focusInput(), 50)
            }}
            icon={showKeyboard ? EyeOff : Eye}
          >
            {showKeyboard ? 'Hide Keyboard' : 'Show Keyboard'}
          </Button>

          <button
            type="button"
            onClick={() => {
              setSoundEnabled(!soundEnabled)
              setTimeout(() => focusInput(), 50)
            }}
            className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label={soundEnabled ? 'Disable sound' : 'Enable sound'}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-brand-500" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              resetLesson()
              setTimeout(() => focusInput(), 50)
            }}
            icon={RotateCcw}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Lesson Header Card */}
      <Card className="p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge
                variant={
                  lesson.difficulty === 'advanced'
                    ? 'danger'
                    : lesson.difficulty === 'intermediate'
                      ? 'warning'
                      : 'brand'
                }
                size="sm"
                className="capitalize"
              >
                {lesson.difficulty}
              </Badge>

              <span className="text-xs font-semibold text-slate-400">
                {lesson.category}
              </span>
            </div>

            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              {lesson.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {lesson.description}
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
            <span>Completion Progress</span>
            <span className="font-mono">
              {progressPercent}%
            </span>
          </div>

          <ProgressBar
            progress={progressPercent}
            color="brand"
            height="h-2.5"
          />
        </div>
      </Card>

      {/* Live Lesson Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="p-2 rounded-xl bg-brand-500/10 text-brand-500">
            <Zap className="w-4 h-4" />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase">
              Live WPM
            </p>

            <p className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {currentWpm}
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
            <Target className="w-4 h-4" />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase">
              Accuracy
            </p>

            <p className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {currentAccuracy}%
            </p>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <div>
            <p className="text-[10px] font-semibold text-slate-400 uppercase">
              Typed
            </p>

            <p className="text-xl font-bold font-mono text-slate-900 dark:text-white">
              {userInput.length}
              <span className="text-xs text-slate-400 font-normal">
                /{lesson.content.length}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Lesson Text Surface */}
      <Card
        onClick={focusInput}
        className={cn(
          'relative p-6 sm:p-8 min-h-[220px] cursor-text select-none font-mono text-xl sm:text-2xl leading-relaxed tracking-wide transition-all border-2 mb-6',
          isFocused
            ? 'border-brand-500/60 shadow-lg shadow-brand-500/5 ring-4 ring-brand-500/10'
            : 'border-slate-200 dark:border-slate-800 opacity-80'
        )}
      >
        {/* Mobile + Desktop Native Input */}
        <textarea
          ref={inputRef}
          defaultValue=""
          onInput={handleInput}
          onChange={() => {}}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onTouchStart={() => {
            setTimeout(() => {
              inputRef.current?.focus()
            }, 50)
          }}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect="off"
          autoSave="off"
          inputMode="text"
          enterKeyHint="done"
          spellCheck={false}
          aria-label="Lesson typing input"
          tabIndex={0}
          rows={1}
          className="absolute left-2 top-2 w-10 h-10 opacity-[0.01] z-30 border-0 outline-none bg-transparent text-transparent"
          style={{
            WebkitAppearance: 'none',
            touchAction: 'manipulation'
          }}
        />

        {status === 'idle' && (
          <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-sans font-semibold animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            Type the exercise text below to begin
          </div>
        )}

        <div className="typing-passage break-words">
          {Array.from(lesson.content).map((char, index) => {
            const isTyped = index < userInput.length
            const isCurrent = index === userInput.length
            const isCorrect =
              isTyped && userInput[index] === char
            const isIncorrect =
              isTyped && userInput[index] !== char
            const isSpace = char === ' '

            let charClass =
              'text-slate-400 dark:text-slate-500'

            if (isCorrect) {
              charClass =
                'text-emerald-600 dark:text-emerald-400'
            } else if (isIncorrect) {
              charClass =
                'text-red-500 dark:text-red-400 bg-red-500/10 underline decoration-red-500 decoration-2'
            }

            return (
              <span
                key={index}
                className={cn(
                  'relative inline-block transition-colors duration-75',
                  charClass,
                  isCurrent &&
                    'border-b-2 border-brand-500 text-brand-600 dark:text-brand-300 pb-0.5',
                  isSpace && 'min-w-[0.42em]'
                )}
                style={
                  isSpace
                    ? { whiteSpace: 'pre' }
                    : undefined
                }
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
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs rounded-2xl flex flex-col items-center justify-center text-white z-20 cursor-pointer animate-fade-in"
          >
            <div className="p-3 rounded-2xl bg-white/10 mb-3 animate-bounce">
              <MousePointerClick className="w-6 h-6 text-brand-400" />
            </div>

            <p className="text-base font-bold">
              Tap here to focus
            </p>

            <p className="text-xs text-white/70 mt-1">
              Start typing to begin
            </p>
          </div>
        )}
      </Card>

      {/* Virtual Keyboard */}
      {showKeyboard && (
        <div className="mb-6 animate-fade-in">
          <VirtualKeyboard
            activeKey={
              lesson.content[userInput.length] || ''
            }
          />
        </div>
      )}

      {/* Completion Modal */}
      <Modal
        isOpen={showCompletionModal}
        onClose={() => setShowCompletionModal(false)}
        maxWidth="max-w-lg"
        showClose={true}
      >
        {completionResult && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <Badge
                variant="success"
                size="md"
                className="mb-2"
              >
                Lesson Mastered
              </Badge>

              <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Great Work!
              </h2>

              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                You completed "{lesson.title}". Your progress has been recorded.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
              <div className="p-2">
                <p className="text-xs uppercase font-semibold text-slate-400">
                  Velocity
                </p>

                <p className="text-3xl font-black font-mono text-brand-600 dark:text-brand-400 mt-1">
                  {completionResult.wpm}
                  <span className="text-sm font-normal">
                    {' '}WPM
                  </span>
                </p>
              </div>

              <div className="p-2">
                <p className="text-xs uppercase font-semibold text-slate-400">
                  Accuracy
                </p>

                <p className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                  {completionResult.accuracy}%
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowCompletionModal(false)
                  resetLesson()

                  setTimeout(() => {
                    focusInput()
                  }, 100)
                }}
                icon={RotateCcw}
                className="w-full"
              >
                Practice Again
              </Button>

              <Link
                to="/practice"
                className="w-full"
              >
                <Button
                  variant="primary"
                  icon={ArrowRight}
                  className="w-full"
                >
                  All Lessons
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}