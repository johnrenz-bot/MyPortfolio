"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail } from "lucide-react";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function SubPageHeader({
  section,
  title,
}: {
  section: string;
  title: string;
}) {
  return (
    <header className="sticky top-0 z-40 w-full px-5 sm:px-8 lg:px-12 py-3.5 sm:py-4 bg-bg/80 backdrop-blur-xl border-b border-line">
      <div className="max-w-[960px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 shrink-0 text-[14px] font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to home</span>
          </Link>
          <div className="min-w-0">
            <p className="text-[14px] font-medium text-muted truncate">{section}</p>
            <p className="text-[16px] font-semibold text-ink truncate">{title}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}