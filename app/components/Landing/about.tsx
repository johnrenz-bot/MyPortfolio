"use client";

import { FaGraduationCap, FaCode, FaLaptopCode, FaHistory } from "react-icons/fa";

export default function About() {
  const ABOUT_DATA = {
    name: "John Renz Bandianon",
    role: "Frontend Developer & UI/UX Designer",
    description: [
      "I’m an IT student with a strong interest in frontend web development and UI/UX Design. I enjoy creating clean, responsive, and user-friendly interfaces, focusing on both functionality and visual design to deliver a good user experience.",
      "I am currently strengthening my skills through academic projects such as my Capstone and individual builds, which help improve my problem-solving and development workflow. While my main focus is frontend development, I also have basic experience with backend concepts and am eager to learn more through hands-on experience as an IT intern."
    ]
  };

  const ACADEMIC = [
    {
      institution: "STI College San Jose Del Monte",
      period: "2022 - Present",
      subtext: "Bachelor of Science in Information Technology",
      icon: <FaGraduationCap />
    },
    {
      institution: "Prenza National Senior High School",
      period: "2020 - 2022",
      subtext: "Vocational / Technical",
      icon: <FaHistory />
    },
  ];

  const EXPERIENCE = [
    {
      title: "Capstone Project",
      period: "2024 – 2025",
      subtext: "STI San Jose Del Monte • Lead Developer",
      details: "Full-stack development for performing arts hub.",
      icon: <FaLaptopCode />
    },
    {
      title: "First Code Experience",
      period: "2022",
      subtext: "The Beginning",
      details: "Wrote my first line of code and discovered my passion for building web apps.",
      icon: <FaCode />
    },
  ];

  const wrapperShadow = "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_30px_rgba(0,0,0,0.12)] border border-white/5";
  const cardStyle = "group relative rounded-3xl p-8 flex flex-col gap-3 bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:-translate-y-1";

  return (
    <main className="min-h-screen w-full flex flex-col gap-16 px-4 sm:px-6 lg:px-10 py-24 bg-[var(--bg)] text-[var(--text)]">
      
      <section className="w-full flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className={`w-full max-w-6xl rounded-[2.5rem] p-10 sm:p-16 flex flex-col gap-8 text-center ${wrapperShadow}`}>
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-black tracking-tighter">
              {ABOUT_DATA.name}
            </h1>
            <p className="text-xs sm:text-sm font-bold tracking-[0.4em] uppercase opacity-50">
              {ABOUT_DATA.role}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {ABOUT_DATA.description.map((text, i) => (
              <p key={i} className="text-base sm:text-lg lg:text-xl leading-relaxed opacity-80">
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center pb-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="flex flex-col gap-8">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase opacity-40 text-center">
              Academy
            </h2>
            <div className="flex flex-col gap-6">
              {ACADEMIC.map((item, index) => (
                <div key={index} className={cardStyle}>
                  <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-lg sm:text-xl font-bold leading-tight">
                      {item.institution}
                    </p>
                    <p className="text-sm font-medium opacity-70 mt-1">{item.subtext}</p>
                    <p className="text-[10px] font-black tracking-widest uppercase mt-4 opacity-50 italic">
                      {item.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className="text-xs font-black tracking-[0.3em] uppercase opacity-40 text-center">
              Experience
            </h2>
            <div className="flex flex-col gap-6">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className={cardStyle}>
                  <span className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
                    {exp.icon}
                  </span>
                  <div>
                    <p className="text-lg sm:text-xl font-bold leading-tight">
                      {exp.title}
                    </p>
                    <p className="text-sm font-medium opacity-70 mt-1">{exp.subtext}</p>
                    <p className="text-xs opacity-60 mt-2 line-clamp-2">{exp.details}</p>
                    <p className="text-[10px] font-black tracking-widest uppercase mt-4 opacity-50 italic">
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}