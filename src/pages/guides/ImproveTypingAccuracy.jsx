import React from 'react'
import { Link } from 'react-router-dom'
import {
  Target,
  CheckCircle2,
  Keyboard,
  TrendingUp,
  AlertCircle,
  ArrowRight,
  BookOpen,
  Zap,
  BarChart3
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const TIPS = [
  {
    title: 'Slow Down and Prioritize Accuracy',
    text: 'Do not chase maximum WPM while learning. Type at a controlled pace and focus on pressing the correct key every time.'
  },
  {
    title: 'Keep Your Eyes on the Text',
    text: 'Avoid repeatedly looking down at the keyboard. Keeping your eyes on the text helps you develop stronger visual and motor coordination.'
  },
  {
    title: 'Use Proper Finger Placement',
    text: 'Learn consistent home-row positioning and use the correct finger for each key. Good technique reduces unnecessary movement.'
  },
  {
    title: 'Practice Difficult Letter Combinations',
    text: 'Pay attention to the letters, words, and combinations that cause repeated errors and practice them deliberately.'
  },
  {
    title: 'Relax Your Hands',
    text: 'Keep your shoulders, wrists, and fingers relaxed. Excess tension can make typing less comfortable and less consistent.'
  },
  {
    title: 'Practice Every Day',
    text: 'Short daily sessions are easier to maintain and can help reinforce accurate typing habits more effectively than occasional marathon sessions.'
  },
  {
    title: 'Review Your Mistakes',
    text: 'After a typing test, identify recurring errors instead of simply starting another test. Your mistakes reveal what needs practice.'
  },
  {
    title: 'Increase Speed Gradually',
    text: 'Once your accuracy is stable, increase your target speed little by little while keeping your error rate under control.'
  },
  {
    title: 'Practice Realistic Text',
    text: 'Practice sentences, paragraphs, punctuation, and numbers instead of relying only on isolated words.'
  },
  {
    title: 'Measure Both Speed and Accuracy',
    text: 'Track WPM together with accuracy. A sustainable typing improvement should increase speed without causing a large increase in mistakes.'
  }
]

const COMMON_MISTAKES = [
  'Typing faster than your current skill level allows.',
  'Looking down at the keyboard too frequently.',
  'Using inconsistent finger placement.',
  'Holding unnecessary tension in your hands or wrists.',
  'Ignoring the same repeated typing errors.',
  'Practicing only occasionally.',
  'Focusing exclusively on WPM instead of accuracy.',
  'Skipping punctuation, numbers, or difficult words during practice.'
]

const FAQS = [
  {
    q: 'What is a good typing accuracy percentage?',
    a: 'For regular typing practice, aiming for 95% or higher is a useful target. Advanced typists often aim for 98% to 100% accuracy, especially when speed is important.'
  },
  {
    q: 'How can I improve typing accuracy quickly?',
    a: 'Slow your typing slightly, focus on correct keystrokes, review your mistakes, and practice difficult letters and words every day. Accuracy usually improves through consistent deliberate practice.'
  },
  {
    q: 'Should I focus on accuracy or speed first?',
    a: 'Accuracy should generally come first. Once you can type consistently with few mistakes, gradually increasing speed is easier and more sustainable.'
  },
  {
    q: 'Does touch typing improve accuracy?',
    a: 'Yes. Consistent touch-typing technique can reduce unnecessary hand movement and help you develop predictable finger patterns, which can support better accuracy.'
  },
  {
    q: 'How long should I practice typing each day?',
    a: 'A practical starting point is around 15 to 25 minutes of focused practice per day. Consistency matters more than completing very long sessions.'
  }
]

const RELATED_GUIDES = [
  {
    title: 'What Is WPM? Words Per Minute Explained',
    path: '/guides/what-is-wpm'
  },
  {
    title: 'Average Typing Speed: What Is a Good WPM?',
    path: '/guides/average-typing-speed'
  },
  {
    title: 'How to Type Faster: 15 Proven Techniques',
    path: '/guides/how-to-type-faster'
  },
  {
    title: 'How to Increase Typing Speed',
    path: '/guides/how-to-increase-typing-speed'
  },
  {
    title: 'Touch Typing Guide',
    path: '/guides/touch-typing'
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a
    }
  }))
}

