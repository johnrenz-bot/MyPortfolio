"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";

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
import type { Community, Event, Education, Skill } from "../../../types";

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

export default function AdditionalSections() {
  return (
    <div className="relative w-full bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 overflow-x-hidden antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16 space-y-16 md:space-y-24">
        {/* Technical Stack Breakdown */}
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
            title="Backend & Databases"
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
            eyebrow="Workflow & Collaboration"
            title="Developer Tools & Management"
            subtitle="Version control, project tracking, and agile collaboration tooling."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...SKILLS_DATA.devTools, ...SKILLS_DATA.managementTools].map((skill: Skill, index: number) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </section>

        {/* Skills Matrix */}
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

        {/* Events & Meetups */}
        <section className="space-y-12">
          <SectionHeader
            eyebrow="Community Activity"
            title="Events & Meetups"
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

        {/* Developer Communities (Secondary Section) */}
        <section className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="space-y-3"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400"
            >
              Developer Communities
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-900 dark:text-white"
            >
              Community Involvement
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {COMMUNITIES.map((community: Community, index: number) => (
              <motion.a
                key={index}
                href={community.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group flex items-center gap-5 p-5 sm:p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900/60 hover:border-neutral-900 dark:hover:border-white transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:border-neutral-900 dark:group-hover:border-white transition-colors duration-300">
                  <Image
                    src={community.logo}
                    alt={community.name}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-neutral-900 dark:text-white truncate">
                    {community.name}
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    {community.role} · {community.year}
                  </p>
                </div>
                <span className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors text-sm flex-shrink-0">
                  →
                </span>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
