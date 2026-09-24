"use client";

import { EVENTS } from "../../../data/events";
import type { Event } from "../../../types";

export default function CommunitySection() {
  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col gap-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
            <span className="label-mono text-neutral-500 dark:text-neutral-400">
              Community Activity
            </span>
          </div>
          <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white">
            Events & Meetups
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EVENTS.map((event: Event, index: number) => (
            <div
              key={index}
              className={`reveal delay-${(index % 3) + 1} p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`}
            >
              <div>
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{event.badge}</span>
                  <span className="label-mono bg-white dark:bg-neutral-950 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mb-2 leading-tight">
                  {event.name}
                </h3>
                <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-4">
                  {event.location}
                </p>
                <div className="w-12 h-[2px] bg-neutral-200 dark:bg-neutral-700 mb-4" />
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-200 mb-2 uppercase tracking-wide">
                  {event.role}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
