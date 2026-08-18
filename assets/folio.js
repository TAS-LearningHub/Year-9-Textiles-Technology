(function(){
  "use strict";

  const COURSE_ID = "yr9-textiles";
  const SCHEMA = "yr9-textiles-folio-v2";
  const FOLIO_PREFIX = `${COURSE_ID}:folio:v2`;
  const META_KEY = `${FOLIO_PREFIX}:meta`;
  const DB_NAME = "yr9-textiles-folio-v2";
  const DB_STORE = "photos";
  const MAX_IMAGE_BYTES = 12 * 1024 * 1024;

  const PROJECTS = [
    {
      id:"designer-pyjamas", short:"Designer Pyjamas", label:"Designer Pyjamas", status:"open",
      source:"Modules 2–5 · current teacher instructions control the formal task",
      note:"Use these cards to explain the user, design development, textile decisions, controlled production and evaluation. Exact due dates and submission arrangements remain in the current Classroom notice.",
      cards:[
        card("user-need","User, need and brief","Define who the pyjamas are for and what the design must achieve.","A clear user and need give every later choice a reason.","A short user profile, the need or opportunity, and the teacher-confirmed project direction.","Who is the user? What do they need from nightwear? What has your teacher confirmed?","The user is … They need … Therefore the design should …",3,"target-market","assets/visuals/designer-market.svg","A diagram connecting design decisions with an intended target market","The intended user should shape style, fit, materials, price and communication."),
        card("criteria","Success criteria","Write measurable criteria for function, appearance, comfort and quality.","Criteria turn broad intentions into checks you can use during making and evaluation.","Four to six criteria stated so that the finished item can be tested.","What would make the pyjamas successful for this user? How will you know?","The pyjamas will … This can be checked by …",2,"design-medium","assets/visuals/design-elements.svg","A design-elements diagram for textiles","Use design language to make each criterion specific."),
        card("inspiration","Inspiration and design direction","Explain how selected inspiration informs colour, shape, detail or mood.","A labelled inspiration source is stronger than a decorative collage.","A mood board or source image with captions that explain the design connection.","Which visual features will you adapt, and why do they suit the user?","I selected … The feature … could influence …",2,"inspiration-moodboard","assets/visuals/fashion-timeline.svg","A visual timeline showing how fashion directions develop","Trace a design idea to evidence instead of copying an existing garment."),
        card("concepts","Concepts, comparison and selection","Compare at least two developed ideas and justify the selected direction.","Comparison proves that the final concept was chosen deliberately.","Annotated concept sketches, strengths and limitations, and a justified selection.","Which idea best meets the criteria? What was improved before selection?","Concept … is stronger because … I changed … so that …",3,"design-development","assets/visuals/evaluation-cycle.svg","A cycle linking criteria, evidence, judgement and improvement","Return to the criteria when selecting and refining the final concept."),
        card("pattern","Commercial pattern decisions","Record the chosen pattern and explain the symbols or adjustments that guide accurate work.","Pattern evidence connects the design to an achievable production plan.","Teacher-confirmed pattern details, relevant symbols and any approved adjustment notes.","What pattern information controls size, grain, placement or construction?","The pattern shows … This matters because …",3,"commercial-pattern","assets/visuals/pattern-symbols.svg","Common commercial pattern symbols and their purposes","Only record adjustments approved for your actual pattern and project."),
        card("materials","Fibre, fabric and component choices","Justify the selected textile materials using performance evidence.","The finished result depends on how fibre, yarn, fabric and components behave in use and production.","Material samples or references plus reasons linked to comfort, care, appearance and construction.","What is the fabric structure and likely fibre content? Why does it suit the criteria?","I selected … because its … property supports …",4,"fibre-fabric","assets/visuals/fibre-yarn-fabric.svg","A flow from fibres through yarns to fabric structures","Use tested or source-based properties—not guesses about how a material will perform."),
        card("production-plan","Production plan and WHS readiness","Sequence the making stages and identify the teacher-confirmed safety controls.","Planning exposes dependencies and helps prevent rushed or unsafe work.","An ordered production sequence, required resources and local WHS controls.","What must happen first, what depends on it, and which controls apply?","Before I begin … I will … The confirmed control is …",5,"construction-methods","assets/visuals/safety-studio.svg","A safe textiles studio diagram showing teacher-controlled equipment use","Teacher demonstration and local procedures always override a generic web summary."),
        card("checkpoints","Making checkpoints and changes","Explain important production checkpoints, faults, fixes and approved changes.","Process evidence shows how quality was controlled—not only how the final item looks.","Dated or ordered checkpoint images with captions that name the operation and decision.","What changed after checking fit, alignment, seam quality or finish?","At this checkpoint … I noticed … I responded by …",5,"construction-methods","assets/visuals/pattern-symbols.svg","Pattern symbols used to plan accurate garment construction","Photograph the work or detail, not faces, names or identifiable school information."),
        card("resources-label","Resources, costing and label plan","Record traceable resources and plan the information needed on the product label.","Accurate records show what the item used and how product information supports care.","Equipment, consumables, traceable cost working and a teacher-confirmed label plan.","What was used? What did it cost? What information helps identify and care for the item?","The resource … cost … The label should communicate …",5,"resources-costing","assets/visuals/garment-label.svg","A garment label showing identification, fibre and care information","Do not invent quantities or costs—use the real project records."),
        card("evaluation","Testing, evaluation and improvement","Judge the finished result against the criteria and support each judgement with evidence.","Evaluation is credible when a test, photograph, observation or feedback supports the claim.","Criterion-by-criterion judgements, supporting evidence and one justified future change.","What worked, what evidence proves it, and what would you modify next time?","The criterion … was / was not met because … The evidence is … Next time …",8,"labels-evaluation","assets/visuals/evaluation-cycle.svg","A cycle linking criteria, evidence, judgement and improvement","Practical competence still requires teacher observation; the folio records supporting evidence only.")
      ]
    },
    {
      id:"designer-hoodie", short:"Designer Hoodie", label:"Designer Hoodie", status:"open",
      source:"Module 5 · learning project status and exact requirements are Teacher to confirm",
      note:"Use this shorter sequence only after your teacher confirms the Designer Hoodie direction. The website does not assume a separate assessment weighting, dimensions, materials or construction method.",
      cards:[
        card("brief","User and approved direction","Record the intended wearer, need and teacher-approved hoodie direction.","A source-bound brief prevents an internet example from becoming an invented classroom requirement.","User, need, context and the project facts explicitly confirmed by the teacher.","Who is it for? What should it achieve? Which facts have been confirmed?","The intended wearer is … The confirmed direction is …",3,"target-market","assets/visuals/designer-market.svg","A diagram connecting a designer's choices to an intended market","Leave dimensions, materials and methods as Teacher to confirm until supplied."),
        card("criteria","Success criteria","Define checks for function, comfort, appearance and construction quality.","Criteria guide design decisions and make the final evaluation fair.","Four to six project-specific, testable criteria.","How will you judge fit-for-purpose performance and finish?","The hoodie should … I will check this by …",2,"design-medium","assets/visuals/design-elements.svg","A visual guide to textile design elements","Use criteria that suit the actual teacher-approved direction."),
        card("concept","Concept and selection","Develop, compare and justify the selected hoodie concept.","The evidence should show development, not a copied fashion image.","Annotated sketches, comparison notes and a selected concept.","How does the selected concept respond to the user and criteria?","I selected … because … I refined …",3,"design-development","assets/visuals/evaluation-cycle.svg","A design evaluation cycle","Acknowledge references and adapt ideas into an original response."),
        card("textiles","Textile and component decisions","Justify materials and components using real performance evidence.","Material behaviour affects comfort, care, structure, appearance and production.","Samples or references plus reasons linked to criteria and confirmed construction.","Why are the selected textile and components suitable?","The property … supports … because …",4,"fibre-fabric","assets/visuals/fibre-yarn-fabric.svg","A diagram connecting fibre, yarn and fabric structure","Do not assume fibre content from appearance alone."),
        card("plan","Approved production and WHS plan","Sequence the confirmed operations and local safety controls.","A feasible, safe sequence depends on the actual pattern, equipment and teacher demonstration.","Ordered stages, resources, checkpoints and teacher-confirmed controls.","What is the safe order of work and where will quality be checked?","I will first … The checkpoint is … The confirmed control is …",5,"construction-methods","assets/visuals/safety-studio.svg","A safe textiles studio diagram","Record the local instruction you were given rather than inventing a generic method."),
        card("making","Making evidence and changes","Caption useful checkpoints and explain faults, fixes or approved changes.","Purposeful process evidence is more useful than many unlabelled photographs.","A small set of clear images or references with operation, observation and response.","What did this checkpoint prove and what did you do next?","This image shows … I checked … I changed …",5,"construction-methods","assets/visuals/pattern-symbols.svg","Pattern information used during accurate construction","Exclude faces, names and identifiable school details."),
        card("product-record","Resources and product information","Record actual resources, cost working and the approved product-information plan.","Traceable records support responsible production and care of the finished item.","Real project resources, cost calculation and label or care information.","What was actually used and what should the user know about the finished item?","The item uses … The total is … The user needs to know …",5,"resources-costing","assets/visuals/garment-label.svg","A product label showing identification, fibre and care information","Use real quantities and the teacher-confirmed label expectations."),
        card("evaluation","Test and evaluate","Judge the result against criteria using visible or recorded evidence.","An evaluation explains performance and learning; it is not just a satisfaction statement.","Supported judgements and one specific, achievable improvement.","What did the result prove, and what should change next time?","The evidence … shows … Next time I would … because …",8,"labels-evaluation","assets/visuals/evaluation-cycle.svg","A cycle linking evidence to evaluation and improvement","Teacher observation remains necessary for practical competence.")
      ]
    },
    {
      id:"fashion-magazine", short:"Fashion magazine", label:"Fashion-era and designer magazine", status:"open",
      source:"Module 6 and Magazine Studio · two-part magazine evidence",
      note:"This sequence keeps the fashion-era article and designer interview connected while preserving their different evidence needs. Clearly matched writing from the older Magazine Studio is copied here once and remains in its original location.",
      cards:[
        card("era-brief","Fashion-era article direction","Confirm the era and write a focused angle for the article.","A clear angle helps research answer a question instead of becoming a list of facts.","Confirmed era, article purpose and the feature or influence you will investigate.","What will the reader understand after reading this article?","This article investigates … to show …",6,"fashion-eras","assets/visuals/fashion-timeline.svg","A timeline of changing fashion contexts","Confirm the era with your teacher before building the final layout.",false),
        card("era-evidence","Historical context and clothing evidence","Connect context with typical clothing features and wearers.","The article should explain how society, technology and materials shaped fashion.","Traceable notes on context, silhouette, materials, details and relevant wearer examples.","Which conditions influenced the clothing, and what evidence shows this?","During this era … This affected clothing by … Evidence includes …",6,"fashion-eras","assets/visuals/fashion-era-influence.svg","A chain from historical context to era features and later influence","Record source details while researching, not after the page is designed.",false),
        card("era-influence","Contemporary influence explained","Explain how one historical feature has been adapted in contemporary fashion.","Analysis shows a relationship and change—not merely that the feature appeared again.","Earlier feature, contemporary example, visual evidence and explanation of adaptation.","What stayed recognisable and what changed for the new context?","The earlier feature … appears in … It has been adapted by …",6,"fashion-eras","assets/visuals/fashion-era-influence.svg","A visual chain showing historical influence on contemporary design","Use captioned evidence for both the historical and contemporary example."),
        card("designer-profile","Designer practice and target market","Build an evidence-based profile of the confirmed designer.","Background, focus, style, inspiration and market explain how a practice operates.","Short, traceable notes under each required designer heading.","What decisions make this designer's practice recognisable and suitable for its market?","The designer is known for … This suits the target market because …",6,"designer-practice","assets/visuals/designer-market.svg","A comparison of production systems and target markets","Separate sourced facts from your own clearly labelled interpretation.",false),
        card("interview","Purposeful interview plan","Write questions and evidence-based responses that reveal design practice.","Open questions create explanation; one-word questions do not.","A logical question-and-response sequence covering the confirmed evidence areas.","What would help a reader understand the designer's influences and decisions?","What influenced …? How does …? The evidence suggests …",6,"designer-practice","assets/visuals/respectful-magazine.svg","A traceable chain from claim to image, caption, source and explanation","Do not invent quotations or present your own words as the designer's direct speech.",false),
        card("sources-layout","Images, captions, references and layout","Plan a readable two-part magazine with traceable, respectful evidence.","Visual polish only helps when hierarchy, accuracy, attribution and context remain clear.","Page plan, intended images, explanatory captions and APA source details.","How will each image support a claim, and can the reader trace its source?","This image supports … The caption will explain … The source details are …",6,"magazine-evidence","assets/visuals/magazine-evidence-map.svg","A two-page evidence plan for the fashion-era article and designer interview","Respect cultural knowledge and creative ownership; do not copy distinctive work into a new design.")
      ]
    },
    {
      id:"textile-art", short:"Textile Art", label:"Textile Art — In the Garden", status:"open",
      source:"Module 7 · Formal Task 3 · In the Garden",
      note:"Use these cards to collect the issued Task 3 folio evidence. The formal notification controls the 40 × 40 cm maximum, at least four approved decoration techniques and the 45-mark folio allocation.",
      cards:[
        card("brief","Design brief and criteria","Explain the In the Garden opportunity and turn the issued requirements into clear success criteria.","A precise brief keeps the artwork, evidence and evaluation aligned with the formal task.","A concise brief plus measurable criteria covering theme, display, size, technique use and quality.","What must the artwork communicate and which issued limits control the response?","I will design and produce … inspired by … It will be successful when …",7,"garden-design","assets/visuals/sections/m2-inspiration-moodboard.svg","A process connecting observations, colour, texture and imagery to original ideas","Keep the finished artwork within 40 × 40 cm and plan at least four teacher-approved decoration techniques."),
        card("inspiration","Inspiration and mood board","Collect and annotate garden imagery, colour, texture and form that can inform an original artwork.","Annotations turn a decorative collage into usable design evidence.","A coherent mood board with captions explaining the intended influence of selected sources.","Which features will you adapt, and how will they affect the design?","The feature … suggests … I could adapt it by …",7,"garden-design","assets/visuals/sections/m2-inspiration-moodboard.svg","A mood-board evidence flow for developing an original textile direction","Acknowledge sources and transform ideas rather than copying an existing artwork."),
        card("ideas","Design ideas, comparison and selection","Develop at least two ideas, compare them and justify the selected direction.","Comparison shows that the final response was chosen and improved deliberately.","Annotated ideas, strengths and limitations, and a rendered final design with techniques labelled.","Which idea best meets the brief and how did you improve it?","I selected … because … I refined … so that …",7,"garden-design","assets/visuals/design-elements.svg","A visual guide to colour, line, shape, texture and other textile design elements","Show where each selected decoration technique contributes to the visual intention."),
        card("samples","Technique experiments","Record labelled samples of the approved decoration techniques and evaluate their suitability.","Trials provide evidence for choices about appearance, control, materials and production.","Sample images or references naming the process, materials, result and intended use.","What did each trial prove and where could it be used in the artwork?","The … sample produced … This suits … because …",7,"techniques","assets/visuals/sections/m7-technique-sample.svg","A technique-sample record linking process, materials, result and intended use","Follow teacher demonstrations and product instructions for every practical process."),
        card("production","Production drawing and making evidence","Plan the construction order and capture purposeful evidence of important making decisions.","A drawing and selected checkpoints show how the design was translated into a controlled practical outcome.","Labelled production drawing, ordered sequence, resources and concise checkpoint captions.","What operation is shown, what did you check and what did you change?","This checkpoint shows … I checked … I responded by …",7,"art-production","assets/visuals/sections/m7-production-evidence.svg","A sequence from production drawing through making evidence to evaluation","Photograph the work and details, not faces, names or identifiable school information."),
        card("evaluation","Final evaluation","Judge the finished artwork and folio against the brief and criteria using specific evidence.","Supported judgement demonstrates what succeeded, what changed and what could improve.","Criterion-by-criterion judgements, evidence from the outcome or process, and justified improvements.","What evidence proves each criterion was met or not met?","The criterion … was / was not met because … The evidence is … Next time …",7,"art-production","assets/visuals/evaluation-cycle.svg","A cycle linking criteria, evidence, judgement and improvement","Practical competence still requires teacher observation; the folio stores supporting evidence only.")
      ]
    },
    {
      id:"textiles-gifts", short:"Textiles as Gifts", label:"Textiles as Gifts — Teacher to confirm", status:"blocked",
      source:"Module 8 · free-choice destination only",
      note:"This folio is intentionally locked. The source names Textiles as Gifts but does not supply a controlling project plan. The recipient, need, materials, dimensions, process, safety controls and assessment status must be confirmed by the teacher first.", cards:[]
    }
  ];

  function card(id,title,action,why,evidence,prompt,starter,module,anchor,visual,alt,caption,photo=true){
    return {id,title,action,why,evidence,prompt,starter,module,anchor,visual,alt,caption,photo};
  }

  const elements = {
    student:document.querySelector("#folio-student"), className:document.querySelector("#folio-class"),
    project:document.querySelector("#folio-project"), note:document.querySelector("#folio-project-note"),
    entries:document.querySelector("#folio-entries"), legacy:document.querySelector("#legacy-entries"),
    save:document.querySelector("#folio-save-state"), progress:document.querySelector("#folio-progress-text"),
    blank:document.querySelector("#count-blank"), started:document.querySelector("#count-started"), evidence:document.querySelector("#count-evidence")
  };
  const liveUrls = [];
  let dbPromise;
  let saveTimer;
  let meta = loadJson(META_KEY,{student:"",className:"",selected:"designer-pyjamas",migratedMagazine:false});

  function loadJson(key,fallback){
    try { const value=JSON.parse(localStorage.getItem(key)); return value && typeof value==="object" ? value : fallback; }
    catch { return fallback; }
  }
  function projectKey(id){ return `${FOLIO_PREFIX}:project:${id}`; }
  function emptyProject(){ return {version:2,updated:null,cards:{}}; }
  function loadProject(id){ return loadJson(projectKey(id),emptyProject()); }
  function saveProject(id,state){ state.version=2; state.updated=new Date().toISOString(); localStorage.setItem(projectKey(id),JSON.stringify(state)); announceSave(); }
  function saveMeta(){ localStorage.setItem(META_KEY,JSON.stringify(meta)); announceSave(); }
  function announceSave(message="Saved on this device"){
    elements.save.textContent="Saving…";
    clearTimeout(saveTimer);
    saveTimer=setTimeout(()=>{elements.save.textContent=message;},180);
  }
  function escapeHtml(value){ return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char])); }
  function humaniseLegacyKey(key){ return key.replace(`${COURSE_ID}:`,"").split(":").map(part=>part.replaceAll("-"," ")).join(" · "); }

  function openDb(){
    if(!("indexedDB" in window)) return Promise.reject(new Error("Photo storage is unavailable in this browser."));
    if(!dbPromise) dbPromise=new Promise((resolve,reject)=>{
      const request=indexedDB.open(DB_NAME,1);
      request.onupgradeneeded=()=>{ if(!request.result.objectStoreNames.contains(DB_STORE)) request.result.createObjectStore(DB_STORE,{keyPath:"id"}); };
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error || new Error("Could not open photo storage."));
    });
    return dbPromise;
  }
  async function photoRequest(mode,operation){
    const db=await openDb();
    return new Promise((resolve,reject)=>{
      const transaction=db.transaction(DB_STORE,mode);
      const store=transaction.objectStore(DB_STORE);
      const request=operation(store);
      request.onsuccess=()=>resolve(request.result);
      request.onerror=()=>reject(request.error || new Error("Photo storage failed."));
    });
  }
  const getPhoto=id=>photoRequest("readonly",store=>store.get(id));
  const getPhotos=()=>photoRequest("readonly",store=>store.getAll());
  const putPhoto=photo=>photoRequest("readwrite",store=>store.put(photo));
  const deletePhoto=id=>photoRequest("readwrite",store=>store.delete(id));
  async function clearPhotos(){
    try { await photoRequest("readwrite",store=>store.clear()); }
    catch(error){ console.warn(error); }
  }
  function photoId(projectId,cardId){ return `${projectId}:${cardId}`; }

  function migrateMagazine(){
    if(meta.migratedMagazine) return;
    const mapping={
      "era-brief":["activity:magazine:era-focus"],
      "era-evidence":["activity:magazine:era-context","activity:magazine:era-features"],
      "era-influence":["activity:magazine:era-influence"],
      "designer-profile":["activity:magazine:designer-focus","activity:magazine:designer-evidence"],
      "interview":["activity:magazine:interview-plan"],
      "sources-layout":["activity:magazine:sources-layout"]
    };
    const state=loadProject("fashion-magazine");
    let changed=false;
    Object.entries(mapping).forEach(([cardId,parts])=>{
      const existing=state.cards[cardId] || {};
      if(existing.response?.trim()) return;
      const values=parts.map(part=>localStorage.getItem(`${COURSE_ID}:${part}`)?.trim()).filter(Boolean);
      if(values.length){ state.cards[cardId]={...existing,response:values.join("\n\n")}; changed=true; }
    });
    if(changed) saveProject("fashion-magazine",state);
    meta.migratedMagazine=true;
    meta.migratedAt=new Date().toISOString();
    saveMeta();
  }

  function renderLegacy(){
    const entries=[];
    for(let index=0;index<localStorage.length;index++){
      const key=localStorage.key(index);
      if(!key || !key.startsWith(`${COURSE_ID}:`) || key.startsWith(FOLIO_PREFIX)) continue;
      if(!(key.includes(":response") || key.includes(":activity"))) continue;
      const value=localStorage.getItem(key);
      if(value?.trim()) entries.push([key,value]);
    }
    entries.sort((a,b)=>a[0].localeCompare(b[0]));
    elements.legacy.innerHTML=entries.length ? entries.map(([key,value])=>`<article><h3>${escapeHtml(humaniseLegacyKey(key))}</h3><p>${escapeHtml(value).replace(/\n/g,"<br>")}</p></article>`).join("") : "<p>No older written responses are saved in this browser.</p>";
  }

  function cardState(state,id){ return state.cards[id] || {response:"",reference:"",caption:"",ready:false}; }
  async function renderProject(){
    liveUrls.splice(0).forEach(url=>URL.revokeObjectURL(url));
    const project=PROJECTS.find(item=>item.id===meta.selected) || PROJECTS[0];
    elements.note.innerHTML=`<div class="card ${project.status==="blocked"?"warning":"folio-project-summary"}"><div><p class="kicker">${escapeHtml(project.source)}</p><h2>${escapeHtml(project.short)}</h2><p>${escapeHtml(project.note)}</p></div>${project.status==="blocked"?'<span class="folio-lock" aria-hidden="true">Teacher to confirm</span>':`<a class="button ghost" href="modules/${project.cards[0]?.module || 1}.html">Open supporting module</a>`}</div>`;
    if(project.status==="blocked"){
      elements.entries.innerHTML="";
      elements.progress.textContent="This project folio is locked until the controlling brief is confirmed.";
      elements.blank.textContent="0"; elements.started.textContent="0"; elements.evidence.textContent="0";
      return;
    }
    const state=loadProject(project.id);
    elements.entries.innerHTML=project.cards.map((item,index)=>folioCardHtml(project,item,index,cardState(state,item.id))).join("");
    for(const item of project.cards){ await renderPhoto(project.id,item.id); }
    updateProgress(project,state);
  }

  function folioCardHtml(project,item,index,value){
    const status=value.ready?"Evidence added":((value.response||value.reference||value.caption)?"Started":"Blank");
    return `<article class="folio-card card" id="folio-${project.id}-${item.id}" data-card-id="${item.id}">
      <div class="folio-card__number" aria-hidden="true">${String(index+1).padStart(2,"0")}</div>
      <div class="folio-card__content">
        <header class="folio-card__header"><div><p class="kicker">${escapeHtml(item.action)}</p><h2>${escapeHtml(item.title)}</h2></div><span class="folio-card__status" data-card-status>${status}</span></header>
        <div class="folio-card__layout">
          <figure class="folio-card__visual"><img src="${item.visual}" alt="${escapeHtml(item.alt)}"><figcaption>${escapeHtml(item.caption)} <a href="${item.visual}" target="_blank" rel="noopener">Open larger</a>.</figcaption></figure>
          <div class="folio-card__task">
            <div class="folio-card__evidence"><strong>Evidence to add</strong><p>${escapeHtml(item.evidence)}</p></div>
            <label for="response-${project.id}-${item.id}">${escapeHtml(item.prompt)}</label>
            <textarea id="response-${project.id}-${item.id}" data-folio-field="response" placeholder="${escapeHtml(item.starter)}">${escapeHtml(value.response||"")}</textarea>
            <p class="sentence-starter"><strong>Sentence starter:</strong> ${escapeHtml(item.starter)}</p>
            <label for="reference-${project.id}-${item.id}">Evidence reference <span>(optional)</span></label>
            <input id="reference-${project.id}-${item.id}" type="text" data-folio-field="reference" value="${escapeHtml(value.reference||"")}" placeholder="For example: sketch page 2, sample A, photo 3 or source details">
            ${item.photo?photoControls(project,item,value):""}
            <label class="folio-ready"><input type="checkbox" data-folio-field="ready"${value.ready?" checked":""}> <span>I have added the evidence described for this card.</span></label>
            <details class="folio-support"><summary>Why this matters and where to get help</summary><p><strong>Why:</strong> ${escapeHtml(item.why)}</p><p><a href="modules/${item.module}.html#${item.anchor}">Open the supporting course section</a>.</p></details>
          </div>
        </div>
      </div>
    </article>`;
  }

  function photoControls(project,item,value){
    return `<div class="folio-photo-tool">
      <div class="folio-photo-tool__heading"><strong>Purposeful image evidence</strong><span>Optional · one image</span></div>
      <p>Add a sketch, sample, checkpoint or finished-detail image only when it proves this card's decision or process. Exclude faces, names and school-identifying details.</p>
      <label class="button ghost folio-photo-add" for="photo-${project.id}-${item.id}">Add or replace image</label>
      <input id="photo-${project.id}-${item.id}" type="file" accept="image/jpeg,image/png,image/webp,image/gif" data-photo-input hidden>
      <div class="folio-photo-preview" data-photo-preview><p>No image added.</p></div>
      <label for="caption-${project.id}-${item.id}">Image caption <span>(required when an image is added)</span></label>
      <textarea class="folio-caption" id="caption-${project.id}-${item.id}" data-folio-field="caption" placeholder="What does this image show, what was checked, and why does it matter?">${escapeHtml(value.caption||"")}</textarea>
    </div>`;
  }

  async function renderPhoto(projectId,cardId){
    const cardElement=document.querySelector(`[data-card-id="${cardId}"]`);
    const preview=cardElement?.querySelector("[data-photo-preview]");
    if(!preview) return;
    try {
      const photo=await getPhoto(photoId(projectId,cardId));
      if(!photo?.blob){ preview.innerHTML="<p>No image added.</p>"; return; }
      const url=URL.createObjectURL(photo.blob); liveUrls.push(url);
      preview.innerHTML=`<img src="${url}" alt="Student-added evidence preview"><div><strong>${escapeHtml(photo.name||"Evidence image")}</strong><button class="button ghost" type="button" data-remove-photo>Remove image</button></div>`;
    } catch {
      preview.innerHTML='<p class="folio-error">Photo storage is unavailable in this browser. Your written folio will still save.</p>';
    }
  }

  async function hasPhoto(projectId,cardId){
    try { return Boolean((await getPhoto(photoId(projectId,cardId)))?.blob); }
    catch { return false; }
  }
  async function updateProgress(project,state){
    const counts={blank:0,started:0,evidence:0};
    for(const item of project.cards){
      const value=cardState(state,item.id);
      const photo=await hasPhoto(project.id,item.id);
      const started=Boolean(value.response?.trim() || value.reference?.trim() || value.caption?.trim() || photo);
      if(value.ready) counts.evidence++; else if(started) counts.started++; else counts.blank++;
      const element=document.querySelector(`[data-card-id="${item.id}"] [data-card-status]`);
      if(element) element.textContent=value.ready?"Evidence added":(started?"Started":"Blank");
    }
    elements.blank.textContent=counts.blank; elements.started.textContent=counts.started; elements.evidence.textContent=counts.evidence;
    elements.progress.textContent=`${counts.evidence} of ${project.cards.length} cards marked as evidence added. This is a student-controlled record, not a mark or teacher sign-off.`;
  }

  function updateCardFromElement(cardElement){
    const project=PROJECTS.find(item=>item.id===meta.selected);
    if(!project || project.status!=="open") return;
    const cardId=cardElement.dataset.cardId;
    const state=loadProject(project.id);
    const value=cardState(state,cardId);
    cardElement.querySelectorAll("[data-folio-field]").forEach(field=>{
      value[field.dataset.folioField]=field.type==="checkbox" ? field.checked : field.value;
    });
    state.cards[cardId]=value;
    saveProject(project.id,state);
    updateProgress(project,state);
  }

  async function handlePhotoInput(input){
    const file=input.files?.[0]; if(!file) return;
    if(!file.type.startsWith("image/")){ alert("Choose a JPEG, PNG, WebP or GIF image."); input.value=""; return; }
    if(file.size>MAX_IMAGE_BYTES){ alert("That image is larger than 12 MB. Use a smaller image before adding it to the folio."); input.value=""; return; }
    const cardElement=input.closest("[data-card-id]");
    try {
      await putPhoto({id:photoId(meta.selected,cardElement.dataset.cardId),blob:file,name:file.name,type:file.type,updated:new Date().toISOString()});
      announceSave("Image saved on this device");
      await renderProject();
      document.querySelector(`[data-card-id="${cardElement.dataset.cardId}"]`)?.scrollIntoView({block:"center"});
    } catch(error){ alert(error.message || "The image could not be saved in this browser."); }
  }

  async function removeCardPhoto(cardElement){
    if(!confirm("Remove this image from the folio card on this device? The written response and caption will stay.")) return;
    await deletePhoto(photoId(meta.selected,cardElement.dataset.cardId));
    announceSave("Image removed from this device");
    await renderProject();
  }

  function collectLegacyValues(){
    const values={};
    for(let index=0;index<localStorage.length;index++){
      const key=localStorage.key(index);
      if(key?.startsWith(`${COURSE_ID}:`) && !key.startsWith(FOLIO_PREFIX)) values[key]=localStorage.getItem(key);
    }
    return values;
  }
  function blobToDataUrl(blob){ return new Promise((resolve,reject)=>{ const reader=new FileReader(); reader.onload=()=>resolve(reader.result); reader.onerror=()=>reject(reader.error); reader.readAsDataURL(blob); }); }
  function dataUrlToBlob(dataUrl){
    const [head,data]=String(dataUrl).split(",");
    if(!head?.startsWith("data:image/") || !data) throw new Error("A restored image is invalid.");
    const binary=atob(data); const bytes=new Uint8Array(binary.length);
    for(let index=0;index<binary.length;index++) bytes[index]=binary.charCodeAt(index);
    return new Blob([bytes],{type:head.match(/^data:([^;]+)/)?.[1] || "image/jpeg"});
  }
  async function downloadBackup(){
    elements.save.textContent="Preparing backup…";
    const projects={};
    PROJECTS.filter(item=>item.status==="open").forEach(item=>{ projects[item.id]=loadProject(item.id); });
    let photos=[];
    try {
      const stored=await getPhotos();
      photos=await Promise.all(stored.map(async photo=>({id:photo.id,name:photo.name,type:photo.type,updated:photo.updated,dataUrl:await blobToDataUrl(photo.blob)})));
    } catch(error){
      alert("The photo store could not be read, so the backup was not downloaded. Your written folio is still saved on this device.");
      elements.save.textContent="Backup stopped—photos could not be read"; return;
    }
    const data={schema:SCHEMA,version:2,courseId:COURSE_ID,course:"Year 9 Textiles Technology",exportedAt:new Date().toISOString(),includesPhotos:true,meta,projects,photos,legacyValues:collectLegacyValues()};
    const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));
    const link=document.createElement("a"); link.href=url; link.download=`year-9-textiles-folio-backup-${new Date().toISOString().slice(0,10)}.json`; link.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000); elements.save.textContent="Backup downloaded";
  }

  function sanitiseCard(value){
    if(!value || typeof value!=="object") return {response:"",reference:"",caption:"",ready:false};
    const clean={};
    ["response","reference","caption"].forEach(key=>{clean[key]=typeof value[key]==="string"?value[key].slice(0,100000):"";});
    clean.ready=value.ready===true; return clean;
  }
  async function restoreV2(data){
    if(data.schema!==SCHEMA || data.courseId!==COURSE_ID || data.version!==2 || !data.projects || typeof data.projects!=="object") throw new Error("This is not a valid Year 9 Textiles folio version 2 backup.");
    if(!Array.isArray(data.photos)) throw new Error("The backup says it includes photos but the photo list is missing.");
    const restoredPhotos=data.photos.map(item=>{
      if(!item || typeof item.id!=="string" || !/^[a-z0-9-]+:[a-z0-9-]+$/.test(item.id) || typeof item.dataUrl!=="string") throw new Error("A restored photo record is invalid.");
      const blob=dataUrlToBlob(item.dataUrl);
      if(blob.size>MAX_IMAGE_BYTES) throw new Error("A restored image exceeds the 12 MB limit.");
      return {id:item.id,blob,name:String(item.name||"Restored evidence image").slice(0,300),type:blob.type,updated:new Date().toISOString()};
    });
    if(!confirm("Restore this backup and replace the current version 2 folio on this device? Older module and activity responses will be preserved unless the backup contains updated copies.")) return false;
    PROJECTS.filter(project=>project.status==="open").forEach(project=>{
      const supplied=data.projects[project.id]; if(!supplied) return;
      const state=emptyProject();
      project.cards.forEach(cardItem=>{ if(supplied.cards?.[cardItem.id]) state.cards[cardItem.id]=sanitiseCard(supplied.cards[cardItem.id]); });
      state.updated=typeof supplied.updated==="string"?supplied.updated:new Date().toISOString();
      localStorage.setItem(projectKey(project.id),JSON.stringify(state));
    });
    if(data.meta && typeof data.meta==="object"){
      meta={student:typeof data.meta.student==="string"?data.meta.student.slice(0,300):"",className:typeof data.meta.className==="string"?data.meta.className.slice(0,300):"",selected:PROJECTS.some(item=>item.id===data.meta.selected)?data.meta.selected:"designer-pyjamas",migratedMagazine:true};
      localStorage.setItem(META_KEY,JSON.stringify(meta));
    }
    if(data.legacyValues && typeof data.legacyValues==="object") Object.entries(data.legacyValues).forEach(([key,value])=>{ if(key.startsWith(`${COURSE_ID}:`) && !key.startsWith(FOLIO_PREFIX) && typeof value==="string") localStorage.setItem(key,value); });
    await clearPhotos();
    for(const photo of restoredPhotos) await putPhoto(photo);
    return true;
  }
  function restoreLegacy(data){
    if(!data || typeof data!=="object" || !data.values || typeof data.values!=="object") throw new Error("This is not a recognised Year 9 Textiles backup.");
    if(!confirm("Restore the older course responses in this backup? Existing version 2 project cards will stay in place.")) return false;
    Object.entries(data.values).forEach(([key,value])=>{ if(key.startsWith(`${COURSE_ID}:`) && !key.startsWith(FOLIO_PREFIX) && typeof value==="string") localStorage.setItem(key,value); });
    meta.migratedMagazine=false; saveMeta(); migrateMagazine(); return true;
  }
  async function handleRestore(file){
    try {
      if(file.size>80*1024*1024) throw new Error("That backup is too large to restore safely in the browser.");
      const data=JSON.parse(await file.text());
      const restored=data.schema===SCHEMA ? await restoreV2(data) : restoreLegacy(data);
      if(restored){ initialiseControls(); renderLegacy(); await renderProject(); elements.save.textContent="Backup restored on this device"; }
    } catch(error){ alert(error.message || "That file is not a valid Year 9 Textiles folio backup."); }
  }

  async function resetFolio(){
    if(!confirm("Reset the entire version 2 Textiles folio on this device? This removes all project-card writing and images. Older module and activity responses will remain.")) return;
    PROJECTS.forEach(project=>localStorage.removeItem(projectKey(project.id)));
    localStorage.removeItem(META_KEY); await clearPhotos();
    meta={student:"",className:"",selected:"designer-pyjamas",migratedMagazine:true,migratedAt:new Date().toISOString()}; saveMeta(); initialiseControls(); await renderProject(); elements.save.textContent="Version 2 folio reset";
  }

  function initialiseControls(){
    elements.project.innerHTML=PROJECTS.map(project=>`<option value="${project.id}">${escapeHtml(project.label)}</option>`).join("");
    elements.student.value=meta.student||""; elements.className.value=meta.className||""; elements.project.value=meta.selected;
  }
  function preparePrint(){
    document.querySelectorAll(".folio-card textarea").forEach(field=>{
      field.dataset.screenHeight=field.style.height || "";
      field.style.height=`${Math.max(field.scrollHeight+8,72)}px`;
    });
    document.querySelectorAll('input[data-folio-field="reference"]').forEach(field=>{
      const label=document.querySelector(`label[for="${field.id}"]`);
      const empty=!field.value.trim();
      field.classList.toggle("folio-print-empty",empty);
      label?.classList.toggle("folio-print-empty",empty);
    });
    document.querySelectorAll(".folio-photo-tool").forEach(tool=>{
      const hasImage=Boolean(tool.querySelector(".folio-photo-preview img"));
      const caption=tool.querySelector('textarea[data-folio-field="caption"]')?.value.trim();
      tool.classList.toggle("folio-print-empty",!hasImage && !caption);
    });
    elements.save.textContent="Saved on this device";
  }
  function finishPrint(){
    document.querySelectorAll(".folio-card textarea").forEach(field=>{
      field.style.height=field.dataset.screenHeight || "";
      delete field.dataset.screenHeight;
    });
    document.querySelectorAll(".folio-print-empty").forEach(element=>element.classList.remove("folio-print-empty"));
  }
  function bindEvents(){
    elements.student.addEventListener("input",()=>{meta.student=elements.student.value;saveMeta();});
    elements.className.addEventListener("input",()=>{meta.className=elements.className.value;saveMeta();});
    elements.project.addEventListener("change",async()=>{meta.selected=elements.project.value;saveMeta();await renderProject();history.replaceState(null,"",`?project=${encodeURIComponent(meta.selected)}`);});
    elements.entries.addEventListener("input",event=>{const cardElement=event.target.closest("[data-card-id]");if(cardElement && event.target.matches("[data-folio-field]"))updateCardFromElement(cardElement);});
    elements.entries.addEventListener("change",event=>{
      const cardElement=event.target.closest("[data-card-id]"); if(!cardElement)return;
      if(event.target.matches("[data-photo-input]")) handlePhotoInput(event.target); else if(event.target.matches("[data-folio-field]")) updateCardFromElement(cardElement);
    });
    elements.entries.addEventListener("click",event=>{const button=event.target.closest("[data-remove-photo]");if(button)removeCardPhoto(button.closest("[data-card-id]"));});
    document.querySelector("#backup").addEventListener("click",downloadBackup);
    document.querySelector("#restore").addEventListener("change",event=>{const file=event.target.files?.[0]; if(file)handleRestore(file); event.target.value="";});
    document.querySelector("#reset-folio").addEventListener("click",resetFolio);
    window.addEventListener("beforeprint",preparePrint);
    window.addEventListener("afterprint",finishPrint);
  }

  async function start(){
    const requested=new URLSearchParams(location.search).get("project");
    if(requested && PROJECTS.some(project=>project.id===requested)) meta.selected=requested;
    migrateMagazine(); initialiseControls(); renderLegacy(); bindEvents(); await renderProject();
  }
  start();
})();
