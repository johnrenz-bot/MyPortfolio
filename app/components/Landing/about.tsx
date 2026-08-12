"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
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

// Assemble SKILLS_DATA object to match usage pattern in this component
const SKILLS_DATA = {
  designTools: DESIGN_TOOLS,
  frontendTech: FRONTEND_TECH,
  backend: BACKEND_TECH,
  managementTools: MANAGEMENT_TOOLS,
  portfolioPlatforms: PORTFOLIO_PLATFORMS,
  devTools: DEV_TOOLS,
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
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
    viewport={{ once: true, margin: "-80px" }}
    variants={staggerContainer}
    className="space-y-4"
  >
    {eyebrow && (
      <motion.p
        variants={fadeUp}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="text-xs font-bold tracking-[0.25em] uppercase text-slate-500"
      >
        {eyebrow}
      </motion.p>
    )}
    <motion.h2
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-5xl md:text-6xl font-black tracking-tight text-slate-900"
    >
      {title}
    </motion.h2>
    <motion.p
      variants={fadeUp}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-gray-600 text-lg font-medium max-w-2xl"
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
      className="text-center p-10 rounded-3xl border border-gray-200 bg-white hover:border-slate-900 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
    >
      <div className="text-6xl font-black text-slate-900 tabular-nums">{count}+</div>
      <p className="text-sm font-bold text-gray-500 mt-3 tracking-wide uppercase">{label}</p>
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
  const getIcon = (iconId: string) => {
    if (iconId.startsWith("Fa") && (FaIcons as any)[iconId]) {
      const Icon = (FaIcons as any)[iconId];
      return <Icon />;
    }
    if (iconId.startsWith("Si") && (SiIcons as any)[iconId]) {
      const Icon = (SiIcons as any)[iconId];
      return <Icon />;
    }
    if (iconId.startsWith("Cg") && (CgIcons as any)[iconId]) {
      const Icon = (CgIcons as any)[iconId];
      return <Icon />;
    }
    return null;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
      className="group p-6 border border-gray-200 rounded-2xl bg-white hover:bg-slate-900 hover:border-slate-900 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-slate-900/10"
    >
      <motion.div
        
        transition={{  stiffness: 300, damping: 15 }}
        className="text-slate-900 group-hover:text-white text-3xl mb-4 inline-block transition-colors duration-300"
      >
        {getIcon(iconId)}
      </motion.div>
      <h4 className="font-bold text-slate-900 group-hover:text-white mb-1 text-lg transition-colors duration-300">
        {name}
      </h4>
      <p className="text-xs font-bold text-gray-500 group-hover:text-gray-300 mb-3 uppercase tracking-wider transition-colors duration-300">
        {proficiency}
      </p>
      <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const CompanyLogoImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    
    transition={{  stiffness: 260, damping: 18 }}
    className="relative w-24 h-24 rounded-2xl border border-gray-200 flex items-center justify-center overflow-hidden hover:border-slate-900 hover:shadow-lg transition-shadow"
  >
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className="w-full h-full object-cover"
      priority
    />
  </motion.div>
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
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            ✕
          </motion.button>
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.92, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center"
          >
            <Image
              src={certificate}
              alt={`${company} Certificate`}
              width={1200}
              height={800}
              priority
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-2xl shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Portfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 1]);

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
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-slate-900 overflow-x-hidden antialiased selection:bg-slate-900 selection:text-white"
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.4]">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute bottom-[10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-slate-50 blur-3xl" />
      </div>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-40">
        <motion.section style={{ opacity: heroOpacity }} className="space-y-8">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate-900 font-bold tracking-widest uppercase text-sm"
            >
              ✨ Welcome to my portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 max-w-4xl leading-[0.95]"
            >
              Software Engineer & Web Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl md:text-3xl font-bold text-slate-700 max-w-3xl"
            >
              {HERO_DATA.title} — {HERO_DATA.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200"
          >
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {HERO_DATA.bio}
              </p>
            </div>
            <div className="space-y-4 text-sm font-medium text-gray-700">
              {[
                { icon: <FaMapMarkerAlt />, value: HERO_DATA.location },
                { icon: <FaEnvelope />, value: HERO_DATA.email },
                { icon: <FaPhone />, value: HERO_DATA.phone },
              ].map((item, i) => (
                <motion.p
                  key={i}
                  whileHover={{ x: 4 }}
                  transition={{  stiffness: 300, damping: 20 }}
                  className="flex items-center gap-3 hover:text-slate-900 transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                    {item.icon}
                  </span>
                  {item.value}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="pt-20 pb-20"
          >
            <div className="max-w-5xl mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-emerald-600 font-semibold tracking-[3px] text-sm mb-3">
                  MY COMMUNITY JOURNEY
                </p>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                  Growing Through Community
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  I actively joined these communities to accelerate my growth as a developer. The connections, knowledge sharing, and collaborative spirit here have been instrumental in shaping my skills and career.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {COMMUNITIES.map((community: Community, index: number) => (
                  <motion.a
                    key={index}
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    
                    className={`group relative border border-gray-200 rounded-3xl p-10 overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${index === 0
                        ? "hover:border-emerald-600 hover:bg-emerald-900 hover:text-white"
                        : "hover:border-violet-600 hover:bg-violet-900 hover:text-white"
                      }`}
                  >
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index === 0
                          ? "bg-gradient-to-br from-emerald-100/40 to-transparent"
                          : "bg-gradient-to-br from-violet-100/40 to-transparent"
                        }`}
                    />

                    <div className="flex flex-col items-center text-center relative z-10">
                      <motion.div
                        
                        transition={{  stiffness: 260, damping: 16 }}
                        className="w-28 h-28 mb-8 rounded-3xl border border-gray-200 flex items-center justify-center group-hover:border-white/30 transition-colors duration-500"
                      >
                        <Image
                          src={community.logo}
                          alt={community.name}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-contain"
                        />
                      </motion.div>

                      <h3 className="text-3xl font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors duration-300">
                        {community.name}
                      </h3>
                      <p
                        className={`font-medium mb-6 transition-colors duration-300 ${index === 0
                            ? "text-emerald-600 group-hover:text-emerald-200"
                            : "text-violet-600 group-hover:text-violet-200"
                          }`}
                      >
                        {community.location}
                      </p>

                      <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-base transition-colors duration-300">
                        {community.description}
                      </p>

                      <div
                        className={`mt-8 font-medium flex items-center gap-2 text-sm tracking-wider group-hover:gap-3 transition-all ${index === 0
                            ? "text-emerald-600 group-hover:text-emerald-200"
                            : "text-violet-600 group-hover:text-violet-200"
                          }`}
                      >
                        {index === 0 ? "VISIT COMMUNITY" : "JOIN THE COMMUNITY"}
                        <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <section className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter value={3} label="Completed Systems" />
            <AnimatedCounter value={2} label="Industry Internships" />
            <AnimatedCounter value={5} label="Expertise Certificates" />
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader
            title="Professional Experience"
            subtitle="Documented background in UI/UX systems design, workflow leadership, and feature deployment across multiple organizations and projects."
          />

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((exp: WorkExperience, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                className="group p-8 md:p-10 border border-gray-200 rounded-3xl bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  <div className="flex-shrink-0">
                    <CompanyLogoImage src={exp.logo} alt={exp.company} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full text-white bg-slate-900">
                        {exp.type}
                      </span>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
                        {exp.period}
                      </span>
                    </div>

                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-bold text-slate-900">
                          {exp.company} <span className="text-gray-500 text-sm font-semibold">• {exp.subtitle}</span>
                        </p>
                      </div>

                      {exp.certificate && (
                        <motion.button
                          
                          whileTap={{ scale: 0.96 }}
                          transition={{  stiffness: 400, damping: 20 }}
                          onClick={() => openCertificate(exp.certificate, exp.company)}
                          className="flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                        >
                          <FaAward className="text-lg" />
                          View Certificate
                        </motion.button>
                      )}
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed font-medium mb-8">
                      {exp.description}
                    </p>

                    <div className="border-t border-gray-100 pt-8 mt-4">
                      <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">
                        Experience Timeline &amp; Focus
                      </p>
                      
                      <div className="inline-flex mb-6">
                        <span className="text-sm font-bold text-white bg-slate-900 px-5 py-2.5 rounded-xl border border-slate-900 shadow-sm">
                          {exp.timeline}
                        </span>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        {exp.highlights.map((highlight: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            viewport={{ once: true }}
                            whileHover={{ x: 3 }}
                            className="flex items-center gap-3 p-4 bg-gray-50/80 rounded-xl transition-all duration-300 hover:bg-gray-100 group/item"
                          >
                            <FaArrowRight className="text-slate-900 text-xs flex-shrink-0 font-bold transition-colors duration-300" />
                            <span className="text-sm text-slate-700 font-medium transition-colors duration-300">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader
            title="Career Journey"
            subtitle="Complete timeline from 2024 to 2026 showcasing continuous growth in web design and development"
          />

          <div className="space-y-8">
            {EXPERIENCE_TIMELINE.map((item: TimelineItem, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 group"
              >
                <div className="flex gap-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      
                      transition={{  stiffness: 300, damping: 15 }}
                      className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-md group-hover:shadow-xl transition-shadow duration-300"
                    >
                      {item.icon}
                    </motion.div>
                    {index < EXPERIENCE_TIMELINE.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originY: 0 }}
                        className="w-1 h-20 bg-gradient-to-b from-slate-900 to-gray-300 mt-4 group-hover:h-24 transition-[height] duration-300"
                      />
                    )}
                  </div>

                  <div className="pb-8 flex-1">
                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.focus.map((tag: string, i: number) => (
                        <motion.span
                          key={i}
                          
                          transition={{  stiffness: 400, damping: 20 }}
                          className="px-4 py-2 text-slate-900 text-xs font-bold rounded-full border border-gray-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Education" subtitle="Foundation & Academic Excellence" />

          <div className="grid gap-8">
            {EDUCATION.map((edu: Education, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -4 }}
                className="p-10 border border-gray-200 rounded-3xl bg-white hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-slate-900 text-3xl shadow-sm border border-gray-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                    <FaGraduationCap />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg font-bold text-slate-900 mb-1">{edu.school}</p>
                    <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Certifications" subtitle="Professional Development & Recognition" />

          <div className="grid gap-4">
            {CERTIFICATES.map((cert: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ x: 4 }}
                className="p-6 border border-gray-200 rounded-2xl bg-white hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-slate-900 group-hover:bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-all duration-300" />
                <p className="text-base font-medium text-slate-900 group-hover:text-white transition-colors duration-300">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Design Tools" subtitle="Creative & Design Software Expertise" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS_DATA.designTools.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Frontend Stack" subtitle="Modern Web Development Technologies" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS_DATA.frontendTech.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Backend & Databases" subtitle="Server-Side & Data Management" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS_DATA.backend.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Project Management Tools" subtitle="Organization & Collaboration" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {SKILLS_DATA.managementTools.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Portfolio & Web Platforms" subtitle="Design Showcase & Web Building" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS_DATA.portfolioPlatforms.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Developer Tools" subtitle="Version Control & Collaboration" />
          <div className="grid sm:grid-cols-2 gap-8">
            {SKILLS_DATA.devTools.map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Technical Skills" subtitle="Core Competencies & Expertise Areas" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HARD_SKILLS.map((skill: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % 6) * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                
                className="px-6 py-4 border border-gray-200 rounded-2xl bg-white hover:border-slate-900 hover:bg-slate-900 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-slate-900 group-hover:bg-white rounded-full group-hover:scale-125 transition-all duration-300" />
                  <span className="font-bold text-slate-900 group-hover:text-white text-sm uppercase tracking-wider transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Soft Skills" subtitle="Professional & Interpersonal Abilities" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFT_SKILLS.map((skill: string, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: (index % 6) * 0.04, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                
                className="px-6 py-4 border border-gray-200 rounded-2xl bg-white hover:border-slate-900 hover:bg-slate-900 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-slate-900 group-hover:bg-white rounded-full group-hover:scale-125 transition-all duration-300" />
                  <span className="font-bold text-slate-900 group-hover:text-white text-sm uppercase tracking-wider transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="space-y-16">
          <SectionHeader title="Events & Speaking" subtitle="Community Engagement & Networking" />

          <div className="grid md:grid-cols-3 gap-8">
            {EVENTS.map((event: Event, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -6 }}
                className="p-8 border border-gray-200 rounded-3xl bg-white hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group overflow-hidden relative"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl font-black">{event.badge}</span>
                    <span className="text-xs font-bold text-gray-600 group-hover:text-gray-300 uppercase tracking-widest bg-gray-100 group-hover:bg-white/20 px-3 py-1 rounded-full border border-gray-200 group-hover:border-white/30 transition-all duration-300">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="text-sm font-bold text-gray-600 group-hover:text-gray-300 mb-4 uppercase tracking-wider transition-colors duration-300">
                    {event.location}
                  </p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-white border-b border-gray-200 group-hover:border-white/30 pb-3 inline-block mb-4 transition-all duration-300">
                    {event.role}
                  </p>
                  <p className="text-sm text-gray-700 group-hover:text-gray-200 leading-relaxed font-medium transition-colors duration-300">
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