import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../common/Card'
import { Badge } from '../common/Badge'
import { formatDate } from '../../lib/utils'
import { ArrowRight, History } from 'lucide-react'

export function RecentTestsList({ tests = [] }) {
  if (!tests || tests.length === 0) {
    return null
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
            <History className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Recent Tests</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Latest completed typing sessions</p>
          </div>
        </div>

        <Link
          to="/history"
          className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-500 flex items-center gap-1"
        >
          View all <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
        {tests.slice(0, 5).map((test, index) => (
          <div
            key={test.id || index}
            className="py-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-xl px-2 -mx-2 transition"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono font-bold text-slate-900 dark:text-white text-sm">
                {Math.round(test.wpm)}
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {test.duration}s Speed Test
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formatDate(test.completed_at || test.created_at)}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-sm font-bold font-mono text-emerald-600 dark:text-emerald-400">
                  {test.accuracy}%
                </span>
                <p className="text-[10px] text-slate-400">accuracy</p>
              </div>

              <Badge
                variant={
                  test.difficulty === 'hard'
                    ? 'danger'
                    : test.difficulty === 'medium'
                    ? 'warning'
                    : 'brand'
                }
                size="sm"
                className="capitalize"
              >
                {test.difficulty}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
