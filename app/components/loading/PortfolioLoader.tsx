"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/** Short enough to feel instant, long enough for the counter to read. */
const MIN_VISIBLE_MS = 7500;
/** Ceiling the counter creeps toward while real assets are still loading. */
const PENDING_CEILING = 92;
/** Pause on 100 before the overlay fades, so it never blinks out. */
const HOLD_MS = 900;

type Point = { x: number; y: number };

type Trail = {
  points: Point[];
  delay: number;
  duration: number;
  color: string;
  width: number;
  opacity: number;
};

type Props = {
  /** Fired once the counter reaches 100 and the hold timer elapses. */
  onDone?: () => void;
  minDuration?: number;
};

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function buildTrails(w: number, h: number): Trail[] {
  const cx = w / 2;
  const cy = h / 2;
  const trails: Trail[] = [];
  const add = (
    pts: Point[],
    delay = 0.2,
    duration = 0.75,
    color = "rgba(255,255,255,0.85)",
    width = 1.2,
    opacity = 1,
  ) => trails.push({ points: pts, delay, duration, color, width, opacity });

  // Left edge -> logo
  add([
    { x: -20, y: cy },
    { x: w * 0.32, y: cy },
    { x: w * 0.32, y: cy - 26 },
    { x: cx - 62, y: cy - 26 },
    { x: cx - 62, y: cy },
  ]);
  // Right edge -> logo
  add([
    { x: w + 20, y: cy },
    { x: w * 0.68, y: cy },
    { x: w * 0.68, y: cy + 26 },
    { x: cx + 62, y: cy + 26 },
    { x: cx + 62, y: cy },
  ]);
  // Top edge -> logo
  add([
    { x: cx, y: -20 },
    { x: cx, y: h * 0.32 },
    { x: cx + 26, y: h * 0.32 },
    { x: cx + 26, y: cy - 68 },
    { x: cx, y: cy - 68 },
  ]);
  // Bottom edge -> logo
  add([
    { x: cx, y: h + 20 },
    { x: cx, y: h * 0.68 },
    { x: cx - 26, y: h * 0.68 },
    { x: cx - 26, y: cy + 68 },
    { x: cx, y: cy + 68 },
  ]);
  // Top-left corner -> logo
  add(
    [
      { x: -20, y: -20 },
      { x: w * 0.28, y: -20 },
      { x: w * 0.28, y: h * 0.28 },
      { x: cx - 52, y: h * 0.28 },
      { x: cx - 52, y: cy - 58 },
    ],
    0.25,
  );
  // Top-right corner -> logo
  add(
    [
      { x: w + 20, y: -20 },
      { x: w * 0.72, y: -20 },
      { x: w * 0.72, y: h * 0.28 },
      { x: cx + 52, y: h * 0.28 },
      { x: cx + 52, y: cy - 58 },
    ],
    0.25,
  );
  // Bottom-left corner -> logo
  add(
    [
      { x: -20, y: h + 20 },
      { x: w * 0.28, y: h + 20 },
      { x: w * 0.28, y: h * 0.72 },
      { x: cx - 52, y: h * 0.72 },
      { x: cx - 52, y: cy + 58 },
    ],
    0.25,
  );
  // Bottom-right corner -> logo
  add(
    [
      { x: w + 20, y: h + 20 },
      { x: w * 0.72, y: h + 20 },
      { x: w * 0.72, y: h * 0.72 },
      { x: cx + 52, y: h * 0.72 },
      { x: cx + 52, y: cy + 58 },
    ],
    0.25,
  );
  // Secondary thinner traces
  add(
    [
      { x: 0, y: cy - 80 },
      { x: w * 0.2, y: cy - 80 },
      { x: w * 0.2, y: cy - 10 },
      { x: cx - 70, y: cy - 10 },
    ],
    0.3,
    0.8,
    "rgba(200,200,200,0.55)",
    0.8,
    0.7,
  );
  add(
    [
      { x: w, y: cy + 80 },
      { x: w * 0.8, y: cy + 80 },
      { x: w * 0.8, y: cy + 10 },
      { x: cx + 70, y: cy + 10 },
    ],
    0.3,
    0.8,
    "rgba(200,200,200,0.55)",
    0.8,
    0.7,
  );

  return trails;
}

