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

const SkillCard = ({
  iconId,
  name,
  proficiency,
  description,
  index,
}: Skill & { index: number }) => {
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
    <div
      className={`reveal delay-${(index % 4) + 1} p-6 sm:p-8 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors`}
    >
      <div className="text-neutral-900 dark:text-white text-3xl mb-4">
        {getIcon(iconId)}
      </div>
      <h3 className="font-bold text-neutral-900 dark:text-white mb-1 text-lg">
        {name}
      </h3>
      <p className="label-mono text-neutral-500 dark:text-neutral-400 mb-3">
        {proficiency}
      </p>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default function SkillsSection() {
  const sections = [
    {
      eyebrow: "Core Competencies",
      title: "Frontend Stack",
      items: FRONTEND_TECH,
    },
    {
      eyebrow: "Architecture",
      title: "Backend & Databases",
      items: BACKEND_TECH,
    },
    {
      eyebrow: "UI/UX Engineering",
      title: "Design Tools",
      items: DESIGN_TOOLS,
    },
    {
      eyebrow: "Workflow",
      title: "Developer Tools",
      items: [...DEV_TOOLS, ...MANAGEMENT_TOOLS],
    },
  ];

  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20 sm:space-y-32">
        {sections.map((section, idx) => (
          <div key={idx} className="space-y-8 sm:space-y-12">
            <div className="reveal flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
                <span className="label-mono text-neutral-500 dark:text-neutral-400">
                  {section.eyebrow}
                </span>
              </div>
              <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white">
                {section.title}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {section.items.map((skill, i) => (
                <SkillCard key={i} index={i} {...skill} />
              ))}
            </div>
          </div>
        ))}

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
