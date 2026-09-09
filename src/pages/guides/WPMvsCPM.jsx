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
    question: 'What is WPM in typing?',
    answer:
      'WPM means Words Per Minute. It is the most common measurement used to describe typing speed. A higher WPM generally means you can type more words in less time.',
  },
  {
    question: 'What is CPM in typing?',
    answer:
      'CPM means Characters Per Minute. It measures how many characters or keystrokes you type in one minute. CPM is useful for understanding raw keyboard input speed.',
  },
  {
    question: 'How do you convert CPM to WPM?',
    answer:
      'Using the common typing-test convention of five characters per word, WPM can be estimated by dividing CPM by 5. For example, 300 CPM is approximately 60 WPM.',
  },
  {
    question: 'Is WPM better than CPM?',
    answer:
      'For comparing overall typing performance, WPM is usually easier to understand and is the more widely used metric. CPM can be useful when analyzing keystroke-level performance.',
  },
  {
    question: 'Is 60 WPM a good typing speed?',
    answer:
      'Yes. Around 60 WPM is a strong practical typing speed for many students and office users, especially when it is achieved with high accuracy.',
  },
  {
    question: 'Does typing accuracy affect WPM?',
    answer:
      'Yes. Most typing tests account for mistakes when calculating the final result. A very high raw speed with many errors is less useful than a slightly lower speed with consistently high accuracy.',
  },
]

const SPEED_LEVELS = [
  {
    level: 'Beginner',
    wpm: '20–30 WPM',
    cpm: '100–150 CPM',
    description: 'Building basic keyboard familiarity and accuracy.',
  },
  {
    level: 'Developing',
    wpm: '30–40 WPM',
    cpm: '150–200 CPM',
    description: 'Comfortable for basic everyday typing.',
  },
  {
    level: 'Intermediate',
    wpm: '40–50 WPM',
    cpm: '200–250 CPM',
    description: 'A solid level for school, study and general work.',
  },
  {
    level: 'Strong',
    wpm: '50–60 WPM',
    cpm: '250–300 CPM',
    description: 'Fast enough for many professional tasks.',
  },
  {
    level: 'Advanced',
    wpm: '60–80+ WPM',
    cpm: '300–400+ CPM',
    description: 'High-speed typing with strong accuracy and control.',
  },
  {
    level: 'Expert',
    wpm: '80–100+ WPM',
    cpm: '400–500+ CPM',
    description: 'Exceptional speed requiring consistent practice.',
  },
]