function polylineLengths(points: Point[]) {
  const segs: number[] = [];
  let total = 0;
  for (let i = 1; i < points.length; i++) {
    const dx = points[i].x - points[i - 1].x;
    const dy = points[i].y - points[i - 1].y;
    const len = Math.hypot(dx, dy);
    segs.push(len);
    total += len;
  }
  return { segs, total };
}

function pointAlong(points: Point[], t: number): Point {
  const { segs, total } = polylineLengths(points);
  if (total === 0) return points[0];
  const target = clamp(t, 0, 1) * total;
  let acc = 0;
  for (let i = 0; i < segs.length; i++) {
    if (acc + segs[i] >= target || i === segs.length - 1) {
      const rem = target - acc;
      const ratio = segs[i] > 0 ? rem / segs[i] : 0;
      return {
        x: points[i].x + (points[i + 1].x - points[i].x) * ratio,
        y: points[i].y + (points[i + 1].y - points[i].y) * ratio,
      };
    }
    acc += segs[i];
  }
  return points[points.length - 1];
}

function drawPartial(
  ctx: CanvasRenderingContext2D,
  points: Point[],
  t: number,
) {
  const { segs, total } = polylineLengths(points);
  if (total === 0) return;
  const target = clamp(t, 0, 1) * total;
  ctx.moveTo(points[0].x, points[0].y);
  let acc = 0;
  for (let i = 0; i < segs.length; i++) {
    if (acc + segs[i] <= target) {
      ctx.lineTo(points[i + 1].x, points[i + 1].y);
      acc += segs[i];
    } else {
      const rem = target - acc;
      const ratio = segs[i] > 0 ? rem / segs[i] : 0;
      ctx.lineTo(
        points[i].x + (points[i + 1].x - points[i].x) * ratio,
        points[i].y + (points[i + 1].y - points[i].y) * ratio,
      );
      break;
    }
  }
}

