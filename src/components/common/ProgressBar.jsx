import React from 'react'
import { cn } from '../../lib/utils'

export function ProgressBar({
  progress = 0, // 0 - 100
  color = 'brand', // 'brand' | 'success' | 'warning'
  showLabel = false,
  height = 'h-2',
  className = ''
}) {
  const normalizedProgress = Math.min(100, Math.max(0, progress))

  const colors = {
    brand: 'bg-brand-500',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
  }

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <span>Progress</span>
          <span>{normalizedProgress}%</span>
        </div>
      )}
      <div className={cn('w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden', height)}>
        <div
          className={cn('h-full transition-all duration-300 rounded-full', colors[color])}
          style={{ width: `${normalizedProgress}%` }}
        />
      </div>
    </div>
  )
}
