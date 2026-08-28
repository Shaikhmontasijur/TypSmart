import React from 'react'
import { Card } from '../common/Card'
import { Award, Zap, Target, Flame, CheckCircle, Star } from 'lucide-react'
import { cn } from '../../lib/utils'

export function MilestoneBadges({ stats }) {
  const bestWpm = stats.bestWpm || 0
  const testsCount = stats.testsCompleted || 0
  const lessonsCount = stats.lessonsCompleted || 0

  const milestones = [
    {
      id: 'first_test',
      title: 'First Keystroke',
      description: 'Completed your first typing test',
      icon: CheckCircle,
      achieved: testsCount >= 1,
      tier: 'bronze'
    },
    {
      id: 'speed_40',
      title: 'Cadence Starter',
      description: 'Reached 40+ Words Per Minute',
      icon: Zap,
      achieved: bestWpm >= 40,
      tier: 'bronze'
    },
    {
      id: 'speed_60',
      title: 'Fluid Typist',
      description: 'Reached 60+ Words Per Minute',
      icon: Flame,
      achieved: bestWpm >= 60,
      tier: 'silver'
    },
    {
      id: 'speed_80',
      title: 'Keyboard Specialist',
      description: 'Reached 80+ Words Per Minute',
      icon: Star,
      achieved: bestWpm >= 80,
      tier: 'gold'
    },
    {
      id: 'speed_100',
      title: 'Velocity Master',
      description: 'Broke the 100+ WPM benchmark',
      icon: Award,
      achieved: bestWpm >= 100,
      tier: 'diamond'
    },
    {
      id: 'lessons_master',
      title: 'Curriculum Scholar',
      description: 'Completed 5+ typing lessons',
      icon: Target,
      achieved: lessonsCount >= 5,
      tier: 'gold'
    }
  ]

  const tierColors = {
    bronze: 'bg-amber-600/10 text-amber-600 border-amber-600/20',
    silver: 'bg-slate-400/10 text-slate-400 border-slate-400/20',
    gold: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    diamond: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Milestones & Badges</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Unlockable typing achievements</p>
          </div>
        </div>

        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
          {milestones.filter(m => m.achieved).length} of {milestones.length} Unlocked
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {milestones.map((m) => {
          const Icon = m.icon
          return (
            <div
              key={m.id}
              className={cn(
                'p-3.5 rounded-2xl border flex flex-col items-center text-center transition-all',
                m.achieved
                  ? `${tierColors[m.tier]} bg-white dark:bg-slate-900 shadow-sm`
                  : 'border-slate-200/60 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/30 opacity-40 grayscale'
              )}
            >
              <div className={cn(
                'w-10 h-10 rounded-xl flex items-center justify-center mb-2',
                m.achieved ? 'bg-current/10' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
              )}>
                <Icon className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">{m.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 leading-tight line-clamp-2">
                {m.description}
              </p>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
