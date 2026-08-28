import React, { useState } from 'react'
import { Modal } from './Modal'
import { Button } from './Button'
import { Badge } from './Badge'
import { Card } from './Card'
import { Check, Sparkles, School, Zap, ShieldCheck } from 'lucide-react'

export function PricingModal({ isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState('free')

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-4xl" showClose={true}>
      <div className="space-y-6">
        <div className="text-center">
          <Badge variant="brand" size="md" className="mb-2">
            Tier Architecture
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Plans for Individuals & Educators
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-lg mx-auto">
            Choose the plan that matches your practice velocity. All core tests remain 100% free forever.
          </p>
        </div>

        {/* Grid of 3 Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* FREE TIER */}
          <Card className="p-6 flex flex-col justify-between border-2 border-slate-200 dark:border-slate-800">
            <div>
              <Badge variant="slate" size="sm" className="mb-3">FREE CORE</Badge>
              <div className="mb-4">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$0</span>
                <span className="text-xs text-slate-400"> / forever</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                Essential tools for daily keyboard practice.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Standard Typing Tests (15s–120s)</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Beginner Curriculum Lessons</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Basic Session Statistics</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-500" /> Global Leaderboard Access</li>
              </ul>
            </div>
            <div className="pt-6">
              <Button variant="outline" size="sm" className="w-full" onClick={onClose}>
                Current Plan
              </Button>
            </div>
          </Card>

          {/* PREMIUM TIER */}
          <Card className="p-6 flex flex-col justify-between border-2 border-brand-500 relative shadow-xl bg-gradient-to-b from-brand-500/5 to-transparent">
            <div className="absolute -top-3 right-4">
              <span className="px-2.5 py-0.5 rounded-full bg-brand-500 text-white font-bold text-[10px] uppercase tracking-wider">
                Popular
              </span>
            </div>
            <div>
              <Badge variant="brand" size="sm" className="mb-3">PREMIUM PRO</Badge>
              <div className="mb-4">
                <span className="text-3xl font-black text-slate-900 dark:text-white">$4.99</span>
                <span className="text-xs text-slate-400"> / month</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                For developers and typists striving for 100+ WPM.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Everything in Free</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Advanced Coding & Syntax Drills</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Custom Text & Article Importer</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Official Verified Certificates</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-500" /> Keystroke Weakness Telemetry</li>
              </ul>
            </div>
            <div className="pt-6">
              <Button variant="primary" size="sm" className="w-full" icon={Sparkles} onClick={onClose}>
                Upgrade to Pro (Ready)
              </Button>
            </div>
          </Card>

          {/* INSTITUTION TIER */}
          <Card className="p-6 flex flex-col justify-between border-2 border-slate-200 dark:border-slate-800">
            <div>
              <Badge variant="warning" size="sm" className="mb-3">INSTITUTION</Badge>
              <div className="mb-4">
                <span className="text-3xl font-black text-slate-900 dark:text-white">Custom</span>
                <span className="text-xs text-slate-400"> / school</span>
              </div>
              <p className="text-xs text-slate-500 mb-4">
                For classrooms, bootcamps, and organizations.
              </p>
              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> Teacher Administration Portal</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> Student Cohort Management</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> Class Progress Reports & CSV</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-purple-500" /> Custom School Assignments</li>
              </ul>
            </div>
            <div className="pt-6">
              <Button variant="secondary" size="sm" className="w-full" icon={School} onClick={onClose}>
                Contact Education
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Modal>
  )
}
