import React from 'react'
import { Link } from 'react-router-dom'
import {
  Clock,
  Hand,
  Target,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Zap,
  TrendingUp,
  AlertCircle,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'How long does it take to learn touch typing?',
    a: 'There is no fixed timeline. Many beginners can become familiar with basic key positions within days or weeks, while developing reliable speed, accuracy and muscle memory usually requires consistent practice over a longer period.',
  },
  {
    q: 'How many minutes should I practice touch typing each day?',
    a: 'A focused 15-minute daily routine can be a good starting point. You can gradually increase practice time if your hands remain comfortable and your practice quality stays high.',
  },
  {
    q: 'Should I focus on typing speed or accuracy first?',
    a: 'Beginners should generally prioritize accuracy. Once your finger movements become reliable and errors decrease, gradually increasing speed is more effective.',
  },
  {
    q: 'Can I learn touch typing without looking at the keyboard?',
    a: 'Yes. Touch typing is specifically designed to help you locate keys through finger positioning and muscle memory rather than constantly looking down at the keyboard.',
  },
  {
    q: 'Why is my touch typing progress slow?',
    a: 'Progress can be affected by practice frequency, technique, accuracy, starting skill and consistency. Short, focused sessions and deliberate correction of recurring mistakes can help.',
  },
]

const PROGRESS_FACTORS = [
  {
    icon: Clock,
    title: 'Practice frequency',
    text: 'Regular practice gives your fingers more opportunities to reinforce new movement patterns.',
  },
  {
    icon: Target,
    title: 'Practice quality',
    text: 'Accurate, focused repetitions are more useful than repeatedly typing as fast as possible.',
  },
  {
    icon: Hand,
    title: 'Technique',
    text: 'Consistent finger placement makes key movement more systematic and predictable.',
  },
  {
    icon: TrendingUp,
    title: 'Starting skill',
    text: 'Your current typing ability influences how quickly you become comfortable with touch typing.',
  },
  {
    icon: CheckCircle2,
    title: 'Accuracy',
    text: 'Reducing repeated mistakes helps establish reliable typing habits.',
  },
  {
    icon: Zap,
    title: 'Consistency',
    text: 'Frequent short sessions can make it easier to maintain your learning momentum.',
  },
]

const LEARNING_STAGES = [
  {
    title: 'Stage 1: Learn the home row',
    text: 'Become comfortable with A, S, D, F and J, K, L, ;. Learn to return your fingers to these positions after reaching for other keys.',
  },
  {
    title: 'Stage 2: Learn key movement',
    text: 'Practice reaching from the home row to nearby keys while keeping your hands relaxed and controlled.',
  },
  {
    title: 'Stage 3: Type common words',
    text: 'Move from individual letters to common words and short combinations so your fingers learn useful movement patterns.',
  },
  {
    title: 'Stage 4: Type sentences',
    text: 'Practice complete sentences while maintaining accuracy, rhythm and consistent finger placement.',
  },
  {
    title: 'Stage 5: Build speed',
    text: 'Once your technique becomes reliable, gradually increase your pace through timed typing practice.',
  },
]

const PRACTICE_ROUTINE = [
  ['5 minutes', 'Finger & home-row drills', 'Build key familiarity and hand positioning.'],
  ['5 minutes', 'Words & sentences', 'Practice common patterns without looking down.'],
  ['5 minutes', 'Typing test & review', 'Measure performance and review recurring mistakes.'],
]

const IMPROVEMENT_SIGNS = [
  'You look at the keyboard less often.',
  'Common words require less conscious effort.',
  'Your typing accuracy becomes more consistent.',
  'You make fewer repeated mistakes.',
  'Your typing rhythm becomes smoother.',
  'Your WPM gradually increases without forcing speed.',
]

const COMMON_PROBLEMS = [
  'Trying to increase WPM before learning correct finger movements.',
  'Looking down at the keyboard after every few keystrokes.',
  'Practicing for long periods while your hands are tired.',
  'Ignoring recurring mistakes instead of practicing weak keys.',
  'Changing finger positions constantly instead of building consistency.',
]

