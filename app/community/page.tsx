import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Camera,
} from "lucide-react";
import { COMMUNITIES } from "@/data/communities";
import { EVENTS } from "@/data/events";
import PageHeader from "@/components/portfolio/ui/PageHeader";
import SectionHeading from "@/components/portfolio/ui/SectionHeading";
import Tag from "@/components/portfolio/ui/Tag";



export const metadata: Metadata = {
  title: "Community",
  description:
    "Developer communities, events and volunteering by John Renz Bandianon — GDG, DEVCON Manila and more.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <div className="mx-auto w-full max-w-[960px] space-y-24 sm:space-y-32">
      <PageHeader
        index="08"
        eyebrow="Community"
        title={
          <>
            Show up, learn,{" "}
            <br />
            <span className="text-muted">give something back.</span>
          </>
        }
        description="Developer communities have shaped how I learn and collaborate. These are the organizations and events I've been part of — from attending sessions to volunteering on the technical side."
        meta={
          <span className="text-[14px] uppercase tracking-[0.16em] text-subtle">
            {COMMUNITIES.length} orgs · {EVENTS.length} events
          </span>
        }
        actions={
          <Link href="/Gallery" className="btn-primary">
            Event gallery
            <Camera className="h-3.5 w-3.5" />
          </Link>
        }
      />

      <section>
        <SectionHeading
          index="08.1"
          label="Organizations"
          title="Communities I belong to"
          description="Long-term memberships that keep the learning loop going."
        />
        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {COMMUNITIES.map((community, index) => (
            <a
              key={community.name}
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal delay-${(index % 4) + 1} group surface-card surface-card-hover flex flex-col gap-6 p-6 sm:p-8`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface-2 p-2">
                  <Image
                    src={community.logo}
                    alt={community.name}
                    width={56}
                    height={56}
                    sizes="56px"
                    className="h-full w-full object-contain"
                  />
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>

              <div>
                <h3 className="font-display text-xl font-extrabold leading-tight tracking-[-0.03em] text-ink">
                  {community.name}
                </h3>
                <p className="mt-1.5 inline-flex flex-wrap items-center gap-2 text-[11px] text-muted">
                  <span className="font-semibold text-ink">{community.role}</span>
                  <span className="h-2.5 w-px bg-line" />
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {community.location}
                  </span>
                  <span className="h-2.5 w-px bg-line" />
                  <span className="text-[14px] uppercase tracking-[0.1em]">
                    {community.year}
                  </span>
                </p>
                <p className="mt-4 text-[13px] leading-relaxed text-muted">
                  {community.description}
                </p>
              </div>

              <div className="mt-auto flex items-center gap-2 border-t border-line pt-4">
                <Tag>{community.role}</Tag>
                <span className="ml-auto text-[14px] font-bold uppercase tracking-[0.12em] text-ink">
                  Visit community
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-16 sm:mt-24">
        <SectionHeading
          index="08.2"
          label="Events"
          title="Where I've been in the room"
          description="Conferences, hackathons, exhibits and meetups — with the role I played at each."
          aside={
            <Link
              href="/Gallery"
              className="group inline-flex items-center gap-1.5 text-[14px] font-bold uppercase tracking-[0.14em] text-ink"
            >
              Photos
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          }
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {EVENTS.map((event, index) => {
            const card = (
              <article className="surface-card flex h-full flex-col gap-5 p-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-line-strong sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface-2 p-1.5">
                      <Image
                        src={event.logo!}
                        alt={event.name}
                        width={48}
                        height={48}
                        sizes="48px"
                        className="h-full w-full object-contain"
                      />
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-muted">
                        {event.role}
                      </p>
                      <p className="mt-0.5 inline-flex items-center gap-1 text-[10px] text-subtle">
                        <MapPin className="h-2.5 w-2.5" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <span className="text-[14px] tabular-nums text-subtle">
                    {event.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-[15px] font-bold leading-snug text-ink">
                    {event.name}
                  </h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-muted">
                    {event.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-line pt-4">
                  <Tag>{event.role}</Tag>
                  {event.href ? (
                    <span className="inline-flex items-center gap-1 text-[14px] font-bold uppercase tracking-[0.12em] text-ink">
                      Read more
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  ) : (
                    <span className="text-[14px] uppercase tracking-[0.12em] text-subtle">
                      Attended
                    </span>
                  )}
                </div>
              </article>
            );

            return event.href ? (
              <Link
                key={event.name}
                href={event.href}
                className="group reveal block h-full"
              >
                {card}
              </Link>
            ) : (
              <div key={event.name} className="group reveal h-full">
                {card}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

