"use client";

import { ArrowUpRight } from "lucide-react";
import { useSmoothScroll } from "@/components/portfolio/layout/SmoothScroll";

/**
 * Hero "View projects" — native smooth scroll to Selected Work.
 */
export default function ViewProjectsButton() {
  const { scrollTo } = useSmoothScroll();
  return (
    <button
      type="button"
      className="btn-primary"
      onClick={() => scrollTo("#selected-work")}
      aria-label="View projects — scroll to selected work"
    >
      View projects
      <ArrowUpRight className="h-3.5 w-3.5" />
    </button>
  );
}
