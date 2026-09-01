import React from 'react'
import { Timer, Zap, Target, CheckCircle2 } from 'lucide-react'
import { formatTime } from '../../lib/utils'

export function LiveStatsBar({
  timeLeft,
  currentWpm,
  currentAccuracy,
  correctChars,
  totalTypedChars,
  status,
  showLiveWpm = true,
  showAccuracy = true
}) {
  const isUrgent = timeLeft <= 5 && status === 'running'

  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4">
      {showLiveWpm && (
        <div className="flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3.5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.9)] backdrop-blur-sm">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${isUrgent ? 'bg-red-500/10 text-red-400 animate-pulse' : 'bg-sky-500/10 text-sky-300'}`}>
            <Timer className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Time</p>
            <p className={`mt-1 text-2xl font-bold font-mono tracking-tight transition-all duration-200 ${isUrgent ? 'text-red-400' : 'text-slate-50'}`}>
              {formatTime(timeLeft)}
            </p>
          </div>
        </div>
      )}

      {showAccuracy && (
        <div className="flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3.5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.9)] backdrop-blur-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-300">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Live WPM</p>
            <p className="mt-1 text-2xl font-bold font-mono tracking-tight text-slate-50">
              {currentWpm}
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3.5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.9)] backdrop-blur-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
          <Target className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Accuracy</p>
          <p className="mt-1 text-2xl font-bold font-mono tracking-tight text-slate-50">
            {currentAccuracy}%
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-slate-700/80 bg-slate-900/80 p-3.5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.9)] backdrop-blur-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-300">
          <CheckCircle2 className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">Chars</p>
          <p className="mt-1 text-2xl font-bold font-mono tracking-tight text-slate-50">
            {correctChars}<span className="text-sm font-normal text-slate-400">/{totalTypedChars}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
