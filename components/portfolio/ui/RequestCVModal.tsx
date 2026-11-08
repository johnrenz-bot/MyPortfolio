"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Download, Mail } from "lucide-react";
import { PORTFOLIO_META } from "@/constants/portfolio";

const HOLD_MS = 1500;
const RESET_MS = 1200;

type RequestCVModalProps = {
  open: boolean;
  onClose: () => void;
  restoreFocusTo?: HTMLElement | null;
};

export default function RequestCVModal({ open, onClose, restoreFocusTo }: RequestCVModalProps) {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [holding, setHolding] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);
  const completedRef = useRef(false);
  const keyHeldRef = useRef(false);
  const resetTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!open) {
      setProgress(0);
      setHolding(false);
      setCompleted(false);
      completedRef.current = false;
      progressRef.current = 0;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      startRef.current = null;
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const panel = panelRef.current;
    if (panel) {
      panel.setAttribute("tabindex", "-1");
      // focus first focusable or panel
      const focusables = panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusables.length) focusables[0].focus();
      else panel.focus();
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const p = panelRef.current;
      if (!p) return;
      const nodes = p.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (nodes.length === 0) {
        e.preventDefault();
        return;
      }
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
      if (restoreFocusTo && typeof restoreFocusTo.focus === "function") {
        restoreFocusTo.focus();
      }
    };
  }, [open, onClose]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, []);

  const triggerDownload = () => {
    if (completedRef.current) return;
    completedRef.current = true;
    const a = document.createElement("a");
    a.href = PORTFOLIO_META.cv;
    a.download = "John_Renz_Bandianon_CV.pdf";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const startHold = () => {
    if (completedRef.current) return;
    setHolding(true);
    startRef.current = performance.now() - (progressRef.current / 100) * HOLD_MS;
    const tick = (now: number) => {
      if (startRef.current === null) return;
      const elapsed = now - startRef.current;
      const p = Math.min(100, (elapsed / HOLD_MS) * 100);
      progressRef.current = p;
      setProgress(p);
      if (p >= 100) {
        setCompleted(true);
        setHolding(false);
        triggerDownload();
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
        startRef.current = null;
        if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
        resetTimerRef.current = setTimeout(() => {
          setCompleted(false);
          completedRef.current = false;
          progressRef.current = 0;
          setProgress(0);
        }, RESET_MS);
        return;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const cancelHold = () => {
    if (completedRef.current) return;
    setHolding(false);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    startRef.current = null;
    progressRef.current = 0;
    setProgress(0);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    startHold();
  };
  const handlePointerUp = () => cancelHold();
  const handlePointerLeave = () => cancelHold();
  const handlePointerCancel = () => cancelHold();

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      if (keyHeldRef.current) return;
      keyHeldRef.current = true;
      startHold();
    }
  };
  const handleKeyUp = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      keyHeldRef.current = false;
      cancelHold();
    }
  };

  const mailto = `mailto:${PORTFOLIO_META.email}?subject=${encodeURIComponent(
    "CV Request — John Renz Bandianon",
  )}&body=${encodeURIComponent(
    "Hi John Renz,\n\nI came across your portfolio and would love to request a copy of your CV for a potential opportunity.\n\nThank you,\n",
  )}`;

  if (!open || !mounted) return null;

  const radius = 15;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  const showSweep = !reducedMotion;

  const node = (
    <div
      data-lenis-prevent
      role="dialog"
      aria-modal="true"
      aria-label="Request CV"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        ref={panelRef}
        className="relative z-10 w-full max-w-[460px] rounded-[18px] border border-line bg-bg px-5 py-[18px] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ borderWidth: "0.5px" }}
      >
        <p className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-subtle">
          00 · CV
        </p>
        <h2 className="mt-1 font-display text-[24px] font-extrabold leading-none tracking-[-0.02em] text-ink">
          Request CV
        </h2>
        <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
          Choose how you&apos;d like to receive my CV.
        </p>

        <div className="mt-4 flex flex-col gap-2">
          {/* Option 1 — Request via Email */}
          <a
            href={mailto}
            className="group flex w-full items-center gap-3 rounded-xl border border-line bg-surface px-[14px] py-[10px] text-left transition-colors hover:bg-hover"
          >
            <span className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-lg border border-line bg-bg text-ink">
              <Mail className="h-4 w-4" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-[14px] font-extrabold tracking-[-0.02em] text-ink">
                Request via Email
              </span>
              <span className="mt-0.5 block text-[12px] leading-relaxed text-muted">
                Opens your email app with a pre-filled request.
              </span>
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-subtle transition-colors group-hover:text-ink">
              EMAIL
            </span>
          </a>

          {/* Option 2 — Hold to Download (entire card is the hold target) */}
          <div
            role="button"
            tabIndex={0}
            aria-label="Hold to download"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onPointerCancel={handlePointerCancel}
            onContextMenu={(e) => e.preventDefault()}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            className="relative w-full overflow-hidden rounded-xl border border-line bg-surface px-[14px] py-[10px] text-left transition-colors hover:bg-hover"
            style={{ userSelect: "none", touchAction: "none", position: "relative" }}
          >
            {showSweep ? (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 bg-ink/10"
                style={{ width: `${progress}%` }}
              />
            ) : null}
            <div className="relative flex items-center gap-3">
              <span className="relative inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full border border-line bg-bg text-ink">
                <svg
                  className="absolute inset-0 h-full w-full -rotate-90"
                  viewBox="0 0 38 38"
                  aria-hidden="true"
                >
                  <circle
                    cx="19"
                    cy="19"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity="0.15"
                    strokeWidth="2"
                  />
                  <circle
                    cx="19"
                    cy="19"
                    r={radius}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: holding ? "none" : "stroke-dashoffset 150ms ease" }}
                  />
                </svg>
                <span className="relative font-mono text-[10px] font-bold tabular-nums">
                  {completed ? "✓" : `${Math.round(progress)}%`}
                </span>
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[14px] font-extrabold tracking-[-0.02em] text-ink">
                  Hold to Download
                </span>
                <span className="mt-0.5 block text-[12px] leading-relaxed text-muted">
                  {completed ? "Download started." : "Press and hold to confirm. Releasing cancels."}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(node, document.body);
}
