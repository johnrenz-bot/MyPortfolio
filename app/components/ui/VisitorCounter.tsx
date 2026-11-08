"use client";

import { useEffect, useState, useRef } from "react";

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);
  const [displayed, setDisplayed] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const hasFired = useRef(false);

  useEffect(() => {
    if (hasFired.current) return;
    hasFired.current = true;

    async function recordVisit() {
      try {
        const SESSION_KEY = "renz_portfolio_viewed";
        const TIMESTAMP_KEY = "renz_portfolio_view_time";
        const now = Date.now();
        const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000;

        const isSessionViewed =
          typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY);
        const lastViewTime =
          typeof window !== "undefined" && localStorage.getItem(TIMESTAMP_KEY);
        const isRecent = lastViewTime && now - parseInt(lastViewTime, 10) < TWENTY_FOUR_HOURS;

        let res: Response;
        if (isSessionViewed || isRecent) {
          res = await fetch("/api/views", { method: "GET", cache: "no-store" });
        } else {
          if (typeof window !== "undefined") {
            sessionStorage.setItem(SESSION_KEY, "true");
            localStorage.setItem(TIMESTAMP_KEY, now.toString());
          }
          res = await fetch("/api/views", { method: "POST", cache: "no-store" });
        }

        if (res.ok) {
          const data = await res.json();
          if (typeof data.views === "number") {
            setViews(data.views);
          }
        }
      } catch (err) {
        console.error("Failed to fetch visitor count:", err);
      } finally {
        setLoading(false);
      }
    }

    recordVisit();
  }, []);

  // Lightweight number roll — interpolates the count when it lands.
  // Respects reduced motion (instant).
  useEffect(() => {
    if (views === null) return;
    if (displayed === null) {
      setDisplayed(views);
      return;
    }
    if (displayed === views) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplayed(views);
      return;
    }
    const from = displayed;
    const to = views;
    const duration = 600;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplayed(Math.round(from + (to - from) * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [views, displayed]);

  const count = displayed ?? views;

  return (
    <div
      className="inline-flex flex-col gap-0.5 select-none"
      title="Verified Portfolio Views"
      aria-label={views !== null ? `${views.toLocaleString()} Total Portfolio Views` : "Loading total views"}
    >
      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-subtle">
        Profile Views
      </span>
      <span className="font-display text-[22px] font-extrabold leading-none tracking-tight text-ink tabular-nums">
        {loading || count === null ? (
          <span className="animate-pulse text-muted">···</span>
        ) : (
          count.toLocaleString()
        )}
      </span>
      <span className="text-[11px] text-muted">
        {loading ? "Recording visit…" : "Recorded visits"}
      </span>
    </div>
  );
}
