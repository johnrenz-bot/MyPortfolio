"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaExternalLinkAlt } from "react-icons/fa";
import { WORK_EXPERIENCE } from "../../../data/experience";
import type { WorkExperience } from "../../../types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ─── Certificate lightbox ─── */
function CertificateModal({
  certificate,
  company,
  caption,
  onClose,
}: {
  certificate: string;
  company: string;
  caption?: string;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${company} certificate`}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-xl overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.3, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl flex flex-col items-center my-auto"
      >
        <button
          onClick={onClose}
          className="self-end mb-3 px-3 py-1.5 text-neutral-400 hover:text-white transition-colors font-mono uppercase tracking-widest text-xs flex items-center gap-2 rounded-lg bg-neutral-900/60 border border-white/10"
        >
          Close <span className="text-sm">✕</span>
        </button>

        <div className="relative w-full rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 flex items-center justify-center">
          <Image
            src={certificate}
            alt={`${company} Certificate`}
            width={1600}
            height={1200}
            className="object-contain w-full max-h-[70vh]"
            priority
          />
        </div>

        <div className="mt-4 w-full px-6 py-5 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl">
          <h3 className="text-base font-black tracking-tight text-neutral-900 dark:text-white mb-1">
            {company}
          </h3>
          {caption && (
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {caption}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Inline certificate panel ─── */
function CertificatePanel({
  exp,
  onOpen,
}: {
  exp: WorkExperience;
  onOpen: () => void;
}) {
  if (!exp.certificate) return null;

  const isPortrait = exp.certificateMeta?.orientation === "portrait";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-3">
        <span className="label-mono text-neutral-400 dark:text-neutral-500">
          Certificate
        </span>
        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-300 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          Open Full
        </button>
      </div>

      <button
        onClick={onOpen}
        aria-label={`View ${exp.company} certificate`}
        className={`group relative w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-lg ${
          isPortrait ? "aspect-[4/5] max-w-[280px]" : "aspect-[1.414/1]"
        }`}
      >
        <Image
          src={exp.certificate}
          alt={`${exp.company} Certificate`}
          fill
          sizes="(max-width: 1024px) 90vw, 300px"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-neutral-950/0 group-hover:bg-neutral-950/10 transition-colors duration-300" />
        <span className="absolute bottom-2 right-2 inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/90 dark:bg-neutral-900/90 backdrop-blur border border-neutral-200 dark:border-neutral-700 text-[9px] font-bold uppercase tracking-wider text-neutral-700 dark:text-neutral-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          Expand
        </span>
      </button>

      {exp.certificateMeta?.caption && (
        <p className="text-[11px] leading-snug text-neutral-500 dark:text-neutral-400">
          {exp.certificateMeta.caption}
        </p>
      )}
    </div>
  );
}

/* ─── Experience card ─── */
function ExperienceCard({
  exp,
  index,
  onOpenCertificate,
}: {
  exp: WorkExperience;
  index: number;
  onOpenCertificate: (exp: WorkExperience) => void;
}) {
  const hasCertificate = Boolean(exp.certificate);

  return (
    <article
      className={`reveal delay-${(index % 4) + 1} group relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl`}
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
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center overflow-hidden">
                <Image
                  src={exp.logo}
                  alt={exp.company}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
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

          {/* Certificate column — only for roles that have one */}
          {hasCertificate && (
            <div className="lg:border-l lg:border-neutral-200 dark:lg:border-neutral-800 lg:pl-8">
              <CertificatePanel
                exp={exp}
                onOpen={() => onOpenCertificate(exp)}
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
  const [activeCert, setActiveCert] = useState<WorkExperience | null>(null);

  const closeCert = useCallback(() => setActiveCert(null), []);

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
              onOpenCertificate={setActiveCert}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeCert?.certificate && (
          <CertificateModal
            certificate={activeCert.certificate}
            company={activeCert.company}
            caption={activeCert.certificateMeta?.caption}
            onClose={closeCert}
          />
        )}
      </AnimatePresence>
    </div>
  );
}