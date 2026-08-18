(function () {
  "use strict";

  const checkedOn = "2026-08-18";
  const video = (module, anchor, title, channel, videoId, watchFor, why) => ({
    module, anchor, status: "video", title, channel, videoId, watchFor, why,
    checkedOn,
    watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
    thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
    validation: "Exact title and channel resolved; thumbnail and youtube-nocookie embed returned HTTP 200."
  });
  const exception = (module, anchor, title, reason, nextStep, kind = "Teacher-controlled") => ({
    module, anchor, status: "exception", title, reason, nextStep, kind, checkedOn
  });

  const entries = [
    exception(1, "room-safety", "Working safely in the textiles room", "Room rules, OnGuard requirements and teacher directions are the local safety authority. A generic clip must not replace them.", "Complete the theory and checks, then follow the teacher's current safety induction and demonstration."),
    exception(1, "machine-control", "Sewing-machine setup and control", "Thread paths, controls and safe setup vary between classroom machine models. The source contract requires the exact classroom demonstration.", "Use the paper-control practice and move to threaded sewing only after teacher approval."),
    video(1, "pincushion", "How to Make a Pincushion | Beginner Sewing Tutorial with Faodail Creation", "Faodail Creation Sewing and Quilting", "EKoturCGOhU", "Notice how seam control, filling and finishing affect whether the pincushion is secure, useful and neatly presented.", "Directly supports the section's function, presentation and improvement criteria without replacing the classroom method."),

    video(2, "design-medium", "How fabric is made from fibre - Introduction", "AppuSeriesAcademy", "HJ-4tb15ZNM", "Track the relationship from fibre to yarn to fabric. Then return to the theory and connect the material to a user, purpose and textile focus area.", "Provides a concise material-chain foundation for understanding textiles as a design medium."),
    video(2, "design-elements", "The Basic Elements of Design | FREE COURSE", "Envato Tuts+", "MshxnTQW4qU", "Identify line, shape, colour, value, space and texture, then explain how three of them could communicate a mood in a textile design.", "Directly reinforces the section's vocabulary and emphasis on deliberate visual effects."),
    video(2, "inspiration", "How to Create a Fashion Mood Board | Examples from my Fashion Design Portfolio | Emily Westenberger", "Emily Westenberger", "2oN4rAeeJuQ", "Watch how images, colour and texture are selected and edited into one coherent direction rather than collected at random.", "Models purposeful mood-board curation and the move from source material to a design direction."),

    video(3, "target-market", "The 3,000-year history of the hoodie | Small Thing Big Idea, a TED series", "TED", "xqzLm0Xua8g", "Notice how the hoodie's users, purposes and cultural meaning change over time. Use those changes to explain why target market affects design decisions.", "This is the only durable teacher-linked video in the source contract and supports the changing user and purpose of a hoodie."),
    video(3, "commercial-pattern", "Learn to Sew: Understanding a Pattern Envelope", "Simplicity Video", "3oML2k19L6I", "Locate the garment views, size information, suggested fabrics and notions. Keep the current teacher-issued pattern beside you for exact quantities.", "Directly teaches the information students must find on a commercial pattern envelope."),
    video(3, "design-development", "Thom Browne’s Entire Design Process, From Sketch to Dress | Vogue", "Vogue", "VVbD2dXS4gw", "Track the movement from concept and sketches through samples, fabric decisions and final execution. Notice where ideas are tested or changed.", "Shows that design development is iterative and must balance concept, material, manufacture and the final outcome."),

    video(4, "fibres", "Natural Vs Synthetic Fibers (Which to choose and why)", "FittDesign Studio", "cRLPUAPCfuo", "Sort the examples into natural and manufactured fibres, then listen for the performance trade-offs that affect end use.", "Directly supports fibre classification and links properties to material selection."),
    video(4, "yarns", "How is Yarn is Made?", "The Crochet Crowd", "9pyMh0Ll-8k", "Follow fibres through preparation, roving, spinning, doubling and twisting. Identify where the yarn structure changes.", "Makes the fibre-to-yarn sequence visible and reinforces spinning, twist and ply."),
    video(4, "fabric-structures", "Apa Itu Kain Woven , Knitting dan Non Woven...? - Bahankainknowledge", "BahanKain.com", "TeakgfH5EsE", "Compare interlaced yarns, connected loops and bonded webs. Use the structure you see as evidence before judging likely performance.", "Visually compares woven, knitted and non-woven structures; the section text supplies the English terminology and cautions."),

    video(5, "construction", "Learn to Sew! The Complete Beginner Guide to Start Sewing", "Sailrite Workbench", "3xjjqmsFXbg", "Notice the sequence of preparation, operation and checking. Record only the operations your teacher and issued pattern authorise for your project.", "Provides a clear overview of controlled sewing and quality checks while preserving the local construction authority."),
    exception(5, "resources-costing", "Resources, equipment and costing", "The section requires the student's real quantities and verified current prices. The audit found no concise English clip that stayed inside that evidence boundary.", "Use the costing table and record item, quantity, unit cost and total from real project evidence.", "Evidence-bound"),
    video(5, "labels-evaluation", "Garment Care symbols Explanation || How to Read Clothing Care Labels", "Textile Vlog", "wSf_AcUyv0M", "Identify washing, drying, ironing and care symbols, then explain how a correct label helps the user care for the actual product.", "Directly supports care-labelling literacy; students still evaluate their own product with real evidence."),

    video(6, "fashion-eras", "Savoir-faire of the Spring-Summer 2015 Haute Couture Collection – CHANEL Haute Couture", "CHANEL", "3cDhTzoMj_s", "Look for historical references in silhouette, surface detail, materials and hand processes. Separate what you observe from what you infer.", "Provides a first-party fashion-house source for analysing historical influence and contemporary interpretation."),
    video(6, "designer-practice", "Savoir-faire of the Métiers d'art 2018/19 Collection – CHANEL Shows", "CHANEL", "rKlw7nB1rtc", "Notice the specialist roles, materials, techniques and quality decisions that turn a design direction into a collection.", "Provides first-party evidence of designer practice, collaboration and production decisions."),
    video(6, "magazine-evidence", "Savoir-faire of the Paris-Hamburg 2017/18 Métiers d’art Collection – CHANEL Shows", "CHANEL", "FAXbj3qSs_A", "Write three observation statements using only visible evidence, then add one clearly labelled inference about the intended audience or design direction.", "Supports evidence-based visual research and the distinction between observation and inference."),

    video(7, "techniques", "Hand Embroidery for Beginners - Part 2 | 10 Basic Stitches", "HandiWorks", "kKnBUa4l2k4", "Compare how stitch direction, spacing and tension change the line and texture. Practise only the teacher-approved technique and materials.", "Directly supports a technique sampler and gives observable features students can record."),
    exception(7, "garden-design", "Developing an original garden design", "No verified video was specific enough to control the issued In the Garden design evidence without encouraging students to copy another maker's solution.", "Use the formal brief, labelled inspiration, two developed ideas and the rendered final design to establish an original direction.", "Use the issued brief"),
    exception(7, "art-production", "Production drawing, making and evaluation", "The production evidence must follow the student's own approved In the Garden design and locally demonstrated techniques. A generic making clip cannot supply that evidence.", "Use the production drawing, technique key, planned order, progress evidence and evaluation sequence in this section.", "Follow local demonstration"),

    video(8, "revision", "Retrieval Practice: A video for Students", "The Learning Scientists", "jfREWvtd_DM", "Pause before each explanation and retrieve what you know without looking. Then check, correct and apply the idea to a textiles example.", "Directly models the retrieve-check-correct-apply revision routine used in the section."),
    video(8, "final-evaluation", "How to create a fashion portfolio | TUTORIAL Parsons fashion design major | Justine Leconte", "Justine Leconte officiel", "3z0L_TCxh2c", "Notice how research, development, making and final outcomes are selected and ordered so another reader can understand the design story.", "Supports portfolio curation, clear evidence order and a self-contained final presentation."),
    exception(8, "gifts", "Textiles as Gifts: a teacher-approved extension", "The gift product, recipient, materials, dimensions, process and assessment status are not authorised in the source contract.", "Obtain a teacher-approved brief before selecting a process video or beginning design and production.", "Teacher to confirm")
  ];

  window.YR9_VIDEO_MANIFEST = {
    version: "2026-08-18",
    checkedOn,
    entries,
    bySection: Object.fromEntries(entries.map(entry => [`${entry.module}:${entry.anchor}`, entry]))
  };
})();
