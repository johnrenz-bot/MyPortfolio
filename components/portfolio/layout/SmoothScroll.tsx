"use client";

import { createContext, useCallback, useContext } from "react";

/**
 * Native smooth-scroll provider — no scroll library.
 * Uses the browser's own momentum (wheel/trackpad/touch/keyboard) plus
 * `scroll-behavior: smooth` for programmatic moves, respecting
 * `prefers-reduced-motion`. Keeps the `useSmoothScroll()` API so
 * existing callers (ViewProjectsButton) need no changes.
 */

type ScrollTarget = string | HTMLElement;

type SmoothScrollContextValue = {
  scrollTo: (target: ScrollTarget, options?: { offset?: number; immediate?: boolean }) => void;
  stop: () => void;
  start: () => void;
  lenis: null;
  isEnabled: boolean;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
  stop: () => {},
  start: () => {},
  lenis: null,
  isEnabled: false,
});

export function useSmoothScroll(): SmoothScrollContextValue {
  return useContext(SmoothScrollContext);
}

/** Sticky-header offset used for anchor scrolling (matches globals.css). */
export const NATIVE_SCROLL_OFFSET = -88;

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function nativeScrollTo(target: ScrollTarget, options?: { offset?: number; immediate?: boolean }) {
  const behavior: ScrollBehavior = prefersReducedMotion() || options?.immediate ? "auto" : "smooth";
  const offset = options?.offset ?? NATIVE_SCROLL_OFFSET;
  try {
    if (typeof target === "string") {
      const el = document.querySelector(target);
      if (el instanceof HTMLElement) {
        const top = el.getBoundingClientRect().top + window.scrollY + offset;
        window.scrollTo({ top: Math.max(0, top), behavior });
        return;
      }
      const y = Number.parseFloat(target);
      if (!Number.isNaN(y)) {
        window.scrollTo({ top: Math.max(0, y), behavior });
      }
    } else if (target instanceof HTMLElement) {
      const top = target.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: Math.max(0, top), behavior });
    }
  } catch {
    // Fallback to native anchor behavior.
    try {
      if (typeof target === "string") {
        document.querySelector(target)?.scrollIntoView({ behavior });
      } else {
        target.scrollIntoView({ behavior });
      }
    } catch {
      // ignore
    }
  }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollTo = useCallback(
    (target: ScrollTarget, options?: { offset?: number; immediate?: boolean }) => {
      nativeScrollTo(target, options);
    },
    [],
  );
  const stop = useCallback(() => {}, []);
  const start = useCallback(() => {}, []);

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, stop, start, lenis: null, isEnabled: false }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
