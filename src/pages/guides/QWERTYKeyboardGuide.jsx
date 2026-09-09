import React from 'react'
import { Link } from 'react-router-dom'
import {
  Keyboard,
  Hand,
  Target,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Zap,
  AlertCircle,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'What is a QWERTY keyboard?',
    a: 'QWERTY is a keyboard layout named after the first six letters on the top letter row: Q, W, E, R, T, and Y. It is widely used on English-language keyboards.',
  },
  {
    q: 'What is the home row on a QWERTY keyboard?',
    a: 'The home row is the starting position for touch typing. The main letter positions are A, S, D, F for the left hand and J, K, L, semicolon for the right hand.',
  },
  {
    q: 'Why are F and J keys important?',
    a: 'Most standard QWERTY keyboards have raised marks on F and J. These tactile markers help you find the correct hand position without looking at the keyboard.',
  },
  {
    q: 'How long does it take to learn the QWERTY keyboard?',
    a: 'Many beginners can learn the basic key positions within a few days or weeks with consistent practice. Developing reliable touch-typing muscle memory takes longer and depends on practice frequency.',
  },
  {
    q: 'Can learning QWERTY improve typing speed?',
    a: 'Yes. Understanding key positions and using consistent finger placement can reduce unnecessary hand movement and support better typing speed and accuracy.',
  },
]

const FINGER_PLACEMENT = [
  ['Left pinky', 'A', 'A, Q, Z and nearby keys'],
  ['Left ring finger', 'S', 'S, W, X'],
  ['Left middle finger', 'D', 'D, E, C'],
  ['Left index finger', 'F', 'F, R, T, G, V, B'],
  ['Right index finger', 'J', 'J, Y, U, H, N, M'],
  ['Right middle finger', 'K', 'K, I'],
  ['Right ring finger', 'L', 'L, O'],
  ['Right pinky', ';', 'Semicolon, P and other right-side keys'],
]

const LEARNING_STEPS = [
  {
    title: 'Master the home row',
    text: 'Start with A, S, D, F and J, K, L, ;. Return your fingers to these positions after reaching for other keys.',
  },
  {
    title: 'Use the F and J markers',
    text: 'Use the raised bumps on F and J to reposition your hands without looking down.',
  },
  {
    title: 'Learn one key group at a time',
    text: 'Practice nearby keys from each home-row finger before trying to memorize the entire keyboard at once.',
  },
  {
    title: 'Practice common words',
    text: 'Move from isolated letters to short words and sentences so your fingers learn useful movement patterns.',
  },
  {
    title: 'Focus on accuracy first',
    text: 'Avoid chasing maximum WPM while learning. Accurate repetitions create stronger long-term typing habits.',
  },
  {
    title: 'Measure your progress',
    text: 'Use regular typing tests to track WPM, accuracy and consistency as your keyboard control improves.',
  },
]

const COMMON_MISTAKES = [
  'Using only the index fingers for most keys.',
  'Looking down at the keyboard after every few keystrokes.',
  'Ignoring the home-row position.',
  'Moving the entire hand unnecessarily.',
  'Trying to increase WPM before accuracy is stable.',
  'Keeping the fingers, hands or wrists tense.',
]

