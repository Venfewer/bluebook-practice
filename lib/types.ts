export type ChoiceLabel = "A" | "B" | "C" | "D";

export interface Choice {
  label: ChoiceLabel;
  /** May contain inline HTML (e.g. <em>, <sup>). */
  text: string;
}

export interface Question {
  id: string;
  /** "mc" = multiple choice, "spr" = student-produced response (grid-in). */
  type: "mc" | "spr";
  domain: string;
  skill: string;
  difficulty: "E" | "M" | "H";
  /** Passage / table / figure shown in the left pane. HTML. */
  stimulus?: string;
  /** The question stem. HTML. */
  prompt: string;
  choices?: Choice[];
  /**
   * For "mc" this is the correct choice label.
   * For "spr" it is a "|"-separated list of every accepted answer string.
   */
  correct: string;
  rationale: string;
}

export type SectionKind = "rw" | "math";

export interface TestModule {
  id: string;
  section: SectionKind;
  moduleNumber: 1 | 2;
  /** Shown in the test header. */
  title: string;
  minutes: number;
  questions: Question[];
}

export interface PracticeTest {
  id: string;
  name: string;
  modules: TestModule[];
}

export const RW_DIRECTIONS = `<p>The questions in this section address a number of important reading and writing skills. Each question includes one or more passages, which may include a table or graph. Read each passage and question carefully, and then choose the best answer to the question based on the passage(s).</p><p>All questions in this section are multiple-choice with four answer choices. Each question has a single best answer.</p>`;

export const MATH_DIRECTIONS = `<p>The questions in this section address a number of important math skills.</p><p>Use of a calculator is permitted for all questions. A reference sheet, calculator, and these directions can be accessed throughout the test.</p><p><strong>Notes</strong></p><p>Unless otherwise indicated:</p><ul><li>All variables and expressions represent real numbers.</li><li>Figures provided are drawn to scale.</li><li>All figures lie in a plane.</li><li>The domain of a given function <em>f</em> is the set of all real numbers <em>x</em> for which <em>f</em>(<em>x</em>) is a real number.</li></ul><p><strong>For multiple-choice questions</strong>, solve each problem and choose the correct answer from the choices provided. Each multiple-choice question has a single correct answer.</p><p><strong>For student-produced response questions</strong>, solve each problem and enter your answer as described below.</p><ul><li>If you find <strong>more than one correct answer</strong>, enter only one answer.</li><li>You can enter up to 5 characters for a <strong>positive</strong> answer and up to 6 characters (including the negative sign) for a <strong>negative</strong> answer.</li><li>If your answer is a <strong>fraction</strong> that doesn't fit in the provided space, enter the decimal equivalent.</li><li>If your answer is a <strong>decimal</strong> that doesn't fit in the provided space, enter it by truncating or rounding at the fourth digit.</li><li>If your answer is a <strong>mixed number</strong> (such as 3½), enter it as an improper fraction (7/2) or its decimal equivalent (3.5).</li><li>Don't enter <strong>symbols</strong> such as a percent sign, comma, or dollar sign.</li></ul>`;
