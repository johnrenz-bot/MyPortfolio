"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

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
      staggerChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

function CategoryCard({ category, isActive, onClick }: { category: Category; isActive: boolean; onClick: () => void }) {
  return (
    <motion.button
      whileHover={{ y: -6, transition: { duration: 0.4, ease: EASE } }}
      onClick={onClick}
      className="group relative shrink-0 w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-colors duration-500 bg-neutral-100 shadow-sm hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/20 border border-black/5"
    >
      <Image
        src={category.featured.image}
        alt={category.label}
        fill
        className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-100" />
      {isActive && (
        <div className="absolute inset-0 border-2 border-neutral-900/30 rounded-2xl md:rounded-3xl shadow-lg shadow-neutral-900/5" />
      )}

      <div className="absolute inset-0 flex flex-col justify-between p-6">
        <div className="flex justify-end">
          <div className="px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-neutral-900/10 text-neutral-900 text-xs font-semibold shadow-sm">
            {String(category.count).padStart(2, "0")} Projects
          </div>
        </div>
        <div className="space-y-3 relative z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
          <div className="flex items-end gap-3">
            <div className="w-1 h-8 md:h-10 bg-white rounded-full opacity-80" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight">
              {category.label}
            </h3>
          </div>
          <p className="text-neutral-200 text-xs md:text-sm ml-4 md:ml-5 tracking-wide font-medium">
            {category.sub} • Explore
          </p>
        </div>
      </div>
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
        <div className="w-10 h-10 rounded-full bg-white backdrop-blur-md border border-neutral-900/10 flex items-center justify-center shadow-lg">
          <MdArrowOutward className="w-5 h-5 text-neutral-900" />
        </div>
      </div>
    </motion.button>
  );
}

