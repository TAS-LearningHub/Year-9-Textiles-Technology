(function(){
  "use strict";
  window.YR9_FOUNDATION_V2=true;
  const root = document.documentElement.dataset.root || ".";
  const page = document.body.dataset.page || "";
  const links = [
    ["Course", `${root}/index.html`, "home"],
    ["Modules", `${root}/index.html#modules`, "modules"],
    ["Busy Work", `${root}/activities.html`, "activities"],
    ["Video learning", `${root}/videos.html`, "videos"],
    ["My folio", `${root}/folio.html`, "folio"],
    ["Assessment", `${root}/assessment.html`, "assessment"],
    ["Teacher resources", `${root}/teacher-resources.html`, "teacher"],
    ["Main Menu", "https://stevencowell.github.io/Main-Page/", "main"]
  ];
  const nav = document.createElement("nav");
  nav.className = "course-nav";
  nav.setAttribute("aria-label","Course navigation");
  nav.innerHTML = `<div class="course-nav__inner"><a class="course-brand" href="${root}/index.html"><span class="course-mark" aria-hidden="true">Y9</span><span>Textiles Technology</span></a><div class="course-links">${links.map(([label,href,key])=>`<a href="${href}"${page===key?' aria-current="page"':''}>${label}</a>`).join("")}</div></div>`;
  const skip=document.querySelector(".skip-link");
  document.body.insertBefore(nav, skip ? skip.nextSibling : document.body.firstChild);
  document.querySelectorAll("textarea[data-save],input[data-save]").forEach(field=>{
    const key = `yr9-textiles:${field.dataset.save}`;
    if(localStorage.getItem(key)!==null) field.value=localStorage.getItem(key);
    field.addEventListener("input",()=>{localStorage.setItem(key,field.value); const state=field.closest(".card,.written-card")?.querySelector(".save-state"); if(state) state.textContent="Saved on this device";});
  });
  document.querySelectorAll("[data-print]").forEach(btn=>btn.addEventListener("click",()=>window.print()));
})();
