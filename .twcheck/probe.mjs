
import postcss from "postcss";
import tw from "@tailwindcss/postcss";

const cands = process.argv.slice(2);
const safe = (c) => "c" + c.replace(/[^a-z0-9]/gi, "_");
const inline = cands.map((c) => `.${safe(c)} { ${c === "@raw" ? "" : ""} }`).join("\n");

// Use @apply so real utilities are generated
const css = `@import "tailwindcss" source(none);\n` +
  cands.map((c) => `@apply ${c};`).map(s => `/* ${s} */`).join("\n") +
  `\n.x{${cands.map((c,i)=>`--v${i}: 1;`).join("")}}\n` +
  cands.map((c, i) => `.${safe(c)} { @apply ${c}; }`).join("\n");

const res = await postcss([tw()]).process(css, { from: "C:/website/my-app/.twcheck/in.css" });
const out = res.css;
for (const c of cands) {
  const re = new RegExp("\\." + safe(c) + "\\s*\\{([^}]*)\\}", "g");
  let m; const d = [];
  while ((m = re.exec(out))) d.push(m[1].replace(/\s+/g," ").trim());
  console.log(c.padEnd(30), "|", d.length ? d.join(" || ").slice(0,260) : "(none)");
}
