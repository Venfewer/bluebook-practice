import type { Question } from "./types";

/**
 * Math — Module 2 (22 questions, 35 minutes).
 * Original items written to the digital SAT specification.
 */
export const MATH_MODULE_2: Question[] = [
  {
    id: "m2-01",
    type: "mc",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: "E",
    prompt: "If 2(<em>x</em> − 3) = 14, what is the value of <em>x</em>?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "7" },
      { label: "C", text: "10" },
      { label: "D", text: "17" },
    ],
    correct: "C",
    rationale: "Divide both sides by 2: x − 3 = 7. Add 3: x = 10.",
  },
  {
    id: "m2-02",
    type: "mc",
    domain: "Algebra",
    skill: "Interpreting linear models",
    difficulty: "E",
    stimulus:
      "<p>A plumber's total charge <em>C</em>, in dollars, for a job lasting <em>h</em> hours is given by <em>C</em> = 85 + 60<em>h</em>.</p>",
    prompt: "What does 85 represent in this model?",
    choices: [
      { label: "A", text: "The plumber's hourly rate, in dollars" },
      {
        label: "B",
        text: "The fixed fee, in dollars, charged regardless of the length of the job",
      },
      { label: "C", text: "The total charge, in dollars, for a 1-hour job" },
      { label: "D", text: "The number of hours in a typical job" },
    ],
    correct: "B",
    rationale:
      "85 is the constant term — the amount charged when h = 0 — so it is a fixed fee. The hourly rate is 60, and a 1-hour job costs 145.",
  },
  {
    id: "m2-03",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Mean, median, and mode",
    difficulty: "E",
    prompt:
      "What is the median of the data set 4, 9, 11, 15, 21, 22?",
    choices: [
      { label: "A", text: "11" },
      { label: "B", text: "13" },
      { label: "C", text: "13.5" },
      { label: "D", text: "15" },
    ],
    correct: "B",
    rationale:
      "With an even number of values, the median is the mean of the two middle values: (11 + 15) / 2 = 13.",
  },
  {
    id: "m2-04",
    type: "mc",
    domain: "Advanced Math",
    skill: "Function notation",
    difficulty: "E",
    prompt:
      "The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = 2<em>x</em>² + 1. What is the value of <em>f</em>(3)?",
    choices: [
      { label: "A", text: "13" },
      { label: "B", text: "19" },
      { label: "C", text: "37" },
      { label: "D", text: "49" },
    ],
    correct: "B",
    rationale:
      "f(3) = 2(3²) + 1 = 2(9) + 1 = 19. Choice C comes from squaring after doubling.",
  },
  {
    id: "m2-05",
    type: "mc",
    domain: "Geometry and Trigonometry",
    skill: "Similar triangles",
    difficulty: "M",
    prompt:
      "Triangle <em>ABC</em> is similar to triangle <em>DEF</em>, with <em>A</em>, <em>B</em>, and <em>C</em> corresponding to <em>D</em>, <em>E</em>, and <em>F</em>, respectively. If <em>AB</em> = 6, <em>DE</em> = 9, and <em>BC</em> = 8, what is the length of <em>EF</em>?",
    choices: [
      { label: "A", text: "10" },
      { label: "B", text: "11" },
      { label: "C", text: "12" },
      { label: "D", text: "14" },
    ],
    correct: "C",
    rationale:
      "The scale factor is 9/6 = 1.5, so EF = 8 × 1.5 = 12.",
  },
  {
    id: "m2-06",
    type: "mc",
    domain: "Algebra",
    skill: "Linear equations in two variables",
    difficulty: "M",
    prompt:
      "Which equation represents the line that passes through the point (1, 4) and is parallel to the line <em>y</em> = −2<em>x</em> + 5?",
    choices: [
      { label: "A", text: "y = −2x + 6" },
      { label: "B", text: "y = −2x + 4" },
      { label: "C", text: "y = 2x + 2" },
      { label: "D", text: "y = (1/2)x + 3.5" },
    ],
    correct: "A",
    rationale:
      "Parallel lines share the slope −2. Substituting (1, 4): 4 = −2(1) + b gives b = 6.",
  },
  {
    id: "m2-07",
    type: "mc",
    domain: "Advanced Math",
    skill: "Nonlinear systems",
    difficulty: "M",
    prompt:
      "In the <em>xy</em>-plane, at how many points do the graphs of <em>y</em> = <em>x</em>² − 4 and <em>y</em> = 5 intersect?",
    choices: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "4" },
    ],
    correct: "C",
    rationale:
      "Setting x² − 4 = 5 gives x² = 9, so x = 3 or x = −3 — two intersection points.",
  },
  {
    id: "m2-08",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Models and scatterplots",
    difficulty: "M",
    stimulus:
      "<p>A researcher fits a line of best fit to a scatterplot relating the number of weekly practice hours <em>x</em> to a performance score <em>y</em>. The equation of the line is <em>ŷ</em> = 3.2<em>x</em> + 14.</p>",
    prompt:
      "Based on the model, what performance score is predicted for a participant who practices 10 hours per week?",
    choices: [
      { label: "A", text: "32" },
      { label: "B", text: "46" },
      { label: "C", text: "142" },
      { label: "D", text: "174" },
    ],
    correct: "B",
    rationale: "ŷ = 3.2(10) + 14 = 32 + 14 = 46.",
  },
  {
    id: "m2-09",
    type: "mc",
    domain: "Geometry and Trigonometry",
    skill: "Right triangles",
    difficulty: "M",
    prompt:
      "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
    choices: [
      { label: "A", text: "13" },
      { label: "B", text: "15" },
      { label: "C", text: "21" },
      { label: "D", text: "225" },
    ],
    correct: "B",
    rationale:
      "9² + 12² = 81 + 144 = 225, and √225 = 15. Choice D is the square of the hypotenuse.",
  },
  {
    id: "m2-10",
    type: "mc",
    domain: "Advanced Math",
    skill: "Exponent rules",
    difficulty: "M",
    prompt:
      "Which expression is equivalent to (2<em>x</em>³)⁴, where <em>x</em> &gt; 0?",
    choices: [
      { label: "A", text: "8x⁷" },
      { label: "B", text: "8x¹²" },
      { label: "C", text: "16x⁷" },
      { label: "D", text: "16x¹²" },
    ],
    correct: "D",
    rationale:
      "Raise each factor to the fourth power: 2⁴ = 16 and (x³)⁴ = x¹². The exponents multiply rather than add.",
  },
  {
    id: "m2-11",
    type: "mc",
    domain: "Algebra",
    skill: "Systems of two linear equations",
    difficulty: "H",
    stimulus:
      "<p><em>kx</em> + 6<em>y</em> = 12<br />2<em>x</em> + 3<em>y</em> = 9</p>",
    prompt:
      "For which value of the constant <em>k</em> does the system above have no solution?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "6" },
    ],
    correct: "C",
    rationale:
      "The lines must be parallel but distinct, so k/2 = 6/3 = 2, giving k = 4. Since 12/9 ≠ 2, the lines are not identical, and there is no solution.",
  },
  {
    id: "m2-12",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Inference from sample statistics",
    difficulty: "M",
    stimulus:
      "<p>A city selected 200 residents at random from its voter registration list and asked whether they support a proposed transit levy. Of those surveyed, 46% said they support it.</p>",
    prompt: "Which conclusion is best supported by the survey?",
    choices: [
      {
        label: "A",
        text: "Exactly 46% of all registered voters in the city support the levy.",
      },
      {
        label: "B",
        text: "About 46% of the city's registered voters are likely to support the levy.",
      },
      {
        label: "C",
        text: "About 46% of all residents of the state are likely to support the levy.",
      },
      {
        label: "D",
        text: "The levy will not pass when it is put to a vote.",
      },
    ],
    correct: "B",
    rationale:
      "A random sample supports an estimate — not an exact figure — about the population it was drawn from: the city's registered voters. C generalizes beyond that population and D predicts an outcome the data can't establish.",
  },
  {
    id: "m2-13",
    type: "mc",
    domain: "Advanced Math",
    skill: "Quadratic functions",
    difficulty: "H",
    prompt:
      "The function <em>f</em> is defined by <em>f</em>(<em>x</em>) = <em>x</em>² − 8<em>x</em> + 3. What is the minimum value of <em>f</em>(<em>x</em>)?",
    choices: [
      { label: "A", text: "−13" },
      { label: "B", text: "−4" },
      { label: "C", text: "3" },
      { label: "D", text: "4" },
    ],
    correct: "A",
    rationale:
      "Completing the square gives f(x) = (x − 4)² − 13, so the vertex is (4, −13) and the minimum value is −13. Choice D is the x-coordinate of the vertex.",
  },
  {
    id: "m2-14",
    type: "mc",
    domain: "Geometry and Trigonometry",
    skill: "Special right triangles",
    difficulty: "H",
    prompt:
      "In a 30°-60°-90° triangle, the hypotenuse has length 10. What is the length of the side opposite the 60° angle?",
    choices: [
      { label: "A", text: "5" },
      { label: "B", text: "5√2" },
      { label: "C", text: "5√3" },
      { label: "D", text: "10√3" },
    ],
    correct: "C",
    rationale:
      "The sides are in the ratio 1 : √3 : 2. With hypotenuse 10, the short leg is 5 and the side opposite 60° is 5√3.",
  },
  {
    id: "m2-15",
    type: "mc",
    domain: "Advanced Math",
    skill: "Rational equations",
    difficulty: "H",
    prompt:
      "If 2<em>x</em> / (<em>x</em> − 3) = 4, what is the value of <em>x</em>?",
    choices: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "6" },
    ],
    correct: "D",
    rationale:
      "Multiply both sides by (x − 3): 2x = 4x − 12, so 2x = 12 and x = 6. (x = 3 would make the denominator zero.)",
  },
  {
    id: "m2-16",
    type: "mc",
    domain: "Advanced Math",
    skill: "Equivalent expressions",
    difficulty: "H",
    prompt:
      "If <em>a</em> + <em>b</em> = 10 and <em>a</em>² − <em>b</em>² = 40, what is the value of <em>a</em> − <em>b</em>?",
    choices: [
      { label: "A", text: "4" },
      { label: "B", text: "5" },
      { label: "C", text: "6" },
      { label: "D", text: "30" },
    ],
    correct: "A",
    rationale:
      "Since a² − b² = (a + b)(a − b), we have 40 = 10(a − b), so a − b = 4.",
  },
  {
    id: "m2-17",
    type: "mc",
    domain: "Problem-Solving and Data Analysis",
    skill: "Spread and standard deviation",
    difficulty: "H",
    stimulus:
      "<p>Data set A: 10, 20, 30, 40, 50<br />Data set B: 28, 29, 30, 31, 32</p>",
    prompt:
      "Which statement correctly compares the two data sets?",
    choices: [
      {
        label: "A",
        text: "The means are equal, and the standard deviation of A is greater than that of B.",
      },
      {
        label: "B",
        text: "The means are equal, and the standard deviation of B is greater than that of A.",
      },
      {
        label: "C",
        text: "The mean of A is greater than the mean of B, and the standard deviations are equal.",
      },
      {
        label: "D",
        text: "Both the means and the standard deviations are equal.",
      },
    ],
    correct: "A",
    rationale:
      "Both data sets have mean 30, but A's values are spread far from 30 while B's cluster tightly around it, so A has the greater standard deviation.",
  },
  {
    id: "m2-18",
    type: "spr",
    domain: "Algebra",
    skill: "Linear equations in one variable",
    difficulty: "M",
    prompt:
      "If 7(<em>x</em> − 2) = 3<em>x</em> + 6, what is the value of <em>x</em>?",
    correct: "5",
    rationale:
      "Distribute: 7x − 14 = 3x + 6. Then 4x = 20, so x = 5.",
  },
  {
    id: "m2-19",
    type: "spr",
    domain: "Geometry and Trigonometry",
    skill: "Circles in the coordinate plane",
    difficulty: "H",
    prompt:
      "In the <em>xy</em>-plane, the graph of <em>x</em>² + <em>y</em>² − 6<em>x</em> + 8<em>y</em> = 0 is a circle. What is the radius of the circle?",
    correct: "5",
    rationale:
      "Completing the square: (x − 3)² + (y + 4)² = 9 + 16 = 25, so the radius is √25 = 5.",
  },
  {
    id: "m2-20",
    type: "spr",
    domain: "Advanced Math",
    skill: "Exponential functions",
    difficulty: "M",
    prompt:
      "The function <em>g</em> is defined by <em>g</em>(<em>x</em>) = 3<sup><em>x</em></sup>. What is the value of <em>g</em>(4) / <em>g</em>(2)?",
    correct: "9",
    rationale: "g(4)/g(2) = 3⁴ / 3² = 3² = 9.",
  },
  {
    id: "m2-21",
    type: "spr",
    domain: "Geometry and Trigonometry",
    skill: "Area and perimeter",
    difficulty: "H",
    prompt:
      "A rectangle has a perimeter of 42 centimeters. Its length is 3 centimeters more than twice its width. What is the area of the rectangle, in square centimeters?",
    correct: "90",
    rationale:
      "With width w, length is 2w + 3, so 2(w + 2w + 3) = 42 gives 6w + 6 = 42 and w = 6. The length is 15, and the area is 6 × 15 = 90.",
  },
  {
    id: "m2-22",
    type: "spr",
    domain: "Advanced Math",
    skill: "Quadratic equations and the discriminant",
    difficulty: "H",
    prompt:
      "In the equation <em>x</em>² + <em>kx</em> + 16 = 0, <em>k</em> is a positive constant and the equation has exactly one real solution. What is the value of <em>k</em>?",
    correct: "8",
    rationale:
      "Exactly one solution means the discriminant is zero: k² − 4(1)(16) = 0, so k² = 64 and k = 8 (taking the positive value).",
  },
];
