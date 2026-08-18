(function () {
  "use strict";

  const moduleId = Number(document.body.dataset.module);
  const data = window.YR9_TEXTILES.modules.find(item => item.id === moduleId);
  if (!data) return;

  const root = document.documentElement.dataset.root || "..";
  const esc = value => String(value).replace(/[&<>\"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;"}[char]));
  const genericReasons = [
    "It removes the need to compare evidence.",
    "It guarantees every textile product will be identical.",
    "It is mainly used to make a page look complete."
  ];

  const SECTION_VISUALS = {
    "room-safety": {
      visual: "assets/visuals/sections/m1-room-safety.svg",
      alt: "Three-stage safety decision flow: prepare the area, act deliberately, then stop and ask when equipment jams, sounds unusual or is uncertain",
      caption: "Prepare the space and act deliberately. A jam, unusual noise, accident, fault or uncertain setup changes the decision to stop and ask the teacher."
    },
    "machine-control": {
      visual: "assets/visuals/sections/m1-machine-control.svg",
      alt: "Four-step confidence progression from paper-line practice through starting and stopping, steering and turning, then a teacher-approved fabric test",
      caption: "Build control before speed: practise on paper, start and stop accurately, steer and turn, then move to fabric only through the classroom demonstration."
    },
    "pincushion": {
      visual: "assets/visuals/sections/m1-pincushion-evaluation.svg",
      alt: "Four evidence lenses for evaluating a pincushion: function, presentation, achievement and a specific improvement",
      caption: "A balanced evaluation uses product evidence to discuss function and presentation, then names an achievement and one precise improvement."
    },
    "design-medium": {
      visual: "assets/visuals/sections/m2-design-medium.svg",
      alt: "Connected design system linking a textile focus area with the user, material, tools and technology, and fitness for the intended end use",
      caption: "Textile design decisions work as a system: the focus area and user shape the material and making choices needed for a fit-for-purpose result."
    },
    "inspiration": {
      visual: "assets/visuals/sections/m2-inspiration-moodboard.svg",
      alt: "Flow from selecting an inspiration source to noticing features, transforming them, curating a mood board and developing an original direction",
      caption: "Use a source as evidence, select and transform useful features, then curate a coherent mood board that leads to original ideas rather than copying."
    },
    "target-market": {
      visual: "assets/visuals/sections/m3-target-market.svg",
      alt: "A target-user profile feeding functional and expressive nightwear requirements before a specific, justified and achievable design decision",
      caption: "Turn information about the user into justified functional and expressive requirements; teacher-issued patterns still control the practical detail."
    },
    "design-development": {
      visual: "assets/visuals/sections/m3-concept-selection.svg",
      alt: "Two annotated front-and-back concepts compared against the same user, function, appearance, process and feasibility criteria before selection",
      caption: "Compare both concepts against the same criteria, then justify the selected direction by explaining the trade-offs—not simply naming a favourite."
    },
    "fibres": {
      visual: "assets/visuals/sections/m4-fibre-classification.svg",
      alt: "Fibre classification tree dividing natural fibres into plant cellulose and animal protein, and manufactured fibres into regenerated and synthetic groups",
      caption: "Classify the fibre source first, then use evidence about its properties to judge a suitable textile end use."
    },
    "yarns": {
      visual: "assets/visuals/sections/m4-yarn-structure.svg",
      alt: "Staple and filament fibre forms feeding spinning and twist, then branching into single, ply, novelty and textured yarn structures",
      caption: "Fibre length and twist shape the yarn structure: trace staple or filament fibres through spinning before comparing single, ply and special-effect yarns."
    },
    "fabric-structures": {
      visual: "assets/visuals/sections/m4-fabric-structures.svg",
      alt: "Three-column comparison of woven warp-and-weft structures, knitted loop structures and non-woven bonded or formed structures",
      caption: "Identify how the structure is formed before explaining performance; structure is evidence, not a guarantee of one property."
    },
    "construction": {
      visual: "assets/visuals/sections/m5-construction-evidence.svg",
      alt: "Evidence flow from the current teacher or pattern authority to an operation, quality check and folio record",
      caption: "Record the operation, the quality check and the evidence while leaving exact construction order and machine settings to the issued pattern and teacher demonstration."
    },
    "resources-costing": {
      visual: "assets/visuals/sections/m5-resources-costing.svg",
      alt: "Comparison of reusable equipment and consumable resources with an evidence-based costing row using item, quantity, unit cost and total",
      caption: "Separate equipment from consumed resources, then calculate each costing row from real quantities and verified prices rather than invented figures."
    },
    "techniques": {
      visual: "assets/visuals/sections/m7-technique-sample.svg",
      alt: "Technique-sample evidence chain recording the process name, materials, observed result and a possible use",
      caption: "A useful technique sample records what was used, what happened and what the result could contribute; the teacher controls the exact safe method."
    },
    "garden-design": {
      visual: "assets/visuals/sections/m7-theme-confirmation.svg",
      alt: "Three consistent course sources leading to In the Garden as the controlling theme for the 2024 Teacher Edition",
      caption: "The formal notification, course sequence and examination consistently establish In the Garden for this 2024 source edition; a later cohort must use any replacement notice formally issued by the teacher."
    },
    "art-production": {
      visual: "assets/visuals/sections/m7-production-evidence.svg",
      alt: "Five-stage evidence flow connecting a production drawing, technique key, planned sequence, making evidence and final evaluation",
      caption: "Make the drawing, technique key, planned order, photographs or samples and evaluation tell one coherent story using the student's real design evidence."
    },
    "revision": {
      visual: "assets/visuals/sections/m8-revision-map.svg",
      alt: "The three areas of study feeding a retrieval cycle of retrieve, check, correct and apply with course-project examples",
      caption: "Link ideas from Design, Properties and Performance, and Textiles and Society to a project example, then retrieve, check, correct and apply."
    },
    "final-evaluation": {
      visual: "assets/visuals/sections/m8-portfolio-readiness.svg",
      alt: "Portfolio-readiness checklist for clear headings, complete responses, suitable photographs, references, evaluation evidence, context and a self-contained export",
      caption: "Check the evidence and its context before export so another reader can understand what each item shows after it leaves the live website."
    },
    "gifts": {
      visual: "assets/visuals/sections/m8-gift-brief.svg",
      alt: "Teacher-approved gift brief flow from recipient and need through criteria and approval to design, production and evaluation evidence",
      caption: "Free choice still needs a recipient, need, criteria and teacher approval. Product, materials, dimensions, process and assessment status remain Teacher to confirm."
    }
  };

  const SUPPLEMENTAL_VISUALS = {
    "fibres": {
      visual:"assets/visuals/photos/material-swatches.png",
      alt:"Six textile swatches with varied visible surfaces beside two yarn samples",
      caption:"Original illustrative image: observe surface, edge and yarn differences before using the course diagrams to classify structure; appearance alone does not prove fibre identity."
    },
    "techniques": {
      visual:"assets/visuals/photos/technique-samples.png",
      alt:"Four abstract textile-art practice swatches showing different ways to build line, layer and texture",
      caption:"Original illustrative image: separate trials help compare appearance and control before a student selects and documents teacher-approved processes."
    }
  };

  function question(section, sectionIndex, fact, factIndex, asksWhy) {
    const number = factIndex * 2 + (asksWhy ? 2 : 1);
    const correct = asksWhy ? fact[1] : fact[0];
    const distractor = asksWhy ? genericReasons[(factIndex + sectionIndex) % genericReasons.length] : fact[2];
    const third = asksWhy ? genericReasons[(factIndex + sectionIndex + 1) % genericReasons.length] : "The quickest choice is always the most suitable choice.";
    const choices = [correct, distractor, third];
    const shift = (factIndex + sectionIndex + (asksWhy ? 1 : 0)) % choices.length;
    const ordered = choices.slice(shift).concat(choices.slice(0, shift));
    const correctIndex = ordered.indexOf(correct);
    const name = `m${moduleId}-${section.anchor}-q${String(number).padStart(2,"0")}`;
    const prompt = asksWhy ? `Why does this idea matter: “${fact[0]}”?` : "Which statement is accurate?";
    return `<div class="question-card" data-question="${name}" data-section-title="${esc(section.title)}">
      <fieldset><legend>${number}. ${esc(prompt)}</legend>
        ${ordered.map((choice,index)=>`<label class="option"><input type="radio" name="${name}" value="${index}" data-correct="${index===correctIndex}"> <span>${esc(choice)}</span></label>`).join("")}
      </fieldset>
      <p class="feedback" aria-live="polite"></p>
    </div>`;
  }

  function videoPanel(section) {
    const entry = window.YR9_VIDEO_MANIFEST?.bySection[`${moduleId}:${section.anchor}`];
    if (!entry) return "";
    return window.YR9_VIDEO_UI.panelMarkup(entry, {
      libraryLink: `${root}/videos.html#video-m${moduleId}-${section.anchor}`
    });
  }

  function responseGuide(section) {
    return `<div class="written-card">
      <p class="kicker">Written evidence</p>
      <h3>Guided written response</h3>
      <p class="written-prompt">${esc(section.prompt)}</p>
      <div class="response-guide" aria-label="Read Select Explain Check writing routine">
        <div class="response-step"><strong>Read</strong>Underline each part of the question. <a href="#${section.anchor}">Return to ${esc(section.title)}</a>.</div>
        <div class="response-step"><strong>Select</strong>Choose two or three course ideas that directly help answer it.</div>
        <div class="response-step"><strong>Explain</strong>Connect each selected idea to your judgement, comparison or example.</div>
        <div class="response-step"><strong>Check</strong>Make sure every part is answered and every claim has a reason.</div>
      </div>
      <p><strong>What is this asking?</strong> Build a clear answer from the theory immediately above; do not simply list terms.</p>
      <p class="sentence-starter"><strong>Sentence starter:</strong> One important idea from ${esc(section.title)} is … This matters because …</p>
      <label for="response-${section.anchor}">Your response</label>
      <textarea id="response-${section.anchor}" data-save="m${moduleId}:${section.anchor}:response"></textarea>
      <p class="save-state">Saved on this device as you type</p>
      <details><summary>Appropriate response example</summary><p>${esc(section.example)}</p></details>
    </div>`;
  }

  function sectionHtml(section, index) {
    const questions = section.facts.flatMap((fact,factIndex)=>[
      question(section,index,fact,factIndex,false),
      question(section,index,fact,factIndex,true)
    ]).join("");
    const visualOverride = SECTION_VISUALS[section.anchor] || {};
    const visual = visualOverride.visual || section.visual || data.visual;
    const visualAlt = visualOverride.alt || section.visualAlt || `Learning diagram for ${section.title}`;
    const caption = visualOverride.caption || section.visualCaption || `${section.facts[0][0]} ${section.facts[0][1]}`;
    const supplemental = SUPPLEMENTAL_VISUALS[section.anchor];
    const supplementalFigure = supplemental ? `<figure class="learning-visual source-photo"><img src="${root}/${supplemental.visual}" alt="${esc(supplemental.alt)}"><figcaption>${esc(supplemental.caption)} <a href="${root}/${supplemental.visual}" target="_blank" rel="noopener">Open larger</a>.</figcaption></figure>` : "";
    return `<section class="card textbook-section theory-section" id="${section.anchor}">
      <header class="theory-heading">
        <div><p class="kicker">Section ${index + 1} of ${data.sections.length}</p><h2>${esc(section.title)}</h2></div>
        <ol class="learning-order" aria-label="Section learning order"><li>Explain</li><li>See</li><li>Watch</li><li>Check</li><li>Write</li></ol>
      </header>
      <div class="theory-copy">${section.theory.map(item=>`<p>${esc(item)}</p>`).join("")}</div>
      <figure class="learning-visual">
        <div class="learning-visual__viewport" role="region" aria-label="Scrollable learning diagram" tabindex="0">
          <img src="${root}/${visual}" alt="${esc(visualAlt)}">
        </div>
        <p class="diagram-scroll-hint">Swipe horizontally to read the full diagram.</p>
        <figcaption>${esc(caption)} <a href="${root}/${visual}" target="_blank" rel="noopener">Open larger</a>.</figcaption>
      </figure>
      ${supplementalFigure}
      ${videoPanel(section)}
      <section class="guided-practice" aria-labelledby="checks-${section.anchor}">
        <div class="checks-intro"><p class="kicker">Guided practice</p><h3 id="checks-${section.anchor}">Ten checks</h3><p>Answer each question, use the feedback, then return to the explanation when an idea needs another look.</p></div>
        <div class="checks">${questions}</div>
      </section>
      ${responseGuide(section)}
    </section>`;
  }

  const presentationHref = moduleId === 6 ? `${root}/presentations/module-6.html` : `${root}/presentation.html?module=${moduleId}`;
  const presentationFiles = {
    1: "year-9-textiles-module-1-safety-and-sewing.pptx",
    2: "year-9-textiles-module-2-design-foundations.pptx",
    3: "year-9-textiles-module-3-designer-pyjamas.pptx",
    4: "year-9-textiles-module-4-fibres-yarns-fabrics.pptx",
    5: "year-9-textiles-module-5-apparel-production-and-evaluation.pptx",
    6: "year-9-textiles-module-6-designers-and-fashion-eras.pptx",
    7: "year-9-textiles-module-7-textile-art.pptx",
    8: "year-9-textiles-module-8-consolidation-and-gifts.pptx"
  };
  const presentationPptxHref = `${root}/presentations/pptx/${presentationFiles[moduleId]}`;
  const activityHref = data.activityHref ? `${root}/${data.activityHref}` : "";
  const activityLabel = data.activityLabel || "Open connected activity";
  const activityAction = activityHref ? `<a class="button ghost" href="${activityHref}">${esc(activityLabel)}</a>` : "";
  const nextModule = moduleId === 8 ? 1 : moduleId + 1;
  document.title = `Module ${moduleId}: ${data.title} | Year 9 Textiles`;

  const hero = document.querySelector("#module-hero");
  hero.classList.add("lesson-hero");
  hero.innerHTML = `<div class="hero__inner"><div class="hero-copy"><p class="eyebrow">Module ${moduleId} · ${esc(data.term)}</p><h1>${esc(data.title)}</h1><p class="hero-subtitle">${esc(data.summary)}</p></div><figure class="hero-visual module-hero-visual"><img src="${root}/${data.visual}" alt="${esc(data.visualAlt)}"><figcaption>${esc(data.visualCaption)} <a href="${root}/${data.visual}" target="_blank" rel="noopener">Open larger</a>.</figcaption></figure></div>`;

  document.querySelector("#module-content").innerHTML = `<div class="module-main">
    <section class="card lesson-overview module-presentation-card">
      <div><p class="kicker">Module presentation</p><h2>Teach, retrieve, explain and save evidence</h2><p>Use the editable eight-slide PowerPoint as the class lesson, or open the browser version for a quick on-screen review.</p><h3>Evidence you will keep</h3><p>${esc(data.evidence)}</p></div>
      <div class="module-overview__actions"><a class="button" href="${presentationPptxHref}" download>Download PowerPoint (.pptx)</a><a class="button secondary" href="${presentationHref}">Open browser lesson</a>${activityAction}<a class="button ghost" href="${root}/folio.html">Open My folio</a></div>
    </section>
    <section class="card syllabus-map" aria-labelledby="module-syllabus-title">
      <p class="kicker">Syllabus connection</p>
      <h2 id="module-syllabus-title">Outcomes and taught content</h2>
      <p><strong>Outcomes taught:</strong> ${data.outcomes.map(outcome=>`<span class="outcome-code">${esc(outcome)}</span>`).join(" ")}</p>
      <ul>${data.sections.map(section=>`<li>${esc(section.title)}</li>`).join("")}</ul>
      <p class="boundary-note">These lessons provide opportunities to learn and produce evidence. Your teacher determines achievement of each outcome.</p>
    </section>
    <section class="student-strip" aria-labelledby="module-evidence-title">
      <div><p class="kicker">Student evidence</p><h2 id="module-evidence-title">Your module progress</h2><p>Checks and written responses save only in this browser.</p></div>
      <div class="progress-panel"><div class="progress" aria-label="Module progress"><span id="progress-bar"></span></div><p id="progress-copy">0 of 33 learning items started</p></div>
    </section>
    ${data.sections.map(sectionHtml).join("")}
    <section class="card completion-card">
      <div class="completion-summary"><div><p class="kicker">Before you move on</p><h2>Check the evidence, then choose the next step</h2><p>Complete 30 checks and three written responses. Website progress is practice evidence, not formal submission.</p></div><div class="completion-count"><strong>33</strong><span>learning items</span></div></div>
      <nav class="week-switcher" aria-label="Module completion actions">${activityAction}<a class="button" href="${root}/folio.html">Review My folio</a><button class="button ghost" type="button" data-print>Print this module</button><a class="button ghost" href="${root}/modules/${nextModule}.html">${moduleId === 8 ? "Return to Module 1" : `Next: Module ${nextModule}`}</a></nav>
    </section>
  </div>`;

  const questionCards = [...document.querySelectorAll("[data-question]")];
  const writtenFields = [...document.querySelectorAll("textarea[data-save]")];

  function updateProgress() {
    const completedChecks = questionCards.filter(card => card.querySelector("input:checked")).length;
    const startedWriting = writtenFields.filter(field => field.value.trim().length >= 12).length;
    const total = questionCards.length + writtenFields.length;
    const started = completedChecks + startedWriting;
    document.querySelector("#progress-copy").textContent = `${started} of ${total} learning items started · ${completedChecks}/30 checks · ${startedWriting}/3 responses`;
    document.querySelector("#progress-bar").style.width = `${(started / total) * 100}%`;
  }

  questionCards.forEach(card => {
    const name = card.dataset.question;
    const saved = localStorage.getItem(`yr9-textiles:${name}`);
    if (saved !== null) card.querySelector(`input[value="${saved}"]`)?.setAttribute("checked","");
    card.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
      localStorage.setItem(`yr9-textiles:${name}`, input.value);
      const feedback = card.querySelector(".feedback");
      const correct = input.dataset.correct === "true";
      feedback.textContent = correct ? "Correct — the choice matches the explanation above." : `Not yet. Return to “${card.dataset.sectionTitle}” and compare the option with the purpose explained there.`;
      feedback.className = `feedback ${correct ? "good" : "try"}`;
      updateProgress();
    }));
  });

  writtenFields.forEach(field => {
    const key = `yr9-textiles:${field.dataset.save}`;
    if (localStorage.getItem(key) !== null) field.value = localStorage.getItem(key);
    field.addEventListener("input", () => { localStorage.setItem(key, field.value); updateProgress(); });
  });

  window.YR9_VIDEO_UI.bind(document.querySelector("#module-content"));

  document.querySelectorAll("[data-print]").forEach(button => button.addEventListener("click",()=>window.print()));
  updateProgress();
})();
