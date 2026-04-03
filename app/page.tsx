"use client";

import { useEffect, useState } from "react";
import Main from "./components/Landing/main";
import About from "./components/Landing/about";
import Project from "./components/Landing/project";
import Contact from "./components/Landing/Contact";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("main");
  const sections = ["main", "about", "project", "contact"];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) return null;

  return (
    <div className="relative min-h-screen text-[var(--text)] transition-colors duration-500 font-sans overflow-x-hidden">
      
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="w-full h-full animate-grain bg-[url('/images/noise.png')] opacity-10"></div>
      </div>

      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-5 z-50">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`group flex items-center justify-end transition-all duration-300 ${
              activeSection === section
                ? "opacity-100 translate-x-0"
                : "opacity-40 translate-x-1 md:translate-x-2 hover:opacity-70"
            }`}
          >
            <span className="flex items-center gap-2 md:gap-3">
              <span className="hidden md:block text-[10px] tracking-[0.3em] uppercase font-bold">
                {section}
              </span>
              <span
                className={`h-[1.5px] md:h-[2px] transition-all duration-500 ease-out ${
                  activeSection === section 
                    ? "w-8 md:w-12 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" 
                    : "w-3 md:w-4 bg-[var(--text)]/40 group-hover:bg-[var(--text)]"
                }`}
              />
            </span>
          </a>
        ))}
      </nav>

      <main className="relative z-10">
        <section id="main" className="min-h-screen opacity-0 animate-fadeIn flex flex-col items-center justify-center">
          <Main />
        </section>



        <section id="about" className="min-h-screen opacity-0 animate-fadeIn delay-100 flex flex-col items-center justify-center">
          <About />
        </section>

        <section id="project" className="min-h-screen opacity-0 animate-fadeIn delay-200 flex flex-col items-center justify-center">
          <Project />
        </section>

        <section id="contact" className="min-h-screen opacity-0 animate-fadeIn delay-300 flex flex-col items-center justify-center">
          <Contact />
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .delay-100 { animation-delay: 0.15s; }
        .delay-200 { animation-delay: 0.3s; }
        .delay-300 { animation-delay: 0.45s; }

        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-1%,-1%); }
          20% { transform: translate(-2%,1%); }
          30% { transform: translate(1%,-1%); }
          40% { transform: translate(-1%,2%); }
          50% { transform: translate(2%,1%); }
          60% { transform: translate(-2%,-2%); }
          70% { transform: translate(1%,1%); }
          80% { transform: translate(-1%,0); }
          90% { transform: translate(2%,-1%); }
        }
        .animate-grain { animation: grain 0.8s steps(1) infinite; }

        @media (max-width: 768px) {
          .animate-fadeIn { animation-duration: 0.8s; }
        }
      `}</style>
    </div>
  );
}