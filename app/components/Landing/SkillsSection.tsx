"use client";

import React from "react";
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

/* ─── Clean icon-only tech card ─── */
const TechIconCard = ({
  iconId,
  name,
  index,
}: Pick<Skill, "iconId" | "name"> & { index: number }) => {
  return (
    <div
      className={`reveal delay-${(index % 6) + 1} skill-icon-card group flex flex-col items-center justify-center gap-3 p-5 sm:p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/80 cursor-default`}
    >
      <div className="text-neutral-700 dark:text-neutral-300 text-2xl sm:text-3xl group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
        {getIcon(iconId)}
      </div>
      <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300 tracking-wide text-center group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
  );
};

/* ─── All technologies as a flat list for the unified grid ─── */
const ALL_TECH: Pick<Skill, "iconId" | "name">[] = [
  // Frontend
  ...FRONTEND_TECH.map(({ iconId, name }) => ({ iconId, name })),
  // Backend
  ...BACKEND_TECH.map(({ iconId, name }) => ({ iconId, name })),
  // Design Tools
  ...DESIGN_TOOLS.map(({ iconId, name }) => ({ iconId, name })),
  // Dev Tools
  ...DEV_TOOLS.map(({ iconId, name }) => ({ iconId, name })),
];

/* ─── Category-based display for organized view ─── */
const TECH_CATEGORIES = [
  {
    eyebrow: "Core Competencies",
    title: "Technologies & Tools",
    items: [
      ...FRONTEND_TECH,
      ...BACKEND_TECH,
      ...DESIGN_TOOLS,
      ...DEV_TOOLS,
      ...MANAGEMENT_TOOLS,
    ],
  },
];

export default function SkillsSection() {
  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-28">
        {/* Technologies Grid — Icon only, no descriptions */}
        <div className="space-y-8 sm:space-y-12">
          <div className="reveal flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                Core Competencies
              </span>
            </div>
            <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white">
              Technologies & Tools
            </h2>
          </div>

          {/* Icon Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 sm:gap-4">
            {TECH_CATEGORIES[0].items.map((skill, i) => (
              <TechIconCard key={i} index={i} iconId={skill.iconId} name={skill.name} />
            ))}
          </div>
        </div>

        {/* Hard Skills + Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="reveal flex flex-col gap-4">
              <h3 className="heading-section text-2xl sm:text-3xl text-neutral-950 dark:text-white">
                Hard Skills
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {HARD_SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className={`reveal delay-${(index % 4) + 1} px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 flex items-center gap-3`}
                >
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full" />
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
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {SOFT_SKILLS.map((skill, index) => (
                <div
                  key={index}
                  className={`reveal delay-${(index % 4) + 1} px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-neutral-50 dark:bg-neutral-900/50 flex items-center gap-3`}
                >
                  <div className="w-1.5 h-1.5 bg-neutral-900 dark:bg-white rounded-full" />
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
