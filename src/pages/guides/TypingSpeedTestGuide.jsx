import React from 'react'
import { Link } from 'react-router-dom'
import {
  Gauge,
  Target,
  Timer,
  CheckCircle2,
  Keyboard,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Zap,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'What is a typing speed test?',
    a: 'A typing speed test is a timed exercise that measures how quickly and accurately you can type. Most tests report typing speed in words per minute (WPM) and also provide an accuracy score.',
  },
  {
    q: 'How is typing speed measured?',
    a: 'Typing speed is commonly measured in words per minute (WPM). A standard calculation generally treats five characters as one word and divides the result by the test duration in minutes.',
  },
  {
    q: 'What is a good typing speed?',
    a: 'For many everyday users, around 40–50 WPM with good accuracy is a useful milestone. A strong typing speed depends on your goals, experience, accuracy, and the type of work you do.',
  },
  {
    q: 'Does accuracy matter in a typing speed test?',
    a: 'Yes. High speed with frequent errors is less useful than reliable speed with strong accuracy. Improving accuracy first can help you build faster and more consistent typing performance.',
  },
  {
    q: 'How can I improve my typing test score?',
    a: 'Practice consistently, focus on accuracy, learn touch typing, reduce unnecessary pauses, review your mistakes, and gradually increase your speed as your technique becomes more reliable.',
  },
]

const PREPARATION_STEPS = [
  'Warm up your fingers for a few minutes before starting.',
  'Sit comfortably and keep your wrists relaxed.',
  'Focus on the text rather than constantly looking at your keyboard.',
  'Prioritize accuracy before trying to increase your speed.',
  'Maintain a steady rhythm instead of rushing individual words.',
  'Take several short tests and compare your results.',
  'Review repeated mistakes after each test.',
  'Practice consistently to build stronger muscle memory.',
]

const TEST_TYPES = [
  {
    icon: Timer,
    title: 'Timed Typing Tests',
    description:
      'Measure your performance during a fixed period such as 15, 30, 60, or 120 seconds.',
  },
  {
    icon: BookOpen,
    title: 'Text-Based Tests',
    description:
      'Type a passage displayed on screen and complete as much of it as possible within the selected time.',
  },
  {
    icon: Keyboard,
    title: 'Practice Tests',
    description:
      'Use repeated tests to identify weak areas, build consistency, and track improvement over time.',
  },
]

