import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { typingService } from '../services/typingService'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { Tabs } from '../components/common/Tabs'
import { Button } from '../components/common/Button'
import { formatDate } from '../lib/utils'
import { Trophy, Medal, Crown, ShieldCheck, Bot, Keyboard, CheckCircle2, AlertCircle } from 'lucide-react'

export function Leaderboard() {
  const [boardType, setBoardType] = useState('verified') // 'verified' | 'benchmarks'
  const [timeframe, setTimeframe] = useState('all')
  const [leaderboardData, setLeaderboardData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadData() {
      setLoading(true)
      if (boardType === 'verified') {
        const data = await typingService.getLeaderboard(timeframe)
        setLeaderboardData(data)
      } else {
        const benchmarks = typingService.getBenchmarks()
        setLeaderboardData(benchmarks)
      }
      setLoading(false)
    }
    loadData()
  }, [boardType, timeframe])

  const categoryTabs = [
    { id: 'verified', label: 'Verified Community' },
    { id: 'benchmarks', label: 'Official Benchmarks' },
  ]

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
        description="Check verified global typing speed rankings across daily, weekly, monthly and all-time benchmarks."
      />

      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Global Leaderboard
            </h1>
            <Badge variant={boardType === 'verified' ? 'success' : 'warning'} size="sm">
              {boardType === 'verified' ? 'Verified Only' : 'Synthetic Baselines'}
            </Badge>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            {boardType === 'verified'
              ? 'Server-verified community results. Tests must pass mathematical cadence checks to be eligible.'
              : 'Standardized speed baselines from beginner to grandmaster velocity for baseline comparison.'}
          </p>
        </div>

        {/* Board Category Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <Tabs
            tabs={categoryTabs}
            activeTab={boardType}
            onChange={setBoardType}
          />
        </div>
      </div>

      {/* Secondary Filter Row (Timeframe for Verified) */}
      {boardType === 'verified' && (
        <div className="mb-6 flex items-center justify-between">
          <Tabs
            tabs={timeframeTabs}
            activeTab={timeframe}
            onChange={setTimeframe}
          />
          <span className="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            Anti-Cheat Protected
          </span>
        </div>
      )}

      {/* Notice Banner for Official Benchmarks */}
      {boardType === 'benchmarks' && (
        <div className="mb-6 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs flex items-center gap-3">
          <Bot className="w-5 h-5 flex-shrink-0 text-amber-600 dark:text-amber-400" />
          <div>
            <span className="font-bold">Official Reference Benchmarks:</span> These entries represent standardized speed tiers for goal setting. They are never ranked against live verified community typists.
          </div>
        </div>
      )}

      {/* Top 3 Podium Highlights on larger screens */}
      {!loading && leaderboardData.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* #2 Rank */}
          <Card className="p-6 text-center order-2 md:order-1 flex flex-col items-center justify-center relative border-slate-200 dark:border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200 flex items-center justify-center mb-3 font-bold">
              2nd
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">{leaderboardData[1].displayName}</h3>
            <p className="text-xs text-slate-400 mb-2">@{leaderboardData[1].username}</p>
            {leaderboardData[1].isVerified ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-2">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full mb-2">
                <Bot className="w-3 h-3" /> Benchmark
              </span>
            )}
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
            <p className="text-xs text-slate-400 mb-2">@{leaderboardData[0].username}</p>
            {leaderboardData[0].isVerified ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-3">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full mb-3">
                <Bot className="w-3 h-3" /> Benchmark
              </span>
            )}
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
            <p className="text-xs text-slate-400 mb-2">@{leaderboardData[2].username}</p>
            {leaderboardData[2].isVerified ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full mb-2">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full mb-2">
                <Bot className="w-3 h-3" /> Benchmark
              </span>
            )}
            <div className="font-mono text-3xl font-black text-brand-600 dark:text-brand-400">
              {leaderboardData[2].wpm} <span className="text-xs font-normal">WPM</span>
            </div>
            <p className="text-xs font-bold text-emerald-500 mt-1">{leaderboardData[2].accuracy}% Accuracy</p>
          </Card>
        </div>
      )}

      {/* Leaderboard Table / Empty State */}
      <Card className="overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-slate-500">Loading leaderboard rankings...</div>
        ) : leaderboardData.length === 0 ? (
          <div className="p-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-3xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No Verified Records Yet</h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-sm mx-auto">
                Be the first typist to complete a verified speed test and claim the top spot on the community leaderboard.
              </p>
            </div>
            <div className="pt-2 flex justify-center gap-3">
              <Link to="/typing-test">
                <Button variant="primary" icon={Keyboard} size="sm">
                  Take a Speed Test
                </Button>
              </Link>
              <Button variant="outline" size="sm" onClick={() => setBoardType('benchmarks')}>
                View Benchmark Scale
              </Button>
            </div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 dark:bg-slate-900/80 text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  <th className="py-3.5 px-4 sm:px-6 w-16">Rank</th>
                  <th className="py-3.5 px-4 sm:px-6">Typist</th>
                  <th className="py-3.5 px-4 sm:px-6">Status</th>
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

                    <td className="py-4 px-4 sm:px-6">
                      {item.isVerified ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full">
                          <Bot className="w-3.5 h-3.5" /> Benchmark
                        </span>
                      )}
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

