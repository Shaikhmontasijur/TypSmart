import React from 'react'
import { cn } from '../../lib/utils'

export function Card({
  children,
  className = '',
  hoverEffect = false,
  glass = false,
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-200',
        glass 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md'
          : 'bg-white dark:bg-slate-900 shadow-sm shadow-slate-200/50 dark:shadow-none',
        hoverEffect && 'hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/5 hover:-translate-y-0.5',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
