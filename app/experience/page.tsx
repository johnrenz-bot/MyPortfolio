import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Check, ExternalLink } from "lucide-react";
import { EXPERIENCE_TIMELINE, WORK_EXPERIENCE } from "@/data/experience";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import CvTrigger from "@/components/portfolio/ui/CvTrigger";
import SectionHeading from "@/components/portfolio/ui/SectionHeading";
import Tag from "@/components/portfolio/ui/Tag";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships and professional experience of John Renz Bandianon across financial services, apparel e-commerce, IT support and software development.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-24 sm:space-y-32">
      <PageHeader
        index="04"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve worked{" "}
            <br />
            <span className="text-muted">& what I carried forward.</span>
          </>
        }
        description="Four internships across financial services, apparel e-commerce, IT operations and software development. Each one added a different layer to how I build."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            04 roles · 2025—2026
          </span>
        }
        actions={
          <CvTrigger className="btn-ghost">
            Download CV
            <ArrowUpRight className="h-3.5 w-3.5" />
          </CvTrigger>
        }
      />

      <div className="space-y-5 sm:space-y-6">
        {WORK_EXPERIENCE.map((exp, index) => (
          <article
            key={`${exp.company}-${exp.role}`}
            className={`reveal delay-${(index % 4) + 1} group surface-card overflow-hidden`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px]">
              <div className="p-5 sm:p-7 lg:p-8">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-accent px-2.5 py-1 text-[14px] font-bold uppercase tracking-[0.1em] text-accent-contrast">
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold uppercase tracking-[0.1em] text-muted">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  <span className="ml-auto text-[14px] tabular-nums text-subtle">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={56}
                      height={56}
                      sizes="56px"
                      className="h-full w-full object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-2xl">
                      {exp.role}
                    </h2>
                    <p className="mt-1.5 text-[13px] font-semibold text-ink">
                      {exp.company}
                      <span className="mx-1.5 text-line-strong">·</span>
                      <span className="font-medium text-muted">{exp.subtitle}</span>
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-[13.5px] leading-relaxed text-muted">
                  {exp.description}
                </p>

                <div className="mt-6 border-t border-line pt-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="eyebrow">Highlights</span>
                    <span className="chip">{exp.highlights.length}</span>
                  </div>
                  <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-[12.5px] leading-snug text-muted"
                      >
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-ink" strokeWidth={2.5} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-4">
                  <Tag>{exp.timeline}</Tag>
                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link ml-auto inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.12em] text-ink"
                    >
                      Visit company
                      <ExternalLink className="h-3 w-3 transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                    </a>
                  ) : null}
                </div>
              </div>

              {exp.certificate ? (
                <div className="border-t border-line bg-surface-2/60 p-5 lg:border-l lg:border-t-0 lg:p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="eyebrow">Certificate</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-subtle" />
                  </div>
                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cert mt-4 block overflow-hidden rounded-lg border border-line bg-surface"
                  >
                    <span
                      className={`relative block w-full ${
                        exp.certificateMeta?.orientation === "portrait"
                          ? "aspect-[3/4]"
                          : "aspect-[4/3]"
                      }`}
                    >
                      <Image
                        src={exp.certificate}
                        alt={`${exp.company} certificate`}
                        fill
                        sizes="260px"
                        className="object-contain p-2 transition-transform duration-500 group-hover/cert:scale-[1.02]"
                      />
                    </span>
                  </a>
                  {exp.certificateMeta?.caption ? (
                    <p className="mt-3 text-[10.5px] leading-relaxed text-subtle">
                      {exp.certificateMeta.caption}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16 sm:mt-24">
        <SectionHeading
          index="04.1"
          label="Growth timeline"
          title="The work behind the roles"
          description="A compact record of the projects and turning points that ran alongside the internships."
          aside={
            <Link
              href="/Journey"
              className="group inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.14em] text-ink"
            >
              Full journey
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          }
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {EXPERIENCE_TIMELINE.map((item, index) => (
            <article
              key={`${item.period}-${item.title}`}
              className="reveal surface-card flex flex-col gap-4 p-5 transition-colors duration-300 hover:border-line-strong"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-[14px] font-semibold uppercase tracking-[0.12em] text-muted">
                  {item.period}
                </span>
                <span className="text-[14px] tabular-nums text-subtle">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-[14px] font-bold leading-snug text-ink">{item.title}</h3>
              <p className="text-[12px] leading-relaxed text-muted">{item.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.focus.map((focus) => (
                  <Tag key={focus}>{focus}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

