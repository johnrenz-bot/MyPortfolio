"use client";

import type { ComponentType } from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";
import * as TbIcons from "react-icons/tb";
import {
  AI_CODING_TOOLS,
  BACKEND_TECH,
  DATABASES_TECH,
  DESIGN_TOOLS,
  FRONTEND_TECH,
  HARD_SKILLS,
  IDE_TOOLS,
  MANAGEMENT_DEV_TOOLS,
  PROGRAMMING_LANGUAGES,
  SOFT_SKILLS,
  TESTING_QA_TECH,
} from "@/data/skills";
import type { Skill } from "@/types";

type IconMap = Record<string, ComponentType<{ className?: string }>>;

const faMap = FaIcons as unknown as IconMap;
const siMap = SiIcons as unknown as IconMap;
const cgMap = CgIcons as unknown as IconMap;
const tbMap = TbIcons as unknown as IconMap;

function TechIcon({ id }: { id: string }) {
  const map = id.startsWith("Fa")
    ? faMap
    : id.startsWith("Si")
      ? siMap
      : id.startsWith("Cg")
        ? cgMap
        : tbMap;
  const Icon = map[id];
  if (!Icon) return null;
  return <Icon className="h-5 w-5" />;
}

const GROUPS = [
  {
    index: "05.1",
    title: "AI Coding Agents",
    description: "AI pair-programmers and agentic builders for day-to-day coding.",
    items: AI_CODING_TOOLS,
  },
  {
    index: "05.2",
    title: "IDEs & Code Editors",
    description: "Primary editors, debugging and workspace tooling.",
    items: IDE_TOOLS,
  },
  {
    index: "05.3",
    title: "Frameworks",
    description: "Frontend UI libraries, server frameworks & API architectures.",
    items: [...FRONTEND_TECH, ...BACKEND_TECH],
  },
  {
    index: "05.4",
    title: "Programming Languages",
    description: "Core languages for frontend scripting, server logic & software development.",
    items: PROGRAMMING_LANGUAGES,
  },
  {
    index: "05.5",
    title: "Databases",
    description: "Relational data structures, cloud backends & real-time storage.",
    items: DATABASES_TECH,
  },
  {
    index: "05.6",
    title: "Development Tools",
    description: "Design, testing, version control, deployment & project management.",
    items: [
      ...DESIGN_TOOLS,
      ...TESTING_QA_TECH,
      ...MANAGEMENT_DEV_TOOLS.filter((tool) => tool.name !== "VS Code"),
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <div className="group flex items-start gap-3 rounded-xl border border-line bg-surface p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-hover">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-muted transition-colors duration-300 group-hover:text-ink">
        <TechIcon id={skill.iconId} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="truncate text-[13px] font-semibold text-ink">{skill.name}</span>
          <span className="shrink-0 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-subtle">
            {skill.proficiency}
          </span>
        </span>
        <span className="mt-1 block text-[11px] leading-relaxed text-muted line-clamp-2">
          {skill.description}
        </span>
      </span>
    </div>
  );
}

export default function SkillGroups() {
  return (
    <div className="space-y-14">
      {GROUPS.map((group) => (
        <section key={group.title} className="space-y-5">
          <div className="reveal flex flex-col gap-1.5 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] font-semibold tabular-nums text-subtle">
                {group.index}
              </span>
              <h2 className="font-display text-xl font-extrabold tracking-[-0.025em] text-ink sm:text-2xl">
                {group.title}
              </h2>
            </div>
            <div className="flex items-center gap-3 sm:text-right">
              <p className="text-xs text-muted">{group.description}</p>
              <span className="chip shrink-0">{group.items.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
            {group.items.map((skill) => (
              <SkillCard key={`${group.title}-${skill.name}`} skill={skill} />
            ))}
          </div>
        </section>
      ))}

      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="reveal surface-card p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <span className="eyebrow text-ink">05.7</span>
            <span className="eyebrow text-line-strong">·</span>
            <span className="eyebrow">Soft skills</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOFT_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="reveal delay-1 surface-card p-6 sm:p-8">
          <div className="flex items-center gap-3 border-b border-line pb-4">
            <span className="eyebrow text-ink">05.8</span>
            <span className="eyebrow text-line-strong">·</span>
            <span className="eyebrow">Hard skills</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {HARD_SKILLS.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-[12px] font-medium text-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
