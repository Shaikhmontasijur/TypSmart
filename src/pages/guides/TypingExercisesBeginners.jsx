import React from 'react'
import { Link } from 'react-router-dom'
import {
  Keyboard,
  Target,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Zap,
  AlertCircle,
  Clock,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'What are the best typing exercises for beginners?',
    a: 'The best beginner typing exercises start with home-row drills, key combinations, common words, short sentences, accuracy practice, and short timed typing tests.',
  },
  {
    q: 'How long should beginners practice typing each day?',
    a: 'A focused 15-minute daily session is a useful starting point. Beginners can gradually increase practice time as their hands become more comfortable.',
  },
  {
    q: 'Should beginners focus on typing speed or accuracy?',
    a: 'Beginners should generally prioritize accuracy first. Once accurate finger movements become consistent, typing speed can be increased gradually.',
  },
  {
    q: 'Can typing exercises improve WPM?',
    a: 'Yes. Regular, focused typing exercises can improve keyboard familiarity, finger coordination, accuracy, rhythm, and eventually typing speed.',
  },
  {
    q: 'How often should I practice typing?',
    a: 'Short, consistent practice sessions are usually more useful than occasional long sessions. Daily practice helps reinforce correct finger movements.',
  },
]

const EXERCISES = [
  {
    number: 1,
    title: 'Home Row Exercise',
    description:
      'Start with the home row and practice keeping your fingers in their basic positions.',
    example: 'ASDF JKL;',
    tip: 'Type slowly and accurately while keeping your hands relaxed.',
  },
  {
    number: 2,
    title: 'Home Row Combination Exercise',
    description:
      'Combine home-row letters into short patterns to improve finger coordination.',
    example: 'asdf jkl;  fdsa ;lkj',
    tip: 'Focus on correct finger movement instead of maximum speed.',
  },
  {
    number: 3,
    title: 'Top Row Exercise',
    description:
      'Practice reaching from the home row to the top letter row.',
    example: 'qwer uiop  poi urewq',
    tip: 'Return your fingers toward the home position after reaching.',
  },
  {
    number: 4,
    title: 'Bottom Row Exercise',
    description:
      'Practice the bottom row to improve finger reach and coordination.',
    example: 'zxcv bnm  mnbvcxz',
    tip: 'Start slowly and prioritize accuracy over speed.',
  },
  {
    number: 5,
    title: 'Common Word Exercise',
    description:
      'Move from individual keys to frequently used words and build smoother keystroke patterns.',
    example: 'the and you that with this have from',
    tip: 'Try to type each word smoothly without stopping between letters.',
  },
  {
    number: 6,
    title: 'Repeated Letter Exercise',
    description:
      'Practice repeated patterns to improve finger control and typing rhythm.',
    example: 'as as as  de de de  jk jk jk',
    tip: 'Keep a steady rhythm instead of rushing through the pattern.',
  },
  {
    number: 7,
    title: 'Alternating Hand Exercise',
    description:
      'Practice words that require your left and right hands to work together.',
    example: 'dad sad lad ask had',
    tip: 'Concentrate on smooth transitions between both hands.',
  },
  {
    number: 8,
    title: 'Short Sentence Exercise',
    description:
      'Use short sentences to combine letters, words, spaces, punctuation and capitalization.',
    example: 'I can type better. Practice makes typing easier.',
    tip: 'Focus on accurate keystrokes and proper spacing.',
  },
  {
    number: 9,
    title: 'Accuracy Exercise',
    description:
      'Choose a short paragraph and type it slowly while trying to minimize mistakes.',
    example: 'Focus on clean and accurate repetitions.',
    tip: 'If the same mistake happens repeatedly, isolate and practice that word or key combination.',
  },
  {
    number: 10,
    title: 'Timed Typing Exercise',
    description:
      'Finish your session with a short typing test to measure WPM and accuracy.',
    example: 'Take a short focused typing test.',
    tip: 'Use the result to identify what needs more practice instead of treating every test as a competition.',
  },
]

