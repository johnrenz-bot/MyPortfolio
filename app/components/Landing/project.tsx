"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

import {
  Item,
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
  CategoryKey
} from "../../data/projectData";

function CategoryCard({ category, isActive, onClick }: { category: Category; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative shrink-0 w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-105px rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900/20"
    >
      <Image
        src={category.featured.image}
        alt={category.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={false}
      />
      <div className="absolute inset-0 bg-linear-to-t from-gray-900/50 via-white/20 to-transparent transition-all duration-500" />
      {isActive && (
        <div className="absolute inset-0 border-2 border-gray-900/30 rounded-2xl md:rounded-3xl shadow-lg shadow-gray-900/5" />
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-t from-white/98 via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex justify-end">
          <div className="px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-900/10 text-gray-900 text-xs font-semibold">
            {String(category.count).padStart(2, "0")} Projects
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-end gap-3">
            <div className="w-1 h-10 md:h-12 bg-linear-to-t from-gray-900 to-gray-900/40 rounded-full" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {category.label}
            </h3>
          </div>
          <p className="text-gray-700 text-xs md:text-sm ml-4 md:ml-5 tracking-wide font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            {category.sub} • Explore
          </p>
        </div>
      </div>
      <div className="absolute top-5 md:top-6 right-5 md:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/50 backdrop-blur-md border border-gray-900/10 flex items-center justify-center">
          <MdArrowOutward className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
        </div>
      </div>
    </button>
  );
}

function ProjectGrid({ items, onSelectProject }: { items: Item[]; onSelectProject: (item: Item) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onSelectProject(item)}
          className="group relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 bg-white border border-black/5 animate-in fade-in slide-in-from-bottom-4"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={false}
          />
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent to-transparent group-hover:from-white/90 group-hover:via-white/20 transition-all duration-700" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
            <div className="flex justify-end">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0 px-2.5 py-1 rounded-full bg-white/40 backdrop-blur-md border border-gray-900/10">
                <span className="text-gray-900 text-xs uppercase tracking-wide font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  View
                </span>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight text-left opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm line-clamp-2 text-left opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 delay-75" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-gray-900 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 delay-100">
                <span className="text-gray-600">View Details</span>
                <RxArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Item; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-neutral-900/80 backdrop-blur-md animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl flex flex-col items-center m-auto animate-fadeIn delay-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute -top-10 right-0 sm:right-0 text-white hover:text-gray-300 transition-colors p-2 font-bold"
        >
          Close ✕
        </button>
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/50 flex items-center justify-center w-full max-h-[70vh]">
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            className="object-contain w-full h-full max-h-[70vh]"
            priority
          />
        </div>

        <div className="mt-6 flex flex-col items-center text-center space-y-5 max-w-4xl w-full px-6 py-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 text-white shadow-xl">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {project.title}
            </h2>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.description}
            </p>
          </div>

          {(project.techStack || project.uiTools) && (
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {(project.techStack || project.uiTools)?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1.5 bg-white/20 rounded-full text-white text-xs font-semibold tracking-wide border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 w-full">
            {project.href && project.href.startsWith("http") && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black text-sm font-bold hover:scale-105 transition-transform"
              >
                Visit Project
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/40 text-white text-sm font-bold hover:bg-white/20 transition-colors"
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
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
      <div className="space-y-10 md:space-y-12 lg:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 animate-in fade-in duration-700">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 text-gray-900 transition-all duration-500 transform hover:scale-105 text-xs md:text-sm font-semibold"
            >
              <RxArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {category.label}
              </h1>
              <p className="text-gray-500 text-xs md:text-sm mt-1.5 tracking-wider uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                {category.sub} • {items.length} Projects
              </p>
            </div>
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              Selected Works
            </p>
            <div className="h-1 w-20 bg-linear-to-r from-gray-900/60 to-transparent rounded-full" />
          </div>
        </div>

        {items.length > 0 ? (
          <div className="animate-in fade-in duration-1000 delay-200">
            <ProjectGrid items={items} onSelectProject={setSelectedProject} />
          </div>
        ) : (
          <div className="text-center py-20 md:py-28 animate-in fade-in duration-700">
            <p className="text-gray-500 text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              No projects in this category
            </p>
          </div>
        )}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}

export default function PortfolioSection() {
  const [view, setView] = useState<"categories" | "projects">("categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("web-dev");
  const [scrollPosition, setScrollPosition] = useState(0);
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

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const currentCategory = WORK_CATEGORIES.find((c) => c.key === selectedCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
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

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>

  <section className="relative z-10 w-full flex justify-center py-20 md:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(243,244,246,1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {view === "categories" ? (
          <div className="space-y-20 md:space-y-28 lg:space-y-36 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
                <span className="w-12 h-0.5 bg-neutral-950" />
                <span
                  className="text-xs font-bold tracking-[0.5em] uppercase text-neutral-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Portfolio Collection
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="space-y-3 lg:col-span-7">
                  <h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-950 tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    User-Centered
                  </h1>
                  <h2
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-neutral-950 via-neutral-800 to-neutral-500 tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Design & Code
                  </h2>
                </div>

                <div className="space-y-5 lg:col-span-5 lg:pl-4">
                  <h3
                    className="text-xs text-neutral-450 tracking-[0.25em] uppercase font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Creative Work Across Multiple Disciplines
                  </h3>
                  <p
                    className="text-neutral-500 text-sm sm:text-base leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Explore a curated collection of my creative portfolio. Each
                    category represents a unique approach to design and
                    development, showcasing excellence in web development, UI/UX
                    design, graphic design, and creative direction. Discover
                    projects that combine aesthetic appeal with functional
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] group/slider animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-linear-to-r from-white via-white/80 to-transparent z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hidden md:flex items-center justify-start pl-16">
                <button
                  onClick={() => scroll("left")}
                  className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-neutral-950/10 hover:bg-neutral-950 text-neutral-950 hover:text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-500 border border-neutral-950/15"
                  aria-label="Scroll left"
                >
                  <RxArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <div
                ref={scrollContainerRef}
                className="flex w-full gap-8 md:gap-10 overflow-x-auto no-scrollbar py-12 scroll-smooth snap-x snap-mandatory px-[max(1rem,calc((100vw-80rem)/2+2.5rem))]"
              >
                {WORK_CATEGORIES.map((cat, index) => (
                  <div
                    key={cat.key}
                    className="shrink-0 snap-start animate-in fade-in slide-in-from-bottom-8 hover:translate-y-2 transition-transform duration-500"
                    style={{ animationDelay: `${500 + index * 75}ms` }}
                  >
                    <div className="p-1 rounded-3xl bg-linear-to-b from-neutral-200/60 to-transparent shadow-[0_12px_40px_-12px_rgba(0,0,0,0.05)] backdrop-blur-md">
                      <CategoryCard
                        category={cat}
                        isActive={cat.key === selectedCategory}
                        onClick={() => handleCategoryClick(cat.key)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-40 bg-linear-to-l from-white via-white/80 to-transparent z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hidden md:flex items-center justify-end pr-16">
                <button
                  onClick={() => scroll("right")}
                  className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-neutral-950/10 hover:bg-neutral-950 text-neutral-950 hover:text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-500 border border-neutral-950/15"
                  aria-label="Scroll right"
                >
                  <RxArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex md:hidden items-center justify-center gap-3 mt-4 opacity-100 animate-in fade-in duration-700 delay-700">
                {WORK_CATEGORIES.map((cat) => (
                  <span
                    key={`dot-${cat.key}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                      cat.key === selectedCategory
                        ? "w-12 bg-neutral-950"
                        : "w-2 bg-neutral-200 hover:bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-in fade-in duration-700 delay-700">
              <p
                className="text-neutral-400 text-xs tracking-[0.25em] uppercase font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {WORK_CATEGORIES.length} Categories •{" "}
                {WORK_CATEGORIES.reduce((sum, cat) => sum + cat.count, 0)} Total
                Projects
              </p>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-300 pointer-events-none select-none hidden sm:block">
                © 2026 Studio
              </span>
            </div>
          </div>
        ) : (
          currentCategory && (
            <CategoryView
              category={currentCategory}
              onBack={() => setView("categories")}
            />
          )
        )}
      </div>
    </section>
    </>
  );
}