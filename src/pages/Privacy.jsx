import React from 'react'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'

export function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Privacy Policy — TypSmart"
        description="Learn how TypSmart collects, uses, and protects information when you use our typing tests, lessons, and website."
      />

      <div className="mb-8">
        <Badge variant="brand" size="md" className="mb-2">
          Legal
        </Badge>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Last Updated: September 2026
        </p>
      </div>

      <Card className="p-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            1. Information We Collect
          </h2>

          <p>
            When you use TypSmart, we may collect typing test metrics such as
            Words Per Minute (WPM), accuracy percentage, test duration,
            character counts, and other performance statistics.
          </p>

          <p className="mt-2">
            If you create an account, we may store information such as your
            email address, username, display name, and typing test results.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            2. How We Use Keystroke Data
          </h2>

          <p>
            TypSmart processes typing input in your browser to calculate
            typing performance such as speed and accuracy. TypSmart does not
            intentionally store the arbitrary text content of individual keys
            you press as a keystroke recording.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            3. How We Use Information
          </h2>

          <p>
            We use collected information to provide and improve TypSmart,
            calculate typing performance, maintain leaderboards, provide
            account features, monitor website performance, and improve the
            overall user experience.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            4. Public Leaderboard Information
          </h2>

          <p>
            TypSmart may display selected information publicly on leaderboards,
            such as username, display name, typing score, WPM, accuracy, and
            ranking information.
          </p>

          <p className="mt-2">
            Your account email address is not intended to be displayed
            publicly on leaderboards.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            5. Google Analytics
          </h2>

          <p>
            TypSmart uses Google Analytics to understand website traffic,
            user engagement, and general usage patterns. Google Analytics may
            use cookies or similar technologies to collect information about
            how visitors interact with the website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            6. Cookies and Advertising
          </h2>

          <p>
            TypSmart may use cookies and similar technologies for analytics,
            website functionality, and, where applicable, advertising.
            If advertising services such as Google AdSense are used,
            third-party providers may use cookies or similar technologies
            to provide and measure advertisements in accordance with
            applicable policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            7. Third-Party Services
          </h2>

          <p>
            TypSmart utilizes Supabase for secure cloud authentication and
            database management, Cloudflare Workers for website delivery and
            infrastructure, and Google Analytics for website analytics.
            TypSmart may also use Google AdSense or other advertising
            services in the future.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            8. Row Level Security and Data Protection
          </h2>

          <p>
            TypSmart uses security controls designed to restrict access to
            account and test data. Your email address is intended to remain
            private and is not displayed publicly on the leaderboard.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            9. Data Security
          </h2>

          <p>
            We use reasonable technical and organizational measures to help
            protect information processed through TypSmart. However, no
            internet-based service can guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            10. Data Deletion
          </h2>

          <p>
            If you want to request deletion of your TypSmart account or
            associated personal information, please contact the TypSmart
            team using the contact method provided on the website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            11. Changes to This Privacy Policy
          </h2>

          <p>
            We may update this Privacy Policy from time to time to reflect
            changes to TypSmart, analytics, advertising, or applicable
            requirements. The updated version will be published on this page
            with a revised "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            12. Contact Us
          </h2>

          <p>
            If you have questions about this Privacy Policy or want to request
            deletion of your account or data, please contact the TypSmart team
            through the contact information provided on the website.
          </p>
        </section>

      </Card>
    </div>
  )
}