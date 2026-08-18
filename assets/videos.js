(function () {
  "use strict";

  const manifest = window.YR9_VIDEO_MANIFEST;
  const course = window.YR9_TEXTILES;
  const grid = document.querySelector("#video-grid");
  const videoCount = manifest.entries.filter(entry => entry.status === "video").length;
  const exceptionCount = manifest.entries.length - videoCount;
  const summary = document.querySelector("#video-summary");
  summary.innerHTML = `<strong>${videoCount} section-matched videos</strong><span>${exceptionCount} source-bound teacher exceptions</span><span>Checked ${manifest.checkedOn.split("-").reverse().join("/")}</span>`;

  grid.innerHTML = course.modules.map(module => {
    const entries = manifest.entries.filter(entry => entry.module === module.id);
    return `<section class="video-module-group" aria-labelledby="video-module-${module.id}">
      <header class="video-module-heading"><div><p class="kicker">Module ${module.id} · ${module.term}</p><h2 id="video-module-${module.id}">${module.title}</h2></div><a href="modules/${module.id}.html">Open Module ${module.id}</a></header>
      <div class="video-card-grid">${entries.map(entry => `<article class="video-library-card" id="video-m${entry.module}-${entry.anchor}">
        ${window.YR9_VIDEO_UI.panelMarkup(entry, { theoryLink: `modules/${entry.module}.html#${entry.anchor}` })}
      </article>`).join("")}</div>
    </section>`;
  }).join("");

  window.YR9_VIDEO_UI.bind(grid);
})();
