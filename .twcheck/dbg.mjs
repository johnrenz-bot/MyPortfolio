
import { loadTheme } from "./theme.mjs";
const t = loadTheme();
console.log("namespaces:", Object.keys(t).length);
console.log(Object.keys(t).slice(0,40));
for (const ns of ["max-width","width","height","z-index","transition-duration","border-radius","blur","font-size","spacing","inset","aspect-ratio","container"]) {
  const g = t[ns];
  console.log(ns, g ? Object.keys(g).length : "MISSING", g ? JSON.stringify(Object.entries(g).slice(0,12)) : "");
}
