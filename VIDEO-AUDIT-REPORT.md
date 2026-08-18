# Video audit and library build report

Date: 18 August 2026; source decision updated 19 August 2026  
Site: Year 9 Textiles Foundation v2  
Workflow: `10-video-audit-and-library-build` with its required YouTube-section and navigation standards  
Build boundary: video producer complete; public release authorised subject to whole-course gates

## Outcome

**Source and implementation layer: PASS with six documented source-bound exceptions.**  
**Rendered browser acceptance: PASS in the integrated local course gate.**

The former catalogue did not meet the network standard. It contained 13 broadly labelled cards, only four theory-adjacent assignments, no purposeful thumbnail treatment, no Stop control, no Escape handling and no focus return. The rebuilt system now has one controlled manifest record for every named theory section: 18 directly validated videos and 6 honest exceptions where teacher authority or student-specific evidence is required.

The later assessment-source reconciliation establishes **In the Garden** for the 2024 Teacher Edition. Module 8 remains an honest teacher-approved extension: its undefined practical facts are not supplied or implied by a generic video. Neither condition blocks publication of this bounded learning library.

## What changed

- Replaced the generic video catalogue with a library grouped by Modules 1–8.
- Added exact video title, channel, named theory section, a `Watch for` prompt, direct YouTube fallback and matching-theory deep link to every retained video.
- Added the same video record immediately beside the matching theory section in each module.
- Added purposeful YouTube thumbnails without loading a player before student choice.
- Added click-to-load `youtube-nocookie.com` players, a visible Stop control, Escape-to-stop handling and focus return to the Play button.
- Added a persistent `Video learning` item to the shared navigation bar.
- Replaced vague source-gap cards with six precise teacher-controlled or evidence-bound notices and a concrete next step.
- Removed the four stale video fields embedded in course content so the manifest is now the single source for all video assignments.

## Files added

- `assets/video-manifest.js` — 24-record section-to-video/exception contract.
- `assets/video-player.js` — shared privacy-enhanced player, fallback and keyboard behaviour.
- `VIDEO-SOURCE-REGISTER.md` — exact mapping, validation evidence, rejected sources and release boundary.

## Files changed

- `assets/videos.js`
- `assets/module.js`
- `assets/course-data.js`
- `assets/app.js`
- `assets/site.css`
- `assets/module-standard.css`
- `videos.html`
- `modules/1.html` through `modules/8.html`

## Verification completed

- JavaScript syntax: all changed scripts parsed successfully.
- Manifest parity: 24 course sections, 24 manifest records, zero missing, zero extra and zero duplicate video IDs.
- Source result: 18 video entries and 6 exception entries.
- External availability: all 18 exact IDs resolved title/channel metadata; all 18 thumbnails returned HTTP 200; all 18 privacy-enhanced embed pages returned HTTP 200 on the audit date.
- Navigation/source check: all eight module shells load the manifest and shared player before module rendering; the library loads course data, manifest, player, renderer and shared navigation in order.
- Privacy check: no iframe exists in the initial player markup; the iframe source is created only after Play.
- Player contract check: normal YouTube fallback is visible before and during playback; Stop removes the iframe; Escape invokes the same stop routine; the replacement Play control receives focus.

## Verification completion

The integrated site was subsequently served over local HTTP and checked at laptop and exact 390 px widths. The player, fallback, privacy-enhanced embed, Stop/Escape behaviour, focus return and section placement are covered again by the independent course experience gate.

## Teacher decisions still required

1. Approve any additional task-specific In the Garden design or production video before it is added; the current exceptions deliberately protect student originality and local practical authority.
2. Approve the Module 8 gift brief before any project/process video is added.
3. Keep room safety and classroom-machine operation tied to current OnGuard, room rules and teacher demonstration.
4. Keep costing tied to each student's real quantities and verified prices.
