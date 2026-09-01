import React from 'react'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'
import { ShieldCheck } from 'lucide-react'

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Privacy Policy — TypSmart"
        description="TypSmart respects your privacy. Learn how we handle your keystroke telemetry and profile information."
      />

      <div className="mb-8">
        <Badge variant="brand" size="md" className="mb-2">
          Legal
        </Badge>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-400 mt-1">Last Updated: August 2026</p>
      </div>

      <Card className="p-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">1. Information We Collect</h2>
          <p>
            When you use TypSmart, we collect basic test metrics (Words Per Minute, accuracy percentage, test duration, and character counts). If you register an account, we store your email, username, and display name securely using PostgreSQL and Supabase Authentication.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">2. How We Use Keystroke Data</h2>
          <p>
            Keystroke input is processed strictly in your client browser in real-time to compute test scores. We do NOT record, transmit, or store the arbitrary content of keys you press outside of aggregate accuracy metrics.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">3. Row Level Security & Public Visibility</h2>
          <p>
            Your email address is strictly private and never exposed on public leaderboards or profile pages. Only your chosen username, display name, and test scores are displayed publicly on competitive rankings.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">4. Third-Party Services</h2>
          <p>
            TypSmart utilizes Supabase for secure cloud authentication and database management, and Cloudflare Pages for edge content delivery. No third-party tracking scripts or advertising trackers are installed.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">5. Contact Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or wish to request deletion of your account and test data, please reach out via our contact page.
          </p>
        </section>
      </Card>
    </div>
  )
}
