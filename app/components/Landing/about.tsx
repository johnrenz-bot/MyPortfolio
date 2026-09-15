"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { HERO_DATA } from "../../../data/hero";

export default function About() {
  return (
    <div className="relative w-full bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 overflow-x-hidden antialiased selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300 flex flex-col justify-center">
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-16">
        {/* About Intro Section */}
        <section className="space-y-8">
          <div className="space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-500 dark:text-neutral-400"
            >
              Background &amp; Profile
            </motion.p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter text-neutral-900 dark:text-white max-w-4xl leading-[0.95]">
              About &amp; Experience
            </h2>
            <p className="text-lg sm:text-xl font-medium text-neutral-600 dark:text-neutral-300 max-w-3xl">
              Full-Stack Developer with practical experience in frontend architecture, backend systems, UI/UX engineering, and software quality assurance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="md:col-span-2">
              <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal">
                Graduated with a Bachelor of Science in Information Technology from STI College, building hands-on experience in full-stack web applications, UI/UX systems design, and collaborative engineering workflows. Completed multiple internships spanning corporate operations, apparel e-commerce platforms, and mobile application QA testing.
              </p>
            </div>
            <div className="space-y-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
              {[
                { icon: <FaMapMarkerAlt />, value: HERO_DATA.location, href: null },
                { icon: <FaEnvelope />, value: HERO_DATA.email, href: `mailto:${HERO_DATA.email}` },
                { icon: <FaPhone />, value: HERO_DATA.phone, href: `tel:${HERO_DATA.phone}` },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800/80 flex-shrink-0">
                    {item.icon}
                  </span>
                  {item.href ? (
                    <a href={item.href} className="hover:underline truncate">{item.value}</a>
                  ) : (
                    <span className="truncate">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}