function ProjectGrid({ items, onSelectProject }: { items: Item[]; onSelectProject: (item: Item) => void }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
    >
      {items.map((item) => (
        <motion.button
          variants={fadeUp}
          whileHover={{ y: -6, transition: { duration: 0.4, ease: EASE } }}
          key={item.id}
          onClick={() => onSelectProject(item)}
          className="group relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-neutral-900/20 bg-neutral-100 border border-black/5"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <div className="flex justify-end">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/10 shadow-sm">
                <span className="text-neutral-900 text-[10px] uppercase tracking-[0.2em] font-black">
                  View
                </span>
              </div>
            </div>
            <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
              <h3 className="text-lg md:text-xl font-bold text-white leading-tight text-left">
                {item.title}
              </h3>
              <p className="text-neutral-300 text-xs md:text-sm line-clamp-2 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-white text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 uppercase tracking-widest">
                <span>View Details</span>
                <RxArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </motion.button>
      ))}
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Item; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-2xl overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 10 }}
        transition={{ duration: 0.5, ease: EASE }}
        className="relative w-full max-w-6xl flex flex-col items-center m-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-neutral-500 hover:text-neutral-900 transition-colors p-2 font-black uppercase tracking-widest text-xs flex items-center gap-2"
        >
          Close <span className="text-lg">✕</span>
        </button>

        <div className="relative rounded-3xl overflow-hidden border border-black/5 shadow-2xl bg-neutral-100 flex items-center justify-center w-full max-h-[70vh]">
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            className="object-contain w-full h-full max-h-[70vh]"
            priority
          />
        </div>

        <div className="mt-8 flex flex-col items-center text-center space-y-6 max-w-3xl w-full px-8 py-8 bg-white rounded-3xl border border-black/5 shadow-xl">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              {project.title}
            </h2>
            <p className="text-neutral-500 text-sm md:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {(project.techStack || project.uiTools) && (
            <div className="flex flex-wrap justify-center gap-2">
              {(project.techStack || project.uiTools)?.map((tech: string) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-neutral-100 rounded-full text-neutral-700 text-xs font-bold tracking-widest uppercase border border-black/5"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 w-full">
            {project.href && project.href.startsWith("http") && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-neutral-900 text-white text-sm font-bold tracking-widest uppercase hover:bg-neutral-800 transition-colors shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Visit Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-neutral-200 text-neutral-900 text-sm font-bold tracking-widest uppercase hover:bg-neutral-50 transition-colors"
              >
                View Code
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
        className="space-y-10 md:space-y-12 lg:space-y-16"
      >
        <div className="flex flex-col gap-8">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-black/5 text-neutral-900 transition-all duration-300 text-xs font-bold uppercase tracking-widest"
            >
              <RxArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              Back
            </button>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 tracking-tight">
                {category.label}
              </h1>
              <p className="text-neutral-500 text-xs md:text-sm mt-2 tracking-widest uppercase font-bold">
                {category.sub} • {items.length} Projects
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2">
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400">
              Selected Works
            </p>
            <div className="h-1 w-20 bg-neutral-900 rounded-full" />
          </motion.div>
        </div>

        {items.length > 0 ? (
          <ProjectGrid items={items} onSelectProject={setSelectedProject} />
        ) : (
          <motion.div variants={fadeUp} className="text-center py-20">
            <p className="text-neutral-500 text-lg font-medium">
              No projects in this category
            </p>
          </motion.div>
        )}
      </motion.div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
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
      const scrollAmount = 420;
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
        .category-scroll {
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .category-scroll > * {
          scroll-snap-align: start;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section className="relative z-10 w-full flex justify-center py-24 md:py-32 bg-white text-neutral-900 overflow-hidden" id="project">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-100/50 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 relative z-10">
          <AnimatePresence mode="wait">
            {view === "categories" ? (
              <motion.div
                key="categories"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, y: -20, transition: { duration: 0.4, ease: EASE } }}
                className="space-y-20 lg:space-y-28"
              >
                <div className="flex flex-col gap-8">
                  <motion.div variants={fadeUp} className="flex items-center gap-4">
                    <span className="w-12 h-0.5 bg-neutral-900" />
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-neutral-400">
                      Portfolio Collection
                    </span>
                  </motion.div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <motion.div variants={fadeUp} className="space-y-2 lg:col-span-7">
                      <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-950 tracking-tighter leading-[0.9]">
                        Selected
                      </h1>
                      <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-600 to-neutral-400 tracking-tighter leading-[0.9]">
                        Works
                      </h2>
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-4 lg:col-span-5 lg:pl-8">
                      <h3 className="text-xs text-neutral-500 tracking-[0.2em] uppercase font-black">
                        Design & Engineering
                      </h3>
                      <p className="text-neutral-500 text-sm sm:text-base leading-relaxed font-medium">
                        Explore a curated collection of my creative portfolio. Each category represents a unique approach to design and development, showcasing excellence in software engineering, UI/UX design, and creative direction.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <motion.div variants={fadeUp} className="relative w-screen left-1/2 right-1/2 -mx-[50vw] group/slider">
                  <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-start pl-8">
                    <button
                      onClick={() => scroll("left")}
                      className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg border border-black/5 hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                      <RxArrowLeft className="w-5 h-5" />
                    </button>
                  </div>

                  <div
                    ref={scrollContainerRef}
                    className="flex w-full gap-6 md:gap-8 overflow-x-auto no-scrollbar py-8 scroll-smooth snap-x snap-mandatory px-[max(1rem,calc((100vw-80rem)/2+1rem))]"
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

                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500 hidden md:flex items-center justify-end pr-8">
                    <button
                      onClick={() => scroll("right")}
                      className="pointer-events-auto w-12 h-12 flex items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg border border-black/5 hover:scale-110 active:scale-95 transition-all duration-300"
                    >
                      <RxArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="pt-10 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-neutral-400 text-xs tracking-[0.25em] uppercase font-bold">
                    {WORK_CATEGORIES.length} Categories •{" "}
                    {WORK_CATEGORIES.reduce((sum: number, cat: Category) => sum + cat.count, 0)} Total Projects
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              currentCategory && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: EASE }}
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
      </section>
    </>
  );
}