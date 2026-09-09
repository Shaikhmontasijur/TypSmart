import React from 'react'
import { Link } from 'react-router-dom'
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Keyboard,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SEO from '../../components/SEO'

const FAQS = [
  {
    question: 'Why do I make so many typing mistakes?',
    answer:
      'Common causes include incorrect finger placement, typing too quickly, looking at the keyboard, weak keyboard familiarity, and practicing without focusing on accuracy.',
  },
  {
    question: 'How can I reduce typing mistakes?',
    answer:
      'Slow down, use the correct fingers, keep your eyes on the text, practice common problem keys, and gradually increase your speed after accuracy improves.',
  },
  {
    question: 'Should I focus on speed or accuracy first?',
    answer:
      'Accuracy should come first. Building reliable finger movements creates a stronger foundation for increasing typing speed later.',
  },
  {
    question: 'Is it normal to make mistakes while learning touch typing?',
    answer:
      'Yes. Mistakes are a normal part of learning. The important thing is to identify recurring errors and practice the movements that cause them.',
  },
  {
    question: 'How can I improve typing accuracy quickly?',
    answer:
      'Use short focused sessions, type slowly enough to stay accurate, repeat difficult words, and review your mistakes after each practice session.',
  },
  {
    question: 'Can TypSmart help me improve typing accuracy?',
    answer:
      'Yes. TypSmart typing tests and practice sessions can help you measure WPM and accuracy while building more consistent typing habits.',
  },
]

const COMMON_MISTAKES = [
  {
    title: 'Typing too fast',
    problem:
      'Increasing WPM before your fingers are ready often creates unnecessary errors.',
    fix:
      'Reduce your speed and aim for controlled, accurate keystrokes.',
  },
  {
    title: 'Using the wrong fingers',
    problem:
      'Using whichever finger feels convenient can create inconsistent movement patterns.',
    fix:
      'Learn the correct finger zones and return your hands to the home row.',
  },
  {
    title: 'Looking at the keyboard',
    problem:
      'Looking down interrupts your visual flow and makes key positions harder to memorize.',
    fix:
      'Use touch-typing techniques and the F/J markers to maintain hand position.',
  },
  {
    title: 'Ignoring repeated errors',
    problem:
      'Repeating the same mistake without analyzing it makes the error habitual.',
    fix:
      'Identify difficult letters, combinations, or words and practice them separately.',
  },
  {
    title: 'Practicing for too long',
    problem:
      'Long sessions can cause fatigue and reduce concentration.',
    fix:
      'Use short, focused sessions with breaks between them.',
  },
  {
    title: 'Focusing only on WPM',
    problem:
      'A high speed with poor accuracy does not represent efficient typing.',
    fix:
      'Track both speed and accuracy and aim for stable results.',
  },
]

const DAILY_PLAN = [
  {
    time: '3 min',
    title: 'Warm up',
    text: 'Practice home-row movements and easy letter combinations.',
  },
  {
    time: '4 min',
    title: 'Problem keys',
    text: 'Practice the letters and combinations where you make the most mistakes.',
  },
  {
    time: '5 min',
    title: 'Words and sentences',
    text: 'Type realistic words and short sentences while maintaining accuracy.',
  },
  {
    time: '3 min',
    title: 'Typing test',
    text: 'Finish with a short test and review your WPM and accuracy.',
  },
]

