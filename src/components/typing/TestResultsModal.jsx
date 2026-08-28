import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import { Trophy, RotateCcw, Plus, History, Check, X, Zap, Target, Award } from 'lucide-react'
import { Modal } from '../common/Modal'
import { Button } from '../common/Button'
import { Badge } from '../common/Badge'
import { getPerformanceBadge } from '../../lib/utils'

export function TestResultsModal({
  isOpen,
  results,
  onTryAgain,
  onNewTest,
  onViewCertificate,
  onClose
}) {
  useEffect(() => {
    if (isOpen && results) {
      // Fire confetti if WPM is solid
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 }
        })
      } catch {
        // Ignore if confetti not supported
      }
    }
  }, [isOpen, results])

  if (!results) return null

  const { title, color, message } = getPerformanceBadge(results.wpm, results.accuracy)

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-xl" showClose={true}>
      <div className="text-center space-y-6">
        {/* Header Badge */}
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-3 shadow-inner">
            <Trophy className="w-8 h-8 text-brand-500" />
          </div>
          <Badge variant={results.accuracy >= 95 ? 'success' : 'brand'} size="md" className="mb-2">
            {title}
          </Badge>
          <h2 className="text-2xl font-black text-slate-900 dark:text-white">
            Test Completed!
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
            {message}
          </p>
        </div>

        {/* Primary Scores Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
          <div className="p-3">
            <p className="text-xs uppercase font-semibold text-slate-400">WPM</p>
            <p className="text-3xl font-black font-mono text-brand-600 dark:text-brand-400 mt-1">
              {results.wpm}
            </p>
          </div>

          <div className="p-3">
            <p className="text-xs uppercase font-semibold text-slate-400">Accuracy</p>
            <p className="text-3xl font-black font-mono text-emerald-600 dark:text-emerald-400 mt-1">
              {results.accuracy}%
            </p>
          </div>

          <div className="p-3">
            <p className="text-xs uppercase font-semibold text-slate-400">Correct</p>
            <p className="text-3xl font-black font-mono text-slate-800 dark:text-slate-200 mt-1 flex items-center justify-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" />
              {results.correctChars}
            </p>
          </div>

          <div className="p-3">
            <p className="text-xs uppercase font-semibold text-slate-400">Incorrect</p>
            <p className="text-3xl font-black font-mono text-slate-800 dark:text-slate-200 mt-1 flex items-center justify-center gap-1">
              <X className="w-4 h-4 text-red-500" />
              {results.incorrectChars}
            </p>
          </div>
        </div>

        {/* Test details tag */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <span>Mode: <strong className="text-slate-700 dark:text-slate-200 capitalize">{results.difficulty}</strong></span>
          <span>•</span>
          <span>Duration: <strong className="text-slate-700 dark:text-slate-200">{results.duration}s</strong></span>
          <span>•</span>
          <span>Total Keys: <strong className="text-slate-700 dark:text-slate-200">{results.totalChars}</strong></span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <Button
            variant="primary"
            size="md"
            onClick={onTryAgain}
            icon={RotateCcw}
            className="w-full"
          >
            TRY AGAIN
          </Button>

          <Button
            variant="outline"
            size="md"
            onClick={onNewTest}
            icon={Plus}
            className="w-full"
          >
            NEW TEST
          </Button>

          <Link to="/history" className="w-full">
            <Button
              variant="secondary"
              size="md"
              icon={History}
              className="w-full"
            >
              VIEW HISTORY
            </Button>
          </Link>
        </div>

        {onViewCertificate && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onViewCertificate}
              className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5"
            >
              <Award className="w-4 h-4" /> View Verified Speed Certificate
            </button>
          </div>
        )}
      </div>
    </Modal>
  )
}
