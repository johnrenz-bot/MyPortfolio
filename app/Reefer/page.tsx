"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";
import {
  REEFER_SECTIONS,
  REEFER_META,
  REEFER_STATS,
  REEFER_CHALLENGES,
  REEFER_REFERENCES,
  REEFER_REFERENCES_NOTE,
  REEFER_PROCESS,
  REEFER_ARCHITECTURE,
  REEFER_FEATURES,
  REEFER_ADDITIONAL_PAGES,
  REEFER_PALETTE,
  REEFER_TYPOGRAPHY,
  REEFER_SPACING,
  REEFER_COMPONENTS,
  REEFER_DELIVERABLES,
  REEFER_LEARNINGS,
  REEFER_GUIDELINES,
  REEFER_SHOWCASE,
} from "../../data/reefer";

/* ─── Shared section heading ─── */
function SectionTitle({
  index,
  label,
  title,
  lede,
}: {
  index: string;
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="reveal flex flex-col gap-4 mb-10 sm:mb-14">
      <div className="flex items-center gap-3">
        <span className="label-mono text-neutral-400 dark:text-neutral-500">
          {index}
        </span>
        <div className="h-[1.5px] w-8 bg-neutral-900 dark:bg-white" />
        <span className="label-mono text-neutral-500 dark:text-neutral-400">
          {label}
        </span>
      </div>
      <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white">
        {title}
      </h2>
      {lede && (
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
          {lede}
        </p>
      )}
    </div>
  );
}

