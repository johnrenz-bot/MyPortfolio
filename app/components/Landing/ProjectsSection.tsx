"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
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
import CertificateShowcase, { CertificateLightbox } from "./Certificate3DShowcase";

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
  border-color: #444444;
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
@media (hover: none) {
  .sw-overlay {
    opacity: 1 !important;
    transform: none !important;
  }
  .sw-overlay > div > * {
    opacity: 1 !important;
    transform: none !important;
  }
}
@media (prefers-reduced-motion: reduce) {
  .sw-card .sw-overlay,
  .sw-card .sw-overlay > div > * {
    transition: none !important;
    transform: none !important;
  }
  .sw-card img {
    transition: none !important;
    transform: none !important;
  }
  .sw-card .absolute.inset-0 {
    transition: none !important;
  }
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

/* ============================================
   MOCKUP PEEK & REVEAL STYLES (Mockups only)
   ============================================ */
.mockup-card {
  position: relative;
  overflow: hidden;
  border-radius: 1.5rem;
  background: radial-gradient(circle at 50% 25%, #181922 0%, #0d0e13 60%, #060709 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}
.mockup-card:hover {
  border-color: #444444 !important;
  box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.85), 0 0 35px rgba(255, 255, 255, 0.04);
}

.mockup-device-wrapper {
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform;
}

/* Peek direction variations for desktop pointer devices */
@media (hover: hover) and (pointer: fine) {
  /* Peek Right */
  .peek-right .mockup-device-wrapper {
    transform: translateX(24%) translateY(3%) rotate(5deg) scale(0.95);
  }
  .peek-right:hover .mockup-device-wrapper {
    transform: translateX(0) translateY(0) rotate(0deg) scale(1.02);
  }

  /* Peek Left */
  .peek-left .mockup-device-wrapper {
    transform: translateX(-24%) translateY(3%) rotate(-5deg) scale(0.95);
  }
  .peek-left:hover .mockup-device-wrapper {
    transform: translateX(0) translateY(0) rotate(0deg) scale(1.02);
  }

  /* Peek Bottom-Right */
  .peek-bottom-right .mockup-device-wrapper {
    transform: translateX(18%) translateY(18%) rotate(4deg) scale(0.93);
  }
  .peek-bottom-right:hover .mockup-device-wrapper {
    transform: translateX(0) translateY(0) rotate(0deg) scale(1.02);
  }

  /* Peek Bottom-Left */
  .peek-bottom-left .mockup-device-wrapper {
    transform: translateX(-18%) translateY(18%) rotate(-4deg) scale(0.93);
  }
  .peek-bottom-left:hover .mockup-device-wrapper {
    transform: translateX(0) translateY(0) rotate(0deg) scale(1.02);
  }
}

/* Touch and mobile devices: disable peek effects; display centered mockups instead */
@media (hover: none), (pointer: coarse), (max-width: 640px) {
  .mockup-device-wrapper {
    transform: none !important;
  }
}

/* Floating animation for Mockup Lightbox Modal */
@keyframes mockupModalFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

.mockup-floating-device {
  animation: mockupModalFloat 4s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .mockup-floating-device {
    animation: none !important;
  }
  .mockup-device-wrapper {
    transition: none !important;
    transform: none !important;
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

const FEATURED_DESCRIPTIONS: Record<string, string> = {
  capstone:
    "A unified performing-arts platform connecting artists, studios, coaches, and audiences through real-time event management, scheduling, and role-based access.",
  "grooveyyph-chatbot":
    "An AI assistant for Philippine performing arts that helps users discover cultural events, communities, and relevant arts information.",
  "tp-client-portal":
    "A client portal for streamlined communication, service requests, and account management in a clean, modern interface.",
  "reefer-frontend":
    "A streetwear-focused mobile app experience with intuitive navigation, product discovery, and a cohesive visual identity.",
};

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
              className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              priority={index === 0 && activeIdx === 0}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-colors duration-500" />
            <div className="sw-vignette" />

            {/* Hover/focus info overlay for the featured system */}
            <div className="sw-overlay absolute inset-0 z-20 flex flex-col justify-end p-4 sm:p-6 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 ease-out pointer-events-none">
              <div className="max-w-xl space-y-2">
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 delay-75">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed line-clamp-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 transition-all duration-300 delay-100">
                  {FEATURED_DESCRIPTIONS[project.id] || project.description}
                </p>
                {project.href && (
                  <a
                    href={project.href}
                    target={project.href.startsWith("http") ? "_blank" : undefined}
                    rel={project.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    onClick={(e) => e.stopPropagation()}
                    className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-900 text-white border border-white/20 hover:bg-white hover:text-neutral-950 transition-all duration-300 text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 delay-150"
                  >
                    View System <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                )}
              </div>
            </div>
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
      className="group relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#444444] dark:hover:border-[#444444] transition-all duration-300 hover:shadow-xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 dark:focus-visible:ring-white"
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

function MockupProjectCard({
  item,
  index,
  onClick,
}: {
  item: Project;
  index: number;
  onClick: () => void;
}) {
  const PEEK_VARIANTS = [
    "peek-right",
    "peek-left",
    "peek-bottom-right",
    "peek-bottom-left",
  ];
  const peekClass = PEEK_VARIANTS[index % PEEK_VARIANTS.length];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group mockup-card ${peekClass} relative w-full aspect-[4/5] sm:aspect-[3/4] p-4 flex flex-col justify-between cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white`}
      aria-label={`View mockup: ${item.title}`}
    >
      {/* Top badges */}
      <div className="relative z-10 flex items-center justify-between w-full">
        <span className="label-mono px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-[10px] backdrop-blur-md border border-white/10">
          Device Mockup
        </span>
        <span className="label-mono text-neutral-400 text-[10px]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Device mockup image with peek & reveal */}
      <div className="relative w-full h-[65%] sm:h-[68%] my-auto flex items-center justify-center pointer-events-none">
        <div className="mockup-device-wrapper relative w-full h-full flex items-center justify-center">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
            priority={index === 0}
          />
        </div>
      </div>

      {/* Bottom info banner */}
      <div className="relative z-10 pt-2 border-t border-white/[0.08]">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight truncate group-hover:text-white transition-colors">
              {item.title}
            </h4>
            <p className="text-xs text-neutral-400 truncate mt-0.5">
              {item.description || "Interactive device preview"}
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-mono uppercase tracking-wider text-neutral-300 px-2 py-1 rounded bg-white/5 border border-white/10 group-hover:border-[#444444] transition-colors">
            Tap to view
          </span>
        </div>
      </div>
    </button>
  );
}

function MockupLightbox({
  items,
  currentIndex,
  onClose,
  onSelectIndex,
}: {
  items: Project[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}) {
  const current = items[currentIndex];
  const total = items.length;

  const handlePrev = useCallback(() => {
    onSelectIndex((currentIndex - 1 + total) % total);
  }, [currentIndex, onSelectIndex, total]);

  const handleNext = useCallback(() => {
    onSelectIndex((currentIndex + 1) % total);
  }, [currentIndex, onSelectIndex, total]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, handlePrev, handleNext]);

  if (!current) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Device mockup preview: ${current.title}`}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 select-none"
      style={{
        background: "radial-gradient(circle at 50% 45%, #181920 0%, #0d0e12 55%, #050608 100%)",
        backdropFilter: "blur(20px)",
      }}
      onClick={onClose}
    >
      {/* Top Action Toolbar */}
      <div
        className="absolute top-4 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="label-mono px-3 py-1.5 rounded-full bg-white/10 text-white text-xs border border-white/15 backdrop-blur-md">
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
            Device Mockup Presentation · Use ← → arrows
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close mockup preview"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#444444] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
        >
          <span className="text-lg leading-none font-bold">✕</span>
        </button>
      </div>

      {/* Prev / Next controls */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous mockup"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-[#444444] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
      >
        <RxArrowLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next mockup"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 hover:border-[#444444] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
      >
        <RxArrowRight className="w-5 h-5" />
      </button>

      {/* Center presentation stage */}
      <motion.div
        key={current.id}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col items-center justify-center max-w-lg w-full max-h-[88vh] my-auto"
      >
        {/* Floating device container with realistic drop shadow */}
        <div className="mockup-floating-device relative w-full h-[52vh] sm:h-[62vh] max-h-[640px] flex items-center justify-center px-4">
          <div className="relative w-full h-full">
            <Image
              src={current.image}
              alt={current.title}
              fill
              quality={100}
              sizes="(max-width: 640px) 90vw, 500px"
              className="object-contain drop-shadow-[0_28px_45px_rgba(0,0,0,0.9)] drop-shadow-[0_12px_20px_rgba(0,0,0,0.65)]"
              draggable={false}
              priority
            />
          </div>
        </div>

        {/* Project Info Card */}
        <div className="mt-4 w-full px-5 py-4 rounded-2xl bg-neutral-900/90 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left shadow-2xl">
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="label-mono px-2 py-0.5 rounded bg-white/10 text-[10px] text-white border border-white/15">
                {current.category || "Mockup"}
              </span>
              <h3 className="text-base font-bold text-white tracking-tight truncate">
                {current.title}
              </h3>
            </div>
            <p className="text-xs text-neutral-300 leading-relaxed line-clamp-2">
              {current.description || "High-fidelity digital mockup demonstration."}
            </p>
          </div>

          {current.uiTools && current.uiTools.length > 0 && (
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {current.uiTools.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-neutral-300"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function CategoryView({
  category,
  onClose,
}: {
  category: Category;
  onClose: () => void;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const handleClose = useCallback(() => setSelectedIndex(null), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 border border-neutral-200 dark:border-neutral-700 hover:border-[#444444] dark:hover:border-[#444444] text-neutral-900 dark:text-white transition-all text-xs font-bold uppercase tracking-wider"
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

        {category.key === "certificates" ? (
          <CertificateShowcase certificates={items} />
        ) : category.key === "mockups" ? (
          <div
            id={`category-grid-${category.key}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            {items.map((item, i) => (
              <MockupProjectCard
                key={item.id}
                item={item}
                index={i}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        ) : (
          <div
            id={`category-grid-${category.key}`}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
          >
            {items.map((item, i) => (
              <GalleryProjectCard
                key={item.id}
                item={item}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        )}
      </div>

      {category.key !== "certificates" &&
        mounted &&
        createPortal(
          <AnimatePresence>
            {selectedIndex !== null &&
              (category.key === "mockups" ? (
                <MockupLightbox
                  items={items}
                  currentIndex={selectedIndex}
                  onClose={handleClose}
                  onSelectIndex={setSelectedIndex}
                />
              ) : (
                <CertificateLightbox
                  items={items}
                  currentIndex={selectedIndex}
                  onClose={handleClose}
                  onSelectIndex={setSelectedIndex}
                />
              ))}
          </AnimatePresence>,
          document.body,
        )}
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
                      : "border-neutral-200 dark:border-neutral-800 hover:border-[#444444] dark:hover:border-[#444444]"
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
