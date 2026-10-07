"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay } from "react-icons/fa";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { HiChevronDown } from "react-icons/hi";

import {
  WEB_DEVELOPMENT,
  WEBSITE_DESIGN,
  UI_UX_DESIGNS,
  DEVICE_MOCKUPS,
  POSTERS,
  MERCHANDISE_DESIGNS,
  GRAPHIC_DESIGNS,
  CERTS,
  WORK_CATEGORIES,
  type Category,
  type CategoryKey,
} from "../../../data/projects";
import type { Project } from "../../../types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SW_CSS = `
.sw-card {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: 2rem;
  background: #060709;
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.85);
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
}
.sw-card:hover {
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: 0 40px 100px -30px rgba(0, 0, 0, 0.9), 0 0 80px -40px rgba(16, 185, 129, 0.35);
}
.sw-card-glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(60% 40% at 50% 100%, rgba(16, 185, 129, 0.07), transparent 70%),
    radial-gradient(50% 35% at 85% 55%, rgba(99, 102, 241, 0.06), transparent 70%),
    #060709;
}
.sw-gallery {
  position: relative;
  z-index: 1;
  background: #060709;
}
.sw-main {
  position: relative;
  overflow: hidden;
  background: #000;
}
.sw-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(6, 7, 9, 0) 62%, rgba(6, 7, 9, 0.75) 88%, #060709 100%),
    radial-gradient(120% 100% at 50% 40%, transparent 60%, rgba(6, 7, 9, 0.35) 100%);
}
.sw-thumbs {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 0.75rem;
  padding: 0.25rem 1rem 1.25rem;
  overflow-x: auto;
  background: linear-gradient(to bottom, #060709, #08090c);
  scrollbar-width: none;
}
.sw-thumbs::-webkit-scrollbar {
  display: none;
}
.sw-thumb {
  position: relative;
  flex: 0 0 clamp(150px, 24%, 240px);
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  border-radius: 0.75rem;
  background: #0b0d10;
  border: 1px solid rgba(255, 255, 255, 0.07);
  opacity: 0.55;
  transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease,
    border-color 0.35s ease, box-shadow 0.45s ease;
}
.sw-thumb img {
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
.sw-thumb:hover {
  opacity: 1;
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.28);
  box-shadow: 0 14px 30px -10px rgba(0, 0, 0, 0.9), 0 0 24px -8px rgba(16, 185, 129, 0.35);
}
.sw-thumb:hover img {
  transform: scale(1.07);
}
.sw-thumb--active {
  opacity: 1;
  border-color: rgba(52, 211, 153, 0.7);
  box-shadow: 0 0 28px -8px rgba(16, 185, 129, 0.45);
}
.sw-thumb-bar {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background: transparent;
  transition: background 0.35s ease;
}
.sw-thumb-bar--active {
  background: linear-gradient(90deg, #10b981, #34d399);
}
.sw-info {
  position: relative;
  z-index: 1;
  background:
    radial-gradient(70% 90% at 0% 0%, rgba(16, 185, 129, 0.06), transparent 65%),
    radial-gradient(60% 80% at 100% 100%, rgba(99, 102, 241, 0.05), transparent 65%),
    linear-gradient(to bottom, #08090c 0%, #07080a 55%, #050608 100%);
}
.sw-badge {
  display: inline-block;
  padding: 0.3rem 0.65rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: #d4d4d8;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  cursor: default;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), color 0.3s ease,
    background 0.3s ease, border-color 0.3s ease, box-shadow 0.35s ease;
}
.sw-badge:hover {
  transform: translateY(-2px);
  color: #ffffff;
  background: rgba(16, 185, 129, 0.1);
  border-color: rgba(52, 211, 153, 0.45);
  box-shadow: 0 8px 20px -8px rgba(16, 185, 129, 0.45);
}
.sw-btn-primary,
.sw-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.1rem;
  border-radius: 0.6rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #ffffff;
  text-decoration: none;
  transition: background 0.3s ease, border-color 0.3s ease, box-shadow 0.4s ease, color 0.3s ease;
}
.sw-btn-primary {
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(52, 211, 153, 0.35);
}
.sw-btn-primary:hover {
  background: rgba(16, 185, 129, 0.22);
  border-color: rgba(52, 211, 153, 0.75);
  box-shadow: 0 0 30px -6px rgba(16, 185, 129, 0.55);
}
.sw-btn-secondary {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.14);
}
.sw-btn-secondary:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(255, 255, 255, 0.35);
  box-shadow: 0 0 26px -8px rgba(255, 255, 255, 0.25);
}
.sw-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.75rem 0.35rem 0.5rem;
  margin-left: -0.5rem;
  border-radius: 0.5rem;
  background: transparent;
  border: 1px solid transparent;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #8a8a93;
  cursor: pointer;
  transition: color 0.3s ease, background 0.3s ease, border-color 0.3s ease;
}
.sw-toggle:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.1);
}
`;

const FEATURED_PROJECTS = [
  {
    ...WEB_DEVELOPMENT[0],
    role: "Full-Stack Developer & Team Lead",
    problem:
      "Performing arts communities in Bulacan lacked a centralized platform for discovering events, managing bookings, and connecting with local artists.",
    solution:
      "Built a full-stack performing arts hub with smart AI chat support, real-time event management, appointment scheduling, and a comprehensive artist directory.",
    highlights: [
      "Led a 3-person development team using Agile-style coordination",
      "Integrated AI chatbot for user support and event recommendations",
      "Built real-time appointment scheduling and event management systems",
      "Developed responsive frontend with Next.js and TailwindCSS",
      "Implemented backend API with Laravel and MySQL via XAMPP",
    ],
    takeaway:
      "Capstone project demonstrating full-stack engineering from planning through deployment, with real users and stakeholders.",
  },
  {
    ...WEB_DEVELOPMENT[1],
    role: "Full-Stack Developer",
    problem:
      "A service team needed a centralized client portal for managing communications, requests, and service workflows.",
    solution:
      "Developed a clean, responsive client portal web application focused on intuitive navigation, clear communication flows, and organized service management.",
    highlights: [
      "Built with Next.js and React for a fast, modern user experience",
      "Implemented responsive UI with Tailwind CSS",
      "Designed client communication and request management flows",
      "Focused on usability and clear information hierarchy",
    ],
    takeaway:
      "Practical client-facing web application with real-world business utility.",
  },
  {
    ...WEB_DEVELOPMENT[2],
    role: "Frontend Developer",
    problem:
      "A streetwear brand needed a cohesive, modern mobile application interface that reflected its identity.",
    solution:
      "Designed a complete mobile app UI in Figma with intuitive navigation, brand-aligned visual language, and interactive prototype for developer handoff.",
    highlights: [
      "Designed end-to-end mobile app interface in Figma",
      "Created interactive prototype with user flows and screen transitions",
      "Maintained consistent design system aligned with brand identity",
      "Focused on intuitive UX and visual hierarchy",
    ],
    takeaway:
      "Demonstrates end-to-end UI/UX design process from wireframes to interactive prototype.",
  },
];

function CinematicGallery({
  screenshots,
  title,
}: {
  screenshots: string[];
  title: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const thumbScrollRef = useRef<HTMLDivElement>(null);

  if (!screenshots || screenshots.length === 0) return null;

  const mainSrc = screenshots[activeIdx];
  const thumbIndices = screenshots.map((_, i) => i);

  return (
    <div className="sw-gallery">
      <div className="sw-main">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative w-full aspect-[16/9] sm:aspect-[16/8] lg:aspect-[21/9]"
          >
            <Image
              src={mainSrc}
              alt={`${title} – screenshot ${activeIdx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 1400px"
              className="object-cover"
              priority
            />
            <div className="sw-vignette" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 right-4 z-10">
          <span className="px-2.5 py-1 rounded-lg bg-neutral-950/70 backdrop-blur-md text-white/80 text-[10px] font-mono font-bold tracking-widest border border-white/10">
            {String(activeIdx + 1).padStart(2, "0")} /{" "}
            {String(screenshots.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      <div ref={thumbScrollRef} className="sw-thumbs">
        {thumbIndices.map((i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            className={`sw-thumb ${i === activeIdx ? "sw-thumb--active" : ""}`}
            aria-label={`View screenshot ${i + 1}`}
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden">
              <Image
                src={screenshots[i]}
                alt={`${title} thumb ${i + 1}`}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <div
              className={`sw-thumb-bar ${i === activeIdx ? "sw-thumb-bar--active" : ""}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  index,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });
  const infoRef = useRef<HTMLDivElement>(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-30px" });
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: EASE }}
      className="sw-card group"
    >
      <div className="sw-card-glow" />

      {project.screenshots && project.screenshots.length > 0 && (
        <CinematicGallery
          screenshots={project.screenshots}
          title={project.title}
        />
      )}

      <div ref={infoRef} className="sw-info">
        <div className="relative z-10 px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
            className="flex items-center gap-2 mb-3"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 expand-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
              {project.role}
            </span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="heading-section text-2xl sm:text-3xl lg:text-4xl text-white mb-2"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease: EASE }}
            className="text-sm sm:text-base text-neutral-400 max-w-3xl leading-relaxed mb-5"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={infoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
            className="flex flex-wrap items-center gap-3"
          >
            <div className="flex flex-wrap gap-1.5">
              {(project.techStack || []).slice(0, 6).map((tech) => (
                <span key={tech} className="sw-badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex-1" />

            <div className="flex items-center gap-2.5">
              {project.href && project.href !== "" && (
                <motion.a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    project.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="sw-btn-primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <FaPlay className="text-[8px]" />
                  View Project
                </motion.a>
              )}
              {project.github && (
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sw-btn-secondary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <FaGithub className="text-xs" />
                  Code
                </motion.a>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={infoInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
            className="mt-6 border-t border-white/[0.06] pt-4"
          >
            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              className="sw-toggle"
              whileHover={{ x: 2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ rotate: showDetails ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <HiChevronDown className="w-4 h-4" />
              </motion.div>
              {showDetails ? "Hide Details" : "Case Study"}
            </motion.button>
          </motion.div>

          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
                  <div className="space-y-5">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        The Challenge
                      </p>
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-2">
                        What I Built
                      </p>
                      <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-3">
                      Key Contributions
                    </p>
                    <div className="space-y-2.5">
                      {project.highlights.slice(0, 5).map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + i * 0.06 }}
                          className="flex items-start gap-2.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 mt-1.5 flex-shrink-0" />
                          <span className="text-sm text-neutral-300">{h}</span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      className="mt-5 text-xs text-neutral-500 italic border-l-2 border-neutral-700 pl-3"
                    >
                      {project.takeaway}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const stack = project.techStack || project.uiTools || [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 bg-neutral-950/80 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.3, ease: EASE }}
        className="relative w-full max-w-4xl flex flex-col items-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="self-end mb-3 px-3 py-1.5 text-neutral-400 hover:text-white transition-colors font-mono uppercase tracking-widest text-xs flex items-center gap-2 rounded-lg bg-neutral-900/60 border border-white/10"
        >
          Close <span className="text-sm">✕</span>
        </button>

        <div className="relative rounded-[2rem] overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-900 flex items-center justify-center w-full max-h-[60vh] min-h-[200px]">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={750}
            className="object-contain w-full h-full max-h-[60vh]"
            priority
          />
        </div>

        <div className="mt-4 flex flex-col items-center text-center space-y-4 max-w-2xl w-full px-6 py-6 bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 shadow-xl text-neutral-900 dark:text-white">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            {project.title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {stack.length > 0 && (
            <div className="flex flex-wrap justify-center gap-1.5">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-semibold tracking-wider uppercase border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {project.href && project.href !== "" && (
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  project.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold tracking-wider uppercase hover:opacity-90 transition-opacity shadow-md"
              >
                <FaExternalLinkAlt className="text-[10px]" />
                View Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-xs font-bold tracking-wider uppercase hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaGithub className="text-sm" />
                Repository
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function GalleryProjectCard({
  item,
  onClick,
}: {
  item: Project;
  onClick: () => void;
}) {
  const stack = item.techStack || item.uiTools || [];

  return (
    <button
      onClick={onClick}
      className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent transition-opacity duration-300" />
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 z-10">
        <h4 className="text-sm sm:text-base font-bold text-white tracking-tight mb-1 truncate group-hover:-translate-y-0.5 transition-transform duration-300">
          {item.title}
        </h4>
        {stack.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {stack.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-1.5 py-0.5 rounded bg-white/15 text-white/80 text-[9px] font-mono tracking-wider"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}

function CategoryView({
  category,
  onBack,
}: {
  category: Category;
  onBack: () => void;
}) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getItems = (): Project[] => {
    const map: Record<CategoryKey, Project[]> = {
      "web-dev": WEB_DEVELOPMENT,
      "website-design": WEBSITE_DESIGN,
      "ui-ux": UI_UX_DESIGNS,
      mockups: DEVICE_MOCKUPS,
      posters: POSTERS,
      merchandise: MERCHANDISE_DESIGNS,
      "graphic-design": GRAPHIC_DESIGNS,
      certificates: CERTS,
    };
    return map[category.key];
  };

  const items = getItems();

  return (
    <>
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white transition-all text-xs font-bold uppercase tracking-wider"
          >
            <RxArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
            All Categories
          </button>
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
              {category.label}
            </h3>
            <p className="label-mono text-neutral-500 dark:text-neutral-400 mt-1">
              {category.sub} · {items.length} Works
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item) => (
            <GalleryProjectCard
              key={item.id}
              item={item}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default function ProjectsSection() {
  const [view, setView] = useState<"featured" | "gallery">("featured");
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("web-dev");

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -350 : 350,
        behavior: "smooth",
      });
    }
  };

  const currentCategory = WORK_CATEGORIES.find(
    (c: Category) => c.key === selectedCategory,
  );

  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <style>{SW_CSS}</style>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <AnimatePresence mode="wait">
          {view === "featured" ? (
            <motion.div
              key="featured"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <div className="reveal flex flex-col gap-6 mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
                  <span className="label-mono text-neutral-500 dark:text-neutral-400">
                    Selected Work
                  </span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                  <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white">
                    Featured Projects
                  </h2>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base max-w-md leading-relaxed">
                    Full-stack web applications, UI/UX design systems, and
                    client projects built with modern technologies.
                  </p>
                </div>
              </div>

              <div className="space-y-10">
                {FEATURED_PROJECTS.map((project, index) => (
                  <FeaturedProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>

              <div className="reveal pt-16 sm:pt-24 border-t border-neutral-200 dark:border-neutral-800 mt-16">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                  <div>
                    <h3 className="heading-section text-2xl sm:text-3xl text-neutral-900 dark:text-white">
                      All Work
                    </h3>
                    <p className="label-mono text-neutral-500 dark:text-neutral-400 mt-1.5">
                      {WORK_CATEGORIES.reduce(
                        (sum: number, c: Category) => sum + c.count,
                        0,
                      )}{" "}
                      Total Works · {WORK_CATEGORIES.length} Categories
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => scroll("left")}
                      aria-label="Scroll left"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <RxArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => scroll("right")}
                      aria-label="Scroll right"
                      className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                    >
                      <RxArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div
                  ref={scrollRef}
                  className="flex gap-4 overflow-x-auto no-scrollbar py-2 snap-x snap-mandatory"
                >
                  {WORK_CATEGORIES.map((cat: Category) => (
                    <button
                      key={cat.key}
                      onClick={() => {
                        setSelectedCategory(cat.key);
                        setView("gallery");
                      }}
                      className="group shrink-0 snap-start relative w-56 sm:w-64 lg:w-72 aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
                    >
                      <Image
                        src={cat.featured.image}
                        alt={cat.label}
                        fill
                        sizes="288px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-between p-5 z-10">
                        <div className="flex justify-end">
                          <span className="px-2 py-0.5 rounded bg-white/80 dark:bg-neutral-900/80 backdrop-blur text-neutral-900 dark:text-white text-[10px] font-bold">
                            {String(cat.count).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-black text-white tracking-tight">
                            {cat.label}
                          </h4>
                          <p className="text-neutral-400 text-xs mt-0.5">
                            {cat.sub}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            currentCategory && (
              <motion.div
                key="gallery"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: EASE }}
              >
                <CategoryView
                  category={currentCategory}
                  onBack={() => setView("featured")}
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}