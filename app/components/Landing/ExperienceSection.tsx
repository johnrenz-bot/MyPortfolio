"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { WORK_EXPERIENCE } from "../../../data/experience";
import type { WorkExperience } from "../../../types";

const CertificateModal = ({
  isOpen,
  certificate,
  company,
  onClose,
}: {
  isOpen: boolean;
  certificate: string | undefined;
  company: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close"
          >
            ✕
          </button>
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 10 }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center max-w-4xl w-full"
          >
            <Image
              src={certificate}
              alt={`${company} Certificate`}
              width={1200}
              height={800}
              priority
              className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-2xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function ExperienceSection() {
  const [certModal, setCertModal] = useState<{
    isOpen: boolean;
    cert?: string;
    company: string;
  }>({ isOpen: false, company: "" });

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
          <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white">
            Work Experience
          </h2>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {WORK_EXPERIENCE.map((exp: WorkExperience, index: number) => (
            <div
              key={index}
              className={`reveal delay-${(index % 4) + 1} p-6 sm:p-10 lg:p-12 border border-neutral-200 dark:border-neutral-800 rounded-3xl bg-neutral-50/50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors duration-300`}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="shrink-0">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 flex items-center justify-center overflow-hidden shadow-sm">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 flex flex-col gap-5">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md text-white bg-neutral-900 dark:bg-white dark:text-neutral-950">
                          {exp.type}
                        </span>
                        <span className="label-mono text-neutral-500 dark:text-neutral-400">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-200">
                        {exp.company}{" "}
                        <span className="text-neutral-500 text-sm font-semibold mx-1">
                          •
                        </span>{" "}
                        {exp.subtitle}
                      </p>
                    </div>

                    {exp.certificate && (
                      <button
                        onClick={() =>
                          setCertModal({
                            isOpen: true,
                            cert: exp.certificate,
                            company: exp.company,
                          })
                        }
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-900 dark:text-white text-xs font-bold rounded-lg transition-colors border border-neutral-200 dark:border-neutral-700 shadow-sm whitespace-nowrap self-start"
                      >
                        <FaAward className="text-sm" /> View Certificate
                      </button>
                    )}
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="border-t border-neutral-200 dark:border-neutral-800 pt-5 mt-2">
                    <div className="inline-flex mb-4">
                      <span className="label-mono bg-white dark:bg-neutral-950 px-3 py-1.5 rounded border border-neutral-200 dark:border-neutral-800">
                        {exp.timeline}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {exp.highlights.map((highlight: string, i: number) => (
                        <div
                          key={i}
                          className="flex items-start gap-3 bg-white dark:bg-neutral-950/50 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800/50"
                        >
                          <FaArrowRight className="text-neutral-400 dark:text-neutral-600 text-[10px] mt-1 shrink-0" />
                          <span className="text-sm text-neutral-700 dark:text-neutral-300 font-medium leading-snug">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        isOpen={certModal.isOpen}
        certificate={certModal.cert}
        company={certModal.company}
        onClose={() => setCertModal({ isOpen: false, company: "" })}
      />
    </div>
  );
}
