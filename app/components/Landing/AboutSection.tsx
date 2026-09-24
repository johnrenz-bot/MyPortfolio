"use client";

import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { HERO_DATA } from "../../../data/hero";

export default function AboutSection() {
  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5 reveal flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                Profile
              </span>
            </div>
            <h2 className="heading-section text-4xl sm:text-5xl lg:text-7xl text-neutral-950 dark:text-white">
              About &<br />
              Experience
            </h2>
          </div>

          <div className="lg:col-span-7 reveal delay-1 flex flex-col gap-8">
            <p className="text-xl sm:text-2xl text-neutral-900 dark:text-white font-medium leading-relaxed">
              Full-Stack Developer with practical experience in frontend
              architecture, backend systems, UI/UX engineering, and software
              quality assurance.
            </p>
            <div className="h-[1px] w-full bg-neutral-200 dark:bg-neutral-800" />
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  Graduated with a Bachelor of Science in Information Technology
                  from STI College, building hands-on experience in full-stack
                  web applications, UI/UX systems design, and collaborative
                  engineering workflows. Completed multiple internships spanning
                  corporate operations, apparel e-commerce platforms, and mobile
                  application QA testing.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  {
                    icon: <FaMapMarkerAlt />,
                    value: HERO_DATA.location,
                    href: null,
                  },
                  {
                    icon: <FaEnvelope />,
                    value: HERO_DATA.email,
                    href: `mailto:${HERO_DATA.email}`,
                  },
                  {
                    icon: <FaPhone />,
                    value: HERO_DATA.phone,
                    href: `tel:${HERO_DATA.phone}`,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-900 shrink-0">
                      {item.icon}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white truncate transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 truncate">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
