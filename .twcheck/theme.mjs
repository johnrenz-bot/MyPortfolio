import fs from "fs";

// Parse Tailwind's shipped default theme CSS into {namespace: {name: value}}.
export function loadTheme() {
  const css = fs.readFileSync(
    new URL("../node_modules/tailwindcss/theme.css", import.meta.url),
    "utf8",
  );
  const theme = {};
  const re = /--([a-z0-9-]+)\s*:\s*([^;]+);/gi;
  let m;
  while ((m = re.exec(css))) {
    const name = m[1];
    const value = m[2].replace(/\s+/g, " ").trim();
    // namespace is everything before the final segment (--spacing-3 => spacing)
    const parts = name.split("-");
    let ns = parts.slice(0, -1).join("-");
    let key = parts[parts.length - 1];
    // container widths live under --container-* but the utility is max-w-*
    if (ns === "container") ns = "container";
    (theme[ns] ||= {})[key] = value;
  }
  return theme;
}

// utility -> theme namespaces, matching Tailwind's own resolution order
const NS = {
  "max-w": ["max-width", "container", "spacing", "breakpoint"],
  "min-w": ["min-width", "spacing", "breakpoint", "container"],
  w: ["width", "spacing", "breakpoint", "container", "fraction"],
  "min-h": ["min-height", "spacing", "breakpoint"],
  "max-h": ["max-height", "spacing", "breakpoint"],
  h: ["height", "spacing", "breakpoint", "container", "fraction"],
  p: ["padding"],
  px: ["padding"],
  py: ["padding"],
  pt: ["padding"],
  pr: ["padding"],
  pb: ["padding"],
  pl: ["padding"],
  m: ["margin"],
  mx: ["margin"],
  my: ["margin"],
  mt: ["margin"],
  mr: ["margin"],
  mb: ["margin"],
  ml: ["margin"],
  top: ["inset", "spacing", "fraction", "percentage"],
  bottom: ["inset", "spacing", "fraction", "percentage"],
  left: ["inset", "spacing", "fraction", "percentage"],
  right: ["inset", "spacing", "fraction", "percentage"],
  inset: ["inset", "spacing", "fraction", "percentage"],
  z: ["z-index"],
  gap: ["gap", "spacing"],
  text: ["font-size", "color"],
  leading: ["line-height"],
  tracking: ["letter-spacing"],
  rounded: ["border-radius"],
  blur: ["blur"],
  duration: ["transition-duration"],
  delay: ["transition-delay"],
  shadow: ["box-shadow"],
  opacity: ["opacity"],
  basis: ["flex-basis", "percentage", "spacing"],
  order: ["order"],
  grow: ["flex-grow"],
  shrink: ["flex-shrink"],
  stroke: ["stroke-width"],
  "min-h-svh": ["spacing"],
};

export function findCanonical(classes, theme) {
  const out = [];
  for (const cls of classes) {
    const m = cls.match(/^((?:[a-z0-9-]+:)*)([a-z-]+?)-\[(.+)\](.*)$/);
    if (!m) {
      out.push({ cls, canonical: null, reason: "unparsed" });
      continue;
    }
    const [, variants, util, val, rest] = m;
    const namespaces = NS[util];
    if (!namespaces) {
      out.push({ cls, canonical: null, reason: "no-namespace" });
      continue;
    }
    let found = null;
    for (const ns of namespaces) {
      const group = theme[ns];
      if (!group) continue;
      for (const [key, resolved] of Object.entries(group)) {
        if (String(resolved) === val) {
          found = `${variants}${util}-${key}${rest}`;
          break;
        }
      }
      if (found) break;
    }
    out.push({ cls, canonical: found, value: val, util });
  }
  return out;
}