import React from 'react'
import { SEOHead } from '../components/common/SEOHead'
import { Card } from '../components/common/Card'
import { Badge } from '../components/common/Badge'

export function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SEOHead
        title="Terms of Service — TypSmart"
        description="Review the terms and conditions for using TypSmart, including typing tests, accounts, leaderboards, advertising, and acceptable use."
      />

      <div className="mb-8">
        <Badge variant="brand" size="md" className="mb-2">
          Legal
        </Badge>

        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Terms of Service
        </h1>

        <p className="text-xs text-slate-400 mt-1">
          Last Updated: September 2026
        </p>
      </div>

      <Card className="p-8 space-y-6 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            1. Acceptance of Terms
          </h2>

          <p>
            By accessing or using TypSmart, you agree to these Terms of Service
            and all applicable laws and regulations. If you do not agree with
            these terms, please discontinue use of the platform.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            2. About TypSmart
          </h2>

          <p>
            TypSmart is an online typing practice and performance platform
            designed to help users improve typing speed, accuracy, consistency,
            and keyboard skills through typing tests, lessons, practice tools,
            and performance tracking.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            3. Accounts
          </h2>

          <p>
            Some TypSmart features may require an account. You are responsible
            for providing accurate information and for maintaining the security
            of your account credentials. You are responsible for activity
            performed through your account.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            4. Typing Tests and Scores
          </h2>

          <p>
            TypSmart provides typing tests and performance measurements such as
            Words Per Minute (WPM), accuracy, duration, and related statistics.
            Results are intended for practice, comparison, and educational
            purposes and may not represent professional typing certification.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            5. Fair Play and Leaderboards
          </h2>

          <p>
            TypSmart leaderboards are intended to represent authentic human
            typing performance. The use of automated scripts, bots, macros,
            keystroke simulators, score manipulation, API tampering, or other
            methods designed to artificially increase scores is prohibited.
          </p>

          <p className="mt-2">
            TypSmart may remove suspicious results, restrict accounts, or take
            other reasonable action when leaderboard integrity is compromised.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            6. Acceptable Use
          </h2>

          <p>
            You agree not to misuse TypSmart, interfere with its operation,
            attempt unauthorized access, introduce malicious code, abuse
            platform resources, or use the service for unlawful activities.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            7. Intellectual Property
          </h2>

          <p>
            TypSmart branding, interface design, software, original content,
            lessons, graphics, and other platform materials are protected by
            applicable intellectual property laws. You may use TypSmart for
            personal and educational purposes but may not copy, reproduce,
            redistribute, reverse engineer, or commercially exploit platform
            materials without authorization.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            8. Third-Party Services
          </h2>

          <p>
            TypSmart may use third-party services such as Supabase, Cloudflare,
            Google Analytics, Google AdSense, payment providers, or other
            service providers to operate, analyze, secure, and monetize the
            platform.
          </p>

          <p className="mt-2">
            Your use of third-party services may also be subject to their
            respective terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            9. Advertising
          </h2>

          <p>
            TypSmart may display advertisements through third-party advertising
            services such as Google AdSense. Advertisements may use cookies or
            similar technologies in accordance with applicable advertising and
            privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            10. Analytics
          </h2>

          <p>
            TypSmart may use analytics services such as Google Analytics to
            understand website traffic, user engagement, performance, and
            general usage patterns. Additional information is provided in the
            TypSmart Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            11. Availability and Changes
          </h2>

          <p>
            TypSmart is provided on an "as is" and "as available" basis. We
            continuously work to maintain reliable service, but we do not
            guarantee uninterrupted availability, error-free operation, or that
            every feature will always remain available.
          </p>

          <p className="mt-2">
            We may modify, suspend, or discontinue features or services when
            reasonably necessary.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            12. Account and Data Deletion
          </h2>

          <p>
            You may request deletion of your TypSmart account and associated
            personal information, subject to applicable legal, security, and
            operational requirements. Please use the contact method provided on
            the website for deletion requests.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            13. Limitation of Liability
          </h2>

          <p>
            To the extent permitted by applicable law, TypSmart and its
            operators are not responsible for indirect, incidental, special,
            consequential, or other losses resulting from the use or inability
            to use the platform.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            14. Privacy
          </h2>

          <p>
            Your use of TypSmart is also governed by our Privacy Policy, which
            explains how information may be collected, used, stored, and
            protected.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            15. Changes to These Terms
          </h2>

          <p>
            TypSmart may update these Terms of Service from time to time. When
            changes are made, the updated version will be published on this page
            with a revised "Last Updated" date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900 dark:text-white mb-2">
            16. Contact Us
          </h2>

          <p>
            If you have questions about these Terms of Service, please contact
            the TypSmart team through the contact information provided on the
            website.
          </p>
        </section>

      </Card>
    </div>
  )
}