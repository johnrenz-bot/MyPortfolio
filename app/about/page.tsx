import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, GraduationCap, Mail, MapPin, Phone, ScrollText, ShieldCheck } from "lucide-react";
import { HERO_DATA } from "@/data/hero";
import { EDUCATION } from "@/data/education";
import { CERTIFICATES } from "@/data/certificates";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import SectionHeading from "@/components/portfolio/ui/SectionHeading";
import Tag from "@/components/portfolio/ui/Tag";
import PhotoStack from "@/components/portfolio/ui/PhotoStack";

export const metadata: Metadata = {
  title: "About",
  description:
    "John Renz Bandianon is a full-stack developer and UI/UX designer from Bulacan, Philippines, focused on usable, reliable web products.",
  alternates: { canonical: "/about" },
};

const PERSONAL_PHOTOS = [
  { src: "/Image/Hero/grad.png", alt: "John Renz Bandianon graduation portrait" },
  { src: "/Image/Journey/ME.jpg", alt: "John Renz Bandianon personal portrait" },
];

const FOCUS = [
  {
    index: "01",
    title: "Full-stack engineering",
    body: "Next.js, React, TypeScript and Laravel. I care about structure, performance and code that another developer can pick up without a translation layer.",
    tags: ["Next.js", "React", "Laravel", "Supabase"],
  },
  {
    index: "02",
    title: "Product & UI/UX",
    body: "Research, wireframes, prototypes and design systems in Figma. The goal is never decoration — it is clarity, rhythm and a flow that feels obvious.",
    tags: ["Figma", "Design systems", "Prototyping"],
  },
  {
    index: "03",
    title: "Quality & reliability",
    body: "Manual testing, test cases and defect tracking. I would rather find the broken edge case before a user does, and document it so it stays fixed.",
    tags: ["QA", "Testing", "Documentation"],
  },
];

