"use client";

import { useEffect, useRef, useState } from "react";

const NavBtn = ({ label, href, primary }: { label: string; href: string; primary?: boolean }) => (
  <a
    href={href}
    className={`px-10 py-2.5 rounded-xl border text-sm font-medium transition-all ${
      primary
        ? "bg-[#EAEAEA] border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]"
        : "bg-white border-gray-200 hover:bg-gray-50"
    }`}
  >
    {label}
  </a>
);

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    if (!localStorage.getItem("visited")) setShowModal(true);
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
        @keyframes smoothIn {
          0%   { opacity:0; transform:scale(0.96) translateY(16px); filter:blur(6px); }
          100% { opacity:1; transform:scale(1)    translateY(0);    filter:blur(0);   }
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
        .sd1{transition-delay:.05s} .sd2{transition-delay:.15s} .sd3{transition-delay:.25s}
        .sd4{transition-delay:.35s} .sd5{transition-delay:.45s}

        .modal-card { animation:smoothIn .9s cubic-bezier(.22,1,.36,1) forwards; }

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

      <div ref={containerRef} className="relative min-h-screen text-black font-sans flex flex-col selection:bg-black selection:text-white overflow-hidden">
        <div className="fixed inset-0 -z-20" />

        <nav className={`a d1 ${g} nav-wrap relative z-10 flex justify-between items-center`}>
          <div className="text-4xl font-light tracking-[-0.15em] uppercase scale-y-125 select-none">
            RΣNZ
          </div>
          <div className="nav-btns flex gap-4">
            <NavBtn label="LinkedIn" href="https://www.linkedin.com/in/john-renz-96a77728b/" primary />
            <NavBtn label="Github" href="https://github.com/johnrenz-bot" />
          </div>
        </nav>

        <main className="relative z-10 flex-grow flex items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-8 max-w-4xl w-full">
            <div className="group">
              <h1 className={`a d2 ${g} hero-title font-black leading-[0.85] tracking-tighter uppercase mb-4 transition-transform duration-500 group-hover:scale-[1.01]`}>
                John Renz <br /> Bandianon
              </h1>
              <p className={`a d3 ${g} text-[10px] font-black tracking-[0.2em] opacity-80 uppercase`}>
                UI / UX Designer • Graphic Designer • Frontend Developer
              </p>
            </div>

            <p className={`a d4 ${g} text-base md:text-lg font-medium leading-relaxed tracking-tight max-w-md opacity-80`}>
              Building clean interactive web experiences focused on modern UI design and thoughtful user interaction.
            </p>

            <div className={`a d5 ${g} ctas flex gap-4`}>
              <a
                href="#project"
                className="px-10 py-4 bg-[#222] text-white rounded-full text-sm font-serif italic hover:bg-black transition-all shadow-lg flex items-center"
              >
                view work <span className="ml-2 not-italic">↗</span>
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-white/50 backdrop-blur-md border border-white/20 text-[#333] rounded-full text-sm font-medium hover:bg-white transition-all"
              >
                Get in touch
              </a>
            </div>
          </div>
        </main>

        <footer className={`a d6 ${g} foot-wrap relative z-10 opacity-20 text-[9px] uppercase tracking-[1em] text-center`}>
          EST 2026
        </footer>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-2xl transition-all">
            <div className="modal-card bg-white/80 backdrop-blur-md border border-white/40 shadow-2xl p-12 max-w-sm w-full rounded-[40px] text-center">
              <h2 className="aos sd1 text-xl font-light mb-1 uppercase tracking-[0.4em]">
                Welcome
              </h2>
              <p className="aos sd2 text-gray-400 text-[8px] mb-10 uppercase tracking-widest font-black">
                Portfolio Guide
              </p>
              <button
                onClick={() => {
                  setShowModal(false);
                  localStorage.setItem("visited", "true");
                }}
                className="aos sd3 w-full py-4 bg-black text-white rounded-2xl text-[10px] uppercase tracking-widest font-bold hover:opacity-80 transition-all"
              >
                Enter Portfolio
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}