/* ─── Showcase artwork card ─── */
function ShowcaseCard({
  item,
  index,
}: {
  item: (typeof REEFER_SHOWCASE)[0];
  index: number;
}) {
  const wide = index % 3 === 0;

  return (
    <figure
      className={`reveal delay-${(index % 4) + 1} group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 600px"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="px-4 sm:px-5 py-3.5 flex items-center gap-2.5 border-t border-neutral-200 dark:border-neutral-800">
        <span className="label-mono text-neutral-400 dark:text-neutral-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-sm font-bold text-neutral-800 dark:text-neutral-200">
          {item.caption}
        </span>
      </figcaption>
    </figure>
  );
}

export default function ReeferCaseStudy() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  /* Reading progress, same idiom as /Journey */
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (doc.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Section spy for the sticky rail */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = REEFER_SECTIONS.findIndex(
              (s) => s.id === entry.target.id,
            );
            if (i !== -1) setActive(i);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    REEFER_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f9fafb] dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <RevealOnScroll />
      <SubPageHeader section="Case Study" title="REEFER" />

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50">
        <div
          className="h-full bg-neutral-900 dark:bg-white transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Hero */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">
            {REEFER_META.kicker}
          </span>
        </div>

        <h1 className="reveal delay-1 heading-display text-[clamp(46px,10vw,120px)] text-neutral-950 dark:text-white mb-8">
          {REEFER_META.title}
        </h1>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <p className="reveal delay-2 lg:col-span-7 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {REEFER_META.summary}
          </p>

          {/* Fact panel */}
          <div className="reveal delay-3 lg:col-span-5 flex flex-col gap-4">
                      <div className="grid grid-cols-2 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
                        {[
                          { k: "Role", v: REEFER_META.role },
                          {
                            k: "Timeline",
                            v: `${REEFER_META.timeline} · ${REEFER_META.timelineDetail}`,
                          },
                          { k: "Deliverables", v: REEFER_META.deliverables },
                          { k: "Tool", v: `${REEFER_META.tool} · ${REEFER_META.discipline}` },
                        ].map((item) => (
                          <div
                            key={item.k}
                            className="bg-white dark:bg-[#171717] px-5 py-4 flex flex-col gap-1"
                          >
                            <span className="label-mono text-neutral-400 dark:text-neutral-500">
                              {item.k}
                            </span>
                            <span className="text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                              {item.v}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Live Figma file */}
                      <a
                        href={REEFER_META.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-2xl bg-neutral-900 text-white border border-neutral-900 dark:bg-white dark:text-neutral-950 dark:border-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        <span className="flex items-center gap-2.5 min-w-0">
                          <svg
                            className="w-4 h-4 shrink-0"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M9 3h3v6H9a3 3 0 0 1 0-6Z" />
                            <path d="M12 3h3a3 3 0 1 1 0 6h-3V3Z" />
                            <path d="M9 9h3v6H9a3 3 0 1 1 0-6Z" />
                            <path d="M12 15h3a3 3 0 1 1-3 3v-3Z" />
                            <path d="M9 15h3v3a3 3 0 1 1-3-3Z" />
                          </svg>
                          <span className="text-left min-w-0">
                            <span className="block text-sm font-bold">
                              Open in Figma
                            </span>
                            <span className="block text-[10px] uppercase tracking-widest opacity-60">
                              End-to-end UI/UX file
                            </span>
                          </span>
                        </span>
                        <svg
                          className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </a>
                    </div>
        </div>

        {/* Hero artwork */}
        <div className="reveal delay-4 mt-12 sm:mt-16 group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]">
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <Image
              src={REEFER_SHOWCASE[0].src}
              alt={REEFER_SHOWCASE[0].alt}
              fill
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              className="object-cover transition-transform duration-1000 group-hover:scale-[1.02]"
            />
          </div>
          <div className="px-5 sm:px-7 py-4 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-2.5">
              <span className="label-mono text-neutral-400 dark:text-neutral-500">
                {REEFER_META.category}
              </span>
              <span className="h-3 w-px bg-neutral-300 dark:bg-neutral-700" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                {REEFER_META.discipline}
              </span>
            </div>
            <span className="label-mono text-neutral-400 dark:text-neutral-500">
              {REEFER_SHOWCASE[0].caption}
            </span>
          </div>
        </div>
      </section>

      {/* Sticky section rail */}
      <nav
        aria-label="Case study sections"
        className="sticky top-[73px] z-30 hidden lg:block"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 py-4 border-y border-neutral-200 dark:border-neutral-800 bg-[#f9fafb]/85 dark:bg-[#111111]/85 backdrop-blur-md">
            {REEFER_SECTIONS.map((s, i) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={`label-mono transition-colors ${
                    active === i
                      ? "text-neutral-900 dark:text-neutral-100"
                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Sections */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* 01 Overview */}
        <section id="overview" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="01"
            label="Overview"
            title="What I was designing"
          />
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-7 space-y-5">
              {REEFER_META.overview.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="lg:col-span-5 grid grid-cols-2 gap-px self-start bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
              {REEFER_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white dark:bg-[#171717] px-5 py-6 flex flex-col gap-1"
                >
                  <span className="text-3xl font-black tracking-tight text-neutral-900 dark:text-white">
                    {stat.value}
                  </span>
                  <span className="label-mono text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02 Challenge */}
        <section id="challenge" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="02"
            label="Challenge"
            title="Turning feedback into a system"
          />
          <div className="relative pl-5 sm:pl-6 border-l-2 border-neutral-900 dark:border-white mb-12">
            <p className="label-mono text-neutral-400 dark:text-neutral-500 mb-3">
              Problem
            </p>
            <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-200 leading-relaxed">
              {REEFER_META.problem}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {REEFER_CHALLENGES.map((c, i) => (
              <div
                key={c.title}
                className={`reveal delay-${i + 1} p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300`}
              >
                <span className="label-mono text-neutral-400 dark:text-neutral-500 mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-black text-neutral-900 dark:text-white tracking-tight mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 03 References */}
        <section id="references" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="03"
            label="References"
            title="Design References"
          />
          <div className="flex flex-wrap gap-2 mb-8">
            {REEFER_REFERENCES.map((brand, i) => (
              <span
                key={brand}
                className={`reveal delay-${(i % 6) + 1} px-4 py-2.5 rounded-xl text-sm font-bold bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors`}
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl border-l-2 border-neutral-300 dark:border-neutral-700 pl-4 italic">
            {REEFER_REFERENCES_NOTE}
          </p>
        </section>

        {/* 04 Process */}
        <section id="process" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="04"
            label="Process"
            title="Design Process"
          />
          <div className="space-y-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800">
            {REEFER_PROCESS.map((step, i) => (
              <div
                key={step.num}
                className={`reveal delay-${(i % 4) + 1} group grid sm:grid-cols-[auto_minmax(0,1fr)] gap-4 sm:gap-8 items-start bg-white dark:bg-[#171717] px-5 sm:px-7 py-6 transition-colors duration-300 hover:bg-neutral-50 dark:hover:bg-[#1c1c1c]`}
              >
                <span className="text-2xl font-black tracking-tight text-neutral-300 dark:text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-white w-12 shrink-0">
                  {step.num}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-black text-neutral-900 dark:text-white tracking-tight mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 05 Architecture */}
        <section id="architecture" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="05"
            label="Architecture"
            title="System Architecture"
          />
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {REEFER_ARCHITECTURE.map((group, gi) => (
              <div
                key={group.label}
                className={`reveal delay-${gi + 1} p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="label-mono text-neutral-400 dark:text-neutral-500">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-sm font-black uppercase tracking-widest text-neutral-900 dark:text-white">
                    {group.label}
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2.5">
                  {group.pages.map((page) => (
                    <li
                      key={page}
                      className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
                      {page}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 06 Features */}
        <section id="features" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="06"
            label="Features"
            title="Key Features"
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {REEFER_FEATURES.map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal delay-${(i % 4) + 1} group p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300`}
              >
                <span className="label-mono text-neutral-400 dark:text-neutral-500 mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-black text-neutral-900 dark:text-white tracking-tight mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Brand artwork */}
        <section className="reveal py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="07"
            label="Brand Work"
            title="Artwork & Apparel"
            lede="Real REEFER brand output produced alongside the interface work."
          />
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {REEFER_SHOWCASE.slice(1).map((item, i) => (
              <ShowcaseCard key={item.src} item={item} index={i} />
            ))}
          </div>
        </section>

        {/* 08 Design System */}
        <section id="system" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="08"
            label="Design System"
            title="Tokens & Components"
          />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-5 mb-6">
            {/* Palette */}
            <div className="p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]">
              <h3 className="label-mono text-neutral-400 dark:text-neutral-500 mb-5">
                Color Palette
              </h3>
              <div className="space-y-3">
                {REEFER_PALETTE.map((c) => (
                  <div key={c.role} className="flex items-center gap-3">
                    <span
                      className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-700 shrink-0"
                      style={{ backgroundColor: c.hex }}
                    />
                    <div className="min-w-0">
                      <p className="label-mono text-neutral-400 dark:text-neutral-500">
                        {c.role}
                      </p>
                      <p className="text-sm font-bold text-neutral-900 dark:text-white">
                        {c.hex}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Typography */}
            <div className="p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]">
              <h3 className="label-mono text-neutral-400 dark:text-neutral-500 mb-5">
                Typography
              </h3>
              <div className="space-y-5">
                {REEFER_TYPOGRAPHY.map((t) => (
                  <div key={t.role}>
                    <p className="label-mono text-neutral-400 dark:text-neutral-500 mb-1.5">
                      {t.role}
                    </p>
                    <p
                      className={`text-neutral-900 dark:text-white ${
                        t.role === "Heading"
                          ? "text-2xl font-black tracking-tight"
                          : "text-base font-medium text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {t.sample}
                    </p>
                    <p className="label-mono text-neutral-400 dark:text-neutral-500 mt-1">
                      {t.scale}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Spacing */}
            <div className="p-6 sm:p-7 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]">
              <h3 className="label-mono text-neutral-400 dark:text-neutral-500 mb-5">
                Spacing System
              </h3>
              <div className="space-y-2.5">
                {REEFER_SPACING.map((size) => (
                  <div key={size} className="flex items-center gap-3">
                    <span
                      className="h-px bg-neutral-300 dark:bg-neutral-600 shrink-0"
                      style={{ width: `${parseInt(size, 10)}px` }}
                    />
                    <span className="label-mono text-neutral-500 dark:text-neutral-400">
                      {size}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {REEFER_COMPONENTS.map((c) => {
              const tone =
                c.tone === "primary"
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950"
                  : c.tone === "secondary"
                    ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700"
                    : c.tone === "tertiary"
                      ? "bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700"
                      : "bg-neutral-200 dark:bg-neutral-800 text-neutral-400 dark:text-neutral-600 cursor-not-allowed";
              return (
                <div
                  key={c.name}
                  className="p-5 sm:p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]"
                >
                  <button
                    type="button"
                    disabled={c.tone === "disabled"}
                    className={`w-full py-3 rounded-lg text-sm font-bold transition-opacity ${tone}`}
                  >
                    Button
                  </button>
                  <p className="label-mono text-neutral-400 dark:text-neutral-500 mt-4">
                    {c.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Additional pages */}
        <section className="reveal py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="09"
            label="Scope"
            title="Additional Pages"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REEFER_ADDITIONAL_PAGES.map((page, i) => (
              <div
                key={page.title}
                className={`reveal delay-${i + 1} p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors duration-300`}
              >
                <h3 className="text-base font-black text-neutral-900 dark:text-white tracking-tight mb-2">
                  {page.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {page.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 10 Outcomes */}
        <section id="outcomes" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="10"
            label="Outcomes"
            title="Outcomes & Impact"
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 dark:bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 mb-6">
            {REEFER_STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-[#171717] px-5 py-7 flex flex-col items-center text-center gap-1"
              >
                <span className="text-4xl font-black tracking-tight text-neutral-900 dark:text-white">
                  {stat.value}
                </span>
                <span className="label-mono text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Deliverables", items: REEFER_DELIVERABLES },
              { title: "Key Learnings", items: REEFER_LEARNINGS },
            ].map((col, ci) => (
              <div
                key={col.title}
                className={`reveal delay-${ci + 1} p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]`}
              >
                <h3 className="label-mono text-neutral-400 dark:text-neutral-500 mb-5">
                  {col.title}
                </h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 11 Guidelines */}
        <section id="guidelines" className="reveal scroll-mt-32 py-16 sm:py-24 border-b border-neutral-200 dark:border-neutral-800">
          <SectionTitle
            index="11"
            label="Handoff"
            title="Guidelines for UI/UX Interns"
          />
          <div className="grid md:grid-cols-2 gap-5">
            {REEFER_GUIDELINES.map((g, i) => (
              <div
                key={g.title}
                className={`reveal delay-${(i % 4) + 1} p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717]`}
              >
                <span className="label-mono text-neutral-400 dark:text-neutral-500 mb-3 block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-black text-neutral-900 dark:text-white tracking-tight mb-3">
                  {g.title}
                </h3>
                {g.body && (
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {g.body}
                  </p>
                )}
                {g.items && (
                  <ul className="space-y-2.5 mt-4">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Closing */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="reveal rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] p-8 sm:p-12 lg:p-16 text-center">
          <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-5">
            Next step
          </p>
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-5 max-w-3xl mx-auto">
            Want the full breakdown of the work?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8">
            The rest of the projects and case studies are one click away.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={REEFER_META.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-lg"
                      >
                        Open in Figma
                      </a>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white hover:-translate-y-0.5"
                      >
                        View All Projects
                      </Link>
                    </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-lg sm:text-xl font-black tracking-[-0.06em] uppercase text-neutral-900 dark:text-white">
            RΣNZ
          </p>
          <p className="label-mono text-neutral-400 dark:text-neutral-500">
            {REEFER_META.role} · {REEFER_META.timeline}
          </p>
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