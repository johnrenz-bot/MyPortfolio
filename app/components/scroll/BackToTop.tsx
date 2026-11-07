"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const THRESHOLD = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > THRESHOLD);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed bottom-24 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-black/8 dark:border-white/10 backdrop-blur-xl shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
    >
      <ArrowUp className="w-4 h-4" />
    </button>
  );
}