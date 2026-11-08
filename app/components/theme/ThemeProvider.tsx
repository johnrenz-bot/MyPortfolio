"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useSyncExternalStore,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/** Top-to-bottom cascading pixel reveal: ~1000ms total. */
export const PIXEL_TRANSITION_MS = 1000;
const PIXEL_SIZE = 8;
const WAVE_MS = 650;
const FADE_MS = 350;
const SAMPLE_STEP = 32;

function subscribeTheme(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("theme-change", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("theme-change", callback);
    media.removeEventListener("change", callback);
  };
}

function getThemeSnapshot(): Theme {
  try {
    const saved = localStorage.getItem("rznz_theme") as Theme | null;
    if (saved === "light" || saved === "dark") {
      return saved;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  } catch {
    return "light";
  }
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function applyTheme(newTheme: Theme) {
  try {
    localStorage.setItem("rznz_theme", newTheme);
  } catch {
    // ignore
  }
  document.documentElement.classList.toggle("dark", newTheme === "dark");
}

function notifyThemeChange() {
  window.dispatchEvent(new Event("theme-change"));
}

/* ---------------- Top-to-bottom pixel cascade (canvas, no deps) ---------------- */

type Pixel = { x: number; y: number; color: string; delay: number; duration: number };

function parseRgb(value: string): [number, number, number, number] | null {
  const m = value.match(/[\d.]+/g);
  if (!m || m.length < 3) return null;
  const r = Number(m[0]);
  const g = Number(m[1]);
  const b = Number(m[2]);
  const a = m.length > 3 ? Number(m[3]) : 1;
  if ([r, g, b].some(Number.isNaN)) return null;
  return [r, g, b, Number.isNaN(a) ? 1 : a];
}

function compositeOver(fg: string, bg: [number, number, number]): string {
  const parsed = parseRgb(fg);
  if (!parsed) return fg;
  const [r, g, b, a] = parsed;
  if (a >= 1) return fg;
  if (a <= 0) return `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`;
  const cr = Math.round(r * a + bg[0] * (1 - a));
  const cg = Math.round(g * a + bg[1] * (1 - a));
  const cb = Math.round(b * a + bg[2] * (1 - a));
  return `rgb(${cr}, ${cg}, ${cb})`;
}

function sampleCellColor(x: number, y: number, bodyRgb: [number, number, number], cache: Map<string, string>): string {
  let el: Element | null = null;
  try {
    el = document.elementFromPoint(x, y);
  } catch {
    el = null;
  }
  let node: Element | null = el;
  while (node && node !== document.body && node !== document.documentElement) {
    const key = `${node.tagName}|${node.className && typeof node.className === "string" ? node.className.slice(0, 80) : ""}`;
    const cached = cache.get(key);
    if (cached) return cached;
    let bg = "";
    try {
      bg = getComputedStyle(node).backgroundColor;
    } catch {
      bg = "";
    }
    const parsed = parseRgb(bg);
    if (parsed && parsed[3] > 0.05) {
      const solid = compositeOver(bg, bodyRgb);
      cache.set(key, solid);
      return solid;
    }
    node = node.parentElement;
  }
  const bodyBg = getComputedStyle(document.body).backgroundColor || `rgb(${bodyRgb[0]}, ${bodyRgb[1]}, ${bodyRgb[2]})`;
  return compositeOver(bodyBg, bodyRgb);
}

function buildPixels(): { pixels: Pixel[]; vw: number; vh: number; cell: number } {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const cell = PIXEL_SIZE;
  const bodyRgb: [number, number, number] = (parseRgb(
    getComputedStyle(document.body).backgroundColor || "rgb(250, 250, 250)",
  )?.slice(0, 3) as [number, number, number]) || [250, 250, 250];
  const cache = new Map<string, string>();
  const pixels: Pixel[] = [];
  // Coarse sampling (32px) then subdividing into crisp 8px squares keeps
  // the wave fine-grained without thousands of elementFromPoint calls.
  for (let by = 0; by < vh; by += SAMPLE_STEP) {
    const sy = Math.min(by + SAMPLE_STEP / 2, vh - 0.5);
    for (let bx = 0; bx < vw; bx += SAMPLE_STEP) {
      const sx = Math.min(bx + SAMPLE_STEP / 2, vw - 0.5);
      const color = sampleCellColor(sx, sy, bodyRgb, cache);
      for (let yy = by; yy < Math.min(by + SAMPLE_STEP, vh); yy += cell) {
        for (let xx = bx; xx < Math.min(bx + SAMPLE_STEP, vw); xx += cell) {
          const cy = yy + cell / 2;
          const cx = xx + cell / 2;
          // Primary drive is Y (top -> bottom). Tiny jitter + slight
          // horizontal drift keep the edge connected, never scattered.
          const rowT = (cy / vh) * WAVE_MS;
          const jitter = (Math.random() - 0.5) * 48 + (cx / vw) * 20 - 10;
          const delay = Math.min(WAVE_MS + 20, Math.max(0, rowT + jitter));
          const duration = FADE_MS;
          pixels.push({ x: xx, y: yy, color, delay, duration });
        }
      }
    }
  }
  // Top-to-bottom order so the draw loop naturally paints the wave.
  pixels.sort((a, b) => a.y - b.y || a.x - b.x);
  return { pixels, vw, vh, cell };
}

function createPixelCanvas(vw: number, vh: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D } {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(vw * dpr);
  canvas.height = Math.round(vh * dpr);
  canvas.style.cssText = `position:fixed;inset:0;width:${vw}px;height:${vh}px;z-index:2147483647;pointer-events:none;`;
  canvas.setAttribute("aria-hidden", "true");
  document.body.appendChild(canvas);
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    canvas.remove();
    throw new Error("no 2d context");
  }
  ctx.scale(dpr, dpr);
  return { canvas, ctx };
}

function drawPixels(
  ctx: CanvasRenderingContext2D,
  pixels: Pixel[],
  cell: number,
  elapsed: number,
  vw: number,
  vh: number,
) {
  ctx.clearRect(0, 0, vw, vh);
  let lastColor = "";
  let lastAlpha = -1;
  for (let i = 0; i < pixels.length; i++) {
    const p = pixels[i];
    if (elapsed < p.delay) {
      if (p.color !== lastColor || lastAlpha !== 1) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = p.color;
        lastColor = p.color;
        lastAlpha = 1;
      }
      ctx.fillRect(p.x, p.y, cell, cell);
    } else if (elapsed < p.delay + p.duration) {
      const t = (elapsed - p.delay) / p.duration;
      const eased = 1 - Math.pow(1 - t, 2);
      const alpha = Math.max(0, 1 - eased);
      if (p.color !== lastColor || lastAlpha !== alpha) {
        ctx.globalAlpha = alpha;
        ctx.fillStyle = p.color;
        lastColor = p.color;
        lastAlpha = alpha;
      }
      ctx.fillRect(p.x, p.y, cell, cell);
    }
  }
  ctx.globalAlpha = 1;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getServerThemeSnapshot);
  const rafRef = useRef<number | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const timerRef = useRef<number | null>(null);
  const animatingRef = useRef(false);

  // Sync .dark on mount / external changes (initial paint already handled by
  // the inline script in layout.tsx). Never animate here — no flash on load.
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const cancelAnimation = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (canvasRef.current) {
      canvasRef.current.remove();
      canvasRef.current = null;
    }
    animatingRef.current = false;
  };

  // Always clean up overlay on unmount.
  useEffect(() => cancelAnimation, []);

  const applyAnimated = (newTheme: Theme) => {
    if (prefersReducedMotion()) {
      cancelAnimation();
      applyTheme(newTheme);
      notifyThemeChange();
      return;
    }

    // Rapid toggles: cancel the in-flight cascade so we sample the
    // currently visible (already-flipped) theme, then start fresh.
    cancelAnimation();

    let pixels: Pixel[] = [];
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let cell = PIXEL_SIZE;
    try {
      ({ pixels, vw, vh, cell } = buildPixels());
    } catch {
      applyTheme(newTheme);
      notifyThemeChange();
      return;
    }

    if (!pixels.length) {
      applyTheme(newTheme);
      notifyThemeChange();
      return;
    }

    let canvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D;
    try {
      ({ canvas, ctx } = createPixelCanvas(vw, vh));
    } catch {
      applyTheme(newTheme);
      notifyThemeChange();
      return;
    }
    canvasRef.current = canvas;
    animatingRef.current = true;

    // Paint old-theme pixels once, flip underneath in the same frame.
    drawPixels(ctx, pixels, cell, 0, vw, vh);
    applyTheme(newTheme);
    notifyThemeChange();

    const start = performance.now();
    const total = PIXEL_TRANSITION_MS; // ~1000ms
    const loop = (now: number) => {
      try {
        const elapsed = now - start;
        if (elapsed >= total) {
          cancelAnimation();
          return;
        }
        drawPixels(ctx, pixels, cell, elapsed, vw, vh);
      } catch {
        cancelAnimation();
        return;
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    // Safety net if rAF is throttled (background tab) — never stay covered.
    timerRef.current = window.setTimeout(() => {
      cancelAnimation();
    }, total + 100);
  };

  const setTheme = (newTheme: Theme) => {
    applyAnimated(newTheme);
  };

  const toggleTheme = () => {
    const current = getThemeSnapshot();
    const newTheme: Theme = current === "light" ? "dark" : "light";
    applyAnimated(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
