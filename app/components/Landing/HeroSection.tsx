"use client";

import Image from "next/image";
import { BRAND } from "../../../constants/brand";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-transparent transition-colors duration-300">
      {/* Navigation Bar */}
      <header className="hero-enter hero-enter-d1 w-full relative z-30 flex justify-between items-center px-5 sm:px-8 lg:px-12 py-5 sm:py-6">
        <a
          href="#hero"
          className="text-lg sm:text-xl font-black tracking-[-0.06em] uppercase select-none text-neutral-900 dark:text-white hover:opacity-70 transition-opacity"
          aria-label="Home"
        >
          RΣNZ
        </a>

        <nav
          aria-label="Quick links"
          className="flex items-center gap-2 sm:gap-3"
        >
          <ThemeToggle />
          <a
            href={BRAND.cvRequestHref}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Request CV
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </a>
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/john-renz-96a77728b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-black/8 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-md backdrop-blur-md"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/johnrenz-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-[11px] font-semibold tracking-wide transition-all duration-300 bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border border-black/8 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 hover:-translate-y-0.5 hover:shadow-md backdrop-blur-md"
            >
              GitHub
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="flex-grow flex items-center relative z-10">
        <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="flex flex-col gap-6 sm:gap-8 order-2 lg:order-1 text-center lg:text-left">
              {/* Availability badge */}
              <div className="hero-enter hero-enter-d2 flex items-center gap-2.5 justify-center lg:justify-start">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="label-mono text-neutral-500 dark:text-neutral-400">
                  Open to Opportunities
                </span>
              </div>

              {/* Name */}
              <h1 className="hero-enter hero-enter-d3 heading-display text-[clamp(42px,8vw,88px)] text-neutral-950 dark:text-white">
                John Renz
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  Bandianon
                </span>
              </h1>

              {/* Role */}
              <div className="hero-enter hero-enter-d4 flex flex-col gap-3">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-[1px] w-8 bg-neutral-300 dark:bg-neutral-700 line-expand" />
                  <p className="label-mono text-neutral-500 dark:text-neutral-400">
                    Full-Stack Developer · UI/UX Designer
                  </p>
                </div>
                <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  Recent BSIT graduate with internship experience in software
                  development, UI/UX design, and quality assurance. I build
                  clean, high-performance web applications focused on usability
                  and reliability.
                </p>
              </div>

              {/* CTAs */}
              <div className="hero-enter hero-enter-d5 flex flex-wrap gap-3 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-neutral-900 text-white border border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  View Projects
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-transparent text-neutral-900 dark:text-white border border-neutral-300 dark:border-neutral-700 hover:border-neutral-900 dark:hover:border-white hover:-translate-y-0.5"
                >
                  Get in Touch
                </a>
              </div>

              {/* Quick Stats */}
              <div className="hero-enter hero-enter-d6 flex items-center gap-8 justify-center lg:justify-start pt-4 border-t border-neutral-200 dark:border-neutral-800">
                {[
                  { value: "10+", label: "Projects" },
                  { value: "3", label: "Internships" },
                  { value: "BSIT", label: "Graduate" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="label-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Graduate Photo */}
            <div className="hero-image-enter relative order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-[300px] h-[400px] sm:w-[360px] sm:h-[480px] lg:w-[440px] lg:h-[580px] xl:w-[500px] xl:h-[660px] group">
                {/* Refined subtle background glow */}
                <div className="absolute -inset-10 bg-neutral-200/50 dark:bg-neutral-800/30 blur-[80px] rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* Subtle decorative frame */}
                <div className="absolute -inset-4 border border-neutral-200 dark:border-neutral-800 rounded-[2.5rem] opacity-60 transition-transform duration-1000 group-hover:scale-[1.02]" />
                <div className="absolute -inset-8 border border-neutral-100 dark:border-neutral-900 rounded-[3rem] opacity-30 transition-transform duration-1000 group-hover:scale-[1.04]" />

                {/* Photo */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50">
                  <Image
                    src="/Image/Hero/grad.png"
                    alt="John Renz Bandianon — BSIT Graduate"
                    fill
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 500px"
                    className="object-cover transition-transform duration-[2s] group-hover:scale-[1.03]"
                    priority
                  />
                  {/* Subtle overlay for integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent dark:from-black/40 opacity-60" />
                </div>

                {/* Floating label */}
                <div className="absolute -bottom-6 left-6 right-6 sm:left-10 sm:right-10 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border border-neutral-200/50 dark:border-neutral-800/50 rounded-2xl px-5 py-4 shadow-xl translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-sm font-bold text-neutral-900 dark:text-white tracking-tight">
                      Available for Work
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                    Based in Bulacan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-enter hero-enter-d6 absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 hidden lg:flex">
        <span className="label-mono text-neutral-400 dark:text-neutral-500">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-neutral-300 dark:bg-neutral-700 relative overflow-hidden">
          <div className="w-full h-1/2 bg-neutral-900 dark:bg-white animate-[scrollPulse_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(-100%); }
          50% { transform: translateY(200%); }
        }
      `}</style>
    </div>
  );
}
