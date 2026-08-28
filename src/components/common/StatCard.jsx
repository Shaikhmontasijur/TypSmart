import React from 'react'
import { Card } from './Card'
import { cn } from '../../lib/utils'

export function StatCard({
  title,
  value,
  unit = '',
  description,
  icon: Icon,
  iconColor = 'text-brand-500 bg-brand-500/10',
  trend,
  className = ''
}) {
  return (
    <Card className={cn('p-5 flex flex-col justify-between relative overflow-hidden', className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
              {value}
            </span>
            {unit && (
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {unit}
              </span>
            )}
          </div>
        </div>

        {Icon && (
          <div className={cn('p-3 rounded-2xl flex items-center justify-center flex-shrink-0', iconColor)}>
            <Icon className="w-5 h-5" />
          </div>
        )}
      </div>

      {(description || trend) && (
        <div className="mt-4 flex items-center text-xs text-slate-500 dark:text-slate-400">
          {trend && (
            <span className="font-semibold text-emerald-500 mr-1.5 flex items-center">
              ↑ {trend}
            </span>
          )}
          <span>{description}</span>
        </div>
      )}
    </Card>
  )
}
