import React from 'react'
import { Link } from 'react-router-dom'
import { Gauge, Users, Target, TrendingUp, CheckCircle2 } from 'lucide-react'
import SEO from '../../components/SEO'

export function AverageTypingSpeed() {
  return (
    <>
      <SEO
        title="Average Typing Speed: What Is a Good WPM? | TypSmart"
        description="Learn the average typing speed, what counts as a good WPM, and how your typing speed compares with common beginner, intermediate, and advanced levels."
      />

      <main className="min-h-screen bg-background text-foreground">
        <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

          <header className="mb-10">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary">
              <Gauge className="h-5 w-5" />
              Typing Speed Guide
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Average Typing Speed: What Is a Good WPM?
            </h1>

            <p className="mt-5 text-lg leading-8 text-muted-foreground">
              What is the average typing speed? Is 40 WPM good? What about
              50, 60, or 80 WPM? This guide explains common typing-speed
              ranges and how to understand your own WPM score.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-10 rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">
              What Is the Average Typing Speed?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              For general computer use, typing speeds around <strong>40 WPM</strong>
              are often considered a reasonable baseline. However, there is no
              single universal average because typing speed varies by age,
              experience, keyboard familiarity, language, and typing method.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Instead of focusing only on an average, it is more useful to
              track your own WPM and accuracy over time.
            </p>
          </section>

          {/* WPM Table */}
          <section className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary" />

              <h2 className="text-3xl font-bold">
                Typing Speed Levels
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              The following ranges are useful general benchmarks. They are not
              official worldwide classifications.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border">
              <table className="w-full text-left">
                <thead className="bg-muted">
                  <tr>
                    <th className="px-4 py-3 font-semibold">WPM</th>
                    <th className="px-4 py-3 font-semibold">General Level</th>
                    <th className="px-4 py-3 font-semibold">Description</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">Below 30</td>
                    <td className="px-4 py-3">Beginner</td>
                    <td className="px-4 py-3">
                      Still developing basic typing skills.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">30–40</td>
                    <td className="px-4 py-3">Developing</td>
                    <td className="px-4 py-3">
                      Suitable for basic everyday typing.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">40–50</td>
                    <td className="px-4 py-3">Average / Comfortable</td>
                    <td className="px-4 py-3">
                      A useful level for everyday computer work.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">50–60</td>
                    <td className="px-4 py-3">Good</td>
                    <td className="px-4 py-3">
                      Above a basic typing pace.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">60–80</td>
                    <td className="px-4 py-3">Fast</td>
                    <td className="px-4 py-3">
                      Strong typing performance for many tasks.
                    </td>
                  </tr>

                  <tr>
                    <td className="px-4 py-3">80+</td>
                    <td className="px-4 py-3">Very Fast</td>
                    <td className="px-4 py-3">
                      Advanced typing speed.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Is 40 WPM Good */}
          <section className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />

              <h2 className="text-3xl font-bold">
                Is 40 WPM a Good Typing Speed?
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              Yes. Around 40 WPM can be a practical typing speed for everyday
              computer tasks. If you are currently below 40 WPM, improving
              accuracy and learning touch-typing techniques can help you move
              toward that level.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              For professional work that involves a lot of typing, a higher
              speed can save significant time, especially when combined with
              high accuracy.
            </p>
          </section>

          {/* Is 50 WPM Good */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold">
              Is 50 WPM Good?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              50 WPM is a solid typing speed for general computer use. At this
              speed, you can comfortably handle emails, documents, messages,
              research, and many office tasks.
            </p>
          </section>

          {/* Is 60 WPM Good */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold">
              Is 60 WPM Good?
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              60 WPM is considered a fast everyday typing speed. Reaching this
              level with strong accuracy means you can enter text efficiently
              without constantly slowing down to correct mistakes.
            </p>
          </section>

          {/* Accuracy */}
          <section className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />

              <h2 className="text-3xl font-bold">
                Speed Is Not Everything
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              WPM should always be considered together with accuracy. A high
              WPM score with many errors may not be more productive than a
              slightly slower score with excellent accuracy.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">WPM</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Measures typing speed.
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">Accuracy</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Measures correctness.
                </p>
              </div>

              <div className="rounded-xl border p-5">
                <h3 className="font-semibold">Consistency</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Measures reliable performance.
                </p>
              </div>
            </div>
          </section>

          {/* Improve */}
          <section className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <TrendingUp className="h-6 w-6 text-primary" />

              <h2 className="text-3xl font-bold">
                How to Improve Your Typing Speed
              </h2>
            </div>

            <p className="leading-7 text-muted-foreground">
              If you want to increase your WPM, focus on consistent practice
              rather than trying to type as fast as possible immediately.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                'Practice touch typing regularly.',
                'Keep your eyes on the text instead of the keyboard.',
                'Improve accuracy before increasing speed.',
                'Practice difficult words and letter combinations.',
                'Use short daily typing sessions.',
                'Track your WPM and accuracy after each test.',
              ].map((tip) => (
                <li
                  key={tip}
                  className="flex items-start gap-3 rounded-xl border p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-6">{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="mb-10 rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-bold">
              Find Your Current Typing Speed
            </h2>

            <p className="mt-3 leading-7 text-muted-foreground">
              Take a TypSmart typing test to measure your current WPM and
              accuracy. Then practice regularly and track your progress.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/typing-test"
                className="rounded-xl bg-primary px-5 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Take a Typing Test
              </Link>

              <Link
                to="/practice"
                className="rounded-xl border px-5 py-3 font-semibold transition-colors hover:bg-muted"
              >
                Practice Typing
              </Link>
            </div>
          </section>

          {/* Related */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold">
              Related Typing Guides
            </h2>

            <div className="mt-5 grid gap-3">
              <Link
                to="/guides/what-is-wpm"
                className="rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                What Is WPM? Words Per Minute Explained
              </Link>

              <Link
                to="/guides/how-to-type-faster"
                className="rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                How to Type Faster: 15 Proven Techniques
              </Link>

              <Link
                to="/guides/how-to-increase-typing-speed"
                className="rounded-xl border p-4 font-medium transition-colors hover:bg-muted"
              >
                How to Increase Typing Speed
              </Link>
            </div>
          </section>

        </article>
      </main>
    </>
  )
}

export default AverageTypingSpeed