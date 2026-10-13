"use client";

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";
import * as TbIcons from "react-icons/tb";
import {
  FRONTEND_TECH,
  BACKEND_TECH,
  DATABASES_TECH,
  PROGRAMMING_LANGUAGES,
  DESIGN_TOOLS,
  MANAGEMENT_DEV_TOOLS,
  SOFT_SKILLS,
  HARD_SKILLS,
} from "../../../data/skills";
import type { Skill } from "../../../types";

const faMap = FaIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;
const siMap = SiIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;
const cgMap = CgIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;
const tbMap = TbIcons as unknown as Record<
  string,
  React.ComponentType<{ className?: string }>
>;

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
  if (id.startsWith("Tb") && tbMap[id]) {
    const Icon = tbMap[id];
    return <Icon />;
  }
  return null;
};

/* ─── Responsive technology card with white hover in dark mode ─── */
const TechIconCard = ({
  iconId,
  name,
  index,
}: Pick<Skill, "iconId" | "name"> & { index: number }) => {
  return (
    <div
      className={`reveal delay-${(index % 6) + 1} skill-icon-card group flex flex-col items-center justify-center gap-3 p-5 sm:p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/90 hover:border-neutral-400 dark:hover:border-white/50 hover:shadow-md dark:hover:shadow-[0_0_25px_rgba(255,255,255,0.08)] cursor-default transition-all duration-300 hover:-translate-y-1`}
    >
      <div className="text-neutral-700 dark:text-neutral-300 text-2xl sm:text-3xl group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-300">
        {getIcon(iconId)}
      </div>
      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 tracking-wide text-center group-hover:text-neutral-950 dark:group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

/* ─── The 6 Organized Categories ─── */
const TECH_GROUPS = [
  {
    category: "Frontend",
    description: "Modern UI libraries, CSS frameworks & component architecture",
    items: FRONTEND_TECH,
  },
  {
    category: "Backend",
    description: "Server-side frameworks, MVC systems & API services",
    items: BACKEND_TECH,
  },
  {
    category: "Databases",
    description: "Relational data structures, cloud backends & real-time storage",
    items: DATABASES_TECH,
  },
  {
    category: "Programming Languages",
    description: "Core languages for frontend scripting, server logic & software development",
    items: PROGRAMMING_LANGUAGES,
  },
  {
    category: "UI/UX & Design Tools",
    description: "Interface prototyping, design systems, vector art & visual styling",
    items: DESIGN_TOOLS,
  },
  {
    category: "Development & Project Management Tools",
    description: "Version control, IDE environments, API testing & Agile project collaboration",
    items: MANAGEMENT_DEV_TOOLS,
  },
];

export default function SkillsSection() {
  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        {/* Technologies & Tools Section Header */}
        <div className="space-y-12 sm:space-y-16">
          <div className="reveal flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                Core Competencies
              </span>
            </div>
            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white">
              Technologies &amp; Tools
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 max-w-2xl">
              Specialized tools and technologies I use to build scalable web applications, design intuitive user experiences, and manage project workflows.
            </p>
          </div>

          {/* 6 Organized Technology Categories */}
          <div className="space-y-12 sm:space-y-14">
            {TECH_GROUPS.map((group, groupIdx) => (
              <div key={group.category} className="space-y-5">
                <div className="reveal flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-2 border-b border-neutral-200/80 dark:border-neutral-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-neutral-900 dark:bg-white shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold tracking-tight text-neutral-950 dark:text-white">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 pl-4.5 sm:pl-0 font-medium">
                    {group.description}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                  {group.items.map((skill, i) => (
                    <TechIconCard
                      key={skill.name}
                      index={groupIdx * 6 + i}
                      iconId={skill.iconId}
                      name={skill.name}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hard Skills + Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          <div className="space-y-8">
            <div className="reveal flex flex-col gap-4">
              <h3 className="heading-section text-2xl sm:text-3xl text-neutral-950 dark:text-white">
                Hard Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {HARD_SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className={`reveal delay-${(index % 4) + 1} px-4 py-3.5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 flex items-center gap-3 transition-colors duration-300 hover:border-neutral-400 dark:hover:border-white/40`}
                >
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-8">
            <div className="reveal flex flex-col gap-4">
              <h3 className="heading-section text-2xl sm:text-3xl text-neutral-950 dark:text-white">
                Soft Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {SOFT_SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className={`reveal delay-${(index % 4) + 1} px-4 py-3.5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 flex items-center gap-3 transition-colors duration-300 hover:border-neutral-400 dark:hover:border-white/40`}
                >
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-wider">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
