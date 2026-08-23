/* ============================================================
 *  LSTR117 — Works data
 * ------------------------------------------------------------
 *  To add a new work (3 steps):
 *  1. Put your image in the images/ folder (jpg/png recommended)
 *  2. Copy the { ... } block below, paste at the end, edit fields
 *  3. Save this file, refresh the page — done
 *
 *  Fields:
 *    id          : unique id (e.g. work-2)
 *    title       : work title (leave "" to hide)
 *    image       : "images/yourfilename.jpg"  ← your image path
 *    englishText : the calligraphic text
 *    materials   : pen, ink, paper used (leave "" to hide)
 *    thoughts    : personal reflections (leave "" to hide)
 *    date        : upload date, YYYY-MM-DD
 *    tag         : "Textura Quadrata" | "Italic" |
 *                  "Old English & German text & Modern Gothic" | "Others"
 * ============================================================ */

const WORKS = [
  {
    id: "work-1",
    title: "Do not go gentle into that good night",
    image: "images/dylan.jpg",
    englishText: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n不要温和地走进那个良夜，\n老年应当在日暮时燃烧咆哮；\n怒斥，怒斥光明的消逝",
    materials: "",
    thoughts: "",
    date: "2020-02-06",
    tag: "Textura Quadrata"
  },
  {
    id: "work-2",
    title: "",
    image: "images/Les étoiles.jpg",
    englishText: "Je voudrais les mille yeux de la nuit éternelle\nPour te contempler seul.\n\"我想要永恒之夜的千只眼睛，以便独独观赏你。\"",
    materials: "",
    thoughts: "",
    date: "2021-02-12",
    tag: "Textura Quadrata"
  }
  {
    id: "work-3",
    title: "Mozart",
    image: "images/Mozart.jpg",
    englishText: "Irgendwo wird immer getanzt.\n血液中流淌着香槟 鬓边别着一朵纸玫瑰",
    materials: "",
    thoughts: "",
    date: "2020-02-20",
    tag: "Textura Quadrata"
  }
];
