import React from 'react'
import { Link } from 'react-router-dom'
import {
  Keyboard,
  Target,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Zap,
  TrendingUp,
  AlertCircle,
  Clock,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const FAQS = [
  {
    q: 'How can I stop looking at the keyboard while typing?',
    a: 'Start by learning proper finger placement, using the F and J key markers, slowing down, and practicing short sessions without looking at the keys. Gradually increase the amount of typing you complete without visual checking.',
  },
  {
    q: 'How long does it take to stop looking at the keyboard?',
    a: 'There is no fixed timeline. With consistent practice, many learners gradually become less dependent on visual checking. Your progress depends on your current habits, practice frequency, accuracy, and familiarity with touch typing.',
  },
  {
    q: 'Should I cover my keyboard when learning touch typing?',
    a: 'Temporarily covering the keys can help reduce the habit of looking down, but it is not required. You can also train by deliberately keeping your eyes on the screen and using the F and J markers to reset your hand position.',
  },
  {
    q: 'Is touch typing possible without looking at the keyboard?',
    a: 'Yes. Touch typing is designed to let you type primarily through learned finger positions and movement patterns rather than visually searching for individual keys.',
  },
  {
    q: 'Why do I keep looking down when I make a mistake?',
    a: 'Looking down is often an automatic habit developed while learning keyboard locations. Slow down, keep your eyes on the text, use your finger position to recover, and practice accuracy before increasing speed.',
  },
  {
    q: 'Should I focus on typing speed or accuracy first?',
    a: 'Focus on accuracy first. Once you can type comfortably without looking down while maintaining reliable accuracy, gradually increase your speed.',
  },
]

const PRACTICE_STEPS = [
  {
    title: 'Home-row warm-up',
    time: '3 minutes',
    description:
      'Practice ASDF and JKL; while keeping your eyes on the screen.',
  },
  {
    title: 'Finger drills',
    time: '4 minutes',
    description:
      'Practice individual keys and simple combinations with the correct fingers.',
  },
  {
    title: 'Words and sentences',
    time: '4 minutes',
    description:
      'Type common words and short sentences without checking the keyboard.',
  },
  {
    title: 'No-looking challenge',
    time: '2 minutes',
    description:
      'Deliberately keep your eyes on the screen and avoid visual keyboard checks.',
  },
  {
    title: 'Mistake review',
    time: '2 minutes',
    description:
      'Review errors and identify which keys or movements need more practice.',
  },
]

const COMMON_MISTAKES = [
  'Trying to type at maximum speed before finger movements are automatic.',
  'Using only two or three fingers instead of learning proper finger placement.',
  'Looking down every time you make a mistake.',
  'Ignoring the F and J key markers.',
  'Practicing for long periods without a specific goal.',
  'Focusing only on WPM while allowing accuracy to decline.',
  'Changing finger placement frequently instead of building consistent movement patterns.',
]

const RELATED_GUIDES = [
  {
    title: 'Touch Typing: What It Is and How to Learn It',
    to: '/guides/touch-typing',
  },
  {
    title: '10-Finger Typing: Complete Beginner’s Guide',
    to: '/guides/10-finger-typing',
  },
  {
    title: 'How Long Does It Take to Learn Touch Typing?',
    to: '/guides/learn-touch-typing',
  },
  {
    title: 'How to Improve Typing Accuracy',
    to: '/guides/improve-typing-accuracy',
  },
  {
    title: 'Best Typing Practice Routine for Faster WPM',
    to: '/guides/best-typing-practice-routine',
  },
  {
    title: 'Typing Exercises for Beginners',
    to: '/guides/typing-exercises-for-beginners',
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

const StopLookingAtKeyboard = () => {
  return (
    <>
      <SEOHead
        title="How to Stop Looking at the Keyboard While Typing | TypSmart"
        description="Learn how to stop looking at the keyboard while typing with touch-typing techniques, finger placement, accuracy drills, and a simple daily practice routine."
        canonical="/guides/stop-looking-at-keyboard"
      />

      <main className="min-h-screen px-4 py-10 md:py-14">
        <article className="mx-auto max-w-4xl">
          {/* Header */}
          <header className="mb-10 md:mb-12">
            <div className="mb-5 flex items-center gap-3">
              <Keyboard
                size={26}
                aria-hidden="true"
              />

              <p className="text-sm font-semibold uppercase tracking-wide opacity-70">
                Touch Typing Guide
              </p>
            </div>

            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              How to Stop Looking at the Keyboard While Typing
            </h1>

            <p className="mt-5 text-lg leading-8 opacity-80 md:text-xl">
              Learn how to stop looking down at the keyboard, build touch
              typing muscle memory, improve accuracy, and become more
              comfortable typing while keeping your eyes on the screen.
            </p>
          </header>

          {/* Main Content */}
          <div className="space-y-12 leading-8">
            {/* Quick Answer */}
            <section
              id="quick-answer"
              className="rounded-3xl border p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <CheckCircle2
                  size={25}
                  className="mt-1 shrink-0"
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Quick Answer
                  </h2>

                  <p className="mt-4">
                    To stop looking at the keyboard, learn consistent finger
                    placement, use the F and J markers, keep your eyes on the
                    screen, slow down enough to maintain accuracy, and practice
                    every day.
                  </p>

                  <p className="mt-4">
                    You do not need to eliminate the habit immediately. The
                    goal is to gradually increase how long you can type without
                    visually checking the keys.
                  </p>
                </div>
              </div>
            </section>

            {/* Table of Contents */}
            <nav
              aria-label="Table of contents"
              className="rounded-2xl border p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <BookOpen
                  size={23}
                  aria-hidden="true"
                />

                <h2 className="text-xl font-bold">
                  In This Guide
                </h2>
              </div>

              <ol className="grid gap-2 sm:grid-cols-2">
                <li>
                  <a
                    href="#why-look"
                    className="underline underline-offset-4"
                  >
                    Why people look at the keyboard
                  </a>
                </li>

                <li>
                  <a
                    href="#touch-typing"
                    className="underline underline-offset-4"
                  >
                    What touch typing means
                  </a>
                </li>

                <li>
                  <a
                    href="#home-row"
                    className="underline underline-offset-4"
                  >
                    Learn the home row
                  </a>
                </li>

                <li>
                  <a
                    href="#f-j-markers"
                    className="underline underline-offset-4"
                  >
                    Use F and J markers
                  </a>
                </li>

                <li>
                  <a
                    href="#practice-method"
                    className="underline underline-offset-4"
                  >
                    Practice without looking
                  </a>
                </li>

                <li>
                  <a
                    href="#daily-routine"
                    className="underline underline-offset-4"
                  >
                    15-minute daily routine
                  </a>
                </li>

                <li>
                  <a
                    href="#mistakes"
                    className="underline underline-offset-4"
                  >
                    Common mistakes
                  </a>
                </li>

                <li>
                  <a
                    href="#faq"
                    className="underline underline-offset-4"
                  >
                    Frequently asked questions
                  </a>
                </li>
              </ol>
            </nav>

            {/* Why People Look */}
            <section id="why-look">
              <div className="mb-5 flex items-center gap-3">
                <Target
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Why Do People Look at the Keyboard?
                </h2>
              </div>

              <p>
                Most beginners look at the keyboard because they are still
                learning where individual keys are located. Looking down gives
                immediate visual feedback, but it can prevent your fingers from
                developing reliable automatic movement.
              </p>

              <p className="mt-4">
                When you repeatedly search for keys with your eyes, your brain
                has fewer opportunities to learn the relationship between
                letters, finger positions, and movement patterns.
              </p>

              <p className="mt-4">
                The goal is not simply to memorize a keyboard picture. The goal
                is to make the correct finger movement feel natural enough that
                you can focus on the text instead of the physical keys.
              </p>
            </section>

            {/* Touch Typing */}
            <section id="touch-typing">
              <div className="mb-5 flex items-center gap-3">
                <Keyboard
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  What Is Touch Typing?
                </h2>
              </div>

              <p>
                Touch typing is a typing method where you use consistent finger
                positions and learned movement patterns to reach keys without
                constantly looking at the keyboard.
              </p>

              <p className="mt-4">
                Touch typing does not require you to become perfect on the
                first day. Beginners can gradually reduce their dependence on
                visual checking as their finger memory improves.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Finger Position
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Keep your hands in consistent starting positions.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Muscle Memory
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Repeated correct movements become increasingly automatic.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Visual Focus
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Your eyes stay primarily on the text rather than the keys.
                  </p>
                </div>
              </div>
            </section>

            {/* Home Row */}
            <section id="home-row">
              <div className="mb-5 flex items-center gap-3">
                <Keyboard
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  1. Learn the Home Row
                </h2>
              </div>

              <p>
                The home row is the foundation of touch typing. On a standard
                QWERTY keyboard, the main home-row keys are:
              </p>

              <div className="my-6 overflow-x-auto rounded-2xl border p-6 text-center">
                <p className="whitespace-nowrap font-mono text-xl font-bold tracking-[0.3em] sm:text-2xl">
                  A S D F&nbsp;&nbsp;&nbsp; J K L ;
                </p>
              </div>

              <p>
                Place your left fingers on A, S, D, and F and your right
                fingers on J, K, L, and ;. Your thumbs can rest comfortably
                near the spacebar.
              </p>

              <p className="mt-4">
                After reaching another key, return your fingers toward their
                normal positions. Consistent positioning makes it easier to
                type without visual checking.
              </p>
            </section>

            {/* F J Markers */}
            <section id="f-j-markers">
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  2. Use the F and J Key Markers
                </h2>
              </div>

              <p>
                Many QWERTY keyboards have small raised markers on the F and J
                keys. These markers are designed to help your index fingers
                find the correct starting position without looking down.
              </p>

              <p className="mt-4">
                If you lose your hand position, gently feel for these markers
                and reset your hands. This is more useful for touch typing than
                visually searching for every key.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  Simple rule:
                </p>

                <p className="mt-2 opacity-80">
                  If you lose your position, find F and J with your index
                  fingers, reset your hands, and continue typing.
                </p>
              </div>
            </section>

            {/* Practice Method */}
            <section id="practice-method">
              <div className="mb-5 flex items-center gap-3">
                <Target
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  3. Practice Without Looking
                </h2>
              </div>

              <p>
                If you constantly look down, deliberately create short periods
                where you cannot rely on visual confirmation. Start with a few
                seconds or one minute and gradually increase the duration.
              </p>

              <p className="mt-4">
                You can temporarily cover the keyboard or simply train yourself
                to keep your eyes on the screen. The goal is to build confidence
                in your finger movements, not to make practice frustrating.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold uppercase opacity-60">
                    Beginner
                  </p>

                  <h3 className="mt-2 font-bold">
                    30–60 seconds
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Type slowly without looking and reset when needed.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold uppercase opacity-60">
                    Developing
                  </p>

                  <h3 className="mt-2 font-bold">
                    2–5 minutes
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Use words and short sentences while maintaining screen
                    focus.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold uppercase opacity-60">
                    Comfortable
                  </p>

                  <h3 className="mt-2 font-bold">
                    Full sessions
                  </h3>

                  <p className="mt-2 text-sm leading-7 opacity-80">
                    Gradually complete longer typing sessions without checking
                    the keyboard.
                  </p>
                </div>
              </div>
            </section>

            {/* Slow Down */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <Clock
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  4. Slow Down Your Typing
                </h2>
              </div>

              <p>
                Trying to type quickly before your finger movements are
                reliable can make you look down for confirmation.
              </p>

              <p className="mt-4">
                Reduce your speed enough to concentrate on hitting the correct
                key with the correct finger. Once the movement becomes more
                automatic, increase your speed gradually.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  Accuracy first, speed second.
                </p>

                <p className="mt-2 opacity-80">
                  A slower session with consistent finger placement is often
                  more valuable than a fast session filled with repeated
                  mistakes.
                </p>
              </div>
            </section>

            {/* Keyboard Rows */}
            <section>
              <div className="mb-5 flex items-center gap-3">
                <BookOpen
                  size={24}
                  aria-hidden="true"
                />

                <h2 className="text-2xl font-bold md:text-3xl">
                  5. Practice One Keyboard Row at a Time
                </h2>
              </div>

              <p>
                Do not try to memorize the entire keyboard during one practice
                session. Break the learning process into manageable sections.
              </p>

              <ol className="mt-5 space-y-3">
  <li className="flex gap-3">
    <span className="font-bold">1.</span>
    <span>Start with the home row.</span>
  </li>

  <li className="flex gap-3">
    <span className="font-bold">2.</span>
    <span>Practice the top row.</span>
  </li>

  <li className="flex gap-3">
    <span className="font-bold">3.</span>
    <span>Practice the bottom row.</span>
  </li>

  <li className="flex gap-3">
    <span className="font-bold">4.</span>
    <span>Combine all three rows.</span>
  </li>

  <li className="flex gap-3">
    <span className="font-bold">5.</span>
    <span>Move toward real words and sentences.</span>
  </li>
</ol>
</section>

{/* Letter Combinations */}
<section>
  <div className="mb-5 flex items-center gap-3">
    <Zap
      size={24}
      aria-hidden="true"
    />

    <h2 className="text-2xl font-bold md:text-3xl">
      Practice Common Letter Combinations
    </h2>
  </div>

  <p>
    Once you are comfortable with individual keys, practice common
    letter combinations and short words. This helps your fingers
    learn natural movement patterns.
  </p>

  <div className="mt-5 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
    {[
      "th",
      "he",
      "in",
      "er",
      "an",
      "re",
      "on",
      "at",
      "en",
      "nd",
      "ti",
      "es",
    ].map((combination) => (
      <div
        key={combination}
        className="rounded-xl border p-4 text-center font-mono text-lg font-bold"
      >
        {combination}
      </div>
    ))}
  </div>

  <p className="mt-5">
    Start slowly and focus on clean keystrokes. Speed will improve
    naturally as these movement patterns become automatic.
  </p>
</section>

{/* Keep Eyes on Screen */}
<section>
  <div className="mb-5 flex items-center gap-3">
    <Target
      size={24}
      aria-hidden="true"
    />

    <h2 className="text-2xl font-bold md:text-3xl">
      Keep Your Eyes on the Screen
    </h2>
  </div>

  <p>
    Your goal is to make the keyboard unnecessary as a visual
    reference. Look at the text you are typing and let your fingers
    find the keys from memory.
  </p>

  <p className="mt-4">
    If you forget a key, use the F and J markers to reset your hand
    position instead of looking down at the entire keyboard.
  </p>
</section>

{/* Accuracy */}
<section>
  <div className="mb-5 flex items-center gap-3">
    <CheckCircle2
      size={24}
      aria-hidden="true"
    />

    <h2 className="text-2xl font-bold md:text-3xl">
      Prioritize Accuracy
    </h2>
  </div>

  <p>
    Accuracy should come before speed. If you make many mistakes,
    slow down until your fingers can consistently find the correct
    keys.
  </p>

  <div className="mt-5 rounded-2xl border p-5">
    <p className="font-semibold">
      A useful rule:
    </p>

    <p className="mt-2 opacity-80">
      Do not increase your speed until you can maintain accurate
      typing without repeatedly looking at the keyboard.
    </p>
  </div>
</section>

{/* Daily Practice */}
<section>
  <div className="mb-5 flex items-center gap-3">
    <Clock
      size={24}
      aria-hidden="true"
    />

    <h2 className="text-2xl font-bold md:text-3xl">
      Use a 15-Minute Daily Routine
    </h2>
  </div>

  <div className="overflow-x-auto rounded-2xl border">
    <table className="w-full min-w-[520px] text-left">
      <thead>
        <tr className="border-b">
          <th className="p-4 font-bold">Time</th>
          <th className="p-4 font-bold">Practice</th>
        </tr>
      </thead>

      <tbody>
        <tr className="border-b">
          <td className="p-4">3 min</td>
          <td className="p-4">
            Home-row finger placement
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-4">4 min</td>
          <td className="p-4">
            Individual key and row practice
          </td>
        </tr>

        <tr className="border-b">
          <td className="p-4">4 min</td>
          <td className="p-4">
            Words and common combinations
          </td>
        </tr>

        <tr>
          <td className="p-4">4 min</td>
          <td className="p-4">
            Real text or typing test
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

{/* Typing Tests */}
<section>
  <div className="mb-5 flex items-center gap-3">
    <TrendingUp
      size={24}
      aria-hidden="true"
    />

    <h2 className="text-2xl font-bold md:text-3xl">
      Practice With Typing Tests
    </h2>
  </div>

  <p>
    After practicing without looking at the keyboard, use typing
    tests to measure your WPM and accuracy. Focus on consistency
    rather than trying to achieve your highest possible speed every
    time.
  </p>

  <Link
    to="/typing-test"
    className="mt-5 inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:opacity-80"
  >
    Take a Typing Test
    <ArrowRight
      size={17}
      aria-hidden="true"
    />
  </Link>
</section>

{/* Common Mistakes */}
<section>
  <div className="mb-5 flex items-center gap-3">
    <AlertCircle
      size={24}
      aria-hidden="true"
    />

    <h2 className="text-2xl font-bold md:text-3xl">
      Common Mistakes to Avoid
    </h2>
  </div>

  <div className="space-y-4">
    {COMMON_MISTAKES.map((mistake) => (
      <div
        key={mistake}
        className="rounded-2xl border p-5"
      >
        <p>{mistake}</p>
      </div>
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

        <p className="mt-3 leading-7 opacity-80">
          {faq.a}
        </p>
      </details>
    ))}
  </div>
</section>

{/* Final Takeaway */}
<section>
  <h2 className="text-2xl font-bold md:text-3xl">
    Final Takeaway
  </h2>

  <p className="mt-4">
    Stopping the habit of looking at the keyboard is a gradual
    process. Build reliable finger placement, use the F and J
    markers, keep your eyes on the screen, and practice at a speed
    where you can maintain high accuracy.
  </p>

  <p className="mt-4">
    With consistent daily practice, your finger movements will
    become more automatic and looking down at the keyboard will
    become less necessary.
  </p>
</section>
</div>
</article>
</main><script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(faqSchema),
  }}
/>

</>
)

}

export { StopLookingAtKeyboard }
export default StopLookingAtKeyboard