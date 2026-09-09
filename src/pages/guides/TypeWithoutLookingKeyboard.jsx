import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Keyboard,
  Target,
  AlertCircle,
  Zap,
  Eye,
  TrendingUp,
} from 'lucide-react'
import SEO from '../../components/SEO'

const FAQS = [
  {
    question: 'How can I learn to type without looking at the keyboard?',
    answer:
      'Learn touch typing by memorizing home-row finger positions, using the F and J markers, practicing slowly, and keeping your eyes on the text instead of the keyboard.',
  },
  {
    question: 'How long does it take to type without looking?',
    answer:
      'Many beginners can become noticeably more comfortable within a few weeks of consistent practice. Full confidence depends on practice frequency, accuracy, and previous typing experience.',
  },
  {
    question: 'Should I look at the keyboard when I make a mistake?',
    answer:
      'Try not to. Use your finger position and the F and J markers to recover your hand position while keeping your eyes on the text.',
  },
  {
    question: 'What is the best way to stop looking down while typing?',
    answer:
      'Start with short exercises, reduce your speed, practice one keyboard row at a time, and gradually increase difficulty while maintaining accuracy.',
  },
  {
    question: 'Is typing without looking faster?',
    answer:
      'Yes, touch typing can become faster because your eyes stay focused on the text while your fingers use memorized positions instead of searching for individual keys.',
  },
  {
    question: 'Can I practice typing without looking on TypSmart?',
    answer:
      'Yes. TypSmart provides typing tests and practice sessions that can help you build accuracy, consistency, and keyboard muscle memory.',
  },
]

const FINGER_MAP = [
  ['Left pinky', 'Q A Z'],
  ['Left ring finger', 'W S X'],
  ['Left middle finger', 'E D C'],
  ['Left index finger', 'R F V T G B'],
  ['Right index finger', 'Y H N U J M'],
  ['Right middle finger', 'I K ,'],
  ['Right ring finger', 'O L .'],
  ['Right pinky', 'P ; /'],
]

const DAILY_ROUTINE = [
  {
    time: '3 min',
    title: 'Home-row warm-up',
    text: 'Practice ASDF and JKL; while keeping your eyes away from the keyboard.',
  },
  {
    time: '4 min',
    title: 'Letter combinations',
    text: 'Type simple combinations such as AS, DF, JK, and LK before moving to words.',
  },
  {
    time: '5 min',
    title: 'Words and sentences',
    text: 'Type short words and sentences while focusing on the text rather than your hands.',
  },
  {
    time: '3 min',
    title: 'Typing test',
    text: 'Finish with a short typing test and review accuracy before trying to increase speed.',
  },
]

const COMMON_MISTAKES = [
  'Trying to type fast before learning the correct finger positions.',
  'Looking down every time a difficult key appears.',
  'Using only the index fingers to reach most keys.',
  'Practicing for a long time but without consistency.',
  'Ignoring accuracy and focusing only on WPM.',
  'Changing finger positions repeatedly instead of building muscle memory.',
]

