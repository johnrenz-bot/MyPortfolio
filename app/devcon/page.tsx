"use client";

import Image from "next/image";
import Link from "next/link";
import VisitorCounter from "../components/ui/VisitorCounter";
import { ExternalLink, Calendar, Clock, MapPin, User, Mic } from "lucide-react";
import SubPageHeader from "../components/shared/SubPageHeader";
import RevealOnScroll from "../components/shared/RevealOnScroll";

/* ─────────────────────────────────────────────
   EVENT DATA
───────────────────────────────────────────── */

const CAMP_RUN_IMAGES = [
  {
    src: "/Image/Devcon/Camp Run/Devcon.jpg",
    alt: "Opening keynote by Winston Damarillo, Founder and President of DEVCON Philippines",
    caption: "Opening keynote — DEVCON Philippines",
    span: "wide" as const,
  },
  {
    src: "/Image/Devcon/Camp Run/DEvcon2.jpg",
    alt: "Elevated view over the hackathon floor with a countdown projected on the wall",
    caption: "The room mid-build",
    span: "normal" as const,
  },
  {
    src: "/Image/Devcon/Camp Run/Devcon3.jpg",
    alt: "DEVCON Manila Camp Run participants gathered at the event",
    caption: "Camp Run: Go Agentic",
    span: "normal" as const,
  },
];

const CORE_AI_IMAGES = [
  {
    src: "/Image/Devcon/CORE-AI/app.png",
    alt: "CORE-AI: Beyond the Skills seminar-workshop application interface",
    caption: "Workshop app demo",
    span: "wide" as const,
  },
  {
    src: "/Image/Devcon/CORE-AI/Me.jpg",
    alt: "John Renz at the CORE-AI: Beyond the Skills event at Letran",
    caption: "On-site at Letran",
    span: "normal" as const,
  },
  {
    src: "/Image/Devcon/CORE-AI/team.png",
    alt: "Tech volunteer team at CORE-AI: Beyond the Skills",
    caption: "Volunteer team",
    span: "normal" as const,
  },
];

// MongoDB directory uses Unicode bold characters — URL-encode the folder name
const MUG_DIR = "/Image/Devcon/%F0%9D%90%8C%F0%9D%90%A8%F0%9D%90%A7%F0%9D%90%A0%F0%9D%90%A8%F0%9D%90%83%F0%9D%90%81%20%F0%9D%90%94%F0%9D%90%AC%F0%9D%90%9E%F0%9D%90%AB%20%F0%9D%90%86%F0%9D%90%AB%F0%9D%90%A8%F0%9D%90%AE%F0%9D%90%A9";

const MUG_IMAGES = [
  {
    src: `${MUG_DIR}/Mongo.png`,
    alt: "MongoDB User Group Manila November 2026 event",
    caption: "MUG Manila — November 2026",
    span: "wide" as const,
  },
  {
    src: `${MUG_DIR}/image.png`,
    alt: "MongoDB User Group Manila session",
    caption: "Session in progress",
    span: "normal" as const,
  },
  {
    src: `${MUG_DIR}/me.png`,
    alt: "John Renz at MongoDB User Group Manila",
    caption: "Attending MUG Manila",
    span: "normal" as const,
  },
  {
    src: `${MUG_DIR}/friend.png`,
    alt: "With fellow attendees at MongoDB User Group Manila",
    caption: "With the community",
    span: "normal" as const,
  },
];

/* ─────────────────────────────────────────────
   SHARED HELPERS
───────────────────────────────────────────── */

const SPAN_CLASS: Record<"normal" | "wide", string> = {
  normal: "sm:col-span-1",
  wide: "sm:col-span-2",
};
const RATIO: Record<"normal" | "wide", string> = {
  normal: "aspect-[4/3]",
  wide: "aspect-[16/7]",
};

