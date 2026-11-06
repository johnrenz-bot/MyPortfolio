"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function SubPageHeader({
  section,
  title,
  cvHref = "/CV/John_Renz_Bandianon_CV.pdf",
}: {
  section: string;
  title: string;
  cvHref?: string;
}) {
  return (
    <header className="sticky top-0 z-40 w-full px-5 sm:px-8 lg:px-12 py-3.5 sm:py-4 bg-white/70 dark:bg-[#09090b]/70 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-black/8 dark:border-white/10 hover:border-[#444444] dark:hover:border-[#444444] hover:bg-white dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <div className="relative w-5 h-5 shrink-0">
              <Image
                src="/Image/Favicon/Favicon.png"
                alt="Official Logo"
                width={20}
                height={20}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="font-black tracking-tight uppercase">RΣNZ</span>
          </Link>
          <div className="min-w-0">
            <p className="label-mono text-neutral-400 dark:text-neutral-500 truncate text-[10px]">
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
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:border-[#444444] hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:border-[#444444] dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            View CV
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}