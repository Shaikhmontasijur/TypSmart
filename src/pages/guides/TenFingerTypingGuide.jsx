import React from 'react'
import { Link } from 'react-router-dom'
import {
  Hand,
  Target,
  Keyboard,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Clock,
  Zap,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'What is 10-finger typing?',
    a: '10-finger typing is a keyboarding method where both hands work together and each finger is assigned specific keys. It is commonly associated with touch typing and helps develop consistent finger movement.',
  },
  {
    q: 'Is 10-finger typing the same as touch typing?',
    a: 'They are closely related but not exactly identical. 10-finger typing focuses on using both hands and assigned fingers systematically, while touch typing emphasizes typing without looking at the keyboard.',
  },
  {
    q: 'How long does it take to learn 10-finger typing?',
    a: 'Learning time varies by person. Consistent short practice sessions can help beginners develop finger control, accuracy, and muscle memory progressively.',
  },
  {
    q: 'Should I focus on speed when learning 10-finger typing?',
    a: 'No. Beginners should prioritize correct finger placement and accuracy first. Speed usually improves naturally as the correct movements become more automatic.',
  },
  {
    q: 'How can I practice 10-finger typing?',
    a: 'Practice home-row positions, individual key reaches, words, sentences, and short typing tests. Regular practice combined with mistake review is an effective way to build typing skill.',
  },
]

const BENEFITS = [
  {
    icon: Hand,
    title: 'Better Finger Control',
    description:
      'Assigned finger positions create a consistent movement pattern across the keyboard.',
  },
  {
    icon: Target,
    title: 'Higher Accuracy',
    description:
      'Consistent technique can reduce unnecessary movements and help you make fewer mistakes.',
  },
  {
    icon: TrendingUp,
    title: 'Higher WPM Potential',
    description:
      'Efficient finger movement provides a strong foundation for increasing typing speed over time.',
  },
  {
    icon: Keyboard,
    title: 'Less Keyboard Looking',
    description:
      'Systematic finger placement makes it easier to gradually develop touch-typing habits.',
  },
]

const LEARNING_STEPS = [
  'Learn the home-row positions before worrying about speed.',
  'Practice reaching nearby keys and returning your fingers to the home row.',
  'Use the intended finger for each key instead of whichever finger feels easiest.',
  'Look at the text rather than constantly checking the keyboard.',
  'Keep your hands, wrists, and fingers relaxed while typing.',
  'Increase speed gradually after your accuracy becomes consistent.',
]

const COMMON_MISTAKES = [
  'Using only two or three fingers.',
  'Looking down at the keyboard after every word.',
  'Ignoring proper finger assignments.',
  'Trying to type too fast before accuracy is stable.',
  'Keeping the hands tense while typing.',
  'Practicing for long periods without taking breaks.',
]

const ROUTINE = [
  {
    time: '3 minutes',
    task: 'Home-row practice',
    description: 'Practice ASDF and JKL; movements and simple combinations.',
  },
  {
    time: '4 minutes',
    task: 'Key reaches',
    description:
      'Practice nearby keys while returning each finger to its home position.',
  },
  {
    time: '5 minutes',
    task: 'Words and sentences',
    description:
      'Type simple words and short sentences while maintaining accuracy.',
  },
  {
    time: '3 minutes',
    task: 'Typing test',
    description:
      'Take a short test and review your WPM, accuracy, and repeated mistakes.',
  },
]

