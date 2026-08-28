import React from 'react'
import { Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react'
import { Tabs } from '../common/Tabs'
import { Button } from '../common/Button'
import { cn } from '../../lib/utils'

export function TypingControls({
  duration,
  setDuration,
  difficulty,
  setDifficulty,
  soundEnabled,
  setSoundEnabled,
  onRestart,
  disabled = false
}) {
  const durationTabs = [
    { id: 15, label: '15s' },
    { id: 30, label: '30s' },
    { id: 60, label: '60s' },
    { id: 120, label: '120s' },
  ]

  const difficultyTabs = [
    { id: 'easy', label: 'Easy' },
    { id: 'medium', label: 'Medium' },
    { id: 'hard', label: 'Hard' },
  ]

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
      {/* Time & Difficulty Groups */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 pl-1">
            Time:
          </span>
          <Tabs
            tabs={durationTabs}
            activeTab={duration}
            onChange={(val) => !disabled && setDuration(Number(val))}
            size="sm"
          />
        </div>

        <div className="hidden sm:block h-5 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

        <div className="flex items-center gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 pl-1">
            Mode:
          </span>
          <Tabs
            tabs={difficultyTabs}
            activeTab={difficulty}
            onChange={(val) => !disabled && setDifficulty(val)}
            size="sm"
          />
        </div>
      </div>

      {/* Action buttons: Sound & Restart */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          type="button"
          onClick={() => setSoundEnabled(!soundEnabled)}
          title={soundEnabled ? 'Mute Key Sounds' : 'Enable Key Sounds'}
          className={cn(
            'p-2 rounded-xl border text-xs font-medium transition flex items-center gap-1.5',
            soundEnabled
              ? 'border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-400'
              : 'border-slate-200 dark:border-slate-800 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
          )}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          <span className="hidden sm:inline">{soundEnabled ? 'Sound' : 'Muted'}</span>
        </button>

        <Button
          variant="outline"
          size="sm"
          onClick={onRestart}
          icon={RotateCcw}
        >
          Restart
        </Button>
      </div>
    </div>
  )
}
