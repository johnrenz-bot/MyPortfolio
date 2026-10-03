"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/** Short enough to feel instant, long enough for the counter to read. */
const MIN_VISIBLE_MS = 850;
/** Ceiling the counter creeps toward while real assets are still loading. */
const PENDING_CEILING = 92;
/** Pause on 100 before the overlay fades, so it never blinks out. */
const HOLD_MS = 50;

type Props = {
  /** Fired once the counter reaches 100 and the hold timer elapses. */
  onDone?: () => void;
  minDuration?: number;
};

export default function PortfolioLoader({
  onDone,
  minDuration = MIN_VISIBLE_MS,
}: Props) {
  const [progress, setProgress] = useState(1);
  const finished = useRef(false);

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
    // Fonts are part of "ready" too — the display face swapping in after the
    // fade is a visible pop.
    document.fonts?.ready.then(markReady).catch(() => {});

    let shown = 1;

    const tick = () => {
      const elapsed = performance.now() - startedAt;

      // Creep toward the ceiling while real work is still in flight, so the
      // number always looks alive without promising something untrue.
      const creep = 1 + (elapsed / 620) * (PENDING_CEILING - 1);
      const target = assetsReady && elapsed >= minDuration ? 100 : creep;

      if (target > shown) {
        shown += Math.max(0.5, (target - shown) * 0.14);
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

      {/* Centered Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <p className="heading-display text-4xl md:text-6xl text-white tracking-widest">
            R<span className="text-neutral-500 font-light">Σ</span>NZ
          </p>
        </motion.div>
      </div>

      {/* Percentage on the right */}
      <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex flex-col items-end pointer-events-none">
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
