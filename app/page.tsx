"use client";

import { useEffect, useState, useRef } from "react";
import Main from "./components/Landing/main";
import About from "./components/Landing/about";
import Project from "./components/Landing/project";
import Contact from "./components/Landing/Contact";

const SECTIONS = ["main", "about", "project", "contact"] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("main");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-25% 0px -35% 0px",
      threshold: 0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-sans overflow-x-hidden selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950">
      {/* Subtle grid background for modern feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.04] bg-[linear-gradient(to_right,#80808014_1px,transparent_1px),linear-gradient(to_bottom,#80808014_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating Section Spy Navigation (hidden on mobile to prevent blocking content) */}
      <nav
        aria-label="Section navigation"
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-6 z-40"
      >
        {SECTIONS.map((section) => {
          const isActive = activeSection === section;
          return (
            <a
              key={section}
              href={`#${section}`}
              className={`group flex items-center justify-end transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-40 hover:opacity-90"
              }`}
              aria-label={`Scroll to ${section}`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`text-[9px] tracking-[0.35em] uppercase font-bold text-neutral-900 dark:text-neutral-200 transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 opacity-100"
                      : "translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}
                >
                  {section}
                </span>

                <span
                  className={`h-[2px] transition-all duration-300 origin-right rounded-full ${
                    isActive
                      ? "w-10 bg-neutral-900 dark:bg-white shadow-[0_0_8px_rgba(0,0,0,0.1)] dark:shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      : "w-3 bg-neutral-400 dark:bg-neutral-600 group-hover:w-6 group-hover:bg-neutral-600 dark:group-hover:bg-neutral-400"
                  }`}
                />
              </div>
            </a>
          );
        })}
      </nav>

      <main className="relative z-10 flex flex-col">
        <section id="main" className="min-h-screen animate-fadeIn flex flex-col items-center justify-center">
          <Main />
        </section>

        <section id="about" className="min-h-screen animate-fadeIn flex flex-col items-center justify-center">
          <About />
        </section>

        <section id="project" className="min-h-screen animate-fadeIn flex flex-col items-center justify-center">
          <Project />
        </section>

        <section id="contact" className="min-h-screen animate-fadeIn flex flex-col items-center justify-center">
          <Contact />
        </section>
      </main>
    </div>
  );
}