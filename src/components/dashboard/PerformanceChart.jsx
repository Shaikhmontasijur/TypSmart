import React from 'react'
import { Card } from '../common/Card'
import { TrendingUp, Activity } from 'lucide-react'

export function PerformanceChart({ tests = [] }) {
  if (!tests || tests.length === 0) {
    return null
  }

  // Reverse so older tests are on the left, newest on the right (up to 12 data points)
  const chartData = [...tests].reverse().slice(-12)

  const maxWpm = Math.max(...chartData.map(d => Number(d.wpm) || 0), 100)

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-brand-500/10 text-brand-500">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">WPM Progression</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Velocity curve across your recent sessions</p>
          </div>
        </div>
        <span className="text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-500/10 px-2.5 py-1 rounded-full">
          Last {chartData.length} Tests
        </span>
      </div>

      {/* Bar visual chart */}
      <div className="h-44 flex items-end gap-2 sm:gap-4 pt-4 pb-2 border-b border-slate-200 dark:border-slate-800">
        {chartData.map((test, index) => {
          const wpm = Number(test.wpm) || 0
          const heightPercent = Math.max(12, Math.round((wpm / maxWpm) * 100))
          const accuracy = Number(test.accuracy) || 0

          return (
            <div key={test.id || index} className="flex-1 flex flex-col items-center gap-2 group relative">
              {/* Tooltip on hover */}
              <div className="absolute -top-12 bg-slate-900 dark:bg-slate-800 text-white text-[11px] rounded-lg py-1 px-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity z-20 whitespace-nowrap shadow-md">
                <p className="font-bold">{wpm} WPM • {accuracy}% Acc</p>
                <p className="text-[9px] text-slate-400">{test.difficulty} • {test.duration}s</p>
              </div>

              {/* Bar */}
              <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg overflow-hidden h-36 flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-brand-600 to-brand-400 group-hover:from-brand-500 group-hover:to-accent-400 transition-all rounded-t-lg relative"
                  style={{ height: `${heightPercent}%` }}
                >
                  {wpm >= 60 && (
                    <div className="w-1.5 h-1.5 rounded-full bg-white/80 mx-auto mt-1" />
                  )}
                </div>
              </div>

              {/* Score label below */}
              <span className="text-[11px] font-mono font-bold text-slate-600 dark:text-slate-400 group-hover:text-brand-500">
                {wpm}
              </span>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2 px-1">
        <span>Earlier</span>
        <span>Latest Test</span>
      </div>
    </Card>
  )
}
