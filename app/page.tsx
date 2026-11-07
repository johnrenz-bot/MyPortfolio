"use client";

import { useEffect, useState, useCallback } from "react";
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

  // Smooth scroll helper
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const top = el.getBoundingClientRect().top + window.pageYOffset - 30;
      window.scrollTo({
        top: Math.max(0, top),
        behavior: reduceMotion ? "auto" : "smooth",
      });
      history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  // Scroll reveal system
  const setupRevealObserver = useCallback(() => {
    const revealObs = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
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
      revealObs.disconnect();
      mutationObs.disconnect();
    };
  }, [setupRevealObserver]);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-[family-name:var(--font-inter)] overflow-x-hidden">
      <AnimatedBackground />

      {/* Desktop & Tablet: Slim Fixed Vertical Navigation Dock (Right Edge) */}
      <nav
        aria-label="Section navigation"
        className="fixed top-1/2 -translate-y-1/2 right-0 hidden md:flex z-40 pointer-events-auto"
      >
        <div className="flex flex-col gap-1 py-4 px-2.5 rounded-l-2xl bg-[#151515]/85 backdrop-blur-xl border border-r-0 border-[#303030] shadow-[-10px_0_30px_rgba(0,0,0,0.45)]">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => scrollToSection(e, id)}
                className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ease-out select-none ${
                  isActive
                    ? "bg-[#1A1A1A] text-[#FFFFFF]"
                    : "text-[#707070] hover:bg-[#252525] hover:text-[#D0D0D0]"
                }`}
                aria-label={`Scroll to ${label}`}
                aria-current={isActive ? "true" : undefined}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-r-full bg-[#FFFFFF]" />
                )}
                <span className="text-[10px] tracking-[0.2em] uppercase font-semibold whitespace-nowrap">
                  {label}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      {/* Mobile: Accessible Section Navigation Dock */}
      <nav
        aria-label="Mobile section navigation"
        className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden z-40 flex items-center gap-1.5 px-3 py-1.5 max-w-[94vw] overflow-x-auto no-scrollbar rounded-full bg-[#151515]/85 backdrop-blur-md border border-[#303030] shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className={`shrink-0 flex items-center px-2 py-1 text-[10px] tracking-wider uppercase font-semibold transition-colors duration-200 ease-out select-none rounded-md ${
                isActive
                  ? "text-[#FFFFFF] bg-[#1A1A1A]"
                  : "text-[#707070] hover:text-[#D0D0D0] hover:bg-[#252525]"
              }`}
            >
              <span>{label}</span>
            </a>
          );
        })}
      </nav>

      <main className="relative z-10 md:pr-28 lg:pr-32">
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