const RELATED_GUIDES = [
  {
    to: '/guides/touch-typing',
    title: 'Touch Typing: What It Is and How to Learn It',
  },
  {
    to: '/guides/10-finger-typing',
    title: '10-Finger Typing: Complete Beginner’s Guide',
  },
  {
    to: '/guides/qwerty-keyboard',
    title: 'QWERTY Keyboard: Layout and Finger Placement Guide',
  },
  {
    to: '/guides/how-to-type-faster',
    title: 'How to Type Faster',
  },
  {
    to: '/guides/improve-typing-accuracy',
    title: 'How to Improve Typing Accuracy',
  },
  {
    to: '/guides/how-to-practice-typing-every-day',
    title: 'How to Practice Typing Every Day',
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

export const LearnTouchTypingTime = () => {
  return (
    <>
      <SEOHead
        title="How Long Does It Take to Learn Touch Typing? | TypSmart"
        description="Learn how long it takes to learn touch typing, what affects your progress, realistic learning stages, daily practice routines and ways to improve WPM and accuracy."
      />

      <main className="min-h-screen px-4 py-10 md:py-14">
        <article className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-70">
              <Clock
                size={17}
                aria-hidden="true"
              />
              <span>Typing Guide</span>
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              How Long Does It Take to Learn Touch Typing?
            </h1>

            <p className="max-w-3xl text-lg leading-8 opacity-80">
              Find out how long it may take to learn touch typing, what
              influences your progress, what realistic learning stages look
              like, and how a simple daily routine can improve your typing
              speed and accuracy.
            </p>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mb-12 rounded-2xl border p-5 md:p-6"
          >
            <div className="mb-4 flex items-center gap-2 font-bold">
              <BookOpen
                size={18}
                aria-hidden="true"
              />
              <span>In this guide</span>
            </div>

            <ol className="grid gap-2 text-sm md:grid-cols-2">
              <li>
                <a href="#how-long" className="underline">
                  1. How Long Does It Take?
                </a>
              </li>

              <li>
                <a href="#learned-means" className="underline">
                  2. What Does Learned Touch Typing Mean?
                </a>
              </li>

              <li>
                <a href="#progress-factors" className="underline">
                  3. Factors That Affect Progress
                </a>
              </li>

              <li>
                <a href="#learning-stages" className="underline">
                  4. Realistic Learning Progression
                </a>
              </li>

              <li>
                <a href="#practice-routine" className="underline">
                  5. Daily Practice Routine
                </a>
              </li>

              <li>
                <a href="#speed-vs-accuracy" className="underline">
                  6. Speed vs Accuracy
                </a>
              </li>

              <li>
                <a href="#improvement-signs" className="underline">
                  7. Signs You Are Improving
                </a>
              </li>

              <li>
                <a href="#faq" className="underline">
                  8. FAQ
                </a>
              </li>
            </ol>
          </nav>

          <div className="space-y-12 text-base leading-8">
            {/* How Long */}
            <section id="how-long">
              <div className="mb-4 flex items-center gap-3">
                <Clock
                  size={25}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  How Long Does It Take to Learn Touch Typing?
                </h2>
              </div>

              <p>
                There is no single number of days that applies to everyone.
                Some beginners become comfortable with the basic keyboard
                layout relatively quickly, while developing dependable speed
                and accuracy can take considerably longer.
              </p>

              <p className="mt-4">
                Your starting typing ability, practice frequency, accuracy,
                finger technique and consistency all influence how quickly you
                develop touch-typing skills.
              </p>

              <div className="mt-6 rounded-2xl border p-5 md:p-6">
                <div className="flex gap-3">
                  <Target
                    className="mt-1 shrink-0"
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-bold">
                      Think in skill levels, not deadlines
                    </h3>

                    <p className="mt-2 opacity-80">
                      Instead of expecting to become fast after a fixed number
                      of days, focus on gradually improving key familiarity,
                      accuracy, consistency and typing speed.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Learned Means */}
            <section id="learned-means">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                What Does “Learned” Touch Typing Mean?
              </h2>

              <p>
                Learning touch typing does not simply mean memorizing where
                every key is located. A useful level of proficiency means you
                can find keys with much less visual checking and type common
                words and sentences with consistent accuracy.
              </p>

              <p className="mt-4">
                Your speed can continue improving after you learn the basic
                technique. Touch typing is a skill that develops through
                repeated practice and increasingly automatic finger movement.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <Hand
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Key familiarity
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    You know where important keys are without consciously
                    searching for each one.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Target
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Better accuracy
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Your fingers make fewer repeated mistakes during normal
                    typing.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Zap
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Automatic movement
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Common words and key combinations require less conscious
                    effort.
                  </p>
                </div>
              </div>
            </section>

            {/* Progress Factors */}
            <section id="progress-factors">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Factors That Affect Your Touch Typing Progress
              </h2>

              <p className="mb-6">
                Two people can practice for the same amount of time and make
                different amounts of progress. The quality and consistency of
                practice matter as much as the total number of minutes.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                {PROGRESS_FACTORS.map((factor) => {
                  const Icon = factor.icon

                  return (
                    <div
                      key={factor.title}
                      className="rounded-2xl border p-5"
                    >
                      <div className="flex gap-4">
                        <Icon
                          className="mt-1 shrink-0"
                          size={22}
                          aria-hidden="true"
                        />

                        <div>
                          <h3 className="font-bold">
                            {factor.title}
                          </h3>

                          <p className="mt-1 opacity-80">
                            {factor.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Learning Stages */}
            <section id="learning-stages">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                A Realistic Touch Typing Learning Progression
              </h2>

              <p className="mb-6">
                Rather than expecting a specific result after a certain number
                of days, think of touch typing as a series of skill-building
                stages.
              </p>

              <div className="space-y-4">
                {LEARNING_STAGES.map((stage, index) => (
                  <div
                    key={stage.title}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {stage.title}
                        </h3>

                        <p className="mt-2 opacity-80">
                          {stage.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Practice Time */}
            <section id="practice-time">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How Much Should You Practice Each Day?
              </h2>

              <p>
                You do not need extremely long sessions to start improving. A
                short, focused routine can give your fingers regular
                opportunities to reinforce correct movements.
              </p>

              <div className="my-6 rounded-2xl border p-5 md:p-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">
                      5 minutes — Finger and home-row exercises
                    </p>

                    <p className="mt-1 text-sm opacity-80">
                      Practice key positions and controlled finger movements.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      5 minutes — Words and sentences
                    </p>

                    <p className="mt-1 text-sm opacity-80">
                      Build useful movement patterns through real words and
                      short sentences.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">
                      5 minutes — Timed test and review
                    </p>

                    <p className="mt-1 text-sm opacity-80">
                      Measure your performance and identify recurring errors.
                    </p>
                  </div>
                </div>
              </div>

              <p>
                If you have more time, you can gradually extend your sessions.
                However, take breaks when your hands become tired and avoid
                practicing with unnecessary tension.
              </p>
            </section>

            {/* Practice Routine */}
            <section id="practice-routine">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                A Simple 15-Minute Daily Practice Routine
              </h2>

              <div className="overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[650px] border-collapse text-left">
                  <caption className="sr-only">
                    15-minute touch typing practice routine
                  </caption>

                  <thead>
                    <tr>
                      <th className="border-b p-4 font-bold">
                        Time
                      </th>

                      <th className="border-b p-4 font-bold">
                        Activity
                      </th>

                      <th className="border-b p-4 font-bold">
                        Focus
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {PRACTICE_ROUTINE.map(
                      ([time, activity, focus]) => (
                        <tr key={time}>
                          <td className="border-b p-4 font-semibold">
                            {time}
                          </td>

                          <td className="border-b p-4 font-semibold">
                            {activity}
                          </td>

                          <td className="border-b p-4 opacity-80">
                            {focus}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <p className="mt-5">
                After each session, identify a few recurring mistakes and
                practice those specific keys or combinations instead of simply
                trying to increase your WPM.
              </p>
            </section>

            {/* Speed vs Accuracy */}
            <section id="speed-vs-accuracy">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Should You Focus on Speed or Accuracy?
              </h2>

              <p>
                For beginners, accuracy should generally come first. Trying to
                maximize WPM before your finger movements are reliable can
                encourage unnecessary mistakes and reinforce inefficient
                movements.

                <span className="font-semibold">
                  A better progression is: accuracy → consistency → speed.
                </span>
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <CheckCircle2
                    size={23}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Build accuracy first
                  </h3>

                  <p className="mt-2 opacity-80">
                    Aim for controlled typing with fewer mistakes. Slow down
                    when necessary so your fingers learn the correct movements.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <TrendingUp
                    size={23}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Increase speed gradually
                  </h3>

                  <p className="mt-2 opacity-80">
                    Once accuracy becomes consistent, gradually increase your
                    typing pace while maintaining good technique.
                  </p>
                </div>
              </div>
            </section>

            {/* Improvement Signs */}
            <section id="improvement-signs">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Signs That Your Touch Typing Is Improving
              </h2>

              <p className="mb-6">
                WPM is useful, but it is not the only way to measure progress.
                Improvements in confidence, accuracy and automatic finger
                movement are also important indicators.
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                {IMPROVEMENT_SIGNS.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-start gap-3 rounded-xl border p-4"
                  >
                    <CheckCircle2
                      className="mt-1 shrink-0"
                      size={19}
                      aria-hidden="true"
                    />

                    <span>{sign}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Problems */}
            <section id="common-problems">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle
                  size={25}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Common Touch Typing Practice Problems
                </h2>
              </div>

              <p className="mb-6">
                If your progress feels slower than expected, check whether
                any of these habits are limiting your improvement.
              </p>

              <div className="space-y-3">
                {COMMON_PROBLEMS.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-xl border p-4"
                  >
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Practical Tips */}
            <section id="practical-tips">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How to Learn Touch Typing More Effectively
              </h2>

              <div className="space-y-4">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    1. Practice regularly
                  </h3>

                  <p className="mt-2 opacity-80">
                    A consistent routine makes it easier to reinforce typing
                    patterns than occasional long practice sessions.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    2. Keep your fingers positioned consistently
                  </h3>

                  <p className="mt-2 opacity-80">
                    Learn the home-row position and return your fingers to the
                    correct starting positions after reaching for other keys.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    3. Practice weak keys
                  </h3>

                  <p className="mt-2 opacity-80">
                    Pay attention to keys and combinations that repeatedly
                    cause errors. Targeted practice can be more useful than
                    simply repeating random tests.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    4. Avoid unnecessary keyboard checking
                  </h3>

                  <p className="mt-2 opacity-80">
                    Gradually reduce how often you look down at the keyboard.
                    This helps develop stronger spatial awareness and muscle
                    memory.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    5. Stay relaxed
                  </h3>

                  <p className="mt-2 opacity-80">
                    Keep your hands and shoulders relaxed. Excessive tension
                    can make typing uncomfortable and may interfere with
                    consistent movement.
                  </p>
                </div>
              </div>
            </section>

            {/* TypSmart CTA */}
            <section className="rounded-3xl border p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Ready to Practice?
                  </h2>

                  <p className="mt-2 max-w-2xl opacity-80">
                    Put your skills into practice with TypSmart typing tests
                    and build speed, accuracy and consistency one session at a
                    time.
                  </p>
                </div>

                <Link
                  to="/typing-test"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border px-5 py-3 font-semibold transition-opacity hover:opacity-80"
                >
                  Start Typing Test
                  <ArrowRight
                    size={18}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="group rounded-2xl border p-5"
                  >
                    <summary className="cursor-pointer list-none font-bold">
                      <div className="flex items-start justify-between gap-4">
                        <span>{faq.q}</span>

                        <span
                          className="shrink-0 text-xl transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </div>
                    </summary>

                    <p className="mt-4 opacity-80">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Related Guides */}
            <section id="related-guides">
              <h2 className="mb-6 text-2xl font-bold md:text-3xl">
                Related Typing Guides
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                {RELATED_GUIDES.map((guide) => (
                  <Link
                    key={guide.to}
                    to={guide.to}
                    className="group rounded-2xl border p-5 transition-opacity hover:opacity-80"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">
                        {guide.title}
                      </span>

                      <ArrowRight
                        className="shrink-0 transition-transform group-hover:translate-x-1"
                        size={19}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}