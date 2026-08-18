# Year 9 Textiles graphic audit and build — v1

> **Historical report — superseded.** This report records the first local graphics pass on 18 August 2026. Its REWORK verdict, source digest, integration hashes, Module 7 conflict and publication boundary are not the current release state. Use `GRAPHIC-AUDIT-AND-BUILD-REPORT-v2.md` and `graphic-audit-and-build-handoff-v2.json` for the repaired candidate.

Date: 18 August 2026  
Site: Year 9 Textiles foundation v2  
Skill owner: `9-graphic-audit-and-build`  
Publication state: local files only; not committed, pushed, deployed or published

## Outcome

The graphics layer has been rebuilt from a repeated module-overview pattern into a section-specific student learning system.

- 18 new source-safe SVG teaching diagrams were built and integrated.
- All 24 theory sections now have a relevant visual: 18 new diagrams and 6 suitable existing diagrams.
- Each module now presents three distinct theory visuals rather than repeating one overview graphic.
- Every integrated theory visual has a specific alternative description, explanatory caption and direct **Open larger** link.
- Narrow-screen visual containers are keyboard-focusable and horizontally scrollable, with a mobile-only swipe instruction.
- No classroom photographs, student work, commercial pattern scans or other rights-uncertain source material was copied.
- No raster image-generation work was approved: the identified gaps were relationship and process explanations, so diagrams were the correct medium.

Overall skill verdict: **REWORK**. The local graphics upgrade is complete and the desktop evidence passes, but the skill cannot honestly receive a full PASS until an exact 390 px rendered check and an independent visual reviewer are completed.

## Authority and benchmark

The visual decisions were constrained by:

- `SOURCE-NOTES.md` and the versioned course source contract;
- the independent source audit, including the Module 7 theme conflict and Module 8 teacher-confirmation boundary;
- the established Riv Burger family pattern for calm section-level teaching graphics, captions and enlarged viewing;
- the existing Year 9 Textiles palette and typography.

Source contract SHA-256: `3B471560463FB22C4589930F804D36367B304C28084D3F60DF18262693ED183E`  
Source audit SHA-256: `14E7A8C2FC7DA9690D7FC4DFD2CFFB2203FCBBF40A7E213C4D1DA0A2899868EC`

## Module coverage

| Module | Section visuals after build | Result |
|---|---|---|
| 1 | room safety; machine control; pincushion evaluation | 3 distinct visuals |
| 2 | design-medium choice; design elements; inspiration and mood boards | 3 distinct visuals |
| 3 | target market; commercial-pattern symbols; concept selection | 3 distinct visuals |
| 4 | fibre classification; yarn structure; fabric structures | 3 distinct visuals |
| 5 | construction evidence; resources and costing; garment labels and evaluation | 3 distinct visuals |
| 6 | fashion-era influence; designer and market; respectful magazine evidence | 3 suitable existing visuals retained |
| 7 | technique sample; theme conflict and teacher confirmation; production evidence | 3 distinct visuals |
| 8 | revision map; portfolio readiness; teacher-approved gift brief | 3 distinct visuals |

## New diagram register

All new files are authored SVGs with a `900 × 600` viewBox, embedded title and description metadata, `role="img"`, and source-safe explanatory text.

| Module | Files |
|---|---|
| 1 | `m1-room-safety.svg`, `m1-machine-control.svg`, `m1-pincushion-evaluation.svg` |
| 2 | `m2-design-medium.svg`, `m2-inspiration-moodboard.svg` |
| 3 | `m3-target-market.svg`, `m3-concept-selection.svg` |
| 4 | `m4-fibre-classification.svg`, `m4-yarn-structure.svg`, `m4-fabric-structures.svg` |
| 5 | `m5-construction-evidence.svg`, `m5-resources-costing.svg` |
| 7 | `m7-technique-sample.svg`, `m7-theme-confirmation.svg`, `m7-production-evidence.svg` |
| 8 | `m8-revision-map.svg`, `m8-portfolio-readiness.svg`, `m8-gift-brief.svg` |

## Integration changes

- `assets/module.js` now maps the 18 identified section anchors to their exact diagrams, alternative descriptions and captions.
- `assets/module-standard.css` now contains a contained horizontal viewport for wide diagrams at narrow screen widths, visible keyboard focus, a mobile swipe instruction and print-safe overrides.
- Existing approved diagrams were retained where they already taught the exact section content.

Integration hashes:

- `assets/module.js`: `79ED71C7296C5D1DF5BBFEA941F8904E92ABFFDC6BE56348DA445216B63A4558`
- `assets/module-standard.css`: `C7DE5AF9B77F64A1CB23FB711E200D78016E7A40122347F7DD4AEEB2307305DB`

## Verification evidence

| Gate | Evidence | Status |
|---|---|---|
| Student routes | 22 in-scope student pages and lesson routes returned HTTP 200 | PASS |
| Visual routes | all 31 SVG routes returned HTTP 200 with SVG content type | PASS |
| SVG integrity | 31/31 parsed as XML; all 18 new diagrams contain the required accessibility metadata | PASS |
| Module placement | Modules 1–8 each rendered three loaded and unique theory visuals | PASS |
| Desktop containment | Modules 1–8 checked at 1600 × 900 with no document-width overflow | PASS |
| Accessibility integration | all 24 diagram viewports expose a labelled region and keyboard focus; enlarged links are visible and valid | PASS |
| JavaScript | `assets/module.js` syntax check completed with no error | PASS |
| Print treatment | print rule removes scrolling and constrains diagrams to printable width | PASS (static rule check) |
| Exact 390 px render | viewport request did not alter the in-app Browser, which remained 1600 × 900; no substitute result is claimed | PENDING |
| Independent visual acceptance | this build was not reviewed by a separate task/owner | PENDING |

Representative rendered checks were completed for Module 1 room safety, Module 4 fabric structures, Module 7 source conflict and Module 8 gift approval. Text remained legible, the graphics stayed contained and each diagram directly supported the adjacent explanation.

## Deliberately unresolved

- Module 7 still correctly displays the source conflict between **In the Garden** and **SELFIE** and sends the decision to the teacher.
- Module 8 keeps product, dimensions, materials, process and assessment status as **Teacher to confirm**.
- Rights-uncertain classroom images, student work and commercial pattern material remain excluded.
- Exact 390 px rendered acceptance and independent visual acceptance remain the two release gates.

## Release boundary

This is a local, reviewable graphics candidate. No Git repository was present in the site folder, and no commit, push, deployment or publication was attempted.
