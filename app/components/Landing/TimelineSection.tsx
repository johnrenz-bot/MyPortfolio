"use client";

import { EXPERIENCE_TIMELINE } from "../../../data/experience";
import type { TimelineItem } from "../../../types";

export default function TimelineSection() {
  return (
    <div className="relative w-full bg-[#f9fafb] dark:bg-[#111111] transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col gap-6 mb-12 sm:mb-16 text-center items-center">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
            <span className="label-mono text-neutral-500 dark:text-neutral-400">
              Continuous Growth
            </span>
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          </div>
          <h2 className="heading-section text-4xl sm:text-5xl lg:text-6xl text-neutral-950 dark:text-white">
            Career Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 relative">
          <div className="absolute left-6 sm:left-[3.25rem] top-8 bottom-8 w-[1.5px] bg-neutral-200 dark:bg-neutral-800" />
          {EXPERIENCE_TIMELINE.map((item: TimelineItem, index: number) => (
            <div
              key={index}
              className={`reveal delay-${(index % 4) + 1} flex gap-6 sm:gap-8 items-start relative z-10`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-950 text-xl font-black shadow-md border-4 border-[#f9fafb] dark:border-[#111111] shrink-0">
                {item.icon}
              </div>
              <div className="flex-1 p-6 sm:p-8 bg-white dark:bg-[#171717] rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-shadow">
                <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-2">
                  {item.period}
                </p>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.focus.map((tag: string, i: number) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-neutral-700 dark:text-neutral-300 text-[10px] font-bold uppercase tracking-wider rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
