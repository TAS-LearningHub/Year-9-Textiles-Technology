(function () {
  "use strict";

  const syllabus = {
    "TEX5-1": "Explains the properties and performance of a range of textile items",
    "TEX5-2": "Justifies the selection of textile materials for specific end uses",
    "TEX5-3": "Explains the creative process of design used in the work of textile designers",
    "TEX5-4": "Generates and develops textile design ideas",
    "TEX5-5": "Investigates and applies methods of colouration and decoration for a range of textile items",
    "TEX5-6": "Analyses the influence of historical, cultural and contemporary perspectives on textile design, construction and use",
    "TEX5-7": "Evaluates the impact of textiles production and use on the individual consumer and society",
    "TEX5-8": "Selects and uses appropriate technology to creatively document, communicate and present design and project work",
    "TEX5-9": "Critically selects and creatively manipulates a range of textile materials to produce quality textile items",
    "TEX5-10": "Selects appropriate techniques and uses equipment safely in the production of quality textile projects",
    "TEX5-11": "Demonstrates competence in the production of textile projects to completion",
    "TEX5-12": "Evaluates textile items to determine quality in their design and construction"
  };

  const outcomeList = codes => codes.map(code => ({ code, text: syllabus[code] }));

  window.YR9_ASSESSMENT_NOTICES = {
    "designer-pyjamas": {
      year: "2024",
      taskNumber: "1",
      officialName: "Designer Pyjamas",
      title: "Pyjama Bottoms and Hoodie",
      teacher: "Mrs Dennis",
      issue: ["Term 1, Week 2, 2024"],
      due: ["Folio — Term 2, Week 5, 2024", "Practical garments — Term 2, Week 9, 2024"],
      weighting: "30% total — Folio 15%; Practical 15%",
      marks: "80 marks total — Folio 40; Practical 40",
      outcomes: outcomeList(["TEX5-1","TEX5-2","TEX5-4","TEX5-5","TEX5-6","TEX5-8","TEX5-9","TEX5-10","TEX5-11","TEX5-12"]),
      purpose: "Design, produce and evaluate apparel suitable for nightwear. Produce a pair of pyjama bottoms and a hoodie, together with the supporting design folio.",
      outline: [
        "Select short, three-quarter or full-length pyjama bottoms made from an appropriate plain-woven fabric such as cotton, cotton blend or flannelette.",
        "Produce a hoodie from an appropriate stretch-knit fabric such as sweatshirt fleece, double knit or polar fleece. Satin is not suitable for this project.",
        "Use the teacher-provided commercial patterns and complete all construction processes safely under teacher direction.",
        "Present the supporting folio in an A3 or A4 display folder."
      ],
      evidence: [
        "Design-inspiration collage based on the selected fabric, colour scheme or nightwear theme",
        "Two labelled design ideas showing front and back views, strengths and weaknesses",
        "Rendered final design showing front and back views and manufacturing techniques",
        "Three aesthetic and three functional features",
        "Production drawing, notions, fabric swatches, fibre composition and used pattern pieces",
        "Order of construction and construction samples",
        "Resources and equipment list, fabric identification and itemised costing",
        "Product label and completed evaluation",
        "Completed pyjama bottoms and hoodie"
      ],
      criteria: [
        { group: "Practical garment", total: 40, rows: [["Safe use of textile equipment",4],["Seams and seam finishes",4],["Hems",4],["Use of commercial pattern",4],["Elastic or drawstring join",4],["Sleeve insertion",4],["Collar or hood attachment",4],["Quality finish and completion",4],["Appropriate design and materials",4],["Evaluation",4]] },
        { group: "Supporting folio", total: 40, rows: [["Design inspiration",4],["Design ideas",4],["Final sketch",4],["Aesthetic and functional features",4],["Production drawings and pattern pieces",4],["Construction steps and samples",4],["Resources and equipment",4],["Costing",4],["Product label",4],["Evaluation",4]] }
      ],
      submission: "Submit the A3 or A4 folio and completed practical garments to Mrs Dennis at the two listed checkpoints. Follow any class instructions about interim practical checks.",
      support: "Patterns are supplied by the classroom teacher. Ask for clarification or approved adjustments before the due checkpoint if you need support.",
      sourceTitle: "2024_Yr9_TASK_ONE_DESIGNER_PJ_ASSESSMENT_Task",
      sourceId: "1F3LqdDrxbdzV67bD3xPW2fR2s7BbF5tW091giWzVrpQ"
    },

    "fashion-magazine": {
      year: "2024",
      taskNumber: "2",
      officialName: "Textile Designers & Fashion Era",
      title: "Fashion Era Magazine",
      teacher: "Mrs Dennis",
      issue: ["Tuesday 23 July 2024", "Term 3, Week 1"],
      due: ["Thursday 12 September 2024", "Term 3, Week 8"],
      weighting: "20%",
      marks: "20 marks",
      outcomes: outcomeList(["TEX5-1","TEX5-2","TEX5-3","TEX5-6","TEX5-7","TEX5-8","TEX5-12"]),
      purpose: "Create two magazine articles: one investigating a historical fashion era and one presenting an interview-style profile of a textile designer.",
      outline: [
        "Part A — choose a historical period, identify it clearly, describe clothing typical of the era for male, female and unisex contexts, and analyse its influence on current fashion.",
        "Part B — choose a textile designer and present an interview-style article covering the designer, brand, focus area, location, background, style, inspiration and target market.",
        "Include relevant images and provide APA references for information and images.",
        "Present the two articles in a coherent magazine style. Canva may be used, but another suitable format may be selected."
      ],
      evidence: ["Historical fashion-era article", "Textile-designer interview article", "Relevant images and captions", "APA bibliography and image references", "Complete magazine-style presentation"],
      criteria: [
        { group: "Grade and mark range", total: 20, bands: [
          { label: "Grade A · 17–20", text: "Analyses and evaluates historical, cultural and contemporary influences in detail; explains typical clothing, fabrics, design features and colours; analyses the era’s current influence; and gives a detailed, well-supported account of the designer’s background, target market, inspiration and style." },
          { label: "Grade B · 13–16", text: "Analyses a wide range of influences; describes representative fashion styles, fabrics, design features and colours; identifies current influence; and gives a clear account of the designer’s background, target market, inspiration and style." },
          { label: "Grade C · 9–12", text: "Explains relevant influences, identifies the era and describes the designer’s creative process, source of inspiration and style." },
          { label: "Grade D · 5–8", text: "Describes some influences and recognises aspects of the designer’s creative process, with partial application to the articles." },
          { label: "Grade E · 0–4", text: "With guidance, identifies a limited range of influences and outlines some aspects of the textile designer’s creative process." }
        ] }
      ],
      submission: "Submit the completed two-article magazine to Mrs Dennis by the listed due date in the presentation format demonstrated or approved in class.",
      support: "The teacher will demonstrate Canva. Students may use another suitable presentation method after checking that it meets the magazine requirements.",
      sourceTitle: "2024_Year_9_TASK_TWO_ASSIGNMENT_Task_Notification (3)",
      sourceId: "1dklJpKj2o1ihT19uFpJcMwrtl0IJHlruS4dCZdMH5WY"
    },

    "textile-art": {
      year: "2024",
      taskNumber: "3",
      officialName: "Textile Art: In the Garden",
      title: "In the Garden Textile Art",
      teacher: "Mrs Dennis",
      issue: ["Tuesday 30 July 2024", "Term 3, Week 2"],
      due: ["14 November 2024", "Term 4, Week 5"],
      weighting: "30%",
      marks: "65 marks total — Practical 20; Folio 45",
      outcomes: outcomeList(["TEX5-1","TEX5-2","TEX5-4","TEX5-5","TEX5-8","TEX5-9","TEX5-10","TEX5-11","TEX5-12"]),
      purpose: "Design, produce and evaluate a display-ready textile artwork inspired by the theme In the Garden.",
      outline: [
        "Develop a textile artwork no larger than 40 cm × 40 cm and suitable for display.",
        "Explore a range of teacher-approved fabric-decoration processes and record the experiments in the folio.",
        "Select and apply at least four decoration techniques in the resolved textile artwork.",
        "Possible class techniques include fabric painting or printing, dyeing, creating new fabric, appliqué, hand or machine embroidery, needle felting, heat manipulation and fabric layering. Use only processes approved and supervised by the teacher."
      ],
      evidence: [
        "Inspirational collage and colour scheme",
        "Two annotated design ideas with strengths and weaknesses",
        "Rendered final design labelled with selected techniques",
        "Aesthetic and functional features and detailed item description",
        "Production drawing, size, notions, fabric swatches, fibre composition and pattern pieces",
        "Construction sequence and creative or innovative features",
        "Resources and equipment list and labelled technique samples",
        "Product label and self/peer evaluation",
        "Completed In the Garden textile artwork"
      ],
      criteria: [
        { group: "Practical textile artwork", total: 20, bands: [
          { label: "Highly Developed · 16–20", text: "Displays creativity and expertise in designing and applying four decoration techniques; manipulates materials, techniques and equipment expertly and safely; and completes a high-quality item with neat finishing and effective time management." },
          { label: "Competent · 11–15", text: "Displays creativity and proficient application of four techniques; uses materials, techniques and equipment competently and safely; and completes a quality item with minor finishing issues." },
          { label: "Developing · 6–10", text: "Displays satisfactory creativity or technique control; uses materials and equipment with developing competence; and produces a mostly complete item requiring greater finishing detail." },
          { label: "Elementary · 1–5", text: "Displays limited creativity or technique control, makes some unsuitable material or process choices, and produces an incomplete or poorly finished item with limited evidence of time management." }
        ] },
        { group: "Supporting folio", total: 45, rows: [["Inspirational collage",3],["Two design ideas",4],["Final design",5],["Aesthetic and functional features",3],["Description",4],["Production drawing",5],["Construction steps",5],["Creative or innovative aspects",3],["Resources and equipment",3],["Fabric-decoration techniques",5],["Product label",3],["Evaluation",2]] }
      ],
      submission: "Submit the completed textile artwork and the A3 or A4 display-folder folio to Mrs Dennis by the listed due date.",
      support: "Most classroom materials are supplied. Check with Mrs Dennis before purchasing consumables or attempting any heat, dye, machine or specialist process.",
      sourceTitle: "2024_9TEXE1_TASK_THREE_Textile_Art_ IN THE GARDEN_TASK",
      sourceId: "1R5y1JCbHa6Do0LjCGdP6nInb6VsfmM3O8UgXH5woG8Y"
    },

    "theory-examination": {
      year: "2024",
      taskNumber: "4",
      officialName: "Final Examination",
      title: "Year 9 Open-Book Theory Examination",
      teacher: "Mrs Dennis",
      issue: ["Term 4, Week 1, 2024"],
      due: ["Thursday 7 November 2024", "Term 4, Week 4 · Period 3"],
      weighting: "20%",
      marks: "85 marks",
      outcomes: outcomeList(["TEX5-1","TEX5-2","TEX5-3","TEX5-6","TEX5-7"]),
      purpose: "Complete an open-book theory examination under examination conditions during one one-hour theory lesson. The examination assesses knowledge developed across the Year 9 course.",
      outline: [
        "Revise all Year 9 classwork before the examination.",
        "Bring and use only the resources permitted by the teacher for the open-book examination.",
        "Answer every question clearly and use textiles terminology accurately.",
        "The examination paper and answers are not published on this website."
      ],
      evidence: ["Completed supervised examination paper", "Short-answer responses", "Pattern-symbol knowledge", "Application of learning from the Designer Pyjamas and Textile Art projects", "Textile-designer and fashion knowledge"],
      criteria: [
        { group: "Examination mark allocation", total: 85, rows: [["Textiles focus areas and examples",20],["Textile equipment and notions",4],["Commercial-pattern markings",8],["Fibres, properties and design elements",27],["In the Garden textile-art application",7],["Designer Pyjamas application",9],["Textile designer knowledge",10]] }
      ],
      submission: "Complete and hand in the examination paper during the supervised one-hour lesson in Period 3.",
      support: "Ask Mrs Dennis before the examination if the permitted open-book resources or approved adjustments are unclear.",
      sourceTitle: "2024_Year 9 Assessment Task Notification and 2024_Yr_9_Open_Book_Exam",
      sourceId: "19J4YdNvZpKR_lk2K_Ucp3id4k1grGyoMV0DixFMNujY / 1mfQkRYlSoY5sbA3HMtszIlHq4upHRt2utCWRV8I-AaQ"
    }
  };
})();
