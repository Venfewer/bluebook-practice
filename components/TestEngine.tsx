"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "./Modal";
import Calculator from "./Calculator";
import ReferenceSheet from "./ReferenceSheet";
import Navigator, { FlagIcon, type QuestionStatus } from "./Navigator";
import {
  BREAK_AFTER_MODULE_INDEX,
  BREAK_SECONDS,
  FOCUS_PENALTY_SECONDS,
  MODULES,
} from "@/lib/test";
import { MATH_DIRECTIONS, RW_DIRECTIONS } from "@/lib/types";
import {
  RESULT_KEY,
  STATE_KEY,
  displayName,
  loadSession,
  type StudentSession,
} from "@/lib/session";
import type { AnswerMap } from "@/lib/scoring";

type Phase = "testing" | "review" | "break" | "transition";

interface PersistedState {
  moduleIndex: number;
  qIndex: number;
  phase: Phase;
  deadline: number;
  breakDeadline: number | null;
  answers: AnswerMap;
  flags: Record<string, boolean>;
  crossed: Record<string, string[]>;
  highlights: Record<string, string>;
  violations: number;
  penaltySeconds: number;
}

function fmt(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

/* ---------------------------------------------------------------- icons */

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 7.2V12l3 1.8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Caret({ up }: { up?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform ${up ? "rotate-180" : ""}`}
      fill="none"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeaderTool({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex w-[74px] flex-col items-center gap-1 rounded-md px-1 py-1.5 text-[12px] leading-tight transition hover:bg-gray-100 ${
        active ? "text-cb-blue" : "text-cb-ink"
      }`}
    >
      {icon}
      <span className="text-center">{label}</span>
    </button>
  );
}

/* ------------------------------------------------------------- component */

