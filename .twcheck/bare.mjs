import postcss from "postcss";
import tw from "@tailwindcss/postcss";
import fs from "fs";

const safe = (c) => "c" + c.replace(/[^a-z0-9]/gi, "_");

async function declsFor(cands) {
  const map = {};
  for (const c of cands) {
    const css =
      `@import "tailwindcss" source(none);\n.` + safe(c) + ` { @apply ${c}; }`;
    try {
      const res = await postcss([tw()]).process(css, {
        from: new URL("./in.css", import.meta.url).pathname.replace(/^\/(.:)/,"$1"),
      });
      const re = new RegExp(
        "\\." + safe(c).replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&") + "\\s*\\{([^}]*)\\}",
        "g",
      );
      let m; const d = [];
      while ((m = re.exec(res.css))) d.push(m[1].replace(/\s+/g, " ").trim());
      map[c] = d.length ? d.join(" ").replace(/\s+/g, " ").trim() : null;
    } catch {
      map[c] = "INVALID";
    }
  }
  return map;
}

const classes = JSON.parse(fs.readFileSync("./.twcheck/classes.json", "utf8"));

// For each arbitrary class, propose a bare-value candidate: strip the brackets
// and any unit, e.g. duration-[1100ms] -> duration-1100, z-[60] -> z-60.
function propose(cls) {
  const m = cls.match(/^((?:[a-z0-9-]+:)*)([a-z-]+?)-\[(.+)\](.*)$/);
  if (!m) return null;
  const [, variants, util, val, rest] = m;
  // only propose when the value is a plain number, optionally with a unit we can drop
  const num = val.match(/^(-?\d+(?:\.\d+)?)(px|ms|s)?$/);
  if (!num) return null;
  const bare = num[1];
  // fractions like 4/3 are not bare values
  return `${variants}${util}-${bare}${rest}`;
}

const pairs = [];
for (const cls of classes) {
  const cand = propose(cls);
  if (cand && cand !== cls) pairs.push([cls, cand]);
}

const all = pairs.flat();
const map = await declsFor(all);

const same = [];
const diff = [];
const none = [];
for (const [orig, cand] of pairs) {
  const a = map[orig];
  const b = map[cand];
  if (!a && !b) none.push([orig, cand, "both invalid"]);
  else if (!b) none.push([orig, cand, "candidate produced nothing"]);
  else if (!a) diff.push([orig, cand, "orig invalid"]);
  else if (a === b) same.push([orig, cand, a]);
  else diff.push([orig, cand, `${a}  VS  ${b}`]);
}

console.log("=== IDENTICAL (safe to replace) ===", same.length);
same.forEach(([o, c, d]) => console.log(`  ${o.padEnd(30)} -> ${c.padEnd(22)} ${d.slice(0, 70)}`));
console.log("\n=== DIFFERENT (do NOT replace) ===", diff.length);
diff.forEach(([o, c, d]) => console.log(`  ${o} -> ${c} :: ${d.slice(0, 160)}`));
console.log("\n=== NOT A BARE-VALUE EQUIVALENT (keep arbitrary) ===", none.length);
none.forEach(([o, c, r]) => console.log(`  ${o.padEnd(42)} ${r}`));