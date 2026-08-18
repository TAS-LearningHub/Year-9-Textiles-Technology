(function(){
  "use strict";
  if(window.YR9_SECTION_REFERENCES)return;
  window.YR9_SECTION_REFERENCES=true;
  const pageMap={
    "index.html":"COURSE","":"COURSE","videos.html":"VIDEOS","activities.html":"PUZZLES","folio.html":"FOLIO","assessment.html":"ASSESSMENT","teacher-resources.html":"TEACHER","presentation.html":"PRESENTATION"
  };
  const file=location.pathname.split("/").pop()||"index.html";
  const moduleMatch=location.pathname.match(/modules\/(\d+)\.html$/);
  const presentationMatch=location.pathname.match(/presentations\/module-(\d+)\.html$/);
  const notificationMap={"designer-pyjamas.html":"ASS-DP","fashion-magazine.html":"ASS-FM","textile-art.html":"ASS-TA","theory-examination.html":"ASS-EXAM"};
  const page=moduleMatch?`M${moduleMatch[1]}`:presentationMatch?`PRES-M${presentationMatch[1]}`:(notificationMap[file]||pageMap[file]||"PAGE");
  const selector=".hero, main > section, main > article, .module-card, .resource-grid > .card, .activity-card, .video-grid > .card, .folio-entry, .theory-section, .learning-visual, .video-panel, .question-card, .written-card, .slide, footer";
  let busy=false;
  function slug(target,index){
    if(target.dataset.question)return target.dataset.question.replace(/^m\d+-/i,"").toUpperCase().replace(/[^A-Z0-9]+/g,"-");
    const topic=target.closest(".theory-section")?.id?.toUpperCase().replace(/[^A-Z0-9]+/g,"-");
    if(topic&&target.classList.contains("learning-visual"))return `${topic}-VISUAL-01`;
    if(topic&&target.classList.contains("video-panel"))return `${topic}-VIDEO`;
    if(topic&&target.classList.contains("written-card"))return `${topic}-RESPONSE-01`;
    if(target.id)return target.id.toUpperCase().replace(/[^A-Z0-9]+/g,"-");
    const heading=target.querySelector("h1,h2,h3,legend")?.textContent?.trim();
    return (heading||target.tagName).toUpperCase().replace(/[^A-Z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,42)||`SECTION-${index+1}`;
  }
  function uniqueCode(base,used){let code=base,n=2;while(used.has(code))code=`${base}-${String(n++).padStart(2,"0")}`;used.add(code);return code;}
  function addReferences(){
    const used=new Set([...document.querySelectorAll(".section-reference[data-section-code]")].map(item=>item.dataset.sectionCode));
    [...document.querySelectorAll(selector)].filter(target=>target.offsetParent!==null&&!target.closest("[hidden]")).forEach((target,index)=>{
      if([...target.children].some(child=>child.matches?.(".section-reference[data-section-code]")))return;
      target.dataset.sectionReferenceTarget="true";
      const code=uniqueCode(`TXT9-${page}-${slug(target,index)}`,used);
      if(!target.id)target.id=code.toLowerCase();
      const ref=document.createElement("a");ref.className="section-reference";ref.href=`#${target.id}`;ref.textContent=code;ref.title="Copy a privacy-safe screenshot of this section";ref.dataset.sectionCode=code;ref.setAttribute("aria-label",`Staff section reference ${code}`);
      ref.addEventListener("click",event=>{event.preventDefault();capture(target,ref,code);});
      if(!target.style.getPropertyValue("--section-reference-base-padding-bottom"))target.style.setProperty("--section-reference-base-padding-bottom",getComputedStyle(target).paddingBottom);
      target.classList.add("section-reference-overlay-target");
      const isOverlay=target.classList.contains("hero")||target.tagName==="FOOTER";
      ref.classList.add(isOverlay?"section-reference--overlay":"section-reference--corner");
      target.classList.add(isOverlay?"section-reference-overlay-corner-target":"section-reference-corner-target");
      target.append(ref);
    });
  }
  async function capture(target,ref,code){
    if(busy)return;busy=true;const original=ref.textContent;ref.textContent="Preparing…";
    try{
      if(typeof html2canvas!=="function")throw new Error("Screenshot library unavailable");
      const canvas=await html2canvas(target,{backgroundColor:"#ffffff",scale:1.5,useCORS:true,onclone:async doc=>{
        doc.querySelectorAll(".section-reference[data-section-code]").forEach(item=>item.textContent=item.dataset.sectionCode);
        doc.querySelectorAll("input,textarea,select").forEach(field=>{if(field.type==="checkbox"||field.type==="radio")field.checked=false;else field.value="";});
        doc.querySelectorAll("[data-student-photo],[data-photo-preview],.student-photo,.photo-preview,.folio-photo-preview").forEach(item=>item.remove());
        await Promise.all([...doc.querySelectorAll("img")].filter(img=>/\.svg(?:[?#]|$)/i.test(img.src)).map(async img=>{
          let objectUrl;
          try{
            const response=await fetch(img.src);if(!response.ok)return;
            objectUrl=URL.createObjectURL(new Blob([await response.text()],{type:"image/svg+xml"}));
            const rendered=new Image();rendered.src=objectUrl;await rendered.decode();
            const canvas=doc.createElement("canvas"),width=rendered.naturalWidth||900,height=rendered.naturalHeight||600;
            canvas.width=width;canvas.height=height;canvas.className=img.className;canvas.setAttribute("aria-label",img.alt||"");
            canvas.style.cssText=`display:block;width:${img.clientWidth||width}px;height:${img.clientHeight||height}px;max-width:100%;object-fit:contain`;
            canvas.getContext("2d").drawImage(rendered,0,0,width,height);img.replaceWith(canvas);
          }catch(_error){}finally{if(objectUrl)URL.revokeObjectURL(objectUrl);}
        }));
      }});
      const blob=await new Promise(resolve=>canvas.toBlob(resolve,"image/png"));
      if(!blob||!navigator.clipboard||!window.ClipboardItem)throw new Error("Image clipboard unavailable");
      await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
      history.replaceState(null,"",`#${target.id}`);ref.textContent="Copied";setTimeout(()=>ref.textContent=original,1600);
    }catch(error){ref.textContent="Copy failed";ref.title=`${code}: ${error.message}`;setTimeout(()=>ref.textContent=original,2200);}finally{busy=false;}
  }
  addReferences();
  new MutationObserver(()=>requestAnimationFrame(addReferences)).observe(document.body,{childList:true,subtree:true});
})();
