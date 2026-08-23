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
 *    title       : work title
 *    image       : "images/yourfilename.jpg"  ← your image path
 *    englishText : the calligraphic text
 *    materials   : pen, ink, paper used
 *    thoughts    : personal reflections on the piece
 *    date        : upload date, YYYY-MM-DD
 *    tag         : "Textura Quadrata" | "Italic" |
 *                  "Old English & German text & Modern Gothic" | "Others"
 * ============================================================ */

const WORKS = [
  {
    id: "work-1",
    title: "Do not go gentle into that good night",
    image: "images/dylan.jpg",
    englishText: "Do not go gentle into that good night,
    不要温和地走进那个良夜，
    Old age should burn and rave at close of day;
    老年应当在日暮时燃烧咆哮；
    Rage, rage against the dying of the light.
    怒斥，怒斥光明的消逝",
    materials: "",
    thoughts: "",
    date: "2026-08-23",
    tag: "Textura Quadrata"
  }
];
