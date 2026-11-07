"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { WORK_EXPERIENCE } from "../../../data/experience";
import type { WorkExperience, Project } from "../../../types";
import { Certificate3DCard, CertificateLightbox } from "./Certificate3DShowcase";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Work-experience certificate mapped to Project shape (reuses All Work certificate UI) ─── */
function toCertProject(exp: WorkExperience): Project {
  return {
    id: `${exp.company}-certificate`,
    title: `${exp.company} Certificate`,
    href: exp.certificate || "",
    image: exp.certificate || "",
    description: exp.certificateMeta?.caption || "",
    techStack: [],
    category: "Certificate",
  };
}

/* ─── Experience card ─── */
function ExperienceCard({
  exp,
  index,
  certIndex,
  onOpenCertificate,
}: {
  exp: WorkExperience;
  index: number;
  certIndex?: number;
  onOpenCertificate: (certIndex: number) => void;
}) {
  const hasCertificate = Boolean(exp.certificate);
  const certProject = hasCertificate ? toCertProject(exp) : null;

  return (
    <article
      className={`reveal delay-${(index % 4) + 1} group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] transition-all duration-300 hover:-translate-y-1 hover:border-[#444444] dark:hover:border-[#444444] hover:shadow-xl motion-reduce:transform-none`}
    >
      {/* Index rail — keeps every card visually identical regardless of content */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-14 flex-col items-center justify-center border-r border-neutral-200 dark:border-neutral-800 bg-neutral-50/60 dark:bg-neutral-900/40">
        <span className="text-xl font-black tracking-tight text-neutral-300 dark:text-neutral-600 transition-colors duration-300 group-hover:text-neutral-900 dark:group-hover:text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="lg:pl-14">
        <div
          className={`grid grid-cols-1 gap-8 p-6 sm:p-8 lg:p-10 ${
            hasCertificate
              ? "lg:grid-cols-[minmax(0,1fr)_260px] xl:grid-cols-[minmax(0,1fr)_300px]"
              : ""
          }`}
        >
          {/* Main column */}
          <div className="flex flex-col gap-6 min-w-0">
            {/* Identity row */}
            <div className="flex items-start gap-4 sm:gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 logo-hover animate-fade-in-up">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-white bg-neutral-900 dark:bg-white dark:text-neutral-950">
                    {exp.type}
                  </span>
                  <span className="label-mono text-neutral-500 dark:text-neutral-400">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight mb-1">
                  {exp.role}
                </h3>
                <p className="text-sm sm:text-base font-bold text-neutral-700 dark:text-neutral-300">
                  {exp.company}
                  <span className="text-neutral-400 dark:text-neutral-600 mx-1.5">
                    •
                  </span>
                  <span className="font-medium text-neutral-500 dark:text-neutral-400">
                    {exp.subtitle}
                  </span>
                </p>
              </div>

              {exp.link && (
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exp.company} page`}
                  className="hidden sm:inline-flex items-center justify-center w-9 h-9 shrink-0 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-sm sm:text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-5">
              <span className="label-mono inline-block bg-neutral-50 dark:bg-neutral-950 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800 mb-4 text-neutral-600 dark:text-neutral-300">
                {exp.timeline}
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {exp.highlights.map((highlight: string, i: number) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-950/40 border border-neutral-200/70 dark:border-neutral-800/70"
                  >
                    <FaArrowRight className="text-neutral-400 dark:text-neutral-600 text-[10px] mt-1 shrink-0" />
                    <span className="text-[13px] text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certificate column — reuses the premium certificate card from All Work */}
          {hasCertificate && certProject && certIndex !== undefined && (
            <div className="lg:border-l lg:border-neutral-200 dark:lg:border-neutral-800 lg:pl-8 space-y-3">
              <span className="label-mono text-neutral-400 dark:text-neutral-500">
                Certificate
              </span>
              <Certificate3DCard
                item={certProject}
                index={0}
                total={1}
                onClick={() => onOpenCertificate(certIndex)}
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─── Main Section ─── */
export default function ExperienceSection() {
  const certItems = WORK_EXPERIENCE.filter((e) => e.certificate).map((e) => ({
    exp: e,
    project: toCertProject(e),
  }));
  const certIndexMap = new Map<number, number>();
  let ci = 0;
  WORK_EXPERIENCE.forEach((exp, i) => {
    if (exp.certificate) {
      certIndexMap.set(i, ci);
      ci += 1;
    }
  });

  const [activeCertIndex, setActiveCertIndex] = useState<number | null>(null);

  const closeCert = useCallback(() => setActiveCertIndex(null), []);

  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col gap-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
            <span className="label-mono text-neutral-500 dark:text-neutral-400">
              Professional History
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white">
              Work Experience
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-md leading-relaxed">
              Internships, volunteer work, and an academic capstone — with the
              certificates earned along the way.
            </p>
          </div>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {WORK_EXPERIENCE.map((exp: WorkExperience, index: number) => (
            <ExperienceCard
              key={`${exp.company}-${exp.period}`}
              exp={exp}
              index={index}
              certIndex={certIndexMap.get(index)}
              onOpenCertificate={setActiveCertIndex}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCertIndex !== null && certItems[activeCertIndex] && (
          <CertificateLightbox
            items={[certItems[activeCertIndex].project]}
            currentIndex={0}
            onClose={closeCert}
            onSelectIndex={() => {}}
          />
        )}
      </AnimatePresence>
    </div>
  );
}