
import fs from "fs";
import { loadTheme, findCanonical } from "./theme.mjs";
const classes = JSON.parse(fs.readFileSync("./.twcheck/classes.json","utf8"));
const theme = loadTheme();
const res = findCanonical(classes, theme);
const fix = res.filter(r=>r.canonical);
const keep = res.filter(r=>!r.canonical);
console.log("=== FIXABLE:", fix.length, " KEEP:", keep.length, " TOTAL:", res.length);
console.log("\n=== FIXABLE ===");
fix.forEach(r=>console.log(r.cls.padEnd(34), "=>", r.canonical));
console.log("\n=== KEEP (no canonical equivalent) ===");
keep.forEach(r=>console.log(r.cls.padEnd(46), r.reason));