const PRACTICE_ROUTINE = [
  ['3 minutes', 'Home-row drills', 'Practice ASDF JKL; and basic combinations.'],
  ['3 minutes', 'Key movement', 'Practice top-row and bottom-row reaches.'],
  ['4 minutes', 'Words and sentences', 'Type common words and short sentences.'],
  ['3 minutes', 'Accuracy practice', 'Slow down and work on difficult keys or words.'],
  ['2 minutes', 'Timed test', 'Measure WPM and accuracy.'],
]

const COMMON_MISTAKES = [
  'Typing too fast before accuracy is stable.',
  'Looking at the keyboard after every keystroke.',
  'Using only one or two fingers for most keys.',
  'Ignoring the home-row position.',
  'Repeating mistakes without slowing down to correct them.',
  'Practicing for long periods while keeping the hands tense.',
]

const RELATED_GUIDES = [
  {
    to: '/guides/how-to-type-faster',
    title: 'How to Type Faster',
  },
  {
    to: '/guides/improve-typing-accuracy',
    title: 'How to Improve Typing Accuracy',
  },
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
    to: '/guides/best-typing-practice-routine',
    title: 'Best Typing Practice Routine',
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

export const TypingExercisesBeginners = () => {
  return (
    <>
      <SEOHead
        title="Typing Exercises for Beginners: 10 Easy Exercises | TypSmart"
        description="Try 10 beginner typing exercises to improve finger control, keyboard familiarity, accuracy, rhythm, and typing speed with a simple daily practice routine."
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
              Typing Exercises for Beginners: 10 Easy Exercises
            </h1>

            <p className="max-w-3xl text-lg leading-8 opacity-80">
              Build better typing habits with 10 simple exercises designed to
              improve finger control, keyboard familiarity, accuracy, rhythm,
              and typing speed.
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
                <a href="#why-exercises" className="underline">
                  1. Why Typing Exercises Matter
                </a>
              </li>

              <li>
                <a href="#exercises" className="underline">
                  2. 10 Beginner Typing Exercises
                </a>
              </li>

              <li>
                <a href="#practice-routine" className="underline">
                  3. 15-Minute Practice Routine
                </a>
              </li>

              <li>
                <a href="#speed-accuracy" className="underline">
                  4. Speed vs Accuracy
                </a>
              </li>

              <li>
                <a href="#common-mistakes" className="underline">
                  5. Common Mistakes
                </a>
              </li>

              <li>
                <a href="#practice-typsmart" className="underline">
                  6. Practice With TypSmart
                </a>
              </li>

              <li>
                <a href="#related-guides" className="underline">
                  7. Related Guides
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
            {/* Why Exercises Matter */}
            <section id="why-exercises">
              <div className="mb-4 flex items-center gap-3">
                <Target
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Why Are Typing Exercises Important?
                </h2>
              </div>

              <p>
                Typing is a motor skill that improves through repeated,
                purposeful practice. Focused exercises allow beginners to
                train specific finger movements instead of relying only on
                random typing tests.
              </p>

              <p className="mt-4">
                Regular exercises can help you become more familiar with the
                keyboard, reduce repeated mistakes, develop smoother movement,
                and build a stronger foundation for faster typing.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <Target
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Finger control
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Practice specific movements and improve coordination.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <CheckCircle2
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Better accuracy
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Repeated accurate practice helps reduce common mistakes.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Zap
                    size={22}
                    aria-hidden="true"
                  />

                  <h3 className="mt-3 font-bold">
                    Higher speed
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Better control can eventually support faster typing.
                  </p>
                </div>
              </div>
            </section>

            {/* Exercises */}
            <section id="exercises">
              <div className="mb-6">
                <h2 className="text-2xl font-bold md:text-3xl">
                  10 Typing Exercises for Beginners
                </h2>

                <p className="mt-4">
                  Work through these exercises from basic finger movements to
                  complete timed typing practice. Do not worry about speed at
                  the beginning. Focus on clean and controlled keystrokes.
                </p>
              </div>

              <div className="space-y-6">
                {EXERCISES.map((exercise) => (
                  <section
                    key={exercise.number}
                    className="rounded-2xl border p-5 md:p-6"
                  >
                    <div className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-bold">
                        {exercise.number}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold">
                          {exercise.title}
                        </h3>

                        <p className="mt-2 opacity-80">
                          {exercise.description}
                        </p>

                        <div className="my-4 overflow-x-auto rounded-xl border p-4 text-center">
                          <code className="whitespace-nowrap font-mono text-sm font-semibold md:text-base">
                            {exercise.example}
                          </code>
                        </div>

                        <div className="flex gap-3">
                          <CheckCircle2
                            className="mt-1 shrink-0"
                            size={19}
                            aria-hidden="true"
                          />

                          <p className="text-sm leading-7 opacity-80">
                            <strong>Practice tip:</strong>{' '}
                            {exercise.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </section>

            {/* Practice Routine */}
            <section id="practice-routine">
              <div className="mb-5 flex items-center gap-3">
                <Clock
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Beginner&apos;s 15-Minute Typing Routine
                </h2>
              </div>

              <p>
                A short daily routine is easier to maintain than occasional
                marathon sessions. Use this structure as a starting point and
                adjust it as your skills improve.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <caption className="sr-only">
                    15-minute beginner typing practice routine
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
                Consistency matters more than trying to type at maximum speed
                every day. If your hands become tired or tense, take a break.
              </p>
            </section>

            {/* Speed vs Accuracy */}
            <section id="speed-accuracy">
              <div className="mb-4 flex items-center gap-3">
                <Target
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Speed vs Accuracy for Beginners
                </h2>
              </div>

              <p>
                Beginners should generally focus on accuracy before trying to
                reach a very high WPM. Correct finger movements provide a
                stronger foundation for future speed improvements.
              </p>

              <p className="mt-4">
                When your accuracy becomes more consistent, gradually increase
                your pace. If faster typing causes frequent errors, slow down
                and rebuild control.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-bold">
                  A simple rule:
                </p>

                <p className="mt-2 opacity-80">
                  <strong>Accuracy → Consistency → Speed.</strong>
                </p>
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
                  Common Beginner Typing Mistakes
                </h2>
              </div>

              <p className="mb-5">
                Avoiding bad habits early can make touch typing easier to
                develop.
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

            {/* Practice With TypSmart */}
            <section id="practice-typsmart">
              <div className="mb-4 flex items-center gap-3">
                <Keyboard
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Practice Typing Exercises With TypSmart
                </h2>
              </div>

              <p>
                Use TypSmart to turn these exercises into regular typing
                practice. Build accuracy first, measure your WPM, identify
                mistakes, and gradually work toward faster and more consistent
                typing.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Start Typing Practice
                  <ArrowRight
                    size={17}
                    aria-hidden="true"
                  />
                </Link>

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
              </div>
            </section>

            {/* Related Guides */}
            <section id="related-guides">
              <div className="mb-5 flex items-center gap-3">
                <BookOpen
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Related Typing Guides
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {RELATED_GUIDES.map((guide) => (
                  <Link
                    key={guide.to}
                    to={guide.to}
                    className="group rounded-2xl border p-5 transition hover:opacity-80"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-semibold">
                        {guide.title}
                      </span>

                      <ArrowRight
                        size={18}
                        className="shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <div className="mb-6">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Frequently Asked Questions
                </h2>

                <p className="mt-4">
                  Here are some common questions beginners ask about typing
                  exercises and daily typing practice.
                </p>
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

                    <p className="mt-3 leading-7 opacity-80">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final CTA */}
            <section className="rounded-3xl border p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Zap
                  size={25}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Start Practicing Today
                  </h2>

                  <p className="mt-3 leading-8 opacity-80">
                    The fastest way to improve your typing is consistent,
                    focused practice. Start with a few simple exercises,
                    prioritize accuracy, and gradually increase your speed.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/practice"
                      className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                    >
                      Start Practicing
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>

                    <Link
                      to="/typing-test"
                      className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                    >
                      Test Your WPM
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Final Takeaway */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Final Takeaway
              </h2>

              <p className="mt-4">
                Beginner typing exercises work best when they are simple,
                focused, and consistent. Start with home-row and finger
                movement exercises, progress to words and sentences, and
                finish with short accuracy or timed tests.
              </p>

              <p className="mt-4">
                With regular practice, you can build better keyboard
                familiarity, improve accuracy, develop smoother finger
                movement, and gradually increase your typing speed.
              </p>
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

export default TypingExercisesBeginners