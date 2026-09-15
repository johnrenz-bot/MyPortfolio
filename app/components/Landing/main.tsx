"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ThemeToggle } from "../theme/ThemeToggle";

const NavBtn = ({
  label,
  href,
  primary,
  icon,
  external,
}: {
  label: string;
  href: string;
  primary?: boolean;
  icon?: React.ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    target={external || href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined}
    rel={external || href.startsWith("http") || href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
    className={`inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-300 border shadow-sm ${primary
      ? "bg-neutral-900 text-white border-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:border-white dark:hover:bg-neutral-200 hover:shadow-md hover:-translate-y-0.5"
      : "bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 border-black/10 dark:border-white/10 hover:bg-white dark:hover:bg-neutral-800 hover:border-black/20 dark:hover:border-white/20 hover:shadow-md hover:-translate-y-0.5 backdrop-blur-md"
      }`}
  >
    {label}
    {icon}
  </a>
);



export default function Main() {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const journeyImages = [
    { src: "/Image/Journey/ygg.png", year: "2024", title: "Ygg Event BGC" },
    { src: "/Image/Journey/Capstone.png", year: "2025", title: "Capstone Lead, Groove" },
    { src: "/Image/Journey/OpenAI.png", year: "2026", title: "OpenAI / Codex Tech Meetup" },
    { src: "/Image/Journey/PSYSC.png", year: "2026", title: "PSYSC STEMEX, UP Diliman" },
    { src: "/Image/Journey/Intern.png", year: "2026", title: "ASA Intern, Sun Life" },
    { src: "/Image/Journey/me.png", year: "2026", title: "BSIT Graduate" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".aos");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("aos-in");
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const g = ready ? "go" : "";

  return (
    <>
      <style>{`
        @keyframes smoothUp {
          from { opacity: 0; transform: translateY(24px); filter: blur(8px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(23,23,23,0.35); }
          70% { box-shadow: 0 0 0 8px rgba(23,23,23,0); }
          100% { box-shadow: 0 0 0 0 rgba(23,23,23,0); }
        }

        .dark @keyframes pulseRing {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.4); }
          70% { box-shadow: 0 0 0 8px rgba(255,255,255,0); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0); }
        }

        .a { opacity: 0; animation: smoothUp 1.1s cubic-bezier(.16,1,.3,1) forwards paused; }
        .a.go { animation-play-state: running; }
        .d1 { animation-delay: .08s } .d2 { animation-delay: .2s }
        .d3 { animation-delay: .32s } .d4 { animation-delay: .45s }
        .d5 { animation-delay: .58s } .d6 { animation-delay: .7s }

        .aos {
          opacity: 0;
          transform: translateY(30px);
          filter: blur(4px);
          transition: opacity 1s cubic-bezier(.16,1,.3,1),
                      transform 1s cubic-bezier(.16,1,.3,1),
                      filter 1s cubic-bezier(.16,1,.3,1);
        }

        .aos-in {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .pulse-dot {
          animation: pulseRing 2.2s cubic-bezier(.4,0,.6,1) infinite;
        }

        .hero-title { font-size: clamp(38px, 9.5vw, 104px); }
        .nav-wrap  { padding: 20px 24px; }
        @media (min-width: 768px) {
          .nav-wrap  { padding: 24px 40px; }
        }
        .foot-wrap { padding: 28px 24px; }
        @media (min-width: 768px) {
          .foot-wrap { padding: 32px 40px; }
        }

        .deck-perspective {
          perspective: 1200px;
          transform-style: preserve-3d;
        }

        .deck-card {
          transform-origin: center right;
          transform: rotateY(-25px) skewY(4deg) translateZ(0);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.5s ease;
          filter: grayscale(1);
        }

        .deck-card:hover {
          transform: rotateY(-5deg) skewY(0deg) translateZ(40px) translateX(-20px);
          filter: grayscale(0);
          z-index: 50;
        }

        @media (max-width: 1023px) {
          .deck-card {
            transform: none !important;
            filter: none !important;
            top: 0 !important;
          }
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative w-full flex-grow flex flex-col selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 antialiased text-neutral-900 dark:text-neutral-100 bg-white dark:bg-[#09090b] transition-colors duration-300"
      >
        {/* Navigation Bar */}
        <header
          className={`a d1 ${g} nav-wrap w-full relative z-30 flex justify-between items-center border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl transition-colors duration-300`}
        >
          <a
            href="#main"
            className="text-xl sm:text-2xl font-black tracking-[-0.06em] uppercase select-none text-neutral-900 dark:text-white hover:opacity-80 transition-opacity"
            aria-label="Home"
          >
            RΣNZ
          </a>

          <nav aria-label="Quick links" className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />

            <NavBtn
              label="Resume"
              href="/JohnRenz_Resume.pdf"
              primary
              icon={
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="12" y1="18" x2="12" y2="12" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
              }
            />

            <div className="hidden xs:flex items-center gap-2">
              <NavBtn
                label="LinkedIn"
                href="https://www.linkedin.com/in/john-renz-96a77728b/"
                icon={
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
              <NavBtn
                label="GitHub"
                href="https://github.com/johnrenz-bot"
                icon={
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                }
              />
            </div>
          </nav>
        </header>

        {/* Hero Section Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-24 md:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl w-full mx-auto">
            {/* Left Column: Bio and CTAs */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 sm:gap-7">

              {/* Main H1 Title */}
              <h1 className={`a d2 ${g} hero-title font-black leading-[0.88] tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400`}>
                John Renz
                <br />
                Bandianon
              </h1>

              {/* Core Role / Tech Stacks */}
              <p className={`a d3 ${g} font-mono text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-neutral-500 dark:text-neutral-400`}>
                Web Developer · UI/UX Designer
              </p>

              {/* Factual Summary */}
              <p className={`a d4 ${g} text-base sm:text-lg font-normal leading-relaxed max-w-xl text-neutral-600 dark:text-neutral-300`}>
                Recent BSIT graduate with internship experience in software development, UI/UX design, and quality assurance. Experienced in building responsive web applications using Next.js, React, TypeScript, and Supabase. Passionate about creating scalable, user-focused applications and continuously learning modern technologies.
              </p>

              {/* Action Buttons */}
              <div className={`a d5 ${g} flex flex-wrap justify-center lg:justify-start gap-2.5 sm:gap-3 mt-2 w-full max-w-md`}>
                <NavBtn label="Explore Projects" href="#project" primary />
                <NavBtn label="About & Experience" href="#about" />
                <NavBtn label="Get in Touch" href="#contact" />
              </div>


            </div>

            {/* Right Column: Tech Journey Stacked Cards */}
            <div className="lg:col-span-5 w-full flex flex-col gap-6 mt-4 lg:mt-0 mb-8 lg:mb-16">
              <div className="aos text-center lg:text-right">
                <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400 block mb-1">
                  2020 — 2026
                </span>
                <h2 className="text-xl font-black uppercase text-neutral-900 dark:text-white">
                  Tech Journey
                </h2>
              </div>

              {/* Responsive Deck of Cards */}
              <div className="deck-perspective relative grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-3 sm:gap-4 lg:gap-0 lg:h-[760px] justify-center items-stretch lg:items-end w-full">
                {journeyImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="aos deck-card relative w-full lg:w-[340px] aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 bg-neutral-100 dark:bg-neutral-900 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] lg:absolute group"
                    style={{
                      transitionDelay: `${idx * 0.05}s`,
                      top: `${idx * 90}px`,
                      zIndex: idx + 10,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 340px"
                      className="object-cover"
                      priority={idx < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent flex flex-col justify-end p-5 opacity-85 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="font-mono text-[9px] font-bold tracking-widest text-neutral-300 uppercase">
                        {img.year}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-wide uppercase mt-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Sub-strip */}
        <footer className="foot-wrap relative z-10 flex flex-col sm:flex-row gap-2 items-center justify-between text-neutral-400 dark:text-neutral-500 border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Software Engineer &amp; Full-Stack Developer
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em]">
            Marilao, Bulacan · Philippines
          </span>
        </footer>
      </div>
    </>
  );
}