export default function PortfolioLoader({
  onDone,
  minDuration = MIN_VISIBLE_MS,
}: Props) {
  const [progress, setProgress] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const finished = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(progress);
  const trailsRef = useRef<Trail[]>([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const startedAt = performance.now();
    let frame = 0;
    let assetsReady = document.readyState === "complete";

    const markReady = () => {
      assetsReady = true;
    };

    if (!assetsReady) {
      window.addEventListener("load", markReady, { once: true });
    }
    document.fonts?.ready.then(markReady).catch(() => {});

    let shown = 1;

    const tick = () => {
      const elapsed = performance.now() - startedAt;

      const creep = 1 + (elapsed / 4000) * (PENDING_CEILING - 1);
      const target = assetsReady && elapsed >= minDuration ? 100 : creep;

      if (target > shown) {
        shown += Math.max(0.3, (target - shown) * 0.08);
        if (target === 100 && shown > 99.4) shown = 100;
      }

      setProgress(Math.min(100, shown));

      if (shown >= 100 && !finished.current) {
        finished.current = true;
        window.removeEventListener("load", markReady);
        window.setTimeout(() => onDone?.(), HOLD_MS);
        return;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("load", markReady);
    };
  }, [onDone, minDuration]);

  // Canvas animation
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rebuild = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      sizeRef.current = { w, h, dpr };
      trailsRef.current = buildTrails(w, h);
    };

    rebuild();
    window.addEventListener("resize", rebuild);

    let raf = 0;
    const draw = () => {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const { w, h, dpr } = sizeRef.current;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        const p = progressRef.current / 100;
        const cx = w / 2;
        const cy = h / 2;

        // Soft center illumination
        const centerGlow = clamp(p * 1.2, 0, 1) * (p < 0.9 ? 1 : Math.max(0, 1 - (p - 0.9) / 0.1));
        if (centerGlow > 0) {
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(w, h) * 0.28);
          grad.addColorStop(0, `rgba(255,255,255,${0.18 * centerGlow})`);
          grad.addColorStop(0.5, `rgba(220,220,220,${0.06 * centerGlow})`);
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, w, h);
        }

        const trailFade =
          p < 0.9 ? 1 : Math.max(0, 1 - (p - 0.9) / 0.1);

        if (trailFade > 0) {
          for (const trail of trailsRef.current) {
            const rawTp = clamp((p - trail.delay) / trail.duration, 0, 1);
            const tp = easeInOutCubic(rawTp);
            if (tp <= 0) continue;

            ctx.save();
            ctx.globalAlpha = trailFade * trail.opacity;
            ctx.strokeStyle = trail.color;
            ctx.lineWidth = trail.width;
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.shadowBlur = 10;
            ctx.shadowColor = trail.color;

            ctx.beginPath();
            drawPartial(ctx, trail.points, tp);
            ctx.stroke();

            // Traveling pulse at head
            if (tp > 0 && tp < 0.999) {
              const head = pointAlong(trail.points, tp);
              ctx.shadowBlur = 18;
              ctx.shadowColor = "#ffffff";
              ctx.fillStyle = "rgba(255,255,255,0.95)";
              ctx.beginPath();
              ctx.arc(head.x, head.y, 2.6, 0, Math.PI * 2);
              ctx.fill();
              // outer glow
              ctx.globalAlpha = trailFade * trail.opacity * 0.35;
              ctx.fillStyle = "rgba(255,255,255,0.6)";
              ctx.beginPath();
              ctx.arc(head.x, head.y, 7, 0, Math.PI * 2);
              ctx.fill();
            }
            ctx.restore();
          }
        }

        // Final synchronized pulse across logo arrangement
        if (p >= 0.82 && p <= 0.97) {
          const t = easeInOutCubic((p - 0.82) / 0.15);
          const x = cx - 90 + t * 180;
          ctx.save();
          ctx.shadowBlur = 22;
          ctx.shadowColor = "#ffffff";
          // horizontal sweep
          const grad = ctx.createLinearGradient(x - 40, cy, x + 40, cy);
          grad.addColorStop(0, "rgba(255,255,255,0)");
          grad.addColorStop(0.5, "rgba(255,255,255,0.9)");
          grad.addColorStop(1, "rgba(255,255,255,0)");
          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(cx - 100, cy);
          ctx.lineTo(cx + 100, cy);
          ctx.stroke();
          // bright dot
          ctx.fillStyle = "rgba(255,255,255,0.95)";
          ctx.beginPath();
          ctx.arc(x, cy, 3.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", rebuild);
    };
  }, []);

  const p = progress / 100;
  const jrActive = reducedMotion || p >= 0.55;
  const renzActive = reducedMotion || p >= 0.72;

  const logoFilter = jrActive
    ? "drop-shadow(0 0 24px rgba(255,255,255,0.35))"
    : "grayscale(1) brightness(0.55) drop-shadow(0 0 10px rgba(255,255,255,0.08))";
  const wordmarkFilter = renzActive
    ? "drop-shadow(0 0 16px rgba(255,255,255,0.3))"
    : "grayscale(1) brightness(0.55)";

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] bg-[#09090b] overflow-hidden"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
      aria-label="Loading page"
    >
      {/* Faint grid — texture without noise */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />

      {/* Light trace canvas */}
      {!reducedMotion && (
        <canvas
          ref={canvasRef}
          aria-hidden
          className="absolute inset-0 z-0 pointer-events-none"
        />
      )}

      {/* Centered Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div
            className="relative w-16 h-16 sm:w-20 sm:h-20 transition-all duration-1000"
            style={{
              filter: logoFilter,
              opacity: jrActive ? 1 : 0.6,
            }}
          >
            <Image
              src="/Image/Favicon/Favicon.png"
              alt="Official Logo"
              fill
              sizes="80px"
              priority
              className="object-contain"
            />
          </div>
          <p
            className="heading-display text-2xl sm:text-3xl text-white tracking-[0.2em] uppercase font-bold transition-all duration-1000"
            style={{
              filter: wordmarkFilter,
              opacity: renzActive ? 1 : 0.55,
              textShadow: renzActive
                ? "0 0 18px rgba(255,255,255,0.35)"
                : "0 0 6px rgba(255,255,255,0.08)",
            }}
          >
            R<span className="text-neutral-500 font-light">Σ</span>NZ
          </p>
        </motion.div>
      </div>

      {/* Percentage on the right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex flex-col items-end pointer-events-none z-10">
        <div className="flex items-baseline tabular-nums select-none">
          <span className="heading-display text-[clamp(5rem,15vw,12rem)] leading-none text-white tracking-tighter">
            {String(Math.round(progress)).padStart(2, "0")}
          </span>
          <span className="heading-display text-[clamp(1.5rem,5vw,3rem)] leading-none text-neutral-600 ml-2">
            %
          </span>
        </div>
      </div>
    </motion.div>
  );
}