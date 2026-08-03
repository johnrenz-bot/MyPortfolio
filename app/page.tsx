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
    <div className="relative min-h-screen bg-white text-neutral-900 transition-colors duration-500 font-sans overflow-x-hidden selection:bg-neutral-900 selection:text-white">
      {/* Light subtle grid background for modern feel */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {sections.map((section) => {
          const isActive = activeSection === section;
          return (
            <a
              key={section}
              href={`#${section}`}
              className={`group flex items-center justify-end transition-all duration-500 ease-out ${isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                }`}
              aria-label={`Scroll to ${section}`}
            >
              <div className="flex items-center gap-4">
                <span className={`hidden md:block text-[9px] tracking-[0.4em] uppercase font-bold text-neutral-900 transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
                  }`}>
                  {section}
                </span>

                <span
                  className={`h-[2px] transition-all duration-500 ease-in-out origin-right rounded-full ${isActive
                      ? "w-12 bg-neutral-900 shadow-[0_0_8px_rgba(0,0,0,0.1)]"
                      : "w-4 bg-neutral-400 group-hover:w-8 group-hover:bg-neutral-600"
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


    </div>
  );
}