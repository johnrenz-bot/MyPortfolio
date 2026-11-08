import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import SkillGroups from "@/components/portfolio/SkillGroups";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "The AI coding agents, editors, frameworks, languages, databases and tools John Renz Bandianon uses to build and ship web products.",
  alternates: { canonical: "/stack" },
};

export default function StackPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-16 sm:space-y-24">
      <PageHeader
        index="05"
        eyebrow="Stack"
        title={
          <>
            A toolkit built{" "}
            <br />
            <span className="text-muted">through real projects.</span>
          </>
        }
        description="Not a list of everything I've touched — the AI agents, editors, frameworks and tools I actively use to design, build and verify production web applications."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            6 disciplines · 40+ tools
          </span>
        }
        actions={
          <Link href="/work" className="btn-primary">
            See it applied
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <SkillGroups />
    </div>
  );
}
