(function(){
  "use strict";
  const params=new URLSearchParams(location.search); const id=Number(params.get("module"))||1;
  const module=window.YR9_TEXTILES.modules.find(item=>item.id===id)||window.YR9_TEXTILES.modules[0];
  document.querySelector("#presentation-title").textContent=`Module ${module.id}: ${module.title}`;
  const slides=[
    ["Retrieval starter","Without notes, write three things you already know about this module."],
    ["Learning roadmap",module.summary],
    ...module.sections.map(section=>[section.title,`${section.theory.join(" ")} Key question: ${section.prompt}`]),
    ["Learning check","Choose two accurate ideas from today and explain why each matters."],
    ["Written-response model",`Restate the question, select course evidence, explain the link, and check that every claim is supported. Guide: ${module.sections[0].example}`],
    ["Exit ticket",`Name one idea you can explain, one practical decision that needs teacher direction, and your next evidence task: ${module.evidence}`]
  ];
  document.querySelector("#slides").innerHTML=slides.map((slide,index)=>`<section class="slide"><p class="kicker">Slide ${index+1} of ${slides.length}</p><h2>${slide[0]}</h2><p>${slide[1]}</p>${index===1?`<figure class="presentation-visual"><img src="${module.visual}" alt="${module.visualAlt}"><figcaption>${module.presentationVisualCaption} <a href="${module.visual}" target="_blank" rel="noopener">Open larger</a>.</figcaption></figure>`:""}</section>`).join("");
})();
