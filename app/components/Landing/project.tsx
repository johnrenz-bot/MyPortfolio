"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
  Category,
  CategoryKey,
} from "../../../data/projects";
import type { Project } from "../../../types";

type Item = Project;

const EASE: Easing = [0.22, 1, 0.36, 1];

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function CategoryCard({
  category,
  isActive,
  onClick,
}: {
  category: Category;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ y: -6, transition: { duration: 0.35, ease: EASE } }}
      onClick={onClick}
      className="group relative shrink-0 w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 bg-neutral-900 border border-black/10 dark:border-white/10 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
    >
      <Image
        src={category.featured.image}
        alt={category.label}
        fill
        sizes="(max-width: 768px) 280px, 384px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100" />
      {isActive && (
        <div className="absolute inset-0 border-2 border-neutral-900 dark:border-white rounded-2xl md:rounded-3xl shadow-lg" />
      )}

      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6 z-10">
        <div className="flex justify-end">
          <div className="px-3 py-1 rounded-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border border-neutral-900/10 dark:border-white/15 text-neutral-900 dark:text-white text-xs font-semibold shadow-sm">
            {String(category.count).padStart(2, "0")} Works
          </div>
        </div>
        <div className="space-y-2 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <div className="flex items-end gap-3">
            <div className="w-1 h-6 sm:h-8 bg-white rounded-full opacity-90" />
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              {category.label}
            </h3>
          </div>
          <p className="text-neutral-300 text-xs sm:text-sm ml-4 tracking-wide font-medium">
            {category.sub} • Explore
          </p>
        </div>
      </div>

      <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 z-20">
        <div className="w-9 h-9 rounded-full bg-white dark:bg-neutral-800 backdrop-blur-md border border-black/10 dark:border-white/15 flex items-center justify-center shadow-md">
          <MdArrowOutward className="w-4 h-4 text-neutral-900 dark:text-white" />
        </div>
      </div>
    </motion.button>
  );
}

