"use client";

import { useEffect, useRef, useState } from "react";

const NavBtn = ({ label, href, primary }: { label: string; href: string; primary?: boolean }) => (
  
    href={href}
    className={`px-10 py-2.5 rounded-xl border text-sm font-medium transition-all ${
      primary
        ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:bg-black hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)]"
        : "bg-[#f5f5f5] border-[#e5e5e5] text-[#1a1a1a] hover:bg-[#f0f0f0] hover:border-[#d0d0d0] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
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
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("aos-in");
          else entry.target.classList.remove("aos-in");
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
          0%   { opacity:0; transform:translateY(28px); filter:blur(4px); }
          100% { opacity:1; transform:translateY(0);    filter:blur(0);   }
        }

        .a { opacity:0; animation:smoothUp 1.1s cubic-bezier(.22,1,.36,1) forwards paused; }
        .a.go { animation-play-state:running; }
        .d1{animation-delay:.05s} .d2{animation-delay:.22s} .d3{animation-delay:.38s}
        .d4{animation-delay:.54s} .d5{animation-delay:.70s} .d6{animation-delay:.86s}

        .aos {
          opacity:0;
          transform:translateY(36px);
          filter:blur(5px);
          transition:
            opacity 1s cubic-bezier(.22,1,.36,1),
            transform 1s cubic-bezier(.22,1,.36,1),
            filter 1s cubic-bezier(.22,1,.36,1);
        }
        .aos-in { opacity:1; transform:translateY(0); filter:blur(0); }

        .hero-title { font-size:clamp(48px,9vw,110px); }

        .nav-wrap  { padding:40px 64px; }
        .foot-wrap { padding:40px 64px; }

        @media(max-width:479px){
          .nav-wrap  { padding:20px 20px; }
          .foot-wrap { padding:24px 20px; }
          .hero-title { font-size:clamp(40px,13vw,64px); }
          .nav-btns a { padding:6px 14px !important; font-size:11px !important; }
          .ctas { flex-direction:column; width:100%; max-width:280px; }
          .ctas a { text-align:center; justify-content:center; }
        }
        @media(min-width:480px) and (max-width:767px){
          .nav-wrap  { padding:24px 32px; }
          .foot-wrap { padding:28px 32px; }
          .hero-title { font-size:clamp(44px,11vw,72px); }
        }
        @media(min-width:768px) and (max-width:1023px){
          .nav-wrap  { padding:28px 48px; }
          .foot-wrap { padding:32px 48px; }
          .hero-title { font-size:clamp(52px,8vw,88px); }
        }
      `}</style>

      <div ref={containerRef} className="relative min-h-screen text-[#1a1a1a] font-sans flex flex-col selection:bg-[#1a1a1a] selection:text-white overflow-hidden bg-white">
        <div className="fixed inset-0 -z-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#f0f0f0] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#f5f5f5] rounded-full blur-3xl" />
        </div>

        <nav className={`a d1 ${g} nav-wrap relative z-10 flex justify-between items-center backdrop-blur-sm`}>
          <div className="text-4xl font-light tracking-[-0.15em] uppercase scale-y-125 select-none bg-gradient-to-r from-[#1a1a1a] to-[#4a4a4a] bg-clip-text text-transparent">
            RΣNZ
          </div>
          <div className="nav-btns flex gap-3">
            <NavBtn label="LinkedIn" href="https://www.linkedin.com/in/john-renz-96a77728b/" primary />
            <NavBtn label="Github" href="https://github.com/johnrenz-bot" />
          </div>
        </nav>

        <main className="relative z-10 flex-grow flex items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
            <div className="group">
              <h1 className={`a d2 ${g} hero-title font-black leading-[0.85] tracking-tighter uppercase mb-4 transition-transform duration-500 group-hover:scale-[1.01] bg-gradient-to-b from-[#1a1a1a] via-[#2a2a2a] to-[#4a4a4a] bg-clip-text text-transparent`}>
                John Renz <br /> Bandianon
              </h1>
              <p className={`a d3 ${g} text-[10px] font-black tracking-[0.2em] opacity-60 uppercase`}>
                UI / UX Designer • Graphic Designer • Frontend Developer
              </p>
            </div>

            <p className={`a d4 ${g} text-base md:text-lg font-medium leading-relaxed tracking-tight max-w-md opacity-75`}>
              Building clean interactive web experiences focused on modern UI design and thoughtful user interaction.
            </p>

            <div className={`a d5 ${g} ctas flex gap-4`}>
              
                href="#project"
                className="px-10 py-4 bg-[#1a1a1a] text-white rounded-full text-sm font-serif italic hover:bg-black transition-all shadow-md hover:shadow-lg hover:scale-105 flex items-center"
              >
                view work <span className="ml-2 not-italic">↗</span>
              </a>
              
                href="#contact"
                className="px-10 py-4 bg-[#f0f0f0] border border-[#e0e0e0] text-[#1a1a1a] rounded-full text-sm font-medium hover:bg-[#e8e8e8] hover:border-[#d0d0d0] transition-all hover:shadow-md hover:scale-105"
              >
                Get in touch
              </a>
            </div>
          </div>
        </main>

        <footer className={`a d6 ${g} foot-wrap relative z-10 opacity-40 text-[9px] uppercase tracking-[1em] text-center`}>
          EST 2026
        </footer>
      </div>
    </>
  );
}
