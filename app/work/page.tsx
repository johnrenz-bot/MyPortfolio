import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import WorkGallery from "@/components/portfolio/WorkGallery";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected projects, product design and visual work by John Renz Bandianon — web development, UI/UX, mockups, posters and certificates.",
  alternates: { canonical: "/work" },
};

const DISCIPLINES = [
  { label: "Web development", detail: "Next.js · Laravel · Supabase" },
  { label: "UI/UX design", detail: "Figma · design systems · prototypes" },
  { label: "Quality assurance", detail: "Manual QA · test cases · defect tracking" },
  { label: "Visual design", detail: "Posters · mockups · brand assets" },
];

export default function WorkPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-16 sm:space-y-24">
      <PageHeader
        index="02"
        eyebrow="Work"
        title={
          <>
            Products, interfaces{" "}
            <br />
            <span className="text-muted">& visual experiments.</span>
          </>
        }
        description="A living archive of shipped web applications, design explorations and credentials. Every project below links to the live build, source code or original artwork."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            Selected · 2023—2026
          </span>
        }
        actions={
          <Link href="/contact" className="btn-primary">
            Start a project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <div className="reveal mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-4">
        {DISCIPLINES.map((item, index) => (
          <div key={item.label} className="bg-surface p-4 sm:p-5">
            <span className="text-[14px] tabular-nums text-subtle">
              0{index + 1}
            </span>
            <p className="mt-3 text-[12px] font-semibold text-ink">{item.label}</p>
            <p className="mt-1 text-[10.5px] leading-relaxed text-muted">{item.detail}</p>
          </div>
        ))}
      </div>

      <WorkGallery />
    </div>
  );
}

