import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { WEB_DEVELOPMENT } from "@/data/projects";
import { PORTFOLIO_META } from "@/constants/portfolio";
import ProjectCarouselCard from "@/components/portfolio/ui/ProjectCarouselCard";
import CvTrigger from "@/components/portfolio/ui/CvTrigger";
import ViewProjectsButton from "@/components/portfolio/home/ViewProjectsButton";
import ExperienceTimeline from "@/components/portfolio/home/ExperienceTimeline";

const STATS = [
  { value: "10+", label: "Projects" },
  { value: "03", label: "Internships" },
  { value: "2026", label: "BSIT Graduate" },
];

export default function HomePage() {
  const featured = WEB_DEVELOPMENT.filter((project) => project.featured).slice(0, 4);

  return (
    <div className="w-full space-y-16 sm:space-y-20">
      {/* Hero */}
      <section className="reveal">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          {/* Portrait — first below 1024px */}
          <figure className="relative order-1 w-full max-w-[420px] shrink-0 lg:order-2 lg:mx-0 lg:w-[420px]">
            {/* Corner brackets */}
            <span aria-hidden="true" className="pointer-events-none absolute -left-2 -top-2 z-20 h-6 w-6 rounded-tl-xl border-l border-t border-line-strong" />
            <span aria-hidden="true" className="pointer-events-none absolute -right-2 -top-2 z-20 h-6 w-6 rounded-tr-xl border-r border-t border-line-strong" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-6 w-6 rounded-bl-xl border-b border-l border-line-strong" />
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -right-2 z-20 h-6 w-6 rounded-br-xl border-b border-r border-line-strong" />
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[24px] border border-line bg-surface-2 shadow-card">
              <Image
                src="/Image/Hero/grad.png"
                alt="John Renz Bandianon"
                fill
                priority
                sizes="(max-width: 1023px) 92vw, 420px"
                className="object-cover"
              />
            </div>
            {/* Glass overlay chip */}
            <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/50 bg-white/70 px-4 py-3 shadow-card backdrop-blur-xl dark:border-white/15 dark:bg-black/50">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[14px] font-semibold text-ink">Available for work</span>
                <span aria-hidden="true" className="text-[14px] text-subtle">·</span>
                <span className="text-[14px] text-muted">{PORTFOLIO_META.location}</span>
              </div>
              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.08em] text-muted">BSIT · 2026</p>
            </div>
          </figure>

          {/* Text — below portrait below 1024px */}
          <div className="order-2 min-w-0 max-w-[600px] lg:order-1">
            <h1 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-[40px]">
              {PORTFOLIO_META.name}
            </h1>
            <p className="mt-2 text-[16px] font-medium text-ink">{PORTFOLIO_META.role}</p>
            <p className="mt-5 max-w-[54ch] text-[16px] leading-[1.75] text-muted">
              Recent BSIT graduate with internship experience in software development, UI/UX design, and quality assurance. I build clean, high-performance web applications focused on usability and reliability.
            </p>

            {/* Single actions row */}
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <ViewProjectsButton />
              <CvTrigger className="btn-ghost">
                Request CV
                <Download className="h-3.5 w-3.5" />
              </CvTrigger>
              <a
                href={PORTFOLIO_META.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-all duration-300 hover:bg-hover hover:text-ink"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_META.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-all duration-300 hover:bg-hover hover:text-ink"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>

            <Link
              href="/about"
              className="group mt-4 inline-flex items-center gap-1 text-[14px] font-medium text-muted transition-colors hover:text-ink"
            >
              More about me
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Stats — 56–72px below actions */}
            <div className="mt-14 sm:mt-16 lg:mt-[72px]">
              <div className="grid grid-cols-3 gap-6 border-t border-line pt-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[30px] font-medium leading-none tracking-[-0.02em] text-ink">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-[14px] text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section id="selected-work" className="scroll-mt-[88px] border-t border-line pt-8 sm:pt-10">
        <div className="flex items-baseline justify-between gap-4">
          <p className="text-[14px] font-medium text-muted">Selected work</p>
          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-1.5 text-[14px] font-medium text-muted transition-colors hover:text-ink"
          >
            All work
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-8 sm:gap-10">
          {featured.map((project, index) => (
            <ProjectCarouselCard
              key={project.id}
              project={project}
              category={project.workType === "web-development" ? "Web Development" : "Selected"}
              priority={index < 2}
            />
          ))}
        </div>
      </section>

      {/* Experience timeline */}
      <div className="border-t border-line pt-8 sm:pt-10">
        <ExperienceTimeline />
      </div>

      {/* Explore */}
      <section className="border-t border-line pt-8 sm:pt-10">
        <p className="text-[14px] font-medium text-muted">Explore</p>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            { title: "Stack", href: "/stack", description: "The stack and tools behind the work." },
            { title: "Journey", href: "/Journey", description: "The chapters that shaped the practice." },
            { title: "Community", href: "/community", description: "Events, orgs and volunteering." },
            { title: "Network", href: "/network", description: "Profiles across the web." },
            { title: "Resources", href: "/resources", description: "Learning links and references." },
            { title: "Contact", href: "/contact", description: "Start a conversation." },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-line bg-surface p-5 transition-colors hover:bg-hover"
            >
              <h3 className="text-[16px] font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.75] text-muted">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
