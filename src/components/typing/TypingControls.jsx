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
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl border border-slate-200/80 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 shadow-[0_10px_30px_-24px_rgba(15,23,42,0.7)] backdrop-blur-sm">
      {/* Time & Difficulty Groups */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 pl-1">
            Time
          </span>
          <Tabs
            tabs={durationTabs}
            activeTab={duration}
            onChange={(val) => !disabled && setDuration(Number(val))}
            size="sm"
            className="shadow-inner"
          />
        </div>

        <div className="hidden sm:block h-5 w-px bg-slate-200 dark:bg-slate-800 mx-0.5" />

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 pl-1">
            Mode
          </span>
          <Tabs
            tabs={difficultyTabs}
            activeTab={difficulty}
            onChange={(val) => !disabled && setDifficulty(val)}
            size="sm"
            className="shadow-inner"
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
            'inline-flex items-center justify-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium transition-all duration-150 select-none',
            soundEnabled
              ? 'border-brand-500/30 bg-brand-500/10 text-brand-600 dark:text-brand-300'
              : 'border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-300 dark:hover:bg-slate-700/80'
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
