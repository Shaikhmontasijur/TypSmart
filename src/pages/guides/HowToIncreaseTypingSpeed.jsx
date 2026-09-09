import React from 'react'
import { Link } from 'react-router-dom'
import { SEOHead } from '../../components/common/SEOHead'
import { Card } from '../../components/common/Card'
import { Badge } from '../../components/common/Badge'

const FAQS = [
  {
    question: 'Is 40 WPM a good typing speed?',
    answer:
      "40 WPM can be a useful milestone for many learners. What counts as a good speed depends on the person's goals and the accuracy maintained at that speed.",
  },
  {
    question: 'Should I practice speed or accuracy first?',
    answer:
      'Start by developing reliable accuracy and technique. Once your movements become consistent, gradually increase your speed.',
  },
  {
    question: 'How often should I practice typing?',
    answer:
      'Regular short sessions can be effective. A focused 10–15 minute session each day is a practical starting point.',
  },
  {
    question: 'Can typing speed improve without looking at the keyboard?',
    answer:
      'Yes. Touch typing is specifically designed to let you type without constantly looking at the keyboard. With practice, finger positions and movements become more automatic.',
  },
]

const INTERNAL_GUIDES = [
  {
    title: 'Learn Touch Typing',
    description:
      'Build proper finger placement and keyboard muscle memory.',
    href: '/guides/touch-typing',
  },
  {
    title: 'Stop Looking at the Keyboard',
    description:
      'Learn how to develop confidence typing without watching your hands.',
    href: '/guides/stop-looking-at-keyboard',
  },
  {
    title: 'Improve Typing Accuracy',
    description:
      'Reduce mistakes and build a more reliable typing technique.',
    href: '/guides/improve-typing-accuracy',
  },
]