function PhotoGrid({
  images,
  accentColor = "neutral",
}: {
  images: { src: string; alt: string; caption: string; span: "normal" | "wide" }[];
  accentColor?: string;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
      {images.map((img, i) => (
        <div
          key={img.src + i}
          className={`group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-[#444444] dark:hover:border-[#444444] bg-neutral-100 dark:bg-neutral-900 transition-all duration-300 ${SPAN_CLASS[img.span]}`}
        >
          <div className={`relative w-full ${RATIO[img.span]}`}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <p className="text-sm font-bold text-white tracking-tight">{img.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
      <span className="label-mono text-neutral-500 dark:text-neutral-400">{children}</span>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-semibold tracking-wider uppercase">
      {children}
    </span>
  );
}

function DetailCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-5 py-4 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-xl">
      <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
        {label}
      </div>
      <div className="text-sm font-black text-neutral-900 dark:text-white">{value}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   EVENT SECTIONS
───────────────────────────────────────────── */

function EventBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 mb-6">
      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        Event {number}
      </span>
      <span className="w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      <span className="text-[10px] font-black uppercase tracking-widest text-neutral-900 dark:text-white">
        {label}
      </span>
    </div>
  );
}

/* ─── EVENT 01: CAMP RUN ─── */
function CampRunSection() {
  const highlights = [
    "Volunteered on the technical and AV side of the overnight workshop",
    "Performed slide QA and verified internet and AV readiness before sessions",
    "Set up and tested Hermes Agent demo workflows before and during the hackathon",
    "Identified and resolved issues ahead of participant-facing demo moments",
    "Supported ~50 participants across the Camp Run mini hackathon",
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      {/* Divider */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 mb-16 sm:mb-24" />

      <EventBadge number="01" label="Camp Run" />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
        {/* Left — heading + description */}
        <div className="lg:col-span-7">
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-4 leading-tight">
            Camp Run: Go Agentic
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">with Hermes Agent</span>
          </h2>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
            Overnight Workshop & Mini Hackathon — DEVCON Manila × Avtica × Amihan
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Camp Run was an overnight workshop and mini hackathon organized by DEVCON Manila, Avtica,
              and Amihan. The format was learn → build → run: participants worked with Hermes Agent to
              build agentic AI workflows in a single session.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I volunteered on the technical and AV side: slide QA, internet and AV readiness checks,
              setting up the Hermes Agent demo, and testing workflows before and during the hackathon to
              catch issues before the room found them.
            </p>
          </div>
          <div className="relative pl-5 border-l-2 border-neutral-900 dark:border-white mb-8">
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 italic leading-relaxed">
              "Most of my most useful work has been at the edges of someone else&apos;s event, making sure the demo doesn&apos;t die in front of a crowd."
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["DEVCON Manila", "Avtica", "Amihan", "Hermes Agent", "Hackathon", "AV & Demo Support"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        {/* Right — details + highlights */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-2 gap-3">
            <DetailCard label="Role" value="Technical & AV Volunteer" />
            <DetailCard label="Date" value="October 2, 2026" />
            <DetailCard label="Organizers" value="DEVCON Manila, Avtica, Amihan" />
            <DetailCard label="Participants" value="~50 attendees" />
          </div>

          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">
              What I Did
            </p>
            <div className="space-y-3">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500 mt-1.5 flex-shrink-0" />
                  <span className="text-sm text-neutral-600 dark:text-neutral-300">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://devcon.ph/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:border-[#444444] hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:border-[#444444] dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            DEVCON Philippines
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Photos */}
      <SectionLabel>Camp Run — Event Photos</SectionLabel>
      <PhotoGrid images={CAMP_RUN_IMAGES} />
    </section>
  );
}

/* ─── EVENT 02: CORE-AI ─── */
function CoreAISection() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="border-t border-neutral-200 dark:border-neutral-800 mb-16 sm:mb-24" />

      <EventBadge number="02" label="CORE-AI" />

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
        <div className="lg:col-span-7">
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-4 leading-tight">
            CORE-AI: Beyond
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">the Skills</span>
          </h2>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
            Technical Seminar-Workshop — Letran ITS × DEVCON Manila
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A technical seminar-workshop by Letran Information Technology Society (Official) in
              partnership with DEVCON Manila Chapter, held at Colegio de San Juan de Letran in
              Intramuros, Manila.
            </p>
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              I joined as a Tech Volunteer for the event — the same DEVCON Manila community I had
              volunteered with at Camp Run earlier in the month, this time in a university computer lab
              instead of an overnight hackathon hall.
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["DEVCON Manila", "Letran ITS", "CORE-AI", "Seminar-Workshop", "Tech Volunteer"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <DetailCard label="Role" value="Tech Volunteer" />
            <DetailCard label="Date" value="October 29, 2026" />
          </div>
          <DetailCard label="Venue" value="Colegio de San Juan de Letran, Intramuros, Manila" />

          <a
            href="https://www.facebook.com/share/p/1CYkf14dBD/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:border-[#444444] hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:border-[#444444] dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            View Facebook Post
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Photos */}
      <SectionLabel>CORE-AI — Event Photos</SectionLabel>
      <PhotoGrid images={CORE_AI_IMAGES} />
    </section>
  );
}

/* ─── EVENT 03: MONGODB USER GROUP ─── */
function MongoDBSection() {
  const speakerDetails = [
    { icon: Calendar, label: "Date", value: "Thursday, November 5, 2026" },
    { icon: Clock, label: "Time", value: "6:30 PM – 9:30 PM (PHT)" },
    { icon: MapPin, label: "Venue", value: "Amihan Global Strategies, Ortigas" },
    { icon: User, label: "Speaker", value: "Seaver Choy" },
    { icon: Mic, label: "Role", value: "Director of Engineering, First Mate Technologies" },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
      <div className="border-t border-neutral-200 dark:border-neutral-800 mb-16 sm:mb-24" />

      {/* NEW badge */}
      <div className="flex items-center gap-3 mb-6">
        <EventBadge number="03" label="MongoDB User Group Manila" />
        <span className="px-2.5 py-1 rounded-full bg-[#00ED64]/15 border border-[#00ED64]/30 text-[10px] font-black uppercase tracking-widest text-[#00884C] dark:text-[#00ED64]">
          Newest
        </span>
      </div>

      {/* Heading row with logos */}
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
        <div className="lg:col-span-7">
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white mb-4 leading-tight">
            MUG Manila
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">November 2026</span>
          </h2>
          <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-6">
            MongoDB User Group Manila — Community Meetup
          </p>
          <div className="space-y-4 mb-8">
            <p className="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A community meetup by the MongoDB User Group Manila, hosted at Amihan Global Strategies in
              Ortigas. Speaker Seaver Choy, Director of Engineering at First Mate Technologies, led a
              session on quickly building custom applications with Claude and MongoDB, including a live
              prototyping demonstration.
            </p>
          </div>

          {/* Logo row */}
          <div className="flex items-center gap-4 flex-wrap mb-8">
            {[
              { src: "/Image/Community/MongoDB-logo.png", alt: "MongoDB logo", label: "MongoDB" },
              { src: "/Image/Community/Amihan-logo.png", alt: "Amihan Global Strategies logo", label: "Amihan" },
              { src: "/Image/Community/devcon17-logo.png", alt: "DEVCON17 logo", label: "DEVCON17" },
            ].map((logo) => (
              <div
                key={logo.label}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="relative w-20 h-20 logo-hover animate-fade-in-up">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="80px"
                    className="object-contain"
                  />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {logo.label}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {["MongoDB", "Claude AI", "Amihan", "DEVCON17", "Community Meetup", "Live Demo"].map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          {/* Talk topic card */}
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#171717] p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
              Session Topic
            </p>
            <p className="text-sm text-neutral-700 dark:text-neutral-200 leading-relaxed">
              Quickly building custom applications with Claude and MongoDB, including a live prototyping
              demonstration.
            </p>
          </div>
        </div>

        {/* Right — event details */}
        <div className="lg:col-span-5 space-y-3">
          {speakerDetails.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              className="flex items-start gap-4 px-5 py-4 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-0.5">
                  {label}
                </div>
                <div className="text-sm font-black text-neutral-900 dark:text-white">{value}</div>
              </div>
            </div>
          ))}

          <a
            href="https://bit.ly/4eXzGCQ"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-[#00684A] text-white border border-[#00684A] hover:border-[#444444] hover:bg-[#00884C] hover:-translate-y-0.5 hover:shadow-lg dark:bg-[#00ED64] dark:text-neutral-950 dark:border-[#00ED64] dark:hover:border-[#444444] dark:hover:bg-[#00c350]"
          >
            Register for MUG Manila
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Photos */}
      <SectionLabel>MUG Manila — Event Photos</SectionLabel>
      <PhotoGrid images={MUG_IMAGES} />
    </section>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */

export default function DevconPage() {
  return (
    <div className="relative min-h-screen bg-[#f9fafb] dark:bg-[#111111] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <RevealOnScroll />
      <SubPageHeader section="Community" title="DEVCON Manila" />

      {/* ── HERO ── */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12 sm:pb-20">
        <div className="reveal flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          <span className="label-mono text-neutral-500 dark:text-neutral-400">Developer Community Events</span>
        </div>

        {/* Logo + heading */}
        <div className="flex items-center gap-5 mb-10">
          <div className="relative w-20 h-20 sm:w-28 sm:h-28 shrink-0 logo-hover animate-fade-in-up">
            <Image
              src="/Image/Community/devcon17-logo.png"
              alt="DEVCON17 logo"
              fill
              sizes="112px"
              className="object-contain"
              priority
            />
          </div>
          <div>
            <h1 className="reveal delay-1 heading-display text-[clamp(28px,5vw,60px)] text-neutral-950 dark:text-white leading-tight">
              DEVCON Manila
            </h1>
            <p className="text-neutral-400 dark:text-neutral-500 text-base sm:text-lg font-semibold mt-1">
              Developer Community & Technology Events
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="reveal delay-2 lg:col-span-7 space-y-4">
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
              A collection of developer community events where I volunteered, attended, and learned.
              From overnight hackathons to university workshops and professional meetups — this is where
              the community and the craft intersect.
            </p>
          </div>

          {/* Event count stats */}
          <div className="reveal delay-3 lg:col-span-5 grid grid-cols-3 gap-3">
            {[
              { n: "3", label: "Events" },
              { n: "2", label: "Volunteer Roles" },
              { n: "1", label: "Live Demo Survived" },
            ].map((s) => (
              <div
                key={s.label}
                className="px-4 py-4 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-xl text-center"
              >
                <div className="text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                  {s.n}
                </div>
                <div className="label-mono text-neutral-500 dark:text-neutral-400 mt-0.5 text-[10px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community logos bar */}
        <div className="reveal mt-12 flex items-center gap-2 flex-wrap">
          <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mr-2">
            Communities
          </span>
          {[
            { src: "/Image/Community/devcon17-logo.png", alt: "DEVCON17" },
            { src: "/Image/Community/MongoDB-logo.png", alt: "MongoDB" },
            { src: "/Image/Community/Amihan-logo.png", alt: "Amihan Global Strategies" },
          ].map((logo) => (
            <div
              key={logo.alt}
              className="relative w-14 h-14 logo-hover animate-fade-in-up"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── EVENT SECTIONS ── */}
      <CampRunSection />
      <CoreAISection />
      <MongoDBSection />

      {/* ── FOOTER ── */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-10 flex flex-col sm:flex-row gap-4 sm:items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative w-7 h-7 shrink-0">
              <Image
                src="/Image/Favicon/Favicon.png"
                alt="Official Logo"
                width={28}
                height={28}
                className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-lg sm:text-xl font-black tracking-[-0.06em] uppercase text-neutral-900 dark:text-white group-hover:opacity-80 transition-opacity">
              RΣNZ
            </p>
          </Link>
          <VisitorCounter />
          <div className="flex flex-wrap gap-4">
            <Link
              href="/gdg"
              className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              ← GDG
            </Link>
          <Link
            href="/Gallery"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Gallery
          </Link>
          <Link
            href="/"
            className="label-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </footer>
    </div>
  );
}
