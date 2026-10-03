"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";
import { JOURNEY_CHAPTERS, type Chapter, type JourneyImage } from "../../data/journey";

function Frame({
  image,
  className = "",
  priority = false,
}: {
  image: JourneyImage;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 ${image.ratio} ${image.tilt ?? ""} ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 92vw, 50vw"
        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}

function ChapterBlock({ chapter, index }: { chapter: Chapter; index: number }) {
  const flip = index % 2 === 1;
  const isLast = index === JOURNEY_CHAPTERS.length - 1;

  const body = (
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-5">
        <span className="label-mono px-2.5 py-1 rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-300">
          Chapter {chapter.chapter}
        </span>
        <span className="label-mono text-neutral-400 dark:text-neutral-500">
          {chapter.period}
        </span>
      </div>

      <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-3">
        {chapter.title}
      </h2>

      <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
        {chapter.kicker}
      </p>

      <div className="space-y-4 mb-7">
        {chapter.story.map((para, i) => (
          <p
            key={i}
            className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed"
          >
            {para}
          </p>
        ))}
      </div>

      <div className="relative pl-5 border-l-2 border-neutral-900 dark:border-white mb-7">
        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
          {chapter.takeaway}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {chapter.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  // Tall media stacks can exceed the viewport, so only short media sets get
  // pinned; long ones just flow alongside the text.
  const pinMedia = chapter.layout !== "stack" || chapter.images.length <= 2;

  const images = (
    <>
      {chapter.layout === "portrait-left" && (
        <div className="max-w-sm mx-auto lg:mx-0 lg:ml-auto">
          <Frame image={chapter.images[0]} priority={index < 2} />
        </div>
      )}

      {chapter.layout === "landscape-right" && (
        <div className="max-w-md mx-auto lg:mx-0 lg:mr-auto">
          <Frame image={chapter.images[0]} priority={index < 2} />
        </div>
      )}

      {chapter.layout === "duo-offset" && (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 items-end">
          <Frame image={chapter.images[0]} className="mb-8 sm:mb-12" />
          <Frame image={chapter.images[1]} />
        </div>
      )}

      {chapter.layout === "stack" && (
        <div
          className={`grid gap-4 sm:gap-6 ${
            chapter.images.length >= 3 ? "grid-cols-2" : "grid-cols-1"
          }`}
        >
          {chapter.images.map((img, i) => (
            <Frame
              key={i}
              image={img}
              className={i === 0 && chapter.images.length >= 3 ? "col-span-2" : ""}
            />
          ))}
        </div>
      )}

      {chapter.layout === "bleed" && (
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {chapter.images.map((img, i) => (
            <Frame key={i} image={img} />
          ))}
        </div>
      )}
    </>
  );

  return (
    <div className="relative">
      {/* Node on the spine */}
      <div className="hidden lg:flex absolute -left-[calc(50%+2.25rem)] top-8 w-4 h-4 rounded-full bg-neutral-900 dark:bg-white ring-8 ring-[#f9fafb] dark:ring-[#111111] z-10" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
        <div className="flex-1 min-w-0 w-full lg:w-[calc(50%-2rem)]">{body}</div>
        <div
          className={`flex-1 min-w-0 w-full lg:w-[calc(50%-2rem)] ${
            pinMedia ? "lg:sticky lg:top-28" : ""
          }`}
        >
          {images}
        </div>
      </div>

      {!isLast && <div className="h-16 sm:h-24 lg:h-32" />}
    </div>
  );
}

export default function JourneyPage() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.getAttribute("data-index") ?? 0));
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    document
      .querySelectorAll("[data-index]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f9fafb] dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <RevealOnScroll />
      <SubPageHeader section="Journey" title="How I got here" />

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-transparent z-50">
        <div
          className="h-full bg-neutral-900 dark:bg-white transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-20">
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">
            2022 — Now
          </span>
        </div>

        <h1 className="reveal delay-1 heading-display text-[clamp(38px,7vw,80px)] text-neutral-950 dark:text-white mb-8">
          The long way
          <br />
          <span className="text-neutral-400 dark:text-neutral-500">
            around
          </span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <p className="reveal delay-2 lg:col-span-7 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Nobody hands you a timeline when you graduate. What you get is a
            folder of photos, a few things that worked, and a lot of stuff that
            only makes sense in hindsight. This is the honest version — the
            school stuff, the internships, the events I volunteered at because
            nobody else was free, and the parts where I was figuring it out.
          </p>

          <div className="reveal delay-3 lg:col-span-5 flex flex-wrap gap-3">
            {[
              { k: "Chapters", v: String(JOURNEY_CHAPTERS.length) },
              { k: "Internships", v: "2" },
              { k: "Volunteer work", v: "2" },
            ].map((s) => (
              <div
                key={s.k}
                className="flex-1 min-w-[100px] px-5 py-4 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-xl"
              >
                <div className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                  {s.v}
                </div>
                <div className="label-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chapter rail (desktop) */}
      <nav
        aria-label="Journey chapters"
        className="sticky top-[73px] z-30 hidden lg:block"
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 py-4 border-y border-neutral-200 dark:border-neutral-800 bg-[#f9fafb]/85 dark:bg-[#111111]/85 backdrop-blur-md">
            {JOURNEY_CHAPTERS.map((c, i) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className={`label-mono transition-colors ${
                                    active === i
                                      ? "text-neutral-900 dark:text-neutral-100"
                                      : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200"
                                  }`}
                >
                  {c.chapter} · {c.period}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Chapters */}
      <section className="relative max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        {/* Spine */}
        <div className="hidden lg:block absolute left-1/2 top-16 bottom-16 w-[1.5px] bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />

        <div className="space-y-16 sm:space-y-24 lg:space-y-32">
          {JOURNEY_CHAPTERS.map((chapter, i) => (
            <div
              key={chapter.id}
              id={chapter.id}
              data-index={i}
              className="reveal scroll-mt-32"
            >
              <ChapterBlock chapter={chapter} index={i} />
            </div>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pb-20 sm:pb-28">
        <div className="reveal rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] p-8 sm:p-12 lg:p-16 text-center">
          <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-5">
            What&apos;s next
          </p>
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-5 max-w-3xl mx-auto">
            If you&apos;ve read this far, you probably want to see the rest of it
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-8">
            There&apos;s a gallery of the actual moments, plus the resume and the
            two projects I&apos;d be happy to walk you through line by line.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/Gallery"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Open the Gallery
            </Link>
            <a
              href="/resume/John_Renz_Bandianon_Resumee.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white hover:-translate-y-0.5"
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-lg sm:text-xl font-black tracking-[-0.06em] uppercase text-neutral-900 dark:text-white">
            RΣNZ
          </p>
          <p className="label-mono text-neutral-400 dark:text-neutral-500">
            Marilao, Bulacan · Open to Opportunities
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