export function HowToIncreaseTypingSpeed() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <>
      <SEOHead
        title="How to Increase Typing Speed — TypSmart"
        description="Learn how to increase typing speed with touch typing, accuracy practice, proper technique, and a simple daily typing routine."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero */}
        <header className="mb-10">
          <Badge variant="brand" size="md" className="mb-3">
            Typing Guide
          </Badge>

          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How to Increase Typing Speed
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">
            A practical guide to improving typing speed, accuracy,
            consistency, and confidence through focused daily practice.
          </p>

          <p className="mt-3 text-xs text-slate-400">
            Last Updated: September 2026
          </p>
        </header>

        <div className="space-y-6">
          {/* What Is Typing Speed */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              What Is Typing Speed?
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Typing speed is commonly measured in Words Per Minute (WPM).
              WPM estimates how quickly you can type standardized text during
              a typing test. Speed is useful, but accuracy and consistency are
              equally important when building reliable typing skills.
            </p>
          </Card>

          {/* Step 1 */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              1. Measure Your Current Typing Speed
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Before trying to improve, establish a baseline. Take a typing
              test under normal conditions and note your WPM, accuracy, and
              duration. Repeat the test occasionally under similar conditions
              so that your progress can be compared fairly.
            </p>

            <Link
              to="/typing-test"
              className="mt-4 inline-flex font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Take a TypSmart Typing Test →
            </Link>
          </Card>

          {/* Step 2 */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              2. Learn Touch Typing
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Touch typing means using the keyboard without constantly looking
              at the keys. Instead of searching for individual letters, your
              fingers learn consistent positions and movements.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Start with the home row and gradually practice combinations,
              words, sentences, and longer passages.
            </p>

            <Link
              to="/guides/touch-typing"
              className="mt-4 inline-flex font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Learn Touch Typing →
            </Link>
          </Card>

          {/* Step 3 */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              3. Focus on Accuracy Before Speed
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Trying to type as fast as possible can create unnecessary
              mistakes. A better approach is to build accurate finger
              movements first. Once those movements become more automatic,
              speed can increase naturally.
            </p>

            <div className="mt-4 rounded-xl bg-slate-100 p-4 dark:bg-slate-800">
              <p className="font-semibold text-slate-900 dark:text-white">
                Simple rule:
              </p>

              <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Slow and accurate practice is usually more useful than
                repeatedly typing too fast and reinforcing mistakes.
              </p>
            </div>

            <Link
              to="/guides/improve-typing-accuracy"
              className="mt-4 inline-flex font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Improve Your Typing Accuracy →
            </Link>
          </Card>

          {/* Step 4 */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              4. Practice Common Letter Combinations
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Instead of practicing only individual letters, practice common
              combinations and words. This helps your fingers become familiar
              with frequently used movement patterns.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Focus especially on combinations that repeatedly cause errors
              during your typing tests.
            </p>
          </Card>

          {/* Step 5 */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              5. Stop Looking at the Keyboard
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Looking down at the keyboard can interrupt your rhythm and reduce
              consistency. Practice keeping your eyes on the text while
              allowing your fingers to find the keys through learned
              positions.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              It may feel slower at first. That is normal. The goal is to build
              reliable muscle memory over time.
            </p>

            <Link
              to="/guides/stop-looking-at-keyboard"
              className="mt-4 inline-flex font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Learn How to Stop Looking at the Keyboard →
            </Link>
          </Card>

          {/* Step 6 */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              6. Use Short, Consistent Practice Sessions
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              You do not need extremely long sessions to improve. Consistent
              practice makes it easier to maintain technique and notice
              gradual improvements.
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  5 minutes
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Warm up and focus on accuracy.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  5 minutes
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Practice difficult letters and combinations.
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-900 dark:text-white">
                  5 minutes
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Complete a timed typing test and review the result.
                </p>
              </div>
            </div>
          </Card>

          {/* Daily Routine */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              A Simple 15-Minute Daily Routine
            </h2>

            <ol className="list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Warm up with easy typing for 3 minutes.</li>
              <li>Practice accuracy for 4 minutes.</li>
              <li>
                Work on difficult keys or combinations for 3 minutes.
              </li>
              <li>Take a timed typing test for 2 minutes.</li>
              <li>
                Review your mistakes and repeat the weak areas for 3 minutes.
              </li>
            </ol>

            <Link
              to="/guides/how-to-practice-typing-every-day"
              className="mt-5 inline-flex font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Learn How to Practice Typing Every Day →
            </Link>
          </Card>

          {/* Time To Improve */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              How Long Does It Take to Get Faster?
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Improvement varies from person to person. Your starting speed,
              accuracy, keyboard familiarity, practice consistency, and
              technique all affect progress.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Instead of focusing only on a target WPM, compare your
              performance over several weeks and look for steady improvements
              in both speed and accuracy.
            </p>
          </Card>

          {/* Common Mistakes */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              Common Mistakes That Slow You Down
            </h2>

            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Looking down at the keyboard too frequently.</li>
              <li>Prioritizing speed while ignoring accuracy.</li>
              <li>Using inconsistent finger positions.</li>
              <li>Practicing only when you feel motivated.</li>
              <li>Repeating the same mistakes without reviewing them.</li>
              <li>
                Comparing your speed with others instead of tracking your own
                progress.
              </li>
            </ul>

            <Link
              to="/guides/typing-mistakes-and-fixes"
              className="mt-5 inline-flex font-semibold text-brand-500 transition hover:text-brand-600"
            >
              Learn How to Fix Common Typing Mistakes →
            </Link>
          </Card>

          {/* Track Progress */}
          <Card className="p-6">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
              Track Your Progress
            </h2>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Record your WPM and accuracy regularly. A useful progress log
              should focus on trends rather than one unusually high or low
              score.
            </p>

            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              If your speed increases while your accuracy falls significantly,
              slow down and rebuild your technique before pushing for more
              speed.
            </p>
          </Card>

          {/* Related Guides */}
          <section
            aria-labelledby="related-guides-heading"
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"
          >
            <h2
              id="related-guides-heading"
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              Continue Learning
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Explore these related TypSmart guides to build stronger typing
              skills.
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {INTERNAL_GUIDES.map((guide) => (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm dark:border-slate-700"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {guide.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {guide.description}
                  </p>

                  <span className="mt-3 inline-block text-sm font-semibold text-brand-500">
                    Read Guide →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            aria-labelledby="faq-heading"
            className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700"
          >
            <h2
              id="faq-heading"
              className="text-xl font-bold text-slate-900 dark:text-white"
            >
              Frequently Asked Questions
            </h2>

            <div className="mt-5 space-y-5">
              {FAQS.map(({ question, answer }) => (
                <article key={question}>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {question}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <Card className="p-6 text-center">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Ready to Measure Your Typing Speed?
            </h2>

            <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Take a TypSmart typing test and establish your baseline.
            </p>

            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/typing-test"
                className="inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-3 font-semibold text-white transition hover:bg-brand-600"
              >
                Start Typing Test
              </Link>

              <Link
                to="/practice"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
              >
                Practice Typing
              </Link>
            </div>
          </Card>
        </div>
      </main>
    </>
  )
}

export default HowToIncreaseTypingSpeed