const RELATED_GUIDES = [
  {
    title: 'Touch Typing: What It Is and How to Learn It',
    href: '/guides/touch-typing',
  },
  {
    title: 'How to Type Faster',
    href: '/guides/how-to-type-faster',
  },
  {
    title: 'Improve Typing Accuracy',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'What Is WPM?',
    href: '/guides/what-is-wpm',
  },
  {
    title: 'How to Practice Typing Every Day',
    href: '/guides/how-to-practice-typing-every-day',
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

export const TenFingerTypingGuide = () => {
  return (
    <>
      <SEOHead
        title="10-Finger Typing: Complete Beginner's Guide | TypSmart"
        description="Learn 10-finger typing with proper finger placement, home-row technique, practical exercises, accuracy tips, and a simple daily practice routine."
      />

      <main className="min-h-screen px-4 py-10 md:py-14">
        <article className="mx-auto max-w-4xl">
          <header className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide opacity-70">
              Typing Guide
            </p>

            <h1 className="mb-5 text-3xl font-bold leading-tight md:text-5xl">
              10-Finger Typing: Complete Beginner&apos;s Guide
            </h1>

            <p className="max-w-3xl text-lg leading-8 opacity-80">
              Learn how to use all ten fingers while typing, understand proper
              finger placement, build accuracy, and develop faster keyboard
              skills through consistent practice.
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
                <a href="#what-is-10-finger-typing" className="underline">
                  What Is 10-Finger Typing?
                </a>
              </li>
              <li>
                <a href="#why-learn-10-finger-typing" className="underline">
                  Why Learn 10-Finger Typing?
                </a>
              </li>
              <li>
                <a href="#home-row" className="underline">
                  Start With the Home Row
                </a>
              </li>
              <li>
                <a href="#finger-placement" className="underline">
                  Finger Placement
                </a>
              </li>
              <li>
                <a href="#how-to-learn" className="underline">
                  How to Learn
                </a>
              </li>
              <li>
                <a href="#practice-routine" className="underline">
                  15-Minute Practice Routine
                </a>
              </li>
              <li>
                <a href="#common-mistakes" className="underline">
                  Common Mistakes
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
            {/* What Is 10-Finger Typing */}
            <section id="what-is-10-finger-typing">
              <div className="mb-4 flex items-center gap-3">
                <Hand size={24} aria-hidden="true" />

                <h2 className="text-2xl font-bold md:text-3xl">
                  What Is 10-Finger Typing?
                </h2>
              </div>

              <p>
                10-finger typing is a method of typing where both hands work
                together and each finger is responsible for specific keys.
                Instead of relying mainly on a few fingers, you train your
                hands to use the keyboard systematically.
              </p>

              <p className="mt-4">
                This method is closely associated with{' '}
                <Link
                  to="/guides/touch-typing"
                  className="font-semibold underline"
                >
                  touch typing
                </Link>
                , where you gradually learn to type without constantly looking
                at the keyboard.
              </p>

              <div className="mt-6 rounded-2xl border p-5 md:p-6">
                <p className="font-semibold">The basic idea</p>

                <p className="mt-2 text-sm leading-7 opacity-75">
                  Each finger develops a predictable job on the keyboard.
                  With repeated practice, these movements become more
                  automatic and require less conscious effort.
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section id="why-learn-10-finger-typing">
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                Why Learn 10-Finger Typing?
              </h2>

              <p>
                Learning systematic finger placement can make typing more
                efficient and give you a stronger foundation for improving
                speed and accuracy.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {BENEFITS.map((benefit) => {
                  const Icon = benefit.icon

                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border p-5 md:p-6"
                    >
                      <Icon size={24} aria-hidden="true" />

                      <h3 className="mt-3 font-bold">{benefit.title}</h3>

                      <p className="mt-2 text-sm leading-7 opacity-75">
                        {benefit.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Home Row */}
            <section id="home-row">
              <div className="mb-4 flex items-center gap-3">
                <Keyboard size={24} aria-hidden="true" />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Start With the Home Row
                </h2>
              </div>

              <p>
                The home row is the foundation of touch typing. On a standard
                QWERTY keyboard, the main home-row keys are:
              </p>

              <div className="my-6 overflow-x-auto rounded-2xl border p-5 text-center">
                <p className="whitespace-nowrap font-mono text-xl font-bold tracking-widest md:text-2xl">
                  A S D F&nbsp;&nbsp;&nbsp;&nbsp;J K L ;
                </p>
              </div>

              <p>
                Place your left-hand fingers on A, S, D, and F. Place your
                right-hand fingers on J, K, L, and semicolon. Your thumbs can
                rest naturally near the spacebar.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="text-sm leading-7">
                  <strong>Tip:</strong> The small raised marks on many
                  QWERTY keyboards are found on F and J. They can help you
                  locate the home position without looking down.
                </p>
              </div>
            </section>

            {/* Finger Placement */}
            <section id="finger-placement">
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                Basic 10-Finger Typing Finger Placement
              </h2>

              <div className="overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <caption className="sr-only">
                    Basic home-row finger placement for 10-finger typing
                  </caption>

                  <thead className="border-b">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Finger</th>
                      <th className="px-4 py-3 font-semibold">
                        Home Position
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3">Left pinky</td>
                      <td className="px-4 py-3">A</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">Left ring finger</td>
                      <td className="px-4 py-3">S</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">Left middle finger</td>
                      <td className="px-4 py-3">D</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">Left index finger</td>
                      <td className="px-4 py-3">F</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">Right index finger</td>
                      <td className="px-4 py-3">J</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">Right middle finger</td>
                      <td className="px-4 py-3">K</td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3">Right ring finger</td>
                      <td className="px-4 py-3">L</td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3">Right pinky</td>
                      <td className="px-4 py-3">;</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5">
                The thumbs are generally used for the spacebar. Finger
                assignments can vary slightly depending on keyboard layout
                and typing system, but the home-row method provides a useful
                starting point for beginners.
              </p>
            </section>

            {/* How To Learn */}
            <section id="how-to-learn">
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                How to Learn 10-Finger Typing
              </h2>

              <p>
                Learning 10-finger typing is easier when you build the correct
                movement patterns before trying to maximize WPM.
              </p>

              <ol className="mt-6 list-decimal space-y-3 pl-6">
                {LEARNING_STEPS.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>

              <div className="mt-6 rounded-2xl border p-5 md:p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={23}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-bold">
                      Accuracy before speed
                    </h3>

                    <p className="mt-2 text-sm leading-7 opacity-75">
                      If your accuracy drops whenever you increase speed,
                      slow down slightly and rebuild consistent finger
                      movements before pushing your WPM higher.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Speed */}
            <section id="speed-is-not-first">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                Speed Is Not the First Goal
              </h2>

              <p>
                Beginners often make the mistake of chasing a high WPM score
                immediately. That can reinforce incorrect finger habits and
                frequent mistakes.
              </p>

              <p className="mt-4">
                A better approach is to prioritize correct keystrokes,
                relaxed movement, and consistent technique. Once the movement
                becomes more natural, speed can improve without forcing every
                keystroke.
              </p>

              <p className="mt-4">
                When you are ready to increase your speed, combine this method
                with our guide on{' '}
                <Link
                  to="/guides/how-to-increase-typing-speed"
                  className="font-semibold underline"
                >
                  increasing typing speed
                </Link>
                .
              </p>
            </section>

            {/* Common Mistakes */}
            <section id="common-mistakes">
              <h2 className="mb-5 text-2xl font-bold md:text-3xl">
                Common 10-Finger Typing Mistakes
              </h2>

              <ul className="list-disc space-y-3 pl-6">
                {COMMON_MISTAKES.map((mistake) => (
                  <li key={mistake}>{mistake}</li>
                ))}
              </ul>

              <p className="mt-5">
                If repeated mistakes are slowing your progress, review our
                guide on{' '}
                <Link
                  to="/guides/improve-typing-accuracy"
                  className="font-semibold underline"
                >
                  improving typing accuracy
                </Link>{' '}
                for practical strategies.
              </p>
            </section>

            {/* Practice Routine */}
            <section id="practice-routine">
              <div className="mb-4 flex items-center gap-3">
                <Clock size={24} aria-hidden="true" />

                <h2 className="text-2xl font-bold md:text-3xl">
                  A Simple 15-Minute Practice Routine
                </h2>
              </div>

              <p>
                A short daily routine is enough to begin developing stronger
                finger control. Focus on quality rather than trying to type
                as quickly as possible.
              </p>

              <div className="mt-6 grid gap-4">
                {ROUTINE.map((item) => (
                  <div
                    key={item.time}
                    className="rounded-2xl border p-5 md:p-6"
                  >
                    <p className="text-sm font-semibold opacity-70">
                      {item.time}
                    </p>

                    <h3 className="mt-1 font-bold">{item.task}</h3>

                    <p className="mt-2 text-sm leading-7 opacity-75">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                Repeating this routine regularly can help build typing muscle
                memory without making practice overwhelming.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/practice"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Start Typing Practice
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  to="/typing-test"
                  className="inline-flex items-center gap-2 rounded-lg border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Take a Typing Test
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </section>

            {/* Learning Time */}
            <section id="learning-time">
              <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                How Long Does It Take to Learn 10-Finger Typing?
              </h2>

              <p>
                Learning time is different for everyone. Your progress depends
                on your starting skill, practice frequency, accuracy, and how
                consistently you use the correct finger positions.
              </p>

              <p className="mt-4">
                Instead of focusing on a specific number of days, measure
                progress through fewer mistakes, better consistency, and
                gradually increasing WPM.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <Zap
                    size={22}
                    className="mt-1 shrink-0"
                    aria-hidden="true"
                  />

                  <p className="text-sm leading-7">
                    <strong>Better progress metric:</strong> If your accuracy
                    and consistency are improving while your WPM gradually
                    increases, your typing technique is moving in the right
                    direction.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border p-6 md:p-8">
              <h2 className="text-2xl font-bold md:text-3xl">
                Practice 10-Finger Typing With TypSmart
              </h2>

              <p className="mt-3 leading-7 opacity-80">
                Put your finger placement skills into practice with TypSmart.
                Practice regularly, measure your WPM and accuracy, and use
                each session to build better keyboard habits.
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
                10-finger typing gives beginners a systematic way to use the
                keyboard. Start with the home row, learn consistent finger
                assignments, prioritize accuracy, and practice regularly.
              </p>

              <p className="mt-4">
                With consistent practice, correct finger movements can become
                more automatic, giving you a stronger foundation for faster,
                more accurate typing.
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