function ProjectCard({
  item,
  onSelectProject,
}: {
  item: Item;
  onSelectProject: (item: Item) => void;
}) {
  const stack = item.techStack || item.uiTools || [];

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, transition: { duration: 0.3, ease: EASE } }}
      onClick={() => onSelectProject(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelectProject(item);
        }
      }}
      aria-label={`View details for ${item.title}`}
      className="group relative w-full aspect-[16/11] sm:aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 bg-neutral-900 border border-black/10 dark:border-white/15 shadow-sm hover:shadow-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
    >
      {/* Background Image filling the ENTIRE card */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />

      {/* Default subtle bottom title scrim for quick recognition before hover */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-5 transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 pointer-events-none">
        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight drop-shadow truncate">
          {item.title}
        </h3>
      </div>

      {/* Minimal Hover Overlay with Project Information */}
      <div className="absolute inset-0 bg-neutral-950/85 backdrop-blur-sm p-5 sm:p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 ease-out z-10">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-tight">
              {item.title}
            </h3>
            {item.workType && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 bg-white/10 px-2 py-0.5 rounded flex-shrink-0">
                {item.workType}
              </span>
            )}
          </div>

          <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {item.description}
          </p>

          {/* Minimal Tech Badges */}
          {stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {stack.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded bg-white/10 text-neutral-200 text-[10px] font-mono tracking-wide"
                >
                  {tech}
                </span>
              ))}
              {stack.length > 4 && (
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-400 text-[10px] font-mono">
                  +{stack.length - 4}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/15 text-xs font-semibold">
          <div
            className="flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {item.href && item.href !== "" && (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-1.5 text-white hover:text-neutral-300 transition-colors py-1"
                aria-label={`Open live demo for ${item.title}`}
              >
                <FaExternalLinkAlt className="text-[10px]" />
                <span>Live Demo</span>
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white transition-colors py-1"
                aria-label={`View code repository for ${item.title}`}
              >
                <FaGithub className="text-xs" />
                <span>Code</span>
              </a>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProject(item);
            }}
            className="inline-flex items-center gap-1 text-white hover:text-neutral-300 uppercase tracking-wider text-[11px] font-bold py-1"
            aria-label={`View details modal for ${item.title}`}
          >
            <span>Details</span>
            <RxArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Item; onClose: () => void }) {
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-950/80 backdrop-blur-xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative w-full max-w-5xl flex flex-col items-center my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="self-end mb-3 px-3 py-1.5 text-neutral-400 hover:text-white transition-colors font-mono uppercase tracking-widest text-xs flex items-center gap-2 rounded-lg bg-neutral-900/60 border border-white/10"
        >
          Close <span className="text-sm">✕</span>
        </button>

        {/* Modal Image */}
        <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center w-full max-h-[60vh] min-h-[220px]">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={750}
            className="object-contain w-full h-full max-h-[60vh]"
            priority
          />
        </div>

        {/* Modal Info Box */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center text-center space-y-5 max-w-3xl w-full px-6 sm:px-8 py-6 sm:py-8 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-xl text-neutral-900 dark:text-white">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              {project.title}
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
              {project.description}
            </p>
          </div>

          {(project.techStack || project.uiTools) && (
            <div className="flex flex-wrap justify-center gap-2">
              {(project.techStack || project.uiTools)?.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-700 dark:text-neutral-300 text-xs font-mono font-semibold tracking-wider uppercase border border-neutral-200 dark:border-neutral-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 w-full">
            {project.href && project.href !== "" && (
              <a
                href={project.href}
                target={project.href.startsWith("http") ? "_blank" : undefined}
                rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-opacity shadow-md"
              >
                <span>Live Project</span>
                <MdArrowOutward className="text-sm" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white text-xs font-bold tracking-widest uppercase hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <FaGithub className="text-sm" />
                <span>View Repository</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CategoryView({ category, onBack }: { category: Category; onBack: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Item | null>(null);

  const getItems = (): Item[] => {
    const map: Record<CategoryKey, Item[]> = {
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
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="space-y-8 sm:space-y-10"
      >
        <div className="flex flex-col gap-6">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <button
              onClick={onBack}
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white transition-all text-xs font-bold uppercase tracking-widest"
            >
              <RxArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              All Categories
            </button>
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-900 dark:text-white tracking-tight">
                {category.label}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 text-xs mt-1 tracking-widest uppercase font-mono">
                {category.sub} • {items.length} Projects
              </p>
            </div>
          </motion.div>
        </div>

        {items.length > 0 ? (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item) => (
              <ProjectCard
                key={item.id}
                item={item}
                onSelectProject={setSelectedProject}
              />
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <p className="text-neutral-500 text-base font-medium">
              No projects found in this category.
            </p>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

export default function PortfolioSection() {
  const [view, setView] = useState<"categories" | "projects">("categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("web-dev");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (key: CategoryKey) => {
    setSelectedCategory(key);
    setView("projects");
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 380;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const currentCategory = WORK_CATEGORIES.find((c: Category) => c.key === selectedCategory);

  return (
    <>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="relative z-10 w-full flex justify-center py-12 sm:py-16 md:py-20 bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 overflow-hidden transition-colors duration-300">
        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
          <AnimatePresence mode="wait">
            {view === "categories" ? (
              <motion.div
                key="categories"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -16, transition: { duration: 0.3, ease: EASE } }}
                className="space-y-12 sm:space-y-16"
              >
                {/* Section Header */}
                <div className="flex flex-col gap-6">
                  <motion.div variants={fadeUp} className="flex items-center gap-3">
                    <span className="w-10 h-[2px] bg-neutral-900 dark:bg-white" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-500 dark:text-neutral-400">
                      Portfolio Collection
                    </span>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <motion.div variants={fadeUp} className="space-y-1 lg:col-span-7">
                      <h2 className="text-5xl sm:text-6xl md:text-8xl font-black text-neutral-950 dark:text-white tracking-tighter leading-[0.9]">
                        Selected Works
                      </h2>
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-2 lg:col-span-5 lg:pl-6">
                      <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                        Curated collection of software development, web applications, and UI/UX systems. Select a category below to explore live demos, code repositories, and case studies.
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Categories Slider Area with Scroll Buttons */}
                <motion.div variants={fadeUp} className="relative">
                  <div className="flex items-center justify-between pb-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400 font-bold">
                      {WORK_CATEGORIES.length} Categories
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => scroll("left")}
                        aria-label="Scroll left"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow border border-neutral-200 dark:border-neutral-800 hover:scale-105 active:scale-95 transition-all"
                      >
                        <RxArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => scroll("right")}
                        aria-label="Scroll right"
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white shadow border border-neutral-200 dark:border-neutral-800 hover:scale-105 active:scale-95 transition-all"
                      >
                        <RxArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={scrollContainerRef}
                    className="flex w-full gap-5 sm:gap-6 overflow-x-auto no-scrollbar py-4 scroll-smooth snap-x snap-mandatory"
                  >
                    {WORK_CATEGORIES.map((cat: Category) => (
                      <div key={cat.key} className="shrink-0 snap-start">
                        <CategoryCard
                          category={cat}
                          isActive={cat.key === selectedCategory}
                          onClick={() => handleCategoryClick(cat.key)}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <p className="text-neutral-500 dark:text-neutral-400 font-mono text-xs tracking-wider uppercase">
                    {WORK_CATEGORIES.reduce((sum: number, cat: Category) => sum + cat.count, 0)} Total Works Catalogued
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              currentCategory && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <CategoryView
                    category={currentCategory}
                    onBack={() => setView("categories")}
                  />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}