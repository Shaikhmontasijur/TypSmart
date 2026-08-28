import React from 'react'
import { Timer, Zap, Target, CheckCircle2 } from 'lucide-react'
import { formatTime } from '../../lib/utils'

export function LiveStatsBar({
  timeLeft,
  currentWpm,
  currentAccuracy,
  correctChars,
  totalTypedChars,
  status
}) {
  const isUrgent = timeLeft <= 5 && status === 'running'

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {/* Time Remaining */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
        <div className={`p-2.5 rounded-xl ${isUrgent ? 'bg-red-500/10 text-red-500 animate-pulse' : 'bg-brand-500/10 text-brand-500'}`}>
          <Timer className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Time</p>
          <p className={`text-2xl font-bold font-mono ${isUrgent ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>
            {formatTime(timeLeft)}
          </p>
        </div>
      </div>

      {/* Live WPM */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-accent-500/10 text-accent-500">
          <Zap className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Live WPM</p>
          <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {currentWpm}
          </p>
        </div>
      </div>

      {/* Accuracy */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500">
          <Target className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Accuracy</p>
          <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {currentAccuracy}%
          </p>
        </div>
      </div>

      {/* Keystrokes */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Characters</p>
          <p className="text-2xl font-bold font-mono text-slate-900 dark:text-white">
            {correctChars}<span className="text-sm font-normal text-slate-400">/{totalTypedChars}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
