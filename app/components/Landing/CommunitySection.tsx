"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
            Events &amp; Meetups
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/Gallery"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              See the photos
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gdg"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              GDG
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/devcon"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
            >
              Devcon
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EVENTS.map((event: Event, index: number) => {
            const cardContent = (
              <>
                {/* Header: logo or badge + year badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden shrink-0">
                    {event.logo ? (
                      <div className="relative w-9 h-9">
                        <Image
                          src={event.logo}
                          alt={`${event.name} logo`}
                          fill
                          sizes="36px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="text-2xl leading-none" role="img" aria-label={event.name}>
                        {event.badge}
                      </span>
                    )}
                  </div>
                  <span className="label-mono bg-white dark:bg-neutral-950 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800">
                    {event.year}
                  </span>
                </div>

                {/* Event name */}
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mb-1.5 leading-tight">
                  {event.name}
                </h3>

                {/* Location */}
                <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-4">
                  {event.location}
                </p>

                <div className="w-12 h-[2px] bg-neutral-200 dark:bg-neutral-700 mb-4" />

                {/* Role */}
                <p className="text-sm font-bold text-neutral-900 dark:text-neutral-200 mb-2 uppercase tracking-wide">
                  {event.role}
                </p>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {event.description}
                </p>

                {/* "View page" affordance for linked cards */}
                {event.href && (
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    View page
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </div>
                )}
              </>
            );

            const cardClass = `reveal delay-${(index % 3) + 1} p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl flex flex-col justify-between hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors`;

            if (event.href) {
              return (
                <Link
                  key={index}
                  href={event.href}
                  className={`group ${cardClass}`}
                  aria-label={`View ${event.name} page`}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div key={index} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
