import React from 'react'
import { Link } from 'react-router-dom'
import {
  Keyboard,
  Target,
  CheckCircle2,
  Hand,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { SEOHead } from '../../components/common/SEOHead'

const BENEFITS = [
  'Type without constantly looking at the keyboard.',
  'Reduce unnecessary hand and finger movement.',
  'Keep more attention focused on the text you are writing.',
  'Improve typing speed and accuracy through consistent practice.',
  'Build a repeatable and reliable typing technique.',
]

const LEARNING_STEPS = [
  'Learn the home-row position and keep your fingers correctly anchored.',
  'Learn which finger is responsible for each key.',
  'Practice individual letters before moving to common words.',
  'Focus on accuracy instead of maximum speed.',
  'Practice short sessions consistently every day.',
  'Gradually increase speed while maintaining accuracy.',
]

const COMMON_MISTAKES = [
  'Looking down at the keyboard after every few words.',
  'Using only one or two fingers for most keys.',
  'Trying to type extremely fast before learning correct technique.',
  'Keeping the wrists and hands unnecessarily tense.',
  'Ignoring repeated mistakes instead of practicing them.',
]

const FAQS = [
  {
    question: 'What is touch typing?',
    answer:
      'Touch typing is a typing technique where you use consistent finger positions to reach keys while keeping your eyes focused on the text instead of constantly looking at the keyboard.',
  },
  {
    question: 'Is touch typing difficult to learn?',
    answer:
      'Touch typing can feel difficult at first because it requires new finger movements and muscle memory. With regular practice, the movements gradually become more automatic.',
  },
  {
    question: 'How long does it take to learn touch typing?',
    answer:
      'The time varies by person. Consistent short practice sessions can help beginners develop the fundamentals and gradually improve their speed and accuracy.',
  },
  {
    question: 'Should I focus on typing speed or accuracy first?',
    answer:
      'Beginners should generally prioritize accuracy and correct finger technique first. Speed can increase naturally as the movements become more familiar.',
  },
]

const RELATED_GUIDES = [
  {
    title: 'How to Increase Typing Speed',
    description:
      'Learn practical techniques for improving WPM, accuracy, and consistency.',
    href: '/guides/how-to-increase-typing-speed',
  },
  {
    title: 'Improve Typing Accuracy',
    description:
      'Learn how to reduce mistakes and build more reliable typing habits.',
    href: '/guides/improve-typing-accuracy',
  },
  {
    title: 'How to Type Faster',
    description:
      'Explore proven techniques for becoming a faster and more efficient typist.',
    href: '/guides/how-to-type-faster',
  },
]

export function TouchTypingGuide() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  }

  return (
    <>
      <SEOHead
        title="Touch Typing: What It Is and How to Learn It | TypSmart"
        description="Learn what touch typing is, how proper finger placement works, and how beginners can learn touch typing with simple daily practice."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Keyboard className="h-5 w-5" aria-hidden="true" />
              <span>Touch Typing Guide</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Touch Typing: What It Is and How to Learn It
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              Touch typing is a technique that allows you to type without
              constantly looking down at the keyboard. Learn how it works,
              why it matters, and how beginners can build the skill step by
              step.
            </p>
          </header>

          {/* What Is Touch Typing */}
          <section
            aria-labelledby="what-is-touch-typing"
            className="mb-10 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <div className="mb-4 flex items-center gap-3">
              <Hand
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2
                id="what-is-touch-typing"
                className="text-2xl font-semibold"
              >
                What Is Touch Typing?
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Touch typing is a method of typing where you use consistent
              finger positions to reach the keys while keeping your eyes
              focused on the text instead of looking at the keyboard.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              The goal is to develop muscle memory so that your fingers can
              automatically move toward the correct keys without requiring
              you to consciously search for each letter.
            </p>
          </section>

          {/* Home Row */}
          <section
            aria-labelledby="home-row"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <Target
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 id="home-row" className="text-3xl font-bold">
                Start With the Home Row
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              The home row is the starting position for touch typing on a
              standard QWERTY keyboard. Your fingers return to this position
              after reaching other keys.
            </p>

            <div className="my-6 overflow-x-auto rounded-2xl border bg-muted p-6 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                Home Row
              </p>

              <p className="mt-3 whitespace-nowrap text-2xl font-bold tracking-[0.2em] sm:text-3xl sm:tracking-[0.25em]">
                A S D F&nbsp;&nbsp;&nbsp;J K L ;
              </p>
            </div>

            <p className="leading-7 text-muted-foreground">
              The raised bumps on the F and J keys can help you find the home
              position without looking down at the keyboard.
            </p>
          </section>

          {/* Benefits */}
          <section
            aria-labelledby="benefits"
            className="mb-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <TrendingUp
                className="h-6 w-6 text-primary"
                aria-hidden="true"
              />

              <h2 id="benefits" className="text-3xl font-bold">
                Benefits of Touch Typing
              </h2>
            </div>

            <ul className="space-y-3">
              {BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 rounded-xl border p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="leading-6">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Learning Steps */}
          <section
            aria-labelledby="learn-touch-typing"
            className="mb-10"
          >
            <h2
              id="learn-touch-typing"
              className="text-3xl font-bold"
            >
              How to Learn Touch Typing
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Learning touch typing does not require you to become fast
              immediately. The most important part is building consistent
              finger movement and accurate muscle memory.
            </p>

            <ol className="mt-6 space-y-4">
              {LEARNING_STEPS.map((step, index) => (
                <li
                  key={step}
                  className="rounded-xl border p-5"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted font-bold"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>

                    <p className="leading-6">{step}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Common Mistakes */}
          <section
            aria-labelledby="common-mistakes"
            className="mb-10"
          >
            <h2
              id="common-mistakes"
              className="text-3xl font-bold"
            >
              Common Touch Typing Mistakes
            </h2>

            <ul className="mt-5 space-y-3">
              {COMMON_MISTAKES.map((mistake) => (
                <li
                  key={mistake}
                  className="flex items-start gap-3 rounded-xl border p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />

                  <span className="leading-6">{mistake}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Accuracy */}
          <section
            aria-labelledby="accuracy-first"
            className="mb-10 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <h2
              id="accuracy-first"
              className="text-2xl font-bold"
            >
              Should You Focus on Speed or Accuracy?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Beginners should generally prioritize accuracy. Once your
              fingers become familiar with the correct movements, speed can
              increase naturally through consistent practice.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              A controlled typing rhythm is usually more useful than rushing
              and making frequent mistakes.
            </p>

            <Link
              to="/guides/improve-typing-accuracy"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
            >
              Learn How to Improve Typing Accuracy
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </section>

          {/* Practice Plan */}
          <section
            aria-labelledby="practice-plan"
            className="mb-10"
          >
            <h2
              id="practice-plan"
              className="text-3xl font-bold"
            >
              15-Minute Touch Typing Practice Plan
            </h2>

            <div className="mt-6 space-y-3">
              <div className="rounded-xl border p-4">
                <strong>5 minutes:</strong>{' '}
                Practice home-row and finger movements.
              </div>

              <div className="rounded-xl border p-4">
                <strong>5 minutes:</strong>{' '}
                Practice words and short sentences.
              </div>

              <div className="rounded-xl border p-4">
                <strong>5 minutes:</strong>{' '}
                Take a timed typing test and review mistakes.
              </div>
            </div>

            <p className="mt-5 leading-7 text-muted-foreground">
              Repeat this routine regularly and increase difficulty gradually
              as your accuracy improves.
            </p>

            <Link
              to="/guides/how-to-practice-typing-every-day"
              className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
            >
              Learn How to Practice Typing Every Day
              <ArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>
          </section>

          {/* CTA */}
          <section
            aria-labelledby="start-practice"
            className="mb-10 rounded-2xl border bg-card p-6 shadow-sm"
          >
            <h2
              id="start-practice"
              className="text-2xl font-bold"
            >
              Start Learning Touch Typing
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Practice touch typing with TypSmart and work toward better
              accuracy, consistency, and typing speed.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/practice"
                className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Start Typing Practice
              </Link>

              <Link
                to="/typing-test"
                className="rounded-xl border px-5 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Take a Typing Test
              </Link>
            </div>
          </section>

          {/* Related Guides */}
          <section
            aria-labelledby="related-guides"
            className="border-t pt-8"
          >
            <h2
              id="related-guides"
              className="text-2xl font-bold"
            >
              Related Typing Guides
            </h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {RELATED_GUIDES.map((guide) => (
                <Link
                  key={guide.href}
                  to={guide.href}
                  className="rounded-xl border p-5 transition hover:-translate-y-0.5 hover:bg-muted"
                >
                  <h3 className="font-semibold">
                    {guide.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {guide.description}
                  </p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Read Guide
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section
            aria-labelledby="faq"
            className="mt-10 border-t pt-8"
          >
            <h2 id="faq" className="text-2xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-5 space-y-5">
              {FAQS.map(({ question, answer }) => (
                <article key={question}>
                  <h3 className="font-semibold">
                    {question}
                  </h3>

                  <p className="mt-2 leading-7 text-muted-foreground">
                    {answer}
                  </p>
                </article>
              ))}
            </div>
          </section>

        </article>
      </main>
    </>
  )
}

export default TouchTypingGuide