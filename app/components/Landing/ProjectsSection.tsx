"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";

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

/* ─── Featured Projects (case-study style) ─── */
const FEATURED_PROJECTS = [
  {
    ...WEB_DEVELOPMENT[0], // Groove
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
    ...WEB_DEVELOPMENT[1], // TP Client Portal
    role: "Frontend Developer",
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
    ...UI_UX_DESIGNS[0], // Reefer
    role: "UI/UX Designer",
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

function FeaturedProjectCard({
  project,
  index,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`reveal delay-${index + 1} grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start py-12 sm:py-16 ${index > 0 ? "border-t border-neutral-200 dark:border-neutral-800" : ""}`}
    >
      {/* Image */}
      <div className={`relative group ${isEven ? "" : "lg:order-2"}`}>
        <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Quick action links overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          {project.href && project.href !== "" && (
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={
                project.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-[10px] font-bold uppercase tracking-wider rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <FaExternalLinkAlt className="text-[9px]" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white text-[10px] font-bold uppercase tracking-wider rounded-lg border border-neutral-200 dark:border-neutral-700 shadow-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <FaGithub className="text-xs" />
              Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-5 ${isEven ? "" : "lg:order-1"}`}>
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="label-mono text-neutral-500 dark:text-neutral-400">
            {project.role}
          </span>
        </div>

        {/* Title */}
        <h3 className="heading-section text-2xl sm:text-3xl lg:text-4xl text-neutral-900 dark:text-white">
          {project.title}
        </h3>

        {/* Problem & Solution */}
        <div className="space-y-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-1">
              The Challenge
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-1">
              What I Built
            </p>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Key Contributions */}
        <div className="space-y-2">
          {project.highlights.slice(0, 4).map((h, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-white mt-1.5 flex-shrink-0" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {h}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-[10px] font-mono font-semibold tracking-wider uppercase border border-neutral-200 dark:border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Takeaway */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400 italic border-l-2 border-neutral-300 dark:border-neutral-700 pl-3">
          {project.takeaway}
        </p>
      </div>
    </div>
  );
}

/* ─── Category Gallery Modal ─── */
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

/* ─── Category Gallery View ─── */
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
      {/* Scrim */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent transition-opacity duration-300" />
      {/* Info */}
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

/* ─── Main Section ─── */
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
              {/* Section Header */}
              <div className="reveal flex flex-col gap-6 mb-8">
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

              {/* Featured Case Studies */}
              {FEATURED_PROJECTS.map((project, index) => (
                <FeaturedProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}

              {/* Category Gallery Browser */}
              <div className="reveal pt-16 sm:pt-24 border-t border-neutral-200 dark:border-neutral-800">
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
