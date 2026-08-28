import React from 'react'
import { Button } from './Button'
import { Card } from './Card'
import { Keyboard } from 'lucide-react'

export function EmptyState({
  title = 'No records yet',
  description = 'Complete your first typing test or lesson to see your analytics and history here.',
  actionLabel = 'Start Typing Test',
  onAction,
  icon: Icon = Keyboard
}) {
  return (
    <Card className="p-10 text-center flex flex-col items-center justify-center max-w-md mx-auto my-8">
      <div className="w-14 h-14 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4">
        <Icon className="w-7 h-7" />
      </div>
      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{title}</h4>
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 max-w-sm">{description}</p>
      {onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </Card>
  )
}
