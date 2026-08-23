/* ============================================================
 *  LSTR512 — Works data
 * ------------------------------------------------------------
 *  To add a new work (3 steps):
 *  1. Put your image in the images/ folder (jpg/png recommended)
 *  2. Copy any { ... } block below, paste at the end, edit fields
 *  3. Save this file, refresh the page — done
 *
 *  Fields:
 *    id          : unique id (e.g. work-4)
 *    title       : work title
 *    image       : image path — use "images/yourfile.jpg" for your own
 *    englishText : the calligraphic text (can be English, French, Latin...)
 *    materials   : pen, ink, paper used
 *    thoughts    : personal reflections on the piece
 *    date        : upload date, YYYY-MM-DD format
 *    tag         : one of: "Textura Quadrata" | "Italic" |
 *                  "Old English & German text & Modern Gothic" | "Others"
 * ============================================================ */

const WORKS = [
  {
    id: "work-1",
    title: "Les Mille Yeux",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dark%20atmospheric%20gothic%20calligraphy%20of%20French%20text%20Je%20voudrais%20les%20mille%20yeux%20de%20la%20nuit%20%C3%A9ternelle%20pour%20te%20contempler%20seul%2C%20Textura%20Quadrata%20blackletter%20style%2C%20white%20ink%20on%20dark%20frosted%20glass%20panels%2C%20cool%20blue%20tones%2C%20moody%20cinematic%20lighting%2C%20fine%20art%20photography&image_size=portrait_4_3",
    englishText: "Je voudrais les mille yeux de la nuit éternelle\nPour te contempler seul.",
    materials: "Paper / Pen / Ink — to be updated",
    thoughts: "Textura Quadrata — the quintessential gothic script. The dense, rhythmic blackletters create a visual weight that suits this verse about eternal night. Each letter is a vault, each line a cathedral aisle.",
    date: "2026-08-23",
    tag: "Textura Quadrata"
  },
  {
    id: "work-2",
    title: "Vox Clamantis",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Elegant%20Italic%20calligraphy%20of%20Latin%20text%20Vox%20Clamantis%20in%20Deserto%2C%20clean%20black%20ink%20on%20cream%20paper%2C%20renaissance%20slanted%20style%2C%20subtle%20gothic%20influence%2C%20fine%20art%20lettering&image_size=portrait_4_3",
    englishText: "Vox clamantis in deserto — a voice crying in the wilderness.",
    materials: "Paper: 120gsm smooth card / Pen: Pilot Parallel 3.8mm / Ink: Rohrer & Klingner Salix",
    thoughts: "Italic with a slight gothic slant. The tension between the classical italic structure and the medieval subject matter is what draws me to this piece.",
    date: "2026-08-18",
    tag: "Italic"
  },
  {
    id: "work-3",
    title: "Mors Ultima",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Dramatic%20Old%20English%20blackletter%20calligraphy%20of%20text%20Mors%20Ultima%20Linea%20Rerum%2C%20heavy%20weight%20lettering%2C%20dark%20background%2C%20white%20ink%2C%20gothic%20cathedral%20vibe%2C%20subtle%20blood%20red%20accents%2C%20moody%20atmosphere&image_size=portrait_4_3",
    englishText: "Mors ultima linea rerum est — death is the final boundary of all things.",
    materials: "Paper: handmade 300gsm watercolor / Pen: Hunt 107 pointed nib / Ink: Sumi ink, 3 drops crimson",
    thoughts: "Modern gothic interpretation of the old English script. The crimson ink bleeding at the terminals suggests the fragility beneath the blackletter's stern facade.",
    date: "2026-08-12",
    tag: "Old English & German text & Modern Gothic"
  },
  {
    id: "work-4",
    title: "Nocturne",
    image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Minimalist%20gothic%20calligraphy%20of%20single%20word%20Nocturne%2C%20mix%20of%20textura%20and%20italic%2C%20monochrome%20black%20and%20white%2C%20negative%20space%20composition%2C%20clean%20elegant%20minimal%20aesthetic&image_size=portrait_4_3",
    englishText: "In the silence between words, the night writes its own scripture.",
    materials: "Paper: Clairefontaine 90gsm / Pen: Leonardt Principalities / Ink: Sumo Moonlight",
    thoughts: "An experiment in restraint. Not strictly one style — a hybrid of Textura rhythm and Italic flow. Filed under 'Others' because it resists easy classification, as most interesting things do.",
    date: "2026-08-05",
    tag: "Others"
  }
];
