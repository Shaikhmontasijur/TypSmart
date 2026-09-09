import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Clock,
  FileText,
  Keyboard,
  Mail,
  Target,
  TrendingUp,
  Zap,
} from 'lucide-react'
import SEO from '../../components/SEO'

const FAQS = [
  {
    question: 'Why are typing skills important for office work?',
    answer:
      'Typing skills help employees write emails, create documents, enter data, prepare reports, take notes, communicate online, and complete computer-based tasks more efficiently.',
  },
  {
    question: 'What is a good typing speed for office work?',
    answer:
      'A practical target for many office roles is around 40–60 WPM with strong accuracy. The ideal speed depends on the job and how much typing the role requires.',
  },
  {
    question: 'Is typing speed more important than accuracy at work?',
    answer:
      'Accuracy is extremely important because mistakes in emails, reports, customer records, and documents can create additional work. A balanced combination of speed and accuracy is usually best.',
  },
  {
    question: 'How can I improve my typing speed for office work?',
    answer:
      'Learn touch typing, practice regularly, focus on accuracy, review repeated mistakes, and gradually increase your typing speed with realistic workplace text.',
  },
  {
    question: 'How long should I practice typing for office work?',
    answer:
      'A focused 10–20 minute daily practice session can be enough to build consistent improvement. Longer sessions can be useful when combined with regular breaks.',
  },
  {
    question: 'Can TypSmart help improve office typing skills?',
    answer:
      'Yes. TypSmart provides typing tests and practice sessions that can help you measure WPM and accuracy while developing more consistent keyboard skills.',
  },
]

const OFFICE_BENEFITS = [
  {
    title: 'Faster email communication',
    text:
      'Better typing can help you write professional emails and messages more efficiently without sacrificing accuracy.',
    icon: Mail,
  },
  {
    title: 'More efficient documentation',
    text:
      'Typing skills can make reports, proposals, meeting notes, and other documents easier to create.',
    icon: FileText,
  },
  {
    title: 'Improved data entry',
    text:
      'Consistent keyboard technique can help employees enter information more accurately and efficiently.',
    icon: Keyboard,
  },
  {
    title: 'Better digital productivity',
    text:
      'Strong keyboard skills support everyday computer tasks across many office roles and industries.',
    icon: TrendingUp,
  },
]

const WPM_TARGETS = [
  {
    role: 'General office work',
    speed: '40–50 WPM',
    focus: 'Reliable everyday typing',
  },
  {
    role: 'Administrative work',
    speed: '45–55 WPM',
    focus: 'Documents, emails and records',
  },
  {
    role: 'Data-heavy roles',
    speed: '50–60+ WPM',
    focus: 'Frequent keyboard-based entry',
  },
  {
    role: 'Advanced typing work',
    speed: '60+ WPM',
    focus: 'High-volume professional typing',
  },
]

const OFFICE_TASKS = [
  'Writing and replying to emails',
  'Creating reports and documents',
  'Entering customer or business information',
  'Updating spreadsheets and records',
  'Taking meeting notes',
  'Preparing presentations',
  'Writing proposals and summaries',
  'Working with online business systems',
]

const DAILY_ROUTINE = [
  {
    time: '3 min',
    title: 'Warm up',
    text:
      'Start with common words and simple sentences to prepare your hands for typing.',
  },
  {
    time: '4 min',
    title: 'Accuracy practice',
    text:
      'Focus on correct finger placement and clean keystrokes rather than maximum speed.',
  },
  {
    time: '4 min',
    title: 'Office text',
    text:
      'Practice realistic emails, business vocabulary, names, numbers, and short professional sentences.',
  },
  {
    time: '4 min',
    title: 'Typing test',
    text:
      'Finish with a short typing test and review your WPM and accuracy.',
  },
]

const COMMON_MISTAKES = [
  {
    title: 'Typing too quickly',
    fix:
      'Choose a sustainable pace that allows you to maintain accuracy during longer work sessions.',
  },
  {
    title: 'Looking down at the keyboard',
    fix:
      'Learn touch typing so your eyes can remain on the document or information you are working with.',
  },
  {
    title: 'Using inefficient finger patterns',
    fix:
      'Learn proper finger placement and allow both hands to share the workload.',
  },
  {
    title: 'Ignoring punctuation and numbers',
    fix:
      'Practice realistic workplace text that includes punctuation, numbers, symbols, and capital letters.',
  },
  {
    title: 'Poor posture',
    fix:
      'Keep your shoulders relaxed, wrists comfortable, and keyboard positioned at a practical height.',
  },
  {
    title: 'No regular practice',
    fix:
      'Use short daily sessions to maintain and gradually improve your typing ability.',
  },
]

