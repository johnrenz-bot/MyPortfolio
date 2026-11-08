import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { JOURNEY_CHAPTERS } from "@/data/journey";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import Tag from "@/components/portfolio/ui/Tag";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The chapters behind John Renz Bandianon's practice — from BSIT coursework and capstone development to internships, hackathons and community events.",
  alternates: { canonical: "/Journey" },
};

export default function JourneyPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-24 sm:space-y-32">
      <PageHeader
        index="06"
        eyebrow="Journey"
        title={
          <>
            Eleven chapters,{" "}
            <br />
            <span className="text-muted">in the order they happened.</span>
          </>
        }
        description="School, internships, events I volunteered at, and the builds that finally had real users on them. An honest record of how the practice formed — including the parts that took longer than expected."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            2022 — Now
          </span>
        }
        actions={
          <Link href="/Gallery" className="btn-ghost">
            Photo gallery
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <nav
        aria-label="Jump to chapter"
        className="reveal -mt-2 mb-10 flex gap-2 overflow-x-auto pb-2 no-scrollbar"
      >
        {JOURNEY_CHAPTERS.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-[14px] font-semibold uppercase tracking-[0.1em] text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            <span className="text-subtle">{chapter.chapter}</span>
            <span className="max-w-[150px] truncate">{chapter.title}</span>
          </a>
        ))}
      </nav>

      <div className="space-y-12 sm:space-y-16">
        {JOURNEY_CHAPTERS.map((chapter, index) => {
          const [lead, ...rest] = chapter.images;
          return (
            <article
              key={chapter.id}
              id={chapter.id}
              className="reveal scroll-mt-24 border-t border-line pt-8 sm:pt-10"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
                <aside className="lg:sticky lg:top-10 lg:self-start">
                  <div className="flex items-center gap-3">
                    <span className="font-display text-5xl font-extrabold leading-none tracking-[-0.05em] text-line-strong">
                      {chapter.chapter}
                    </span>
                    <span className="text-[14px] uppercase tracking-[0.14em] text-subtle">
                      Chapter
                    </span>
                  </div>
                  <p className="mt-4 text-[14px] font-semibold uppercase tracking-[0.12em] text-muted">
                    {chapter.period}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {chapter.tags.slice(0, 4).map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                  <span className="mt-6 hidden text-[14px] tabular-nums text-subtle lg:block">
                    {String(index + 1).padStart(2, "0")} / {JOURNEY_CHAPTERS.length}
                  </span>
                </aside>

                <div className="min-w-0">
                  <h2 className="max-w-3xl font-display text-2xl font-extrabold leading-[1.05] tracking-[-0.035em] text-ink sm:text-3xl lg:text-4xl">
                    {chapter.title}
                  </h2>
                  <p className="mt-3 text-[13px] font-semibold text-ink sm:text-sm">
                    {chapter.kicker}
                  </p>

                  {lead ? (
                    <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4">
                      <div
                        className={`relative col-span-2 overflow-hidden rounded-xl border border-line bg-surface-2 sm:col-span-1 ${
                          rest.length === 0 ? "sm:col-span-2" : ""
                        } ${lead.ratio}`}
                      >
                        <Image
                          src={lead.src}
                          alt={lead.alt}
                          fill
                          sizes="(max-width: 768px) 92vw, 45vw"
                          className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                          priority={index === 0}
                        />
                      </div>
                      {rest.map((image) => (
                        <div
                          key={image.src}
                          className={`relative overflow-hidden rounded-xl border border-line bg-surface-2 ${image.ratio}`}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 45vw, 22vw"
                            className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                          />
                        </div>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-7 space-y-4 text-[13.5px] leading-relaxed text-muted sm:text-[14.5px]">
                    {chapter.story.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>

                  <blockquote className="mt-7 flex gap-4 rounded-xl border border-line bg-surface p-5 sm:p-6">
                    <Quote className="h-4 w-4 shrink-0 text-subtle" />
                    <p className="text-[13px] font-medium italic leading-relaxed text-ink sm:text-sm">
                      {chapter.takeaway}
                    </p>
                  </blockquote>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {chapter.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <section className="reveal mt-16 rounded-2xl border border-line bg-surface p-6 sm:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow text-ink">06.1 — Continue</p>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
              The story is still being written.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Photos from the events, exhibits and late nights are collected in the
              gallery. For the professional record, the experience page has the details.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/Gallery" className="btn-primary">
              Open gallery
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/experience" className="btn-ghost">
              Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