const RELATED_GUIDES = [
  {
    title: 'What Is WPM?',
    description: 'Understand the most common typing-speed measurement.',
    href: '/guides/what-is-wpm',
  },
  {
    title: 'Average Typing Speed',
    description: 'See practical typing-speed ranges and benchmarks.',
    href: '/guides/average-typing-speed',
  },
  {
    title: 'Typing Speed Test',
    description: 'Measure your WPM and accuracy with a real typing test.',
    href: '/guides/typing-speed-test',
  },
  {
    title: 'How to Increase Typing Speed',
    description: 'Build speed without sacrificing accuracy.',
    href: '/guides/how-to-increase-typing-speed',
  },
  {
    title: 'Improve Typing Accuracy',
    description: 'Learn how to reduce mistakes and type more reliably.',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'How to Reach 100 WPM',
    description: 'A structured path toward advanced typing speed.',
    href: '/guides/how-to-reach-100-wpm',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const WPMvsCPM = () => {
  return (
    <>
      <SEO
        title="WPM vs CPM: What Is the Difference? | TypSmart"
        description="Learn the difference between WPM and CPM, how typing speed is calculated, how to convert CPM to WPM, and which typing metric matters most."
        keywords="WPM vs CPM, CPM to WPM, WPM typing speed, characters per minute, words per minute, typing speed"
      />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 md:px-6 md:py-12">
        {/* Hero */}
        <header className="mb-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
            <Keyboard size={16} aria-hidden="true" />
            Typing Speed Guide
          </div>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            WPM vs CPM: What Is the Difference?
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 opacity-80 md:text-xl">
            WPM and CPM are two common ways to measure typing speed. Learn
            what they mean, how they are calculated, how to convert between
            them, and which metric you should use to track your progress.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/typing-test"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:opacity-80"
            >
              Take a Typing Test
              <ArrowRight size={17} aria-hidden="true" />
            </Link>

            <Link
              to="/guides/what-is-wpm"
              className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:opacity-80"
            >
              Learn About WPM
              <BookOpen size={17} aria-hidden="true" />
            </Link>
          </div>
        </header>

        {/* Quick overview */}
        <section className="mb-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-xl border p-2">
                <TrendingUp size={20} aria-hidden="true" />
              </div>

              <h2 className="text-xl font-bold">WPM</h2>
            </div>

            <p className="leading-7 opacity-80">
              Words Per Minute measures typing speed in words per minute.
              It is the metric most people use when talking about typing
              speed.
            </p>
          </div>

          <div className="rounded-2xl border p-5">
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-xl border p-2">
                <Keyboard size={20} aria-hidden="true" />
              </div>

              <h2 className="text-xl font-bold">CPM</h2>
            </div>

            <p className="leading-7 opacity-80">
              Characters Per Minute measures how many characters you type
              during a minute. It provides a more granular view of keyboard
              input speed.
            </p>
          </div>
        </section>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mb-12 rounded-2xl border p-5 md:p-6"
        >
          <h2 className="text-lg font-bold">In This Guide</h2>

          <ol className="mt-4 grid gap-2 text-sm md:grid-cols-2">
            <li>
              <a href="#what-is-wpm" className="underline underline-offset-4">
                1. What Is WPM?
              </a>
            </li>

            <li>
              <a href="#what-is-cpm" className="underline underline-offset-4">
                2. What Is CPM?
              </a>
            </li>

            <li>
              <a
                href="#difference"
                className="underline underline-offset-4"
              >
                3. WPM vs CPM
              </a>
            </li>

            <li>
              <a
                href="#conversion"
                className="underline underline-offset-4"
              >
                4. CPM to WPM Conversion
              </a>
            </li>

            <li>
              <a
                href="#accuracy"
                className="underline underline-offset-4"
              >
                5. Accuracy and Typing Speed
              </a>
            </li>

            <li>
              <a
                href="#benchmarks"
                className="underline underline-offset-4"
              >
                6. WPM and CPM Benchmarks
              </a>
            </li>

            <li>
              <a
                href="#which-metric"
                className="underline underline-offset-4"
              >
                7. Which Metric Should You Track?
              </a>
            </li>

            <li>
              <a href="#improve" className="underline underline-offset-4">
                8. How to Improve Your Speed
              </a>
            </li>

            <li>
              <a href="#faq" className="underline underline-offset-4">
                9. Frequently Asked Questions
              </a>
            </li>
          </ol>
        </nav>

        {/* WPM */}
        <section id="what-is-wpm" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <TrendingUp size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              What Is WPM?
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            <strong>WPM</strong> stands for <strong>Words Per Minute</strong>.
            It is the most recognizable measurement of typing speed and is
            commonly used by typing websites, schools, employers and
            keyboard-training platforms.
          </p>

          <p className="mt-4 leading-8 opacity-85">
            A typing test uses the amount of text you successfully type
            during a specific period and converts that performance into a
            standardized words-per-minute score.
          </p>

          <div className="mt-6 rounded-2xl border p-5">
            <h3 className="font-bold">Example</h3>

            <p className="mt-2 leading-7 opacity-80">
              If your typing test reports <strong>60 WPM</strong>, it means
              your performance corresponds to approximately 60 standardized
              words per minute under that test's counting method.
            </p>
          </div>
        </section>

        {/* CPM */}
        <section id="what-is-cpm" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <Keyboard size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              What Is CPM?
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            <strong>CPM</strong> stands for <strong>Characters Per Minute</strong>.
            Instead of expressing performance as words, CPM focuses on the
            number of characters typed in one minute.
          </p>

          <p className="mt-4 leading-8 opacity-85">
            Depending on the typing test, characters may include letters,
            numbers, spaces and punctuation. Because different platforms can
            count characters differently, always check the methodology used
            by the test you are comparing.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <p className="text-2xl font-bold">200</p>
              <p className="mt-1 text-sm opacity-70">CPM</p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-2xl font-bold">250</p>
              <p className="mt-1 text-sm opacity-70">CPM</p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-2xl font-bold">300</p>
              <p className="mt-1 text-sm opacity-70">CPM</p>
            </div>
          </div>
        </section>
        {/* Difference */}
        <section id="difference" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <Target size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              WPM vs CPM: What Is the Difference?
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            The main difference is what each metric measures. WPM expresses
            typing performance as standardized words per minute, while CPM
            focuses on the number of characters typed per minute.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[650px] text-left">
              <thead className="border-b">
                <tr>
                  <th className="px-4 py-4 font-bold">Metric</th>
                  <th className="px-4 py-4 font-bold">WPM</th>
                  <th className="px-4 py-4 font-bold">CPM</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">
                    Full name
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Words Per Minute
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Characters Per Minute
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">
                    Measures
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Standardized typing speed
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Character input speed
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">
                    Easy to understand
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Very easy
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Easy
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-4 font-semibold">
                    Common usage
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Typing tests, jobs, education
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Keyboard and input analysis
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-4 font-semibold">
                    Best for
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Comparing overall typing performance
                  </td>
                  <td className="px-4 py-4 opacity-80">
                    Measuring raw character throughput
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">Why WPM is popular</h3>

              <p className="mt-2 leading-7 opacity-80">
                WPM gives people a simple way to understand typing
                performance. Saying “I type 70 WPM” is easier to compare
                than discussing hundreds of individual keystrokes.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">Why CPM is useful</h3>

              <p className="mt-2 leading-7 opacity-80">
                CPM provides a more granular measurement because every
                character contributes directly to the result. This can be
                useful when analyzing keyboard input or conversion between
                different typing metrics.
              </p>
            </div>
          </div>
        </section>

        {/* Conversion */}
        <section id="conversion" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <Zap size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              How to Convert CPM to WPM
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            Many typing tests use a standard convention of approximately
            <strong> 5 characters per word</strong>. Under that convention,
            CPM can be converted into an estimated WPM score.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border p-6">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-60">
                CPM → WPM
              </p>

              <p className="mt-4 text-2xl font-bold">
                WPM ≈ CPM ÷ 5
              </p>

              <p className="mt-3 leading-7 opacity-75">
                Example: 300 CPM ÷ 5 = approximately 60 WPM.
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <p className="text-sm font-semibold uppercase tracking-wide opacity-60">
                WPM → CPM
              </p>

              <p className="mt-4 text-2xl font-bold">
                CPM ≈ WPM × 5
              </p>

              <p className="mt-3 leading-7 opacity-75">
                Example: 60 WPM × 5 = approximately 300 CPM.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border p-5">
            <h3 className="font-bold">Quick conversion examples</h3>

            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[500px] text-left">
                <thead className="border-b">
                  <tr>
                    <th className="px-3 py-3 font-bold">WPM</th>
                    <th className="px-3 py-3 font-bold">Approx. CPM</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-b">
                    <td className="px-3 py-3">20 WPM</td>
                    <td className="px-3 py-3 opacity-80">100 CPM</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-3 py-3">30 WPM</td>
                    <td className="px-3 py-3 opacity-80">150 CPM</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-3 py-3">40 WPM</td>
                    <td className="px-3 py-3 opacity-80">200 CPM</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-3 py-3">50 WPM</td>
                    <td className="px-3 py-3 opacity-80">250 CPM</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-3 py-3">60 WPM</td>
                    <td className="px-3 py-3 opacity-80">300 CPM</td>
                  </tr>

                  <tr className="border-b">
                    <td className="px-3 py-3">80 WPM</td>
                    <td className="px-3 py-3 opacity-80">400 CPM</td>
                  </tr>

                  <tr>
                    <td className="px-3 py-3">100 WPM</td>
                    <td className="px-3 py-3 opacity-80">500 CPM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-0.5 shrink-0"
                size={20}
                aria-hidden="true"
              />

              <p className="leading-7 opacity-80">
                <strong>Important:</strong> the 5-character convention is
                a common standard for comparing typing speed, but individual
                platforms may use different counting rules. Always use the
                same test methodology when comparing your own results over
                time.
              </p>
            </div>
          </div>
        </section>

        {/* Accuracy */}
        <section id="accuracy" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <Target size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              Accuracy Matters More Than Raw Speed
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            WPM and CPM tell you how quickly you are typing, but speed alone
            does not tell the complete story. Accuracy is essential because
            frequent mistakes create extra work and reduce the usefulness of
            your typing speed.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <p className="text-2xl font-bold">40 WPM</p>
              <p className="mt-2 text-sm opacity-70">
                98% accuracy
              </p>

              <p className="mt-3 leading-6 opacity-75">
                Reliable and productive typing.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-2xl font-bold">60 WPM</p>
              <p className="mt-2 text-sm opacity-70">
                97% accuracy
              </p>

              <p className="mt-3 leading-6 opacity-75">
                Strong speed with good control.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <p className="text-2xl font-bold">80 WPM</p>
              <p className="mt-2 text-sm opacity-70">
                85% accuracy
              </p>

              <p className="mt-3 leading-6 opacity-75">
                Fast, but too many errors can reduce practical productivity.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border p-6">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="mt-1 shrink-0"
                size={20}
                aria-hidden="true"
              />

              <div>
                <h3 className="font-bold">
                  The better goal
                </h3>

                <p className="mt-2 leading-7 opacity-80">
                  Aim for a balance of <strong>speed + accuracy +
                  consistency</strong>. A controlled 60 WPM performance can
                  be more valuable than an 80 WPM result filled with errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benchmark introduction */}
        <section id="benchmarks" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <TrendingUp size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              WPM and CPM Typing Speed Benchmarks
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            There is no single typing speed that is perfect for everyone.
            Your ideal target depends on your experience, keyboard,
            language, work and accuracy. The following ranges are useful
            practical benchmarks rather than strict rules.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[700px] text-left">
              <thead className="border-b">
                <tr>
                  <th className="px-4 py-4 font-bold">Level</th>
                  <th className="px-4 py-4 font-bold">WPM</th>
                  <th className="px-4 py-4 font-bold">CPM</th>
                  <th className="px-4 py-4 font-bold">
                    Typical description
                  </th>
                </tr>
              </thead>

              <tbody>
                {SPEED_LEVELS.map((item) => (
                  <tr
                    key={item.level}
                    className="border-b last:border-b-0"
                  >
                    <td className="px-4 py-4 font-semibold">
                      {item.level}
                    </td>

                    <td className="px-4 py-4">
                      {item.wpm}
                    </td>

                    <td className="px-4 py-4 opacity-80">
                      {item.cpm}
                    </td>

                    <td className="px-4 py-4 opacity-75">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        {/* Which metric */}
        <section id="which-metric" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <Target size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              Which Metric Should You Track?
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            For most learners, <strong>WPM + accuracy</strong> is the best
            combination to track. WPM gives you an easy-to-understand speed
            score, while accuracy tells you how reliably you are producing
            the text.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border p-5">
              <div className="mb-3 flex items-center gap-3">
                <TrendingUp size={20} aria-hidden="true" />

                <h3 className="font-bold">
                  Track WPM
                </h3>
              </div>

              <p className="leading-7 opacity-75">
                Use WPM to monitor your overall typing-speed improvement and
                compare your performance across tests.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <div className="mb-3 flex items-center gap-3">
                <Target size={20} aria-hidden="true" />

                <h3 className="font-bold">
                  Track Accuracy
                </h3>
              </div>

              <p className="leading-7 opacity-75">
                Accuracy shows whether your increased speed is actually
                controlled and reliable.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <div className="mb-3 flex items-center gap-3">
                <Keyboard size={20} aria-hidden="true" />

                <h3 className="font-bold">
                  Use CPM as Extra Data
                </h3>
              </div>

              <p className="leading-7 opacity-75">
                CPM can provide additional information about your raw
                character-entry speed.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border p-6">
            <h3 className="text-lg font-bold">
              A simple progress dashboard
            </h3>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div>
                <p className="text-sm opacity-60">
                  Speed
                </p>
                <p className="mt-1 text-2xl font-bold">
                  WPM
                </p>
              </div>

              <div>
                <p className="text-sm opacity-60">
                  Reliability
                </p>
                <p className="mt-1 text-2xl font-bold">
                  Accuracy
                </p>
              </div>

              <div>
                <p className="text-sm opacity-60">
                  Input volume
                </p>
                <p className="mt-1 text-2xl font-bold">
                  CPM
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Improvement */}
        <section id="improve" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <Zap size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              How to Improve Your WPM and CPM
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            Improving WPM or CPM is not about pressing the keys as quickly as
            possible. The most effective approach is to build accurate
            finger movement first and gradually increase your speed.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold">
                  1
                </span>

                <div>
                  <h3 className="font-bold">
                    Build accurate finger placement
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Learn the correct finger positions and avoid depending
                    on random fingers for different keys.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold">
                  2
                </span>

                <div>
                  <h3 className="font-bold">
                    Practice without looking at the keyboard
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Touch typing reduces unnecessary visual movement and
                    helps your fingers develop automatic key awareness.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold">
                  3
                </span>

                <div>
                  <h3 className="font-bold">
                    Prioritize accuracy
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Slow down whenever your error rate starts increasing.
                    Accuracy creates the foundation for sustainable speed.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold">
                  4
                </span>

                <div>
                  <h3 className="font-bold">
                    Practice with real text
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Mix drills with sentences, paragraphs and realistic
                    typing tests so your skill transfers to everyday work.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border p-5">
              <div className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-bold">
                  5
                </span>

                <div>
                  <h3 className="font-bold">
                    Increase speed gradually
                  </h3>

                  <p className="mt-2 leading-7 opacity-75">
                    Push your pace only after you can maintain reliable
                    accuracy. Small improvements repeated consistently are
                    more useful than occasional maximum-speed attempts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border p-6">
            <div className="flex items-start gap-3">
              <Clock
                className="mt-1 shrink-0"
                size={20}
                aria-hidden="true"
              />

              <div>
                <h3 className="font-bold">
                  A simple 15-minute practice session
                </h3>

                <ul className="mt-3 space-y-2 leading-7 opacity-80">
                  <li>
                    <strong>5 minutes:</strong> accuracy and finger-placement
                    drills
                  </li>

                  <li>
                    <strong>5 minutes:</strong> normal-speed typing
                  </li>

                  <li>
                    <strong>3 minutes:</strong> short speed-focused tests
                  </li>

                  <li>
                    <strong>2 minutes:</strong> review mistakes and weak keys
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* WPM vs CPM in real life */}
        <section className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <BookOpen size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              WPM vs CPM for Real-World Typing
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            Your typing speed matters most when it helps you complete real
            tasks efficiently. A useful typing skill should transfer from
            typing tests to emails, assignments, reports, coding, research,
            data entry and everyday computer work.
          </p>

          <div className="mt-6 overflow-x-auto rounded-2xl border">
            <table className="w-full min-w-[650px] text-left">
              <thead className="border-b">
                <tr>
                  <th className="px-4 py-4 font-bold">
                    Activity
                  </th>

                  <th className="px-4 py-4 font-bold">
                    Useful metric
                  </th>

                  <th className="px-4 py-4 font-bold">
                    Main priority
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-4">
                    School assignments
                  </td>

                  <td className="px-4 py-4">
                    WPM
                  </td>

                  <td className="px-4 py-4 opacity-75">
                    Accuracy + consistency
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-4">
                    Office work
                  </td>

                  <td className="px-4 py-4">
                    WPM
                  </td>

                  <td className="px-4 py-4 opacity-75">
                    Accuracy + productivity
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-4">
                    Data entry
                  </td>

                  <td className="px-4 py-4">
                    WPM + CPM
                  </td>

                  <td className="px-4 py-4 opacity-75">
                    Accuracy + sustained speed
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="px-4 py-4">
                    Typing competitions
                  </td>

                  <td className="px-4 py-4">
                    WPM
                  </td>

                  <td className="px-4 py-4 opacity-75">
                    Speed + accuracy
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-4">
                    Keyboard analysis
                  </td>

                  <td className="px-4 py-4">
                    CPM
                  </td>

                  <td className="px-4 py-4 opacity-75">
                    Character throughput
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Common misconceptions */}
        <section className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <CheckCircle2 size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              Common WPM and CPM Misconceptions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                “Higher WPM always means better typing.”
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                Not necessarily. A useful typing score should also include
                strong accuracy and consistency.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                “CPM and WPM are completely different skills.”
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                They describe the same general activity from different
                measurement perspectives. Both can be useful for evaluating
                typing performance.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                “You should always practice at maximum speed.”
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                Maximum-speed attempts can help occasionally, but most
                practice should be controlled enough to reinforce accurate
                movement.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                “A single typing test defines your real speed.”
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                One test can be affected by the text, duration, keyboard,
                fatigue and concentration. Multiple consistent tests give a
                better picture of your actual performance.
              </p>
            </div>
          </div>
        </section>
        {/* Practical Progress Strategy */}
        <section className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <TrendingUp size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              How to Track Your Typing Progress
            </h2>
          </div>

          <p className="leading-8 opacity-85">
            Instead of chasing a new personal record every day, track your
            performance over time. Look for improvements in both speed and
            accuracy.
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                1. Record your baseline
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                Take a few normal typing tests and record your WPM,
                accuracy and CPM. This gives you a starting point.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                2. Practice consistently
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                Short, focused practice sessions are usually easier to
                maintain than occasional long sessions.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                3. Compare similar tests
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                Use similar durations and text types when comparing results.
                Changing the test conditions can make your scores harder to
                interpret.
              </p>
            </div>

            <div className="rounded-2xl border p-5">
              <h3 className="font-bold">
                4. Focus on trends
              </h3>

              <p className="mt-2 leading-7 opacity-75">
                A gradual improvement in your average WPM with stable
                accuracy is more meaningful than one unusually high score.
              </p>
            </div>
          </div>
        </section>

        {/* TypSmart CTA */}
        <section className="mb-12 rounded-3xl border p-6 md:p-8">
          <div className="flex items-start gap-4">
            <div className="rounded-2xl border p-3">
              <Keyboard size={24} aria-hidden="true" />
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-bold">
                Measure Your WPM and Improve Your Typing
              </h2>

              <p className="mt-3 max-w-2xl leading-8 opacity-80">
                Ready to see your actual typing speed? Take a TypSmart
                typing test and use your WPM and accuracy results as a
                baseline for future practice.
              </p>

              <div className="mt-6">
                <Link
                  to="/typing-test"
                  className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold transition hover:opacity-80"
                >
                  Start Typing Test
                  <ArrowRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section id="related-guides" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <BookOpen size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              Related Typing Guides
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {RELATED_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                to={guide.href}
                className="group rounded-2xl border p-5 transition hover:opacity-80"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold">
                      {guide.title}
                    </h3>

                    <p className="mt-2 leading-6 opacity-70">
                      {guide.description}
                    </p>
                  </div>

                  <ArrowRight
                    size={18}
                    className="mt-1 shrink-0 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-12 scroll-mt-24">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-xl border p-2">
              <BookOpen size={21} aria-hidden="true" />
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((item) => (
              <details
                key={item.question}
                className="rounded-2xl border p-5"
              >
                <summary className="cursor-pointer font-semibold">
                  {item.question}
                </summary>

                <p className="mt-3 leading-7 opacity-75">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="mb-12">
          <div className="rounded-3xl border p-6 md:p-8">
            <h2 className="text-2xl font-bold md:text-3xl">
              Final Takeaway: WPM vs CPM
            </h2>

            <p className="mt-4 leading-8 opacity-85">
              WPM and CPM are two different ways of describing typing
              performance. WPM is easier to understand and is commonly used
              for comparing overall typing speed, while CPM provides a more
              detailed view of character-level input.
            </p>

            <p className="mt-4 leading-8 opacity-85">
              Under the common five-character-per-word convention, CPM can
              be roughly converted to WPM by dividing by five. However,
              different typing tests may use different counting methods, so
              consistent test conditions are important.
            </p>

            <div className="mt-6 flex items-start gap-3">
              <CheckCircle2
                className="mt-1 shrink-0"
                size={21}
                aria-hidden="true"
              />

              <p className="leading-7 opacity-80">
                For most learners, the best goal is simple:
                <strong> improve WPM while keeping accuracy high.</strong>
              </p>
            </div>
          </div>
        </section>
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

export default WPMvsCPM