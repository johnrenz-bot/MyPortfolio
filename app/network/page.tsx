import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SOCIALS } from "@/data/contact";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import SectionHeading from "@/components/portfolio/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Find John Renz Bandianon across GitHub, LinkedIn, GDG, IxDF and other professional networks.",
  alternates: { canonical: "/network" },
};

export default function NetworkPage() {
  const primary = SOCIALS.filter((social) =>
    ["GitHub", "LinkedIn", "GDG", "IxDF"].includes(social.label),
  );
  const secondary = SOCIALS.filter((social) => !primary.includes(social));

  return (
    <div className="mx-auto w-full max-w-[960px] space-y-16 sm:space-y-24">
      <PageHeader
        index="09"
        eyebrow="Network"
        title={
          <>
            Find me across{" "}
            <br />
            <span className="text-muted">the web.</span>
          </>
        }
        description="The profiles I actually maintain. GitHub for code, LinkedIn for the professional record, and the communities where I keep learning."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            {SOCIALS.length} profiles
          </span>
        }
        actions={
          <Link href="/contact" className="btn-primary">
            Contact directly
            <Mail className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <section>
        <SectionHeading
          index="09.1"
          label="Primary"
          title="The channels I check"
          description="If you need a response, these are the best places to start."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {primary.map((social, index) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} profile`}
              className={`reveal delay-${(index % 4) + 1} group relative block aspect-[4/3] w-full overflow-hidden surface-card surface-card-hover`}
            >
              <Image
                src={social.image}
                alt={`${social.label} profile`}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 300px"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <SectionHeading
          index="09.2"
          label="Elsewhere"
          title="All profiles"
          description="A complete index of the accounts connected to this portfolio."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-6">
          {secondary.map((social, index) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} profile`}
              className={`reveal delay-${(index % 6) + 1} group relative block aspect-[4/3] w-full overflow-hidden surface-card transition-all duration-300 hover:-translate-y-1 hover:border-line-strong`}
            >
              <Image
                src={social.image}
                alt={`${social.label} profile`}
                fill
                sizes="(max-width: 640px) 45vw, 180px"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="reveal mt-16 flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow text-ink">09.3 — Direct line</p>
          <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight tracking-[-0.03em] text-ink sm:text-3xl">
            Prefer email? That works too.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            For roles, freelance work or a straightforward question, the contact page
            has everything you need.
          </p>
        </div>
        <Link href="/contact" className="btn-primary shrink-0 self-start lg:self-auto">
          Go to contact
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </section>
    </div>
  );
}

