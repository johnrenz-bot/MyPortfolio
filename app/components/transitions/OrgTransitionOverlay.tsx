"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { OrganizationTransition } from "./organizations";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Presentational organization welcome screen. All branding comes from the
 * registry entry it receives, so adding a community page never requires a new
 * loading-screen implementation.
 */
export function OrgTransitionOverlay({
  organization,
}: {
  organization: OrganizationTransition;
}) {
  const shouldReduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: shouldReduceMotion ? 0.12 : 0.38,
        ease: EASE,
      }}
      className="fixed inset-0 z-[10000] touch-none select-none overflow-hidden bg-[#050608] text-white"
      role="status"
      aria-live="polite"
      aria-label={`Entering ${organization.name}`}
    >
      {/* Faint architectural grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:34px_34px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]"
      />

      {/* Soft center light */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(115vw,900px)] w-[min(115vw,900px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.025)_38%,transparent_66%)]"
      />

      {/* Cinematic edge traces */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.95,
            delay: shouldReduceMotion ? 0 : 0.12,
            ease: EASE,
          }}
          className="absolute left-0 top-[27%] h-px w-full origin-left bg-gradient-to-r from-transparent via-white/35 to-transparent"
        />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.95,
            delay: shouldReduceMotion ? 0 : 0.22,
            ease: EASE,
          }}
          className="absolute left-0 bottom-[27%] h-px w-full origin-right bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.18,
            ease: EASE,
          }}
          className="absolute left-[18%] top-0 h-full w-px origin-top bg-gradient-to-b from-transparent via-white/12 to-transparent"
        />
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            delay: shouldReduceMotion ? 0 : 0.26,
            ease: EASE,
          }}
          className="absolute right-[18%] top-0 h-full w-px origin-bottom bg-gradient-to-b from-transparent via-white/12 to-transparent"
        />
      </div>

      <div className="relative z-10 flex min-h-full flex-col items-center justify-center px-6 pb-20 pt-16 text-center">
        {/* Logo composition */}
        <div className="relative mb-8 flex h-44 w-44 items-center justify-center sm:mb-10 sm:h-56 sm:w-56">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.08,
              ease: EASE,
            }}
            className="absolute inset-0 rounded-full border border-white/10"
          />

          {!shouldReduceMotion && (
            <motion.div
              aria-hidden
              animate={{ rotate: 360 }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-dashed border-white/[0.09]"
            />
          )}

          <div
            aria-hidden
            className="absolute inset-8 rounded-full bg-white/[0.035] blur-2xl"
          />

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    scale: 0.88,
                    filter: "grayscale(1) brightness(0.3)",
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              filter: "grayscale(0) brightness(1)",
            }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 1.15,
              delay: shouldReduceMotion ? 0 : 0.18,
              ease: EASE,
            }}
            className="relative h-32 w-32 sm:h-40 sm:w-40"
          >
            <Image
              src={organization.logo}
              alt={organization.logoAlt}
              fill
              sizes="(max-width: 640px) 128px, 160px"
              className="object-contain drop-shadow-[0_0_38px_rgba(255,255,255,0.18)]"
              priority
            />
          </motion.div>

          {/* Single light sweep, clipped to the logo, revealing its true colors */}
          {!shouldReduceMotion && (
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full sm:h-40 sm:w-40"
            >
              <motion.div
                initial={{ x: "-180%" }}
                animate={{ x: "180%" }}
                transition={{ duration: 1.05, delay: 0.62, ease: EASE }}
                className="absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/35 to-transparent blur-sm"
              />
            </div>
          )}
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0.01 : 0.65,
            delay: shouldReduceMotion ? 0 : 0.55,
            ease: EASE,
          }}
          className="relative z-10 max-w-xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/40">
            {organization.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-5xl">
            {organization.name}
          </h2>
          {organization.subtitle && (
            <p className="mt-2 text-sm tracking-wide text-white/45 sm:text-base">
              {organization.subtitle}
            </p>
          )}
        </motion.div>
      </div>

      {/* Journey progress line */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-white/10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 1.35,
            ease: "easeInOut",
          }}
          className="h-full origin-left bg-gradient-to-r from-white/20 via-white/70 to-white/20"
        />
      </div>
      <p className="absolute inset-x-0 bottom-5 text-center font-mono text-[9px] uppercase tracking-[0.36em] text-white/30">
        Preparing your visit
      </p>
    </motion.div>
  );
}
