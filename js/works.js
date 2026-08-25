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
    title: "To be or not to be",
    image: ["images/hamlet.jpg"],
    englishText: "With this regard their currents turn awry,\nAnd lose the name of action.",
    materials: "",
    thoughts: "",
    date: "2019-05-30",
    tag: "Textura Quadrata"
  },

  {
    id: "work-2",
    title: "",
    image: ["images/dream.jpg"],
    englishText: "After the night I burned all my memory, my dream becomes transparent.\n有一个夜晚，烧毁了我所有的回忆。\n从此，我的梦就变得透明了。",
    materials: "",
    thoughts: "",
    date: "2019-07-15",
    tag: "Textura Quadrata"
  },

  {
    id: "work-3",
    title: "",
    image: ["images/king.jpg"],
    englishText: "My name is Ozymandias, King of Kings;\nLook on my Works, ye Mighty, and despair!\n我是万王之王，奥兹曼斯迪亚斯；\n功业盖物，强者折服",
    materials: "",
    thoughts: "",
    date: "2019-10-30",
    tag: "Textura Quadrata"
  },

  {
    id: "work-4",
    title: "Divina Commedia",
    image: ["images/Divina.jpg"],
    englishText: "The power of god, the highest intelligence and consumate affections.\n正义促动我那崇高的造物主;\n神灵的威力、最高的智慧和无上的慈爱，\n这三位一体把我塑造出来。",
    materials: "",
    thoughts: "",
    date: "2020-01-09",
    tag: "Textura Quadrata"
  },

  {
    id: "work-5",
    title: "Do not go gentle into that good night",
    image: ["images/dylan.jpg"],
    englishText: "Do not go gentle into that good night,\nOld age should burn and rave at close of day;\nRage, rage against the dying of the light.\n不要温和地走进那个良夜，\n老年应当在日暮时燃烧咆哮；\n怒斥，怒斥光明的消逝",
    materials: "",
    thoughts: "",
    date: "2020-02-06",
    tag: "Textura Quadrata"
  },

  {
    id: "work-6",
    title: "Mozart",
    image: ["images/Mozart.jpg"],
    englishText: "Irgendwo wird immer getanzt.\n血液中流淌着香槟 鬓边别着一朵纸玫瑰",
    materials: "",
    thoughts: "",
    date: "2020-02-20",
    tag: "Textura Quadrata"
  },

  {
    id: "work-7",
    title: "",
    image: ["images/opera.jpg"],
    englishText: "The Phantom of the Opera is there.\nInside your mind.",
    materials: "",
    thoughts: "",
    date: "2020-03-19",
    tag: "Old English & German text & Modern Gothic"
  },

  {
    id: "work-8",
    title: "",
    image: ["images/Borges_1.jpg"],
    englishText: "Resbalo por tu tarde como el cansancio por la piedad de un declive.\n我滑下你的暮色\n如厌倦滑下一道斜坡的虔诚",
    materials: "",
    thoughts: "",
    date: "2020-03-30",
    tag: "Textura Quadrata"
  },

  {
    id: "work-9",
    title: "Le Petit Prince",
    image: ["images/Prince.jpg"],
    englishText: "如果有人钟爱着一朵独一无二的、盛开在浩瀚星海里的花。\n那么，当他抬头仰望繁星时，便会心满意足。\n他会告诉自己：“我心爱的花在那里，在那颗遥远的星星上。”",
    materials: "",
    thoughts: "",
    date: "2020-04-25",
    tag: "Textura Quadrata"
  },

  {
    id: "work-10",
    title: "",
    image: ["images/Wilde_1.jpg"],
    englishText: "With freedom, books, flowers, and the moon.\nWho could not be happy?\n拥有自由、书籍、鲜花和月亮的人，怎么会不快乐？",
    materials: "",
    thoughts: "",
    date: "2020-07-15",
    tag: "Textura Quadrata"
  },

  {
    id: "work-11",
    title: "",
    image: ["images/Les étoiles.jpg"],
    englishText: "Je voudrais les mille yeux de la nuit éternelle\nPour te contempler seul.\n\"我想要永恒之夜的千只眼睛，以便独独观赏你。\"",
    materials: "",
    thoughts: "",
    date: "2021-02-12",
    tag: "Textura Quadrata"
  },

  {
    id: "work-12",
    title: "",
    image: ["images/Neruda.jpg"],
    englishText: "Déjame que te hable también con tu silencio claro como una lámpara, simple como un anillo.\n并且让我借你的沉默与你说话\n你的沉默明亮如灯，简单如指环",
    materials: "",
    thoughts: "",
    date: "2021-11-11",
    tag: "Textura Quadrata"
  },

  {
    id: "work-13",
    title: "City of stars",
    image: ["images/laland.jpg"],
    englishText: "Are you shining just for me?",
    materials: "笔：百乐鸭嘴笔橙色\n墨：诗色<空境>\n纸：云萱纸背面",
    thoughts: "",
    date: "2026-08-22",
    tag: "Textura Quadrata"
  },

  {
    id: "work-14",
    title: "ECHOES OF THE EYE",
    image: ["images/outer wilds after.jpg"],
    englishText: "One eye called out.\nTwo eyes locked it away.\nThree eyes sought to find it.\nFour eyes witnessed the end.",
    materials: "笔：百乐鸭嘴笔橙色\n墨：写乐仓敷<美星的夜空>\n纸：宝虹木浆水彩纸32K中粗",
    thoughts: "",
    date: "2026-08-23",
    tag: "Textura Quadrata"
  },

  {
    id: "work-15",
    title: "",
    image: ["images/Borges_2.jpg"],
    englishText: "Cuentan que Ulises, harto de prodigios.\n人们说尤利西斯厌倦了奇迹。",
    materials: "笔：百乐鸭嘴笔橙色\n墨：写乐仓敷<美星的夜空>\n纸：云龙纸背面",
    thoughts: "",
    date: "2026-08-24",
    tag: "Textura Quadrata"
  }
];
