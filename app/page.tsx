"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import HeroSection from "./components/Landing/HeroSection";
import ProjectsSection from "./components/Landing/ProjectsSection";
import AboutSection from "./components/Landing/AboutSection";
import ExperienceSection from "./components/Landing/ExperienceSection";
import SkillsSection from "./components/Landing/SkillsSection";
import TimelineSection from "./components/Landing/TimelineSection";
import EducationSection from "./components/Landing/EducationSection";
import CommunitySection from "./components/Landing/CommunitySection";
import NetworkSection from "./components/Landing/NetworkSection";
import ContactSection from "./components/Landing/ContactSection";
import { AnimatedBackground } from "./components/AnimatedBackground";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "journey", label: "Journey" },
  { id: "education", label: "Education" },
  { id: "community", label: "Community" },
  { id: "network", label: "Network" },
  { id: "contact", label: "Contact" },
] as const;

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Smooth scroll helper
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 30;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
      history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  // Scroll reveal system
  const setupRevealObserver = useCallback(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" },
    );

    document
      .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
      .forEach((el) => {
        revealObs.observe(el);
      });

    return revealObs;
  }, []);

  useEffect(() => {
    // Robust scroll spy
    const handleScroll = () => {
      // Top of page
      if (window.scrollY < 200) {
        setActiveSection("hero");
        return;
      }

      // Bottom of page
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection("contact");
        return;
      }

      // Find section currently in view
      const scrollCenter = window.scrollY + window.innerHeight * 0.35;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollCenter >= top) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // Scroll reveals
    const revealObs = setupRevealObserver();

    // Re-observe after DOM updates (for dynamic content)
    const mutationObs = new MutationObserver(() => {
      document
        .querySelectorAll(
          ".reveal:not(.revealed), .reveal-left:not(.revealed), .reveal-right:not(.revealed), .reveal-scale:not(.revealed)",
        )
        .forEach((el) => {
          revealObs.observe(el);
        });
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
      revealObs.disconnect();
      mutationObs.disconnect();
    };
  }, [setupRevealObserver]);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-[family-name:var(--font-inter)] overflow-x-hidden">
      <AnimatedBackground />

      {/* Desktop & Tablet: Clear, Minimal Section Navigation (Right Side) */}
      <nav
        aria-label="Section navigation"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3.5 z-40 pointer-events-auto"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="group flex items-center justify-end gap-3 py-0.5 transition-colors duration-300 ease-out select-none"
              aria-label={`Scroll to ${label}`}
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`text-[10px] sm:text-[11px] tracking-[0.25em] uppercase transition-all duration-300 ease-out ${
                  isActive
                    ? "text-[#D3D3D3] font-bold opacity-100 translate-x-0"
                    : "text-[#808080] font-semibold opacity-85 group-hover:text-[#D3D3D3] group-hover:opacity-100"
                }`}
              >
                {label}
              </span>
              <span
                className={`h-[1.5px] rounded-full transition-all duration-300 ease-out ${
                  isActive
                    ? "w-7 sm:w-8 bg-[#D3D3D3] shadow-[0_0_8px_rgba(211,211,211,0.5)]"
                    : "w-2 sm:w-2.5 bg-[#808080]/60 group-hover:w-4 sm:group-hover:w-5 group-hover:bg-[#D3D3D3]"
                }`}
              />
            </a>
          );
        })}
      </nav>

      {/* Mobile: Accessible Section Navigation Dock */}
      <nav
        aria-label="Mobile section navigation"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-40 flex items-center gap-1.5 px-3 py-1.5 max-w-[94vw] overflow-x-auto no-scrollbar"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className={`shrink-0 flex flex-col items-center gap-1 px-2 py-1 text-[10px] tracking-wider uppercase font-semibold transition-colors duration-300 ease-out select-none ${
                isActive
                  ? "text-[#D3D3D3] font-bold"
                  : "text-[#808080] hover:text-[#D3D3D3]"
              }`}
            >
              <span>{label}</span>
              <span
                className={`h-[1.5px] rounded-full transition-all duration-300 ease-out ${
                  isActive ? "w-4 bg-[#D3D3D3]" : "w-1 bg-[#808080]/40"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <main className="relative z-10">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="journey">
          <TimelineSection />
        </section>

        <section id="education">
          <EducationSection />
        </section>

        <section id="community">
          <CommunitySection />
        </section>

        <section id="network">
          <NetworkSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </div>
  );
}