const RELATED_GUIDES = [
  {
    title: 'Improve Typing Accuracy',
    description:
      'Learn practical techniques for reducing errors and typing more consistently.',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'How to Type Faster',
    description:
      'Build speed without sacrificing accuracy or proper technique.',
    href: '/guides/how-to-type-faster',
  },
  {
    title: 'Touch Typing Guide',
    description:
      'Learn the fundamentals of touch typing and correct finger placement.',
    href: '/guides/touch-typing',
  },
  {
    title: 'Best Typing Practice Routine',
    description:
      'Create a simple routine that makes your typing practice more effective.',
    href: '/guides/best-typing-practice-routine',
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

export const TypingMistakesAndFixes = () => {
  return (
    <>
      <SEO
        title="Common Typing Mistakes and How to Fix Them | TypSmart"
        description="Learn the most common typing mistakes, why they happen, and practical ways to improve typing accuracy, finger placement, consistency, and speed."
      />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <article>
          {/* Hero */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <AlertCircle size={15} aria-hidden="true" />
                Typing Accuracy
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <Clock size={15} aria-hidden="true" />
                Beginner Friendly
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Common Typing Mistakes and How to Fix Them
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 opacity-80 md:text-lg">
              Learn why typing mistakes happen and how to reduce them with
              better finger placement, accuracy practice, keyboard awareness,
              and a simple daily routine.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/typing-test"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
              >
                Take a Typing Test
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/practice"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
              >
                Practice Accuracy
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
                <a className="underline underline-offset-4" href="#mistakes">
                  1. Common typing mistakes
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#causes">
                  2. Why typing mistakes happen
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#speed">
                  3. Speed vs accuracy
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#fixes">
                  4. How to fix typing mistakes
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#practice">
                  5. Practice difficult keys
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#routine">
                  6. Daily accuracy routine
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#progress">
                  7. Measure your progress
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4" href="#faq">
                  8. FAQ
                </a>
              </li>
            </ol>
          </nav>

          <div className="space-y-12">
            {/* Common Mistakes */}
            <section id="mistakes">
              <div className="flex items-start gap-3">
                <AlertCircle
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Common Typing Mistakes
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Most typing errors are not random. They usually come from
                    a small number of technique, speed, or concentration
                    problems.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {COMMON_MISTAKES.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 opacity-75">
                          <strong>Problem:</strong> {item.problem}
                        </p>

                        <p className="mt-2 text-sm leading-6 opacity-75">
                          <strong>Fix:</strong> {item.fix}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Causes */}
            <section id="causes">
              <h2 className="text-2xl font-bold md:text-3xl">
                Why Do Typing Mistakes Happen?
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Understanding the cause of an error makes it easier to fix.
                Instead of repeatedly typing the same passage, identify what
                is causing the mistake.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <Keyboard size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">
                    Weak keyboard familiarity
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    If you have not memorized key positions, your fingers may
                    hesitate or move to the wrong key.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Target size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">
                    Incorrect finger placement
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Using inconsistent fingers can make certain movements
                    unreliable.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Zap size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">
                    Excessive speed
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Typing faster than your current skill level often creates
                    more errors.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <Clock size={22} aria-hidden="true" />
                  <h3 className="mt-3 font-bold">
                    Fatigue and distraction
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Tiredness and poor concentration can reduce accuracy even
                    when your technique is good.
                  </p>
                </div>
              </div>
            </section>

            {/* Speed vs Accuracy */}
            <section id="speed">
              <div className="flex items-start gap-3">
                <TrendingUp
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Speed vs Accuracy: What Should You Prioritize?
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    If you are making frequent mistakes, increasing your speed
                    is usually the wrong solution. First build control and
                    accuracy, then gradually increase your pace.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Step 1
                  </p>
                  <h3 className="mt-2 font-bold">
                    Accuracy
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Learn to press the correct keys consistently.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Step 2
                  </p>
                  <h3 className="mt-2 font-bold">
                    Consistency
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Repeat the correct movements until they become natural.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Step 3
                  </p>
                  <h3 className="mt-2 font-bold">
                    Speed
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Increase WPM gradually while protecting accuracy.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  A simple rule:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  If your accuracy drops significantly when you increase speed,
                  slow down and rebuild control.
                </p>
              </div>
            </section>

            {/* Fixes */}
            <section id="fixes">
              <h2 className="text-2xl font-bold md:text-3xl">
                How to Fix Typing Mistakes
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Effective typing improvement comes from correcting the movement
                that causes an error instead of simply repeating the same
                mistake.
              </p>

              <ol className="mt-6 space-y-4">
                <li className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    1. Slow down
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Choose a speed where you can maintain strong accuracy.
                  </p>
                </li>

                <li className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    2. Identify the difficult keys
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Notice which letters, punctuation marks, or combinations
                    cause repeated errors.
                  </p>
                </li>

                <li className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    3. Practice the movement separately
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Repeat the difficult key or combination slowly until the
                    movement becomes more reliable.
                  </p>
                </li>

                <li className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    4. Return to real words
                  </h3>
                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Once the movement improves, practice it inside common
                    words and sentences.
                  </p>
                </li>
              </ol>
            </section>

            {/* Problem Keys */}
            <section id="practice">
              <h2 className="text-2xl font-bold md:text-3xl">
                Practice Your Difficult Keys and Combinations
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Not every key deserves equal practice time. Focus more
                attention on the movements that repeatedly cause errors.
              </p>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <Target
                    className="mt-1 shrink-0"
                    size={22}
                    aria-hidden="true"
                  />

                  <div>
                    <h3 className="font-bold">
                      Use a simple error loop
                    </h3>

                    <ol className="mt-4 space-y-3 text-sm leading-6 opacity-80">
                      <li>
                        <strong>1.</strong> Notice the repeated mistake.
                      </li>
                      <li>
                        <strong>2.</strong> Identify the correct finger.
                      </li>
                      <li>
                        <strong>3.</strong> Repeat the movement slowly.
                      </li>
                      <li>
                        <strong>4.</strong> Practice it inside words.
                      </li>
                      <li>
                        <strong>5.</strong> Test yourself again.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <p className="mt-5 leading-7 opacity-80">
                This targeted approach is usually more effective than typing
                random passages for a long time without reviewing your errors.
              </p>
            </section> 
            {/* Daily Routine */}
            <section id="routine">
              <h2 className="text-2xl font-bold md:text-3xl">
                A Simple 15-Minute Accuracy Routine
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Short, focused practice is a practical way to improve typing
                accuracy without creating unnecessary fatigue. Use this routine
                consistently and adjust the difficulty as your skills improve.
              </p>

              <div className="mt-6 grid gap-4">
                {DAILY_PLAN.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex min-w-[62px] shrink-0 items-center justify-center rounded-xl border px-2 py-2 text-sm font-bold">
                        {item.time}
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 opacity-75">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-1 shrink-0"
                    size={21}
                    aria-hidden="true"
                  />

                  <p className="leading-7 opacity-80">
                    <strong>Tip:</strong> Stop or take a short break if you
                    notice your accuracy falling because of fatigue.
                  </p>
                </div>
              </div>
            </section>

            {/* Practical Techniques */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                7 Practical Ways to Make Fewer Typing Mistakes
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    1. Keep your hands in the correct position
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    Start from the home row and use the appropriate finger for
                    each key. This gives your hands a predictable movement
                    pattern.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    2. Look at the text, not your fingers
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    Keeping your eyes on the text helps develop keyboard
                    familiarity and reduces the need to visually search for
                    keys.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    3. Type slower when accuracy drops
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    Your practice speed should be challenging but controlled.
                    Slowing down is often the fastest way to correct an
                    unstable technique.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    4. Practice common word patterns
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    Repeating familiar letter combinations helps your fingers
                    learn common movement patterns.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    5. Repeat difficult words
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    If the same word repeatedly causes an error, isolate it and
                    practice it several times before returning to full
                    passages.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    6. Take regular breaks
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    Short breaks can help maintain concentration and prevent
                    fatigue from affecting your technique.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    7. Review your results
                  </h3>
                  <p className="mt-2 leading-7 opacity-75">
                    After a typing test, look at your accuracy and identify
                    patterns instead of focusing only on your final WPM.
                  </p>
                </div>
              </div>
            </section>

            {/* Progress */}
            <section id="progress">
              <div className="flex items-start gap-3">
                <TrendingUp
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    How to Measure Your Typing Improvement
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    A single typing test does not tell the whole story. Track
                    your results over multiple sessions to understand whether
                    your technique is actually improving.
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[600px] border-collapse text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 font-bold">
                        Metric
                      </th>
                      <th className="px-4 py-3 font-bold">
                        What to watch
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">
                        WPM
                      </td>
                      <td className="px-4 py-3 opacity-75">
                        Is your speed gradually increasing?
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">
                        Accuracy
                      </td>
                      <td className="px-4 py-3 opacity-75">
                        Are you making fewer mistakes?
                      </td>
                    </tr>

                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">
                        Consistency
                      </td>
                      <td className="px-4 py-3 opacity-75">
                        Are your results becoming more stable?
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-3 font-medium">
                        Technique
                      </td>
                      <td className="px-4 py-3 opacity-75">
                        Are you using the correct fingers without looking down?
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5 leading-7 opacity-80">
                The best progress is not necessarily the biggest single WPM
                score. Look for a combination of <strong>higher accuracy,
                stable speed, and fewer repeated mistakes.</strong>
              </p>
            </section>

            {/* Mistake Recovery */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                What to Do When You Make a Typing Mistake
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Mistakes are useful feedback. Instead of becoming frustrated,
                use them to identify which part of your technique needs more
                practice.
              </p>

              <ol className="mt-6 space-y-4">
                <li className="flex gap-3 rounded-2xl border p-5">
                  <span className="font-bold">1.</span>
                  <span>
                    Notice the key or word that caused the error.
                  </span>
                </li>

                <li className="flex gap-3 rounded-2xl border p-5">
                  <span className="font-bold">2.</span>
                  <span>
                    Check whether you used the correct finger.
                  </span>
                </li>

                <li className="flex gap-3 rounded-2xl border p-5">
                  <span className="font-bold">3.</span>
                  <span>
                    Slow down and repeat the movement correctly.
                  </span>
                </li>

                <li className="flex gap-3 rounded-2xl border p-5">
                  <span className="font-bold">4.</span>
                  <span>
                    Return to normal typing and see whether the error happens
                    again.
                  </span>
                </li>
              </ol>
            </section>

            {/* CTA */}
            <section className="rounded-3xl border p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Target
                  className="mt-1 shrink-0"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Improve Your Typing Accuracy with TypSmart
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Practice regularly, measure your results, and use your
                    mistakes as feedback. TypSmart gives you a simple way to
                    practice typing and track important performance metrics
                    such as WPM and accuracy.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      to="/typing-test"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                    >
                      Start Typing Test
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>

                    <Link
                      to="/practice"
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                    >
                      Practice Now
                      <Keyboard
                        size={17}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Related Guides */}
            <section id="related-guides">
              <div className="flex items-center gap-2">
                <BookOpen
                  size={23}
                  aria-hidden="true"
                />

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
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="mt-1 shrink-0"
                    size={27}
                    aria-hidden="true"
                  />

                  <div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                      Final Takeaway
                    </h2>

                    <p className="mt-4 leading-7 opacity-80">
                      Typing mistakes are a normal part of learning. The key
                      is to understand why they happen and deliberately correct
                      the underlying movement.
                    </p>

                    <p className="mt-4 leading-7 opacity-80">
                      Focus on correct finger placement, controlled speed,
                      accuracy, and consistent practice. Over time, the correct
                      movements become automatic and your typing becomes both
                      faster and more reliable.
                    </p>

                    <div className="mt-6">
                      <Link
                        to="/typing-test"
                        className="inline-flex items-center gap-2 rounded-xl border px-4 py-3 font-semibold transition-opacity hover:opacity-80"
                      >
                        Test Your Typing
                        <ArrowRight
                          size={17}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
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

export default TypingMistakesAndFixes