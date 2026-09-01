import React from 'react'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Terms of Service — TypSmart"
        description="Review the terms and conditions for using TypSmart web services and typing practice tools."
      />

      <div className="mb-8">
        <Badge variant="brand" size="md" className="mb-2">
          Legal
        </Badge>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Terms of Service
        </h1>
        <p className="text-xs text-slate-400 mt-1">Last Updated: August 2026</p>
      </div>

      <Card className="p-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing or using TypSmart, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may discontinue use of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. Use License & Intellectual Property</h2>
          <p>
            TypeFlow grants you a personal, non-exclusive, non-transferable license to use our web application for touch typing practice and education. You agree not to copy, reverse engineer, or scrape content, curriculum, or leaderboards without prior authorization.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Fair Play on Leaderboards</h2>
          <p>
            Leaderboards are maintained for authentic human practice. The use of automated scripts, macros, keystroke simulators, or API tampering to inflate test scores is strictly prohibited and results in score removal.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Disclaimers</h2>
          <p>
            TypeFlow is provided on an "as is" and "as available" basis. While we strive for maximum uptime and precision, we make no warranties regarding uninterrupted service.
          </p>
        </section>
      </Card>
    </div>
  )
}
