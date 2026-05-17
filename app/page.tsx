"use client";

import { useEffect, useState, useRef } from "react";
import Main from "./components/Landing/main";
import About from "./components/Landing/about";
import Project from "./components/Landing/project";
import Contact from "./components/Landing/Contact";

export default function Home() {
  const [activeSection, setActiveSection] = useState("main");
  const sections = ["main", "about", "project", "contact"];
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-30% 0px -40% 0px", 
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-[var(--text)] transition-colors duration-500 font-sans overflow-x-hidden selection:bg-white selection:text-black">
      
      <div className="fixed inset-0 pointer-events-none z-0 mix-blend-overlay">
        <div className="w-full h-full animate-grain bg-[url('/images/noise.png')] opacity-[0.06]"></div>
      </div>

      <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50 mix-blend-difference">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <a
              key={section}
              href={`#${section}`}
              className={`group flex items-center justify-end transition-all duration-500 ease-out ${
                isActive ? "opacity-100" : "opacity-30 hover:opacity-70"
              }`}
              aria-label={`Scroll to ${section}`}
            >
              <div className="flex items-center gap-4">

                <span className={`hidden md:block text-[9px] tracking-[0.4em] uppercase font-bold transition-all duration-300 ${
                  isActive ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                }`}>
                  {section}
                </span>

                <span
                  className={`h-[1.5px] transition-all duration-500 ease-in-out origin-right ${
                    isActive 
                      ? "w-14 bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" 
                      : "w-4 bg-[var(--text)] group-hover:w-8"
                  }`}
                />
              </div>
            </a>
          );
        })}
      </nav>

      <main className="relative z-10 flex flex-col">
        <section id="main" className="min-h-screen animate-fadeIn flex flex-col items-center justify-center px-4">
          <Main />
        </section>

        <section id="about" className="min-h-screen animate-fadeIn delay-100 flex flex-col items-center justify-center px-4">
          <About />
        </section>

        <section id="project" className="min-h-screen animate-fadeIn delay-200 flex flex-col items-center justify-center px-4">
          <Project />
        </section>

        <section id="contact" className="min-h-screen animate-fadeIn delay-300 flex flex-col items-center justify-center px-4">
          <Contact />
        </section>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); filter: blur(4px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .animate-fadeIn { 
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; 
        }
        .delay-100 { animation-delay: 0.2s; }
        .delay-200 { animation-delay: 0.35s; }
        .delay-300 { animation-delay: 0.5s; }

        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-0.5%, -1%); }
          30% { transform: translate(1%, -0.5%); }
          50% { transform: translate(-1%, 1%); }
          70% { transform: translate(0.5%, 0.5%); }
          90% { transform: translate(-0.5%, -0.5%); }
        }
        .animate-grain { animation: grain 0.6s steps(2) infinite; }

        @media (max-width: 768px) {
          .animate-fadeIn { animation-duration: 0.9s; }
        }
      `}</style>
    </div>
  );
}