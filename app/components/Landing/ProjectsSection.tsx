"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
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

const SW_CSS = `
:root {
  --accent-gold: #ffffff;
  --accent-gold-light: #e5e5e5;
}
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
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 40px 100px -30px rgba(0, 0, 0, 0.9), 0 0 80px -40px rgba(255, 255, 255, 0.25);
}
.sw-card-glow {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(60% 40% at 50% 100%, rgba(255, 255, 255, 0.05), transparent 70%),
    radial-gradient(50% 35% at 85% 55%, rgba(255, 255, 255, 0.04), transparent 70%),
    #060709;
}
.sw-spotlight {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(255, 255, 255, 0.08),
    transparent 40%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}
.sw-card:hover .sw-spotlight {
  opacity: 1;
}
.sw-vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(to bottom, rgba(6, 7, 9, 0) 62%, rgba(6, 7, 9, 0.75) 88%, #060709 100%),
    radial-gradient(120% 100% at 50% 40%, transparent 60%, rgba(6, 7, 9, 0.35) 100%);
}
.sw-thumb--active {
  border: 1px solid #ffffff !important;
  box-shadow: 0 0 0 1px #ffffff, 0 0 18px rgba(255, 255, 255, 0.35) !important;
  opacity: 1 !important;
}
@keyframes sw-progress-fill {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.sw-gold-progress {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2.5px;
  background: linear-gradient(90deg, #ffffff, #e5e5e5);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  z-index: 20;
  pointer-events: none;
  animation: sw-progress-fill 4s linear forwards;
}
.sw-card:hover .sw-gold-progress {
  animation-play-state: paused;
}
@media (prefers-reduced-motion: reduce) {
  .sw-gold-progress {
    animation: none !important;
    width: 100% !important;
  }
}
`;

const FEATURED_PROJECTS = [
  {
    ...WEB_DEVELOPMENT[0],
    screenshots: [
      "/Image/Groove/GroovePH.png",
      "/Image/Groove/Desktop1.png",
      "/Image/Groove/GrooveLogin.png",
      "/Image/Groove/blur.png",
      "/Image/Groove/42.png",
    ],
  },
  {
    ...WEB_DEVELOPMENT[1],
    screenshots: [
      "/Image/GDG/GDG DevFest GrooveyA.png",
      "/Image/GDG/GDG DevFest GrooveyAII.png",
      "/Image/GDG/GDG DevFest GrooveyAI3.png",
      "/Image/GDG/GDG DevFest GrooveyAI4.png",
      "/Image/GDG/GDG DevFest GrooveyAI5.png",
    ],
  },
  {
    ...WEB_DEVELOPMENT[2],
    screenshots: [
      "/Image/TP/TP.png",
      "/Image/TP/MAIN.png",
      "/Image/TP/TPLOGIN.png",
      "/Image/TP/TP2.png",
      "/Image/TP/TP3.png",
    ],
  },
  {
    ...WEB_DEVELOPMENT[3],
    screenshots: [
      "/Image/UI/Reefer.png",
      "/Image/Reefer/REEFERLAND.png",
      "/Image/Reefer/REEFERR.png",
      "/Image/Reefer/Poster.png",
      "/Image/Reefer/REEFER.png",
    ],
  },
];

