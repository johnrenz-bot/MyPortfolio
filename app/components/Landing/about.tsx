"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";

import { HERO_DATA } from "../../../data/hero";
import { WORK_EXPERIENCE, EXPERIENCE_TIMELINE } from "../../../data/experience";
import {
  DESIGN_TOOLS,
  FRONTEND_TECH,
  BACKEND_TECH,
  MANAGEMENT_TOOLS,
  PORTFOLIO_PLATFORMS,
  DEV_TOOLS,
  SOFT_SKILLS,
  HARD_SKILLS,
} from "../../../data/skills";
import { COMMUNITIES } from "../../../data/communities";
import { EVENTS } from "../../../data/events";
import { EDUCATION } from "../../../data/education";
import { CERTIFICATES } from "../../../data/certificates";
import type { WorkExperience, TimelineItem, Community, Event, Education, Skill } from "../../../types";

const faMap = FaIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
const siMap = SiIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
const cgMap = CgIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;

const SKILLS_DATA = {
  designTools: DESIGN_TOOLS,
  frontendTech: FRONTEND_TECH,
  backend: BACKEND_TECH,
  managementTools: MANAGEMENT_TOOLS,
  portfolioPlatforms: PORTFOLIO_PLATFORMS,
  devTools: DEV_TOOLS,
};

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

const AnimatedCounter = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const onView = () => {
    if (started.current) return;
    started.current = true;
    let start = 0;
    const duration = 900;
    const stepTime = Math.max(Math.floor(duration / Math.max(value, 1)), 30);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      onViewportEnter={onView}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="text-center p-8 sm:p-10 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white hover:shadow-xl transition-all duration-300"
    >
      <div className="text-5xl sm:text-6xl font-black text-neutral-900 dark:text-white tabular-nums">
        {count}+
      </div>
      <p className="text-xs sm:text-sm font-bold text-neutral-500 dark:text-neutral-400 mt-3 tracking-wide uppercase">
        {label}
      </p>
    </motion.div>
  );
};

const SkillCard = ({
  iconId,
  name,
  proficiency,
  description,
  index,
}: {
  iconId: string;
  name: string;
  proficiency: string;
  description: string;
  index: number;
}) => {
  const getIcon = (id: string) => {
    if (id.startsWith("Fa") && faMap[id]) {
      const Icon = faMap[id];
      return <Icon />;
    }
    if (id.startsWith("Si") && siMap[id]) {
      const Icon = siMap[id];
      return <Icon />;
    }
    if (id.startsWith("Cg") && cgMap[id]) {
      const Icon = cgMap[id];
      return <Icon />;
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } }}
      className="group p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 hover:bg-neutral-900 hover:border-neutral-900 dark:hover:bg-neutral-100 dark:hover:border-white transition-colors duration-300 shadow-sm hover:shadow-xl"
    >
      <div className="text-neutral-900 dark:text-neutral-100 group-hover:text-white dark:group-hover:text-neutral-950 text-3xl mb-4 inline-block transition-colors duration-300">
        {getIcon(iconId)}
      </div>
      <h3 className="font-bold text-neutral-900 dark:text-white group-hover:text-white dark:group-hover:text-neutral-950 mb-1 text-lg transition-colors duration-300">
        {name}
      </h3>
      <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-300 dark:group-hover:text-neutral-600 mb-3 uppercase tracking-wider transition-colors duration-300">
        {proficiency}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 group-hover:text-neutral-200 dark:group-hover:text-neutral-800 leading-relaxed transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

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

