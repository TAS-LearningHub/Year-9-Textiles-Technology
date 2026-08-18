(function () {
  "use strict";

  const esc = value => String(value).replace(/[&<>\"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;",'\"':"&quot;"}[char]));
  let lastActive = null;

  function preview(entry) {
    return `<button class="video-thumb-button" type="button" data-video-play="${esc(entry.videoId)}" aria-label="Play video: ${esc(entry.title)}">
      <img src="${esc(entry.thumbnail)}" alt="Thumbnail for ${esc(entry.title)}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin">
      <span class="video-play-mark" aria-hidden="true"><span>▶</span></span>
      <span class="video-play-label">Play video</span>
    </button>`;
  }

  function panelMarkup(entry, options = {}) {
    const theoryLink = options.theoryLink || "";
    const libraryLink = options.libraryLink || "";
    if (entry.status !== "video") {
      return `<aside class="section-video section-video--source-gap" aria-label="${esc(entry.kind)} video exception">
        <div>
          <p class="kicker">${esc(entry.kind)}</p>
          <h3>${esc(entry.title)}</h3>
          <p>${esc(entry.reason)}</p>
        </div>
        <div class="source-gap-note"><strong>Next step:</strong> ${esc(entry.nextStep)}</div>
      </aside>`;
    }
    return `<section class="section-video" data-video-card="${esc(entry.module)}:${esc(entry.anchor)}" aria-label="Video learning: ${esc(entry.title)}">
      <div class="section-video__copy">
        <p class="kicker">Watch and notice · Module ${esc(entry.module)}</p>
        <h3>${esc(entry.title)}</h3>
        <p class="video-channel">${esc(entry.channel)}</p>
        <p class="video-watch"><strong>Watch for:</strong> ${esc(entry.watchFor)}</p>
        <p class="video-links"><a href="${esc(entry.watchUrl)}" target="_blank" rel="noopener">Open on YouTube</a>${theoryLink ? ` · <a href="${esc(theoryLink)}">Open the matching theory</a>` : ""}${libraryLink ? ` · <a href="${esc(libraryLink)}">Open in the video library</a>` : ""}</p>
      </div>
      <div class="video-media" data-video-shell data-video-id="${esc(entry.videoId)}" data-video-title="${esc(entry.title)}">${preview(entry)}</div>
    </section>`;
  }

  function stop(shell, returnFocus = true) {
    if (!shell) return;
    const entry = window.YR9_VIDEO_MANIFEST.entries.find(item => item.videoId === shell.dataset.videoId);
    if (!entry) return;
    shell.replaceChildren();
    shell.insertAdjacentHTML("afterbegin", preview(entry));
    shell.closest("[data-video-card]")?.classList.remove("is-playing");
    if (returnFocus) shell.querySelector("[data-video-play]")?.focus();
    if (lastActive === shell) lastActive = null;
  }

  function play(button) {
    const shell = button.closest("[data-video-shell]");
    if (!shell) return;
    const id = shell.dataset.videoId;
    const title = shell.dataset.videoTitle;
    shell.innerHTML = `<div class="video-player-active"><div class="video-player-controls"><span>Playing from YouTube</span><button type="button" class="video-stop" data-video-stop aria-label="Stop ${esc(title)} and return to the preview">Stop video</button></div><iframe class="video-frame" title="Video: ${esc(title)}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1&rel=0"></iframe></div>`;
    shell.closest("[data-video-card]")?.classList.add("is-playing");
    lastActive = shell;
    shell.querySelector("[data-video-stop]")?.focus();
  }

  function bind(root = document) {
    root.addEventListener("click", event => {
      const playButton = event.target.closest("[data-video-play]");
      if (playButton) { play(playButton); return; }
      const stopButton = event.target.closest("[data-video-stop]");
      if (stopButton) stop(stopButton.closest("[data-video-shell]"));
    });
  }

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && lastActive) {
      event.preventDefault();
      stop(lastActive);
    }
  });

  window.YR9_VIDEO_UI = { panelMarkup, bind, stop };
})();
