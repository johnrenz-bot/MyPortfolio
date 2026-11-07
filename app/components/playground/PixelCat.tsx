"use client";

import { useEffect, useRef, useState } from "react";

const MESSAGES = [
  "Meow!",
  "Purr...",
  "Feed me?",
  "Zoomies!",
  "Nap time.",
  "Hello human!",
  "Mochi says hi",
];

const PIXEL_SIZE = 6;
const CAT_MAP: string[] = [
  "............",
  "....BB......",
  "...BWWB.....",
  "...BWWB.....",
  "....BB......",
  "..B.BB.B....",
  "..B.WW.B....",
  "...BBBB.....",
  "....BB......",
  "...B..B.....",
  "..B....B....",
  "............",
];

const COLOR_MAP: Record<string, string> = {
  B: "#171717",
  W: "#fafafa",
  ".": "transparent",
};

export default function PixelCat() {
  const [pos, setPos] = useState<{ left: number; top: number } | null>(null);
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const [message, setMessage] = useState<string | null>(null);
  const [eyesClosed, setEyesClosed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduceMotion(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  // blink
  useEffect(() => {
    if (reduceMotion) return;
    const schedule = () => {
      const delay = 2500 + Math.random() * 3500;
      return window.setTimeout(() => {
        setEyesClosed(true);
        window.setTimeout(() => setEyesClosed(false), 140);
        schedule();
      }, delay);
    };
    const id = schedule();
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  // speech bubble timer
  useEffect(() => {
    if (!message) return;
    const id = window.setTimeout(() => setMessage(null), 2800);
    return () => window.clearTimeout(id);
  }, [message]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (pos === null) {
      setPos({ left: rect.left, top: rect.top });
    }
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const left = e.clientX - dragOffset.current.x;
    const top = e.clientY - dragOffset.current.y;
    const clampedLeft = Math.max(0, Math.min(window.innerWidth - 80, left));
    const clampedTop = Math.max(0, Math.min(window.innerHeight - 80, top));
    setPos({ left: clampedLeft, top: clampedTop });
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const onClick = () => {
    if (dragging) return;
    setMessage(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
  };

  const style: React.CSSProperties = pos
    ? { left: pos.left, top: pos.top, right: "auto", bottom: "auto" }
    : { right: 24, bottom: 24 };

  return (
    <div
      className="fixed z-50 select-none cursor-grab active:cursor-grabbing"
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onClick={onClick}
    >
      {message && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs font-semibold shadow-md animate-bounce">
          {message}
        </div>
      )}
      <div
        className={`relative ${!reduceMotion && !dragging ? "animate-[mochiBob_2.4s_ease-in-out_infinite]" : ""}`}
        style={{ width: CAT_MAP[0].length * PIXEL_SIZE, height: CAT_MAP.length * PIXEL_SIZE }}
      >
        {CAT_MAP.map((row, y) =>
          row.split("").map((cell, x) => {
            if (cell === ".") return null;
            // eyes blink: close middle eye pixels when eyesClosed
            let color = COLOR_MAP[cell] || "transparent";
            if (eyesClosed && y === 2 && (x === 4 || x === 5 || x === 7 || x === 8)) {
              color = "transparent";
            }
            return (
              <div
                key={`${x}-${y}`}
                style={{
                  position: "absolute",
                  left: x * PIXEL_SIZE,
                  top: y * PIXEL_SIZE,
                  width: PIXEL_SIZE,
                  height: PIXEL_SIZE,
                  backgroundColor: color,
                }}
              />
            );
          }),
        )}
        {/* tail */}
        <div
          className={`absolute origin-left ${!reduceMotion ? "animate-[mochiTail_1.2s_ease-in-out_infinite]" : ""}`}
          style={{
            left: (CAT_MAP[0].length - 2) * PIXEL_SIZE,
            top: 6 * PIXEL_SIZE,
            width: PIXEL_SIZE * 3,
            height: PIXEL_SIZE,
            backgroundColor: "#171717",
          }}
        />
      </div>
      <p className="mt-1 text-[10px] text-center text-neutral-500 dark:text-neutral-400">Mochi</p>
    </div>
  );
}