(function(){
  "use strict";
  const grid=document.querySelector("#module-grid");
  grid.innerHTML=window.YR9_TEXTILES.modules.map(module=>`<article class="module-card"><div class="module-number" aria-hidden="true">${module.id}</div><div class="module-card__body"><p class="kicker">${module.term}</p><h3>${module.title}</h3><p>${module.summary}</p><p class="module-outcomes"><strong>Outcomes taught:</strong> ${module.outcomes.join(", ")}</p><p class="module-content-map"><strong>Taught content:</strong> ${module.sections.map(section=>section.title).join("; ")}</p><a class="module-link" href="modules/${module.id}.html">Open Module ${module.id} <span aria-hidden="true">→</span></a></div></article>`).join("");
})();