export default function About() {
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
    <div className="relative w-full min-h-screen bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 overflow-x-hidden antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-20 md:py-28 space-y-28 md:space-y-36">
        {/* About Intro Section */}
        <section className="space-y-8">
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400"
            >
              Background &amp; Profile
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white max-w-4xl leading-[0.95]">
              About &amp; Experience
            </h2>
            <p className="text-lg sm:text-xl font-medium text-neutral-600 dark:text-neutral-300 max-w-3xl">
              Software Engineer &amp; Web Developer with a strong foundation in modern frontend architecture, backend systems, and UI/UX engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="md:col-span-2">
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                Graduated with a Bachelor of Science in Information Technology from STI College, building hands-on experience in full-stack web applications, UI/UX systems design, and collaborative engineering workflows. Completed multiple internships spanning corporate operations, apparel e-commerce platforms, and mobile application QA testing.
              </p>
            </div>
            <div className="space-y-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {[
                { icon: <FaMapMarkerAlt />, value: HERO_DATA.location, href: null },
                { icon: <FaEnvelope />, value: HERO_DATA.email, href: `mailto:${HERO_DATA.email}` },
                { icon: <FaPhone />, value: HERO_DATA.phone, href: `tel:${HERO_DATA.phone}` },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800/80 flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="hover:underline truncate">{item.value}</a>
                  ) : (
                    <span className="truncate">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Journey Section */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="My Community Journey"
            title="Growing Through Community"
            subtitle="I actively joined developer communities to accelerate my technical growth, learn best practices from industry peers, and contribute collaboratively."
          />

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {COMMUNITIES.map((community: Community, index: number) => (
              <motion.a
                key={index}
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 sm:p-10 overflow-hidden bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-20 h-20 mb-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center group-hover:border-neutral-900 dark:group-hover:border-white transition-colors duration-300">
                    <Image
                      src={community.logo}
                      alt={community.name}
                      width={64}
                      height={64}
                      className="w-14 h-14 object-contain"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1.5">
                    {community.name}
                  </h3>
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
                    {community.location}
                  </p>

                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm">
                    {community.description}
                  </p>
                </div>

                <div className="mt-8 font-mono text-xs font-bold tracking-wider text-neutral-900 dark:text-white flex items-center gap-2 group-hover:gap-3 transition-all">
                  <span>VISIT COMMUNITY</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Counter Stats Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <AnimatedCounter value={4} label="Completed Systems" />
            <AnimatedCounter value={3} label="Industry Internships & Roles" />
            <AnimatedCounter value={5} label="Professional Certifications" />
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Career Experience"
            title="Professional Experience"
            subtitle="Documented background in full-stack web development, UI/UX systems design, team leadership, and quality assurance."
          />

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

        {/* Education Section */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Academic Foundation"
            title="Education"
            subtitle="Foundation and academic coursework in Information Technology and software fundamentals."
          />

          <div className="grid gap-6">
            {EDUCATION.map((edu: Education, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="p-8 sm:p-10 border border-neutral-200 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white text-2xl shadow-sm border border-neutral-200 dark:border-neutral-700 flex-shrink-0">
                    <FaGraduationCap />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-neutral-900 dark:text-white mb-1">{edu.degree}</h3>
                    <p className="text-base font-bold text-neutral-800 dark:text-neutral-200 mb-1">{edu.school}</p>
                    <p className="font-mono text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Credentials"
            title="Certifications"
            subtitle="Industry-recognized courses and technical training credentials."
          />

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {CERTIFICATES.map((cert: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className="p-5 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-all duration-300 flex items-start gap-3.5"
              >
                <div className="w-2.5 h-2.5 bg-neutral-900 dark:bg-white rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200 leading-snug">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Breakdown */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Core Competencies"
            title="Frontend Stack"
            subtitle="Primary frontend technologies used for production web application development."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.frontendTech.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            eyebrow="Backend Technologies"
            title="Backend &amp; Databases"
            subtitle="Server-side frameworks, relational databases, and API development."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_DATA.backend.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            eyebrow="UI/UX Engineering"
            title="Design Tools"
            subtitle="UI design, wireframing, component libraries, and interactive prototyping."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_DATA.designTools.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            eyebrow="Workflow &amp; Collaboration"
            title="Developer Tools &amp; Management"
            subtitle="Version control, project tracking, and agile collaboration tooling."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...SKILLS_DATA.devTools, ...SKILLS_DATA.managementTools].map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            eyebrow="Skills Matrix"
            title="Technical Proficiencies"
            subtitle="Key software engineering proficiencies and industry hard skills."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HARD_SKILLS.map((skill: string, index: number) => (
              <div
                key={index}
                className="px-5 py-3.5 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-colors duration-300 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full flex-shrink-0" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm uppercase tracking-wider">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-12">
          <SectionHeader
            eyebrow="Interpersonal"
            title="Soft Skills"
            subtitle="Communication, leadership, and collaboration abilities developed across team environments."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOFT_SKILLS.map((skill: string, index: number) => (
              <div
                key={index}
                className="px-5 py-3.5 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-colors duration-300 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full flex-shrink-0" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm uppercase tracking-wider">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Events & Meetups */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Community Activity"
            title="Events &amp; Meetups"
            subtitle="Tech conferences, hackathons, and industry events attended."
          />

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {EVENTS.map((event: Event, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -4 }}
                className="p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl font-black">{event.badge}</span>
                    <span className="text-[10px] font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-widest bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-neutral-900 dark:text-white mb-1.5">
                    {event.name}
                  </h3>
                  <p className="text-xs font-bold text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-wider font-mono">
                    {event.location}
                  </p>
                  <p className="text-sm font-bold text-neutral-900 dark:text-neutral-200 border-b border-neutral-100 dark:border-neutral-800 pb-2.5 inline-block mb-3">
                    {event.role}
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed font-normal">
                    {event.description}
                  </p>
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