const RELATED_GUIDES = [
  {
    title: 'What Is WPM?',
    description:
      'Understand words per minute and how typing speed is measured.',
    href: '/guides/what-is-wpm',
  },
  {
    title: 'Improve Typing Accuracy',
    description:
      'Learn practical methods for reducing typing errors.',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'How to Type Faster',
    description:
      'Build typing speed while maintaining reliable accuracy.',
    href: '/guides/how-to-type-faster',
  },
  {
    title: 'Best Typing Practice Routine',
    description:
      'Create a consistent routine for long-term typing improvement.',
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

export const TypingSkillsOfficeWork = () => {
  return (
    <>
      <SEO
        title="Typing Skills for Office Work: Speed, Accuracy & Productivity | TypSmart"
        description="Learn how typing skills improve office productivity, email writing, documentation, data entry, reports, note-taking, WPM, accuracy, and everyday computer work."
      />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
        <article>
          {/* Hero */}
          <header className="mb-10">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <Briefcase size={15} aria-hidden="true" />
                Office Skills
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
                <TrendingUp size={15} aria-hidden="true" />
                Productivity
              </span>
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Typing Skills for Office Work: Improve Speed, Accuracy & Productivity
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 opacity-80 md:text-lg">
              Learn how better typing skills can improve emails, documents,
              reports, data entry, note-taking, communication, and everyday
              office productivity.
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
                  1. Why typing matters at work
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
                  href="#wpm"
                >
                  3. Good WPM for office work
                </a>
              </li>

              <li>
                <a
                  className="underline underline-offset-4"
                  href="#tasks"
                >
                  4. Office tasks that use typing
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
                <Briefcase
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Why Typing Skills Matter for Office Work
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Many modern office jobs involve computers throughout the
                    working day. Employees may write emails, create documents,
                    update records, prepare reports, enter information, or
                    communicate through online systems.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    Strong typing skills can reduce the mechanical effort
                    required to enter text and allow you to focus more attention
                    on the actual work.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border p-5 md:p-6">
                <h3 className="font-bold">
                  Typing is more than a speed test
                </h3>

                <p className="mt-3 leading-7 opacity-75">
                  Professional typing means combining speed, accuracy,
                  consistency, comfort, and keyboard control in real workplace
                  situations.
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section id="benefits">
              <h2 className="text-2xl font-bold md:text-3xl">
                Benefits of Better Typing Skills at Work
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Improving your keyboard skills can support several areas of
                office productivity.
              </p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {OFFICE_BENEFITS.map((benefit) => {
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
            {/* WPM */}
            <section id="wpm">
              <div className="flex items-start gap-3">
                <TrendingUp
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    What Is a Good Typing Speed for Office Work?
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    The ideal typing speed depends on the role. Someone who
                    spends most of the day writing may benefit from a higher
                    WPM than someone whose job involves only occasional typing.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    These ranges can be used as practical targets rather than
                    strict requirements.
                  </p>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto rounded-2xl border">
                <table className="w-full min-w-[650px] border-collapse text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 font-bold">
                        Work Type
                      </th>

                      <th className="px-4 py-3 font-bold">
                        Target WPM
                      </th>

                      <th className="px-4 py-3 font-bold">
                        Main Focus
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {WPM_TARGETS.map((target, index) => (
                      <tr
                        key={target.role}
                        className={
                          index !== WPM_TARGETS.length - 1
                            ? 'border-b'
                            : ''
                        }
                      >
                        <td className="px-4 py-3 font-medium">
                          {target.role}
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
                  Important:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  WPM is only one measure of typing ability. In professional
                  work, accuracy and consistency are often just as important as
                  raw speed.
                </p>
              </div>
            </section>

            {/* Office Tasks */}
            <section id="tasks">
              <h2 className="text-2xl font-bold md:text-3xl">
                Office Tasks That Depend on Typing
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Typing skills can be useful across administrative, customer
                service, technical, finance, sales, HR, education, and many
                other office roles.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {OFFICE_TASKS.map((task) => (
                  <div
                    key={task}
                    className="flex items-start gap-3 rounded-2xl border p-4"
                  >
                    <CheckCircle2
                      className="mt-0.5 shrink-0"
                      size={20}
                      aria-hidden="true"
                    />

                    <span className="text-sm leading-6 opacity-80">
                      {task}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Email */}
            <section>
              <div className="flex items-start gap-3">
                <Mail
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Typing Skills for Professional Emails
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Email is one of the most common forms of workplace
                    communication. Good typing skills can help you compose,
                    edit, and respond to messages efficiently.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Type efficiently
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Reduce unnecessary pauses while composing routine messages.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Review carefully
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Always check names, numbers, dates, and important details
                    before sending.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Keep accuracy high
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Fast typing should never come at the expense of clear,
                    professional communication.
                  </p>
                </div>
              </div>
            </section>

            {/* Documents */}
            <section>
              <div className="flex items-start gap-3">
                <FileText
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    Typing for Reports, Documents and Data Entry
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Office workers often enter information into documents,
                    spreadsheets, forms, databases, and business applications.
                    These tasks require more than raw speed.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border p-5">
                <h3 className="font-bold">
                  Accuracy matters when entering business information
                </h3>

                <p className="mt-3 leading-7 opacity-75">
                  A typing error in a name, account number, date, amount, or
                  business record can create additional work. For data-heavy
                  tasks, aim for a comfortable speed that you can maintain with
                  high accuracy.
                </p>
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
                    Speed vs Accuracy in Professional Typing
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Professional typing should balance speed with accuracy.
                    Typing quickly is useful only when the information you
                    enter is correct.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    1
                  </p>

                  <h3 className="mt-2 font-bold">
                    Accuracy first
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Build reliable keystrokes and reduce repeated mistakes.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    2
                  </p>

                  <h3 className="mt-2 font-bold">
                    Consistency
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Maintain a comfortable typing rhythm throughout longer
                    tasks.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <p className="text-sm font-semibold opacity-60">
                    3
                  </p>

                  <h3 className="mt-2 font-bold">
                    Speed
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Increase WPM gradually after your technique becomes stable.
                  </p>
                </div>
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
                    Why Touch Typing Helps at Work
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Touch typing allows you to type without constantly looking
                    down at the keyboard. With practice, key positions become
                    more familiar and finger movements become more automatic.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    This can be particularly useful when working with documents,
                    emails, spreadsheets, and other tasks where your attention
                    needs to remain on the screen.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Keep your eyes on the screen
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Spend less time searching for individual keys.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Build consistent movements
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Use predictable finger patterns across common words and
                    combinations.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Reduce unnecessary pauses
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Familiarity with the keyboard can make typing feel smoother.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Improve long-term productivity
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Better keyboard control can benefit many different computer
                    tasks.
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
                    A Simple 15-Minute Office Typing Practice Routine
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    A short daily session can help you maintain your keyboard
                    skills and gradually improve speed and accuracy.
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
                  Practice with realistic text:
                </p>

                <p className="mt-2 leading-7 opacity-80">
                  Include emails, business vocabulary, numbers, punctuation,
                  names, dates, and sentences rather than practicing only simple
                  letter patterns.
                </p>
              </div>
            </section>

            {/* Workplace Habits */}
            <section>
              <h2 className="text-2xl font-bold md:text-3xl">
                Better Typing Habits for the Workplace
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Use both hands
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Allow both hands to share typing work instead of relying on
                    only a few fingers.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Keep your wrists comfortable
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Avoid unnecessary tension and adjust your keyboard and
                    seating position so your hands can move naturally.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Take short breaks
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    During long computer sessions, brief breaks can help you
                    maintain concentration and comfort.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Review important information
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Even strong typists should review important emails, reports,
                    numbers, names, and business records before submitting them.
                  </p>
                </div>
              </div>
            </section>

            {/* Common Mistakes */}
            <section id="mistakes">
              <h2 className="text-2xl font-bold md:text-3xl">
                Common Typing Mistakes in Office Work
              </h2>

              <p className="mt-4 leading-7 opacity-80">
                Avoiding inefficient typing habits can improve both productivity
                and reliability.
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
            {/* Career Productivity */}
            <section>
              <div className="flex items-start gap-3">
                <TrendingUp
                  className="mt-1 shrink-0"
                  size={24}
                  aria-hidden="true"
                />

                <div>
                  <h2 className="text-2xl font-bold md:text-3xl">
                    How Better Typing Can Improve Career Productivity
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Typing is not usually the only skill required for an office
                    job, but efficient keyboard use can support many other
                    professional skills.
                  </p>

                  <p className="mt-4 leading-7 opacity-80">
                    When typing becomes more automatic, you can spend less
                    mental effort searching for keys and more attention on
                    communication, analysis, planning, and problem solving.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Communication
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Write and respond to digital communication more efficiently.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Documentation
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Create reports, notes, summaries, and other workplace
                    documents with greater ease.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Data handling
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Enter and update information in digital systems more
                    efficiently.
                  </p>
                </div>

                <div className="rounded-2xl border p-5">
                  <h3 className="font-bold">
                    Digital confidence
                  </h3>

                  <p className="mt-2 text-sm leading-6 opacity-75">
                    Become more comfortable with everyday keyboard-based tasks.
                  </p>
                </div>
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
                    Improve Your Office Typing Skills With TypSmart
                  </h2>

                  <p className="mt-4 leading-7 opacity-80">
                    Practice regularly, track your WPM and accuracy, and build
                    keyboard skills that support your everyday professional
                    work.
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
                      Good typing skills can make many office tasks easier,
                      including email communication, documentation, data entry,
                      note-taking, and everyday computer work.
                    </p>

                    <p className="mt-4 leading-7 opacity-80">
                      Focus on accuracy first, learn efficient finger
                      movements, practice realistic workplace text, and
                      gradually increase your speed. The goal is not simply a
                      higher WPM score, but reliable and comfortable typing.
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

export default TypingSkillsOfficeWork