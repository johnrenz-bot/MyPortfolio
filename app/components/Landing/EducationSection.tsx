"use client";

import { FaGraduationCap } from "react-icons/fa";
import { EDUCATION } from "../../../data/education";
import { CERTIFICATES } from "../../../data/certificates";
import type { Education } from "../../../types";

export default function EducationSection() {
  return (
    <div className="relative w-full bg-[#f9fafb] dark:bg-[#111111] transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="space-y-10 sm:space-y-12">
          <div className="reveal flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                Academic Foundation
              </span>
            </div>
            <h2 className="heading-section text-4xl sm:text-5xl text-neutral-950 dark:text-white">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {EDUCATION.map((edu: Education, index: number) => (
              <div
                key={index}
                className={`reveal delay-${index + 1} p-6 sm:p-8 bg-white dark:bg-[#171717] border border-neutral-200 dark:border-neutral-800 rounded-2xl`}
              >
                <div className="flex items-start gap-4 sm:gap-6 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white text-xl shrink-0">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-neutral-900 dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                      {edu.school}
                    </p>
                    <p className="label-mono text-neutral-500 dark:text-neutral-400">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10 sm:space-y-12">
          <div className="reveal flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                Credentials
              </span>
            </div>
            <h2 className="heading-section text-4xl sm:text-5xl text-neutral-950 dark:text-white">
              Certifications
            </h2>
          </div>

          <div className="grid gap-3 sm:gap-4">
            {CERTIFICATES.map((cert: string, index: number) => (
              <div
                key={index}
                className={`reveal delay-${(index % 4) + 1} p-4 sm:p-5 border border-neutral-200 dark:border-neutral-800 rounded-xl bg-white dark:bg-[#171717] flex items-center gap-4`}
              >
                <div className="w-2 h-2 bg-neutral-900 dark:bg-white rounded-full shrink-0" />
                <p className="text-sm font-bold text-neutral-800 dark:text-neutral-200 leading-snug">
                  {cert}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
