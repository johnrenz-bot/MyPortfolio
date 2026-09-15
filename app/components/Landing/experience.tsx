"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaAward } from "react-icons/fa";

import { WORK_EXPERIENCE, EXPERIENCE_TIMELINE } from "../../../data/experience";
import type { WorkExperience, TimelineItem } from "../../../types";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
}) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    variants={staggerContainer}
    className="space-y-3"
  >
    {eyebrow && (
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400"
      >
        {eyebrow}
      </motion.p>
    )}
    <motion.h2
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-white"
    >
      {title}
    </motion.h2>
    <motion.p
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg font-medium max-w-2xl"
    >
      {subtitle}
    </motion.p>
  </motion.div>
);

const CompanyLogoImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className="w-full h-full object-cover"
    />
  </div>
);

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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

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
            ref={modalRef}
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
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

export default function Experience() {
  const [certificateModal, setCertificateModal] = useState<{
    isOpen: boolean;
    certificate?: string;
    company: string;
  }>({
    isOpen: false,
    company: "",
  });

  const openCertificate = (certificate: string | undefined, company: string) => {
    setCertificateModal({ isOpen: true, certificate, company });
  };

  const closeCertificate = () => {
    setCertificateModal({ isOpen: false, company: "" });
  };

  return (
    <div className="relative w-full bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 overflow-x-hidden antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        {/* Work Experience */}
        <section className="space-y-8">
          <div className="space-y-8">
            {WORK_EXPERIENCE.map((exp: WorkExperience, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="group p-6 sm:p-8 md:p-10 border border-neutral-200 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900/60 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <CompanyLogoImage src={exp.logo} alt={exp.company} />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full text-white bg-neutral-900 dark:bg-white dark:text-neutral-950">
                        {exp.type}
                      </span>
                      <span className="text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 dark:text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-200">
                          {exp.company} <span className="text-neutral-500 text-sm font-semibold">• {exp.subtitle}</span>
                        </p>
                      </div>

                      {exp.certificate && (
                        <button
                          onClick={() => openCertificate(exp.certificate, exp.company)}
                          className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 dark:bg-white hover:bg-neutral-800 dark:hover:bg-neutral-200 text-white dark:text-neutral-950 text-xs font-bold rounded-xl transition-colors duration-300 shadow-sm whitespace-nowrap self-start"
                        >
                          <FaAward className="text-sm" />
                          View Certificate
                        </button>
                      )}
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                      {exp.description}
                    </p>

                    <div className="border-t border-neutral-100 dark:border-neutral-800 pt-6 mt-4">
                      <div className="inline-flex mb-4">
                        <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-3.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 font-mono">
                          {exp.timeline}
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-3">
                        {exp.highlights.map((highlight: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 p-3 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl"
                          >
                            <FaArrowRight className="text-neutral-900 dark:text-white text-xs flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-medium">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Career Timeline Section */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Continuous Learning"
            title="Career Journey"
            subtitle="Timeline showcasing continuous growth across web development, software engineering, and UI/UX design."
          />

          <div className="space-y-6">
            {EXPERIENCE_TIMELINE.map((item: TimelineItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-all duration-300 group"
              >
                <div className="flex gap-6 sm:gap-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-neutral-900 dark:bg-white flex items-center justify-center text-white dark:text-neutral-950 text-xl font-black shadow-md">
                      {item.icon}
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest mb-1.5">
                      {item.period}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.focus.map((tag: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-neutral-700 dark:text-neutral-300 text-xs font-semibold rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <CertificateModal
        isOpen={certificateModal.isOpen}
        certificate={certificateModal.certificate}
        company={certificateModal.company}
        onClose={closeCertificate}
      />
    </div>
  );
}
