import React from 'react'
import { Link } from 'react-router-dom'
import {
  Target,
  Keyboard,
  Gauge,
  TrendingUp,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Zap,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'Can you really reach 100 WPM?',
    a: 'Yes. Some typists can reach 100 WPM through consistent touch-typing practice, strong accuracy, targeted drills, and gradual speed training. However, progress varies from person to person.',
  },
  {
    q: 'How long does it take to reach 100 WPM?',
    a: 'There is no fixed timeline. It depends on your current speed, accuracy, typing technique, practice consistency, and previous experience. Treat 100 WPM as a long-term training target rather than a guaranteed deadline.',
  },
  {
    q: 'What accuracy should I have at 100 WPM?',
    a: 'High accuracy is important at advanced speeds. Aim to maintain strong accuracy while increasing speed instead of sacrificing accuracy simply to achieve a higher WPM score.',
  },
  {
    q: 'Should I practice speed or accuracy first?',
    a: 'Build reliable accuracy and touch-typing technique first. Once your movements become consistent, gradually introduce faster training speeds and short speed drills.',
  },
  {
    q: 'How often should I practice typing to reach 100 WPM?',
    a: 'Regular focused practice is generally more useful than occasional marathon sessions. Even short daily sessions can help reinforce correct finger movements and improve consistency.',
  },
]

const TRAINING_LEVELS = [
  {
    title: 'Foundation',
    speed: 'Below 40 WPM',
    description:
      'Focus on finger placement, touch typing, keyboard familiarity, and reducing basic mistakes.',
  },
  {
    title: 'Developing',
    speed: '40–60 WPM',
    description:
      'Build accuracy, rhythm, consistency, and confidence with longer passages.',
  },
  {
    title: 'Advanced',
    speed: '60–80 WPM',
    description:
      'Introduce targeted drills, difficult words, realistic text, and controlled speed training.',
  },
  {
    title: 'Expert Goal',
    speed: '80–100+ WPM',
    description:
      'Refine rhythm, reduce hesitation, analyze weak patterns, and maintain accuracy at high speed.',
  },
]

const ROUTINE = [
  '5 minutes of comfortable warm-up typing',
  '5 minutes of accuracy-focused practice',
  '10 minutes of difficult-word and pattern drills',
  '5 minutes of controlled speed practice',
  '1–2 timed typing tests',
  'Review mistakes and identify your weakest patterns',
]

