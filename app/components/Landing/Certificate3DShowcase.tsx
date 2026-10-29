"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ZoomIn,
  ZoomOut,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Maximize2,
} from "lucide-react";
import type { Project } from "../../../types";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface Certificate3DCardProps {
  item: Project;
  index: number;
  total: number;
  onClick: () => void;
}

export function Certificate3DCard({
  item,
  index,
  total,
  onClick,
}: Certificate3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;

      // ±11 deg tilt range: smooth, realistic, not disorienting
      const rotY = (px - 0.5) * 22;
      const rotX = (0.5 - py) * 22;

      setTilt({
        rotX: Number(rotX.toFixed(2)),
        rotY: Number(rotY.toFixed(2)),
      });

      setGlare({
        x: Number((px * 100).toFixed(1)),
        y: Number((py * 100).toFixed(1)),
        opacity: 0.22,
      });
    },
    [shouldReduceMotion],
  );

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotX: 0, rotY: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  const transformStyle = shouldReduceMotion
    ? undefined
    : {
        transform: `perspective(1000px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) translateY(${
          isHovered ? -8 : 0
        }px) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
        transformStyle: "preserve-3d" as const,
        transition: isHovered
          ? "transform 0.12s ease-out, box-shadow 0.25s ease"
          : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.4s ease",
      };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.05, 0.35),
        ease: EASE,
      }}
      className="w-full"
    >
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={`View certificate: ${item.title}`}
        style={transformStyle}
        className={`group relative w-full rounded-2xl cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 p-3.5 sm:p-4 bg-gradient-to-b from-[#14161c] via-[#0d0e12] to-[#07080a] border transition-colors select-none ${
          isHovered
            ? "border-white/30 shadow-[0_28px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_-5px_rgba(255,255,255,0.08)]"
            : "border-white/10 shadow-[0_14px_34px_-10px_rgba(0,0,0,0.75)]"
        }`}
      >
        {/* Specular lighting reflection (tracks cursor in 3D) */}
        {!shouldReduceMotion && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-30"
            style={{
              background: `radial-gradient(circle 380px at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, ${glare.opacity}), transparent 70%)`,
              mixBlendMode: "screen",
            }}
          />
        )}

        {/* Top header plate */}
        <div
          className="flex items-center justify-between gap-2 mb-3"
          style={
            !shouldReduceMotion
              ? { transform: "translateZ(18px)" }
              : undefined
          }
        >
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[10px] font-mono tracking-wider uppercase text-neutral-300">
            <ShieldCheck className="w-3.5 h-3.5 text-neutral-200" />
            <span>Verified</span>
          </div>
          <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* 3D Framed Certificate Matting */}
        <div
          className="relative w-full aspect-[4/3] sm:aspect-[1.38/1] rounded-xl overflow-hidden bg-[#060709] border border-white/[0.08] flex items-center justify-center p-2.5 sm:p-3"
          style={
            !shouldReduceMotion
              ? {
                  transform: "translateZ(24px)",
                  boxShadow: "inset 0 3px 12px rgba(0, 0, 0, 0.7)",
                }
              : undefined
          }
        >
          {/* Subtle paper grid/matting vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_75%)]" />

          {/* Actual Certificate Image - 100% UNTOUCHED ASPECT RATIO (NEVER CROPPED) */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.65)] transition-transform duration-500 group-hover:scale-[1.03]"
              priority={index < 3}
            />
          </div>

          {/* Glass sheen highlight */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />

          {/* Quick zoom badge on hover */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] pointer-events-none">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 text-white border border-white/20 text-xs font-semibold tracking-wide shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <ZoomIn className="w-3.5 h-3.5" />
              Preview
            </span>
          </div>
        </div>

        {/* Lower Info Plate */}
        <div
          className="mt-3.5 space-y-1.5"
          style={
            !shouldReduceMotion
              ? { transform: "translateZ(20px)" }
              : undefined
          }
        >
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-sm sm:text-base font-bold text-white tracking-tight line-clamp-1 group-hover:text-white transition-colors">
              {item.title}
            </h4>
            <Maximize2 className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white shrink-0 mt-1 transition-colors" />
          </div>
          <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

interface CertificateLightboxProps {
  certificates: Project[];
  currentIndex: number;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function CertificateLightbox({
  certificates,
  currentIndex,
  onClose,
  onSelectIndex,
}: CertificateLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cert = certificates[currentIndex];
  const total = certificates.length;

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onSelectIndex((currentIndex - 1 + total) % total);
  }, [currentIndex, onSelectIndex, total]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onSelectIndex((currentIndex + 1) % total);
  }, [currentIndex, onSelectIndex, total]);

  useEffect(() => {
    setTilt({ x: 0, y: 0 });
  }, [cert?.id, isZoomed]);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || isZoomed) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      setTilt({
        x: Number(((0.5 - py) * 14).toFixed(2)),
        y: Number(((px - 0.5) * 14).toFixed(2)),
      });
    },
    [shouldReduceMotion, isZoomed],
  );

  const handlePointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, handlePrev, handleNext]);

  if (!cert) return null;

  const isExternalLink =
    cert.href &&
    (cert.href.startsWith("http://") || cert.href.startsWith("https://"));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
      role="dialog"
      aria-modal="true"
      aria-label={`Certificate preview: ${cert.title}`}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl select-none"
      onClick={onClose}
    >
      {/* Top action toolbar */}
      <div
        className="absolute top-3 sm:top-6 inset-x-4 sm:inset-x-8 flex items-center justify-between z-30 pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="label-mono px-3 py-1.5 rounded-full bg-white/10 text-white text-xs border border-white/15 backdrop-blur-md">
            {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-neutral-400">
            Use ← → arrows to browse
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsZoomed(!isZoomed)}
            aria-label={isZoomed ? "Reset zoom" : "Zoom in"}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            {isZoomed ? (
              <ZoomOut className="w-4 h-4" />
            ) : (
              <ZoomIn className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close certificate preview"
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navigation: Prev button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
        }}
        aria-label="Previous certificate"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Main stage with image and caption */}
      <motion.div
        key={cert.id}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{ duration: 0.28, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl flex flex-col items-center max-h-[90vh] my-auto"
      >
        {/* Certificate Display Screen */}
        <div
          className={`relative w-full flex items-center justify-center transition-all duration-300 ${
            isZoomed
              ? "max-h-[82vh] overflow-auto cursor-zoom-out"
              : "max-h-[68vh] sm:max-h-[72vh] cursor-zoom-in"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <motion.div
            className={`relative flex items-center justify-center transition-all duration-300 ${
              isZoomed
                ? "w-[125%] h-[125%] min-h-[700px]"
                : "w-full h-[52vh] sm:h-[62vh]"
            }`}
            style={{ perspective: "1400px" }}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            animate={
              shouldReduceMotion || isZoomed
                ? undefined
                : { y: [0, -6, 0] }
            }
            transition={
              shouldReduceMotion || isZoomed
                ? undefined
                : { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <div
              className="relative w-full h-full"
              style={{
                transform: shouldReduceMotion || isZoomed
                  ? undefined
                  : `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.12s ease-out",
                willChange: "transform",
              }}
            >
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                quality={100}
                sizes="(max-width: 1200px) 96vw, 1200px"
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Caption and external credential verification */}
        <div className="mt-4 w-full max-w-3xl px-5 py-4 rounded-xl bg-neutral-900/90 border border-white/10 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1">
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              {cert.title}
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed max-w-xl">
              {cert.description}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {cert.href && (
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-neutral-950 hover:bg-neutral-200 transition-colors text-xs font-bold uppercase tracking-wider shadow-md"
              >
                <span>{isExternalLink ? "Verify Online" : "View Full File"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Navigation: Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        aria-label="Next certificate"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </motion.div>
  );
}

interface CertificateShowcaseProps {
  certificates: Project[];
}

export default function CertificateShowcase({
  certificates,
}: CertificateShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="space-y-6">
      {/* 3D Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {certificates.map((cert, i) => (
          <Certificate3DCard
            key={cert.id}
            item={cert}
            index={i}
            total={certificates.length}
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>

      {/* Interactive Lightbox Preview - portaled to body to escape transformed ancestors */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedIndex !== null && (
              <CertificateLightbox
                certificates={certificates}
                currentIndex={selectedIndex}
                onClose={() => setSelectedIndex(null)}
                onSelectIndex={setSelectedIndex}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
