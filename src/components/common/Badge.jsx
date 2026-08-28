import React from 'react'
import { cn } from '../../lib/utils'

export function Badge({
  children,
  variant = 'brand', // 'brand' | 'success' | 'warning' | 'danger' | 'slate'
  size = 'md', // 'sm' | 'md'
  className = '',
}) {
  const variants = {
    brand: 'bg-brand-500/10 text-brand-700 dark:text-brand-400 border-brand-500/20',
    success: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
    warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
    danger: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20',
    slate: 'bg-slate-500/10 text-slate-700 dark:text-slate-400 border-slate-500/20',
  }

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 font-medium',
    md: 'text-xs px-2.5 py-1 font-semibold'
  }

  return (
    <span className={cn('inline-flex items-center rounded-full border', variants[variant], sizes[size], className)}>
      {children}
    </span>
  )
}
