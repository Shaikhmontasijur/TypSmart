import React from 'react'
import { Link } from 'react-router-dom'
import {
  Gauge,
  Target,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Zap,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const SPEED_LEVELS = [
  {
    level: 'Beginner',
    range: '20–30 WPM',
    description:
      'A common starting range for people who are still developing basic keyboard familiarity and typing technique.',
  },
  {
    level: 'Developing',
    range: '30–45 WPM',
    description:
      'A developing typing speed that can support everyday tasks while you continue improving technique and accuracy.',
  },
  {
    level: 'Everyday',
    range: '45–60 WPM',
    description:
      'A solid range for many everyday typing tasks such as writing messages, documents, and general computer work.',
  },
  {
    level: 'Fast',
    range: '60–80 WPM',
    description:
      'A fast typing range that can be useful for productivity-focused work and frequent text entry.',
  },
  {
    level: 'Very Fast',
    range: '80+ WPM',
    description:
      'A high typing speed that generally requires strong technique, efficient finger movement, and consistent practice.',
  },
]

const IMPROVEMENT_TIPS = [
  'Practice touch typing instead of looking down at the keyboard.',
  'Keep your fingers close to the home-row position.',
  'Prioritize accuracy before trying to increase your maximum speed.',
  'Practice difficult letters, words, and key combinations repeatedly.',
  'Develop a smooth and consistent typing rhythm.',
  'Use short, focused practice sessions regularly.',
  'Take typing tests under consistent conditions so your results are easier to compare.',
  'Track both WPM and accuracy instead of focusing only on speed.',
]

const FAQS = [
  {
    question: 'What does WPM stand for?',
    answer:
      'WPM stands for Words Per Minute. It is a standard measurement used to describe how quickly someone types.',
  },
  {
    question: 'How is WPM calculated?',
    answer:
      'Typing tests commonly calculate WPM by dividing the number of typed characters by five and then dividing the result by the test duration in minutes.',
  },
  {
    question: 'Is 60 WPM a good typing speed?',
    answer:
      '60 WPM is generally considered a solid everyday typing speed. The importance of a particular WPM score depends on your goals, accuracy, experience, and the type of work you do.',
  },
  {
    question: 'Is typing speed more important than accuracy?',
    answer:
      'No. Speed and accuracy should be considered together. A high WPM score with frequent errors may be less useful than a slightly lower speed with consistently accurate typing.',
  },
  {
    question: 'How can I increase my WPM?',
    answer:
      'You can improve WPM by practicing touch typing, building accurate finger movements, reducing unnecessary mistakes, developing rhythm, and practicing consistently over time.',
  },
  {
    question: 'What is the difference between WPM and CPM?',
    answer:
      'WPM means Words Per Minute, while CPM means Characters Per Minute. WPM commonly uses five characters as one standardized word, making it easier to compare typing speeds.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export function WhatIsWPM() {
  return (
    <>
      <SEOHead
        title="What Is WPM? Words Per Minute Explained | TypSmart"
        description="Learn what WPM means, how Words Per Minute is calculated, what counts as a good typing speed, and how to improve your WPM with TypSmart."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Gauge
                className="h-5 w-5 shrink-0"
                aria-hidden="true"
              />

              <span>Typing Speed Guide</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              What Is WPM? Words Per Minute Explained
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              WPM stands for <strong>Words Per Minute</strong>. It is one of
              the most common ways to measure typing speed. Learn how WPM is
              calculated, what different typing speeds mean, and how to
              improve your WPM while maintaining accuracy.
            </p>
          </header>

          {/* Quick Answer */}
          <section
            id="what-is-wpm"
            aria-labelledby="what-is-wpm-heading"
            className="mb-10 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Target
                className="h-6 w-6 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="what-is-wpm-heading"
                className="text-2xl font-bold"
              >
                What Does WPM Mean?
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              <strong>WPM means Words Per Minute.</strong> It represents how
              many standardized words you can type in one minute during a
              typing test.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              WPM is useful for measuring typing performance, comparing
              results, tracking improvement, and setting realistic typing
              goals. However, WPM should be considered together with accuracy.
            </p>

            <div className="my-6 rounded-2xl border bg-muted p-6 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Simple Example
              </p>

              <p className="mt-3 text-2xl font-bold sm:text-3xl">
                300 characters ÷ 5 = 60 WPM
              </p>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                This example assumes the 300 characters were typed during a
                one-minute test.
              </p>
            </div>
          </section>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-2xl border bg-muted/50 p-6"
          >
            <h2 className="text-lg font-bold">
              In This Guide
            </h2>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              <li>
                <a
                  href="#calculation"
                  className="font-medium text-primary hover:underline"
                >
                  How WPM Is Calculated
                </a>
              </li>

              <li>
                <a
                  href="#speed-levels"
                  className="font-medium text-primary hover:underline"
                >
                  What Is a Good WPM?
                </a>
              </li>

              <li>
                <a
                  href="#accuracy"
                  className="font-medium text-primary hover:underline"
                >
                  WPM vs Accuracy
                </a>
              </li>

              <li>
                <a
                  href="#improve"
                  className="font-medium text-primary hover:underline"
                >
                  How to Increase WPM
                </a>
              </li>

              <li>
                <a
                  href="#practice"
                  className="font-medium text-primary hover:underline"
                >
                  WPM Practice Strategy
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="font-medium text-primary hover:underline"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          {/* WPM Calculation */}
          <section
            id="calculation"
            aria-labelledby="calculation-heading"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <Target
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="calculation-heading"
                className="text-3xl font-bold"
              >
                How Is WPM Calculated?
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Typing tests commonly use five characters as one standardized
              word. This provides a consistent measurement even when the
              actual words in a passage have different lengths.
            </p>

            <div className="my-6 rounded-2xl border bg-card p-6 text-center shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">
                Common WPM Formula
              </p>

              <p className="mt-3 text-2xl font-bold sm:text-3xl">
                WPM = Characters ÷ 5 ÷ Minutes
              </p>
            </div>

            <p className="leading-7 text-muted-foreground">
              For example, if you type 1,500 characters during a five-minute
              test:
            </p>

            <div className="my-5 rounded-xl bg-muted p-5 text-center">
              <p className="text-xl font-semibold">
                1,500 ÷ 5 ÷ 5 = 60 WPM
              </p>
            </div>

            <p className="leading-7 text-muted-foreground">
              Different typing platforms may calculate final scores slightly
              differently when errors, corrected characters, or other test
              rules are taken into account. Always check how a specific typing
              test defines its score.
            </p>
          </section>

          {/* Speed Levels */}
          <section
            id="speed-levels"
            aria-labelledby="speed-levels-heading"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <TrendingUp
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="speed-levels-heading"
                className="text-3xl font-bold"
              >
                What Is a Good Typing Speed?
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              There is no single WPM score that is perfect for everyone.
              Typing speed can vary based on experience, keyboard familiarity,
              language, typing technique, and the type of work being done.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {SPEED_LEVELS.map((item) => (
                <div
                  key={item.level}
                  className="rounded-2xl border p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-bold">
                      {item.level}
                    </h3>

                    <span className="rounded-full bg-muted px-3 py-1 text-sm font-semibold">
                      {item.range}
                    </span>
                  </div>

                  <p className="mt-3 leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              These are general guidelines, not strict classifications.
              Accuracy, consistency, and the requirements of your activity
              should also be considered.
            </p>
          </section>

          {/* Accuracy */}
          <section
            id="accuracy"
            aria-labelledby="accuracy-heading"
            className="mb-10 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <CheckCircle2
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="accuracy-heading"
                className="text-2xl font-bold"
              >
                WPM vs Typing Accuracy
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              WPM measures typing speed, but speed alone does not describe
              overall typing performance. Accuracy measures how consistently
              you produce the correct text.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              For example, someone typing at 70 WPM with excellent accuracy
              may be more productive than someone typing at 90 WPM while
              making frequent mistakes.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-5">
                <h3 className="font-bold">
                  Speed
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Measures how quickly you produce typed text.
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-bold">
                  Accuracy
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Measures how consistently you type the correct characters.
                </p>
              </div>
            </div>

            <p className="mt-5 font-medium">
              The best long-term goal is a balance of speed, accuracy, and
              consistency.
            </p>
          </section>

          {/* Improve WPM */}
          <section
            id="improve"
            aria-labelledby="improve-heading"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <Clock
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="improve-heading"
                className="text-3xl font-bold"
              >
                How to Increase Your WPM
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Improving WPM is usually more effective when you build reliable
              typing technique first and then gradually increase speed.
            </p>

            <ul className="mt-6 space-y-3">
              {IMPROVEMENT_TIPS.map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 rounded-xl border p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="leading-6">
                    {tip}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Practice Strategy */}
          <section
            id="practice"
            aria-labelledby="practice-heading"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <BookOpen
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="practice-heading"
                className="text-3xl font-bold"
              >
                A Simple WPM Practice Strategy
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              You do not need extremely long sessions to improve. A focused
              routine performed consistently can be more useful than
              occasional marathon practice.
            </p>

            <ol className="mt-6 space-y-4">
              <li className="rounded-xl border p-5">
                <strong>1. Warm up for 3–5 minutes</strong>

                <p className="mt-2 leading-6 text-muted-foreground">
                  Type comfortably and focus on smooth finger movement.
                </p>
              </li>

              <li className="rounded-xl border p-5">
                <strong>2. Practice accuracy for 5 minutes</strong>

                <p className="mt-2 leading-6 text-muted-foreground">
                  Slow down enough to reduce repeated mistakes and reinforce
                  correct movements.
                </p>
              </li>

              <li className="rounded-xl border p-5">
                <strong>3. Take a timed typing test</strong>

                <p className="mt-2 leading-6 text-muted-foreground">
                  Measure your WPM and accuracy under consistent conditions.
                </p>
              </li>

              <li className="rounded-xl border p-5">
                <strong>4. Review your mistakes</strong>

                <p className="mt-2 leading-6 text-muted-foreground">
                  Identify recurring problem keys, combinations, or words
                  instead of focusing only on your final score.
                </p>
              </li>

              <li className="rounded-xl border p-5">
                <strong>5. Gradually increase your target</strong>

                <p className="mt-2 leading-6 text-muted-foreground">
                  Increase your speed goal only after your accuracy becomes
                  reasonably stable.
                </p>
              </li>
            </ol>
          </section>

          {/* CTA */}
          <section className="mb-10 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Zap
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-2xl font-bold">
                Check Your WPM
              </h2>
            </div>

            <p className="mt-3 leading-7 text-muted-foreground">
              Ready to measure your current typing speed? Take a TypSmart
              typing test, check your WPM and accuracy, and use regular
              practice to improve your results.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/typing-test"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Take a Typing Test
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Practice Typing
              </Link>
            </div>
          </section>

    {/* FAQ */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <BookOpen
                className="h-7 w-7 shrink-0 text-primary"
                aria-hidden="true"
              />

              <h2
                id="faq-heading"
                className="text-3xl font-bold"
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border bg-card p-5"
                >
                  <summary className="cursor-pointer list-none font-semibold">
                    <div className="flex items-start justify-between gap-4">
                      <span>{faq.question}</span>

                      <span
                        className="shrink-0 text-xl transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </div>
                  </summary>

                  <p className="mt-4 leading-7 text-muted-foreground">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Related Guides */}
          <section
            aria-labelledby="related-guides-heading"
            className="mb-10 border-t pt-8"
          >
            <h2
              id="related-guides-heading"
              className="text-2xl font-bold"
            >
              Related Typing Guides
            </h2>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <Link
                to="/guides/how-to-increase-typing-speed"
                className="group rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-between gap-3">
                  How to Increase Typing Speed

                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                to="/guides/how-to-type-faster"
                className="group rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-between gap-3">
                  How to Type Faster

                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                to="/guides/improve-typing-accuracy"
                className="group rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-between gap-3">
                  Improve Typing Accuracy

                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                to="/guides/touch-typing"
                className="group rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-between gap-3">
                  Learn Touch Typing

                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                to="/guides/wpm-vs-cpm"
                className="group rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-between gap-3">
                  WPM vs CPM

                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>

              <Link
                to="/guides/average-typing-speed"
                className="group rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                <span className="flex items-center justify-between gap-3">
                  Average Typing Speed

                  <ArrowRight
                    className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-2xl border bg-card p-6 text-center shadow-sm sm:p-8">
            <Zap
              className="mx-auto h-8 w-8 text-primary"
              aria-hidden="true"
            />

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Ready to Improve Your WPM?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted-foreground">
              Practice regularly, focus on accuracy, and track your progress
              with TypSmart. Your next typing milestone starts with one test.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/typing-test"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start Typing Test

                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Practice Now
              </Link>
            </div>
          </section>

        </article>
      </main>
    </>
  )
}

export default WhatIsWPM