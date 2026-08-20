import type { PracticeTest, TestModule } from "./types";
import { RW_MODULE_1 } from "./questions-rw1";
import { RW_MODULE_2 } from "./questions-rw2";
import { MATH_MODULE_1 } from "./questions-math1";
import { MATH_MODULE_2 } from "./questions-math2";

export const MODULES: TestModule[] = [
  {
    id: "rw-1",
    section: "rw",
    moduleNumber: 1,
    title: "Section 1, Module 1: Reading and Writing",
    minutes: 32,
    questions: RW_MODULE_1,
  },
  {
    id: "rw-2",
    section: "rw",
    moduleNumber: 2,
    title: "Section 1, Module 2: Reading and Writing",
    minutes: 32,
    questions: RW_MODULE_2,
  },
  {
    id: "math-1",
    section: "math",
    moduleNumber: 1,
    title: "Section 2, Module 1: Math",
    minutes: 35,
    questions: MATH_MODULE_1,
  },
  {
    id: "math-2",
    section: "math",
    moduleNumber: 2,
    title: "Section 2, Module 2: Math",
    minutes: 35,
    questions: MATH_MODULE_2,
  },
];

export const PRACTICE_TEST: PracticeTest = {
  id: "practice-1",
  name: "Practice Test 1",
  modules: MODULES,
};

/** The 10-minute break falls between the two sections (after module index 1). */
export const BREAK_AFTER_MODULE_INDEX = 1;
export const BREAK_SECONDS = 10 * 60;

/** Seconds removed from the clock each time the test window loses focus. */
export const FOCUS_PENALTY_SECONDS = 30;
