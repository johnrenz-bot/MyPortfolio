"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { JOURNEY_CHAPTERS } from "../../../data/journey";

export default function TimelineSection() {
  return (
    <div className="relative w-full bg-[#f9fafb] dark:bg-[#111111] transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col gap-7 mb-12 sm:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                2022 — Now
              </span>
            </div>
            <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white">
              Career Journey
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl">
              School, internships, the events I volunteered at, and the build
              that finally had real users on it — in the order they happened.
            </p>
          </div>

          <Link
            href="/Journey"
            className="group inline-flex items-center gap-2.5 self-start lg:self-end px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.18em] bg-neutral-900 text-white border border-neutral-900 dark:bg-white dark:text-neutral-950 dark:border-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            Read the full story
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <ol className="relative max-w-4xl">
          {/* Spine */}
          <div
            aria-hidden
            className="absolute left-[1.4375rem] top-6 bottom-10 w-px bg-gradient-to-b from-neutral-200 via-neutral-300 to-transparent dark:from-neutral-800 dark:via-neutral-700 dark:to-transparent"
          />

          {JOURNEY_CHAPTERS.map((chapter, index) => {
            const isLast = index === JOURNEY_CHAPTERS.length - 1;
            return (
              <li
                key={chapter.id}
                className={`reveal delay-${(index % 4) + 1} relative pl-16 sm:pl-24 ${
                  isLast ? "pb-0" : "pb-9 sm:pb-12"
                }`}
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 flex h-[2.875rem] w-[2.875rem] items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] text-[11px] font-black tracking-tight text-neutral-900 dark:text-white transition-colors duration-300 hover:border-neutral-900 dark:hover:border-white"
                >
                  {chapter.chapter}
                </span>

                <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-2.5 pt-2">
                  {chapter.period}
                </p>

                <h3 className="text-lg sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight mb-2 max-w-2xl">
                  {chapter.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3.5 max-w-2xl">
                  {chapter.kicker}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {chapter.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md bg-neutral-100 dark:bg-neutral-800/70 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>

        <div className="reveal mt-12 sm:mt-14 max-w-4xl">
          <Link
            href="/Journey"
            className="group inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-neutral-900 dark:text-white border-b border-neutral-900/25 dark:border-white/25 hover:border-neutral-900 dark:hover:border-white pb-1.5 transition-colors duration-300"
          >
            Read the full story
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
