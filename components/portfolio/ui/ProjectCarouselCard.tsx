"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ImageOff } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import PreviewModal from "./PreviewModal";

type ProjectCarouselCardProps = {
  project: Project;
  category?: string;
  priority?: boolean;
  className?: string;
};

const DURATION = 5000;

export default function ProjectCarouselCard({
  project,
  category,
  priority = false,
  className,
}: ProjectCarouselCardProps) {
  const images =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.image];
  const count = images.length;

  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [tabHidden, setTabHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTrigger, setPreviewTrigger] = useState<HTMLElement | null>(null);
  const [failed, setFailed] = useState<Set<number>>(new Set());

  const indexRef = useRef(0);
  const progressRef = useRef(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const containerRef = useRef<any>(null);
  const downRef = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);
  const openedByPointerRef = useRef(false);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setIsVisible(e.isIntersecting);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setTabHidden(document.hidden);
    setTabHidden(document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    if (count <= 1) return;
    const next = (index + 1) % count;
    const img = new window.Image();
    img.src = images[next];
  }, [index, count, images]);

  const goTo = (i: number) => {
    indexRef.current = i;
    setIndex(i);
    progressRef.current = 0;
    setProgress(0);
    startRef.current = null;
  };

  const openPreview = (trigger: HTMLElement | null) => {
    if (failed.has(index) || !images[index]) return;
    setPreviewTrigger(trigger);
    setPreviewOpen(true);
  };

  useEffect(() => {
    if (reducedMotion || !isVisible || isHover || tabHidden || count <= 1 || previewOpen) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      startRef.current = null;
      return;
    }
    const tick = (now: number) => {
      if (startRef.current === null) {
        startRef.current = now - (progressRef.current / 100) * DURATION;
      }
      const elapsed = now - startRef.current;
      const p = Math.min(100, (elapsed / DURATION) * 100);
      progressRef.current = p;
      setProgress(p);
      if (p >= 100) {
        const next = (indexRef.current + 1) % count;
        indexRef.current = next;
        setIndex(next);
        progressRef.current = 0;
        setProgress(0);
        startRef.current = now;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isVisible, isHover, tabHidden, reducedMotion, count, previewOpen]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const tech = project.techStack ?? [];
  const visibleTech = tech.slice(0, 5);
  const href = project.href || project.image;

  const crossfadeClass = reducedMotion ? "duration-0" : "duration-500";

  const handlePointerDown = (e: React.PointerEvent) => {
    downRef.current = { x: e.clientX, y: e.clientY };
    movedRef.current = false;
  };
  const handlePointerMove = (e: React.PointerEvent) => {
    if (downRef.current) {
      const dx = e.clientX - downRef.current.x;
      const dy = e.clientY - downRef.current.y;
      if (Math.hypot(dx, dy) > 6) movedRef.current = true;
    }
  };
  const handlePointerUp = (e: React.PointerEvent) => {
    const wasMoved = movedRef.current;
    downRef.current = null;
    if (!wasMoved) {
      openedByPointerRef.current = true;
      openPreview(e.currentTarget as HTMLElement);
    }
    movedRef.current = false;
  };
  const handleClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    if (openedByPointerRef.current) {
      openedByPointerRef.current = false;
      return;
    }
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    openPreview(e.currentTarget as HTMLElement);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.target as HTMLElement) !== (e.currentTarget as HTMLElement)) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPreview(e.currentTarget as HTMLElement);
    }
  };

  return (
    <>
      <article
        ref={containerRef}
        role="button"
        tabIndex={0}
        aria-label={`Open preview of ${project.title}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className={`group relative cursor-zoom-in overflow-hidden rounded-[32px] border border-line bg-surface shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-line-strong ${className ?? ""}`}
      >
        {/* Image preview (clickable via whole card) */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2 outline-none">
          {failed.has(index) || !images[index] ? (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-2">
              <ImageOff className="h-10 w-10 text-subtle" />
            </div>
          ) : (
            images.map((src, i) => (
              <Image
                key={src + i}
                src={src}
                alt={`${project.title} preview ${i + 1}`}
                fill
                priority={priority && i === 0}
                sizes="(max-width: 1024px) 92vw, 1200px"
                className={`object-cover transition-opacity ${crossfadeClass} ease-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                onError={() => setFailed((prev) => new Set(prev).add(i))}
              />
            ))
          )}

          {/* Category badge */}
          {category ? (
            <span className="pointer-events-none absolute left-6 top-6 z-20 rounded-md border border-white/20 bg-black/55 px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">
              {category}
            </span>
          ) : null}

          {/* Counter */}
          {count > 1 ? (
            <span className="pointer-events-none absolute bottom-6 right-6 z-20 rounded-md border border-white/20 bg-black/55 px-2.5 py-1 font-mono text-[10px] font-bold tabular-nums text-white backdrop-blur-md">
              <span className="text-white">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-white/50"> / {String(count).padStart(2, "0")}</span>
            </span>
          ) : null}

          {/* Info block (hover-reveal) */}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-6 pb-6 pt-24 transition-all duration-250 ease-out motion-reduce:transition-none motion-reduce:transform-none sm:px-8 sm:pb-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-has-[:focus-visible]:opacity-100 group-has-[:focus-visible]:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="max-w-3xl">
                <h3 className="font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  {project.title}
                </h3>
                {project.description ? (
                  <p className="mt-2 line-clamp-2 max-w-2xl text-[13px] leading-relaxed text-white/80 sm:text-[14px]">
                    {project.description}
                  </p>
                ) : null}
              </div>

              {visibleTech.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {visibleTech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : null}

              <div className="pointer-events-auto flex flex-wrap items-center gap-2 pt-1">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5"
                >
                  View project
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <FaGithub className="h-3.5 w-3.5" />
                    Source
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail navigation */}
        {count > 1 ? (
          <div
            data-lenis-prevent
            onClick={(e) => e.stopPropagation()}
            className="border-t border-line bg-surface p-4 sm:p-5"
          >
            <div className="flex gap-2 sm:gap-3">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(i);
                  }}
                  aria-label={`Show slide ${i + 1} of ${count}`}
                  aria-current={i === index ? "true" : undefined}
                  className={`relative flex-1 overflow-hidden rounded-[16px] border transition-all duration-300 ${
                    i === index
                      ? "border-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_0_18px_-4px_rgba(255,255,255,0.45)]"
                      : "border-line opacity-60 hover:opacity-90"
                  }`}
                  style={{ aspectRatio: "16 / 9" }}
                >
                  <Image
                    src={src}
                    alt={`${project.title} thumbnail ${i + 1}`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 20vw, 240px"
                    className="object-cover"
                  />
                  {i === index && !reducedMotion ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-white"
                      style={{ width: `${progress}%` }}
                    />
                  ) : null}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </article>

      <PreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        project={project}
        restoreFocusTo={previewTrigger}
        initialIndex={index}
      />
    </>
  );
}
