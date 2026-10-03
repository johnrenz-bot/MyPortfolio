"use client";

import { useEffect } from "react";

/**
 * Reuses the global `.reveal` / `.reveal-left` / `.reveal-right` / `.reveal-scale`
 * system from app/globals.css. Runs the same IntersectionObserver logic the
 * homepage uses, scoped to whatever container it is mounted on.
 */
export default function RevealOnScroll({
  containerId,
}: {
  containerId?: string;
}) {
  useEffect(() => {
    const root = containerId
      ? document.getElementById(containerId)
      : document.body;
    if (!root) return;

    const selector =
      ".reveal, .reveal-left, .reveal-right, .reveal-scale";

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );

    root.querySelectorAll(selector).forEach((el) => observer.observe(el));

    const mutationObserver = new MutationObserver(() => {
      root
        .querySelectorAll(
          ".reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)",
        )
        .forEach((el) => observer.observe(el));
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [containerId]);

  return null;
}