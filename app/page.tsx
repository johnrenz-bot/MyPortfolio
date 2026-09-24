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
    // Section spy
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

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

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
      observerRef.current?.disconnect();
      revealObs.disconnect();
      mutationObs.disconnect();
    };
  }, [setupRevealObserver]);

  return (
    <div className="relative min-h-screen bg-transparent text-neutral-900 dark:text-neutral-100 transition-colors duration-300 font-[family-name:var(--font-inter)] overflow-x-hidden">
      <AnimatedBackground />
      {/* Minimal section spy - right edge */}
      <nav
        aria-label="Section navigation"
        className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-40"
      >
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`group flex items-center justify-end gap-3 transition-all duration-300 ${
                isActive ? "opacity-100" : "opacity-30 hover:opacity-80"
              }`}
              aria-label={`Scroll to ${label}`}
            >
              <span
                className={`text-[9px] tracking-[0.3em] uppercase font-semibold transition-all duration-300 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                {label}
              </span>
              <span
                className={`h-[1.5px] rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-8 bg-neutral-900 dark:bg-white"
                    : "w-2 bg-neutral-400 dark:bg-neutral-600 group-hover:w-5"
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
