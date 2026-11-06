"use client";

import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";
import VisitorCounter from "../ui/VisitorCounter";

const PERSONAL = {
  address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
  phone: "+63 966 798 7702",
  email: "johnrenzbandianon9@gmail.com",
};

const DETAILS = [
  {
    label: "Location",
    value: PERSONAL.address,
    href: null,
    Icon: HiLocationMarker,
  },
  {
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone}`,
    Icon: MdPhone,
  },
  {
    label: "Direct Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    Icon: MdEmail,
  },
];

export default function ContactSection() {
  return (
    <div className="relative w-full bg-transparent transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 flex flex-col items-center">
        <div className="reveal flex flex-col items-center text-center gap-6 mb-16 sm:mb-20 max-w-2xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
            <span className="label-mono text-neutral-500 dark:text-neutral-400">
              Get in Touch
            </span>
            <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
          </div>
          <h2 className="heading-display text-5xl sm:text-7xl md:text-[6rem] text-neutral-950 dark:text-white uppercase leading-[0.85]">
            Reach
            <br />
            Out
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed font-medium">
            BSIT graduate open to full-time Web Developer,
            and IT roles across the Philippines and remotely. Let's build
            something great.
          </p>
        </div>

        <div className="w-full max-w-4xl grid sm:grid-cols-3 gap-4 sm:gap-6 mb-24">
          {DETAILS.map((d, index) => (
            <div
              key={d.label}
              className={`reveal delay-${(index % 3) + 1} h-full`}
            >
              {d.href ? (
                <a
                  href={d.href}
                  className="block h-full group outline-none rounded-2xl"
                >
                  <DetailBox d={d} />
                </a>
              ) : (
                <div className="group h-full">
                  <DetailBox d={d} />
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="reveal w-full border-t border-neutral-200 dark:border-neutral-800 pt-16 flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center gap-3">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 border border-neutral-900 dark:border-white hover:border-[#444444] dark:hover:border-[#444444] transition-all duration-300 rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:-translate-y-1"
            >
              <MdEmail className="text-xl" />
              <span className="text-sm font-bold uppercase tracking-[0.2em]">
                Drop an Email
              </span>
            </a>
            <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 select-all tracking-tight">
              {PERSONAL.email}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 text-neutral-900 dark:text-neutral-100">
            <VisitorCounter />

            <div className="flex items-center gap-3 opacity-75 hover:opacity-100 transition-opacity duration-300">
              <div className="relative w-8 h-8 shrink-0">
                <Image
                  src="/Image/Favicon/Favicon.png"
                  alt="Official Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>
              <div className="text-2xl font-black tracking-tighter uppercase italic">
                BANDIANON
              </div>
            </div>

            <p className="label-mono text-[9px] text-neutral-500">
              © {new Date().getFullYear()} John Renz Bandianon · All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

function DetailBox({ d }: { d: (typeof DETAILS)[0] }) {
  const isEmail = d.label === "Direct Email";
  return (
    <div className="p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 flex flex-col items-center text-center justify-center h-full gap-5 transition-all duration-300 rounded-2xl hover:border-[#444444] dark:hover:border-[#444444] hover:shadow-lg hover:-translate-y-1">
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white transition-transform duration-300 group-hover:scale-110 shadow-sm">
        <d.Icon className="text-2xl" />
      </div>
      <div className="space-y-1.5 w-full">
        <p className="label-mono text-neutral-500 dark:text-neutral-400">
          {d.label}
        </p>
        {isEmail ? (
          <p className="text-xs sm:text-[13px] font-mono font-medium text-neutral-800 dark:text-neutral-200 tracking-tight lowercase break-all">
            {d.value}
          </p>
        ) : (
          <p className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wide">
            {d.value}
          </p>
        )}
      </div>
    </div>
  );
}
