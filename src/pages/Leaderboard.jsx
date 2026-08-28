import React, { useState, useEffect } from 'react'
import { typingService } from '../services/typingService'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Tabs } from '../components/common/Tabs'
import { formatDate } from '../lib/utils'
import { Trophy, Medal, Crown, Flame, Calendar, Award, User, Sparkles } from 'lucide-react'

export function Leaderboard() {
  const [timeframe, setTimeframe] = useState('all')
  const [leaderboardData, setLeaderboardData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchLeaderboard() {
      setLoading(true)
      const data = await typingService.getLeaderboard(timeframe)
      setLeaderboardData(data)
      setLoading(false)
    }
    fetchLeaderboard()
  }, [timeframe])

  const timeframeTabs = [
    { id: 'daily', label: 'Daily' },
    { id: 'weekly', label: 'Weekly' },
    { id: 'monthly', label: 'Monthly' },
    { id: 'all', label: 'All Time' },
  ]

  const getRankBadge = (rank) => {
    if (rank === 1) {
      return (
        <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-500 flex items-center justify-center font-black">
          <Crown className="w-4 h-4 text-amber-500 fill-current" />
        </div>
      )
    }
    if (rank === 2) {
      return (
        <div className="w-8 h-8 rounded-xl bg-slate-300/20 text-slate-400 dark:text-slate-200 flex items-center justify-center font-black">
          <Medal className="w-4 h-4" />
        </div>
      )
    }
    if (rank === 3) {
      return (
        <div className="w-8 h-8 rounded-xl bg-amber-700/20 text-amber-700 dark:text-amber-500 flex items-center justify-center font-black">
          <Medal className="w-4 h-4" />
        </div>
      )
    }
    return (
      <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 flex items-center justify-center font-bold text-xs">
        #{rank}
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <SEOHead
        title="Typing Speed Leaderboard — Global Rankings"
        description="Check real-time global typing speed rankings across daily, weekly, monthly and all-time benchmarks."
      />

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Global Leaderboard
            </h1>
            <Badge variant="brand" size="sm">
              Verified
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Live competitive benchmarks. Complete tests to submit your personal highscores to the global board.
          </p>
        </div>

        {/* Timeframe Selector */}
        <div>
          <Tabs
            tabs={timeframeTabs}
            activeTab={timeframe}
            onChange={setTimeframe}
          />
        </div>
      </div>

      {/* Top 3 Podium Highlights on larger screens */}
      {!loading && leaderboardData.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* #2 Rank */}
          <Card className="p-6 text-center order-2 md:order-1 flex flex-col items-center justify-center relative border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center mb-3 font-bold">
              2nd
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">{leaderboardData[1].displayName}</h3>
            <p className="text-xs text-slate-400 mb-3">@{leaderboardData[1].username}</p>
            <div className="font-mono text-3xl font-black text-brand-600 dark:text-brand-400">
              {leaderboardData[1].wpm} <span className="text-xs font-normal">WPM</span>
            </div>
            <p className="text-xs font-bold text-emerald-500 mt-1">{leaderboardData[1].accuracy}% Accuracy</p>
          </Card>

          {/* #1 Rank (Center, elevated) */}
          <Card className="p-8 text-center order-1 md:order-2 flex flex-col items-center justify-center relative border-2 border-amber-500/40 bg-gradient-to-b from-amber-500/5 to-transparent shadow-xl">
            <div className="w-16 h-16 rounded-3xl bg-amber-400 text-slate-950 flex items-center justify-center mb-3 font-black text-xl shadow-lg shadow-amber-400/20">
              <Crown className="w-8 h-8 fill-current" />
            </div>
            <Badge variant="warning" size="sm" className="mb-1 font-bold">CHAMPION</Badge>
            <h3 className="font-black text-lg text-slate-900 dark:text-white">{leaderboardData[0].displayName}</h3>
            <p className="text-xs text-slate-400 mb-4">@{leaderboardData[0].username}</p>
            <div className="font-mono text-4xl font-black text-amber-500">
              {leaderboardData[0].wpm} <span className="text-sm font-normal">WPM</span>
            </div>
            <p className="text-xs font-bold text-emerald-500 mt-1">{leaderboardData[0].accuracy}% Accuracy</p>
          </Card>

          {/* #3 Rank */}
          <Card className="p-6 text-center order-3 flex flex-col items-center justify-center relative border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-amber-700/20 text-amber-700 dark:text-amber-500 flex items-center justify-center mb-3 font-bold">
              3rd
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">{leaderboardData[2].displayName}</h3>
            <p className="text-xs text-slate-400 mb-3">@{leaderboardData[2].username}</p>
            <div className="font-mono text-3xl font-black text-brand-600 dark:text-brand-400">
              {leaderboardData[2].wpm} <span className="text-xs font-normal">WPM</span>
            </div>
            <p className="text-xs font-bold text-emerald-500 mt-1">{leaderboardData[2].accuracy}% Accuracy</p>
          </Card>
        </div>
      )}

      {/* Leaderboard Table / Cards */}
      <Card className="overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500">Loading leaderboard rankings...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900/80 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 w-16">Rank</th>
                  <th className="py-3.5 px-4 sm:px-6">Typist</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Speed (WPM)</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Accuracy</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right hidden sm:table-cell">Duration</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right hidden md:table-cell">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {leaderboardData.map((item) => (
                  <tr
                    key={item.id || item.rank}
                    className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition"
                  >
                    <td className="py-4 px-4 sm:px-6">
                      {getRankBadge(item.rank)}
                    </td>

                    <td className="py-4 px-4 sm:px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand-500/10 text-brand-500 flex items-center justify-center font-bold text-xs">
                          {item.displayName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white leading-tight">
                            {item.displayName}
                          </p>
                          <p className="text-xs text-slate-400">@{item.username}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right font-mono font-bold text-base text-brand-600 dark:text-brand-400">
                      {item.wpm}
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                      {item.accuracy}%
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right text-xs text-slate-400 hidden sm:table-cell">
                      {item.duration}s
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-right text-xs text-slate-400 hidden md:table-cell">
                      {formatDate(item.date)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  )
}
