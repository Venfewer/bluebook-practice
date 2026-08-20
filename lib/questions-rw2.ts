import type { Question } from "./types";

/**
 * Reading and Writing — Module 2 (27 questions, 32 minutes).
 * Original items written to the digital SAT specification.
 */
export const RW_MODULE_2: Question[] = [
  {
    id: "rw2-01",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "E",
    stimulus:
      "<p>For most of the twentieth century, the Sahara was treated as a barrier that separated the Mediterranean world from sub-Saharan Africa. Historian Ghislaine Lydon rejects this view. Caravan records, she shows, describe a desert crossed constantly by traders, scholars, and pilgrims — less a wall than a busy corridor.</p>",
    prompt:
      "As used in the text, what does the word <u>rejects</u> most nearly mean?",
    choices: [
      { label: "A", text: "Discards physically" },
      { label: "B", text: "Disputes" },
      { label: "C", text: "Ignores" },
      { label: "D", text: "Postpones" },
    ],
    correct: "B",
    rationale:
      "Lydon argues against the barrier view using evidence, so she disputes it. She doesn't ignore it — she answers it — and the other senses of \"reject\" don't apply to an idea.",
  },
  {
    id: "rw2-02",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "M",
    stimulus:
      "<p>Chef Edna Lewis wrote about Southern cooking with an exactness that surprised readers used to vague folk recipes. She specified the week in spring when wild greens should be picked, the precise moment cream turns, the shade of brown a crust should reach. Her instructions were ______, and they were meant to be followed.</p>",
    prompt:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      { label: "A", text: "meticulous" },
      { label: "B", text: "impromptu" },
      { label: "C", text: "nostalgic" },
      { label: "D", text: "abbreviated" },
    ],
    correct: "A",
    rationale:
      "The examples all show extreme attention to detail, which \"meticulous\" names. \"Impromptu\" and \"abbreviated\" contradict that exactness, and \"nostalgic\" describes tone rather than precision.",
  },
  {
    id: "rw2-03",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "M",
    stimulus:
      "<p>The physicist Lise Meitner's role in the discovery of nuclear fission was ______ for decades: although she supplied the theoretical explanation that made sense of the experimental results, the 1944 Nobel Prize in Chemistry went to her collaborator alone.</p>",
    prompt:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      { label: "A", text: "celebrated" },
      { label: "B", text: "obscured" },
      { label: "C", text: "duplicated" },
      { label: "D", text: "anticipated" },
    ],
    correct: "B",
    rationale:
      "The colon explains that her essential contribution went unrecognized by the Nobel committee, so her role was hidden from view. \"Celebrated\" is the opposite; \"duplicated\" and \"anticipated\" don't describe recognition.",
  },
  {
    id: "rw2-04",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Words in Context",
    difficulty: "H",
    stimulus:
      "<p>Literary scholars have often read Emily Dickinson's dashes as marks of hesitation. Cristanne Miller argues the opposite. In Dickinson's manuscripts the dashes fall where a conventional poet would place a period or a conjunction, holding two possible readings open at once. Far from signaling a faltering voice, Miller writes, the dash is the instrument of a poetics of ______.</p>",
    prompt:
      "Which choice completes the text with the most logical and precise word or phrase?",
    choices: [
      { label: "A", text: "concision" },
      { label: "B", text: "deliberate ambiguity" },
      { label: "C", text: "strict formality" },
      { label: "D", text: "quiet resignation" },
    ],
    correct: "B",
    rationale:
      "Miller says the dashes keep two readings open on purpose — ambiguity by design. Concision and formality address other qualities, and \"resignation\" is close to the faltering reading Miller rejects.",
  },
  {
    id: "rw2-05",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Text Structure and Purpose",
    difficulty: "M",
    stimulus:
      "<p>The following text is adapted from Kate Chopin's 1899 novel <em>The Awakening</em>.</p><p>The voice of the sea is seductive; never ceasing, whispering, clamoring, murmuring, inviting the soul to wander for a spell in abysses of solitude; to lose itself in mazes of inward contemplation.</p><p>The voice of the sea speaks to the soul. The touch of the sea is sensuous, enfolding the body in its soft, close embrace.</p>",
    prompt: "Which choice best states the main purpose of the text?",
    choices: [
      {
        label: "A",
        text: "To present the sea as a force that draws a person inward, toward solitude and self-examination",
      },
      {
        label: "B",
        text: "To warn readers about the physical dangers of swimming alone",
      },
      {
        label: "C",
        text: "To compare the sound of the sea with other sounds in the natural world",
      },
      {
        label: "D",
        text: "To explain why the protagonist has decided to leave her home",
      },
    ],
    correct: "A",
    rationale:
      "The sea \"invites the soul to wander\" into \"solitude\" and \"inward contemplation,\" and its touch enfolds the body — an inward pull. No danger, comparison, or plot decision appears in the passage.",
  },
  {
    id: "rw2-06",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Text Structure and Purpose",
    difficulty: "H",
    stimulus:
      "<p>Restoration ecologists working on degraded grassland typically sow a standard seed mix and wait. Ecologist Nash Turley's team took a different approach: they sowed identical mixes at four sites but varied the <em>order</em> in which functional groups were introduced, planting grasses first at some sites and forbs first at others. Five years on, sites that received forbs first held roughly 40 percent more plant species. The seed list, it appears, matters less than the calendar.</p>",
    prompt:
      "Which choice best describes the overall structure of the text?",
    choices: [
      {
        label: "A",
        text: "It describes a common practice, presents a study that isolated an overlooked variable, and states the study's implication.",
      },
      {
        label: "B",
        text: "It identifies a controversy among ecologists and then explains why the controversy cannot be resolved.",
      },
      {
        label: "C",
        text: "It recounts the history of grassland restoration and predicts how the field will change.",
      },
      {
        label: "D",
        text: "It criticizes a research method and proposes a more reliable alternative to it.",
      },
    ],
    correct: "A",
    rationale:
      "The text moves from standard practice → Turley's design varying planting order → the conclusion that timing outweighs seed composition. There is no unresolved controversy, no history, and no critique of methodology.",
  },
  {
    id: "rw2-07",
    type: "mc",
    domain: "Craft and Structure",
    skill: "Cross-Text Connections",
    difficulty: "H",
    stimulus:
      "<p><strong>Text 1</strong></p><p>Museums that hold antiquities acquired during the colonial era increasingly face repatriation claims. Curator Dominic Halle argues that a universal museum serves a purpose no national collection can: it places objects from many civilizations in one room, where visitors can see connections across cultures. Dispersing those collections would destroy something that took centuries to assemble.</p><p><strong>Text 2</strong></p><p>Art historian Sade Nwosu notes that the \"connections across cultures\" argument assumes visitors come to the objects rather than the reverse. Loan agreements, she points out, now move objects between continents routinely, and digital catalogues make comparison possible from anywhere. What the universal museum uniquely provides, she concludes, is not comparison but custody.</p>",
    prompt:
      "Based on the texts, Nwosu would most likely characterize Halle's defense of the universal museum as",
    choices: [
      {
        label: "A",
        text: "persuasive, because no other institution can display objects from many civilizations together.",
      },
      {
        label: "B",
        text: "outdated, because loans and digital access now supply the cross-cultural comparison he treats as exclusive to such museums.",
      },
      {
        label: "C",
        text: "incomplete, because it fails to acknowledge how the objects were originally acquired.",
      },
      {
        label: "D",
        text: "unfounded, because visitors rarely make comparisons across cultures when they visit museums.",
      },
    ],
    correct: "B",
    rationale:
      "Nwosu grants that comparison is valuable but argues loans and digital catalogues already deliver it, leaving only \"custody\" as the museum's exclusive contribution. She never claims visitors don't compare (D) and doesn't rest her case on acquisition history (C).",
  },
  {
    id: "rw2-08",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Central Ideas and Details",
    difficulty: "E",
    stimulus:
      "<p>Tardigrades — microscopic animals sometimes called water bears — survive conditions that kill nearly everything else: boiling, freezing to near absolute zero, and the vacuum of space. They manage this by expelling most of their body water and entering a state called a tun, in which metabolism becomes undetectable. A tardigrade in this state is not resistant to harm so much as absent from the situation; rehydrated, it resumes ordinary life within hours.</p>",
    prompt: "Which choice best states the main idea of the text?",
    choices: [
      {
        label: "A",
        text: "Tardigrades endure extreme conditions by suspending life processes rather than by withstanding stress directly.",
      },
      {
        label: "B",
        text: "Tardigrades are the only animals known to survive exposure to the vacuum of space.",
      },
      {
        label: "C",
        text: "Rehydration is the most difficult stage of the tardigrade life cycle.",
      },
      {
        label: "D",
        text: "The nickname \"water bear\" is misleading given how little water tardigrades contain.",
      },
    ],
    correct: "A",
    rationale:
      "The key sentence — \"not resistant to harm so much as absent from the situation\" — states the mechanism the whole text builds toward. B claims an exclusivity the text never asserts; C and D are not supported.",
  },
  {
    id: "rw2-09",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Central Ideas and Details",
    difficulty: "M",
    stimulus:
      "<p>The following text is from Paul Laurence Dunbar's 1896 poem \"We Wear the Mask.\"</p><p>We wear the mask that grins and lies,<br />It hides our cheeks and shades our eyes, —<br />This debt we pay to human guile;<br />With torn and bleeding hearts we smile,<br />And mouth with myriad subtleties.</p><p>Why should the world be over-wise,<br />In counting all our tears and sighs?<br />Nay, let them only see us, while<br />&nbsp;&nbsp;&nbsp;&nbsp;We wear the mask.</p>",
    prompt:
      "Which choice best describes what the speaker is doing in the second stanza?",
    choices: [
      {
        label: "A",
        text: "Offering a justification for the concealment described in the first stanza",
      },
      {
        label: "B",
        text: "Questioning whether the mask can be maintained indefinitely",
      },
      {
        label: "C",
        text: "Describing the physical appearance of the mask in greater detail",
      },
      {
        label: "D",
        text: "Urging listeners to remove their masks and speak openly",
      },
    ],
    correct: "A",
    rationale:
      "\"Why should the world be over-wise...?\" is a rhetorical question defending the choice to hide suffering, and \"let them only see us\" wearing the mask confirms it. The stanza doesn't doubt, describe, or urge removal.",
  },
  {
    id: "rw2-10",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Textual)",
    difficulty: "M",
    stimulus:
      "<p>New Caledonian crows fashion hooked tools from twigs to extract insects from crevices. Researchers disagree about whether the design is learned socially or emerges from individual trial and error. To argue for the individual-learning account, a researcher would need evidence that crows raised without exposure to other crows' tools nonetheless produce hooks of the standard form.</p>",
    prompt:
      "Which finding, if true, would most strongly support the individual-learning account?",
    choices: [
      {
        label: "A",
        text: "Hand-reared crows that had never seen another crow's tool produced hooked twigs of the typical shape on their first attempt at extraction.",
      },
      {
        label: "B",
        text: "Wild crow populations on different islands make hooks whose average curvature differs measurably.",
      },
      {
        label: "C",
        text: "Juvenile crows spend several months watching adults forage before attempting to make tools.",
      },
      {
        label: "D",
        text: "Crows use hooked tools more often when insects are hidden deep in crevices than when they are near the surface.",
      },
    ],
    correct: "A",
    rationale:
      "The text names the needed evidence exactly: isolated crows producing standard hooks. B (regional variation) and C (watching adults) both point toward social learning, and D concerns when tools are used, not how the design arises.",
  },
  {
    id: "rw2-11",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Textual)",
    difficulty: "H",
    stimulus:
      "<p>In her 1892 novel <em>Iola Leroy</em>, Frances Ellen Watkins Harper repeatedly stages scenes in which characters debate their futures aloud rather than act. Scholar Carla Peterson argues that Harper uses these debates strategically: by having characters articulate opposing positions at length, Harper places the reader in the position of a listener at a public meeting, converting the novel into a forum rather than a story to be consumed privately.</p>",
    prompt:
      "Which quotation from <em>Iola Leroy</em> would best support Peterson's argument?",
    choices: [
      {
        label: "A",
        text: "\"The evening was warm, and the windows of the parlor stood open to the garden.\"",
      },
      {
        label: "B",
        text: "\"'Doctor,' said Iola, 'I have a theory that every woman ought to know how to earn her own living' — and the company turned, as at a signal, to hear what would be said in reply.\"",
      },
      {
        label: "C",
        text: "\"She had been taught to regard herself as a white girl, and she had no idea of the truth.\"",
      },
      {
        label: "D",
        text: "\"He walked out alone into the night, turning the question over silently in his mind.\"",
      },
    ],
    correct: "B",
    rationale:
      "Peterson's claim is about staged public debate with an audience; B shows a position stated aloud and \"the company\" turning to hear the reply. D depicts private reflection — the opposite — while A and C carry no debate at all.",
  },
  {
    id: "rw2-12",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Quantitative)",
    difficulty: "M",
    stimulus:
      "<figure><figcaption><strong>Mean Nightly Sleep and Next-Day Recall Accuracy in a Word-List Task</strong></figcaption><table><thead><tr><th>Group</th><th>Mean sleep (hours)</th><th>Recall accuracy</th></tr></thead><tbody><tr><td>Restricted</td><td>4.5</td><td>54%</td></tr><tr><td>Moderate</td><td>6.5</td><td>71%</td></tr><tr><td>Full</td><td>8.0</td><td>78%</td></tr><tr><td>Extended</td><td>9.5</td><td>77%</td></tr></tbody></table></figure><p>A researcher hypothesized that recall accuracy improves with additional sleep only up to a point, beyond which further sleep produces no measurable benefit. The data support this hypothesis, since ______</p>",
    prompt:
      "Which choice most effectively uses data from the table to complete the text?",
    choices: [
      {
        label: "A",
        text: "accuracy rose from 54% to 78% as mean sleep increased from 4.5 to 8.0 hours but was 77% for the group averaging 9.5 hours.",
      },
      {
        label: "B",
        text: "the Restricted group, averaging 4.5 hours of sleep, had the lowest recall accuracy of any group at 54%.",
      },
      {
        label: "C",
        text: "the Extended group averaged 9.5 hours of sleep, more than twice the mean of the Restricted group.",
      },
      {
        label: "D",
        text: "recall accuracy increased by 17 percentage points between the Restricted and Moderate groups.",
      },
    ],
    correct: "A",
    rationale:
      "The hypothesis has two halves — improvement, then a plateau — and only A reports both the rise through 8.0 hours and the flat 77% at 9.5. B, C, and D each cite a single figure that leaves the plateau undemonstrated.",
  },
  {
    id: "rw2-13",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Command of Evidence (Quantitative)",
    difficulty: "H",
    stimulus:
      "<figure><figcaption><strong>Estimated Population of Two Lichen Species on Monitored Rock Faces</strong></figcaption><table><thead><tr><th>Year</th><th><em>Lecanora</em> (sheltered faces)</th><th><em>Lecanora</em> (exposed faces)</th><th><em>Xanthoria</em> (exposed faces)</th></tr></thead><tbody><tr><td>2004</td><td>1,240</td><td>1,180</td><td>430</td></tr><tr><td>2012</td><td>1,265</td><td>905</td><td>770</td></tr><tr><td>2020</td><td>1,290</td><td>610</td><td>1,340</td></tr></tbody></table></figure><p>Air-quality regulations sharply reduced regional sulfur dioxide after 2000. Lichenologist Petra Vance predicted that the pollution-tolerant <em>Lecanora</em> would decline where it had been competing with pollution-sensitive species, but would hold steady where such competitors were absent. Data from the monitored faces are consistent with Vance's prediction, since ______</p>",
    prompt:
      "Which choice most effectively uses data from the table to complete the text?",
    choices: [
      {
        label: "A",
        text: "<em>Xanthoria</em> on exposed faces grew from 430 in 2004 to 1,340 in 2020.",
      },
      {
        label: "B",
        text: "<em>Lecanora</em> on exposed faces fell from 1,180 to 610 over the period while <em>Lecanora</em> on sheltered faces rose slightly, from 1,240 to 1,290.",
      },
      {
        label: "C",
        text: "in 2004, <em>Lecanora</em> outnumbered <em>Xanthoria</em> on exposed faces by more than 700 individuals.",
      },
      {
        label: "D",
        text: "the total number of lichens on exposed faces was greater in 2020 than in 2004.",
      },
    ],
    correct: "B",
    rationale:
      "Vance predicted decline where a competitor was present and stability where it was absent; B contrasts exactly those two cases. A documents the competitor's rise but not <em>Lecanora</em>'s two fates, and C and D are irrelevant to the prediction.",
  },
  {
    id: "rw2-14",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Inferences",
    difficulty: "M",
    stimulus:
      "<p>Venetian glassmakers were confined to the island of Murano beginning in 1291, ostensibly because their furnaces posed a fire risk to the city. The Republic also forbade them to emigrate, on pain of severe penalty, and granted them privileges available to no other artisans. Historians note that fire ordinances elsewhere in Europe never included such provisions, which implies that the confinement was motivated at least partly by ______</p>",
    prompt: "Which choice most logically completes the text?",
    choices: [
      {
        label: "A",
        text: "a desire to keep glassmaking techniques from leaving Venetian control.",
      },
      {
        label: "B",
        text: "the difficulty of transporting raw materials to the main islands of Venice.",
      },
      {
        label: "C",
        text: "an unusually high incidence of fires in Venetian workshops during the 1200s.",
      },
      {
        label: "D",
        text: "pressure from other artisan guilds seeking comparable privileges.",
      },
    ],
    correct: "A",
    rationale:
      "An emigration ban plus special privileges are trade-secret measures, not fire safety — which is why the comparison to other fire ordinances matters. C restates the official rationale the evidence undercuts, and B and D introduce factors the text doesn't mention.",
  },
  {
    id: "rw2-15",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Inferences",
    difficulty: "H",
    stimulus:
      "<p>Machine-learning models trained to predict hospital readmission often perform worse when deployed at a hospital other than the one whose records trained them. One team found that a model's most heavily weighted input was the ordering pattern of a particular laboratory test — a pattern that reflected the training hospital's internal scheduling policy rather than any property of patients. Because that policy differed at the deployment site, the model's degraded performance suggests that ______</p>",
    prompt: "Which choice most logically completes the text?",
    choices: [
      {
        label: "A",
        text: "the model had learned a feature specific to one institution's practices rather than a general clinical signal.",
      },
      {
        label: "B",
        text: "laboratory tests are poor predictors of hospital readmission in general.",
      },
      {
        label: "C",
        text: "the deployment hospital recorded its patient data less accurately than the training hospital did.",
      },
      {
        label: "D",
        text: "models trained on records from several hospitals cannot outperform models trained on records from one.",
      },
    ],
    correct: "A",
    rationale:
      "The heavily weighted input encoded a scheduling policy, so the model latched onto a local artifact that didn't transfer. B overgeneralizes from one ordering pattern, C invents a data-quality problem, and D reverses the implication the example points toward.",
  },
  {
    id: "rw2-16",
    type: "mc",
    domain: "Information and Ideas",
    skill: "Inferences",
    difficulty: "H",
    stimulus:
      "<p>Honeybee colonies choosing a new nest site rely on scout bees, each of which advertises a candidate cavity by dancing. A scout dances with a vigor proportional to how good she judges her site to be, and — crucially — she reduces the number of dance circuits each time she returns, ceasing eventually even if no better site has been found. Without this decay, a colony that had located a merely adequate cavity would ______</p>",
    prompt: "Which choice most logically completes the text?",
    choices: [
      {
        label: "A",
        text: "risk committing to it, since early advertising would continue to accumulate support regardless of the site's quality.",
      },
      {
        label: "B",
        text: "be unable to communicate the cavity's location to other members of the colony.",
      },
      {
        label: "C",
        text: "send out more scouts than a colony that had located an excellent cavity.",
      },
      {
        label: "D",
        text: "abandon the search before any site had accumulated sufficient support.",
      },
    ],
    correct: "A",
    rationale:
      "Decay is what lets weak candidates fade; without it, an adequate site's advertising would persist and build support it hadn't earned. B confuses decay with the dance itself, and C and D describe outcomes the decay mechanism doesn't bear on.",
  },
  {
    id: "rw2-17",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "E",
    stimulus:
      "<p>Built in 1889 as a temporary exhibit, the Eiffel ______ scheduled for demolition after twenty years.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "Tower was" },
      { label: "B", text: "Tower, was" },
      { label: "C", text: "Tower; was" },
      { label: "D", text: "Tower. Was" },
    ],
    correct: "A",
    rationale:
      "No punctuation belongs between a subject and its verb. B, C, and D all sever \"Tower\" from \"was.\"",
  },
  {
    id: "rw2-18",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "M",
    stimulus:
      "<p>Bioengineer Ritu Raman builds machines powered by living muscle ______ tissue that contracts in response to light, propelling millimeter-scale robots through fluid.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "cells;" },
      { label: "B", text: "cells:" },
      { label: "C", text: "cells." },
      { label: "D", text: "cells, and" },
    ],
    correct: "B",
    rationale:
      "What follows is an appositive phrase, not an independent clause, so a colon after the complete clause is correct. A semicolon (A) and a period (C) require a full clause on the right, and D creates a comma-plus-conjunction with no second subject and verb.",
  },
  {
    id: "rw2-19",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "H",
    stimulus:
      "<p>The seed vault at Svalbard, ______ is carved into permafrost 130 meters above sea level, would remain frozen for decades even if its cooling systems failed.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "which" },
      { label: "B", text: "it" },
      { label: "C", text: "and" },
      { label: "D", text: "that" },
    ],
    correct: "A",
    rationale:
      "A nonrestrictive clause set off by commas takes \"which,\" not \"that.\" B produces a comma splice, and C leaves the sentence without a second clause to join.",
  },
  {
    id: "rw2-20",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Boundaries",
    difficulty: "M",
    stimulus:
      "<p>Although the manuscript had been in the library's collection since ______ no one had examined its binding until a conservator noticed threads of a different age.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "1908" },
      { label: "B", text: "1908," },
      { label: "C", text: "1908;" },
      { label: "D", text: "1908:" },
    ],
    correct: "B",
    rationale:
      "A comma separates the introductory dependent clause beginning with \"Although\" from the main clause. A omits the needed break; a semicolon or colon would wrongly imply a complete clause precedes it.",
  },
  {
    id: "rw2-21",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "M",
    stimulus:
      "<p>Neither the field notebooks nor the photographic plate ______ any indication of where the specimen was collected.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "provide" },
      { label: "B", text: "provides" },
      { label: "C", text: "have provided" },
      { label: "D", text: "were providing" },
    ],
    correct: "B",
    rationale:
      "With \"neither...nor,\" the verb agrees with the nearer subject — the singular \"plate.\" A, C, and D are all plural forms.",
  },
  {
    id: "rw2-22",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "M",
    stimulus:
      "<p>The committee released ______ findings only after every member had signed the report.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "it's" },
      { label: "B", text: "their" },
      { label: "C", text: "its" },
      { label: "D", text: "its'" },
    ],
    correct: "C",
    rationale:
      "\"Committee\" is singular here (it takes \"released\"), so the singular possessive \"its\" is correct. \"It's\" means \"it is,\" \"their\" disagrees in number, and \"its'\" is not a word.",
  },
  {
    id: "rw2-23",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "H",
    stimulus:
      "<p>Working at night to avoid the desert heat, ______</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      {
        label: "A",
        text: "the excavation proceeded more quickly than the team had expected.",
      },
      {
        label: "B",
        text: "it was possible for the team to proceed more quickly than expected.",
      },
      {
        label: "C",
        text: "the team proceeded more quickly than it had expected.",
      },
      {
        label: "D",
        text: "there was quicker progress than the team had expected.",
      },
    ],
    correct: "C",
    rationale:
      "The introductory phrase describes whoever is working at night, so the main clause must begin with \"the team.\" A, B, and D make \"the excavation,\" \"it,\" and \"there\" the subject, leaving the modifier dangling.",
  },
  {
    id: "rw2-24",
    type: "mc",
    domain: "Standard English Conventions",
    skill: "Form, Structure, and Sense",
    difficulty: "H",
    stimulus:
      "<p>Had the storm arrived six hours later, the levees ______ the surge without difficulty.</p>",
    prompt:
      "Which choice completes the text so that it conforms to the conventions of Standard English?",
    choices: [
      { label: "A", text: "will hold" },
      { label: "B", text: "would have held" },
      { label: "C", text: "held" },
      { label: "D", text: "have held" },
    ],
    correct: "B",
    rationale:
      "\"Had the storm arrived\" sets up a past counterfactual, whose main clause requires \"would have\" plus a past participle. The other forms all describe events treated as real.",
  },
  {
    id: "rw2-25",
    type: "mc",
    domain: "Expression of Ideas",
    skill: "Transitions",
    difficulty: "M",
    stimulus:
      "<p>Aluminum is the most abundant metal in Earth's crust. ______ it was for much of the nineteenth century more valuable than gold, because no one had found a cheap way to separate it from the ore in which it is locked.</p>",
    prompt:
      "Which choice completes the text with the most logical transition?",
    choices: [
      { label: "A", text: "Consequently," },
      { label: "B", text: "Yet" },
      { label: "C", text: "Likewise," },
      { label: "D", text: "In short," },
    ],
    correct: "B",
    rationale:
      "Abundance and extreme cost are in tension, so a contrast transition is needed. \"Consequently\" and \"likewise\" assert agreement, and \"in short\" would signal a summary.",
  },
  {
    id: "rw2-26",
    type: "mc",
    domain: "Expression of Ideas",
    skill: "Transitions",
    difficulty: "H",
    stimulus:
      "<p>Paleontologists once assigned <em>Nanotyrannus</em> to its own genus on the basis of its slender skull and numerous teeth. Bone histology has since shown that the known specimens have not stopped growing. ______ the features once used to define the genus may simply be juvenile traits of <em>Tyrannosaurus rex</em>.</p>",
    prompt:
      "Which choice completes the text with the most logical transition?",
    choices: [
      { label: "A", text: "Nonetheless," },
      { label: "B", text: "For example," },
      { label: "C", text: "If so," },
      { label: "D", text: "Meanwhile," },
    ],
    correct: "C",
    rationale:
      "The last sentence draws out what follows if the histology finding holds, which \"if so\" marks. \"Nonetheless\" signals contrast where there is agreement, \"for example\" would need an instance, and \"meanwhile\" implies simultaneity.",
  },
  {
    id: "rw2-27",
    type: "mc",
    domain: "Expression of Ideas",
    skill: "Rhetorical Synthesis",
    difficulty: "M",
    stimulus:
      "<p>While researching a topic, a student has taken the following notes:</p><ul><li>Wangari Maathai founded the Green Belt Movement in Kenya in 1977.</li><li>The movement paid rural women small sums to plant and tend tree seedlings.</li><li>By 2004, participants had planted more than 30 million trees.</li><li>Maathai received the Nobel Peace Prize in 2004 — the first African woman to do so.</li><li>The Nobel committee cited her contribution to \"sustainable development, democracy and peace.\"</li></ul>",
    prompt:
      "The student wants to introduce the Green Belt Movement to an audience unfamiliar with it. Which choice most effectively uses relevant information from the notes to accomplish this goal?",
    choices: [
      {
        label: "A",
        text: "The Nobel committee cited Maathai's contribution to \"sustainable development, democracy and peace\" in 2004.",
      },
      {
        label: "B",
        text: "Founded by Wangari Maathai in Kenya in 1977, the Green Belt Movement paid rural women to plant and tend tree seedlings.",
      },
      {
        label: "C",
        text: "In 2004, Wangari Maathai became the first African woman to receive the Nobel Peace Prize.",
      },
      {
        label: "D",
        text: "By 2004, more than 30 million trees had been planted.",
      },
    ],
    correct: "B",
    rationale:
      "An introduction for an unfamiliar audience needs what the movement is, who started it, where, and when — B supplies all four. A, C, and D presuppose that the reader already knows what the Green Belt Movement is.",
  },
];