const RELATED_GUIDES = [
  {
    title: 'Stop Looking at the Keyboard',
    description:
      'A practical guide for breaking the habit of looking down while typing.',
    href: '/guides/stop-looking-at-keyboard',
  },
  {
    title: 'Touch Typing Guide',
    description:
      'Learn the fundamentals of touch typing and proper finger movement.',
    href: '/guides/touch-typing',
  },
  {
    title: '10-Finger Typing',
    description:
      'Understand how to use all ten fingers efficiently on the keyboard.',
    href: '/guides/10-finger-typing',
  },
  {
    title: 'Improve Typing Accuracy',
    description:
      'Learn practical techniques for reducing errors and improving consistency.',
    href: '/guides/improve-typing-accuracy',
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

export const TypeWithoutLookingKeyboard = () => {
  return (
    <>
      <SEO
  title="How to Type Without Looking at the Keyboard | TypSmart"
  description="Learn how to type without looking at the keyboard using touch typing, correct finger placement, muscle memory, accuracy drills, and daily practice."
/>

      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <article>
          {/* Hero */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <Keyboard size={15} aria-hidden="true" />
                Typing Guide
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <Clock size={15} aria-hidden="true" />
                Beginner Friendly
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              How to Type Without Looking at the Keyboard
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 opacity-80 md:text-lg">
              Learn how to stop looking down at your keyboard and build the
              muscle memory needed for confident touch typing. This guide
              covers finger placement, practice techniques, accuracy, and a
              simple daily routine.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/typing-test"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
              >
                Start a Typing Test
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
              >
                Practice Typing
                <Keyboard size={17} aria-hidden="true" />
              </Link>
            </div>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mb-10 rounded-2xl border p-5 md:p-6"
          >
            <div className="flex items-center gap-2">
              <BookOpen size={20} aria-hidden="true" />
              <h2 className="font-bold">In this guide</h2>
            </div>

            <ol className="mt-4 grid gap-2 text-sm md:grid-cols-2">
              <li>
                <a className="underline underline-offset-4" href="#why">
                  1. Why type without looking?
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#touch-typing">
                  2. What is touch typing?
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#home-row">
                  3. Learn the home row
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#sections">
                  4. Learn the keyboard in sections
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#markers">
                  5. Use the F and J markers
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#fingers">
                  6. Use the correct fingers
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#eyes">
                  7. Keep your eyes on the text
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#practice">
                  8. Build the habit with practice
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#routine">
                  9. Daily practice routine
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#faq">
                  10. FAQ
                </a>
              </li>
            </ol>
          </nav>

          <div className="space-y-12">
            {/* Why */}
            <section id="why">
              <div className="flex items-start gap-3">
                <Target
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Why Type Without Looking at the Keyboard?
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Looking down at the keyboard forces your attention to move
                    between the keys and the text. Touch typing removes that
                    extra step by allowing your fingers to find keys from
                    memory.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    The goal is not simply to type faster. The real goal is to
                    create reliable finger movements so you can concentrate on
                    what you are writing.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <Zap size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Better Speed</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Fewer visual interruptions can make faster typing feel
                    more natural.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Eye size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Better Focus</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Keep your attention on the text, ideas, and mistakes.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <TrendingUp size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">More Consistency</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Repeated finger movements gradually become automatic.
                  </p>
                </div>
              </div>
            </section>

            {/* Touch Typing */}
            <section id="touch-typing">
              <h2 className="text-2xl font-bold md:text-3xl">
                What Is Touch Typing?
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Touch typing is a typing method where you use specific fingers
                for specific keyboard areas without constantly looking at the
                keys.
              </p>

              <p className="mt-4 leading-7 opacity-80">
                Instead of searching for every letter visually, your hands
                learn the keyboard layout through repetition. This creates
                muscle memory and makes common key combinations easier to type.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0"
                    size={21}
                    aria-hidden="true"
                  />

                  <p className="leading-7">
                    <strong>Important:</strong> Touch typing does not mean your
                    fingers magically know every key. They become accurate
                    through repeated, controlled practice.
                  </p>
                </div>
              </div>
            </section>

            {/* Home Row */}
            <section id="home-row">
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 1: Learn the Home Row
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                The home row is the foundation of touch typing. On a standard
                QWERTY keyboard, your left fingers rest around{' '}
                <strong>ASDF</strong> and your right fingers rest around{' '}
                <strong>JKL;</strong>.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">Left hand</h3>
                  <p className="mt-2 text-2xl font-bold tracking-widest">
                    A S D F
                  </p>
                  <p className="mt-2 text-sm opacity-70">
                    Pinky → ring → middle → index
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">Right hand</h3>
                  <p className="mt-2 text-2xl font-bold tracking-widest">
                    J K L ;
                  </p>
                  <p className="mt-2 text-sm opacity-70">
                    Index → middle → ring → pinky
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-7 opacity-80">
                Practice returning your fingers to the home row after every
                movement. This gives your hands a reliable starting position.
              </p>
            </section>

            {/* Sections */}
            <section id="sections">
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 2: Learn the Keyboard in Small Sections
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Trying to memorize the entire keyboard at once can be
                overwhelming. Break it into smaller groups and master one
                section before moving to the next.
              </p>

              <ol className="mt-6 space-y-4">
                <li className="rounded-2xl border p-5">
                  <strong>Start with the home row.</strong>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Build confidence with ASDF and JKL;.
                  </p>
                </li>

                <li className="rounded-2xl border p-5">
                  <strong>Add the top row.</strong>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Slowly introduce QWERTYUIOP.
                  </p>
                </li>

                <li className="rounded-2xl border p-5">
                  <strong>Add the bottom row.</strong>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Practice ZXCVBNM and punctuation.
                  </p>
                </li>

                <li className="rounded-2xl border p-5">
                  <strong>Combine the rows.</strong>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Move from isolated letters to words and sentences.
                  </p>
                </li>
              </ol>
            </section>

            {/* Markers */}
            <section id="markers">
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 3: Use the F and J Key Markers
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Most QWERTY keyboards have small raised markers on the{' '}
                <strong>F</strong> and <strong>J</strong> keys. These markers
                help you find your starting position without looking.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <Keyboard
                    className="mt-1 shrink-0"
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-bold">Simple reset technique</h3>
                    <p className="mt-2 leading-7 opacity-75">
                      If you lose your position, briefly feel for the raised
                      marker on F or J, reset both hands to the home row, and
                      continue typing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Fingers */}
            <section id="fingers">
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 4: Use the Correct Fingers
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Correct finger placement is one of the most important parts of
                learning to type without looking. It may feel slower at first,
                but it creates better long-term muscle memory.
              </p>

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[520px] border-collapse text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 font-bold">Finger</th>
                      <th className="px-4 py-3 font-bold">Main keys</th>
                    </tr>
                  </thead>

                  <tbody>
                    {FINGER_MAP.map(([finger, keys]) => (
                      <tr key={finger} className="border-b last:border-b-0">
                        <td className="px-4 py-3 font-medium">{finger}</td>
                        <td className="px-4 py-3 opacity-80">{keys}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">Remember:</p>
                <p className="mt-2 leading-7 opacity-80">
                  Correct technique may initially reduce your WPM. That is
                  normal. Your priority should be accurate, repeatable finger
                  movements.
                </p>
              </div>
            </section>

            {/* Eyes */}
            <section id="eyes">
              <div className="flex items-start gap-3">
                <Eye
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Step 5: Keep Your Eyes on the Text
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    This is the habit that makes the biggest difference. Your
                    eyes should normally stay on the text you are typing, not
                    on your fingers.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    When you make a mistake, resist the urge to immediately
                    look down. Instead, slow down, use your finger memory, and
                    recover your hand position using the F and J markers.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border p-5"><div className="flex items-start gap-3">
                  <AlertCircle
                    className="mt-1 shrink-0"
                    size={21}
                    aria-hidden="true"
                  />

                  <p className="leading-7 opacity-80">
                    <strong>Do not force speed.</strong> If avoiding the
                    keyboard causes many mistakes, slow down until your hands
                    become more reliable.
                  </p>
                </div>
              </div>
            </section>

            {/* Practice */}
            <section id="practice">
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 6: Slow Down and Build Muscle Memory
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                One of the most common mistakes beginners make is trying to
                increase WPM too quickly. Speed should come after control.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <span className="text-sm font-semibold opacity-70">
                    Stage 1
                  </span>
                  <h3 className="mt-2 font-bold">Accuracy</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Focus on pressing the correct key with the correct finger.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <span className="text-sm font-semibold opacity-70">
                    Stage 2
                  </span>
                  <h3 className="mt-2 font-bold">Consistency</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Repeat the same movements until they feel natural.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <span className="text-sm font-semibold opacity-70">
                    Stage 3
                  </span>
                  <h3 className="mt-2 font-bold">Speed</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Gradually increase your WPM while protecting accuracy.
                  </p>
                </div>
              </div>
            </section>

            {/* Words */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 7: Practice Words Instead of Individual Keys
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Once you understand the keyboard positions, move from isolated
                letters to common words. This helps your fingers learn groups
                of movements instead of treating every character as a separate
                task.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">Example progression</p>

                <p className="mt-3 text-lg font-medium tracking-wide">
                  as → ask → fast → faster → typing → typing practice
                </p>

                <p className="mt-3 text-sm leading-6 opacity-70">
                  Keep your eyes on the text and concentrate on smooth,
                  controlled movement.
                </p>
              </div>
            </section>

            {/* Sentences */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 8: Practice Short Sentences
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                After individual words become comfortable, practice short
                sentences. Sentences introduce spaces, punctuation, repeated
                patterns, and realistic typing flow.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-medium">
                  Example:
                </p>

                <p className="mt-3 text-lg leading-8 opacity-80">
                  The quick brown fox jumps over the lazy dog.
                </p>
              </div>
            </section>{/* No-Look Exercise */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 9: Try a No-Look Typing Exercise
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Now test your ability to type without depending on visual
                keyboard cues. Start with a short passage and concentrate on
                keeping your eyes on the text.
              </p>

              <ol className="mt-6 space-y-4">
                <li className="flex gap-3 rounded-2xl border p-5">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>
                    Place your fingers correctly on the home row.
                  </span>
                </li>

                <li className="flex gap-3 rounded-2xl border p-5">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>
                    Look at the text before you begin typing.
                  </span>
                </li>

                <li className="flex gap-3 rounded-2xl border p-5">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>
                    Keep your eyes on the text while typing.
                  </span>
                </li>

                <li className="flex gap-3 rounded-2xl border p-5">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                  <span>
                    If you lose position, use F or J to reset your hands.
                  </span>
                </li>
              </ol>
            </section>

            {/* Typing Tests */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Step 10: Use Typing Tests to Measure Progress
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Regular typing tests help you measure whether your technique
                is actually improving. Do not focus only on your WPM. Track
                accuracy, consistency, and how comfortable you feel while
                typing without looking.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <Target size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Accuracy</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Fewer mistakes mean stronger control.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Zap size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">WPM</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Speed should increase naturally as accuracy improves.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <TrendingUp size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">Consistency</h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Look for stable results across multiple tests.
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/typing-test"
                  className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                >
                  Take a Typing Test
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </section>

            {/* Daily Routine */}
            <section id="routine">
              <h2 className="text-2xl font-bold md:text-3xl">
                A Simple 15-Minute Daily Routine
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                You do not need hours of practice. A focused 15-minute session
                every day can be more useful than a long session once a week.
              </p>

              <div className="mt-6 grid gap-4">
                {DAILY_ROUTINE.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex min-w-[62px] items-center justify-center rounded-xl border px-2 py-2 text-sm font-bold">
                        {item.time}
                      </div>

                      <div>
                        <h3 className="font-bold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 opacity-75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  The key is consistency.
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  Practice at roughly the same time each day and increase
                  difficulty only when your accuracy is stable.
                </p>
              </div>
            </section>

            {/* Looking Down */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                What If You Keep Looking Down?
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                If you repeatedly look at the keyboard, do not try to eliminate
                the habit by simply typing faster. Make the exercise easier and
                rebuild your confidence.
              </p>

              <ol className="mt-6 space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold">1.</span>
                  <span>Slow your typing speed down.</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">2.</span>
                  <span>Practice only one keyboard row at a time.</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">3.</span>
                  <span>Use short words before full sentences.</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">4.</span>
                  <span>Use the F and J markers to reset your hands.</span>
                </li>

                <li className="flex gap-3">
                  <span className="font-bold">5.</span>
                  <span>Increase speed only after accuracy becomes stable.</span>
                </li>
              </ol>
            </section>

            {/* Common Mistakes */}
            <section>
              <div className="flex items-start gap-3">
                <AlertCircle
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Common Mistakes to Avoid
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Avoiding these mistakes can make your transition to
                    no-look typing much smoother.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {COMMON_MISTAKES.map((mistake, index) => (
                  <div
                    key={mistake}
                    className="flex items-start gap-3 rounded-2xl border p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-sm font-bold">
                      {index + 1}
                    </span>

                    <p className="leading-6 opacity-80">
                      {mistake}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Timeline */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                How Long Does It Take to Learn?
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Everyone learns at a different pace. Your results depend on
                previous typing experience, practice frequency, accuracy, and
                how consistently you avoid looking at the keyboard.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Early stage
                  </p>
                  <h3 className="mt-2 font-bold">
                    Learn the positions
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Focus on home-row placement and correct finger movement.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Practice stage
                  </p>
                  <h3 className="mt-2 font-bold">
                    Build muscle memory
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Repeat words and sentences without looking down.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Improvement stage
                  </p>
                  <h3 className="mt-2 font-bold">
                    Increase speed
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Gradually push your WPM while maintaining accuracy.
                  </p>
                </div>
              </div>

              <p className="mt-5 leading-7 opacity-80">
                Instead of asking how many days it will take, measure progress
                by whether you can type longer passages with fewer glances and
                fewer errors.
              </p>
            </section>

            {/* Accuracy */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Accuracy Should Come Before Speed
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Typing without looking is useful only when your fingers can
                consistently reach the correct keys. If your accuracy drops
                significantly whenever you increase speed, slow down and
                reinforce the correct movement.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  A useful rule:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  Build accuracy first, consistency second, and speed third.
                  This approach creates a stronger foundation for long-term
                  typing improvement.
                </p>
              </div>
            </section>

            {/* TypSmart CTA */}
            <section className="rounded-3xl border p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Keyboard
                  className="mt-1 shrink-0"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Practice Typing Without Looking on TypSmart
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    The best way to develop no-look typing is through regular,
                    focused practice. Use TypSmart to practice real typing
                    passages, measure your WPM and accuracy, and gradually
                    build stronger keyboard muscle memory.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/typing-test"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                    >
                      Start Typing Test
                      <ArrowRight size={17} aria-hidden="true" />
                    </Link>

                    <Link
                      to="/practice"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                    >
                      Open Practice
                      <Keyboard size={17} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Guides */}
            <section id="related-guides">
              <div className="flex items-center gap-2">
                <BookOpen size={23} aria-hidden="true" />

                <h2 className="text-2xl font-bold md:text-3xl">
                  Related Typing Guides
                </h2>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {RELATED_GUIDES.map((guide) => (
                  <Link
                    key={guide.href}
                    to={guide.href}
                    className="group rounded-2xl border p-5 transition-opacity hover:opacity-80"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-bold">
                          {guide.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 opacity-70">
                          {guide.description}
                        </p>
                      </div>

                      <ArrowRight
                        className="mt-1 shrink-0 transition-transform group-hover:translate-x-1"
                        size={18}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold md:text-3xl">
                Frequently Asked Questions
              </h2>

              <div className="mt-6 space-y-4">
                {FAQS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border p-5"
                  >
                    <summary className="cursor-pointer list-none font-bold">
                      <span className="flex items-center justify-between gap-4">
                        {faq.question}
                        <span
                          className="text-xl transition-transform group-open:rotate-45"
                          aria-hidden="true"
                        >
                          +
                        </span>
                      </span>
                    </summary>

                    <p className="mt-4 leading-7 opacity-75">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>

            {/* Final Takeaway */}
            <section>
              <div className="rounded-3xl border p-6 md:p-8">
                <h2 className="text-2xl font-bold md:text-3xl">
                  Final Takeaway
                </h2>

                <p className="mt-4 leading-7 opacity-80">
                  Learning to type without looking is mainly a muscle-memory
                  skill. Start slowly, use the correct fingers, keep your eyes
                  on the text, and practice consistently.
                </p>

                <p className="mt-4 leading-7 opacity-80">
                  Do not chase WPM too early. When your accuracy and finger
                  control improve, speed will become easier to build.
                </p>

                <div className="mt-6">
                  <Link
                    to="/practice"
                    className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                  >
                    Practice Now
                    <ArrowRight size={17} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  )
}

export default TypeWithoutLookingKeyboard