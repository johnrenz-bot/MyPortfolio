"use client";

import { useMemo, useState } from "react";
import {
  CERTS,
  DEVICE_MOCKUPS,
  GRAPHIC_DESIGNS,
  MERCHANDISE_DESIGNS,
  POSTERS,
  UI_UX_DESIGNS,
  WEBSITE_DESIGN,
  WEB_DEVELOPMENT,
  WORK_CATEGORIES,
  type CategoryKey,
} from "@/data/projects";
import type { Project } from "@/types";
import ProjectCard from "./ui/ProjectCard";
import ProjectCarouselCard from "./ui/ProjectCarouselCard";

type FilterKey = CategoryKey | "all";

const ITEMS: Record<CategoryKey, Project[]> = {
  "web-dev": WEB_DEVELOPMENT,
  "website-design": WEBSITE_DESIGN,
  "ui-ux": UI_UX_DESIGNS,
  certificates: CERTS,
  mockups: DEVICE_MOCKUPS,
  posters: POSTERS,
  merchandise: MERCHANDISE_DESIGNS,
  "graphic-design": GRAPHIC_DESIGNS,
};

type Entry = {
  project: Project;
  category: string;
  variant: "project" | "certificate";
};

const ALL_ENTRIES: Entry[] = WORK_CATEGORIES.flatMap((category) =>
  (ITEMS[category.key] ?? []).map((project) => ({
    project,
    category: category.label,
    variant: category.key === "certificates" ? "certificate" : "project",
  })),
);

export default function WorkGallery() {
  const [active, setActive] = useState<FilterKey>("web-dev");

  const entries = useMemo(() => {
    if (active === "all") return ALL_ENTRIES;
    const category = WORK_CATEGORIES.find((item) => item.key === active);
    if (!category) return ALL_ENTRIES;
    return (ITEMS[active] ?? []).map((project) => ({
      project,
      category: category.label,
      variant: active === "certificates" ? ("certificate" as const) : ("project" as const),
    }));
  }, [active]);

  const total = ALL_ENTRIES.length;
  const activeLabel =
    active === "all"
      ? "All work"
      : WORK_CATEGORIES.find((item) => item.key === active)?.label ?? "Work";

  return (
    <div className="space-y-8">
      <div className="reveal flex flex-col gap-5">
        <div className="flex items-center gap-3 pb-4 border-b border-line">
          <span className="eyebrow text-ink">02.1</span>
          <span className="eyebrow text-line-strong">·</span>
          <span className="eyebrow">Archive</span>
          <span className="ml-auto font-mono text-[10px] tabular-nums text-subtle">
            {total} projects
          </span>
        </div>

        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter work by category">
          <button
            type="button"
            aria-pressed={active === "all"}
            onClick={() => setActive("all")}
            className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-250 ${
              active === "all"
                ? "border-ink bg-ink text-bg"
                : "border-line bg-surface text-muted hover:border-line-strong hover:text-ink"
            }`}
          >
            All work
            <span className={`font-mono text-[9px] ${active === "all" ? "opacity-60" : "text-subtle"}`}>
              {total}
            </span>
          </button>

          {WORK_CATEGORIES.map((category) => {
            const isActive = active === category.key;
            const count = ITEMS[category.key]?.length ?? 0;
            return (
              <button
                key={category.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category.key)}
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-250 ${
                  isActive
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-surface text-muted hover:border-line-strong hover:text-ink"
                }`}
              >
                {category.label}
                <span className={`font-mono text-[9px] ${isActive ? "opacity-60" : "text-subtle"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-muted">
          {activeLabel} — a collection of shipped products, design explorations and
          credentials. Filter the archive to explore each discipline.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:gap-6">
        {entries.map(({ project, category, variant }) => {
          const isCarousel =
            project.id === "capstone" ||
            project.id === "grooveyyph-chatbot" ||
            project.id === "tp-client-portal" ||
            project.id === "reefer-frontend";
          if (isCarousel) {
            return (
              <div key={`${active}-${project.id}`} className="sm:col-span-2">
                <ProjectCarouselCard
                  project={project}
                  category={category}
                  priority={false}
                />
              </div>
            );
          }
          return (
            <ProjectCard
              key={`${active}-${project.id}`}
              project={project}
              category={category}
              variant={variant}
            />
          );
        })}
      </div>
    </div>
  );
}
