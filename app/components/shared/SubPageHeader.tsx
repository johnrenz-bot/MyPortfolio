"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
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
            <div className="relative w-7 h-7 shrink-0 logo-hover animate-fade-in-up">
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
            href={`mailto:johnrenzbandianon9@gmail.com?subject=${encodeURIComponent(
              "Request for CV — John Renz C. Bandianon",
            )}&body=${encodeURIComponent(
              "Hello John Renz, I would like to request a copy of your updated CV. Thank you!",
            )}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:border-[#444444] hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:border-[#444444] dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Request a CV
            <Mail className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  );
}