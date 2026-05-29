"use client";

import { useEffect, useRef, useState } from "react";

const NavBtn = ({
  label,
  href,
  primary,
  icon,
}: {
  label: string;
  href: string;
  primary?: boolean;
  icon?: React.ReactNode;
}) => (
  <a
    href={href}
    className={`inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 backdrop-blur-md border ${
      primary
        ? "bg-white/80 text-neutral-900 border-white hover:bg-white/40"
        : "bg-white/25 text-neutral-800 border-white/20 hover:bg-white/50 hover:border-white/40"
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
    { src: "/Image/Journey/Capstone.png", year: "2025", title: "Capstone year" },
    { src: "/Image/Journey/OpenAI.png", year: "2026", title: "OpenAI / Codex Tech Meetup" },
    { src: "/Image/Journey/PSYSC.png", year: "2026", title: "PSYSC STEMEX" },
    { src: "/Image/Journey/Intern.png", year: "2026", title: "UI/UX Engineering" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".aos");
    if (!els) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("aos-in");
      });
    }, { threshold: 0.1 });

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const g = ready ? "go" : "";

  return (
    <>
      <style>{`
        @keyframes smoothUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .a { opacity: 0; animation: smoothUp 1.2s cubic-bezier(.16,1,.3,1) forwards paused; }
        .a.go { animation-play-state: running; }
        .d1 { animation-delay: .1s } .d2 { animation-delay: .25s }
        .d3 { animation-delay: .4s } .d4 { animation-delay: .55s }
        .d5 { animation-delay: .7s }

        .aos {
          opacity: 0;
          transform: translateY(40px);
          filter: blur(5px);
          transition: opacity 1.2s cubic-bezier(.16,1,.3,1),
                      transform 1.2s cubic-bezier(.16,1,.3,1),
                      filter 1.2s cubic-bezier(.16,1,.3,1);
        }

        .aos-in {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }

        .hero-title { font-size: clamp(44px, 10vw, 115px); }
        .nav-wrap  { padding: 24px 40px; }
        .foot-wrap { padding: 40px; }

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
          }
        }

        @media (max-width: 639px) {
          .nav-wrap  { padding: 20px 24px; }
          .hero-title { font-size: clamp(40px, 14vw, 68px); }
          .ctas { flex-direction: column; width: 100%; max-width: 280px; }
          .ctas a { text-align: center; justify-content: center; }
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative w-full flex-grow flex flex-col selection:bg-neutral-900 selection:text-white antialiased text-neutral-900"
      >
        <nav
          className={`a d1 ${g} nav-wrap w-full relative z-20 flex justify-between items-center border-b border-white/40 backdrop-blur-md bg-white/20`}
        >
          <div className="text-2xl font-black tracking-[-0.06em] uppercase select-none bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-500">
            RΣNZ
          </div>

          <div className="flex gap-3">
            <NavBtn
              label="LinkedIn"
              href="https://www.linkedin.com/in/john-renz-96a77728b/"
              primary
              icon={<svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>}
            />
            <NavBtn
              label="Github"
              href="https://github.com/johnrenz-bot"
              icon={<svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>}
            />
          </div>
        </nav>

        <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 pt-24 pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center max-w-7xl w-full mx-auto">

            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-8">
              <h1 className={`a d2 ${g} hero-title font-black leading-[0.85] tracking-tighter uppercase bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-500`}>
                John Renz<br />Bandianon
              </h1>

              <p className={`a d3 ${g} text-[10px] font-bold tracking-[0.25em] uppercase text-neutral-500`}>
                UI / UX Designer · Graphic Designer · Frontend Developer
              </p>

              <p className={`a d4 ${g} text-base md:text-lg font-normal leading-relaxed max-w-lg text-neutral-600`}>
                Building clean interactive web experiences focused on modern UI design and thoughtful user interaction.
              </p>
            </div>

            <div className="lg:col-span-5 w-full flex flex-col gap-6">
              <div className="aos text-center lg:text-right">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-indigo-600 block mb-1">Timeline</span>
                <h2 className="text-xl font-black uppercase">Tech Journey</h2>
              </div>

              <div className="deck-perspective relative flex flex-col md:flex-row lg:flex-col gap-4 lg:gap-0 lg:h-[480px] justify-center items-stretch lg:items-end w-full">
                {journeyImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="aos deck-card relative w-full md:w-1/4 lg:w-[340px] aspect-[4/3] rounded-2xl overflow-hidden border border-white/60 bg-white/30 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.03)] lg:absolute"
                    style={{
                      transitionDelay: `${idx * 0.05}s`,
                      top: `${idx * 90}px`,
                      zIndex: idx + 10,
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/10 to-transparent flex flex-col justify-end p-5">
                      <span className="text-[9px] font-bold tracking-widest text-indigo-300 uppercase">
                        {img.year}
                      </span>
                      <h3 className="text-sm font-bold text-white tracking-wide uppercase mt-0.5">
                        {img.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>

        <footer className="foot-wrap relative z-10 text-[9px] uppercase tracking-[1em] text-center text-neutral-400 border-t border-white/40 bg-white/10 backdrop-blur-md">
          EST 2026
        </footer>
      </div>
    </>
  );
}