const RELATED_GUIDES = [
  {
    title: 'How to Increase Typing Speed',
    href: '/guides/how-to-increase-typing-speed',
  },
  {
    title: 'What Is WPM?',
    href: '/guides/what-is-wpm',
  },
  {
    title: 'Improve Typing Accuracy',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'Touch Typing Guide',
    href: '/guides/touch-typing',
  },
  {
    title: 'How to Type Faster',
    href: '/guides/how-to-type-faster',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export const TypingSpeedTestGuide = () => {
  return (
    <>
      <SEOHead
        title="Typing Speed Test: How It Works & How to Prepare | TypSmart"
        description="Learn how a typing speed test works, how WPM and accuracy are measured, what makes a good score, and how to prepare for better typing test results."
      />

      <main className="min-h-screen px-4 py-10 md:py-14">
        <article className="mx-auto max-w-4xl">
          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">
              Typing Guide
            </p>

            <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              Typing Speed Test: How It Works and How to Prepare
            </h1>

            <p className="max-w-3xl text-lg leading-8 opacity-80">
              Learn how a typing speed test works, how WPM and accuracy are
              measured, what makes a good score, and how to prepare for a
              better typing test result.
            </p>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mb-12 rounded-2xl border p-5 md:p-6"
          >
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={20} aria-hidden="true" />
              <h2 className="text-lg font-bold">On This Page</h2>
            </div>

            <ol className="grid gap-2 text-sm md:grid-cols-2">
              <li>
                <a href="#what-is-a-typing-speed-test" className="underline">
                  What Is a Typing Speed Test?
                </a>
              </li>
              <li>
                <a href="#how-typing-tests-work" className="underline">
                  How Typing Tests Work
                </a>
              </li>
              <li>
                <a href="#how-wpm-is-calculated" className="underline">
                  How WPM Is Calculated
                </a>
              </li>
              <li>
                <a href="#why-accuracy-matters" className="underline">
                  Why Accuracy Matters
                </a>
              </li>
              <li>
                <a href="#prepare-for-a-typing-test" className="underline">
                  How to Prepare
                </a>
              </li>
              <li>
                <a href="#good-typing-speed" className="underline">
                  What Is a Good Typing Speed?
                </a>
              </li>
              <li>
                <a href="#improve-your-score" className="underline">
                  How to Improve Your Score
                </a>
              </li>
              <li>
                <a href="#faq" className="underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section className="space-y-12 text-base leading-8">
            {/* What Is a Typing Speed Test */}
            <section id="what-is-a-typing-speed-test">
              <div className="mb-4 flex items-center gap-3">
                <Gauge size={24} aria-hidden="true" />
                <h2 className="text-2xl font-bold md:text-3xl">
                  What Is a Typing Speed Test?
                </h2>
              </div>

              <p>
                A typing speed test is a timed exercise that measures how
                quickly and accurately you can type text on a keyboard. Most
                typing tests report your performance using <strong>WPM</strong>
                (words per minute), along with an accuracy percentage.
              </p>

              <p className="mt-4">
                Typing speed tests are useful for students, office workers,
                developers, writers, customer-service professionals, and
                anyone who wants to improve keyboard skills.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <Gauge size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Speed</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Measures how quickly you type.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Target size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Accuracy</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Measures how accurately you reproduce the text.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <TrendingUp size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Progress</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Helps you track improvement over time.
                  </p>
                </div>
              </div>
            </section>

            {/* How Typing Tests Work */}
            <section id="how-typing-tests-work">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How Does a Typing Speed Test Work?
              </h2>

              <p>
                A typical typing speed test displays a passage and starts a
                timer when you begin typing. The system compares your input
                with the target text and calculates performance from your
                typing activity.
              </p>

              <div className="mt-6 grid gap-4">
                {TEST_TYPES.map((type) => {
                  const Icon = type.icon

                  return (
                    <div
                      key={type.title}
                      className="rounded-2xl border p-5 md:p-6"
                    >
                      <div className="flex gap-4">
                        <Icon
                          size={24}
                          className="mt-1 shrink-0"
                          aria-hidden="true"
                        />

                        <div>
                          <h3 className="font-bold">{type.title}</h3>
                          <p className="mt-2 text-sm leading-7 opacity-75">
                            {type.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              <p className="mt-6">
                Depending on the platform, a typing test may also track
                incorrect characters, corrected mistakes, elapsed time,
                consistency, and other performance metrics.
              </p>
            </section>

            {/* WPM Calculation */}
            <section id="how-wpm-is-calculated">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How Is WPM Calculated?
              </h2>

              <p>
                Typing speed is commonly measured in{' '}
                <strong>words per minute (WPM)</strong>. A standard typing
                calculation treats five typed characters as one word.
              </p>

              <div className="my-6 rounded-2xl border p-5 md:p-6">
                <p className="font-semibold">Common WPM formula</p>

                <p className="mt-3 overflow-x-auto font-mono text-sm md:text-base">
                  WPM = (Characters Typed ÷ 5) ÷ Time in Minutes
                </p>
              </div>

              <p>
                For example, if you type 250 characters in one minute, the
                standard calculation gives approximately 50 WPM. Actual
                scoring can vary between platforms depending on how errors,
                corrections, spaces, and incomplete text are handled.
              </p>

              <p className="mt-4">
                For a deeper explanation of WPM, read our guide on{' '}
                <Link
                  to="/guides/what-is-wpm"
                  className="font-semibold underline"
                >
                  what WPM means and how it is calculated
                </Link>
                .
              </p>
            </section>

            {/* Accuracy */}
            <section id="why-accuracy-matters">
              <div className="mb-4 flex items-center gap-3">
                <Target size={24} aria-hidden="true" />
                <h2 className="text-2xl font-bold md:text-3xl">
                  Why Does Accuracy Matter?
                </h2>
              </div>

              <p>
                Speed alone does not represent strong typing ability. If you
                type quickly but make frequent mistakes, your effective
                performance may be lower and you may spend additional time
                correcting errors.
              </p>

              <p className="mt-4">
                A better long-term goal is to develop a balance between speed
                and accuracy. Start by typing correctly, then gradually
                increase your speed as your accuracy becomes consistent.
              </p>

              <div className="mt-6 rounded-2xl border p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={24}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-bold">
                      Accuracy-first practice principle
                    </h3>

                    <p className="mt-2 text-sm leading-7 opacity-75">
                      If accuracy drops significantly whenever you increase
                      speed, slow down slightly and rebuild consistency before
                      pushing your WPM higher.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Preparation */}
            <section id="prepare-for-a-typing-test">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How to Prepare for a Typing Speed Test
              </h2>

              <p>
                Good preparation is less about rushing and more about entering
                the test with a relaxed, consistent typing rhythm.
              </p>

              <ol className="mt-6 list-decimal space-y-3 pl-6">
                {PREPARATION_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex gap-3">
                  <Zap
                    size={22}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7">
                    <strong>Quick tip:</strong> Avoid changing your technique
                    immediately before a test. Use the same comfortable
                    finger placement and typing rhythm you have practiced.
                  </p>
                </div>
              </div>
            </section>

            {/* Good Speed */}
            <section id="good-typing-speed">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                What Is a Good Typing Speed?
              </h2>

              <p>
                There is no single WPM score that is considered good for
                everyone. Your ideal target depends on your experience,
                occupation, keyboard familiarity, and accuracy.
              </p>

              <div className="my-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <caption className="sr-only">
                    Example typing speed milestones
                  </caption>

                  <thead className="border-b">
                    <tr>
                      <th className="px-4 py-3 font-semibold">WPM</th>
                      <th className="px-4 py-3 font-semibold">General Level</th>
                      <th className="px-4 py-3 font-semibold">Typical Goal</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">20–30</td>
                      <td className="px-4 py-3">Beginner</td>
                      <td className="px-4 py-3">Build basic keyboard control</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">40–50</td>
                      <td className="px-4 py-3">Everyday</td>
                      <td className="px-4 py-3">Comfortable general typing</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">60–80</td>
                      <td className="px-4 py-3">Strong</td>
                      <td className="px-4 py-3">Efficient everyday typing</td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3">100+</td>
                      <td className="px-4 py-3">Advanced</td>
                      <td className="px-4 py-3">
                        High-speed typing performance
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These are useful milestones rather than strict standards.
                Accuracy, consistency, and the type of work you perform are
                also important when evaluating typing ability.
              </p>

              <p className="mt-4">
                You can learn more in our guide to{' '}
                <Link
                  to="/guides/average-typing-speed"
                  className="font-semibold underline"
                >
                  average typing speed
                </Link>
                .
              </p>
            </section>

            {/* Improve Score */}
            <section id="improve-your-score">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How to Improve Your Typing Test Score
              </h2>

              <p>
                The most effective approach is consistent, focused practice.
                Instead of trying to reach a very high WPM immediately, focus
                on reducing errors and developing a smooth typing rhythm.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">Practice touch typing</h3>
                  <p className="mt-2 text-sm leading-7 opacity-75">
                    Learn to type using consistent finger positions instead of
                    searching for individual keys.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">Train your weak areas</h3>
                  <p className="mt-2 text-sm leading-7 opacity-75">
                    Pay attention to letters, words, or key combinations that
                    repeatedly cause mistakes.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">Use short daily sessions</h3>
                  <p className="mt-2 text-sm leading-7 opacity-75">
                    Regular practice helps build muscle memory and consistency
                    more effectively than occasional long sessions.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">Track WPM and accuracy</h3>
                  <p className="mt-2 text-sm leading-7 opacity-75">
                    Compare your results over time rather than judging
                    progress from a single test.
                  </p>
                </div>
              </div>

              <p className="mt-6">
                If your main goal is faster typing, follow our{' '}
                <Link
                  to="/guides/how-to-type-faster"
                  className="font-semibold underline"
                >
                  guide to typing faster
                </Link>{' '}
                and combine it with regular practice.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border p-6 md:p-8">
              <h2 className="text-2xl font-bold md:text-3xl">
                Ready to Test Your Typing Speed?
              </h2>

              <p className="mt-3 leading-7 opacity-80">
                Put your skills into practice with TypSmart. Take a typing
                speed test, check your WPM and accuracy, and use your results
                to guide your next practice session.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/typing-test"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Take a Typing Test
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Practice Typing
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </section>

            {/* Related Guides */}
            <section id="related-guides">
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                Related Typing Guides
              </h2>

              <div className="grid gap-3 md:grid-cols-2">
                {RELATED_GUIDES.map((guide) => (
                  <Link
                    key={guide.href}
                    to={guide.href}
                    className="flex items-center justify-between rounded-xl border p-4 transition hover:opacity-80"
                  >
                    <span className="font-semibold">{guide.title}</span>
                    <ArrowRight
                      size={18}
                      className="shrink-0"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details key={faq.q} className="rounded-2xl border p-5">
                    <summary className="cursor-pointer font-semibold">
                      {faq.q}
                    </summary>

                    <p className="mt-3 text-sm leading-7 opacity-75">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final Takeaway */}
            <section>
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Final Takeaway
              </h2>

              <p>
                A typing speed test is more than a race to achieve the highest
                WPM. The best results come from combining speed, accuracy,
                consistency, and good typing technique.
              </p>

              <p className="mt-4">
                Practice regularly, review your mistakes, and gradually push
                your speed higher as your accuracy becomes reliable.
              </p>
            </section>
          </section>

          {/* Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(faqSchema),
            }}
          />
        </article>
      </main>
    </>
  )
}