export default function TestEngine() {
  const router = useRouter();
  const [session, setSession] = useState<StudentSession | null>(null);
  const [hydrated, setHydrated] = useState(false);

  const [moduleIndex, setModuleIndex] = useState(0);
  const [qIndex, setQIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("testing");
  const [deadline, setDeadline] = useState<number>(0);
  const [breakDeadline, setBreakDeadline] = useState<number | null>(null);
  const [now, setNow] = useState<number>(() => Date.now());

  const [answers, setAnswers] = useState<AnswerMap>({});
  const [flags, setFlags] = useState<Record<string, boolean>>({});
  const [crossed, setCrossed] = useState<Record<string, string[]>>({});
  const [highlights, setHighlights] = useState<Record<string, string>>({});

  const [violations, setViolations] = useState(0);
  const [penaltySeconds, setPenaltySeconds] = useState(0);
  const [showPenalty, setShowPenalty] = useState(false);

  const [timerHidden, setTimerHidden] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [directionsOpen, setDirectionsOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(false);
  const [refOpen, setRefOpen] = useState(false);
  const [crossOutMode, setCrossOutMode] = useState(false);
  const [highlightMode, setHighlightMode] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const passageRef = useRef<HTMLDivElement | null>(null);

  const testModule = MODULES[moduleIndex];
  const questions = testModule.questions;
  const question = questions[Math.min(qIndex, questions.length - 1)];
  const isMath = testModule.section === "math";

  /* ------------------------------------------------------- hydration */

  useEffect(() => {
    const s = loadSession();
    if (!s) {
      router.replace("/checkin");
      return;
    }
    setSession(s);

    let restored = false;
    try {
      const raw = localStorage.getItem(STATE_KEY);
      if (raw) {
        const p = JSON.parse(raw) as PersistedState;
        setModuleIndex(p.moduleIndex);
        setQIndex(p.qIndex);
        setPhase(p.phase);
        setDeadline(p.deadline);
        setBreakDeadline(p.breakDeadline);
        setAnswers(p.answers ?? {});
        setFlags(p.flags ?? {});
        setCrossed(p.crossed ?? {});
        setHighlights(p.highlights ?? {});
        setViolations(p.violations ?? 0);
        setPenaltySeconds(p.penaltySeconds ?? 0);
        restored = true;
      }
    } catch {
      /* fall through to a fresh start */
    }

    if (!restored) {
      setDeadline(Date.now() + MODULES[0].minutes * 60_000);
    }
    setHydrated(true);
  }, [router]);

  /* ------------------------------------------------------ persistence */

  useEffect(() => {
    if (!hydrated) return;
    const payload: PersistedState = {
      moduleIndex,
      qIndex,
      phase,
      deadline,
      breakDeadline,
      answers,
      flags,
      crossed,
      highlights,
      violations,
      penaltySeconds,
    };
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(payload));
    } catch {
      /* quota or private mode — the test keeps working in memory */
    }
  }, [
    hydrated,
    moduleIndex,
    qIndex,
    phase,
    deadline,
    breakDeadline,
    answers,
    flags,
    crossed,
    highlights,
    violations,
    penaltySeconds,
  ]);

  /* ------------------------------------------------------------ clock */

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 250);
    return () => clearInterval(id);
  }, []);

  const secondsLeft = Math.max(0, Math.round((deadline - now) / 1000));
  const breakSecondsLeft =
    breakDeadline === null ? 0 : Math.max(0, Math.round((breakDeadline - now) / 1000));

  /* ------------------------------------------------- focus penalties */

  useEffect(() => {
    if (!hydrated) return;
    if (phase !== "testing" && phase !== "review") return;

    let lastTrigger = 0;
    const trigger = () => {
      const t = Date.now();
      if (t - lastTrigger < 1500) return;
      lastTrigger = t;
      setViolations((v) => v + 1);
      setPenaltySeconds((p) => p + FOCUS_PENALTY_SECONDS);
      setDeadline((d) => d - FOCUS_PENALTY_SECONDS * 1000);
      setShowPenalty(true);
    };

    const onVisibility = () => {
      if (document.hidden) trigger();
    };
    window.addEventListener("blur", trigger);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.removeEventListener("blur", trigger);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [hydrated, phase]);

  /* ------------------------------------------------- module lifecycle */

  const finishTest = useCallback(
    (finalAnswers: AnswerMap, v: number, p: number) => {
      try {
        localStorage.setItem(
          RESULT_KEY,
          JSON.stringify({
            answers: finalAnswers,
            violations: v,
            penaltySeconds: p,
            completedAt: Date.now(),
          })
        );
        localStorage.removeItem(STATE_KEY);
      } catch {
        /* ignore */
      }
      router.push("/results");
    },
    [router]
  );

  const submitModule = useCallback(() => {
    setNavOpen(false);
    setConfirmSubmit(false);
    setCalcOpen(false);
    setRefOpen(false);

    const next = moduleIndex + 1;
    if (next >= MODULES.length) {
      finishTest(answers, violations, penaltySeconds);
      return;
    }
    if (moduleIndex === BREAK_AFTER_MODULE_INDEX) {
      setBreakDeadline(Date.now() + BREAK_SECONDS * 1000);
      setPhase("break");
    } else {
      setPhase("transition");
    }
  }, [moduleIndex, answers, violations, penaltySeconds, finishTest]);

  const startNextModule = useCallback(() => {
    const next = moduleIndex + 1;
    setModuleIndex(next);
    setQIndex(0);
    setPhase("testing");
    setBreakDeadline(null);
    setCrossOutMode(false);
    setHighlightMode(false);
    setDeadline(Date.now() + MODULES[next].minutes * 60_000);
  }, [moduleIndex]);

  // Time expiry — the module submits itself, as it does on the real test.
  useEffect(() => {
    if (!hydrated) return;
    if (phase !== "testing" && phase !== "review") return;
    if (secondsLeft > 0) return;
    submitModule();
  }, [hydrated, phase, secondsLeft, submitModule]);

  // Break expiry rolls straight into the next module.
  useEffect(() => {
    if (phase !== "break" || breakDeadline === null) return;
    if (breakSecondsLeft > 0) return;
    startNextModule();
  }, [phase, breakDeadline, breakSecondsLeft, startNextModule]);

  /* ------------------------------------------------------- answering */

  const setChoice = useCallback((id: string, label: string) => {
    setAnswers((a) => ({
      ...a,
      [id]: { ...a[id], choice: a[id]?.choice === label ? undefined : label },
    }));
  }, []);

  const setSpr = useCallback((id: string, value: string) => {
    setAnswers((a) => ({ ...a, [id]: { ...a[id], spr: value } }));
  }, []);

  const toggleCross = useCallback((id: string, label: string) => {
    setCrossed((c) => {
      const list = c[id] ?? [];
      return {
        ...c,
        [id]: list.includes(label)
          ? list.filter((l) => l !== label)
          : [...list, label],
      };
    });
  }, []);

  const statuses: QuestionStatus[] = useMemo(
    () =>
      questions.map((q) => {
        const a = answers[q.id];
        const answered = !!(a?.choice || (a?.spr && a.spr.trim().length > 0));
        return { answered, flagged: !!flags[q.id] };
      }),
    [questions, answers, flags]
  );

  const unansweredCount = statuses.filter((s) => !s.answered).length;

  /* ------------------------------------------------------ highlights */

  const applyHighlight = useCallback(() => {
    if (!highlightMode || !passageRef.current) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed || sel.rangeCount === 0) return;
    const range = sel.getRangeAt(0);
    if (!passageRef.current.contains(range.commonAncestorContainer)) return;

    try {
      const mark = document.createElement("mark");
      mark.className = "cb-hl";
      mark.appendChild(range.extractContents());
      range.insertNode(mark);
      sel.removeAllRanges();
      setHighlights((h) => ({
        ...h,
        [question.id]: passageRef.current!.innerHTML,
      }));
    } catch {
      /* selections spanning odd boundaries are simply ignored */
    }
  }, [highlightMode, question.id]);

  const removeHighlightAt = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName !== "MARK" || !passageRef.current) return;
      const parent = target.parentNode;
      if (!parent) return;
      while (target.firstChild) parent.insertBefore(target.firstChild, target);
      parent.removeChild(target);
      passageRef.current.normalize();
      setHighlights((h) => ({
        ...h,
        [question.id]: passageRef.current!.innerHTML,
      }));
    },
    [question.id]
  );

  /* ---------------------------------------------------------- render */

  if (!hydrated || !session) {
    return (
      <div className="flex h-screen items-center justify-center text-[15px] text-cb-gray">
        Loading your test…
      </div>
    );
  }

  /* ---- break ---- */
  if (phase === "break") {
    return (
      <div className="flex h-screen flex-col bg-white">
        <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <p className="text-[15px] font-semibold uppercase tracking-widest text-cb-gray">
            Practice Test
          </p>
          <h1 className="mt-3 text-[44px] font-normal">Break</h1>
          <p className="mt-8 text-[17px]">Remaining Break Time</p>
          <p className="mt-2 font-mono text-[64px] font-medium tabular-nums">
            {fmt(breakSecondsLeft)}
          </p>
          <div className="mt-10 max-w-xl space-y-3 text-[15px] leading-relaxed text-cb-gray">
            <p>
              You may leave your desk. Do not open any other application — the
              focus penalty is paused during the break, but your next module
              begins automatically when the timer reaches zero.
            </p>
            <p>Section 2, Module 1: Math is next.</p>
          </div>
          <button className="cb-btn-blue mt-10 px-10" onClick={startNextModule}>
            Resume Testing
          </button>
        </div>
      </div>
    );
  }

  /* ---- between-module transition ---- */
  if (phase === "transition") {
    const next = MODULES[moduleIndex + 1];
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-white px-6 text-center">
        <h1 className="text-[40px] font-normal">This Module is Complete</h1>
        <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-cb-gray">
          You can no longer return to the questions in the module you just
          finished. Your answers have been saved.
        </p>
        <div className="mt-10 rounded-xl border border-gray-200 bg-cb-panel px-8 py-6">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-cb-gray">
            Up next
          </p>
          <p className="mt-1.5 text-[19px] font-medium">{next.title}</p>
          <p className="mt-1 text-[15px] text-cb-gray">
            {next.questions.length} questions · {next.minutes} minutes
          </p>
        </div>
        <button className="cb-btn-blue mt-10 px-10" onClick={startNextModule}>
          Continue
        </button>
      </div>
    );
  }

  const headerTitle = testModule.title;

  const header = (
    <header className="grid h-[84px] shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b-2 border-dashed border-gray-300 bg-white px-6">
      <div>
        <p className="text-[17px] font-semibold">{headerTitle}</p>
        <button
          onClick={() => setDirectionsOpen(true)}
          className="mt-0.5 flex items-center gap-1 text-[15px] text-cb-ink hover:underline"
        >
          Directions
          <Caret />
        </button>
      </div>

      <div className="flex flex-col items-center">
        {timerHidden ? (
          <div className="flex items-center gap-2 text-cb-ink">
            <ClockIcon />
            <span className="text-[17px]">Timer hidden</span>
          </div>
        ) : (
          <p
            className={`font-mono text-[26px] font-medium tabular-nums ${
              secondsLeft <= 60 ? "text-[#C13030]" : ""
            }`}
            aria-live="off"
          >
            {fmt(secondsLeft)}
          </p>
        )}
        <button
          onClick={() => setTimerHidden((h) => !h)}
          className="mt-0.5 rounded-full border border-cb-ink px-3.5 py-0.5 text-[13px] font-medium transition hover:bg-gray-100"
        >
          {timerHidden ? "Show" : "Hide"}
        </button>
      </div>

      <div className="flex items-center justify-end gap-1">
        {isMath ? (
          <>
            <HeaderTool
              label="Calculator"
              active={calcOpen}
              onClick={() => setCalcOpen((o) => !o)}
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <rect
                    x="5"
                    y="3"
                    width="14"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 7h8M8.5 12h.01M12 12h.01M15.5 12h.01M8.5 16h.01M12 16h.01M15.5 16h.01"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              }
            />
            <HeaderTool
              label="Reference"
              active={refOpen}
              onClick={() => setRefOpen(true)}
              icon={
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path
                    d="M4 5.5A1.5 1.5 0 015.5 4H11v16H5.5A1.5 1.5 0 014 18.5v-13zM20 5.5A1.5 1.5 0 0018.5 4H13v16h5.5a1.5 1.5 0 001.5-1.5v-13z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              }
            />
          </>
        ) : (
          <HeaderTool
            label="Highlights & Notes"
            active={highlightMode}
            onClick={() => setHighlightMode((h) => !h)}
            icon={
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M4 20h4l9.5-9.5a2.1 2.1 0 00-3-3L5 17v3z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        )}
        <HeaderTool
          label="More"
          onClick={() => setDirectionsOpen(true)}
          icon={
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <circle cx="12" cy="5.5" r="1.7" />
              <circle cx="12" cy="12" r="1.7" />
              <circle cx="12" cy="18.5" r="1.7" />
            </svg>
          }
        />
      </div>
    </header>
  );

  const footer = (
    <footer className="relative flex h-[92px] shrink-0 items-center border-t-2 border-dashed border-gray-300 bg-white px-6">
      <p className="w-[280px] truncate text-[17px] font-semibold">
        {displayName(session)}
      </p>

      <div className="flex flex-1 justify-center">
        {phase === "testing" ? (
          <button
            onClick={() => setNavOpen((o) => !o)}
            className="flex items-center gap-2 rounded-md bg-[#1E1E1E] px-4 py-2 text-[15px] font-medium text-white transition hover:bg-black"
          >
            Question {qIndex + 1} of {questions.length}
            <Caret up={navOpen} />
          </button>
        ) : (
          <p className="text-[16px] font-semibold">Check Your Work</p>
        )}
      </div>

      <div className="flex w-[280px] items-center justify-end gap-3">
        {phase === "testing" && qIndex > 0 ? (
          <button
            className="cb-btn-blue"
            onClick={() => setQIndex((i) => Math.max(0, i - 1))}
          >
            Back
          </button>
        ) : null}
        {phase === "review" ? (
          <button className="cb-btn-blue" onClick={() => setPhase("testing")}>
            Back
          </button>
        ) : null}
        <button
          className="cb-btn-blue"
          onClick={() => {
            if (phase === "review") {
              setConfirmSubmit(true);
            } else if (qIndex === questions.length - 1) {
              setPhase("review");
            } else {
              setQIndex((i) => i + 1);
            }
          }}
        >
          Next
        </button>
      </div>

      <Navigator
        open={navOpen}
        onClose={() => setNavOpen(false)}
        title={headerTitle}
        questions={questions}
        statuses={statuses}
        current={qIndex}
        onJump={(i) => setQIndex(i)}
        onReview={() => setPhase("review")}
      />
    </footer>
  );

  /* ---- review page ---- */
  if (phase === "review") {
    return (
      <div className="flex h-screen flex-col bg-white">
        {header}
        <main className="flex-1 overflow-y-auto px-6 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-[36px] font-normal">Check Your Work</h1>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-cb-gray">
              On test day, you won&rsquo;t be able to move on to the next module
              until time expires. For these practice questions, you can click{" "}
              <strong className="font-semibold text-black">Next</strong> when
              you&rsquo;re ready to move on.
            </p>

            <div className="mt-10 rounded-xl border border-gray-300 p-7">
              <p className="mb-5 text-[15px] font-semibold">{headerTitle}</p>
              <div className="grid grid-cols-9 gap-x-3 gap-y-6">
                {questions.map((q, i) => {
                  const st = statuses[i];
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        setQIndex(i);
                        setPhase("testing");
                      }}
                      className="relative flex h-[34px] w-[34px] items-center justify-center"
                    >
                      {st.flagged ? (
                        <FlagIcon
                          filled
                          className="absolute -right-[7px] -top-[9px] text-[#C13030]"
                        />
                      ) : null}
                      <span
                        className={[
                          "flex h-[34px] w-[34px] items-center justify-center rounded-[4px] text-[15px] font-medium",
                          st.answered
                            ? "bg-cb-blue text-white"
                            : "border border-dashed border-cb-gray bg-white",
                        ].join(" ")}
                      >
                        {i + 1}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {unansweredCount > 0 ? (
              <p className="mt-6 text-[15px] text-[#C13030]">
                {unansweredCount} question{unansweredCount === 1 ? "" : "s"}{" "}
                still unanswered.
              </p>
            ) : (
              <p className="mt-6 text-[15px] text-cb-green">
                All questions answered.
              </p>
            )}
          </div>
        </main>
        {footer}

        <Modal
          open={confirmSubmit}
          onClose={() => setConfirmSubmit(false)}
          title="Submit this module?"
        >
          <p className="text-[15px] leading-relaxed text-cb-gray">
            {unansweredCount > 0
              ? `You have ${unansweredCount} unanswered question${
                  unansweredCount === 1 ? "" : "s"
                }. `
              : ""}
            Once you submit, you cannot return to this module.
          </p>
          <div className="mt-7 flex justify-end gap-3">
            <button
              className="cb-btn-outline px-7 py-2.5"
              onClick={() => setConfirmSubmit(false)}
            >
              Keep working
            </button>
            <button className="cb-btn-blue" onClick={submitModule}>
              Submit module
            </button>
          </div>
        </Modal>

        {directionsOpen ? (
          <Modal
            open
            onClose={() => setDirectionsOpen(false)}
            title="Directions"
          >
            <div
              className="cb-prose"
              dangerouslySetInnerHTML={{
                __html: isMath ? MATH_DIRECTIONS : RW_DIRECTIONS,
              }}
            />
          </Modal>
        ) : null}
      </div>
    );
  }

  /* ---- question view ---- */

  const crossList = crossed[question.id] ?? [];
  const stimulusHtml = highlights[question.id] ?? question.stimulus ?? "";

  const questionBlock = (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-3 border-b border-gray-200 bg-cb-panel px-5 py-2.5">
        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[4px] bg-[#1E1E1E] text-[15px] font-semibold text-white">
          {qIndex + 1}
        </span>
        <button
          onClick={() =>
            setFlags((f) => ({ ...f, [question.id]: !f[question.id] }))
          }
          className={`flex items-center gap-1.5 text-[14px] font-medium ${
            flags[question.id] ? "text-[#C13030]" : "text-cb-ink"
          }`}
        >
          <FlagIcon filled={!!flags[question.id]} />
          Mark for Review
        </button>
        <div className="flex-1" />
        {question.type === "mc" ? (
          <button
            onClick={() => setCrossOutMode((c) => !c)}
            aria-pressed={crossOutMode}
            className={`rounded-md border px-2.5 py-1 text-[13px] font-bold transition ${
              crossOutMode
                ? "border-cb-blue bg-cb-blue text-white"
                : "border-cb-ink text-cb-ink hover:bg-gray-100"
            }`}
            title="Answer eliminator"
          >
            <span className="line-through">ABC</span>
          </button>
        ) : null}
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        {isMath && question.stimulus ? (
          <div
            className="cb-prose mb-5"
            dangerouslySetInnerHTML={{ __html: question.stimulus }}
          />
        ) : null}

        <div
          className="cb-prose mb-6 font-medium"
          dangerouslySetInnerHTML={{ __html: question.prompt }}
        />

        {question.type === "mc" ? (
          <ul className="space-y-3">
            {question.choices!.map((c) => {
              const selected = answers[question.id]?.choice === c.label;
              const isCrossed = crossList.includes(c.label);
              return (
                <li key={c.label} className="flex items-center gap-2">
                  <button
                    onClick={() => setChoice(question.id, c.label)}
                    className={[
                      "flex flex-1 items-center gap-4 rounded-lg border-2 px-4 py-3 text-left transition",
                      selected
                        ? "border-cb-blue bg-[#F4F6FF]"
                        : "border-gray-300 bg-white hover:border-gray-400",
                      isCrossed ? "cb-crossed" : "",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border-2 text-[15px] font-semibold",
                        selected
                          ? "border-cb-blue bg-cb-blue text-white"
                          : "border-cb-ink text-cb-ink",
                      ].join(" ")}
                    >
                      {c.label}
                    </span>
                    <span
                      className="cb-prose flex-1"
                      dangerouslySetInnerHTML={{ __html: c.text }}
                    />
                  </button>

                  {crossOutMode ? (
                    <button
                      onClick={() => toggleCross(question.id, c.label)}
                      className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-cb-ink text-[13px] font-semibold transition hover:bg-gray-100"
                      aria-label={`${
                        isCrossed ? "Restore" : "Cross out"
                      } choice ${c.label}`}
                    >
                      {isCrossed ? (
                        <span className="text-[11px]">undo</span>
                      ) : (
                        <span className="line-through">{c.label}</span>
                      )}
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ul>
        ) : (
          <div>
            <input
              value={answers[question.id]?.spr ?? ""}
              onChange={(e) => setSpr(question.id, e.target.value)}
              placeholder="Enter your answer"
              inputMode="text"
              className="w-full max-w-xs rounded-lg border-2 border-gray-300 px-4 py-3 text-[19px] outline-none focus:border-cb-blue"
            />
            <p className="mt-3 text-[14px] text-cb-gray">
              Answer preview:{" "}
              <span className="font-serif text-[17px] text-cb-ink">
                {answers[question.id]?.spr?.trim() || "—"}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen flex-col bg-white">
      {header}

      <main className="flex min-h-0 flex-1">
        {isMath ? (
          <div className="mx-auto flex w-full max-w-3xl flex-col">
            {questionBlock}
          </div>
        ) : (
          <>
            <section className="min-w-0 flex-1 overflow-y-auto border-r-2 border-gray-300 px-8 py-7">
              {highlightMode ? (
                <p className="mb-4 inline-flex items-center gap-2 rounded-md bg-[#FFF8DC] px-3 py-1.5 text-[13px] font-medium">
                  Highlighting on — select text to highlight, click a highlight
                  to remove it.
                </p>
              ) : null}
              <div
                ref={passageRef}
                onMouseUp={applyHighlight}
                onClick={removeHighlightAt}
                className={`cb-prose ${highlightMode ? "cursor-text" : ""}`}
                dangerouslySetInnerHTML={{ __html: stimulusHtml }}
              />
            </section>
            <section className="min-w-0 flex-1">{questionBlock}</section>
          </>
        )}
      </main>

      {footer}

      {/* Calculator panel — floats over the question, as it does in Bluebook. */}
      {isMath && calcOpen ? (
        <div className="fixed bottom-[100px] left-6 z-40 h-[520px] w-[440px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2">
            <p className="text-[14px] font-semibold">Calculator</p>
            <button
              onClick={() => setCalcOpen(false)}
              aria-label="Close calculator"
              className="rounded p-1 text-cb-gray hover:bg-gray-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="h-[calc(100%-41px)]">
            <Calculator />
          </div>
        </div>
      ) : null}

      <Modal
        open={refOpen}
        onClose={() => setRefOpen(false)}
        title="Reference Sheet"
      >
        <ReferenceSheet />
      </Modal>

      <Modal
        open={directionsOpen}
        onClose={() => setDirectionsOpen(false)}
        title="Directions"
      >
        <div
          className="cb-prose"
          dangerouslySetInnerHTML={{
            __html: isMath ? MATH_DIRECTIONS : RW_DIRECTIONS,
          }}
        />
      </Modal>

      <Modal
        open={showPenalty}
        onClose={() => setShowPenalty(false)}
        title="You left the test window"
        width="max-w-md"
      >
        <p className="text-[15px] leading-relaxed text-cb-gray">
          {FOCUS_PENALTY_SECONDS} seconds have been removed from this
          module&rsquo;s timer. On test day, leaving the app can invalidate your
          score.
        </p>
        <p className="mt-4 text-[15px]">
          Times you have left the window:{" "}
          <strong className="font-semibold">{violations}</strong>
          <br />
          Total time lost:{" "}
          <strong className="font-semibold">{fmt(penaltySeconds)}</strong>
        </p>
        <div className="mt-7 flex justify-end">
          <button className="cb-btn-blue" onClick={() => setShowPenalty(false)}>
            Return to test
          </button>
        </div>
      </Modal>
    </div>
  );
}
