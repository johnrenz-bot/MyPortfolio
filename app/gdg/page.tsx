"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";
import { FaGithub } from "react-icons/fa";

const GDG_IMAGES = [
  {
    src: "/Image/GDG/GDG DevFest GrooveyAI.png",
    alt: "GrooveyyPH AI chatbot about Philippine performing arts featured at GDG DevFest",
    caption: "GrooveyyPH at GDG DevFest",
    span: "wide" as const,
  },
  {
    src: "/Image/GDG/GDG DevFest AppBuild.png",
    alt: "App Build session at GDG DevFest Philippines",
    caption: "GDG DevFest — App Build",
    span: "normal" as const,
  },
  {
    src: "/Image/GDG/GDG DevFest Stitch.png",
    alt: "GDG DevFest Stitch event materials",
    caption: "GDG DevFest — Stitch",
    span: "normal" as const,
  },
  {
    src: "/Image/GDG/GDG DevFest Online.png",
    alt: "GDG DevFest Online session Philippines",
    caption: "GDG DevFest Online",
    span: "normal" as const,
  },
  {
    src: "/Image/GDG/GDG DevFest Online1.png",
    alt: "GDG DevFest Online event presentation slide",
    caption: "GDG DevFest Online — session",
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

export default function GDGPage() {
  return (
    <div className="relative min-h-screen bg-[#f9fafb] dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <RevealOnScroll />
      <SubPageHeader section="Community" title="Google Developer Groups" />

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-20">
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">GDG</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* GDG Logo + title */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex items-center gap-5">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden flex items-center justify-center p-2">
                <Image
                  src="/Image/Community/gdg-logo.png"
                  alt="Google Developer Groups logo"
                  fill
                  sizes="80px"
                  className="object-contain p-2"
                  priority
                />
              </div>
              <div>
                <h1 className="reveal delay-1 heading-display text-[clamp(28px,5vw,60px)] text-neutral-950 dark:text-white leading-tight">
                  GDG DevFest
                </h1>
                <p className="text-neutral-400 dark:text-neutral-500 text-lg font-semibold">Philippines</p>
              </div>
            </div>
            <p className="reveal delay-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
              I participated in GDG DevFest events organized by Google Developer Groups in the
              Philippines. GrooveyyPH — an AI chatbot about Philippine performing arts — was
              showcased as a student project during the event.
            </p>
          </div>
          <div className="reveal delay-3 lg:col-span-4 flex flex-wrap gap-3">
            <a
              href="https://gdg.community.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              GDG Community
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
          {GDG_IMAGES.map((img, i) => (
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

      {/* GrooveyyPH highlight */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-16 sm:pb-24">
        <div className="reveal flex items-center gap-3 mb-8">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">Featured Project</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] overflow-hidden">
          {/* Image */}
          <div className="relative w-full aspect-[16/9]">
            <Image
              src="/Image/GDG/GDG DevFest GrooveyAI.png"
              alt="GrooveyyPH AI chatbot about Philippine performing arts featured at GDG DevFest"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Info */}
          <div className="p-8 sm:p-10 lg:pr-12">
            <span className="label-mono px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 mb-4 inline-block">
              AI Chatbot Project
            </span>
            <h2 className="heading-section text-2xl sm:text-3xl lg:text-4xl text-neutral-950 dark:text-white mb-4">
              GrooveyyPH
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-3">
              An AI chatbot focused on Philippine performing arts — helping users explore cultural
              events, arts communities, and relevant performing arts information.
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
              Showcased as a student project at GDG DevFest Philippines. Built as a separate project
              alongside the Groove capstone platform.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {["AI Chatbot", "Philippine Performing Arts", "GDG DevFest"].map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-semibold tracking-wider uppercase"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://grooveyph.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                View Project
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/johnrenz-bot/GroooveyAI-"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white hover:-translate-y-0.5"
              >
                <FaGithub className="w-3.5 h-3.5" />
                GitHub
              </a>
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
            href="/devcon"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Devcon →
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
