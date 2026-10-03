"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";
import { GALLERY_ITEMS, GALLERY_TAGS } from "../../data/journey";
import type { GalleryItem } from "../../types";

const SPAN_CLASS: Record<NonNullable<GalleryItem["span"]>, string> = {
  normal: "sm:col-span-1 sm:row-span-1",
  tall: "sm:col-span-1 sm:row-span-2",
  wide: "sm:col-span-2 sm:row-span-1",
};

const RATIO: Record<NonNullable<GalleryItem["span"]>, string> = {
  normal: "aspect-[4/3]",
  tall: "aspect-[4/5] sm:aspect-auto sm:h-full",
  wide: "aspect-[16/9]",
};

function Tile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (index: number) => void;
}) {
  const span = item.span ?? "normal";
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Open image: ${item.caption}`}
      className={`reveal delay-${(index % 4) + 1} group relative text-left w-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 focus-visible:outline-2 ${SPAN_CLASS[span]}`}
    >
      <div className={`relative w-full ${RATIO[span]}`}>
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06]"
        />
      </div>

      {/* Always-legible gradient foot */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <span className="label-mono inline-block px-2 py-1 rounded bg-white/15 backdrop-blur-sm text-white/90 border border-white/20 mb-2">
          {item.tag}
        </span>
        <p className="text-sm sm:text-base font-black text-white tracking-tight leading-tight">
          {item.caption}
        </p>
        <p className="text-[11px] sm:text-xs text-white/70 mt-0.5 max-h-0 opacity-0 overflow-hidden group-hover:max-h-16 group-hover:opacity-100 group-hover:mt-1.5 transition-all duration-500 ease-out">
          {item.note}
        </p>
      </div>

      <span className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/15 dark:bg-black/30 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ZoomIn className="w-3.5 h-3.5" />
      </span>
    </button>
  );
}

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.tag === filter);

  const close = useCallback(() => setLightbox(null), []);

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) => {
        if (cur === null) return cur;
        return (cur + dir + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox, close, step]);

  const current = lightbox !== null ? items[lightbox] : null;

  return (
    <div className="relative min-h-screen bg-[#f9fafb] dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <RevealOnScroll />
      <SubPageHeader section="Gallery" title="Moments, not logos" />

      {/* Intro */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-10 sm:pb-14">
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">
            Gallery
          </span>
        </div>

        <h1 className="reveal delay-1 heading-display text-[clamp(38px,7vw,80px)] text-neutral-950 dark:text-white mb-7">
          Proof I was
          <br />
          <span className="text-neutral-400 dark:text-neutral-500">
            actually there
          </span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-8">
          <p className="reveal delay-2 lg:col-span-7 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            Exponent badges, hackathon floors, booth tarps and team photos. No
            stock imagery, no fake dashboards — just the places I showed up and
            the people who were there. Tap any photo to look closer.
          </p>
          <p className="reveal delay-3 lg:col-span-5 text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
            Photography here is mostly mine, mostly wide-angle selfies at the
            edge of other people&apos;s events. That feels accurate rather than
            polished, which is the point.
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="sticky top-[73px] z-30 border-y border-neutral-200 dark:border-neutral-800 bg-[#f9fafb]/85 dark:bg-[#111111]/85 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-3.5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {GALLERY_TAGS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setFilter(tag);
                setLightbox(null);
              }}
              className={`shrink-0 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 border ${
                filter === tag
                  ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border-neutral-900 dark:border-white"
                  : "bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
              }`}
            >
              {tag}
            </button>
          ))}
          <span className="label-mono text-neutral-500 dark:text-neutral-400 ml-auto pl-4 shrink-0">
            {items.length} photo{items.length === 1 ? "" : "s"}
          </span>
        </div>
      </div>

      {/* Masonry-ish grid */}
      <section
        key={filter}
        className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[minmax(0,1fr)] lg:auto-rows-[220px]">
          {items.map((item, i) => (
            <Tile key={item.src + i} item={item} index={i} onOpen={setLightbox} />
          ))}
        </div>

        {items.length === 0 && (
          <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 py-20">
            Nothing here yet.
          </p>
        )}
      </section>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>

          <figure
            className="relative w-full max-w-4xl max-h-full flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-xl overflow-hidden bg-neutral-900">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 1024px) 96vw, 60vw"
                className="object-contain"
              />
            </div>
            <figcaption className="mt-4 text-center">
              <p className="text-sm sm:text-base font-bold text-white tracking-tight">
                {current.caption}
              </p>
              <p className="text-xs text-white/60 mt-1">{current.note}</p>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white rotate-180 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      )}

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <p className="text-lg sm:text-xl font-black tracking-[-0.06em] uppercase text-neutral-900 dark:text-white">
            RΣNZ
          </p>
          <Link
            href="/Journey"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Read the Journey
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