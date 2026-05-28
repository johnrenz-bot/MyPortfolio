"use client";

import { useEffect, useRef, useState } from "react";

const NavBtn = ({
  label,
  href,
  primary,
}: {
  label: string;
  href: string;
  primary?: boolean;
}) => (
  
    href={href}
    className={`px-5 py-2 rounded-lg border-[1.5px] text-xs font-medium transition-all duration-200 ${
      primary
        ? "bg-black text-white border-black hover:bg-white hover:text-black"
        : "bg-white text-black border-black hover:bg-black hover:text-white"
    }`}
  >
    {label}
  </a>
);

export default function Main() {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
          else e.target.classList.remove("aos-in");
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
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .a { opacity: 0; animation: smoothUp 0.9s cubic-bezier(.22,1,.36,1) forwards paused; }
        .a.go { animation-play-state: running; }
        .d1 { animation-delay: .05s } .d2 { animation-delay: .20s }
        .d3 { animation-delay: .35s } .d4 { animation-delay: .50s }
        .d5 { animation-delay: .65s } .d6 { animation-delay: .80s }

        .aos {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity .9s cubic-bezier(.22,1,.36,1),
                      transform .9s cubic-bezier(.22,1,.36,1);
        }
        .aos-in { opacity: 1; transform: translateY(0); }

        .hero-title { font-size: clamp(48px, 9vw, 110px); }

        .nav-wrap  { padding: 24px 40px; }
        .foot-wrap { padding: 20px 40px; }

        @media (max-width: 479px) {
          .nav-wrap  { padding: 16px 20px; }
          .foot-wrap { padding: 16px 20px; }
          .hero-title { font-size: clamp(40px, 13vw, 64px); }
          .ctas { flex-direction: column; width: 100%; max-width: 260px; }
          .ctas a { text-align: center; }
        }
        @media (min-width: 480px) and (max-width: 767px) {
          .nav-wrap  { padding: 20px 28px; }
          .foot-wrap { padding: 20px 28px; }
          .hero-title { font-size: clamp(44px, 11vw, 72px); }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .nav-wrap  { padding: 24px 36px; }
          .foot-wrap { padding: 24px 36px; }
          .hero-title { font-size: clamp(52px, 8vw, 88px); }
        }
      `}</style>

      <div
        ref={containerRef}
        className="relative min-h-screen bg-white text-black font-sans flex flex-col selection:bg-black selection:text-white overflow-hidden"
      >
        <nav
          className={`a d1 ${g} nav-wrap relative z-10 flex justify-between items-center border-b border-black/10`}
        >
          <div className="text-4xl font-black tracking-[-0.08em] uppercase select-none text-black">
            RΣNZ
          </div>
          <div className="flex gap-3">
            <NavBtn label="LinkedIn" href="https://www.linkedin.com/in/john-renz-96a77728b/" primary />
            <NavBtn label="Github" href="https://github.com/johnrenz-bot" />
          </div>
        </nav>

        <main className="relative z-10 flex-grow flex items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-7 max-w-4xl w-full">
            <h1
              className={`a d2 ${g} hero-title font-black leading-[0.88] tracking-tighter uppercase text-black`}
            >
              John Renz
              <br />
              Bandianon
            </h1>

            <p className={`a d3 ${g} text-[10px] font-bold tracking-[0.18em] uppercase text-black/50`}>
              UI / UX Designer · Graphic Designer · Frontend Developer
            </p>

            <p className={`a d4 ${g} text-base md:text-lg font-normal leading-relaxed max-w-md text-black/60`}>
              Building clean interactive web experiences focused on modern UI
              design and thoughtful user interaction.
            </p>

            <div className={`a d5 ${g} ctas flex gap-4`}>
              
                href="#project"
                className="px-8 py-3.5 bg-black text-white border-[1.5px] border-black rounded-full text-sm font-medium transition-all duration-200 hover:bg-white hover:text-black"
              >
                View work ↗
              </a>
              
                href="#contact"
                className="px-8 py-3.5 bg-white text-black border-[1.5px] border-black rounded-full text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white"
              >
                Get in touch
              </a>
            </div>
          </div>
        </main>

        <footer
          className={`a d6 ${g} foot-wrap relative z-10 text-[9px] uppercase tracking-[1em] text-center text-black/30`}
        >
          EST 2026
        </footer>
      </div>
    </>
  );
}
