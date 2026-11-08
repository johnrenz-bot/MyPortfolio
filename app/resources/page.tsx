import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import ResourceGroups from "@/components/portfolio/ResourceGroups";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Hand-picked technical learning resources — Linux, MERN, Git, AI coding agents and Cisco courses. External learning materials, separate from portfolio projects.",
  alternates: { canonical: "/resources" },
};

export default function ResourcesPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-16 sm:space-y-24">
      <PageHeader
        index="10"
        eyebrow="Resources"
        title={
          <>
            Learning resources{" "}
            <br />
            <span className="text-muted">worth bookmarking.</span>
          </>
        }
        description="External technical learning materials I use and share — tutorials, docs, source code and courses. Kept separate from portfolio projects."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            6 categories · 14 links
          </span>
        }
        actions={
          <Link href="/work" className="btn-primary">
            See the work
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        }
      />
      <ResourceGroups />
    </div>
  );
}
