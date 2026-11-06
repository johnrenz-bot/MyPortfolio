"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (
      typeof window === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let isScrolling = false;
    let targetY = window.scrollY;
    let currentY = window.scrollY;
    let rafId: number | null = null;

    // Cinematic, slightly slower yet highly responsive easing
    const ease = 0.088;

    function update() {
      const diff = targetY - currentY;
      if (Math.abs(diff) < 0.6) {
        currentY = targetY;
        window.scrollTo(0, currentY);
        isScrolling = false;
        if (rafId) cancelAnimationFrame(rafId);
        return;
      }

      currentY += diff * ease;
      window.scrollTo(0, currentY);
      rafId = requestAnimationFrame(update);
    }

    function onWheel(e: WheelEvent) {
      // Allow native scrolling inside popups, lightboxes, code blocks, or horizontal strips
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body) {
        if (
          target.getAttribute("role") === "dialog" ||
          target.classList.contains("zoom-container") ||
          target.classList.contains("no-scrollbar")
        ) {
          return;
        }
        const style = window.getComputedStyle(target);
        if (
          (style.overflowY === "auto" || style.overflowY === "scroll") &&
          target.scrollHeight > target.clientHeight
        ) {
          return;
        }
        target = target.parentElement;
      }

      // Preserve native trackpad gestures
      const isTrackpad = Math.abs(e.deltaY) < 35 && e.deltaMode === 0;
      if (isTrackpad) {
        currentY = window.scrollY;
        targetY = window.scrollY;
        return;
      }

      e.preventDefault();

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      const step = e.deltaY * 0.92;
      targetY = Math.max(0, Math.min(maxScroll, targetY + step));

      if (!isScrolling) {
        isScrolling = true;
        currentY = window.scrollY;
        rafId = requestAnimationFrame(update);
      }
    }

    function onScrollSync() {
      if (!isScrolling) {
        currentY = window.scrollY;
        targetY = window.scrollY;
      }
    }

    function onAnchorClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const id = href.slice(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          e.preventDefault();
          const targetTop =
            targetElement.getBoundingClientRect().top + window.scrollY - 70;
          targetY = Math.max(0, targetTop);
          if (!isScrolling) {
            isScrolling = true;
            currentY = window.scrollY;
            rafId = requestAnimationFrame(update);
          }
          history.pushState(null, "", `#${id}`);
        }
      }
    }

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("scroll", onScrollSync, { passive: true });
    document.addEventListener("click", onAnchorClick);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("scroll", onScrollSync);
      document.removeEventListener("click", onAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return null;
}

