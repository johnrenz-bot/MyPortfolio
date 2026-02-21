"use client";

import Link from "next/link";

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
    const timer = setTimeout(() => setLoading(false), 1000);
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
    <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text)] transition-colors duration-500">
      <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-50">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`text-sm font-semibold pb-1 border-b-2 border-transparent transition-all duration-300 ${
              activeSection === section
                ? "opacity-100 border-[var(--text)]"
                : "opacity-50"
            }`}
          >
            {section.toUpperCase()}
          </a>
        ))}
      </nav>

      {sections.map((section, idx) => {
        let Component;
        switch (section) {
          case "main":
            Component = Main;
            break;
          case "about":
            Component = About;
            break;
          case "project":
            Component = Project;
            break;
          case "contact":
            Component = Contact;
            break;

            
          default:
            Component = () => null;

            
          
        }

        

        return (
          <section
            key={section}
            id={section}
            className="min-h-screen opacity-0 animate-fadeIn"
            style={{ animationDelay: `${idx * 0.2}s`, animationFillMode: "forwards" }}
          >
            <Component />
          </section>
        );
      })}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
}
