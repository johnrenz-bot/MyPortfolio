"use client";

import { useEffect } from "react";

/**
 * Wheel-driven inertial scrolling for pointer devices.
 *
 * Native `scroll-behavior: smooth` only covers anchor jumps and programmatic
 * scrolls — the wheel still steps in discrete notches. This adds a light
 * damping loop on top so trackpad and mouse-wheel scrolling reads as one
 * continuous motion instead of a staircase.
 *
 * Deliberate choices:
 * - Touch is left completely alone: the OS momentum curve is better than
 *   anything we can reimplement, and hijacking it breaks rubber-banding.
 * - `prefers-reduced-motion` disables the loop entirely.
 * - Inner scrollable containers (code blocks, carousels, overflow panes) win
 *   over the page, so nested scrolling still works.
 * - Damping is high (0.18) on purpose — enough smoothing to remove the
 *   notching, short enough that the page never feels like it is drifting.
 */

const DAMPING = 0.18;
/** Ignore tiny deltas so trackpad jitter and stray events don't start a loop. */
const MIN_DELTA = 0.5;

function canScrollWithin(el: Element) {
  const style = window.getComputedStyle(el);
  const overflowY = style.overflowY;
  if (overflowY !== "auto" && overflowY !== "scroll" && overflowY !== "overlay") {
    return false;
  }
  return el.scrollHeight > el.clientHeight + 1;
}

function innerScrollableUnder(target: EventTarget | null, deltaY: number) {
  if (!(target instanceof Element)) return false;
  const nodes = target.closest<HTMLElement>(
    "[data-scroll-container], .overflow-y-auto, .overflow-y-scroll, .overflow-auto, .overflow-scroll",
  );
  if (!nodes) return false;
  if (!canScrollWithin(nodes)) return false;

  const { scrollTop, scrollHeight, clientHeight } = nodes;
  const atTop = scrollTop <= 0;
  const atBottom = scrollTop + clientHeight >= scrollHeight - 1;
  // Only hand the wheel back to the page once this container is exhausted in
  // the direction of travel.
  return deltaY < 0 ? !atTop : !atBottom;
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");

    let target = window.scrollY;
    let current = target;
    let raf = 0;

    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const animate = () => {
      const diff = target - current;
      if (Math.abs(diff) < 0.4) {
        current = target;
        window.scrollTo(0, current);
        raf = 0;
        return;
      }
      current += diff * DAMPING;
      window.scrollTo(0, current);
      raf = requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      if (reduceMotion.matches || coarsePointer.matches) return;
      // Ctrl+wheel is browser zoom, and shift+wheel is horizontal panning.
      if (event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.deltaMode !== WheelEvent.DOM_DELTA_PIXEL) return;
      if (Math.abs(event.deltaY) < MIN_DELTA) return;
      if (innerScrollableUnder(event.target, event.deltaY)) return;

      event.preventDefault();

      const max = document.documentElement.scrollHeight - window.innerHeight;
      target = Math.min(max, Math.max(0, target + event.deltaY));

      if (!raf) {
        current = window.scrollY;
        raf = requestAnimationFrame(animate);
      }
    };

    const onTouchStart = () => stop();

    const syncTarget = () => {
      if (!raf) target = window.scrollY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchStart, { passive: true });
    window.addEventListener("resize", syncTarget);

    return () => {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchStart);
      window.removeEventListener("resize", syncTarget);
    };
  }, []);

  return null;
}
