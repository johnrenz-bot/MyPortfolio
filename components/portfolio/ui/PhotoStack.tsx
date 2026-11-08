"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Photo = {
  src: string;
  alt: string;
};

export default function PhotoStack({
  photos,
  className = "",
}: {
  photos: Photo[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (photos.length === 0) return null;

  const single = photos.length === 1;
  const current = photos[index];

  const next = () => setIndex((i) => (i + 1) % photos.length);
  const prev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (single) return;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        role={single ? undefined : "button"}
        tabIndex={single ? -1 : 0}
        aria-label={single ? undefined : "Shuffle personal photos"}
        onKeyDown={onKeyDown}
        onClick={single ? undefined : next}
        className="relative mx-auto w-full max-w-[320px] cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-line-strong"
      >
        <div className="relative aspect-[4/5]">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 92vw, 320px"
            className="object-cover"
          />
        </div>
        {!single ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {photos.map((photo, i) => (
              <button
                key={photo.src + i}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-2 w-2 rounded-full border border-white/60 transition ${
                  i === index ? "bg-white" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>

      {!single ? (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous photo"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <span className="text-[14px] text-muted">
            {index + 1} / {photos.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next photo"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}

      {reducedMotion ? null : null}
    </div>
  );
}