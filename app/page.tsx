import Link from "next/link";
import { MODULES } from "@/lib/test";

const totalQuestions = MODULES.reduce((n, m) => n + m.questions.length, 0);
const totalMinutes = MODULES.reduce((n, m) => n + m.minutes, 0);

function Feature({
  title,
  body,
  icon,
}: {
  title: string;
  body: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF1FE] text-cb-blue">
        {icon}
      </div>
      <h3 className="mb-2 text-[17px] font-semibold">{title}</h3>
      <p className="text-[14px] leading-relaxed text-cb-gray">{body}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Top bar */}
      <header className="border-b border-gray-200">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-cb-blue text-[13px] font-bold text-white">
              BB
            </div>
            <span className="text-[17px] font-semibold tracking-tight">
              Bluebook<span className="text-cb-blue">.practice</span>
            </span>
          </div>
          <nav className="flex items-center gap-6 text-[14px] font-medium text-cb-gray">
            <a href="#about" className="hidden hover:text-black sm:block">
              About
            </a>
            <a href="#features" className="hidden hover:text-black sm:block">
              Features
            </a>
            <Link
              href="/checkin"
              className="rounded-full bg-cb-yellow px-5 py-2 text-[14px] font-bold text-black transition hover:bg-cb-yellowhover"
            >
              Start Test
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-gray-200 bg-gradient-to-b from-[#F5F7FF] to-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cb-blue/20 bg-white px-4 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-cb-blue">
            Digital SAT · Full-length practice
          </p>
          <h1 className="mx-auto max-w-3xl text-[44px] font-semibold leading-[1.1] tracking-tight sm:text-[56px]">
            Practice the digital SAT
            <br />
            exactly as it feels on test day
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-cb-gray">
            A faithful recreation of the Bluebook testing experience — the
            check-in flow, adaptive modules, the countdown clock, mark for
            review, answer eliminator, and a full score report at the end.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/checkin" className="cb-btn-yellow">
              Start Test
            </Link>
            <a href="#about" className="cb-btn-outline">
              How it works
            </a>
          </div>

          <dl className="mx-auto mt-14 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { k: `${totalQuestions}`, v: "questions" },
              { k: "4", v: "adaptive modules" },
              { k: `${totalMinutes} min`, v: "of testing time" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-xl border border-gray-200 bg-white px-4 py-5"
              >
                <dt className="text-[26px] font-semibold tracking-tight">
                  {s.k}
                </dt>
                <dd className="mt-1 text-[13px] text-cb-gray">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center text-[32px] font-semibold tracking-tight">
          Everything the real app does
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-[15px] text-cb-gray">
          Right down to the parts students find stressful.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Feature
            title="Full check-in flow"
            body="Ten steps, testing rules, room code and start code — the same sequence a proctor walks you through before the test begins."
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d="M9 12l2 2 4-4M12 3l7 4v5c0 4.4-3 8.3-7 9-4-.7-7-4.6-7-9V7l7-4z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Feature
            title="Adaptive modules"
            body="How you do on the first module of each section decides which second module you get — and where your score can top out."
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d="M4 18l5-6 4 3 7-9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Feature
            title="Focus penalty"
            body="Switch tabs or leave the window and 30 seconds come off the clock, with a warning on your way back in. Every switch is logged."
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d="M12 8v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <Feature
            title="The full toolset"
            body="Mark for review, cross out answer choices, highlight passages, the math reference sheet and a built-in graphing calculator."
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h10"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
          <Feature
            title="Timed modules and a break"
            body="32 minutes for each Reading and Writing module, 35 for each Math module, and a 10-minute break in between."
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d="M5 4h14v5l-5 3 5 3v5H5v-5l5-3-5-3V4z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
          <Feature
            title="Score report"
            body="Section scores on the 200–800 scale, a composite, and a question-by-question review with worked explanations."
            icon={
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                <path
                  d="M7 20V10M12 20V4M17 20v-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            }
          />
        </div>
      </section>

      {/* About / structure */}
      <section id="about" className="border-t border-gray-200 bg-[#FAFAFA]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight">
              How the test is built
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-cb-gray">
              The digital SAT runs two sections, each split into two modules.
              You cannot go back to a module once you have submitted it.
            </p>
            <ol className="space-y-3">
              {MODULES.map((m, i) => (
                <li
                  key={m.id}
                  className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cb-blue text-[13px] font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="flex-1 text-[14px] font-medium">
                    {m.title.replace(/^Section \d+, /, "")}
                  </span>
                  <span className="text-[13px] tabular-nums text-cb-gray">
                    {m.questions.length} q · {m.minutes} min
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="mb-4 text-[32px] font-semibold tracking-tight">
              About this project
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-cb-gray">
              <p>
                This is an independent, open practice environment. It is not
                affiliated with, endorsed by, or connected to the College Board,
                and &ldquo;SAT&rdquo; and &ldquo;Bluebook&rdquo; are their
                trademarks.
              </p>
              <p>
                The questions here were written from scratch against the public
                digital SAT specification — the same domains, skills, item
                formats and difficulty mix. They are{" "}
                <strong className="font-semibold text-black">
                  not copies of official test material
                </strong>
                , which is copyrighted and distributed only inside the official
                app.
              </p>
              <p>
                Device lockdown is deliberately not implemented. Instead, this
                version applies a{" "}
                <strong className="font-semibold text-black">
                  30-second time penalty
                </strong>{" "}
                every time you leave the test window, so the pressure to stay
                put is real without taking over your machine.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/checkin" className="cb-btn-yellow">
                Begin check-in
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-[13px] text-cb-gray sm:flex-row">
          <p>Bluebook.practice — an unofficial digital SAT practice tool.</p>
          <p>Not affiliated with the College Board.</p>
        </div>
      </footer>
    </main>
  );
}
