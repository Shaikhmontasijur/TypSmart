import React from 'react'
import { Link } from 'react-router-dom'
import {
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
    question: 'Why is typing important for students?',
    answer:
      'Typing helps students write assignments, take notes, complete online exams, research information, communicate digitally, and finish computer-based work more efficiently.',
  },
  {
    question: 'What is a good typing speed for students?',
    answer:
      'A practical target depends on age and experience. Many students can aim for around 30–50 WPM while learning, then gradually work toward 50–60+ WPM with consistent practice.',
  },
  {
    question: 'How can students improve typing speed?',
    answer:
      'Students can improve by learning touch typing, practicing regularly, focusing on accuracy first, correcting repeated mistakes, and gradually increasing speed.',
  },
  {
    question: 'How long should students practice typing each day?',
    answer:
      'Around 10–20 minutes of focused typing practice per day can be effective. Consistency is generally more useful than occasional long practice sessions.',
  },
  {
    question: 'Should students focus on typing speed or accuracy?',
    answer:
      'Accuracy should come first. Once students can type accurately and consistently, they can gradually increase their speed without building inefficient habits.',
  },
  {
    question: 'Can TypSmart help students learn typing?',
    answer:
      'Yes. TypSmart provides typing tests and practice sessions that can help students build keyboard familiarity, improve accuracy, and measure WPM over time.',
  },
]

const STUDENT_BENEFITS = [
  {
    title: 'Write assignments faster',
    text:
      'Better typing skills can help students spend less time entering text and more time thinking about their ideas, structure, and research.',
    icon: Keyboard,
  },
  {
    title: 'Take notes efficiently',
    text:
      'Comfortable touch typing makes it easier to capture important information during computer-based classes and study sessions.',
    icon: BookOpen,
  },
  {
    title: 'Improve digital productivity',
    text:
      'Students use keyboards for documents, presentations, email, research, coding, and many other academic tasks.',
    icon: Zap,
  },
  {
    title: 'Build a useful long-term skill',
    text:
      'Typing is a practical digital skill that can remain useful throughout education, internships, and future professional work.',
    icon: TrendingUp,
  },
]

const WPM_TARGETS = [
  {
    level: 'Getting started',
    speed: '20–30 WPM',
    focus: 'Keyboard familiarity and basic accuracy',
  },
  {
    level: 'Developing',
    speed: '30–40 WPM',
    focus: 'Touch typing and consistent movement',
  },
  {
    level: 'Strong student',
    speed: '40–50 WPM',
    focus: 'Reliable everyday typing',
  },
  {
    level: 'Advanced',
    speed: '50–60+ WPM',
    focus: 'Fast and accurate academic work',
  },
]

const DAILY_ROUTINE = [
  {
    time: '3 min',
    title: 'Warm up',
    text:
      'Start with easy words and home-row movements to get your fingers moving comfortably.',
  },
  {
    time: '4 min',
    title: 'Accuracy practice',
    text:
      'Type slowly enough to avoid unnecessary mistakes and focus on correct finger placement.',
  },
  {
    time: '4 min',
    title: 'Real words and sentences',
    text:
      'Practice realistic vocabulary, school-related words, and short sentences.',
  },
  {
    time: '4 min',
    title: 'Typing test',
    text:
      'Finish with a short test and check your WPM and accuracy.',
  },
]

const STUDENT_USE_CASES = [
  'Writing school and college assignments',
  'Taking digital class notes',
  'Preparing presentations and projects',
  'Searching and researching online',
  'Writing emails and messages',
  'Completing computer-based assessments',
  'Learning programming and technical skills',
  'Preparing resumes and applications',
]

const COMMON_MISTAKES = [
  {
    title: 'Looking at the keyboard',
    fix:
      'Use touch-typing techniques and gradually train yourself to keep your eyes on the text.',
  },
  {
    title: 'Chasing WPM too early',
    fix:
      'Slow down and build accuracy first. Speed becomes easier when the correct movements are reliable.',
  },
  {
    title: 'Using only a few fingers',
    fix:
      'Learn the correct finger zones so each hand can share the workload efficiently.',
  },
  {
    title: 'Practicing inconsistently',
    fix:
      'Create a short daily routine instead of relying on occasional long practice sessions.',
  },
  {
    title: 'Ignoring mistakes',
    fix:
      'Review recurring errors and spend extra practice time on difficult letters, words, or combinations.',
  },
  {
    title: 'Practicing when exhausted',
    fix:
      'Take breaks and practice when you can maintain concentration and good posture.',
  },
]

