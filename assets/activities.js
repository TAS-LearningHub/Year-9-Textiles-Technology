(function () {
  "use strict";

  const STORAGE_PREFIX = "yr9-textiles:busy:v1:";
  const sharedOptions = {
    risk: ["Safe action", "Unsafe action", "Teacher decision required"],
    fibre: ["Natural fibre", "Manufactured fibre", "Not enough evidence"],
    source: ["Observation", "Inference", "Source detail"],
    evidence: ["Strong evidence", "Needs a source", "Unsupported claim"]
  };

  const activities = [
    {
      id: "txt9-bw01", module: 1, title: "Textiles-room risk decisions", topic: "Room safety",
      mechanic: "Scenario classification", type: "sort", minutes: 20,
      theory: "modules/1.html#room-safety", visual: "assets/visuals/sections/m1-room-safety.svg",
      alt: "Textiles-room safety zones showing movement, tools, machines and emergency access",
      intro: "Classify each situation, then explain how the safest response controls the actual risk.",
      items: [
        ["A bag is placed under the worktable and clear of walkways.", "Safe action", sharedOptions.risk],
        ["A student starts a sewing machine before the teacher authorises machine work.", "Unsafe action", sharedOptions.risk],
        ["A damaged electrical lead is noticed before use.", "Teacher decision required", sharedOptions.risk],
        ["Pins are returned to a secure container as work proceeds.", "Safe action", sharedOptions.risk],
        ["Fabric scraps are left beside a doorway until the end of the lesson.", "Unsafe action", sharedOptions.risk],
        ["A student is unsure whether a new tool is permitted for the task.", "Teacher decision required", sharedOptions.risk]
      ],
      prompt: "Choose two unsafe or uncertain situations. For each, name the hazard, the possible harm and the action that controls the risk."
    },
    {
      id: "txt9-bw02", module: 1, title: "Machine-control sequence", topic: "Sewing-machine control",
      mechanic: "Process sequencing", type: "sequence", minutes: 20,
      theory: "modules/1.html#machine-control", visual: "assets/visuals/sections/m1-machine-control.svg",
      alt: "A sewing-machine control routine from teacher approval through setup, test and shutdown",
      intro: "Put the paper-control practice in a safe order. The classroom machine and teacher demonstration remain the authority.",
      steps: [
        "Obtain teacher approval and identify the machine controls.",
        "Check the work area, power lead and needle zone.",
        "Position unthreaded paper practice under the presser foot.",
        "Lower the presser foot and begin at controlled speed.",
        "Guide curves and corners without pulling the paper.",
        "Stop with control, raise the presser foot and clear the area."
      ],
      prompt: "Explain why pulling the practice paper or rushing the pedal reduces control and may create a safety problem."
    },
    {
      id: "txt9-bw03", module: 1, title: "Pincushion quality audit", topic: "Pincushion design and evaluation",
      mechanic: "Criteria audit", type: "audit", minutes: 20,
      theory: "modules/1.html#pincushion", visual: "assets/visuals/sections/m1-pincushion-evaluation.svg",
      alt: "Pincushion quality criteria linking function, safety, construction and presentation",
      intro: "Use the criteria to inspect a sample or your own work. Record observable evidence, not a score based on appearance alone.",
      rows: ["Pins are held securely", "Seams are secure and controlled", "Filling supports the intended function", "Shape is stable", "Finish is neat and appropriate"],
      columns: ["Observed evidence", "Meets / partly / not yet", "Next improvement"],
      prompt: "Which criterion matters most to safe function? Justify your decision using evidence from the audit."
    },
    {
      id: "txt9-bw04", module: 2, title: "Design language match", topic: "Textiles as a design medium and design elements",
      mechanic: "Term-to-evidence matching", type: "match", minutes: 20,
      theory: "modules/2.html#design-elements", visual: "assets/visuals/design-elements.svg",
      alt: "Design elements of line, shape, colour, texture and space applied to textiles",
      intro: "Match each design term to the evidence that best demonstrates it, then describe how three elements could work together.",
      pairs: [
        ["Line", "A repeated stitched path guides the eye across the surface."],
        ["Shape", "A bold geometric pocket changes the garment silhouette."],
        ["Colour", "A limited warm palette creates an energetic mood."],
        ["Texture", "Raised embroidery contrasts with a smooth base fabric."],
        ["Space", "A quiet area around one motif creates emphasis."],
        ["Textile medium", "Fibre, yarn, fabric and construction choices carry the design idea."]
      ],
      prompt: "Describe one textile product and explain how line, colour and texture could communicate a consistent mood for its user."
    },
    {
      id: "txt9-bw05", module: 2, title: "Mood-board curator", topic: "Sources of inspiration",
      mechanic: "Evidence curation", type: "sort", minutes: 20,
      theory: "modules/2.html#inspiration", visual: "assets/visuals/sections/m2-inspiration-moodboard.svg",
      alt: "A mood-board process moving from broad inspiration to edited colours, textures and forms",
      intro: "Decide which source notes strengthen a coherent textile direction and which need more evidence or should be removed.",
      items: [
        ["Three related colours are drawn from labelled garden photographs.", "Strong evidence", sharedOptions.evidence],
        ["A designer image is copied because it already looks finished.", "Unsupported claim", sharedOptions.evidence],
        ["A fabric texture is included but its source and design purpose are missing.", "Needs a source", sharedOptions.evidence],
        ["Leaf shapes are simplified into an original repeat motif.", "Strong evidence", sharedOptions.evidence],
        ["Ten unrelated images are added to fill empty space.", "Unsupported claim", sharedOptions.evidence],
        ["A historical image is labelled but the intended feature has not been identified.", "Needs a source", sharedOptions.evidence]
      ],
      prompt: "State one possible design direction. Name the colour, texture and form evidence you would keep, and explain what you would remove."
    },
    {
      id: "txt9-bw06", module: 3, title: "Target-market trade-offs", topic: "Target market",
      mechanic: "Branching design decisions", type: "decision", minutes: 20,
      theory: "modules/3.html#target-market", visual: "assets/visuals/sections/m3-target-market.svg",
      alt: "Target-market decisions connecting user needs, context, comfort, function and appearance",
      intro: "Choose the strongest design response for each user situation. Read the feedback, then justify one trade-off.",
      scenarios: [
        ["A student needs pyjama bottoms for warm summer nights.", ["Heavy brushed fabric with maximum insulation", "A breathable fabric with comfortable ease", "A stiff decorative fabric with limited movement"], 1, "Breathability, comfort and movement respond directly to the use context."],
        ["A hoodie pocket must carry a phone securely.", ["A pocket sized and positioned for the user", "A decorative pocket too small for the phone", "No pocket because appearance is always more important"], 0, "Function must be tested against the real item and user."],
        ["The target market prefers easy-care garments.", ["Ignore care because it is the user's problem", "Choose using verified fibre/fabric performance and care needs", "Select only by colour"], 1, "Material selection must connect performance and care to the end use."],
        ["Two concepts both meet the brief.", ["Choose randomly", "Compare them against weighted criteria and evidence", "Copy the most fashionable commercial design"], 1, "A criteria-based comparison makes the selection traceable and original."]
      ],
      prompt: "Choose one scenario and explain a trade-off between appearance, comfort, function or care. State why your priority suits the user."
    },
    {
      id: "txt9-bw07", module: 3, title: "Pattern-envelope evidence hunt", topic: "Commercial patterns",
      mechanic: "Document evidence table", type: "evidence", minutes: 20,
      theory: "modules/3.html#commercial-pattern", visual: "assets/visuals/pattern-symbols.svg",
      alt: "Commercial pattern information leading to pattern symbols and a cutting plan",
      intro: "Use the current teacher-issued pattern envelope. Locate—not guess—the details needed before fabric is cut.",
      rows: ["Garment view and style", "Size and body measurement", "Suggested fabrics", "Notions", "Fabric quantity and width", "Special layout or nap note"],
      columns: ["Exact evidence found", "Where it appears", "Why it matters"],
      prompt: "Identify one pattern detail that could change the amount or layout of fabric. Explain the consequence of missing it."
    },
    {
      id: "txt9-bw08", module: 3, title: "Concept decision record", topic: "Design development",
      mechanic: "Weighted comparison", type: "compare", minutes: 20,
      theory: "modules/3.html#design-development", visual: "assets/visuals/sections/m3-concept-selection.svg",
      alt: "Two textile concepts compared against user, function, construction and visual criteria",
      intro: "Score two of your concepts against the same criteria, then make an evidence-based selection. A high total does not replace thoughtful justification.",
      criteria: ["Meets target-market need", "Comfort and movement", "Material suitability", "Can be constructed with authorised processes", "Original and coherent appearance"],
      prompt: "Select the stronger concept. Cite two scores, identify one weakness and state the next refinement you would make."
    },
    {
      id: "txt9-bw09", module: 4, title: "Fibre family sorter", topic: "Fibres",
      mechanic: "Classification with exceptions", type: "sort", minutes: 20,
      theory: "modules/4.html#fibres", visual: "assets/visuals/sections/m4-fibre-classification.svg",
      alt: "Natural and manufactured fibre families with evidence cues",
      intro: "Classify each fibre statement. Use the source and property evidence rather than relying on whether a name sounds natural.",
      items: [
        ["Cotton fibre develops around the seed of a plant.", "Natural fibre", sharedOptions.fibre],
        ["Wool is obtained from an animal fleece.", "Natural fibre", sharedOptions.fibre],
        ["Polyester is produced through a manufactured polymer process.", "Manufactured fibre", sharedOptions.fibre],
        ["Viscose uses regenerated cellulose in a manufacturing process.", "Manufactured fibre", sharedOptions.fibre],
        ["A label says only 'soft-touch fibre'.", "Not enough evidence", sharedOptions.fibre],
        ["Nylon is formed as a manufactured synthetic fibre.", "Manufactured fibre", sharedOptions.fibre]
      ],
      prompt: "Compare one natural and one manufactured fibre for a named end use. Explain which performance evidence you would verify before selecting either."
    },
    {
      id: "txt9-bw10", module: 4, title: "From fibre to yarn", topic: "Yarn structure",
      mechanic: "Transformation sequencing", type: "sequence", minutes: 20,
      theory: "modules/4.html#yarns", visual: "assets/visuals/sections/m4-yarn-structure.svg",
      alt: "Fibres being aligned, spun, twisted and combined into yarn",
      intro: "Sequence a simplified yarn-making pathway, then connect twist and ply to likely yarn behaviour.",
      steps: [
        "Select and prepare the fibre source.",
        "Open, clean or align the fibres as required.",
        "Draw fibres into a more continuous strand.",
        "Add twist to form a spun yarn.",
        "Combine singles when a plied yarn is required.",
        "Inspect consistency and suitability for the intended fabric."
      ],
      prompt: "Explain how changing twist or ply may alter a yarn's strength, appearance or handle. Use cautious language where testing is still needed."
    },
    {
      id: "txt9-bw11", module: 4, title: "Fabric-structure evidence table", topic: "Fabric structures",
      mechanic: "Comparative structure analysis", type: "audit", minutes: 20,
      theory: "modules/4.html#fabric-structures", visual: "assets/visuals/sections/m4-fabric-structures.svg",
      alt: "Woven, knitted and non-woven fabric structures compared by how material is arranged",
      intro: "Inspect real samples if available. Record structural evidence first, then infer likely performance and a suitable end use.",
      rows: ["Woven sample", "Knitted sample", "Non-woven sample"],
      columns: ["Visible structural evidence", "Likely performance", "Suitable end use and reason"],
      prompt: "Which structure would you test first for comfortable sleepwear? Explain what the structure suggests and what still needs physical testing."
    },
    {
      id: "txt9-bw12", module: 5, title: "Construction-control pathway", topic: "Construction",
      mechanic: "Quality-control sequencing", type: "sequence", minutes: 20,
      theory: "modules/5.html#construction", visual: "assets/visuals/sections/m5-construction-evidence.svg",
      alt: "Construction evidence pathway from preparation and test sample to operation, quality check and record",
      intro: "Arrange a quality-control pathway that can be repeated at each authorised construction stage.",
      steps: [
        "Read the issued instruction and confirm the next authorised operation.",
        "Prepare the correct pieces, equipment and safe work area.",
        "Test settings or technique on an appropriate sample.",
        "Complete the operation with controlled handling.",
        "Check accuracy, security and appearance before continuing.",
        "Record the result and any approved correction."
      ],
      prompt: "Choose one likely construction fault. Explain when it should be detected, what evidence reveals it and why correcting it early matters."
    },
    {
      id: "txt9-bw13", module: 5, title: "Project costing studio", topic: "Resources and costing",
      mechanic: "Quantity-and-cost calculation", type: "calculate", minutes: 20,
      theory: "modules/5.html#resources-costing", visual: "assets/visuals/sections/m5-resources-costing.svg",
      alt: "A costing table separating item, quantity, unit cost and total cost",
      intro: "Enter real or teacher-supplied quantities and current unit prices. The calculator totals evidence; it does not invent missing prices.",
      rows: ["Main fabric", "Contrast or rib fabric", "Thread", "Elastic or fastening", "Decoration or label", "Other authorised resource"],
      prompt: "Name the largest cost driver. Explain one change that could reduce waste or cost without weakening function or quality."
    },
    {
      id: "txt9-bw14", module: 5, title: "Care-label decoder", topic: "Labelling and evaluation",
      mechanic: "Consumer-care decisions", type: "decision", minutes: 20,
      theory: "modules/5.html#labels-evaluation", visual: "assets/visuals/garment-label.svg",
      alt: "A garment label showing identity, fibre content, size, origin and care information",
      intro: "Use the supplied label diagram and any verified class examples. Choose the response that best protects the textile item and informs the user.",
      scenarios: [
        ["The fibre-content field is missing.", ["The user can still make a fully informed care decision", "Record the gap because material identity affects care and performance", "Invent the most likely fibre"], 1, "A missing fibre-content statement is an evidence gap, not permission to guess."],
        ["A care symbol is unfamiliar.", ["Use the hottest wash to be safe", "Verify the symbol through an authorised care guide", "Ignore the symbol"], 1, "Care directions should be verified before acting."],
        ["The finished item changed from the planned fabric.", ["Keep the old label", "Update the label evidence to match the actual item", "Remove all care information"], 1, "The label must describe the product that was actually made."],
        ["Evaluation says only 'I like it'.", ["Accept it as complete", "Add criteria, observable evidence and an improvement", "Replace it with a mark"], 1, "Evaluation needs evidence against the brief, not preference alone."]
      ],
      prompt: "Write a short care-and-use explanation for a textile item. Separate verified label evidence from any recommendation that still needs checking."
    },
    {
      id: "txt9-bw15", module: 6, title: "Fashion-influence timeline", topic: "Fashion eras",
      mechanic: "Historical evidence sequencing", type: "sequence", minutes: 20,
      theory: "modules/6.html#fashion-eras", visual: "assets/visuals/fashion-era-influence.svg",
      alt: "A fashion evidence chain from historical context and features to contemporary reinterpretation",
      intro: "Sequence a sound investigation pathway. This is an evidence order, not a claim that every influence moves neatly through time.",
      steps: [
        "Define the era and verify its historical context.",
        "Identify characteristic silhouette, materials, details and ways of wearing.",
        "Record labelled primary or reliable secondary visual evidence.",
        "Locate a contemporary example with a comparable feature.",
        "Separate direct observation from interpretation.",
        "Explain how the feature is retained, changed or given a new meaning."
      ],
      prompt: "Name one historical feature and one contemporary example. Explain the connection without claiming influence beyond the evidence you have."
    },
    {
      id: "txt9-bw16", module: 6, title: "Designer-practice interview lab", topic: "Textile designers",
      mechanic: "Question-and-source builder", type: "interview", minutes: 20,
      theory: "modules/6.html#designer-practice", visual: "assets/visuals/fashion-timeline.svg",
      alt: "A research pathway connecting context, designer practice, evidence and influence",
      intro: "Turn background research into purposeful interview-style questions. Responses must be evidence-based and must not pretend the designer answered you directly.",
      prompts: ["Practice and specialist role", "Sources of inspiration", "Materials and processes", "Target market or audience", "Collaboration and quality decisions"],
      prompt: "Choose your strongest question. Explain which source could support the response and how you will signal that the interview is a researched format, not a real interview."
    },
    {
      id: "txt9-bw17", module: 6, title: "Magazine evidence desk", topic: "Magazine research and communication",
      mechanic: "Two-article evidence planner", type: "evidence", minutes: 20,
      theory: "modules/6.html#magazine-evidence", visual: "assets/visuals/magazine-evidence-map.svg",
      alt: "A two-page magazine plan listing evidence for a fashion-era article and designer interview",
      intro: "Plan the evidence for both articles before styling the pages. Accurate claims, captions and references come before decoration.",
      rows: ["Era context and typical features", "Contemporary influence", "Designer background and practice", "Five interview questions", "Image captions", "APA source details"],
      columns: ["Evidence or draft", "Source / image detail", "Planned page location"],
      prompt: "Identify one claim that still needs stronger evidence. State the exact source detail or observation required before it can be published."
    },
    {
      id: "txt9-bw18", module: 7, title: "Technique-selection matrix", topic: "Textile art techniques",
      mechanic: "Technique suitability matrix", type: "matrix", minutes: 20,
      theory: "modules/7.html#techniques", visual: "assets/visuals/sections/m7-technique-sample.svg",
      alt: "A textile technique sample annotated for materials, control, visual effect and improvement",
      intro: "Compare teacher-approved technique samples. Score suitability only after recording the material, control and visual evidence you observed.",
      rows: ["Technique sample 1", "Technique sample 2", "Technique sample 3", "Technique sample 4"],
      criteria: ["Supports garden idea", "Works with base fabric", "Control demonstrated", "Adds useful colour or texture"],
      prompt: "Select two techniques that work together. Explain how their effects differ and name one risk of overworking the surface."
    },
    {
      id: "txt9-bw19", module: 7, title: "Garden artwork production planner", topic: "Original design and production",
      mechanic: "Evidence-and-production plan", type: "audit", minutes: 20,
      theory: "modules/7.html#art-production", visual: "assets/visuals/sections/m7-production-evidence.svg",
      alt: "Textile-art production evidence from approved design and technique key through making, checking and evaluation",
      intro: "Use the formal In the Garden brief. Plan only the design, dimensions and techniques authorised by the current notification and teacher.",
      rows: ["Original inspiration evidence", "Two developed ideas", "Rendered final design", "Production drawing and technique key", "Planned making order", "Progress and quality evidence"],
      columns: ["Evidence ready", "Teacher approval or hold point", "Next action"],
      prompt: "Identify the most important hold point before making. Explain what must be checked and what could go wrong if production begins too early."
    },
    {
      id: "txt9-bw20", module: 8, title: "Retrieval, evaluation and next step", topic: "Revision and portfolio readiness",
      mechanic: "Retrieval grid and evidence reflection", type: "retrieval", minutes: 20,
      theory: "modules/8.html#revision", visual: "assets/visuals/sections/m8-revision-map.svg",
      alt: "A retrieval cycle moving from recall to check, correct and apply",
      intro: "Retrieve first without notes, check against the named module, correct in another colour if printing, then apply the idea to project evidence.",
      prompts: [
        "Safety: one hazard, possible harm and control",
        "Design: one user need and a matching criterion",
        "Materials: fibre, yarn and fabric structure relationship",
        "Construction: one operation and its quality check",
        "Fashion: observation versus inference",
        "Textile art: technique evidence and a hold point"
      ],
      prompt: "Choose your weakest retrieval box. Correct it using the precise theory section, then state one evidence item you will add or improve in your folio. Textiles as Gifts remains on hold until the teacher supplies an approved brief."
    }
  ];

  const byId = Object.fromEntries(activities.map(activity => [activity.id, activity]));
  const visualCopy = {
    "txt9-bw01": {alt:"Three decision cards for preparing the room, acting with control, and stopping to ask",caption:"Use the flow to decide when a routine can continue and when uncertainty, a fault or an accident requires a stop-and-ask response."},
    "txt9-bw02": {alt:"Four stages of sewing-machine control practice from paper lines to an authorised fabric test",caption:"The progression emphasises control before speed; the teacher demonstration still controls the actual machine setup and shutdown."},
    "txt9-bw03": {alt:"Four evidence lenses for evaluating pincushion function, presentation, achievement and improvement",caption:"Use the four lenses to support the audit with observable evidence instead of judging the sample only by appearance."},
    "txt9-bw04": {alt:"Design elements including line, shape, colour, texture and space connected to textile decisions",caption:"Match each term to visible textile evidence, then explain how several elements work together to create a consistent response."},
    "txt9-bw05": {alt:"A five-stage path from a source through noticing and transformation to a curated original direction",caption:"The sequence helps you decide what belongs on a purposeful mood board and what must be transformed, sourced or removed."},
    "txt9-bw06": {alt:"Target-user evidence branching into functional and expressive requirements",caption:"Use both branches to test whether a proposed trade-off actually suits the user's context, comfort, function and preferred appearance."},
    "txt9-bw07": {alt:"Commercial pattern symbols and information that must be verified before layout and cutting",caption:"Treat the diagram as a search guide; copy quantities, sizes and layout requirements only from the current teacher-issued pattern."},
    "txt9-bw08": {alt:"Two textile concepts compared against the same user, function, material, feasibility and appearance criteria",caption:"Score both ideas against identical criteria, then use the evidence notes to explain the trade-off behind your final selection."},
    "txt9-bw09": {alt:"A fibre-classification tree separating natural and manufactured groups",caption:"Classify the source first, then verify property and end-use evidence rather than relying on how a fibre name sounds."},
    "txt9-bw10": {alt:"Staple and filament fibre forms feeding into spinning, twisting and different yarn structures",caption:"Use the pathway to order the simplified stages and discuss cautiously how twist or ply might influence behaviour."},
    "txt9-bw11": {alt:"Woven, knitted and non-woven fabric structures compared by how the material is formed",caption:"Start with visible structural evidence, then separate likely performance from properties that still need physical testing."},
    "txt9-bw12": {alt:"A construction evidence pathway linking the current authority, operation, quality check and folio record",caption:"Repeat this evidence cycle at each authorised stage; the issued pattern and teacher demonstration control the actual operation and order."},
    "txt9-bw13": {alt:"Equipment and consumable resources separated above a quantity-times-unit-cost formula",caption:"Use the distinction to enter only verified consumable quantities and current prices; the calculator does not supply missing figures."},
    "txt9-bw14": {alt:"A garment label organised into identity, fibre content, size, origin and care information",caption:"Use the information fields to distinguish verified label evidence from a care recommendation that still needs checking."},
    "txt9-bw15": {alt:"A fashion evidence chain connecting historical context, observed features and contemporary reinterpretation",caption:"Follow the chain to keep direct visual evidence separate from an interpretation about influence or changed meaning."},
    "txt9-bw16": {alt:"A fashion-history timeline used as a starting point for evidence-based designer research",caption:"Use the chronology to frame research questions, but support every response with sources rather than presenting a fictional interview as real."},
    "txt9-bw17": {alt:"A two-page magazine evidence map for a fashion-era article and a researched designer interview",caption:"Plan claims, captions and references before styling so each article remains traceable to its evidence."},
    "txt9-bw18": {alt:"A technique-sample record linking process, materials, observed result and possible use",caption:"Compare separate samples by what was actually observed before scoring how well each teacher-approved process supports the design idea."},
    "txt9-bw19": {alt:"Five production-evidence stages from drawing and technique key through sequence, making and evaluation",caption:"Use the stages to find the approval hold point and keep the planned design, actual making evidence and final judgement connected."},
    "txt9-bw20": {alt:"A retrieval cycle moving from retrieve to check, correct and apply",caption:"Use the cycle after each recall prompt: check the named theory section, correct precisely, then apply the idea to a real evidence item."}
  };
  const grid = document.querySelector("#busy-card-grid");
  const workspace = document.querySelector("#busy-workspace");
  const count = document.querySelector("#busy-complete-count");
  const bar = document.querySelector("#busy-complete-bar");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[character]);
  }

  function storageKey(activityId, key) { return `${STORAGE_PREFIX}${activityId}:${key}`; }
  function read(activityId, key) { return localStorage.getItem(storageKey(activityId, key)) || ""; }
  function write(activityId, key, value) { localStorage.setItem(storageKey(activityId, key), value); }
  function readyKey(activityId) { return storageKey(activityId, "ready"); }
  function isReady(activityId) { return localStorage.getItem(readyKey(activityId)) === "true"; }

  function visual(activity) {
    const copy = visualCopy[activity.id] || {alt:activity.alt,caption:activity.alt};
    return `<figure class="busy-visual"><img src="${activity.visual}" alt="${escapeHtml(copy.alt)}"><figcaption>${escapeHtml(copy.caption)} <a href="${activity.visual}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`;
  }

  function field(activity, key, label, placeholder, min = 35) {
    return `<div class="busy-field"><label for="${activity.id}-${key}">${label}</label><textarea id="${activity.id}-${key}" data-busy-save="${key}" data-min="${min}" placeholder="${escapeHtml(placeholder)}">${escapeHtml(read(activity.id, key))}</textarea></div>`;
  }

  function select(activity, key, label, options, answer) {
    const saved = read(activity.id, key);
    return `<div class="busy-choice"><label for="${activity.id}-${key}">${escapeHtml(label)}</label><select id="${activity.id}-${key}" data-busy-save="${key}" data-answer="${escapeHtml(answer)}"><option value="">Choose…</option>${options.map(option => `<option${saved === option ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></div>`;
  }

  function renderSort(activity) {
    return `<div class="busy-sort-grid">${activity.items.map((item, index) => select(activity, `choice-${index}`, item[0], item[2], item[1])).join("")}</div>${field(activity, "reflection", "Evidence explanation", activity.prompt, 70)}`;
  }

  function renderSequence(activity) {
    const saved = activity.steps.map((_, index) => read(activity.id, `order-${index}`));
    const displayOrder = [2, 0, 4, 1, 5, 3].filter(index => index < activity.steps.length);
    return `<p class="busy-instruction">Assign each scrambled step a unique position from 1 to ${activity.steps.length}.</p><div class="busy-sequence">${displayOrder.map(index => `<div class="busy-sequence__row"><label for="${activity.id}-order-${index}"><span>${escapeHtml(activity.steps[index])}</span><select id="${activity.id}-order-${index}" data-busy-save="order-${index}" data-answer="${index + 1}"><option value="">Order</option>${activity.steps.map((_, position) => `<option value="${position + 1}"${saved[index] === String(position + 1) ? " selected" : ""}>${position + 1}</option>`).join("")}</select></label></div>`).join("")}</div>${field(activity, "reflection", "Process explanation", activity.prompt, 70)}`;
  }

  function renderAudit(activity) {
    return `<div class="teacher-table-wrap"><table class="busy-evidence-table"><thead><tr><th scope="col">Evidence focus</th>${activity.columns.map(column => `<th scope="col">${escapeHtml(column)}</th>`).join("")}</tr></thead><tbody>${activity.rows.map((row, rowIndex) => `<tr><th scope="row">${escapeHtml(row)}</th>${activity.columns.map((column, columnIndex) => `<td><label class="sr-only" for="${activity.id}-cell-${rowIndex}-${columnIndex}">${escapeHtml(row)} — ${escapeHtml(column)}</label><textarea id="${activity.id}-cell-${rowIndex}-${columnIndex}" data-busy-save="cell-${rowIndex}-${columnIndex}" data-min="12">${escapeHtml(read(activity.id, `cell-${rowIndex}-${columnIndex}`))}</textarea></td>`).join("")}</tr>`).join("")}</tbody></table></div>${field(activity, "reflection", "Evidence-based judgement", activity.prompt, 70)}`;
  }

  function renderMatch(activity) {
    const definitions = activity.pairs.map(pair => pair[1]).sort((a, b) => a.localeCompare(b));
    return `<div class="busy-match-grid">${activity.pairs.map((pair, index) => select(activity, `match-${index}`, pair[0], definitions, pair[1])).join("")}</div>${field(activity, "reflection", "Design application", activity.prompt, 70)}`;
  }

  function renderDecision(activity) {
    return `<div class="busy-decisions">${activity.scenarios.map((scenario, scenarioIndex) => `<fieldset class="busy-scenario"><legend>${escapeHtml(scenario[0])}</legend>${scenario[1].map((choice, choiceIndex) => { const key = `decision-${scenarioIndex}`; const saved = read(activity.id, key); return `<label><input type="radio" name="${activity.id}-${key}" value="${choiceIndex}" data-busy-save="${key}" data-answer="${scenario[2]}" data-feedback="${escapeHtml(scenario[3])}"${saved === String(choiceIndex) ? " checked" : ""}> <span>${escapeHtml(choice)}</span></label>`; }).join("")}</fieldset>`).join("")}</div>${field(activity, "reflection", "Decision justification", activity.prompt, 70)}`;
  }

  function renderEvidence(activity) { return renderAudit(activity); }

  function renderCompare(activity) {
    return `<div class="teacher-table-wrap"><table class="busy-score-table"><thead><tr><th scope="col">Criterion</th><th scope="col">Concept A / 5</th><th scope="col">Concept B / 5</th><th scope="col">Evidence note</th></tr></thead><tbody>${activity.criteria.map((criterion, index) => `<tr><th scope="row">${escapeHtml(criterion)}</th><td><input type="number" min="1" max="5" aria-label="Concept A score for ${escapeHtml(criterion)}" data-busy-save="a-${index}" value="${escapeHtml(read(activity.id, `a-${index}`))}"></td><td><input type="number" min="1" max="5" aria-label="Concept B score for ${escapeHtml(criterion)}" data-busy-save="b-${index}" value="${escapeHtml(read(activity.id, `b-${index}`))}"></td><td><textarea aria-label="Evidence note for ${escapeHtml(criterion)}" data-busy-save="note-${index}" data-min="12">${escapeHtml(read(activity.id, `note-${index}`))}</textarea></td></tr>`).join("")}</tbody><tfoot><tr><th scope="row">Totals</th><td id="${activity.id}-total-a">0</td><td id="${activity.id}-total-b">0</td><td>Use totals as evidence, not as the whole decision.</td></tr></tfoot></table></div>${field(activity, "reflection", "Concept selection", activity.prompt, 80)}`;
  }

  function renderCalculate(activity) {
    return `<div class="teacher-table-wrap"><table class="busy-cost-table"><thead><tr><th scope="col">Resource</th><th scope="col">Quantity</th><th scope="col">Unit cost ($)</th><th scope="col">Total ($)</th></tr></thead><tbody>${activity.rows.map((row, index) => `<tr><th scope="row">${escapeHtml(row)}</th><td><input type="number" min="0" step="0.01" aria-label="Quantity for ${escapeHtml(row)}" data-busy-save="qty-${index}" value="${escapeHtml(read(activity.id, `qty-${index}`))}"></td><td><input type="number" min="0" step="0.01" aria-label="Unit cost for ${escapeHtml(row)}" data-busy-save="unit-${index}" value="${escapeHtml(read(activity.id, `unit-${index}`))}"></td><td data-cost-total="${index}">$0.00</td></tr>`).join("")}</tbody><tfoot><tr><th scope="row" colspan="3">Project total</th><td id="${activity.id}-grand-total">$0.00</td></tr></tfoot></table></div>${field(activity, "source-note", "Price source and date", "Record where and when the prices were verified.", 25)}${field(activity, "reflection", "Cost and waste decision", activity.prompt, 70)}`;
  }

  function renderInterview(activity) {
    return `<div class="busy-interview-grid">${activity.prompts.map((prompt, index) => `<section class="busy-interview-card"><h3>${escapeHtml(prompt)}</h3>${field(activity, `question-${index}`, "Interview-style question", "Write a question that reveals a design decision, influence or process.", 25)}${field(activity, `evidence-${index}`, "Evidence-based response notes", "Record factual notes and the source that supports them.", 30)}</section>`).join("")}</div>${field(activity, "reflection", "Source and format check", activity.prompt, 70)}`;
  }

  function renderMatrix(activity) {
    return `<div class="teacher-table-wrap"><table class="busy-score-table"><thead><tr><th scope="col">Sample</th>${activity.criteria.map(criterion => `<th scope="col">${escapeHtml(criterion)} / 3</th>`).join("")}<th scope="col">Observed evidence</th></tr></thead><tbody>${activity.rows.map((row, rowIndex) => `<tr><th scope="row">${escapeHtml(row)}</th>${activity.criteria.map((criterion, criterionIndex) => `<td><input type="number" min="1" max="3" aria-label="${escapeHtml(criterion)} score for ${escapeHtml(row)}" data-busy-save="score-${rowIndex}-${criterionIndex}" value="${escapeHtml(read(activity.id, `score-${rowIndex}-${criterionIndex}`))}"></td>`).join("")}<td><textarea aria-label="Observed evidence for ${escapeHtml(row)}" data-busy-save="evidence-${rowIndex}" data-min="18">${escapeHtml(read(activity.id, `evidence-${rowIndex}`))}</textarea></td></tr>`).join("")}</tbody></table></div>${field(activity, "reflection", "Technique decision", activity.prompt, 80)}`;
  }

  function renderRetrieval(activity) {
    return `<div class="busy-retrieval-grid">${activity.prompts.map((prompt, index) => field(activity, `recall-${index}`, prompt, "Retrieve without notes, then check and correct.", 35)).join("")}</div>${field(activity, "reflection", "Correction and next evidence step", activity.prompt, 80)}`;
  }

  const renderers = {sort: renderSort, sequence: renderSequence, audit: renderAudit, match: renderMatch, decision: renderDecision, evidence: renderEvidence, compare: renderCompare, calculate: renderCalculate, interview: renderInterview, matrix: renderMatrix, retrieval: renderRetrieval};

  function activityCard(activity) {
    return `<article class="busy-card" data-module="${activity.module}"><div class="busy-card__top"><span>Module ${activity.module}</span><span>${activity.minutes} min</span></div><h3>${escapeHtml(activity.title)}</h3><p>${escapeHtml(activity.topic)} · ${escapeHtml(activity.mechanic)}</p><a class="button ghost" href="#${activity.id}">${isReady(activity.id) ? "✓ Review activity" : "Open activity"}</a></article>`;
  }

  function renderHub() {
    grid.innerHTML = activities.map(activityCard).join("");
    updateOverall();
  }

  function updateOverall() {
    const complete = activities.filter(activity => isReady(activity.id)).length;
    count.textContent = `${complete} of ${activities.length} ready`;
    bar.style.width = `${complete / activities.length * 100}%`;
  }

  function renderActivity(activity) {
    const index = activities.findIndex(item => item.id === activity.id);
    const previous = activities[index - 1];
    const next = activities[index + 1];
    workspace.hidden = false;
    document.body.classList.add("busy-activity-open");
    workspace.innerHTML = `<article class="busy-activity" data-activity-id="${activity.id}">
      <header class="busy-activity__header"><div><p class="kicker">Module ${activity.module} · Activity ${String(index + 1).padStart(2, "0")} of 20</p><h2>${escapeHtml(activity.title)}</h2><p>${escapeHtml(activity.intro)}</p></div><div class="busy-time"><strong>About ${activity.minutes} minutes</strong><span>5 min read · 10 min work · 5 min check</span></div></header>
      <div class="busy-activity__links"><a href="${activity.theory}">Read the precise theory first</a><span>•</span><a href="#busy-hub">Return to activity hub</a></div>
      ${visual(activity)}
      <section class="busy-task" aria-label="Activity task">${renderers[activity.type](activity)}</section>
      <section class="busy-feedback" aria-live="polite"><p><strong>Check status:</strong> <span data-feedback-status>${isReady(activity.id) ? "Ready for review" : "Not checked yet"}</span></p><div data-feedback-detail>Complete the interaction and written evidence, then choose Check my work.</div></section>
      <div class="busy-activity__actions"><button class="button" type="button" data-check-activity>Check my work</button><button class="button ghost" type="button" data-print-activity>Print / Save PDF</button><a class="button ghost" href="#busy-hub">Activity hub</a></div>
      <nav class="busy-prev-next" aria-label="Activity sequence">${previous ? `<a href="#${previous.id}">← ${escapeHtml(previous.title)}</a>` : "<span></span>"}${next ? `<a href="#${next.id}">${escapeHtml(next.title)} →</a>` : `<a href="folio.html">Open My folio →</a>`}</nav>
    </article>`;
    bindActivity(activity);
    workspace.scrollIntoView({behavior: "smooth", block: "start"});
  }

  function controlValue(control) {
    if (control.type === "radio") {
      const checked = workspace.querySelector(`input[name="${CSS.escape(control.name)}"]:checked`);
      return checked ? checked.value : "";
    }
    return control.value;
  }

  function bindActivity(activity) {
    const controls = [...workspace.querySelectorAll("[data-busy-save]")];
    controls.forEach(control => {
      const eventName = control.matches("select,input[type=radio]") ? "change" : "input";
      control.addEventListener(eventName, () => {
        write(activity.id, control.dataset.busySave, controlValue(control));
        if (activity.type === "calculate") updateCosts(activity);
        if (activity.type === "compare") updateComparison(activity);
      });
    });
    if (activity.type === "calculate") updateCosts(activity);
    if (activity.type === "compare") updateComparison(activity);
    workspace.querySelector("[data-check-activity]").addEventListener("click", () => checkActivity(activity));
    workspace.querySelector("[data-print-activity]").addEventListener("click", () => window.print());
  }

  function updateCosts(activity) {
    let total = 0;
    activity.rows.forEach((_, index) => {
      const quantity = Number(workspace.querySelector(`[data-busy-save="qty-${index}"]`)?.value || 0);
      const unit = Number(workspace.querySelector(`[data-busy-save="unit-${index}"]`)?.value || 0);
      const rowTotal = quantity * unit;
      total += rowTotal;
      const cell = workspace.querySelector(`[data-cost-total="${index}"]`);
      if (cell) cell.textContent = `$${rowTotal.toFixed(2)}`;
    });
    const grand = workspace.querySelector(`#${activity.id}-grand-total`);
    if (grand) grand.textContent = `$${total.toFixed(2)}`;
  }

  function updateComparison(activity) {
    const total = side => activity.criteria.reduce((sum, _, index) => sum + Number(workspace.querySelector(`[data-busy-save="${side}-${index}"]`)?.value || 0), 0);
    const a = workspace.querySelector(`#${activity.id}-total-a`);
    const b = workspace.querySelector(`#${activity.id}-total-b`);
    if (a) a.textContent = total("a");
    if (b) b.textContent = total("b");
  }

  function checkActivity(activity) {
    const controls = [...workspace.querySelectorAll("[data-busy-save]")];
    const uniqueRadioNames = new Set(controls.filter(control => control.type === "radio").map(control => control.name));
    const nonRadio = controls.filter(control => control.type !== "radio");
    let complete = 0;
    let required = nonRadio.length + uniqueRadioNames.size;
    let objective = 0;
    let correct = 0;
    const findings = [];

    nonRadio.forEach(control => {
      const value = control.value.trim();
      const min = Number(control.dataset.min || 1);
      if (value && control.checkValidity() && (!control.matches("textarea") || value.length >= min)) complete += 1;
      if (control.dataset.answer !== undefined) {
        objective += 1;
        if (value === control.dataset.answer) correct += 1;
      }
    });
    uniqueRadioNames.forEach(name => {
      const selected = workspace.querySelector(`input[name="${CSS.escape(name)}"]:checked`);
      if (selected) {
        complete += 1;
        objective += 1;
        if (selected.value === selected.dataset.answer) correct += 1;
        else findings.push(selected.dataset.feedback);
      }
    });

    const allComplete = complete === required;
    const objectiveReady = objective === 0 || correct === objective;
    const ready = allComplete && objectiveReady;
    localStorage.setItem(readyKey(activity.id), String(ready));
    const status = workspace.querySelector("[data-feedback-status]");
    const detail = workspace.querySelector("[data-feedback-detail]");
    status.textContent = ready ? "Ready for review" : "Keep working";
    if (ready) {
      detail.innerHTML = "Your required evidence is complete and the checkable decisions are accurate. Re-read the written explanation for specific evidence before printing or moving on.";
    } else {
      const messages = [];
      if (!allComplete) messages.push(`${required - complete} required field${required - complete === 1 ? " is" : "s are"} incomplete or too brief.`);
      if (!objectiveReady) messages.push(`${objective - correct} checkable decision${objective - correct === 1 ? " needs" : "s need"} correction.`);
      if (findings.length) messages.push(...[...new Set(findings)]);
      detail.innerHTML = `<ul>${messages.map(message => `<li>${escapeHtml(message)}</li>`).join("")}</ul>`;
    }
    renderHub();
    workspace.querySelector("[data-check-activity]").focus();
  }

  function openFromHash() {
    const id = location.hash.slice(1);
    if (byId[id]) renderActivity(byId[id]);
    else {
      workspace.hidden = true;
      document.body.classList.remove("busy-activity-open");
      if (id === "busy-hub") document.querySelector("#busy-hub").scrollIntoView({block: "start"});
    }
  }

  document.querySelectorAll("[data-module-filter]").forEach(button => button.addEventListener("click", () => {
    const module = button.dataset.moduleFilter;
    document.querySelectorAll("[data-module-filter]").forEach(other => {
      const active = other === button;
      other.classList.toggle("is-active", active);
      other.setAttribute("aria-pressed", String(active));
    });
    grid.querySelectorAll(".busy-card").forEach(card => { card.hidden = module !== "all" && card.dataset.module !== module; });
  }));

  document.querySelector("#busy-print-summary").addEventListener("click", () => {
    document.body.classList.add("busy-print-summary");
    window.print();
    setTimeout(() => document.body.classList.remove("busy-print-summary"), 500);
  });

  window.addEventListener("hashchange", openFromHash);
  renderHub();
  openFromHash();
  window.YR9_BUSY_WORK = {version: "1.0", count: activities.length, activities};
})();