export function ImproveTypingAccuracy() {
  return (
    <>
      <SEOHead
        title="How to Improve Typing Accuracy: 10 Practical Tips | TypSmart"
        description="Learn how to improve typing accuracy, reduce mistakes, and type more confidently with 10 practical touch-typing techniques and a simple daily practice plan."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Target
                className="h-5 w-5"
                aria-hidden="true"
              />
              <span>Typing Accuracy Guide</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              How to Improve Typing Accuracy: 10 Practical Tips
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Learn how to improve typing accuracy, reduce mistakes, and type
              more confidently. These practical techniques can help you build
              cleaner keystrokes, stronger touch-typing habits, and more
              consistent typing performance.
            </p>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center gap-2">
              <BookOpen
                className="h-5 w-5 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-lg font-semibold">
                In This Guide
              </h2>
            </div>

            <ol className="mt-4 grid gap-2 sm:grid-cols-2">
              <li>
                <a
                  href="#what-is-typing-accuracy"
                  className="text-sm text-primary hover:underline"
                >
                  1. What Is Typing Accuracy?
                </a>
              </li>

              <li>
                <a
                  href="#accuracy-vs-speed"
                  className="text-sm text-primary hover:underline"
                >
                  2. Accuracy vs Speed
                </a>
              </li>

              <li>
                <a
                  href="#improve-accuracy"
                  className="text-sm text-primary hover:underline"
                >
                  3. 10 Ways to Improve Accuracy
                </a>
              </li>

              <li>
                <a
                  href="#common-mistakes"
                  className="text-sm text-primary hover:underline"
                >
                  4. Common Causes of Mistakes
                </a>
              </li>

              <li>
                <a
                  href="#daily-practice"
                  className="text-sm text-primary hover:underline"
                >
                  5. Daily Practice Plan
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-sm text-primary hover:underline"
                >
                  6. Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* What Is Accuracy */}
          <section
            id="what-is-typing-accuracy"
            className="mb-10 scroll-mt-24 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="mb-5 flex items-center gap-3">
              <Target
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-3xl font-bold">
                What Is Typing Accuracy?
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Typing accuracy measures how correctly you reproduce the text
              you are supposed to type. Higher accuracy generally means fewer
              incorrect keystrokes and less time spent correcting mistakes.
            </p>

            <div className="my-6 rounded-xl bg-muted p-6 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Simple Principle
              </p>

              <p className="mt-2 text-2xl font-bold sm:text-3xl">
                Fewer Mistakes = Better Accuracy
              </p>
            </div>

            <p className="leading-7 text-muted-foreground">
              For example, typing at 60 WPM with 98% accuracy may be more
              useful for everyday work than typing at 80 WPM while making
              frequent errors and corrections.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border p-4">
                <CheckCircle2
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />

                <h3 className="mt-3 font-semibold">
                  Fewer Errors
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Spend less time fixing incorrect characters.
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <Zap
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />

                <h3 className="mt-3 font-semibold">
                  Better Flow
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Maintain a smoother and more consistent rhythm.
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <BarChart3
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />

                <h3 className="mt-3 font-semibold">
                  Better Results
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Improve useful typing performance, not just raw WPM.
                </p>
              </div>
            </div>
          </section>

          {/* Accuracy vs Speed */}
          <section
            id="accuracy-vs-speed"
            className="mb-10 scroll-mt-24"
          >
            <div className="mb-5 flex items-center gap-3">
              <TrendingUp
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-3xl font-bold">
                Accuracy vs Typing Speed
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Beginners often try to maximize WPM immediately. This can lead
              to rushed keystrokes, missed keys, and repeated corrections.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              A better strategy is to establish accurate typing patterns
              first and then increase speed gradually while maintaining
              control.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border p-5">
                <h3 className="text-lg font-semibold">
                  Speed First
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Rushing can increase errors and make it harder to build
                  reliable muscle memory.
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="text-lg font-semibold">
                  Accuracy First
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Controlled practice builds dependable finger movements that
                  can later support higher speeds.
                </p>
              </div>
            </div>
          </section>

          {/* 10 Tips */}
          <section
            id="improve-accuracy"
            className="mb-10 scroll-mt-24"
          >
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-3xl font-bold">
                10 Ways to Improve Typing Accuracy
              </h2>
            </div>

            <div className="space-y-4">
              {TIPS.map((tip, index) => (
                <div
                  key={tip.title}
                  className="rounded-xl border p-5 transition-colors hover:bg-muted/40"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted font-bold"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </div>

                    <div>
                      <h3 className="font-semibold">
                        {tip.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {tip.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes */}
          <section
            id="common-mistakes"
            className="mb-10 scroll-mt-24"
          >
            <div className="mb-5 flex items-center gap-3">
              <AlertCircle
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-3xl font-bold">
                Common Causes of Typing Mistakes
              </h2>
            </div>

            <p className="mb-5 leading-7 text-muted-foreground">
              If your accuracy is not improving, check whether one of these
              habits is slowing your progress.
            </p>

            <ul className="space-y-3">
              {COMMON_MISTAKES.map((mistake) => (
                <li
                  key={mistake}
                  className="flex items-start gap-3 rounded-xl border p-4"
                >
                  <AlertCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="leading-6">
                    {mistake}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Touch Typing */}
          <section className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <Keyboard
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-3xl font-bold">
                Use Touch Typing to Build Better Accuracy
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Touch typing allows you to type without constantly looking at
              the keyboard. Consistent finger placement reduces unnecessary
              movement and helps you concentrate on the text.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              If you are still learning touch typing, start slowly. Your goal
              should be to build reliable finger patterns before trying to
              maximize your WPM.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/guides/touch-typing"
                className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Learn Touch Typing
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start Practice
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </section>

          {/* Daily Practice */}
          <section
            id="daily-practice"
            className="mb-10 scroll-mt-24"
          >
            <h2 className="text-3xl font-bold">
              A Simple Daily Accuracy Practice Plan
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              You do not need extremely long sessions. A focused 20 to 25
              minute routine can provide a practical structure for improving
              accuracy.
            </p>

            <ol className="mt-6 space-y-3">
              <li className="rounded-xl border p-4">
                <strong>5 minutes:</strong> Warm up with easy words and
                comfortable typing.
              </li>

              <li className="rounded-xl border p-4">
                <strong>7 minutes:</strong> Practice difficult letters,
                combinations, and commonly mistyped words.
              </li>

              <li className="rounded-xl border p-4">
                <strong>5 minutes:</strong> Take a focused typing test and
                maintain controlled speed.
              </li>

              <li className="rounded-xl border p-4">
                <strong>3 minutes:</strong> Review your errors and identify
                patterns.
              </li>

              <li className="rounded-xl border p-4">
                <strong>Optional 5 minutes:</strong> Repeat the difficult
                words or combinations you identified.
              </li>
            </ol>

            <p className="mt-5 leading-7 text-muted-foreground">
              The key is consistency. Practicing a little every day is usually
              easier to sustain than relying on occasional long sessions.
            </p>
          </section>

          {/* CTA */}
          <section className="mb-10 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Target
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-2xl font-bold">
                Test Your Typing Accuracy
              </h2>
            </div>

            <p className="mt-3 leading-7 text-muted-foreground">
              Use TypSmart to measure your typing speed and accuracy. After
              each test, review your performance and use the results to guide
              your next practice session.
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
                <ArrowRight
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section className="mb-10 border-t pt-8">
            <h2 className="text-2xl font-bold">
              Related Typing Guides
            </h2>

            <div className="mt-5 grid gap-3">
              {RELATED_GUIDES.map((guide) => (
                <Link
                  key={guide.path}
                  to={guide.path}
                  className="flex items-center justify-between rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
                >
                  <span>{guide.title}</span>

                  <ArrowRight
                    className="h-4 w-4 shrink-0"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            id="faq"
            className="mb-10 scroll-mt-24 border-t pt-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <BookOpen
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 className="text-3xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-xl border p-5"
                >
                  <summary className="cursor-pointer font-semibold">
                    {faq.q}
                  </summary>

                  <p className="mt-3 leading-7 text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Final Takeaway */}
          <section className="rounded-2xl border bg-muted/40 p-6">
            <h2 className="text-2xl font-bold">
              Final Takeaway
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Improving typing accuracy is mainly about controlled repetition.
              Slow down when necessary, use proper finger placement, review
              your mistakes, and practice consistently. Once accurate typing
              becomes natural, you can gradually push your speed higher.
            </p>

            <p className="mt-4 font-semibold">
              Accuracy first. Speed second. Consistency always.
            </p>
          </section>

        </article>
      </main>
    </>
  )
}

export default ImproveTypingAccuracy