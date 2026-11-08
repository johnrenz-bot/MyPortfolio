"use client";

import { ArrowUpRight } from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import type { ComponentType } from "react";
import { RESOURCE_CATEGORIES, type ResourceEntry } from "@/data/resources";

type IconMap = Record<string, ComponentType<{ className?: string }>>;

const faMap = FaIcons as unknown as IconMap;
const siMap = SiIcons as unknown as IconMap;
const tbMap = TbIcons as unknown as IconMap;

function ResourceIcon({ id }: { id?: string }) {
  if (!id) return null;
  const map = id.startsWith("Fa") ? faMap : id.startsWith("Si") ? siMap : tbMap;
  const Icon = map[id];
  if (!Icon) return null;
  return <Icon className="h-5 w-5" />;
}

function ResourceCard({ entry, index }: { entry: ResourceEntry; index: string }) {
  return (
    <a
      href={entry.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-xl border border-line bg-surface p-3.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-hover"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-muted transition-colors duration-300 group-hover:text-ink">
        <ResourceIcon id={entry.iconId} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-start justify-between gap-2">
          <span className="text-[13px] font-semibold leading-snug text-ink">{entry.title}</span>
          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
        </span>
        <span className="mt-1 block text-[12px] leading-relaxed text-muted">{entry.description}</span>
        <span className="mt-2 flex items-center gap-2">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-subtle">
            {index} · {entry.category}
          </span>
          {entry.badge ? (
            <span className="rounded-md border border-line bg-surface-2 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.08em] text-muted">
              {entry.badge}
            </span>
          ) : null}
        </span>
      </span>
    </a>
  );
}

export default function ResourceGroups() {
  return (
    <div className="space-y-14">
      {RESOURCE_CATEGORIES.map((group, groupIndex) => (
        <section key={group.id} className="space-y-5">
          <div className="reveal flex flex-col gap-1.5 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] font-semibold tabular-nums text-subtle">
                10.{groupIndex + 1}
              </span>
              <h2 className="font-display text-xl font-extrabold tracking-[-0.025em] text-ink sm:text-2xl">
                {group.title}
              </h2>
            </div>
            <p className="text-xs text-muted sm:text-right">{group.description}</p>
          </div>

          {group.entries.length > 0 ? (
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {group.entries.map((entry, i) => (
                <ResourceCard key={`${group.id}-${entry.href}`} entry={entry} index={String(i + 1).padStart(2, "0")} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-line bg-surface p-5">
              <p className="text-[13px] font-semibold text-ink">No entries yet</p>
              <p className="mt-1 text-[12px] leading-relaxed text-muted">
                Reserved for future UI/UX design, hosting &amp; deployment, databases &amp;
                authentication, and development documentation links.
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