const PRACTICE_ROUTINE = [
  ['5 minutes', 'Home-row drills', 'ASDF JKL; and simple key combinations.'],
  ['5 minutes', 'Words and sentences', 'Practice common words without looking down.'],
  ['5 minutes', 'Typing test', 'Complete a short test and review mistakes.'],
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
    to: '/guides/how-to-type-faster',
    title: 'How to Type Faster',
  },
  {
    to: '/guides/improve-typing-accuracy',
    title: 'How to Improve Typing Accuracy',
  },
  {
    to: '/guides/stop-looking-at-keyboard',
    title: 'How to Stop Looking at the Keyboard',
  },
  {
    to: '/guides/typing-exercises-for-beginners',
    title: 'Typing Exercises for Beginners',
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

export const QWERTYKeyboardGuide = () => {
  return (
    <>
      <SEOHead
        title="QWERTY Keyboard: Layout & Finger Placement Guide | TypSmart"
        description="Learn the QWERTY keyboard layout, home-row position, finger placement, common mistakes and practical exercises to improve typing speed and accuracy."
      />

      <main className="min-h-screen px-4 py-10 md:py-14">
        <article className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide opacity-70">
              <Keyboard
                size={17}
                aria-hidden="true"
              />
              <span>Typing Guide</span>
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              QWERTY Keyboard: Layout and Finger Placement Guide
            </h1>

            <p className="max-w-3xl text-lg leading-8 opacity-80">
              Learn the QWERTY keyboard layout, understand key positions,
              master basic finger placement, and build better typing habits
              through practical exercises.
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
                <a href="#what-is-qwerty" className="underline">
                  1. What Is a QWERTY Keyboard?
                </a>
              </li>
              <li>
                <a href="#keyboard-layout" className="underline">
                  2. Basic QWERTY Layout
                </a>
              </li>
              <li>
                <a href="#home-row" className="underline">
                  3. Home Row
                </a>
              </li>
              <li>
                <a href="#finger-placement" className="underline">
                  4. Finger Placement
                </a>
              </li>
              <li>
                <a href="#learning-qwerty" className="underline">
                  5. How to Learn QWERTY
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="underline">
                  6. Common Mistakes
                </a>
              </li>
              <li>
                <a href="#practice-routine" className="underline">
                  7. Daily Practice Routine
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
            {/* What Is QWERTY */}
            <section id="what-is-qwerty">
              <div className="mb-4 flex items-center gap-3">
                <Keyboard
                  size={24}
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-bold md:text-3xl">
                  What Is a QWERTY Keyboard?
                </h2>
              </div>

              <p>
                QWERTY is one of the most widely used keyboard layouts for
                typing English. Its name comes from the first six letters on
                the top letter row: <strong>Q, W, E, R, T, Y</strong>.
              </p>

              <p className="mt-4">
                The QWERTY layout organizes letters, numbers, punctuation and
                modifier keys into a predictable physical arrangement. For
                touch typing, learning this arrangement helps you develop a
                mental map of the keyboard.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex gap-3">
                  <Target
                    className="mt-1 shrink-0"
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="mb-1 font-bold">
                      The main goal
                    </h3>

                    <p className="opacity-80">
                      Learn where keys are located well enough that you can
                      type without constantly looking down at the keyboard.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Basic Layout */}
            <section id="keyboard-layout">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                The Basic QWERTY Keyboard Layout
              </h2>

              <p>
                The letter keys are arranged across three main rows. The exact
                physical design can vary between keyboards and regions, but the
                standard English QWERTY letter arrangement follows this basic
                structure.
              </p>

              <div className="my-6 overflow-x-auto rounded-2xl border p-5">
                <pre
                  className="min-w-max text-center font-mono text-sm leading-9 md:text-base"
                  aria-label="Simplified QWERTY keyboard layout"
                >
{`Q W E R T Y U I O P
 A S D F G H J K L
  Z X C V B N M`}
                </pre>
              </div>

              <p>
                In addition to letter keys, a full keyboard contains number
                keys, punctuation, modifier keys, function keys and navigation
                controls.
              </p>
            </section>

            {/* Home Row */}
            <section id="home-row">
              <div className="mb-4 flex items-center gap-3">
                <Hand
                  size={24}
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-bold md:text-3xl">
                  Understanding the Home Row
                </h2>
              </div>

              <p>
                The home row is the starting position used in traditional touch
                typing. Your fingers rest on the following main keys:
              </p>

              <div className="my-6 rounded-2xl border p-6 text-center">
                <p className="font-mono text-xl font-bold tracking-widest md:text-2xl">
                  A S D F&nbsp;&nbsp;&nbsp; J K L ;
                </p>
              </div>

              <p>
                The left hand normally starts with the pinky on A, ring finger
                on S, middle finger on D and index finger on F. The right hand
                starts with the index finger on J, middle finger on K, ring
                finger on L and pinky on semicolon.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={22}
                    aria-hidden="true"
                  />

                  <p>
                    The raised bumps on <strong>F</strong> and{' '}
                    <strong>J</strong> help you find the correct hand
                    position by touch.
                  </p>
                </div>
              </div>
            </section>

            {/* Finger Placement */}
            <section id="finger-placement">
              <div className="mb-4 flex items-center gap-3">
                <Hand
                  size={24}
                  aria-hidden="true"
                />
                <h2 className="text-2xl font-bold md:text-3xl">
                  Basic QWERTY Finger Placement
                </h2>
              </div>

              <p className="mb-6">
                Proper finger placement gives each finger a predictable area
                of responsibility. This can reduce unnecessary movement and
                make touch typing easier to learn.
              </p>

              <div className="overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <caption className="sr-only">
                    QWERTY keyboard finger placement guide
                  </caption>

                  <thead>
                    <tr>
                      <th className="border-b p-4 font-bold">
                        Finger
                      </th>
                      <th className="border-b p-4 font-bold">
                        Home Position
                      </th>
                      <th className="border-b p-4 font-bold">
                        Example Keys
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {FINGER_PLACEMENT.map(
                      ([finger, home, keys]) => (
                        <tr key={finger}>
                          <td className="border-b p-4 font-semibold">
                            {finger}
                          </td>

                          <td className="border-b p-4 font-mono font-bold">
                            {home}
                          </td>

                          <td className="border-b p-4 opacity-80">
                            {keys}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              <p className="mt-5 opacity-80">
                Finger assignments can vary slightly depending on typing
                method, keyboard size and personal comfort. The important
                principle is to use consistent, controlled movement instead of
                relying on one or two fingers for everything.
              </p>
            </section>

            {/* Why Finger Placement Matters */}
            <section id="why-finger-placement">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Why Finger Placement Matters
              </h2>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <Target
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Better accuracy
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Consistent finger positions can make key selection more
                    predictable.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Zap
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Less movement
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Efficient finger movement can reduce unnecessary hand
                    travel across the keyboard.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Hand
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Stronger habits
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Repeated correct movements help build touch-typing muscle
                    memory.
                  </p>
                </div>
              </div>

              <p className="mt-5">
                Do not force your hands into an uncomfortable position. Keep
                your wrists relaxed, avoid excessive tension and use natural
                finger movements.
              </p>
            </section>

            {/* Learning */}
            <section id="learning-qwerty">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How to Learn the QWERTY Keyboard
              </h2>

              <p className="mb-6">
                You do not need to memorize every key in one session. A
                structured approach makes learning easier and gives your hands
                time to develop reliable movement patterns.
              </p>

              <div className="space-y-4">
                {LEARNING_STEPS.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {step.title}
                        </h3>

                        <p className="mt-1 opacity-80">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes">
              <div className="mb-4 flex items-center gap-3">
                <AlertCircle
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Common QWERTY Typing Mistakes
                </h2>
              </div>

              <p className="mb-5">
                Beginners often slow down their progress by developing habits
                that make touch typing harder.
              </p>

              <ul className="space-y-3">
                {COMMON_MISTAKES.map((mistake) => (
                  <li
                    key={mistake}
                    className="flex gap-3"
                  >
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full border"
                      aria-hidden="true"
                    />

                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Accuracy First */}
            <section id="accuracy-first">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Accuracy First, Speed Second
              </h2>

              <p>
                When learning the QWERTY layout, it is tempting to focus only
                on WPM. However, repeatedly making mistakes can reinforce
                incorrect movements.
              </p>

              <p className="mt-4">
                A better approach is to slow down enough to type accurately,
                then gradually increase speed while maintaining control.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  A useful rule:
                </p>

                <p className="mt-2 opacity-80">
                  If increasing your speed causes frequent errors, reduce your
                  pace and rebuild accuracy
                  before pushing your WPM higher.
                </p>
              </div>
            </section>

            {/* Practice Routine */}
            <section id="practice-routine">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                A Simple 15-Minute QWERTY Practice Routine
              </h2>

              <p className="mb-6">
                Short, consistent sessions are often easier to maintain than
                occasional long practice sessions.
              </p>

              <div className="overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[620px] border-collapse text-left">
                  <caption className="sr-only">
                    15-minute QWERTY typing practice routine
                  </caption>

                  <thead>
                    <tr>
                      <th className="border-b p-4">Time</th>
                      <th className="border-b p-4">Activity</th>
                      <th className="border-b p-4">Focus</th>
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
                practice those specific keys or combinations instead of
                randomly increasing your typing speed.
              </p>
            </section>

            {/* Touch Typing Connection */}
            <section id="touch-typing-connection">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                QWERTY and Touch Typing
              </h2>

              <p>
                Knowing the QWERTY layout is the foundation. Touch typing takes
                the next step by teaching your fingers to find keys without
                relying on visual checking.
              </p>

              <p className="mt-4">
                As your muscle memory improves, you can focus more attention on
                the text itself rather than searching for individual keys.
              </p>

              <div className="mt-6">
                <Link
                  to="/guides/touch-typing"
                  className="inline-flex items-center gap-2 font-semibold underline"
                >
                  Learn touch typing
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>

            {/* TypSmart CTA */}
            <section
              id="practice-with-typsmart"
              className="rounded-2xl border p-6 md:p-8"
            >
              <div className="flex items-center gap-3">
                <Zap
                  size={25}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Practice QWERTY Typing With TypSmart
                </h2>
              </div>

              <p className="mt-4 max-w-2xl opacity-80">
                Put your QWERTY skills into practice with TypSmart. Take a
                typing test to measure your WPM and accuracy, or use focused
                practice to build stronger keyboard skills.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/typing-test"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Take a Typing Test
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Practice Typing
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
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
                    key={guide.to}
                    to={guide.to}
                    className="group rounded-xl border p-4 transition hover:opacity-80"
                  >
                    <span className="font-semibold">
                      {guide.title}
                    </span>

                    <ArrowRight
                      className="ml-2 inline-block transition-transform group-hover:translate-x-1"
                      size={16}
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <div className="mb-5 flex items-center gap-3">
                <BookOpen
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-4">
                {FAQS.map((faq) => (
                  <details
                    key={faq.q}
                    className="rounded-2xl border p-5"
                  >
                    <summary className="cursor-pointer font-bold">
                      {faq.q}
                    </summary>

                    <p className="mt-3 opacity-80">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final Takeaway */}
            <section id="final-takeaway">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Final Takeaway
              </h2>

              <p>
                The QWERTY keyboard becomes much easier to use when you stop
                treating each key as an isolated target and start building a
                consistent finger-to-key map.
              </p>

              <p className="mt-4">
                Start with the home row, use the F and J markers, practice
                accurate movements and gradually increase speed. With
                consistent practice, the keyboard can become familiar enough
                that you no longer need to look down while typing.
              </p>

              <div className="mt-6">
                <Link
                  to="/typing-test"
                  className="inline-flex items-center gap-2 font-semibold underline"
                >
                  Test your typing speed on TypSmart
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </section>
          </div>

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