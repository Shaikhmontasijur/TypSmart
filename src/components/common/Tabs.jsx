import React from 'react'
import { cn } from '../../lib/utils'

export function Tabs({
  tabs = [],
  activeTab,
  onChange,
  className = '',
  size = 'md'
}) {
  return (
    <div className={cn('inline-flex p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60', className)}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative rounded-xl font-medium transition-all duration-150 select-none flex items-center justify-center gap-2',
              size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2 text-sm',
              isActive
                ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            )}
          >
            {tab.icon && <tab.icon className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />}
            {tab.label}
            {tab.badge && (
              <span className="ml-1 px-1.5 py-0.2 text-[10px] rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400">
                {tab.badge}
              </span>
            )}
          </button>
        )
      })}
    </div>
  )
}
