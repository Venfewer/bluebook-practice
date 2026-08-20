import type { Question } from "./types";

/**
 * Math — Module 1 (22 questions, 35 minutes).
 * Questions 1–17 are multiple choice; 18–22 are student-produced responses,
 * matching the arrangement used on the digital SAT.
 *
 * Original items written to the digital SAT specification.
 */
export const MATH_MODULE_1: Question[] = [
  {
    id: "m1-01",
    type: "mc",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: "E",
    prompt: "If 4<em>x</em> − 9 = 27, what is the value of <em>x</em>?",
    choices: [
      { label: "A", text: "4.5" },
      { label: "B", text: "6.75" },
      { label: "C", text: "9" },
      { label: "D", text: "18" },
    ],
    correct: "C",
    rationale: "Add 9 to both sides: 4x = 36. Divide by 4: x = 9.",
  },
  {
    id: "m1-02",
    type: "mc",
    domain: "Algebra",
    skill: "Linear functions",
    difficulty: "E",
    prompt:
      "The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 3<em>x</em> + 8. What is the value of <em>f</em>(−4)?",
    choices: [
      { label: "A", text: "−20" },
      { label: "B", text: "−4" },
      { label: "C", text: "4" },
      { label: "D", text: "20" },
    ],
    correct: "B",
    rationale: "f(−4) = 3(−4) + 8 = −12 + 8 = −4.",
  },
  {
    id: "m1-03",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: "E",
    prompt:
      "A shipment contains 240 sensors, and 15% of them are defective. How many of the sensors are defective?",
    choices: [
      { label: "A", text: "16" },
      { label: "B", text: "24" },
      { label: "C", text: "36" },
      { label: "D", text: "204" },
    ],
    correct: "C",
    rationale: "0.15 × 240 = 36.",
  },
  {
    id: "m1-04",
    type: "mc",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: "E",
    prompt:
      "A line in the <em>xy</em>-plane passes through the points (2, 5) and (6, 17). What is the slope of the line?",
    choices: [
      { label: "A", text: "1/3" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "11/2" },
    ],
    correct: "B",
    rationale: "Slope = (17 − 5) / (6 − 2) = 12 / 4 = 3.",
  },
  {
    id: "m1-05",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Ratios, rates, and proportions",
    difficulty: "E",
    prompt:
      "A recipe uses 3 cups of flour to make 8 servings. At this rate, how many cups of flour are needed to make 20 servings?",
    choices: [
      { label: "A", text: "6" },
      { label: "B", text: "7.5" },
      { label: "C", text: "8.5" },
      { label: "D", text: "15" },
    ],
    correct: "B",
    rationale: "Set up 3/8 = c/20, so c = 60/8 = 7.5 cups.",
  },
  {
    id: "m1-06",
    type: "mc",
    domain: "Geometry and Trigonometry",
    skill: "Lines, angles, and triangles",
    difficulty: "E",
    prompt:
      "In triangle <em>ABC</em>, the measure of angle <em>A</em> is 42° and the measure of angle <em>B</em> is 63°. What is the measure of angle <em>C</em>?",
    choices: [
      { label: "A", text: "63°" },
      { label: "B", text: "75°" },
      { label: "C", text: "85°" },
      { label: "D", text: "105°" },
    ],
    correct: "B",
    rationale: "The angles of a triangle sum to 180°: 180 − 42 − 63 = 75°.",
  },
  {
    id: "m1-07",
    type: "mc",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: "M",
    stimulus:
      "<p><em>x</em> + <em>y</em> = 12<br /><em>x</em> − <em>y</em> = 4</p>",
    prompt:
      "The system of equations above has solution (<em>x</em>, <em>y</em>). What is the value of <em>y</em>?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "4" },
      { label: "C", text: "6" },
      { label: "D", text: "8" },
    ],
    correct: "B",
    rationale:
      "Subtracting the second equation from the first gives 2y = 8, so y = 4 (and x = 8).",
  },
  {
    id: "m1-08",
    type: "mc",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: "M",
    prompt:
      "Which expression is equivalent to (<em>x</em> + 3)(<em>x</em> − 5)?",
    choices: [
      { label: "A", text: "x² − 15" },
      { label: "B", text: "x² − 2x − 15" },
      { label: "C", text: "x² + 2x − 15" },
      { label: "D", text: "x² − 8x − 15" },
    ],
    correct: "B",
    rationale:
      "Expand: x² − 5x + 3x − 15 = x² − 2x − 15. Choice C uses the wrong sign on the middle term.",
  },
  {
    id: "m1-09",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Mean and measures of center",
    difficulty: "M",
    prompt:
      "The mean of a list of 5 numbers is 14. What is the sum of the 5 numbers?",
    choices: [
      { label: "A", text: "2.8" },
      { label: "B", text: "19" },
      { label: "C", text: "70" },
      { label: "D", text: "84" },
    ],
    correct: "C",
    rationale: "Sum = mean × count = 14 × 5 = 70.",
  },
  {
    id: "m1-10",
    type: "mc",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: "M",
    prompt:
      "A bacterial culture starts with 400 cells and doubles every 6 hours. Which function gives the number of cells <em>P</em>(<em>t</em>) after <em>t</em> hours?",
    choices: [
      { label: "A", text: "P(t) = 400 + 2t" },
      { label: "B", text: "P(t) = 400 · 2^(6t)" },
      { label: "C", text: "P(t) = 400 · 2^(t/6)" },
      { label: "D", text: "P(t) = 400 · 6^(t/2)" },
    ],
    correct: "C",
    rationale:
      "The number of doublings after t hours is t/6, so P(t) = 400 · 2^(t/6). Choice B doubles every 1/6 hour instead.",
  },
  {
    id: "m1-11",
    type: "mc",
    domain: "Geometry and Trigonometry",
    skill: "Circles",
    difficulty: "M",
    prompt:
      "A circle has a circumference of 12π. What is the area of the circle?",
    choices: [
      { label: "A", text: "6π" },
      { label: "B", text: "24π" },
      { label: "C", text: "36π" },
      { label: "D", text: "144π" },
    ],
    correct: "C",
    rationale:
      "From C = 2πr, 12π = 2πr gives r = 6. Then A = πr² = 36π.",
  },
  {
    id: "m1-12",
    type: "mc",
    domain: "Algebra",
    skill: "Linear inequalities",
    difficulty: "M",
    prompt:
      "A delivery van weighs 3,200 pounds when empty and carries boxes weighing 45 pounds each. The loaded van must weigh no more than 5,000 pounds. If <em>b</em> is the number of boxes, which inequality represents this situation?",
    choices: [
      { label: "A", text: "45b ≥ 5,000 − 3,200" },
      { label: "B", text: "3,200 + 45b ≤ 5,000" },
      { label: "C", text: "3,200b + 45 ≤ 5,000" },
      { label: "D", text: "3,200 − 45b ≤ 5,000" },
    ],
    correct: "B",
    rationale:
      "Total weight is the empty weight plus 45 pounds per box, and it must not exceed 5,000 pounds.",
  },
  {
    id: "m1-13",
    type: "mc",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: "M",
    prompt:
      "What is the sum of the solutions to <em>x</em>² − 6<em>x</em> + 8 = 0?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "4" },
      { label: "C", text: "6" },
      { label: "D", text: "8" },
    ],
    correct: "C",
    rationale:
      "The equation factors as (x − 2)(x − 4) = 0, so the solutions are 2 and 4 and their sum is 6. (Equivalently, the sum of the roots is −b/a = 6.)",
  },
  {
    id: "m1-14",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Rates and unit conversion",
    difficulty: "M",
    prompt:
      "A train travels 180 miles in 3 hours. Traveling at the same constant rate, how many miles will it travel in 5 hours?",
    choices: [
      { label: "A", text: "240" },
      { label: "B", text: "270" },
      { label: "C", text: "300" },
      { label: "D", text: "540" },
    ],
    correct: "C",
    rationale: "The rate is 180 / 3 = 60 miles per hour, and 60 × 5 = 300 miles.",
  },
  {
    id: "m1-15",
    type: "mc",
    domain: "Advanced Math",
    skill: "Nonlinear functions",
    difficulty: "H",
    prompt:
      "The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>x</em>² − 4<em>x</em>. If <em>f</em>(<em>a</em>) = 0 and <em>a</em> ≠ 0, what is the value of <em>a</em>?",
    choices: [
      { label: "A", text: "−4" },
      { label: "B", text: "2" },
      { label: "C", text: "4" },
      { label: "D", text: "16" },
    ],
    correct: "C",
    rationale:
      "x² − 4x = x(x − 4) = 0 gives x = 0 or x = 4. Since a ≠ 0, a = 4.",
  },
  {
    id: "m1-16",
    type: "mc",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles and trigonometry",
    difficulty: "H",
    prompt:
      "In right triangle <em>ABC</em>, the right angle is at <em>C</em>. If sin(<em>A</em>) = 0.6, what is the value of cos(<em>B</em>)?",
    choices: [
      { label: "A", text: "0.4" },
      { label: "B", text: "0.6" },
      { label: "C", text: "0.8" },
      { label: "D", text: "1.25" },
    ],
    correct: "B",
    rationale:
      "Angles A and B are complementary, and the sine of an angle equals the cosine of its complement. So cos(B) = sin(A) = 0.6.",
  },
  {
    id: "m1-17",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Two-way tables and probability",
    difficulty: "H",
    stimulus:
      "<figure><figcaption><strong>Students Enrolled in an Elective, by Grade</strong></figcaption><table><thead><tr><th></th><th>Ceramics</th><th>Robotics</th><th>Total</th></tr></thead><tbody><tr><td>Grade 11</td><td>24</td><td>36</td><td>60</td></tr><tr><td>Grade 12</td><td>18</td><td>22</td><td>40</td></tr><tr><td>Total</td><td>42</td><td>58</td><td>100</td></tr></tbody></table></figure>",
    prompt:
      "If one of the 100 students is selected at random, what is the probability that the student is in grade 12, given that the student is enrolled in Robotics?",
    choices: [
      { label: "A", text: "22/100" },
      { label: "B", text: "22/40" },
      { label: "C", text: "22/58" },
      { label: "D", text: "58/100" },
    ],
    correct: "C",
    rationale:
      "The condition restricts the sample to the 58 Robotics students, 22 of whom are in grade 12, so the probability is 22/58.",
  },
  {
    id: "m1-18",
    type: "spr",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: "M",
    prompt:
      "If 5<em>x</em> + 3 = 2<em>x</em> + 18, what is the value of <em>x</em>?",
    correct: "5",
    rationale: "Subtract 2x: 3x + 3 = 18. Subtract 3: 3x = 15. So x = 5.",
  },
  {
    id: "m1-19",
    type: "spr",
    domain: "Geometry and Trigonometry",
    skill: "Volume",
    difficulty: "M",
    prompt:
      "A right circular cylinder has a radius of 3 and a height of 10. If the volume of the cylinder is <em>k</em>π, what is the value of <em>k</em>?",
    correct: "90",
    rationale: "V = πr²h = π(3²)(10) = 90π, so k = 90.",
  },
  {
    id: "m1-20",
    type: "spr",
    domain: "Problem-Solving and Data Analysis",
    skill: "Percentages",
    difficulty: "M",
    prompt:
      "The price of a bicycle increased from $40 to $52. What was the percent increase in the price? (Enter your answer as a number without the percent sign.)",
    correct: "30",
    rationale:
      "The increase is 52 − 40 = 12, and 12 / 40 = 0.30, which is a 30% increase.",
  },
  {
    id: "m1-21",
    type: "spr",
    domain: "Advanced Math",
    skill: "Quadratic equations",
    difficulty: "H",
    prompt:
      "What is the greater of the two solutions to <em>x</em>² − 11<em>x</em> + 30 = 0?",
    correct: "6",
    rationale:
      "The equation factors as (x − 5)(x − 6) = 0, so the solutions are 5 and 6. The greater is 6.",
  },
  {
    id: "m1-22",
    type: "spr",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: "H",
    stimulus: "<p>3<em>x</em> + 2<em>y</em> = 24<br /><em>x</em> = 2<em>y</em></p>",
    prompt:
      "The system of equations above has solution (<em>x</em>, <em>y</em>). What is the value of <em>x</em> + <em>y</em>?",
    correct: "9",
    rationale:
      "Substituting x = 2y gives 3(2y) + 2y = 24, so 8y = 24 and y = 3. Then x = 6 and x + y = 9.",
  },
];
