"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BRAND } from "../../../constants/brand";
import { ThemeToggle } from "../theme/ThemeToggle";

/**
 * Shared sub-page chrome: matches the homepage header (RΣNZ wordmark, theme
 * toggle, pill buttons) so new pages feel like the same site.
 *
 * The CV action opens the visitor's mail client with a pre-filled CV request —
 * the CV is not published as a downloadable file.
 */
export default function SubPageHeader({
  section,
  title,
  cvHref = BRAND.cvRequestHref,
}: {
  section: string;
  title: string;
  cvHref?: string;
}) {
  return (
    <header className="sticky top-0 z-40 w-full px-5 sm:px-8 lg:px-12 py-4 sm:py-5 bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 shrink-0 px-3 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-black/8 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <div className="min-w-0">
            <p className="label-mono text-neutral-400 dark:text-neutral-500 truncate">
              {section}
            </p>
            <p className="text-sm font-black tracking-tight text-neutral-900 dark:text-white truncate">
              {title}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />
          <a
            href={cvHref}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Request CV
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}