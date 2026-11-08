"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronDown, ExternalLink } from "lucide-react";
import { WORK_EXPERIENCE } from "@/data/experience";

const EXPERIENCE_TAGS: Record<string, string[]> = {
  "Sun Life Financial Philippines": ["Operations", "Documentation", "Tracking"],
  "Alpha Centauri Garments": ["Figma", "Design System", "Prototyping"],
  "BoxHive Digital Solutions": ["Figma", "QA Testing", "Prototypes"],
  "STI College": ["Next.js", "Supabase", "Full-Stack"],
};

/** Short, right-aligned date labels — newest first. */
const SHORT_DATES: Record<string, string> = {
  "Sun Life Financial Philippines": "Jun – Aug 2026",
  "Alpha Centauri Garments": "Mar – Jun 2026",
  "BoxHive Digital Solutions": "Mar – May 2026",
  "STI College": "Mar – Nov 2025",
};

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

export default function ExperienceTimeline() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeCount, setActiveCount] = useState(reduced ? WORK_EXPERIENCE.length : 0);
  const [visible, setVisible] = useState<boolean[]>(() =>
    WORK_EXPERIENCE.map(() => reduced),
  );

  useEffect(() => {
    if (reduced) {
      setVisible(WORK_EXPERIENCE.map(() => true));
      setActiveCount(WORK_EXPERIENCE.length);
      if (progressRef.current) progressRef.current.style.height = "100%";
      return;
    }
    if (!containerRef.current) return;

    const items = itemRefs.current.filter(Boolean) as HTMLElement[];
    if (!items.length) return;

    // Fade-up entrance via IntersectionObserver.
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = Number((entry.target as HTMLElement).dataset.index ?? 0);
          setVisible((prev) => {
            if (prev[idx]) return prev;
            const next = [...prev];
            next[idx] = true;
            return next;
          });
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );
    items.forEach((el, i) => {
      el.dataset.index = String(i);
      revealObserver.observe(el);
    });

    // Dot activation: an entry activates when its dot crosses the viewport centre.
    const activationObserver = new IntersectionObserver(
      (entries) => {
        const states: boolean[] = new Array(items.length).fill(false);
        // Derive centre state from latest intersection records where available.
        // Fall back to getBoundingClientRect for a deterministic answer.
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const centre = vh / 2;
        items.forEach((el, i) => {
          const rect = el.querySelector("[data-timeline-dot]")?.getBoundingClientRect() ?? el.getBoundingClientRect();
          states[i] = rect.top <= centre;
        });
        const count = states.filter(Boolean).length;
        setActiveCount(count);
        // Animate rail progress.
        const total = items.length;
        const pct = total ? (count / total) * 100 : 0;
        if (progressRef.current) {
          progressRef.current.style.height = `${pct}%`;
        }
        void entries;
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );
    items.forEach((el) => activationObserver.observe(el));

    // Scroll fallback — IntersectionObserver covers activation, but the rail
    // progress also animates smoothly on scroll when IO is unavailable / sparse.
    let raf: number | null = null;
    const updateRail = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const centre = vh / 2;
      const totalHeight = Math.max(rect.height, 1);
      const travelled = Math.min(Math.max(centre - rect.top, 0), totalHeight);
      const pct = (travelled / totalHeight) * 100;
      if (progressRef.current) progressRef.current.style.height = `${pct}%`;
      // Dot activation fallback (centre-crossing).
      let count = 0;
      items.forEach((el) => {
        const dot = el.querySelector("[data-timeline-dot]")?.getBoundingClientRect();
        if (dot && dot.top <= centre) count += 1;
      });
      setActiveCount((prev) => (prev === count ? prev : count));
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        updateRail();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateRail();

    return () => {
      revealObserver.disconnect();
      activationObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section aria-labelledby="home-experience-heading" className="max-w-[960px]">
      <div className="flex items-baseline justify-between gap-4">
        <h2 id="home-experience-heading" className="text-[14px] font-medium text-muted">
          Experience
        </h2>
        <Link
          href="/experience"
          className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-ink"
        >
          See full experience
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div ref={containerRef} className="relative mt-8">
        {/* Track */}
        <div aria-hidden="true" className="absolute inset-y-0 left-[5px] w-px bg-line" />
        {/* Animated progress rail */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[5px] w-px overflow-hidden"
        >
          <div
            ref={progressRef}
            className={`w-px bg-ink ${reduced ? "" : "transition-[height] duration-300 ease-out"}`}
            style={{ height: reduced ? "100%" : "0%" }}
          />
        </div>

        <ol className="relative flex flex-col">
          {WORK_EXPERIENCE.map((exp, index) => {
            const active = index < activeCount;
            const isVisible = visible[index] ?? false;
            const tags = (EXPERIENCE_TAGS[exp.company] ?? []).slice(0, 3);
            const shortDate = SHORT_DATES[exp.company] ?? exp.period;
            return (
              <li
                key={`${exp.company}-${exp.period}`}
                ref={(el) => {
                  itemRefs.current[index] = el;
                }}
                data-index={index}
                className="group relative flex gap-4 pb-10 last:pb-0 sm:gap-5"
              >
                {/* Dot */}
                <span
                  aria-hidden="true"
                  data-timeline-dot
                  className={`relative z-10 mt-[7px] flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                    active
                      ? "border-ink bg-ink"
                      : "border-line-strong bg-surface"
                  }`}
                >
                  <span
                    className={`h-1 w-1 rounded-full transition-colors duration-300 ${
                      active ? "bg-bg" : "bg-transparent"
                    }`}
                  />
                </span>

                <article
                  className={`${reduced ? "" : "transition-all duration-700 ease-out"} ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-[18px] opacity-0"
                  } min-w-0 flex-1`}
                >
                  <div className="flex flex-col gap-1 lg:flex-row lg:items-baseline lg:justify-between lg:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-[16px] font-semibold leading-snug text-ink">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-[14px] leading-snug text-muted">
                        {exp.company} · {exp.subtitle}
                      </p>
                    </div>
                    <p className="shrink-0 text-[14px] tabular-nums text-muted lg:text-right">
                      {shortDate}
                    </p>
                  </div>

                  {tags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {tags.map((tag) => (
                        <span key={tag} className="chip">
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <details className="group/details mt-3">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                      Show details
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-open/details:rotate-180" />
                    </summary>
                    <div className="mt-3 rounded-xl border border-line bg-surface p-4 sm:p-5">
                      <p className="text-[14px] leading-[1.7] text-muted">{exp.description}</p>
                      {exp.highlights.length > 0 ? (
                        <ul className="mt-3 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                              <Check className="mt-0.5 h-3 w-3 shrink-0 text-ink" strokeWidth={2.5} />
                              {h}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <p className="mt-3 text-[12px] tabular-nums text-subtle">{exp.period}</p>
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink"
                        >
                          Visit company
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ) : null}
                    </div>
                  </details>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
