(function () {
  "use strict";
  const key = document.body.dataset.notification;
  const notice = window.YR9_ASSESSMENT_NOTICES && window.YR9_ASSESSMENT_NOTICES[key];
  const target = document.querySelector("[data-notification-content]");
  if (!target || !notice) return;

  document.title = `${notice.officialName} | Formal Assessment Notification`;
  const list = items => items.map(item => `<li>${item}</li>`).join("");
  const outcomeRows = notice.outcomes.map(item => `<tr><th scope="row">${item.code}</th><td>${item.text}</td></tr>`).join("");
  const dateList = items => items.map(item => `<span>${item}</span>`).join("");
  const criteria = notice.criteria.map(group => {
    if (group.rows) {
      const rows = group.rows.map(([label, marks]) => `<tr><th scope="row">${label}</th><td>${marks}</td></tr>`).join("");
      return `<section class="notice-criteria-group"><h3>${group.group} <span>${group.total} marks</span></h3><div class="notice-table-scroll"><table class="notice-marks-table"><thead><tr><th scope="col">Criterion</th><th scope="col">Marks</th></tr></thead><tbody>${rows}<tr class="notice-total"><th scope="row">Total</th><td>${group.total}</td></tr></tbody></table></div></section>`;
    }
    const bands = group.bands.map(band => `<article class="notice-band"><h4>${band.label}</h4><p>${band.text}</p></article>`).join("");
    return `<section class="notice-criteria-group"><h3>${group.group} <span>${group.total} marks</span></h3><div class="notice-band-grid">${bands}</div></section>`;
  }).join("");

  target.innerHTML = `
    <header class="notice-title-block">
      <div>
        <p class="kicker">Wagga Wagga High School · Year 9 Textiles Technology</p>
        <p class="notice-formal-label">Formal Assessment Task Notification</p>
        <h1>${notice.title}</h1>
        <p>Task ${notice.taskNumber} · ${notice.officialName}</p>
      </div>
      <div class="notice-state">
        <span class="assessment-status assessment-status--verified">Formal assessment</span>
        <strong>Source year ${notice.year}</strong>
      </div>
    </header>

    <section class="notice-identity" aria-label="Essential task information">
      <dl class="notice-essential-grid">
        <div><dt>Task</dt><dd>${notice.taskNumber} · ${notice.officialName}</dd></div>
        <div><dt>Teacher</dt><dd>${notice.teacher}</dd></div>
        <div><dt>Issue</dt><dd>${dateList(notice.issue)}</dd></div>
        <div><dt>Due</dt><dd>${dateList(notice.due)}</dd></div>
        <div><dt>Weighting</dt><dd>${notice.weighting}</dd></div>
        <div><dt>Marks</dt><dd>${notice.marks}</dd></div>
      </dl>
    </section>

    <section class="notice-section" aria-labelledby="summary-title">
      <div class="notice-section__heading"><span>1</span><div><p class="kicker">Task purpose</p><h2 id="summary-title">What you are being assessed on</h2></div></div>
      <p class="notice-lead">${notice.purpose}</p>
    </section>

    <section class="notice-section" aria-labelledby="outcomes-title">
      <div class="notice-section__heading"><span>2</span><div><p class="kicker">Syllabus outcomes</p><h2 id="outcomes-title">Outcomes assessed</h2></div></div>
      <div class="notice-table-scroll"><table class="notice-outcomes-table"><tbody>${outcomeRows}</tbody></table></div>
    </section>

    <section class="notice-section notice-two-column" aria-labelledby="outline-title">
      <div>
        <div class="notice-section__heading"><span>3</span><div><p class="kicker">Task outline</p><h2 id="outline-title">What to do</h2></div></div>
        <ol>${list(notice.outline)}</ol>
      </div>
      <div>
        <div class="notice-section__heading"><span>4</span><div><p class="kicker">Required evidence</p><h2>What to submit</h2></div></div>
        <ul>${list(notice.evidence)}</ul>
      </div>
    </section>

    <section class="notice-section" aria-labelledby="criteria-title">
      <div class="notice-section__heading"><span>5</span><div><p class="kicker">Marking information</p><h2 id="criteria-title">Assessment criteria and marks</h2></div></div>
      <div class="notice-criteria">${criteria}</div>
    </section>

    <section class="notice-section notice-two-column" aria-labelledby="submission-title">
      <div>
        <div class="notice-section__heading"><span>6</span><div><p class="kicker">Submission</p><h2 id="submission-title">How to submit</h2></div></div>
        <p>${notice.submission}</p>
      </div>
      <div>
        <div class="notice-section__heading"><span>7</span><div><p class="kicker">Support</p><h2>Help and adjustments</h2></div></div>
        <p>${notice.support}</p>
      </div>
    </section>

    <section class="notice-section notice-policy" aria-labelledby="policy-title">
      <div class="notice-section__heading"><span>8</span><div><p class="kicker">School assessment policy</p><h2 id="policy-title">Absence, illness, extensions and appeals</h2></div></div>
      <p>Follow the procedures in the assessment handbook that applies to your cohort. Speak to your teacher or the faculty Head Teacher as early as possible if illness, absence or another issue may affect completion.</p>
      <p><a href="https://sites.google.com/education.nsw.gov.au/wwhsstudentparentinformation/curriculum-information/assessment-handbooks" target="_blank" rel="noopener">Open the current WWHS Assessment Handbooks page</a></p>
    </section>

    <footer class="notice-source" aria-labelledby="source-title">
      <h2 id="source-title">Source and verification</h2>
      <p><strong>Issued task source:</strong> ${notice.sourceTitle}</p>
      <p><strong>Verified:</strong> 18 August 2026 against the teacher-controlled 2024 task pack and Textiles Technology 7–10 (2019) outcome wording.</p>
      <p><strong>Course context:</strong> This notice belongs to the 2024 Teacher Edition source set. A later cohort must use the notice formally issued by its teacher.</p>
    </footer>
  `;
})();