const RELATED_GUIDES = [
  {
    title: '10-Finger Typing Guide',
    description:
      'Learn how to use all ten fingers effectively while typing.',
    href: '/guides/10-finger-typing',
  },
  {
    title: 'Typing Exercises for Beginners',
    description:
      'Build keyboard familiarity with practical beginner exercises.',
    href: '/guides/typing-exercises-for-beginners',
  },
  {
    title: 'How to Increase Typing Speed',
    description:
      'Learn practical techniques for increasing WPM without sacrificing accuracy.',
    href: '/guides/how-to-increase-typing-speed',
  },
  {
    title: 'Best Typing Practice Routine',
    description:
      'Create a simple routine for consistent and effective typing improvement.',
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

export const TypingForStudents = () => {
  return (
    <>
      <SEO
        title="Typing for Students: Improve Speed, Accuracy & Productivity | TypSmart"
        description="Learn why typing is important for students and how to improve typing speed, accuracy, touch typing, note-taking, assignments, and digital productivity."
      />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <article>
          {/* Hero */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <BookOpen size={15} aria-hidden="true" />
                Student Guide
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <Target size={15} aria-hidden="true" />
                Speed & Accuracy
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Typing for Students: Improve Speed, Accuracy & Productivity
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 opacity-80 md:text-lg">
              Learn why typing matters for students and how better keyboard
              skills can make assignments, note-taking, research, projects,
              exams, and everyday computer work easier.
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

              <h2 className="font-bold">
                In this guide
              </h2>
            </div>

            <ol className="mt-4 grid gap-2 text-sm md:grid-cols-2">
              <li>
                <a
                  className="underline underline-offset-4"
                  href="#importance"
                >
                  1. Why typing matters for students
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#benefits"
                >
                  2. Benefits of better typing
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#targets"
                >
                  3. Student WPM targets
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#use-cases"
                >
                  4. Where students use typing
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#accuracy"
                >
                  5. Speed and accuracy
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#routine"
                >
                  6. Daily practice routine
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#mistakes"
                >
                  7. Common mistakes
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#faq"
                >
                  8. FAQ
                </a>
              </li>
            </ol>
          </nav>

          <div className="space-y-12">
            {/* Importance */}
            <section id="importance">
              <div className="flex items-start gap-3">
                <BookOpen
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Why Typing Matters for Students
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Modern students use computers for much more than browsing
                    the internet. Assignments, research, presentations,
                    applications, online learning, and many assessments involve
                    typing.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    Strong typing skills can reduce the effort required to enter
                    text and allow students to concentrate more on the content
                    they are creating.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border p-5 md:p-6">
                <h3 className="font-bold">
                  Typing is a productivity skill
                </h3>

                <p className="mt-3 leading-7 opacity-75">
                  The goal is not simply to achieve a high WPM score. Good
                  typing means being able to enter text accurately, comfortably,
                  and consistently when you actually need the skill.
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits">
              <h2 className="text-2xl font-bold md:text-3xl">
                Benefits of Better Typing Skills for Students
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Improving typing can provide practical benefits across
                different areas of student life.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {STUDENT_BENEFITS.map((benefit) => {
                  const Icon = benefit.icon

                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl border p-5"
                    >
                      <Icon
                        size={23}
                        aria-hidden="true"
                      />

                      <h3 className="mt-3 font-bold">
                        {benefit.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 opacity-75">
                        {benefit.text}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>
            {/* WPM Targets */}
            <section id="targets">
              <div className="flex items-start gap-3">
                <TrendingUp
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    What Is a Good Typing Speed for Students?
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    There is no single WPM number that every student must
                    achieve. Age, keyboard experience, language, and the type of
                    work all affect typing speed.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    The ranges below are useful practice targets rather than
                    strict requirements.
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[650px] border-collapse text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 font-bold">
                        Level
                      </th>

                      <th className="px-4 py-3 font-bold">
                        WPM Target
                      </th>

                      <th className="px-4 py-3 font-bold">
                        Main Focus
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {WPM_TARGETS.map((target, index) => (
                      <tr
                        key={target.level}
                        className={
                          index !== WPM_TARGETS.length - 1
                            ? 'border-b'
                            : ''
                        }
                      >
                        <td className="px-4 py-3 font-medium">
                          {target.level}
                        </td>

                        <td className="px-4 py-3">
                          {target.speed}
                        </td>

                        <td className="px-4 py-3 opacity-75">
                          {target.focus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  Remember:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  A lower WPM with high accuracy is often more useful than a
                  higher WPM filled with mistakes. Build reliable typing first,
                  then increase your speed gradually.
                </p>
              </div>
            </section>

            {/* Use Cases */}
            <section id="use-cases">
              <h2 className="text-2xl font-bold md:text-3xl">
                Where Students Use Typing Skills
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Typing becomes valuable whenever students need to communicate,
                create, research, or organize information on a computer.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {STUDENT_USE_CASES.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0"
                      size={20}
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 opacity-80">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Accuracy */}
            <section id="accuracy">
              <div className="flex items-start gap-3">
                <Target
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Speed vs Accuracy for Students
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Students sometimes try to increase WPM as quickly as
                    possible. However, speed without accuracy can create more
                    work because mistakes need to be corrected later.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Step 1
                  </p>

                  <h3 className="mt-2 font-bold">
                    Learn
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Learn key positions and correct finger placement.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Step 2
                  </p>

                  <h3 className="mt-2 font-bold">
                    Stabilize
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Build consistent accuracy with short focused sessions.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    Step 3
                  </p>

                  <h3 className="mt-2 font-bold">
                    Accelerate
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Increase WPM gradually while keeping your accuracy stable.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <p className="font-semibold">
                  Student rule:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  If your typing becomes noticeably less accurate when you push
                  your speed, reduce the pace and rebuild control.
                </p>
              </div>
            </section>
            {/* Touch Typing */}
            <section>
              <div className="flex items-start gap-3">
                <Keyboard
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Why Students Should Learn Touch Typing
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Touch typing means typing without constantly looking down at
                    the keyboard. Instead, your fingers learn the positions of
                    the keys through repeated practice.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    This can make longer typing sessions more comfortable and
                    help students maintain their visual attention on the text
                    they are reading or writing.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Better focus
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Keeping your eyes on the text makes it easier to follow
                    what you are writing.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Better consistency
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Correct finger movements create a predictable typing
                    pattern.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Better long-term speed
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Once movements become automatic, students can gradually
                    increase their typing speed.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Less visual searching
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Memorizing key positions reduces the need to search for
                    letters visually.
                  </p>
                </div>
              </div>
            </section>

            {/* Daily Routine */}
            <section id="routine">
              <div className="flex items-start gap-3">
                <Clock
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    A Simple 15-Minute Typing Routine for Students
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Students do not need extremely long sessions to make
                    progress. A short daily routine can fit more easily around
                    classes, homework, and other responsibilities.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4">
                {DAILY_ROUTINE.map((item) => (
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
                <p className="font-semibold">
                  Best practice:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  Try to practice at approximately the same time each day. A
                  predictable habit makes it easier to stay consistent.
                </p>
              </div>
            </section>

            {/* Study + Typing */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Combine Typing Practice With Your Studies
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Typing practice does not always have to be separate from
                academic work. Students can use everyday computer tasks as
                opportunities to reinforce good typing habits.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Write your own notes
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Type short summaries of lessons or chapters while focusing
                    on accurate finger movement.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Practice with real vocabulary
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Use words related to your subjects so typing practice feels
                    connected to real academic work.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Type assignments carefully
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Focus on accuracy rather than trying to finish every
                    sentence as quickly as possible.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Track your progress
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Use regular typing tests to see whether your WPM and
                    accuracy are improving over time.
                  </p>
                </div>
              </div>
            </section>
            {/* Common Mistakes */}
            <section id="mistakes">
              <h2 className="text-2xl font-bold md:text-3xl">
                Common Typing Mistakes Students Should Avoid
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Avoiding inefficient habits early can make typing improvement
                much easier later.
              </p>

              <div className="mt-6 space-y-4">
                {COMMON_MISTAKES.map((mistake, index) => (
                  <div
                    key={mistake.title}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold">
                        {index + 1}
                      </div>

                      <div>
                        <h3 className="font-bold">
                          {mistake.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 opacity-75">
                          <strong>Better approach:</strong>{' '}
                          {mistake.fix}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Progress */}
            <section>
              <div className="flex items-start gap-3">
                <TrendingUp
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    How Students Should Measure Progress
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Do not judge your typing ability from one unusually good or
                    bad test. Look for trends across multiple sessions.
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
                        What to monitor
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-medium">
                        WPM
                      </td>

                      <td className="px-4 py-3 opacity-75">
                        Is your average speed gradually increasing?
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
                        Comfort
                      </td>

                      <td className="px-4 py-3 opacity-75">
                        Can you type for longer without unnecessary tension or
                        fatigue?
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-3xl border p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Zap
                  className="mt-1 shrink-0"
                  size={28}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Build Better Typing Skills With TypSmart
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Whether you are preparing assignments, studying online, or
                    building digital skills for your future career, regular
                    typing practice can make everyday computer work easier.
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
                      Typing is a practical skill that can support students
                      throughout their education. Better keyboard control can
                      make assignments, notes, research, projects, and digital
                      communication more efficient.
                    </p>

                    <p className="mt-4 leading-7 opacity-80">
                      Start with accuracy, learn proper finger placement,
                      practice consistently, and increase your speed gradually.
                      Small daily improvements can become a valuable long-term
                      skill.
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

export default TypingForStudents