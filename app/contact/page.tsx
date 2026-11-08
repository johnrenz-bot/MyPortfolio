import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { SOCIALS } from "@/data/contact";
import { HERO_DATA } from "@/data/hero";
import { PORTFOLIO_META } from "@/constants/portfolio";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import CvTrigger from "@/components/portfolio/ui/CvTrigger";
import SectionHeading from "@/components/portfolio/ui/SectionHeading";
import CopyEmail from "@/components/portfolio/ui/CopyEmail";
import VisitorCounter from "@/app/components/ui/VisitorCounter";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with John Renz Bandianon for full-time web development, UI/UX and IT roles, freelance work or collaboration.",
  alternates: { canonical: "/contact" },
};

const DETAILS = [
  {
    label: "Email",
    value: HERO_DATA.email,
    href: `mailto:${HERO_DATA.email}`,
    icon: Mail,
    note: "Best for roles, briefs and detailed questions.",
  },
  {
    label: "Phone",
    value: HERO_DATA.phone,
    href: `tel:${HERO_DATA.phone}`,
    icon: Phone,
    note: "Available during Philippine business hours.",
  },
  {
    label: "Location",
    value: HERO_DATA.location,
    href: null,
    icon: MapPin,
    note: "Open to on-site, hybrid and remote arrangements.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-16 sm:space-y-24">
      <PageHeader
        index="10"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something{" "}
            <br />
            <span className="text-muted">worth using.</span>
          </>
        }
        description="I'm open to full-time web development, UI/UX and IT roles across the Philippines and remotely. If you have a project, a role or a question, email is the fastest route."
        meta={
          <span className="inline-flex items-center gap-2 text-[14px] uppercase tracking-[0.16em] text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for work
          </span>
        }
      />

      <section className="grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="reveal relative overflow-hidden rounded-2xl bg-accent p-6 text-accent-contrast sm:p-8 lg:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative flex h-full flex-col">
            <p className="text-[14px] font-semibold uppercase tracking-[0.2em] opacity-60">
              10.1 — Direct
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-4xl">
              The inbox is open.
            </h2>
            <p className="mt-4 max-w-md text-[13.5px] leading-relaxed opacity-70">
              A short note about the role, product or problem is enough. I usually reply
              within one to two business days.
            </p>

            <a
              href={`mailto:${HERO_DATA.email}?subject=${encodeURIComponent(
                "Hello John Renz",
              )}`}
              className="group mt-8 inline-flex min-h-[44px] items-center gap-2 break-all font-display text-base font-bold tracking-[-0.02em] underline decoration-current/30 underline-offset-4 transition-all duration-300 hover:decoration-current sm:text-xl lg:text-2xl"
            >
              {HERO_DATA.email}
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={`mailto:${HERO_DATA.email}?subject=${encodeURIComponent(
                  "Hello John Renz",
                )}`}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-surface px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-ink transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Mail className="h-3.5 w-3.5" />
                Send an email
              </a>
              <CopyEmail email={HERO_DATA.email} />
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-current/15 pt-5 text-[10px] opacity-70">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3 w-3" />
                {PORTFOLIO_META.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MessageSquare className="h-3 w-3" />
                {PORTFOLIO_META.availability}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3">
          {DETAILS.map((detail, index) => (
            <div
              key={detail.label}
              className={`reveal delay-${index + 1} surface-card flex items-start gap-4 p-5 transition-colors duration-300 hover:border-line-strong`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-ink">
                <detail.icon className="h-4 w-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="text-[14px] font-semibold uppercase tracking-[0.13em] text-subtle">
                  {detail.label}
                </p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-1.5 block break-all text-[13px] font-semibold text-ink transition-colors hover:text-muted"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-1.5 text-[13px] font-semibold leading-snug text-ink">
                    {detail.value}
                  </p>
                )}
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted">{detail.note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <SectionHeading
          index="10.2"
          label="Network"
          title="Elsewhere on the web"
          description="The same profile index, kept in one place."
          aside={
            <Link
              href="/network"
              className="group inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.14em] text-ink"
            >
              All profiles
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="reveal mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-strong hover:bg-hover"
            >
              <span className="truncate text-[11.5px] font-semibold text-muted transition-colors group-hover:text-ink">
                {social.label}
              </span>
              <ArrowUpRight className="h-3 w-3 shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
            </a>
          ))}
        </div>
      </section>

      <section className="reveal flex flex-col items-stretch justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <VisitorCounter />
          <span className="hidden sm:block h-8 w-px bg-line" aria-hidden="true" />
          <span className="text-[13px] uppercase tracking-[0.14em] text-subtle">
            Thanks for stopping by
          </span>
        </div>
        <CvTrigger className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-[12px] font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-hover sm:border-0 sm:bg-transparent sm:px-0">
          Download CV
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </CvTrigger>
      </section>
    </div>
  );
}

