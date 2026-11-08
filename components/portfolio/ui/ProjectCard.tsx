"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, ImageOff } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import PreviewModal from "./PreviewModal";

type ProjectCardProps = {
  project: Project;
  category?: string;
  priority?: boolean;
  variant?: "project" | "certificate";
};

export default function ProjectCard({
  project,
  category,
  priority = false,
  variant = "project",
}: ProjectCardProps) {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTrigger, setPreviewTrigger] = useState<HTMLElement | null>(null);
  const [imgFailed, setImgFailed] = useState(false);
  const isCertificate = variant === "certificate";
  const tech = project.techStack ?? [];
  const visibleTech = tech.slice(0, 4);
  const remaining = tech.length - visibleTech.length;
  const href = project.href || project.image;

  const openPreview = (trigger: HTMLElement | null) => {
    if (imgFailed || !project.image) return;
    setPreviewTrigger(trigger);
    setPreviewOpen(true);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) return;
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
        role="button"
        tabIndex={0}
        aria-label={`Open preview of ${project.title}`}
        onClick={handleCardClick}
        onKeyDown={handleKeyDown}
        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-line-strong"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-surface-2">
          {imgFailed || !project.image ? (
            <div className="absolute inset-0 flex items-center justify-center bg-surface-2">
              <ImageOff className="h-8 w-8 text-subtle" />
            </div>
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority={priority}
              sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 480px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImgFailed(true)}
            />
          )}

          {/* Category badge */}
          {category ? (
            <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-md border border-white/20 bg-black/55 px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">
              {category}
            </span>
          ) : null}

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-end bg-gradient-to-t from-black/85 via-black/50 to-transparent p-4 opacity-100 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
            <div className="space-y-2">
              <h3 className="font-display text-base font-extrabold leading-tight tracking-[-0.02em] text-white sm:text-lg">
                {project.title}
              </h3>
              {project.description ? (
                <p className="line-clamp-2 text-[12px] leading-relaxed text-white/80">
                  {project.description}
                </p>
              ) : null}

              {visibleTech.length > 0 ? (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {visibleTech.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md"
                    >
                      {item}
                    </span>
                  ))}
                  {remaining > 0 ? (
                    <span className="rounded-md border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-white backdrop-blur-md">
                      +{remaining}
                    </span>
                  ) : null}
                </div>
              ) : null}

              <div className="pointer-events-auto flex flex-wrap items-center gap-2 pt-2">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black transition-transform hover:-translate-y-0.5"
                >
                  {isCertificate ? "View certificate" : "View project"}
                  <ExternalLink className="h-3 w-3" />
                </a>
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <FaGithub className="h-3 w-3" />
                    Source
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </article>

      <PreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        project={project}
        restoreFocusTo={previewTrigger}
      />
    </>
  );
}