const RELATED_GUIDES = [
  {
    title: 'How to Increase Typing Speed',
    href: '/guides/how-to-increase-typing-speed',
  },
  {
    title: 'How to Type Faster',
    href: '/guides/how-to-type-faster',
  },
  {
    title: 'Touch Typing Guide',
    href: '/guides/touch-typing',
  },
  {
    title: 'Improve Typing Accuracy',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'Typing Mistakes and Fixes',
    href: '/guides/typing-mistakes-and-fixes',
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

export function HowToReach100WPM() {
  return (
    <>
      <SEOHead
        title="How to Reach 100 WPM: Advanced Typing Training Guide | TypSmart"
        description="Learn how to work toward 100 WPM with touch typing, accuracy training, rhythm drills, realistic text, and a structured practice routine."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-white dark:bg-gray-950">
        <article className="mx-auto max-w-4xl px-5 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
              <BookOpen
                className="h-4 w-4"
                aria-hidden="true"
              />
              TypSmart Guides
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              How to Reach 100 WPM: Advanced Typing Training Guide
            </h1>

            <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
              Reaching 100 words per minute is an advanced typing goal that
              requires more than simply typing faster. Learn how to build
              touch-typing skill, improve accuracy, develop rhythm, train
              difficult patterns, and structure practice for long-term
              progress.
            </p>
          </header>

          {/* Quick Navigation */}
          <nav
            aria-label="Guide contents"
            className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="mt-0 text-xl font-bold text-gray-900 dark:text-white">
              In This Guide
            </h2>

            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              <li>
                <a
                  href="#what-is-100-wpm"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  What does 100 WPM mean?
                </a>
              </li>

              <li>
                <a
                  href="#possible"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Is 100 WPM possible?
                </a>
              </li>

              <li>
                <a
                  href="#touch-typing"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Master touch typing
                </a>
              </li>

              <li>
                <a
                  href="#accuracy"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Prioritize accuracy
                </a>
              </li>

              <li>
                <a
                  href="#training"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Training routine
                </a>
              </li>

              <li>
                <a
                  href="#mistakes"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  Common mistakes
                </a>
              </li>

              <li>
                <a
                  href="#metrics"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  What to measure
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            {/* 100 WPM */}
            <section id="what-is-100-wpm">
              <div className="not-prose mb-4 flex items-center gap-3">
                <Gauge
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  What Does 100 WPM Mean?
                </h2>
              </div>

              <p>
                WPM means <strong>words per minute</strong>. In many typing
                tests, one standard word is calculated as five characters,
                including spaces.
              </p>

              <p>
                A result of 100 WPM therefore represents a very high level of
                typing speed. But speed should never be considered separately
                from accuracy.
              </p>

              <p>
                A typist who produces 100 WPM with frequent errors may be less
                effective than someone typing 80 WPM with excellent accuracy
                and consistency.
              </p>

              <div className="not-prose my-8 rounded-xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900 dark:bg-blue-950/30">
                <div className="flex gap-4">
                  <Zap
                    className="mt-1 h-6 w-6 shrink-0 text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="mt-0 text-lg font-bold text-gray-900 dark:text-white">
                      Key idea
                    </h3>

                    <p className="mb-0 text-gray-700 dark:text-gray-300">
                      The goal is not simply to make your fingers move faster.
                      The goal is to make accurate typing movements more
                      automatic so speed can increase without losing control.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Possible */}
            <section id="possible">
              <div className="not-prose mb-4 flex items-center gap-3">
                <Target
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  Is 100 WPM Possible for Everyone?
                </h2>
              </div>

              <p>
                100 WPM is an ambitious advanced-level goal. Some people can
                reach it through dedicated training, while others may find a
                different speed target more appropriate.
              </p>

              <p>
                Your progress can depend on your previous typing experience,
                keyboard familiarity, technique, accuracy, practice
                consistency, and the type of text you are typing.
              </p>

              <p>
                Instead of treating 100 WPM as a guaranteed outcome, use it as
                a long-term training target and focus on measurable
                improvement.
              </p>

              <div className="not-prose my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
                <table className="w-full min-w-[600px] text-left text-sm">
                  <caption className="sr-only">
                    Typing training levels toward 100 WPM
                  </caption>

                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr>
                      <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                        Level
                      </th>

                      <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                        Typical Range
                      </th>

                      <th className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                        Main Focus
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                    {TRAINING_LEVELS.map((level) => (
                      <tr key={level.title}>
                        <td className="px-5 py-4 font-semibold text-gray-900 dark:text-white">
                          {level.title}
                        </td>

                        <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                          {level.speed}
                        </td>

                        <td className="px-5 py-4 text-gray-700 dark:text-gray-300">
                          {level.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Touch Typing */}
            <section id="touch-typing">
              <div className="not-prose mb-4 flex items-center gap-3">
                <Keyboard
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  1. Master Touch Typing
                </h2>
              </div>

              <p>
                One of the most important foundations for advanced typing is
                touch typing. Touch typing means using your fingers
                systematically while relying less on visual searching for
                individual keys.
              </p>

              <p>
                If you constantly look down at the keyboard, your visual
                attention is divided between the keyboard and the text.
                Developing automatic finger movement can make typing more
                consistent.
              </p>

              <p>
                Learn correct finger positions first. Speed should come after
                reliable technique.
              </p>

              <p>
                If you are still developing this foundation, read our{' '}
                <Link
                  to="/guides/touch-typing"
                  className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  complete touch typing guide
                </Link>
                .
              </p>
            </section>

            {/* Accuracy */}
            <section id="accuracy">
              <div className="not-prose mb-4 flex items-center gap-3">
                <CheckCircle2
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  2. Prioritize Accuracy Before Speed
                </h2>
              </div>

              <p>
                Trying to type faster than your current control allows can
                create repeated mistakes. Those mistakes interrupt your rhythm
                and can make practice less efficient.
              </p>

              <p>
                A better approach is to gradually increase speed while
                maintaining strong accuracy.
              </p>

              <p>Think of your training progression as:</p>

              <ol>
                <li>Correct finger movement</li>
                <li>Consistent accuracy</li>
                <li>Smooth rhythm</li>
                <li>Higher speed</li>
              </ol>

              <p>
                For a deeper accuracy strategy, see our guide on{' '}
                <Link
                  to="/guides/improve-typing-accuracy"
                  className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  improving typing accuracy
                </Link>
                .
              </p>
            </section>

            {/* Rhythm */}
            <section id="rhythm">
              <h2>3. Build a Consistent Typing Rhythm</h2>

              <p>
                Advanced typing is not only about moving your fingers quickly.
                It is also about maintaining a steady rhythm.
              </p>

              <p>
                Try to avoid sudden bursts of speed followed by pauses. Smooth,
                predictable keystrokes can help you maintain control during
                longer passages.
              </p>

              <p>
                When practicing, pay attention to where your rhythm breaks.
                Difficult letter combinations, unfamiliar words, numbers, and
                punctuation can all create interruptions.
              </p>
            </section>

            {/* Difficult patterns */}
            <section id="patterns">
              <h2>4. Practice Difficult Letter Combinations</h2>

              <p>
                Some combinations are naturally more difficult than others.
                Instead of repeatedly typing only easy words, identify the
                combinations that slow you down.
              </p>

              <p>Examples may include:</p>

              <ul>
                <li>Common consonant clusters</li>
                <li>Words requiring frequent hand alternation</li>
                <li>Repeated letters</li>
                <li>Words containing punctuation</li>
                <li>Less familiar vocabulary</li>
              </ul>

              <p>
                Targeted drills can help turn difficult movements into more
                automatic patterns.
              </p>
            </section>

            {/* Speed drills */}
            <section id="speed-drills">
              <div className="not-prose mb-4 flex items-center gap-3">
                <TrendingUp
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  5. Use Short Speed Drills
                </h2>
              </div>

              <p>
                Long typing tests are useful for measuring performance, but
                short speed drills can be especially useful for training.
              </p>

              <p>
                During a short drill, focus on producing fast but controlled
                keystrokes. Do not sacrifice accuracy simply to produce a
                larger WPM number.
              </p>

              <p>
                After the drill, review your errors and identify what caused
                the slowdown.
              </p>
            </section>

            {/* Different speeds */}
            <section id="different-speeds">
              <h2>6. Train at Different Speeds</h2>

              <p>
                Practicing at exactly the same speed every day can limit your
                ability to adapt.
              </p>

              <p>Include different training intensities:</p>

              <ul>
                <li>
                  <strong>Comfortable pace:</strong> Focus on accuracy and
                  flow.
                </li>

                <li>
                  <strong>Training pace:</strong> Push slightly beyond your
                  normal comfort zone.
                </li>

                <li>
                  <strong>Speed drills:</strong> Briefly test your maximum
                  controlled speed.
                </li>
              </ul>

              <p>
                The goal is to expand your comfortable speed gradually rather
                than forcing maximum speed throughout every session.
              </p>
            </section>

            {/* Realistic text */}
            <section id="realistic-text">
              <h2>7. Practice Realistic Text</h2>

              <p>
                Random word tests can help develop speed, but real-world
                typing often includes punctuation, capitalization, numbers,
                and varied vocabulary.
              </p>

              <p>
                Include realistic sentences and paragraphs in your training.
                This helps develop skills that transfer beyond simple typing
                tests.
              </p>
            </section>

           {/* Results */}
            <section id="results">
              <h2>8. Analyze Your Typing Results</h2>

              <p>
                Do not look only at your final WPM score. Track several useful
                metrics over time.
              </p>

              <ul>
                <li>WPM</li>
                <li>Accuracy</li>
                <li>Error count</li>
                <li>Consistency</li>
                <li>Performance on difficult words</li>
              </ul>

              <p>
                A small increase in speed combined with better accuracy can be
                meaningful progress even when the headline WPM number changes
                only slightly.
              </p>
            </section>

            {/* Fatigue */}
            <section id="fatigue">
              <div className="not-prose mb-4 flex items-center gap-3">
                <AlertTriangle
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  9. Avoid Practicing Through Fatigue
                </h2>
              </div>

              <p>
                More practice is not always better practice. When your hands,
                wrists, or attention become fatigued, your technique may
                become less consistent.
              </p>

              <p>
                Use reasonable sessions and take breaks when necessary.
                Comfortable posture and relaxed hands are important parts of
                sustainable typing practice.
              </p>
            </section>

            {/* Training Routine */}
            <section id="training">
              <div className="not-prose mb-4 flex items-center gap-3">
                <Clock
                  className="h-7 w-7 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2 className="m-0 text-2xl font-bold text-gray-900 dark:text-white">
                  10. Follow a Structured 100 WPM Training Routine
                </h2>
              </div>

              <p>
                A structured routine can make practice more purposeful. For
                example, an advanced session could look like this:
              </p>

              <ol>
                {ROUTINE.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>

              <p>
                Adjust the duration according to your experience, recovery,
                and available time.
              </p>

              <div className="not-prose my-8 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900">
                <h3 className="mt-0 text-lg font-bold text-gray-900 dark:text-white">
                  The 80/20 Training Principle
                </h3>

                <p className="mb-0 text-gray-700 dark:text-gray-300">
                  Spend most of your practice building reliable technique,
                  accuracy, and consistency. Use shorter periods for pushing
                  your speed ceiling.
                </p>
              </div>
            </section>

            {/* Frequency */}
            <section id="frequency">
              <h2>How Often Should You Practice?</h2>

              <p>
                Consistency is generally more useful than occasional marathon
                sessions. Regular practice gives you more opportunities to
                reinforce correct movement patterns.
              </p>

              <p>
                Even a short focused session can be valuable when you practice
                with a specific objective.
              </p>

              <p>
                If you want a repeatable daily system, see our guide to{' '}
                <Link
                  to="/guides/how-to-practice-typing-every-day"
                  className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  practicing typing every day
                </Link>
                .
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="mistakes">
              <h2>Common Mistakes That Slow Advanced Typists</h2>

              <ul>
                <li>Chasing WPM while ignoring accuracy</li>
                <li>Looking down at the keyboard too often</li>
                <li>Using inconsistent finger placement</li>
                <li>Typing with excessive hand tension</li>
                <li>Repeating tests without reviewing mistakes</li>
                <li>Practicing only easy words</li>
                <li>Ignoring punctuation and capitalization</li>
                <li>Practicing while extremely tired</li>
              </ul>

              <p>
                If you repeatedly make the same errors, review our{' '}
                <Link
                  to="/guides/typing-mistakes-and-fixes"
                  className="font-semibold text-blue-600 hover:underline dark:text-blue-400"
                >
                  typing mistakes and fixes guide
                </Link>
                .
              </p>
            </section>

            {/* Metrics */}
            <section id="metrics">
              <h2>100 WPM Training: What Should You Measure?</h2>

              <p>
                Instead of asking only, "Did I reach 100 WPM?", ask better
                questions:
              </p>

              <ul>
                <li>Is my average speed increasing?</li>
                <li>Is my accuracy improving?</li>
                <li>Am I making fewer repeated mistakes?</li>
                <li>Can I maintain speed for longer?</li>
                <li>Which words or patterns slow me down?</li>
                <li>Is my typing technique becoming more automatic?</li>
              </ul>

              <p>
                These measurements provide a much clearer picture of your
                development than a single personal-best score.
              </p>
            </section>

            {/* Everyday Typing */}
            <section id="everyday">
              <h2>100 WPM vs. Useful Everyday Typing</h2>

              <p>
                A very high typing speed is not necessary for everyone. For
                students, office workers, developers, writers, and other
                users, the most valuable combination may simply be good
                accuracy, comfortable technique, and sufficient speed for the
                task.
              </p>

              <p>
                If your work becomes easier and you can type confidently
                without constantly correcting errors, you are already gaining
                a practical typing advantage.
              </p>
            </section>

            {/* Final Takeaway */}
            <section id="final-takeaway">
              <h2>Final Takeaway</h2>

              <p>
                Working toward 100 WPM is an advanced typing challenge. The
                most effective approach is not to chase speed blindly, but to
                build strong fundamentals and gradually increase performance.
              </p>

              <p>
                Focus on touch typing, accuracy, rhythm, targeted drills,
                realistic text, and consistent practice. Track your progress
                over time and adjust your training based on your actual
                weaknesses.
              </p>

              <p>
                <strong>
                  Train for control first, then let speed become the result of
                  better technique.
                </strong>
              </p>
            </section>

            {/* CTA */}
            <section
              aria-labelledby="practice-with-typsmart"
              className="not-prose my-12 rounded-2xl border border-blue-200 bg-blue-50 p-6 sm:p-8 dark:border-blue-900 dark:bg-blue-950/40"
            >
              <div className="flex gap-4">
                <Zap
                  className="mt-1 h-7 w-7 shrink-0 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <div>
                  <h2
                    id="practice-with-typsmart"
                    className="mt-0 text-2xl font-bold text-gray-900 dark:text-white"
                  >
                    Practice Toward 100 WPM with TypSmart
                  </h2>

                  <p className="mt-3 text-gray-700 dark:text-gray-300">
                    Ready to test your current typing performance? Use
                    TypSmart's typing test and practice tools to measure WPM,
                    improve accuracy, and build better typing habits.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/typing-test"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Take a Typing Test
                      <ArrowRight
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </Link>

                    <Link
                      to="/practice"
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
                    >
                      Practice Typing
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Guides */}
            <section
              aria-labelledby="related-guides"
              className="not-prose mt-12"
            >
              <div className="mb-5 flex items-center gap-3">
                <BookOpen
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  aria-hidden="true"
                />

                <h2
                  id="related-guides"
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Related Typing Guides
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {RELATED_GUIDES.map((guide) => (
                  <Link
                    key={guide.href}
                    to={guide.href}
                    className="group rounded-xl border border-gray-200 bg-white p-5 transition hover:border-blue-300 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {guide.title}
                      </span>

                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq" className="not-prose mt-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-4">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-gray-900 marker:hidden dark:text-white">
                      <span className="flex items-center justify-between gap-4">
                        {faq.q}

                        <span
                          className="text-xl text-gray-400 transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </span>
                    </summary>

                    <p className="mb-0 mt-4 leading-7 text-gray-600 dark:text-gray-300">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}