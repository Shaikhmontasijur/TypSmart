import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useTypingStats } from '../contexts/TypingStatsContext'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Button } from '../components/common/Button'
import { EmptyState } from '../components/common/EmptyState'
import { formatDate } from '../lib/utils'
import { 
  History as HistoryIcon, 
  ArrowUpDown, 
  Filter, 
  Keyboard, 
  Calendar, 
  Check, 
  X,
  Zap,
  Target
} from 'lucide-react'

export function History() {
  const { history } = useTypingStats()
  const [filterDifficulty, setFilterDifficulty] = useState('all')
  const [filterDuration, setFilterDuration] = useState('all')
  const [sortBy, setSortBy] = useState('date_desc') // 'date_desc' | 'date_asc' | 'wpm_desc' | 'accuracy_desc'

  const filteredHistory = useMemo(() => {
    let result = [...history]

    if (filterDifficulty !== 'all') {
      result = result.filter(item => item.difficulty === filterDifficulty)
    }

    if (filterDuration !== 'all') {
      result = result.filter(item => Number(item.duration) === Number(filterDuration))
    }

    result.sort((a, b) => {
      if (sortBy === 'date_desc') {
        return new Date(b.completed_at || b.created_at) - new Date(a.completed_at || a.created_at)
      }
      if (sortBy === 'date_asc') {
        return new Date(a.completed_at || a.created_at) - new Date(b.completed_at || b.created_at)
      }
      if (sortBy === 'wpm_desc') {
        return Number(b.wpm) - Number(a.wpm)
      }
      if (sortBy === 'accuracy_desc') {
        return Number(b.accuracy) - Number(a.accuracy)
      }
      return 0
    })

    return result
  }, [history, filterDifficulty, filterDuration, sortBy])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title="Test History & Keystroke Logs"
        description="Review and filter all your completed speed tests, analyze accuracy breakdowns and track personal bests."
      />

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Typing Test History
            </h1>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 font-bold">
              {history.length} Total Logs
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Complete chronological record of your speed tests and key metrics.
          </p>
        </div>

        <Link to="/typing-test">
          <Button variant="primary" icon={Keyboard}>
            New Typing Test
          </Button>
        </Link>
      </div>

      {history.length === 0 ? (
        <EmptyState
          title="No test history found"
          description="Complete your first typing test to start logging your speed and accuracy records."
          actionLabel="Take a Test Now"
          onAction={() => window.location.assign('/typing-test')}
        />
      ) : (
        <div className="space-y-6">
          {/* Filter & Sort Controls Card */}
          <Card className="p-4 flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900">
            <div className="flex flex-wrap items-center gap-3">
              {/* Difficulty filter */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <Filter className="w-3.5 h-3.5" />
                <span>Difficulty:</span>
                <select
                  value={filterDifficulty}
                  onChange={(e) => setFilterDifficulty(e.target.value)}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg px-2.5 py-1.5 text-xs border-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  <option value="all">All Difficulties</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              {/* Duration filter */}
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                <span>Time:</span>
                <select
                  value={filterDuration}
                  onChange={(e) => setFilterDuration(e.target.value)}
                  className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg px-2.5 py-1.5 text-xs border-none focus:ring-2 focus:ring-brand-500 font-medium"
                >
                  <option value="all">All Durations</option>
                  <option value="15">15s</option>
                  <option value="30">30s</option>
                  <option value="60">60s</option>
                  <option value="120">120s</option>
                </select>
              </div>
            </div>

            {/* Sort by */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 ml-auto">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg px-2.5 py-1.5 text-xs border-none focus:ring-2 focus:ring-brand-500 font-medium"
              >
                <option value="date_desc">Newest First</option>
                <option value="date_asc">Oldest First</option>
                <option value="wpm_desc">Highest WPM</option>
                <option value="accuracy_desc">Highest Accuracy</option>
              </select>
            </div>
          </Card>

          {/* Desktop Table View */}
          <Card className="hidden sm:block overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-900/80 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                  <tr>
                    <th className="py-3.5 px-6">Date</th>
                    <th className="py-3.5 px-6">Mode</th>
                    <th className="py-3.5 px-6">Duration</th>
                    <th className="py-3.5 px-6 text-right">Speed</th>
                    <th className="py-3.5 px-6 text-right">Accuracy</th>
                    <th className="py-3.5 px-6 text-right">Keystrokes (Correct/Total)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {filteredHistory.map((test, index) => (
                    <tr
                      key={test.id || index}
                      className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                    >
                      <td className="py-4 px-6 text-slate-600 dark:text-slate-300 font-medium">
                        {formatDate(test.completed_at || test.created_at)}
                      </td>
                      <td className="py-4 px-6">
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
                      </td>
                      <td className="py-4 px-6 text-slate-500 font-mono">
                        {test.duration}s
                      </td>
                      <td className="py-4 px-6 text-right font-mono font-bold text-base text-brand-600 dark:text-brand-400">
                        {Math.round(test.wpm)} WPM
                      </td>
                      <td className="py-4 px-6 text-right font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                        {test.accuracy}%
                      </td>
                      <td className="py-4 px-6 text-right font-mono text-xs text-slate-500">
                        <span className="text-emerald-500 font-bold">{test.correct_chars || test.correctChars || 0}</span>
                        {' / '}
                        <span>{test.total_chars || test.totalChars || 0}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Mobile Card List View */}
          <div className="sm:hidden space-y-3">
            {filteredHistory.map((test, index) => (
              <Card key={test.id || index} className="p-4 space-y-3">
                <div className="flex items-center justify-between">
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
                    {test.difficulty} • {test.duration}s
                  </Badge>
                  <span className="text-xs text-slate-400">
                    {formatDate(test.completed_at || test.created_at)}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="text-2xl font-black font-mono text-brand-600 dark:text-brand-400">
                      {Math.round(test.wpm)}
                    </span>
                    <span className="text-xs text-slate-400 ml-1">WPM</span>
                  </div>

                  <div className="text-right">
                    <span className="text-lg font-bold font-mono text-emerald-600 dark:text-emerald-400">
                      {test.accuracy}%
                    </span>
                    <p className="text-[10px] text-slate-400">
                      {test.correct_chars || test.correctChars || 0} correct keys
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
