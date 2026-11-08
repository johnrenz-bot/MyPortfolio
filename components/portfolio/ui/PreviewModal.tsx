"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ArrowLeft, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import type { Project } from "@/types";

type PreviewModalProps = {
  open: boolean;
  onClose: () => void;
  project: Project;
  restoreFocusTo?: HTMLElement | null;
  initialIndex?: number;
};

export default function PreviewModal({ open, onClose, project, restoreFocusTo, initialIndex }: PreviewModalProps) {
  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const pushedRef = useRef(false);
  const closedByPopRef = useRef(false);

  const images =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.image];

  useEffect(() => setMounted(true), []);

  // Smooth mount/unmount — closing plays a short fade+scale before the
  // parent actually unmounts, so the backdrop feels intentional,
  // not instant. Reduced motion closes immediately.
  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
      setEntered(false);
      const raf = requestAnimationFrame(() => setEntered(true));
      return () => cancelAnimationFrame(raf);
    }
    if (!visible) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      setEntered(false);
      return;
    }
    setClosing(true);
    const timer = window.setTimeout(() => {
      setVisible(false);
      setEntered(false);
      setClosing(false);
    }, 240);
    closeTimerRef.current = timer;
    return () => {
      window.clearTimeout(timer);
      closeTimerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setIndex(initialIndex && initialIndex < images.length ? initialIndex : 0);
      setImgFailed(false);
    }
  }, [project.id, open, initialIndex]);

  // Body scroll lock + focus restore
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const panel = document.querySelector('[role="dialog"][aria-modal="true"]') as HTMLElement | null;
    if (panel) {
      panel.setAttribute("tabindex", "-1");
      panel.focus();
    }
    return () => {
      // Always unlock on close/unmount — never re-lock to a stale "hidden"
      // left by an earlier modal, so scroll can never stay stuck.
      document.body.style.overflow = "";
      // Keep scroll position exactly where the user left it.
      if (restoreFocusTo && typeof restoreFocusTo.focus === "function") {
        restoreFocusTo.focus({ preventScroll: true });
      }
    };
  }, [open, restoreFocusTo]);

  // Browser back navigation
  useEffect(() => {
    if (!open) return;
    if (!pushedRef.current) {
      window.history.pushState({ rznzModal: true }, "");
      pushedRef.current = true;
    }
    closedByPopRef.current = false;
    const onPop = () => {
      closedByPopRef.current = true;
      pushedRef.current = false;
      onClose();
    };
    window.addEventListener("popstate", onPop);
    return () => {
      window.removeEventListener("popstate", onPop);
      if (pushedRef.current && !closedByPopRef.current) {
        pushedRef.current = false;
        window.history.back();
      }
      pushedRef.current = false;
    };
  }, [open, onClose]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (images.length > 1) {
        if (e.key === "ArrowLeft")
          setIndex((i) => (i - 1 + images.length) % images.length);
        if (e.key === "ArrowRight")
          setIndex((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  if ((!open && !visible) || !mounted) return null;

  const showOpenState = open && !closing;
  const backdropOpacity = entered && showOpenState ? "opacity-100" : "opacity-0";
  const contentScale = entered && showOpenState ? "scale-100 opacity-100" : "scale-[0.97] opacity-0";

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const dx = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(dx) > 50) {
      if (dx > 0) goPrev();
      else goNext();
    }
    setTouchStart(null);
  };

  const node = (
    <div
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      aria-label={`Preview: ${project.title}`}
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-[240ms] ease-out motion-reduce:transition-none ${backdropOpacity}`}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Backdrop layer (clickable on all four sides) */}
      <div className="absolute inset-0" aria-hidden="true" />
      <div
        className={`relative flex h-full w-full items-center justify-center pointer-events-none transition-all duration-[240ms] ease-out motion-reduce:transition-none ${contentScale}`}
      >
        {/* Floating back control — slim pill, arrow reveals BACK on hover */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          onPointerUp={(e) => e.stopPropagation()}
          onPointerDown={(e) => e.stopPropagation()}
          aria-label="Back to work archive"
          title="Back to work archive"
          className="group pointer-events-auto absolute left-3 top-3 sm:left-5 sm:top-5 z-20 inline-flex h-10 items-center rounded-full border border-white/15 bg-black/30 px-4 text-white/75 backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:bg-black/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <ArrowLeft
            className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-out group-hover:-translate-x-0.5 group-focus-visible:-translate-x-0.5"
            strokeWidth={1.75}
          />
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.18em] opacity-0 transition-all duration-300 ease-out group-hover:ml-1.5 group-hover:max-w-[3rem] group-hover:opacity-100 group-focus-visible:ml-1.5 group-focus-visible:max-w-[3rem] group-focus-visible:opacity-100">
            Back
          </span>
        </button>
        {/* Modal content (clicks here never fall through to the backdrop) */}
        <div
          className="relative h-[90vh] w-[96vw] pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {imgFailed || !images[index] ? (
            <div className="absolute inset-0 flex items-center justify-center">
              <ImageOff className="h-10 w-10 text-white/40" />
            </div>
          ) : (
            <Image
              src={images[index]}
              alt={`${project.title} preview ${index + 1}`}
              fill
              quality={92}
              sizes="96vw"
              className="object-contain"
              priority
              onError={() => setImgFailed(true)}
            />
          )}
        </div>

        {images.length > 1 ? (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous image"
              className="pointer-events-auto absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform hover:scale-105"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next image"
              className="pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md transition-transform hover:scale-105"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 font-mono text-[11px] tabular-nums text-white backdrop-blur-md">
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );

  return createPortal(node, document.body);
}