const PRINCIPLES = [
  {
    index: "01",
    title: "Clarity before cleverness",
    body: "The best interface is the one a first-time visitor understands without a tooltip. I remove friction before adding personality.",
  },
  {
    index: "02",
    title: "Systems, not screens",
    body: "Type scales, spacing tokens, reusable components — consistency is a product feature, not a finishing step.",
  },
  {
    index: "03",
    title: "Build, then verify",
    body: "I test against real content and real edge cases. Shipping is the start of the quality conversation, not the end.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-16 sm:space-y-24">
      <PageHeader
        index="03"
        eyebrow="About"
        title="About"
        description="I'm a full-stack developer and UI/UX designer based in Bulacan. I work at the point where visual systems meet production code — shaping the experience and then building it properly."
        actions={
          <>
            <Link href="/work" className="btn-primary">
              See the work
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <a href={`mailto:${HERO_DATA.email}`} className="btn-ghost">
              Get in touch
              <Mail className="h-3.5 w-3.5" />
            </a>
          </>
        }
      />

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
        <div className="reveal">
          <PhotoStack photos={PERSONAL_PHOTOS} />
          <p className="mt-4 text-[14px] text-muted text-center">
            Personal photos — click to shuffle
          </p>
          <div className="mt-4 rounded-xl border border-line bg-surface p-4">
            <p className="text-[14px] font-semibold text-ink">{HERO_DATA.subtitle}</p>
            <p className="mt-1 inline-flex items-center gap-1 text-[14px] text-muted">
              <MapPin className="h-3.5 w-3.5" />
              {HERO_DATA.location}
            </p>
          </div>
        </div>

        <div className="reveal delay-1 flex flex-col gap-8 max-w-[640px]">
          <div>
            <p className="text-[14px] font-medium text-muted">Profile</p>
            <p className="mt-5 text-[16px] font-medium leading-[1.75] text-ink">
              Full-stack developer with practical experience in frontend architecture,
              backend systems, UI/UX engineering and software quality assurance.
            </p>
            <div className="mt-6 space-y-4 text-[16px] leading-[1.75] text-muted">
              <p>
                I graduated with a Bachelor of Science in Information Technology from
                STI College, and built hands-on experience across full-stack web
                applications, UI/UX systems design and collaborative engineering
                workflows.
              </p>
              <p>
                My internships span corporate operations, apparel e-commerce and mobile
                application QA — which means I&apos;ve seen how a product behaves from
                the design file all the way to the support queue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {[
              { label: "Location", value: HERO_DATA.location, href: null, icon: MapPin },
              { label: "Email", value: HERO_DATA.email, href: `mailto:${HERO_DATA.email}`, icon: Mail },
              { label: "Phone", value: HERO_DATA.phone, href: `tel:${HERO_DATA.phone}`, icon: Phone },
              { label: "Status", value: "Open to full-time & remote roles", href: null, icon: ShieldCheck },
            ].map((item) => (
              <div key={item.label} className="bg-surface p-4 min-h-[72px]">
                <p className="text-[14px] text-muted">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="mt-2 flex items-center gap-2 text-[16px] font-medium text-ink transition-colors hover:text-muted">
                    <item.icon className="h-4 w-4 shrink-0 text-muted" />
                    <span className="truncate">{item.value}</span>
                  </a>
                ) : (
                  <p className="mt-2 flex items-start gap-2 text-[16px] font-medium leading-snug text-ink">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-muted" />
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "Figma", "QA"].map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <SectionHeading
          index="03.1"
          label="Education"
          title="The academic foundation."
          description="A BSIT degree from STI College San Jose del Monte (2022 — 2026), supported by industry training in UX, ERP systems, system administration and Java foundations."
        />
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          <article className="surface-card p-6 sm:p-8 flex flex-col">
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface-2 text-ink">
                <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="text-[14px] tabular-nums text-subtle">01</span>
            </div>
            <p className="mt-6 text-[14px] font-semibold uppercase tracking-[0.13em] text-muted">
              {EDUCATION[0].period}
            </p>
            <h3 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
              {EDUCATION[0].degree}
            </h3>
            <p className="mt-1.5 text-[13px] font-semibold text-ink">{EDUCATION[0].school}</p>
            <p className="mt-5 text-[14px] leading-relaxed text-muted">{EDUCATION[0].description}</p>
            <div className="mt-6 flex flex-wrap gap-1.5 border-t border-line pt-5">
              {[
                "Software development",
                "Systems analysis",
                "Databases",
                "UI/UX practice",
                "Application design",
              ].map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-line bg-surface p-5">
                <p className="eyebrow">Graduated</p>
                <p className="mt-3 font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">2026</p>
                <p className="mt-1 text-[12px] text-muted">BSIT · STI College</p>
              </div>
              <div className="rounded-xl border border-line bg-surface p-5">
                <p className="eyebrow">Credentials</p>
                <p className="mt-3 font-display text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  {CERTIFICATES.length}
                </p>
                <p className="mt-1 text-[12px] text-muted">Training &amp; certifications</p>
              </div>
            </div>
          </article>

          <div className="flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">Training &amp; credentials</p>
            <p className="mt-2 text-[14px] leading-relaxed text-muted">
              Programs that added practical, job-ready skills alongside the degree.
            </p>
            <ol className="mt-4 divide-y divide-line rounded-xl border border-line bg-surface">
              {CERTIFICATES.map((certificate, index) => {
                const [name, ...rest] = certificate.split(" — ");
                return (
                  <li key={certificate} className="group flex gap-4 p-4 sm:p-5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-[14px] font-semibold tabular-nums text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[13px] font-bold leading-snug text-ink">{name}</p>
                      {rest.length > 0 ? (
                        <p className="mt-1 text-[12px] leading-relaxed text-muted">{rest.join(" — ")}</p>
                      ) : null}
                    </div>
                    <ScrollText className="ml-auto h-3.5 w-3.5 shrink-0 text-subtle transition-colors group-hover:text-ink" />
                  </li>
                );
              })}
            </ol>
            <Link
              href="/work"
              className="group mt-5 inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[0.14em] text-ink"
            >
              View certificate archive
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section>
        <SectionHeading
          index="03.2"
          label="Focus"
          title="What I actually do"
          description="Three overlapping practices."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {FOCUS.map((item) => (
            <article key={item.title} className="surface-card flex min-h-[72px] flex-col gap-4 p-5">
              <span className="text-[14px] text-muted">{item.index}</span>
              <div>
                <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-[16px] leading-[1.75] text-muted">{item.body}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
        <div className="reveal max-w-[640px]">
          <p className="text-[14px] font-medium text-muted">Principles</p>
          <h2 className="mt-4 text-[36px] font-semibold leading-tight tracking-[-0.02em] text-ink">
            Rules I keep coming back to.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-muted">
            These are the checks I run before calling a build finished.
          </p>
          <Link href="/stack" className="group mt-6 inline-flex items-center gap-2 text-[14px] font-medium text-ink">
            See the stack
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ol className="space-y-3">
          {PRINCIPLES.map((item) => (
            <li key={item.title} className="flex min-h-[72px] gap-5 rounded-xl border border-line bg-surface p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-2 text-[14px] font-medium text-muted">
                {item.index}
              </span>
              <div>
                <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-[16px] leading-[1.75] text-muted">{item.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}