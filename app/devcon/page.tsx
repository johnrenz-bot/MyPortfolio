"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";

const DEVCON_IMAGES = [
  {
    src: "/Image/Devcon/Devcon.jpg",
    alt: "Opening keynote by Winston Damarillo, Founder and President of DEVCON Philippines",
    caption: "Opening keynote — DEVCON Philippines",
    span: "wide" as const,
  },
  {
    src: "/Image/Devcon/DEvcon2.jpg",
    alt: "Elevated view over the hackathon floor with a countdown projected on the wall",
    caption: "The room mid-build",
    span: "normal" as const,
  },
  {
    src: "/Image/Devcon/Devcon3.jpg",
    alt: "DEVCON Manila Camp Run participants gathered at the event",
    caption: "Camp Run: Go Agentic",
    span: "normal" as const,
  },
] as const;

const SPAN_CLASS: Record<"normal" | "wide" | "tall", string> = {
  normal: "sm:col-span-1",
  wide: "sm:col-span-2",
  tall: "sm:col-span-1",
};

const RATIO: Record<"normal" | "wide" | "tall", string> = {
  normal: "aspect-[4/3]",
  wide: "aspect-[16/7]",
  tall: "aspect-[3/4]",
};

const HIGHLIGHTS = [
  "Volunteered on the technical and AV side of the overnight workshop",
  "Performed slide QA and verified internet and AV readiness before sessions",
  "Set up and tested Hermes Agent demo workflows before and during the hackathon",
  "Identified and resolved issues ahead of participant-facing demo moments",
  "Supported ~50 participants across the Camp Run mini hackathon",
];

export default function DevconPage() {
  return (
    <div className="relative min-h-screen bg-[#f9fafb] dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <RevealOnScroll />
      <SubPageHeader section="Community" title="DEVCON Manila" />

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-20">
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">Devcon</span>
        </div>

        <div className="flex items-center gap-5 mb-8">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden flex items-center justify-center">
            <Image
              src="/Image/Community/devcon-logo.png"
              alt="DEVCON Philippines logo"
              fill
              sizes="80px"
              className="object-contain p-2"
              priority
            />
          </div>
          <div>
            <h1 className="reveal delay-1 heading-display text-[clamp(28px,5vw,60px)] text-neutral-950 dark:text-white leading-tight">
              Camp Run
            </h1>
            <p className="text-neutral-400 dark:text-neutral-500 text-lg font-semibold">Go Agentic with Hermes</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="reveal delay-2 lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Camp Run was an overnight workshop and mini hackathon at DEVCON Manila, run by Avtica and
              Amihan — participants learned about agentic AI workflows, then built and ran their own
              Hermes Agent implementations.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I volunteered on the technical and AV side: slide QA, internet and AV readiness checks,
              setting up the Hermes Agent demo, and testing workflows before and during the hackathon to
              catch issues before the room found them.
            </p>
          </div>
          <div className="reveal delay-3 lg:col-span-5 flex flex-wrap gap-3">
            <div className="flex flex-col gap-2 w-full">
              <div className="px-5 py-4 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  Role
                </div>
                <div className="text-sm font-black text-neutral-900 dark:text-white">
                  Technical &amp; AV Volunteer
                </div>
              </div>
              <div className="px-5 py-4 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-xl">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                  Event
                </div>
                <div className="text-sm font-black text-neutral-900 dark:text-white">
                  October 2, 2026
                </div>
              </div>
            </div>
            <a
              href="https://devcon.ph/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              DEVCON Philippines
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <div className="reveal flex items-center gap-3 mb-8">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">Event Photos</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {DEVCON_IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`reveal delay-${(i % 3) + 1} group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 ${SPAN_CLASS[img.span]}`}
            >
              <div className={`relative w-full ${RATIO[img.span]}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="text-sm font-bold text-white tracking-tight">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Volunteer role highlight */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="reveal flex items-center gap-3 mb-8">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">Volunteer Contributions</span>
        </div>

        <div className="reveal rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] p-8 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="heading-section text-2xl sm:text-3xl text-neutral-950 dark:text-white mb-4">
                Camp Run: Go Agentic with Hermes Agent
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                An overnight workshop and mini hackathon organized by DEVCON Manila, Avtica, and Amihan.
                The format was learn → build → run: participants worked with Hermes Agent to build
                agentic AI workflows in a single session.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["DEVCON Manila", "Avtica", "Amihan", "Hermes Agent", "Hackathon", "AV & Demo Support"].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-semibold tracking-wider uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
                What I Did
              </p>
              <div className="space-y-3">
                {HIGHLIGHTS.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">{h}</span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-xs text-neutral-500 italic border-l-2 border-neutral-300 dark:border-neutral-700 pl-3">
                Most of my most useful work has been at the edges of someone else&apos;s event, making
                sure the demo doesn&apos;t die in front of a crowd.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-lg sm:text-xl font-black tracking-[-0.06em] uppercase text-neutral-900 dark:text-white">
            RΣNZ
          </p>
          <Link
            href="/gdg"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← GDG
          </Link>
          <Link
            href="/Gallery"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Gallery
          </Link>
          <Link
            href="/"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </footer>
    </div>
  );
}