function FeaturedProjectCard({
  project,
  index,
}: {
  project: (typeof FEATURED_PROJECTS)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "50px" });
  const shouldReduceMotion = useReducedMotion();

  const images = (
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : [project.image]
  ).slice(0, 5);

  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [keyTrigger, setKeyTrigger] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const total = images.length;
  const AUTOPLAY_MS = 4000;
  const startTimeRef = useRef<number>(0);
  const remainingRef = useRef<number>(AUTOPLAY_MS);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((targetIdx: number, dir?: number) => {
    clearTimer();
    const nextDir = dir !== undefined ? dir : targetIdx >= activeIdx ? 1 : -1;
    setDirection(nextDir);
    setActiveIdx(targetIdx);
    setKeyTrigger((k) => k + 1);
    remainingRef.current = AUTOPLAY_MS;
    startTimeRef.current = Date.now();
  }, [activeIdx, clearTimer]);

  const advanceNext = useCallback(() => {
    goToSlide((activeIdx + 1) % total, 1);
  }, [activeIdx, total, goToSlide]);

  // Autoplay management
  useEffect(() => {
    if (shouldReduceMotion || !isInView || total <= 1) {
      clearTimer();
      return;
    }

    if (isHovered) {
      clearTimer();
      const elapsed = Date.now() - (startTimeRef.current || Date.now());
      remainingRef.current = Math.max(0, remainingRef.current - elapsed);
    } else {
      clearTimer();
      startTimeRef.current = Date.now();
      const delay = remainingRef.current > 0 ? remainingRef.current : AUTOPLAY_MS;
      timerRef.current = setTimeout(() => {
        advanceNext();
      }, delay);
    }

    return () => clearTimer();
  }, [activeIdx, isHovered, isInView, shouldReduceMotion, keyTrigger, total, advanceNext, clearTimer]);

  const handleThumbClick = (i: number) => {
    goToSlide(i, i >= activeIdx ? 1 : -1);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const formattedCurrent = String(activeIdx + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: EASE,
      }}
      className="sw-card group"
      style={
        {
          "--mouse-x": `${mousePos.x}px`,
          "--mouse-y": `${mousePos.y}px`,
        } as React.CSSProperties
      }
    >
      <div className="sw-card-glow" />
      <div className="sw-spotlight" />

      {/* Large Hero Image */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] lg:aspect-[21/9] overflow-hidden bg-black z-10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIdx}
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                opacity: 0,
                x: shouldReduceMotion ? 0 : dir * 28,
                scale: shouldReduceMotion ? 1 : 1.05,
                zIndex: 1,
              }),
              center: {
                opacity: 1,
                x: 0,
                scale: 1,
                zIndex: 1,
                transition: {
                  opacity: { duration: 0.7, ease: EASE },
                  x: { duration: 1.0, ease: EASE },
                  scale: { duration: 1.0, ease: EASE },
                },
              },
              exit: (dir: number) => ({
                opacity: 0,
                x: shouldReduceMotion ? 0 : dir * -20,
                scale: shouldReduceMotion ? 1 : 0.98,
                zIndex: 0,
                transition: {
                  opacity: { duration: 0.7, ease: EASE },
                  x: { duration: 1.0, ease: EASE },
                  scale: { duration: 1.0, ease: EASE },
                },
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={images[activeIdx]}
              alt={`${project.title} – slide ${activeIdx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 95vw, 1400px"
              className="object-cover"
              priority={index === 0 && activeIdx === 0}
            />
            <div className="sw-vignette" />
          </motion.div>
        </AnimatePresence>

        {/* Counter bottom-right (e.g. 01 / 05) */}
        <div className="absolute bottom-4 right-4 z-20 pointer-events-none select-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-950/80 backdrop-blur-md text-xs font-mono font-bold tracking-widest border border-white/10 shadow-xl">
            <span className="text-white font-extrabold">{formattedCurrent}</span>
            <span className="text-neutral-500 font-normal">/ {formattedTotal}</span>
          </div>
        </div>
      </div>

      {/* 5 Thumbnails in a row below the Hero */}
      <div className="relative z-10 grid grid-cols-5 gap-2 sm:gap-3.5 p-3 sm:p-5 bg-gradient-to-b from-[#060709] to-[#08090c] border-t border-white/[0.06]">
        {images.map((src, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleThumbClick(i)}
              className={`group/thumb relative aspect-[16/10] overflow-hidden rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                isActive
                  ? "sw-thumb--active scale-[1.02]"
                  : "border border-white/10 hover:border-white/30 opacity-55 hover:opacity-100 hover:scale-[1.01]"
              }`}
              aria-label={`View image ${i + 1}`}
              aria-current={isActive ? "true" : undefined}
            >
              <Image
                src={src}
                alt={`${project.title} thumb ${i + 1}`}
                fill
                sizes="(max-width: 640px) 20vw, 240px"
                className="object-cover transition-transform duration-500 group-hover/thumb:scale-105"
              />

              {!isActive && (
                <div className="absolute inset-0 bg-black/20 group-hover/thumb:bg-transparent transition-colors duration-200" />
              )}

              {/* Active thumbnail thin gold progress bar */}
              {isActive && (
                <div
                  key={`progress-${activeIdx}-${keyTrigger}`}
                  className="sw-gold-progress"
                  style={{
                    animationPlayState: isHovered ? "paused" : "running",
                  }}
                />
              )}
            </button>
          );
        })}
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
  onClose,
}: {
  category: Category;
  onClose: () => void;
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
    return map[category.key] || [];
  };

  const items = getItems();

  return (
    <>
      <div
        id={`category-${category.key}`}
        style={{ scrollMarginTop: "120px" }}
        className="space-y-8 scroll-mt-28 sm:scroll-mt-36 pt-10 border-t border-neutral-200 dark:border-neutral-800 transition-all duration-300"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white transition-all text-xs font-bold uppercase tracking-wider"
              aria-label="Close category view"
            >
              <RxArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              All Categories
            </button>
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 dark:text-white tracking-tight">
                {category.label}
              </h3>
              <p className="label-mono text-neutral-500 dark:text-neutral-400 mt-0.5">
                {category.sub} · {items.length} Works
              </p>
            </div>
          </div>
        </div>

        <div
          id={`category-grid-${category.key}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
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
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryKey>("web-dev");
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

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

  const handleCategoryClick = (e: React.MouseEvent, catKey: CategoryKey) => {
    e.preventDefault();
    const targetId = `category-${catKey}`;
    setSelectedCategory(catKey);
    setIsCategoryOpen(true);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const el =
          document.getElementById(targetId) ||
          document.getElementById(`category-grid-${catKey}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
    });
  };

  const handleCloseCategory = () => {
    setIsCategoryOpen(false);
    const allWorkHeader = document.getElementById("all-work-heading");
    allWorkHeader?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  useEffect(() => {
    if (isCategoryOpen && selectedCategory) {
      const targetId = `category-${selectedCategory}`;
      const frameId = requestAnimationFrame(() => {
        const el =
          document.getElementById(targetId) ||
          document.getElementById(`category-grid-${selectedCategory}`);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      });
      return () => cancelAnimationFrame(frameId);
    }
  }, [selectedCategory, isCategoryOpen]);

  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <style>{SW_CSS}</style>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
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

        <div
          id="all-work-heading"
          style={{ scrollMarginTop: "100px" }}
          className="reveal pt-16 sm:pt-24 border-t border-neutral-200 dark:border-neutral-800 mt-16 scroll-mt-28"
        >
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
                type="button"
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <RxArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
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
            {WORK_CATEGORIES.map((cat: Category) => {
              const isActive = isCategoryOpen && selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  id={`category-card-${cat.key}`}
                  type="button"
                  onClick={(e) => handleCategoryClick(e, cat.key)}
                  className={`group shrink-0 snap-start relative w-56 sm:w-64 lg:w-72 aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer bg-neutral-900 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive
                      ? "border-white ring-2 ring-white/50 shadow-[0_0_30px_-5px_rgba(255,255,255,0.4)]"
                      : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600"
                  }`}
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
                      <span
                        className={`px-2 py-0.5 rounded backdrop-blur text-[10px] font-bold ${
                          isActive
                            ? "bg-white text-black font-extrabold"
                            : "bg-white/80 dark:bg-neutral-900/80 text-neutral-900 dark:text-white"
                        }`}
                      >
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
              );
            })}
          </div>

          {/* Inline Active Category Grid */}
          <AnimatePresence mode="wait">
            {isCategoryOpen && currentCategory && (
              <motion.div
                key={currentCategory.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="mt-12"
              >
                <CategoryView
                  category={currentCategory}
                  onClose={handleCloseCategory}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
