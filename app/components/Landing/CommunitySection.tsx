"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, MapPin } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EVENTS } from "../../../data/events";
import type { Event } from "../../../types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function RoleBadge({ role }: { role: string }) {
  const isSpecial = role === "Volunteer" || role === "Exhibitor";
  if (isSpecial) {
    return (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold uppercase tracking-wider bg-white/10 text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/20">
        {role}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full font-mono text-[10px] font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 bg-neutral-200/60 dark:bg-white/[0.05] border border-neutral-300 dark:border-white/10">
      {role}
    </span>
  );
}

export default function CommunitySection() {
  const shouldReduceMotion = useReducedMotion();

  const featuredEvents = EVENTS.slice(0, 2);
  const secondaryEvents = EVENTS.slice(2);

  const heroHighlights: Record<string, string> = {
    "GDG DevFest": "AI chatbot GrooveyyPH showcased at the event",
    "DEVCON Manila — Camp Run":
      "Overnight workshop & hackathon · Technical & AV Support",
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.01 : 0.65,
        delay: shouldReduceMotion ? 0 : i * 0.08,
        ease: EASE,
      },
    }),
  };

  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="reveal flex flex-col gap-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
            <span className="label-mono text-neutral-500 dark:text-neutral-400">
              COMMUNITY ACTIVITY
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white max-w-3xl">
              Developer Communities &amp; Organizations
            </h2>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/Gallery"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-white transition-colors"
              >
                See the photos
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <Link
                href="/gdg"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-white transition-colors"
              >
                GDG
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-neutral-300 dark:text-neutral-700">·</span>
              <Link
                href="/devcon"
                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-white transition-colors"
              >
                DEVCON
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* 1. FEATURED ROW (top): Two Large Hero Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {featuredEvents.map((event: Event, index: number) => {
            const highlight = heroHighlights[event.name];
            return (
              <motion.div
                key={event.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUpVariants}
                className="h-full"
              >
                <Link
                  href={event.href || "#"}
                  className="group relative h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 rounded-[2rem] bg-[#060709] border border-neutral-200 dark:border-white/[0.08] hover:border-neutral-400 dark:hover:border-white/80 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8),0_0_35px_-8px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-1.5 overflow-hidden block"
                  aria-label={`View ${event.name} page`}
                >
                  {/* Subtle Spotlight / Ambient Glow */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-radial-gradient from-white/[0.08] via-transparent to-transparent pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-6 sm:gap-8">
                    {/* Header: Logo + Badges */}
                    <div className="flex items-start justify-between gap-4">
                      {/* Big Logo (72–96px) with soft glow */}
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 p-3.5 sm:p-4 rounded-2xl bg-white/[0.04] dark:bg-neutral-900 border border-black/5 dark:border-white/10 shadow-lg group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:border-white/40 transition-all duration-300 flex items-center justify-center shrink-0">
                        {event.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={event.logo}
                              alt={`${event.name} logo`}
                              fill
                              sizes="96px"
                              className="object-contain transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <span className="text-3xl leading-none">
                            {event.badge}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        <span className="label-mono font-mono text-[11px] font-bold text-neutral-400 bg-neutral-100 dark:bg-black/50 px-3 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                          {event.year}
                        </span>
                        <RoleBadge role={event.role} />
                      </div>
                    </div>

                    {/* Title & Location */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-xs font-mono uppercase tracking-widest">
                        <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                        <span>{event.location}</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 dark:text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                        {event.name}
                      </h3>
                    </div>

                    {/* Highlight line */}
                    {highlight && (
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100 dark:bg-white/[0.08] border border-neutral-200 dark:border-white/20 text-xs font-medium text-neutral-800 dark:text-white/90 w-fit">
                        <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-white shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    )}

                    {/* Full Description */}
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {/* Prominent "View page" Button */}
                  <div className="relative z-10 pt-8 mt-6 border-t border-black/[0.06] dark:border-white/[0.06] flex items-center justify-between">
                    <span className="label-mono text-[11px] text-neutral-500 dark:text-neutral-400">
                      Explore Event Details
                    </span>
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/10 dark:bg-white/[0.06] group-hover:bg-white group-hover:text-black text-neutral-900 dark:text-white border border-neutral-300 dark:border-white/15 group-hover:border-white transition-all duration-300 shadow-sm">
                      <span>View page</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* 2. SECONDARY GRID (below): 3-Column Grid for More Events */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 pt-4">
            <div className="w-6 h-[1.5px] bg-neutral-900 dark:bg-white" />
            <span className="label-mono text-neutral-500 dark:text-neutral-400">
              More events
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {secondaryEvents.map((event: Event, index: number) => {
              const cardInner = (
                <div className="h-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-neutral-50 dark:bg-[#08090c] border border-neutral-200 dark:border-white/[0.07] hover:border-neutral-400 dark:hover:border-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group">
                  <div className="space-y-5">
                    {/* Top Row: Logo + Year */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="relative w-12 h-12 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-2 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-white/40 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all">
                        {event.logo ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={event.logo}
                              alt={`${event.name} logo`}
                              fill
                              sizes="48px"
                              className="object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        ) : (
                          <span className="text-xl leading-none">
                            {event.badge}
                          </span>
                        )}
                      </div>

                      <span className="label-mono font-mono text-[10px] text-neutral-500 dark:text-neutral-400 bg-white dark:bg-black/40 px-2.5 py-1 rounded-full border border-neutral-200 dark:border-white/10">
                        {event.year}
                      </span>
                    </div>

                    {/* Middle: Role, Title, Location, Description */}
                    <div className="space-y-2">
                      <RoleBadge role={event.role} />
                      <h4 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                        {event.name}
                      </h4>
                      <p className="label-mono text-neutral-500 dark:text-neutral-400 text-[10px] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-neutral-400" />
                        <span>{event.location}</span>
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  {event.href && (
                    <div className="pt-4 mt-5 border-t border-black/[0.05] dark:border-white/[0.05] flex items-center justify-between text-xs font-bold text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                      <span className="uppercase tracking-wider text-[10px]">
                        View page
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  )}
                </div>
              );

              return (
                <motion.div
                  key={event.name}
                  custom={index + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={fadeUpVariants}
                  className="h-full"
                >
                  {event.href ? (
                    <Link
                      href={event.href}
                      className="block h-full"
                      aria-label={`View ${event.name}`}
                    >
                      {cardInner}
                    </Link>
                  ) : (
                    <div className="h-full">{cardInner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
