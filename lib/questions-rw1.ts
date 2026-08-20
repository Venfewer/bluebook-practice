import type { Question } from "./types";

/**
 * Reading and Writing — Module 1 (27 questions, 32 minutes).
 * Ordered the way the digital SAT orders a module: Craft and Structure →
 * Information and Ideas → Standard English Conventions → Expression of Ideas.
 *
 * These are original items written to the digital SAT specification. They are
 * not reproductions of College Board test material.
 */
export const RW_MODULE_1: Question[] = [
  {
    id: "rw1-01",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "E",
    stimulus:
      "<p>When the marine biologist Rachel Carson published <em>Under the Sea-Wind</em> in 1941, almost no one read it. Yet Carson never treated the book as a failure. She continued to refine the approach it introduced — patient, novelistic description of animal lives — and two decades later that same approach made <em>Silent Spring</em> impossible to ignore.</p>",
    prompt:
      "As used in the text, what does the word <u>refine</u> most nearly mean?",
    choices: [
      { label: "A", text: "Purify" },
      { label: "B", text: "Improve" },
      { label: "C", text: "Abandon" },
      { label: "D", text: "Advertise" },
    ],
    correct: "B",
    rationale:
      "Carson kept working on her method until it succeeded, so \"refine\" means to make better. \"Purify\" is a literal sense of the word that doesn't fit a writing method; \"abandon\" contradicts \"continued\"; nothing suggests advertising.",
  },
  {
    id: "rw1-02",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "E",
    stimulus:
      "<p>Archaeologist Ana Roos was skeptical of the claim that the settlement had been abandoned suddenly. The pottery she excavated was stacked neatly rather than shattered, the doorways had been deliberately sealed, and stores of grain had been removed. Together, these details ______ the idea of a hurried flight and suggest instead a planned departure.</p>",
    prompt:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      { label: "A", text: "undermine" },
      { label: "B", text: "confirm" },
      { label: "C", text: "exaggerate" },
      { label: "D", text: "restate" },
    ],
    correct: "A",
    rationale:
      "The evidence points to a planned departure \"instead\" of a hurried flight, so the details weaken the sudden-abandonment claim. \"Confirm\" reverses the logic; \"exaggerate\" and \"restate\" don't fit the contrast signaled by \"instead.\"",
  },
  {
    id: "rw1-03",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "M",
    stimulus:
      "<p>In her studies of octopus cognition, biologist Jennifer Mather resists tidy conclusions. An octopus that opens a jar may be reasoning about the lid, she notes, or it may simply be applying an all-purpose pulling behavior that happens to work. Mather's reluctance to settle the question is not evasion but ______: the available evidence genuinely supports more than one reading.</p>",
    prompt:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      { label: "A", text: "indifference" },
      { label: "B", text: "rigor" },
      { label: "C", text: "eloquence" },
      { label: "D", text: "nostalgia" },
    ],
    correct: "B",
    rationale:
      "The colon explains that the evidence really is ambiguous, so refusing to choose is careful scientific practice — rigor. \"Indifference\" is close to the \"evasion\" the text rejects; eloquence and nostalgia are unrelated to weighing evidence.",
  },
  {
    id: "rw1-04",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "H",
    stimulus:
      "<p>Critics once dismissed the quilts made by the women of Gee's Bend, Alabama, as folk curiosities. That judgment now looks ______: the quilts' offset blocks and improvised rhythms anticipate by decades the compositional strategies that the same critics would celebrate in postwar abstract painting.</p>",
    prompt:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      { label: "A", text: "shortsighted" },
      { label: "B", text: "generous" },
      { label: "C", text: "conventional" },
      { label: "D", text: "tentative" },
    ],
    correct: "A",
    rationale:
      "The quilts turned out to anticipate work the critics later praised, so the earlier dismissal failed to see what was in front of it. \"Generous\" is the opposite of a dismissal; \"conventional\" and \"tentative\" don't capture the error the colon describes.",
  },
  {
    id: "rw1-05",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Text Structure and Purpose",
    difficulty: "M",
    stimulus:
      "<p>The following text is adapted from Charlotte Perkins Gilman's 1892 short story \"The Yellow Wallpaper.\" The narrator has been confined to an upstairs room by her physician husband.</p><p>It is the strangest yellow, that wall-paper! It makes me think of all the yellow things I ever saw — not beautiful ones like buttercups, but old foul, bad yellow things. But there is something else about that paper — the smell! I noticed it the moment we came into the room, but with so much air and sun it was not bad. Now we have had a week of fog and rain, and whether the windows are open or not, the smell is here.</p>",
    prompt: "What is the main purpose of the text?",
    choices: [
      {
        label: "A",
        text: "To explain why the narrator has chosen to redecorate the room",
      },
      {
        label: "B",
        text: "To show the narrator's growing preoccupation with a single feature of her surroundings",
      },
      {
        label: "C",
        text: "To contrast the narrator's taste in color with her husband's",
      },
      {
        label: "D",
        text: "To describe a change in the weather that has improved the narrator's health",
      },
    ],
    correct: "B",
    rationale:
      "The passage moves from the wallpaper's color to its smell, each detail pulling the narrator further in — an intensifying fixation. Redecorating, the husband's taste, and improved health are never mentioned.",
  },
  {
    id: "rw1-06",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Text Structure and Purpose",
    difficulty: "H",
    stimulus:
      "<p>Economists have long modeled commuting as a cost that workers accept in exchange for cheaper housing. <span style=\"text-decoration:underline\">A 2019 survey of 11,000 commuters complicates that account.</span> Asked to name their ideal one-way commute, respondents overwhelmingly rejected zero minutes; the median preference was sixteen minutes. Time spent neither at work nor at home, the researchers argue, may be doing something for commuters that the standard model cannot price.</p>",
    prompt:
      "Which choice best describes the function of the underlined sentence in the text as a whole?",
    choices: [
      {
        label: "A",
        text: "It concedes a limitation of the survey that the rest of the text goes on to address.",
      },
      {
        label: "B",
        text: "It signals a turn from an established framework to evidence that the framework fails to explain.",
      },
      {
        label: "C",
        text: "It offers a specific example of the economic model described in the previous sentence.",
      },
      {
        label: "D",
        text: "It restates the claim made in the previous sentence in more quantitative terms.",
      },
    ],
    correct: "B",
    rationale:
      "The sentence pivots from the standard model to survey data that model can't account for, which the final sentence makes explicit. It doesn't concede a flaw in the survey, illustrate the model, or restate it.",
  },
  {
    id: "rw1-07",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Cross-Text Connections",
    difficulty: "H",
    stimulus:
      "<p><strong>Text 1</strong></p><p>Urban rewilding projects — letting mowed parkland grow into meadow — are often justified on biodiversity grounds. The gains are real but modest. A city meadow is a small, isolated patch surrounded by roads, and isolated patches lose species over time no matter how they are managed. The strongest case for rewilding is aesthetic and civic, not ecological.</p><p><strong>Text 2</strong></p><p>Ecologist Marta Belo's five-year study of forty rewilded lots found that patch size predicted very little; what predicted insect richness was distance to the nearest other unmowed patch. Lots within 300 meters of another patch held nearly twice the species of equally sized lots that stood alone. Isolation, in other words, is not a fixed property of a city lot — it is a design choice.</p>",
    prompt:
      "Based on the texts, how would Belo (Text 2) most likely respond to the claim in Text 1 about isolated patches?",
    choices: [
      {
        label: "A",
        text: "By agreeing that isolation limits biodiversity but arguing that cities can reduce isolation by siting patches near one another",
      },
      {
        label: "B",
        text: "By arguing that the aesthetic benefits of rewilding outweigh its ecological shortcomings",
      },
      {
        label: "C",
        text: "By pointing out that larger patches consistently support more species than smaller ones do",
      },
      {
        label: "D",
        text: "By conceding that biodiversity gains from rewilding have been overstated in the research literature",
      },
    ],
    correct: "A",
    rationale:
      "Belo's data confirm that isolation matters but show it is a matter of where lots are placed, not an unavoidable fact — directly answering Text 1's \"no matter how they are managed.\" Choice C contradicts her finding that patch size predicted little.",
  },
  {
    id: "rw1-08",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Central Ideas and Details",
    difficulty: "E",
    stimulus:
      "<p>The Antikythera mechanism, recovered from a Roman-era shipwreck in 1901, spent decades in a museum drawer labeled simply as corroded bronze. Only when X-ray imaging revealed more than thirty interlocking gears did its function become clear: it is an analog computer that modeled the motions of the sun, moon, and planets. Nothing of comparable mechanical complexity is known from the next fourteen centuries.</p>",
    prompt: "Which choice best states the main idea of the text?",
    choices: [
      {
        label: "A",
        text: "Museum cataloguing practices in the early twentieth century were unreliable.",
      },
      {
        label: "B",
        text: "An overlooked artifact proved, once imaged, to be an astronomical device far ahead of its time.",
      },
      {
        label: "C",
        text: "Roman shipwrecks are the most productive sites for recovering ancient technology.",
      },
      {
        label: "D",
        text: "X-ray imaging has become the standard tool for studying corroded bronze objects.",
      },
    ],
    correct: "B",
    rationale:
      "The text traces the mechanism from neglect to recognition as an astronomical computer with no equal for 1,400 years. The other choices seize on details (cataloguing, shipwrecks, X-rays) that serve the main point rather than being it.",
  },
  {
    id: "rw1-09",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Central Ideas and Details",
    difficulty: "M",
    stimulus:
      "<p>The following text is adapted from Zora Neale Hurston's 1937 novel <em>Their Eyes Were Watching God</em>.</p><p>Ships at a distance have every man's wish on board. For some they come in with the tide. For others they sail forever on the horizon, never out of sight, never landing until the Watcher turns his eyes away in resignation, his dreams mocked to death by Time. That is the life of men.</p><p>Now, women forget all those things they don't want to remember, and remember everything they don't want to forget. The dream is the truth. Then they act and do things accordingly.</p>",
    prompt:
      "Based on the text, what is the difference the narrator draws between men and women?",
    choices: [
      {
        label: "A",
        text: "Men achieve their ambitions more often than women do.",
      },
      {
        label: "B",
        text: "Men wait passively on what time may bring, while women treat the dream itself as a basis for action.",
      },
      {
        label: "C",
        text: "Men are more attentive observers of the natural world than women are.",
      },
      {
        label: "D",
        text: "Women are more likely than men to abandon dreams that go unfulfilled.",
      },
    ],
    correct: "B",
    rationale:
      "Men are \"Watchers\" whose dreams are mocked by Time; women make the dream \"the truth\" and \"act and do things accordingly.\" The contrast is waiting versus acting, not success rates, observation, or abandonment.",
  },
  {
    id: "rw1-10",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Textual)",
    difficulty: "M",
    stimulus:
      "<p>Bowerbirds build elaborate stick structures and decorate them with colored objects. Biologist Laura Kelley proposed that the arrangement is not merely decorative: males may place small objects near the bower entrance and larger ones farther away, creating a forced-perspective illusion that makes the display court appear more uniform to a female standing at the entrance. To test whether the effect is deliberate, Kelley needed to show that males restore the arrangement when it is disturbed.</p>",
    prompt:
      "Which finding, if true, would most directly support Kelley's hypothesis?",
    choices: [
      {
        label: "A",
        text: "Bowers built by older males contain a greater number of decorative objects than bowers built by younger males.",
      },
      {
        label: "B",
        text: "When researchers reversed the size gradient of objects on a court, males rearranged the objects to their original gradient within three days.",
      },
      {
        label: "C",
        text: "Females visit an average of eight bowers before selecting a mate.",
      },
      {
        label: "D",
        text: "Bowerbirds preferentially collect objects that are blue rather than objects of other colors.",
      },
    ],
    correct: "B",
    rationale:
      "The text says Kelley needed evidence that males restore a disturbed arrangement; choice B is exactly that experiment and result. The other findings concern age, female search behavior, and color preference, none of which speak to deliberate size gradients.",
  },
  {
    id: "rw1-11",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Textual)",
    difficulty: "H",
    stimulus:
      "<p>In <em>The Souls of Black Folk</em> (1903), W. E. B. Du Bois argues that Black Americans experience a \"double-consciousness\" — a sense of always seeing oneself through the eyes of a contemptuous onlooker. Scholar Imani Perry contends that Du Bois presents this doubled vision not only as a wound but also as a source of analytic power, granting a clarity about American society that is unavailable to those who see themselves through a single lens.</p>",
    prompt:
      "Which quotation from <em>The Souls of Black Folk</em> would best support Perry's contention?",
    choices: [
      {
        label: "A",
        text: "\"It is a peculiar sensation, this double-consciousness, this sense of always looking at one's self through the eyes of others.\"",
      },
      {
        label: "B",
        text: "\"The history of the American Negro is the history of this strife — this longing to attain self-conscious manhood.\"",
      },
      {
        label: "C",
        text: "\"He would not bleach his Negro soul in a flood of white Americanism, for he knows that Negro blood has a message for the world.\"",
      },
      {
        label: "D",
        text: "\"The Negro is a sort of seventh son, born with a veil, and gifted with second-sight in this American world.\"",
      },
    ],
    correct: "D",
    rationale:
      "Perry's claim is that the doubled vision confers insight; \"gifted with second-sight\" names that gift directly. Choice A describes the sensation without the analytic advantage, B emphasizes strife, and C concerns cultural contribution rather than clarity of vision.",
  },
  {
    id: "rw1-12",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Quantitative)",
    difficulty: "M",
    stimulus:
      "<figure><figcaption><strong>Germination Rate of <em>Silene stenophylla</em> Seeds after Cold Storage</strong></figcaption><table><thead><tr><th>Storage duration (months)</th><th>Stored at −4°C</th><th>Stored at 4°C</th></tr></thead><tbody><tr><td>6</td><td>91%</td><td>88%</td></tr><tr><td>12</td><td>89%</td><td>71%</td></tr><tr><td>24</td><td>86%</td><td>42%</td></tr><tr><td>36</td><td>84%</td><td>19%</td></tr></tbody></table></figure><p>A seed bank must decide how to store wild plant seeds for long-term conservation. Storage below freezing is more expensive than refrigeration, so a researcher set out to determine whether the added cost is warranted. She concluded that it is, noting that ______</p>",
    prompt:
      "Which choice most effectively uses data from the table to complete the text?",
    choices: [
      {
        label: "A",
        text: "seeds stored at −4°C germinated at a rate above 80% at every duration tested, whereas seeds at 4°C fell below 20% by 36 months.",
      },
      {
        label: "B",
        text: "at 6 months, seeds stored at −4°C germinated at 91%, the highest rate recorded in the study.",
      },
      {
        label: "C",
        text: "germination rates declined over time for seeds held at both storage temperatures.",
      },
      {
        label: "D",
        text: "seeds stored at 4°C germinated at 71% after 12 months, a rate suitable for most conservation purposes.",
      },
    ],
    correct: "A",
    rationale:
      "To justify the extra expense she needs the gap between the two conditions to widen over time, which A reports. B uses a single point where the two are nearly equal, C is true but shows no advantage, and D argues against her conclusion.",
  },
  {
    id: "rw1-13",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Quantitative)",
    difficulty: "H",
    stimulus:
      "<figure><figcaption><strong>Share of Households Reporting Home Broadband, by Community Type</strong></figcaption><table><thead><tr><th>Year</th><th>Urban</th><th>Suburban</th><th>Rural</th></tr></thead><tbody><tr><td>2015</td><td>73%</td><td>77%</td><td>55%</td></tr><tr><td>2019</td><td>75%</td><td>79%</td><td>63%</td></tr><tr><td>2023</td><td>77%</td><td>82%</td><td>72%</td></tr></tbody></table></figure><p>A policy analyst studying rural broadband subsidies argues that the programs launched in the mid-2010s have measurably narrowed, though not closed, the gap between rural and suburban households. To support this claim, she cites the table, observing that ______</p>",
    prompt:
      "Which choice most effectively uses data from the table to complete the text?",
    choices: [
      {
        label: "A",
        text: "rural broadband adoption rose from 55% in 2015 to 72% in 2023, the largest increase of any community type.",
      },
      {
        label: "B",
        text: "the rural–suburban gap fell from 22 percentage points in 2015 to 10 percentage points in 2023 but did not reach zero.",
      },
      {
        label: "C",
        text: "suburban households reported the highest broadband adoption in each of the three years shown.",
      },
      {
        label: "D",
        text: "urban adoption increased by only 4 percentage points between 2015 and 2023.",
      },
    ],
    correct: "B",
    rationale:
      "Her claim has two parts — the gap narrowed, and it remains — and only B reports the gap itself (77−55 = 22; 82−72 = 10) and notes it persists. A shows rural growth but never mentions the gap; C and D are irrelevant to it.",
  },
  {
    id: "rw1-14",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Inferences",
    difficulty: "M",
    stimulus:
      "<p>Sea otters eat enormous quantities of sea urchins, and sea urchins graze on kelp. Along stretches of the Pacific coast where otter populations collapsed in the nineteenth century, kelp forests gave way to barren rock crowded with urchins. Where otters have since been reintroduced, kelp has returned within a decade. Kelp forests store carbon at rates comparable to those of terrestrial forests, which suggests that ______</p>",
    prompt:
      "Which choice most logically completes the text?",
    choices: [
      {
        label: "A",
        text: "sea urchins would not survive in coastal waters if otter populations were larger.",
      },
      {
        label: "B",
        text: "protecting a single predator species can have consequences for carbon storage.",
      },
      {
        label: "C",
        text: "kelp forests are more effective at storing carbon than terrestrial forests are.",
      },
      {
        label: "D",
        text: "urchin populations along the Pacific coast have remained stable since the nineteenth century.",
      },
    ],
    correct: "B",
    rationale:
      "Otters → fewer urchins → more kelp → more carbon stored, so otter protection reaches all the way to carbon. A overstates (urchins persist alongside otters), C reverses \"comparable to,\" and D contradicts the described urchin boom.",
  },
  {
    id: "rw1-15",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Inferences",
    difficulty: "M",
    stimulus:
      "<p>Composer Florence Price completed her Symphony in E Minor in 1932, and the Chicago Symphony Orchestra performed it the following year — the first work by a Black woman played by a major American orchestra. After Price's death in 1953, the symphony went unperformed for more than sixty years. Then, in 2009, renovators of an abandoned house outside St. Anne, Illinois, found boxes of her manuscripts. Recordings and performances followed quickly. It is reasonable to conclude that the long silence surrounding Price's music was ______</p>",
    prompt: "Which choice most logically completes the text?",
    choices: [
      {
        label: "A",
        text: "the result of a judgment by critics that the symphony was inferior to her later works.",
      },
      {
        label: "B",
        text: "due at least in part to the physical inaccessibility of her scores rather than to a lack of interest in her music.",
      },
      {
        label: "C",
        text: "typical of the reception of American symphonies composed in the 1930s.",
      },
      {
        label: "D",
        text: "a consequence of the Chicago Symphony Orchestra's decision not to record the 1933 performance.",
      },
    ],
    correct: "B",
    rationale:
      "Performances resumed \"quickly\" once the manuscripts turned up, so the scores' unavailability best explains the gap. Nothing in the text mentions critical judgments, other 1930s symphonies, or a recording decision.",
  },
  {
    id: "rw1-16",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Inferences",
    difficulty: "H",
    stimulus:
      "<p>Certain desert plants open their stomata — the pores through which gases pass — only at night, fixing carbon dioxide into an acid that is stored until daylight, when it is released and used in photosynthesis. This pathway, called CAM, drastically reduces water loss, since the air is cooler and more humid at night. CAM plants nevertheless grow more slowly than plants using the ordinary pathway. This is because the quantity of acid a plant can store overnight is limited by the volume of its cells, which means that ______</p>",
    prompt: "Which choice most logically completes the text?",
    choices: [
      {
        label: "A",
        text: "CAM plants lose more water during the day than plants using the ordinary pathway do.",
      },
      {
        label: "B",
        text: "the amount of carbon dioxide available to a CAM plant for daytime photosynthesis is capped regardless of how much sunlight it receives.",
      },
      {
        label: "C",
        text: "CAM plants cannot photosynthesize at all during periods of extended drought.",
      },
      {
        label: "D",
        text: "CAM plants have evolved larger cells than plants using the ordinary pathway have.",
      },
    ],
    correct: "B",
    rationale:
      "If storage capacity limits the acid, it limits the CO₂ released the next day — so extra sunlight can't be converted into extra growth, explaining the slower rate. A contradicts the water-saving point, and C and D go beyond anything stated.",
  },
  {
    id: "rw1-17",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "E",
    stimulus:
      "<p>The Voyager 1 probe left the solar system's heliosphere in 2012, ______ still transmits data to Earth from more than 15 billion miles away.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "it" },
      { label: "B", text: "and it" },
      { label: "C", text: "it is that" },
      { label: "D", text: "which it" },
    ],
    correct: "B",
    rationale:
      "\"And\" plus a comma joins two independent clauses correctly. Choice A creates a comma splice; C and D are ungrammatical.",
  },
  {
    id: "rw1-18",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "M",
    stimulus:
      "<p>Linguist Kim Ana Sun studies how bilingual children choose which language to speak with each ______ patterns emerge as early as age two.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "parent, remarkably consistent" },
      { label: "B", text: "parent remarkably consistent" },
      { label: "C", text: "parent; remarkably consistent" },
      { label: "D", text: "parent: remarkably, consistent" },
    ],
    correct: "C",
    rationale:
      "Two independent clauses need a semicolon (or a period). A produces a comma splice, B fuses the clauses, and D misplaces a comma between an adverb and the adjective it modifies.",
  },
  {
    id: "rw1-19",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "M",
    stimulus:
      "<p>The Inca kept records not in writing but in knotted cords called ______ the color of a cord, the type of knot, and the knot's position on the cord all carried meaning.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "quipus," },
      { label: "B", text: "quipus:" },
      { label: "C", text: "quipus and" },
      { label: "D", text: "quipus, and, " },
    ],
    correct: "B",
    rationale:
      "A colon after a complete clause properly introduces the explanation of how quipus encoded meaning. A is a comma splice, C joins two independent clauses without a comma, and D adds a stray comma after \"and.\"",
  },
  {
    id: "rw1-20",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "H",
    stimulus:
      "<p>Mathematician Katherine Johnson, ______ hand-checked the electronic calculations for John Glenn's 1962 orbital flight, worked at NASA's Langley Research Center for thirty-three years.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "who" },
      { label: "B", text: "and she" },
      { label: "C", text: "she" },
      { label: "D", text: "whom" },
    ],
    correct: "A",
    rationale:
      "The commas set off a nonrestrictive relative clause, which needs the subject pronoun \"who\" before the verb \"hand-checked.\" \"Whom\" is an object form; B and C leave the sentence without a workable main clause.",
  },
  {
    id: "rw1-21",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "E",
    stimulus:
      "<p>A colony of leafcutter ants, whose members may number in the millions, ______ fungus underground on a mulch of chewed leaves.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "cultivate" },
      { label: "B", text: "cultivates" },
      { label: "C", text: "have cultivated" },
      { label: "D", text: "are cultivating" },
    ],
    correct: "B",
    rationale:
      "The subject is the singular \"colony\" — \"whose members may number in the millions\" is an interrupting clause — so the verb must be singular.",
  },
  {
    id: "rw1-22",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "M",
    stimulus:
      "<p>By the time researchers arrived at the site in 1974, looters ______ most of the burial chamber's contents.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "remove" },
      { label: "B", text: "are removing" },
      { label: "C", text: "had removed" },
      { label: "D", text: "will have removed" },
    ],
    correct: "C",
    rationale:
      "The looting was finished before the 1974 arrival, so the past perfect is required. The present, present progressive, and future perfect all conflict with the past-time frame.",
  },
  {
    id: "rw1-23",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "M",
    stimulus:
      "<p>The novelist Yiyun Li has said that she reads Chekhov's ______ every winter, returning to the same few pages until she can hear the rhythm of the sentences.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "storys" },
      { label: "B", text: "story's" },
      { label: "C", text: "stories'" },
      { label: "D", text: "stories" },
    ],
    correct: "D",
    rationale:
      "The sentence needs the plural object of \"reads\" — she reads the stories. No possessive is called for, and \"storys\" is not a word.",
  },
  {
    id: "rw1-24",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "H",
    stimulus:
      "<p>______ over an eight-year period, the tunnel beneath the Alps required engineers to bore through rock that reached temperatures of 45°C.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "Excavating" },
      { label: "B", text: "Having excavated" },
      { label: "C", text: "Excavated" },
      { label: "D", text: "To excavate" },
    ],
    correct: "C",
    rationale:
      "The modifier attaches to \"the tunnel,\" which was excavated rather than doing the excavating, so the past participle is correct. A, B, and D all create dangling modifiers by implying the tunnel performed the action.",
  },
  {
    id: "rw1-25",
    type: "mc",
    domain: "Expression of Ideas",
    skill: "Transitions",
    difficulty: "E",
    stimulus:
      "<p>Most of the world's vanilla comes from Madagascar, where the orchid that produces it must be pollinated by hand, flower by flower. ______ a single cyclone or a bad season can send global prices soaring.</p>",
    prompt:
      "Which choice completes the text with the most logical transition?",
    choices: [
      { label: "A", text: "Nevertheless," },
      { label: "B", text: "For instance," },
      { label: "C", text: "As a result," },
      { label: "D", text: "In contrast," },
    ],
    correct: "C",
    rationale:
      "Concentrating a labor-intensive crop in one country causes price volatility, so a cause-and-effect transition fits. The other options signal contrast or exemplification, neither of which describes the relationship.",
  },
  {
    id: "rw1-26",
    type: "mc",
    domain: "Expression of Ideas",
    skill: "Transitions",
    difficulty: "M",
    stimulus:
      "<p>Conventional wisdom holds that adding lanes to a congested highway reduces travel times. Studies of dozens of American cities have found that new capacity fills almost immediately as drivers who had avoided the route return to it. ______ the expanded highway carries more cars at the same crawling speed as before.</p>",
    prompt:
      "Which choice completes the text with the most logical transition?",
    choices: [
      { label: "A", text: "In other words," },
      { label: "B", text: "Regardless," },
      { label: "C", text: "Similarly," },
      { label: "D", text: "Earlier," },
    ],
    correct: "A",
    rationale:
      "The final sentence restates the induced-demand finding in plainer terms, which \"in other words\" signals. \"Regardless\" and \"similarly\" misstate the relationship, and \"earlier\" imposes a chronology the text doesn't have.",
  },
  {
    id: "rw1-27",
    type: "mc",
    domain: "Expression of Ideas",
    skill: "Rhetorical Synthesis",
    difficulty: "M",
    stimulus:
      "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Mycorrhizal fungi form networks between the roots of trees.</li><li>Through these networks, trees exchange carbon, nitrogen, and water.</li><li>Ecologist Suzanne Simard demonstrated that Douglas firs transfer carbon to shaded paper birches.</li><li>The transfer reverses direction seasonally, with birches supplying firs in summer.</li><li>Some ecologists caution that the amounts transferred are small relative to a tree's total budget.</li></ul>",
    prompt:
      "The student wants to emphasize the reciprocal nature of the exchange Simard documented. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    choices: [
      {
        label: "A",
        text: "Mycorrhizal fungi form networks between the roots of trees, allowing carbon, nitrogen, and water to move between them.",
      },
      {
        label: "B",
        text: "Simard demonstrated that Douglas firs transfer carbon to shaded paper birches, though some ecologists caution that the amounts are small.",
      },
      {
        label: "C",
        text: "Simard found that Douglas firs send carbon to shaded paper birches — and that in summer the birches send it back.",
      },
      {
        label: "D",
        text: "Because mycorrhizal networks connect their roots, Douglas firs and paper birches are able to exchange nitrogen and water as well as carbon.",
      },
    ],
    correct: "C",
    rationale:
      "Only C captures the exchange going both ways, which is what \"reciprocal\" requires. A and D describe the network generally, and B pairs the one-way transfer with a caveat instead of the return flow.",
  },
];
