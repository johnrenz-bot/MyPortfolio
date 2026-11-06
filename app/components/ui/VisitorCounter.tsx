"use client";

import { useEffect, useState, useRef } from "react";
import { Eye } from "lucide-react";

export default function VisitorCounter() {
  const [views, setViews] = useState<number | null>(null);
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

        const isSessionViewed = typeof window !== "undefined" && sessionStorage.getItem(SESSION_KEY);
        const lastViewTime = typeof window !== "undefined" && localStorage.getItem(TIMESTAMP_KEY);
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

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 text-xs shadow-sm hover:border-[#444444] dark:hover:border-[#444444] transition-all select-none"
      title="Verified Portfolio Views"
      aria-label={views !== null ? `${views.toLocaleString()} Total Portfolio Views` : "Loading total views"}
    >
      <Eye className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
      <span className="font-mono text-[11px] font-semibold text-neutral-900 dark:text-neutral-200 tabular-nums">
        {loading ? (
          <span className="animate-pulse">···</span>
        ) : views !== null ? (
          views.toLocaleString()
        ) : (
          "—"
        )}
      </span>
      <span className="label-mono text-[9px] text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
        Views
      </span>
    </div>
  );
}

