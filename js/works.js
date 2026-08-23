/* ============================================================
 *  LSTR117 — Works data
 * ------------------------------------------------------------
 *  To add a new work (3 steps):
 *  1. Put your image(s) in the images/ folder (jpg/png recommended)
 *  2. Copy the { ... } block below, paste at the end, edit fields
 *  3. Save this file, refresh the page — done
 *
 *  Fields:
 *    id          : unique id (e.g. work-3)
 *    title       : work title (leave "" to hide)
 *    images      : array of image paths, e.g. ["images/a.jpg", "images/b.jpg"]
 *                  — single image: ["images/a.jpg"]
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
    image: ["images/dylan.jpg"],
    englishText: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n不要温和地走进那个良夜，\n老年应当在日暮时燃烧咆哮；\n怒斥，怒斥光明的消逝",
    materials: "",
    thoughts: "",
    date: "2020-02-06",
    tag: "Textura Quadrata"
  },
  {
    id: "work-2",
    title: "",
    image: ["images/Les étoiles.jpg"],
    englishText: "Je voudrais les mille yeux de la nuit éternelle\nPour te contempler seul.\n\"我想要永恒之夜的千只眼睛，以便独独观赏你。\"",
    materials: "",
    thoughts: "",
    date: "2021-02-12",
    tag: "Textura Quadrata"
  },
  {
    id: "work-3",
    title: "Mozart",
    image: ["images/Mozart.jpg"],
    englishText: "Irgendwo wird immer getanzt.\n血液中流淌着香槟 鬓边别着一朵纸玫瑰",
    materials: "",
    thoughts: "",
    date: "2020-02-20",
    tag: "Textura Quadrata"
  },
  {
    id: "work-4",
    title: "",
    image: ["images/Neruda.jpg"],
    englishText: "Déjame que te hable también con tu silencio claro como una lámpara, simple como un anillo.\n并且让我借你的沉默与你说话\n你的沉默明亮如灯，简单如指环",
    materials: "",
    thoughts: "",
    date: "2021-11-11",
    tag: "Textura Quadrata"
  },
  {
    id: "work-5",
    title: "",
    images: ["images/Wilde_1.jpg"],
    englishText: "With freedom, books, flowers, and the moon.\nWho could not be happy?\n拥有自由、书籍、鲜花和月亮的人，怎么会不快乐？",
    materials: "",
    thoughts: "",
    date: "2020-07-15",
    tag: "Textura Quadrata"
  }
];
