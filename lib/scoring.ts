import { MODULES } from "./test";
import type { Question, SectionKind } from "./types";

export interface AnswerRecord {
  choice?: string;
  spr?: string;
}

export type AnswerMap = Record<string, AnswerRecord>;

/** Normalizes a grid-in response so "0.5", ".5" and "1/2" all compare equal. */
function normalizeSpr(raw: string): string[] {
  const s = raw.trim().replace(/\s+/g, "");
  if (!s) return [];
  const out = new Set<string>([s]);

  // Fractions -> decimal
  const frac = s.match(/^(-?\d+)\/(\d+)$/);
  if (frac) {
    const v = Number(frac[1]) / Number(frac[2]);
    if (Number.isFinite(v)) out.add(String(v));
  }

  const n = Number(s);
  if (Number.isFinite(n)) {
    out.add(String(n)); // ".5" -> "0.5", "05" -> "5"
  }
  return Array.from(out);
}

export function isCorrect(q: Question, answer?: AnswerRecord): boolean {
  if (!answer) return false;
  if (q.type === "mc") return !!answer.choice && answer.choice === q.correct;

  const given = normalizeSpr(answer.spr ?? "");
  if (given.length === 0) return false;
  const accepted = q.correct.split("|").flatMap((a) => normalizeSpr(a));
  return given.some((g) => accepted.includes(g));
}

function round10(n: number) {
  return Math.round(n / 10) * 10;
}

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

export interface SectionScore {
  section: SectionKind;
  label: string;
  module1Raw: number;
  module1Total: number;
  module2Raw: number;
  module2Total: number;
  raw: number;
  total: number;
  /** Which module 2 difficulty the student was routed to. */
  routed: "upper" | "lower";
  scaled: number;
}

export interface DomainScore {
  domain: string;
  correct: number;
  total: number;
}

export interface ScoreReport {
  sections: SectionScore[];
  totalScale: number;
  domains: Record<SectionKind, DomainScore[]>;
  answered: number;
  totalQuestions: number;
}

/** Module-1 raw score at or above which the student is routed to the harder module 2. */
const ROUTING_THRESHOLD: Record<SectionKind, number> = { rw: 15, math: 12 };

function scaleSection(
  section: SectionKind,
  m1Raw: number,
  m1Total: number,
  m2Raw: number,
  m2Total: number
): { scaled: number; routed: "upper" | "lower" } {
  const routed: "upper" | "lower" =
    m1Raw >= ROUTING_THRESHOLD[section] ? "upper" : "lower";
  const raw = m1Raw + m2Raw;

  if (routed === "upper") {
    // Ceiling of 800 for a perfect paper.
    const max = m1Total + m2Total;
    return { scaled: clamp(round10(430 + (raw / max) * 370), 200, 800), routed };
  }
  // Routed down: the section caps out below the top of the scale, as on the real test.
  const max = ROUTING_THRESHOLD[section] - 1 + m2Total;
  return { scaled: clamp(round10(200 + (raw / max) * 390), 200, 800), routed };
}

export function scoreTest(answers: AnswerMap): ScoreReport {
  const sections: SectionScore[] = [];
  const domains: Record<SectionKind, DomainScore[]> = { rw: [], math: [] };
  let answered = 0;
  let totalQuestions = 0;

  for (const kind of ["rw", "math"] as SectionKind[]) {
    const mods = MODULES.filter((m) => m.section === kind);
    const [m1, m2] = mods;

    const rawOf = (qs: Question[]) =>
      qs.reduce((acc, q) => acc + (isCorrect(q, answers[q.id]) ? 1 : 0), 0);

    const m1Raw = rawOf(m1.questions);
    const m2Raw = rawOf(m2.questions);
    const { scaled, routed } = scaleSection(
      kind,
      m1Raw,
      m1.questions.length,
      m2Raw,
      m2.questions.length
    );

    sections.push({
      section: kind,
      label: kind === "rw" ? "Reading and Writing" : "Math",
      module1Raw: m1Raw,
      module1Total: m1.questions.length,
      module2Raw: m2Raw,
      module2Total: m2.questions.length,
      raw: m1Raw + m2Raw,
      total: m1.questions.length + m2.questions.length,
      routed,
      scaled,
    });

    const byDomain = new Map<string, DomainScore>();
    for (const q of [...m1.questions, ...m2.questions]) {
      totalQuestions += 1;
      const a = answers[q.id];
      if (a && (a.choice || (a.spr && a.spr.trim()))) answered += 1;
      const entry = byDomain.get(q.domain) ?? {
        domain: q.domain,
        correct: 0,
        total: 0,
      };
      entry.total += 1;
      if (isCorrect(q, a)) entry.correct += 1;
      byDomain.set(q.domain, entry);
    }
    domains[kind] = Array.from(byDomain.values()).sort((a, b) =>
      a.domain.localeCompare(b.domain)
    );
  }

  return {
    sections,
    totalScale: sections.reduce((acc, s) => acc + s.scaled, 0),
    domains,
    answered,
    totalQuestions,
  };
}
