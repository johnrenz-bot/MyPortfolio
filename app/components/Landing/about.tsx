"use client";

import { FaGraduationCap, FaCode, FaLaptopCode, FaHistory } from "react-icons/fa";

const ABOUT_DATA = {
  name: "John Renz Bandianon",
  role: "Frontend Developer & UI/UX Designer",
  description: [
    "I'm an IT student with a strong passion for frontend web development and UI/UX design. I build clean, responsive, and user-friendly interfaces — balancing functionality with thoughtful visual design to create experiences that feel natural and polished.",
    "Through academic projects like my Capstone and personal builds, I've sharpened my problem-solving skills and development workflow. While frontend is my core focus, I've explored backend fundamentals and I'm eager to grow further through real-world internship experience.",
  ],
};

const ACADEMIC = [
  {
    institution: "STI College San Jose Del Monte",
    period: "2022 – Present",
    subtext: "Bachelor of Science in Information Technology",
    icon: <FaGraduationCap />,
  },
  {
    institution: "Prenza National Senior High School",
    period: "2020 – 2022",
    subtext: "Vocational / Technical",
    icon: <FaHistory />,
  },
];

const EXPERIENCE = [
  {
    title: "Capstone Project",
    period: "2024 – 2025",
    subtext: "STI San Jose Del Monte · Lead Developer",
    details: "Full-stack development for a performing arts hub — Groove.",
    icon: <FaLaptopCode />,
  },
  {
    title: "First Line of Code",
    period: "2022",
    subtext: "The Beginning",
    details: "Wrote my first HTML file and discovered a passion for building things on the web.",
    icon: <FaCode />,
  },
];

export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu-1 { animation: fadeUp 0.9s ease 0.05s forwards; opacity: 0; }
        .fu-2 { animation: fadeUp 0.9s ease 0.2s  forwards; opacity: 0; }
        .fu-3 { animation: fadeUp 0.9s ease 0.35s forwards; opacity: 0; }
        .fu-4 { animation: fadeUp 0.9s ease 0.5s  forwards; opacity: 0; }
      `}</style>

      <main className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e8e4dc] overflow-x-hidden px-6 sm:px-12 py-20 gap-24">

        {/* Hero */}
        <section className="fu-1 flex flex-col items-center text-center gap-5 pt-8">
          <p className="text-[0.55rem] font-bold tracking-[0.4em] uppercase opacity-30">About Me</p>
         
          <p className="text-xs font-bold tracking-[0.35em] uppercase opacity-40 max-w-sm">
            {ABOUT_DATA.role}
          </p>
          <div className="w-12 h-px bg-[#e8e4dc] opacity-20 mt-2" />
          <div className="max-w-2xl flex flex-col gap-5">
            {ABOUT_DATA.description.map((t, i) => (
              <p key={i} className="text-sm sm:text-base leading-loose opacity-55 tracking-wide">
                {t}
              </p>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="fu-2 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Academy */}
          <div className="flex flex-col gap-6">
            <p className="text-[0.55rem] font-bold tracking-[0.4em] uppercase opacity-30 text-center">Academy</p>
            {ACADEMIC.map((item, i) => (
              <div key={i} className="group flex flex-col gap-3 border border-[rgba(232,228,220,0.08)] bg-[#111] p-7 hover:-translate-y-1 hover:border-[rgba(232,228,220,0.18)] transition-all duration-300">
                <span className="text-xl opacity-25 group-hover:opacity-60 transition-opacity">{item.icon}</span>
                <div>
                  <p className="text-sm font-bold leading-snug tracking-wide">{item.institution}</p>
                  <p className="text-xs opacity-50 mt-1 tracking-wide">{item.subtext}</p>
                  <p className="text-[0.55rem] font-bold tracking-[0.3em] uppercase opacity-30 mt-4 italic">{item.period}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="flex flex-col gap-6">
            <p className="text-[0.55rem] font-bold tracking-[0.4em] uppercase opacity-30 text-center">Experience</p>
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="group flex flex-col gap-3 border border-[rgba(232,228,220,0.08)] bg-[#111] p-7 hover:-translate-y-1 hover:border-[rgba(232,228,220,0.18)] transition-all duration-300">
                <span className="text-xl opacity-25 group-hover:opacity-60 transition-opacity">{exp.icon}</span>
                <div>
                  <p className="text-sm font-bold leading-snug tracking-wide">{exp.title}</p>
                  <p className="text-xs opacity-50 mt-1 tracking-wide">{exp.subtext}</p>
                  <p className="text-xs opacity-40 mt-2 leading-relaxed">{exp.details}</p>
                  <p className="text-[0.55rem] font-bold tracking-[0.3em] uppercase opacity-30 mt-4 italic">{exp.period}</p>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Divider quote */}
        <section className="fu-3 flex flex-col items-center gap-3 pb-8">
          <div className="w-12 h-px bg-[#e8e4dc] opacity-15" />
          <p className="font-[Cormorant_Garamond] text-[clamp(1rem,2.5vw,1.4rem)] font-light tracking-[0.2em] uppercase opacity-20 text-center max-w-lg leading-loose">
            Crafting experiences, one component at a time.
          </p>
          <div className="w-12 h-px bg-[#e8e4dc] opacity-15" />
        </section>

      </main>
    </>
  );
}