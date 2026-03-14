  "use client";

  import { FaGraduationCap, FaCode, FaLaptopCode, FaHistory, FaPaintBrush } from "react-icons/fa";

  const ABOUT_DATA = {
    role: "    UI / UX Developer • Graphic Designer • Frontend Developer",
   description: [
  "I'm a BSIT student from STI College San Jose Del Monte, Bulacan with a strong interest in frontend development, UI/UX design, and graphic design. Through my Capstone project, I gained hands-on experience as a full-stack developer/programmer, building a functional system while improving my development and problem-solving skills.",
  
  "Alongside my academic work, I also create UI/UX and graphic design side projects focused on clean visuals and user-friendly interfaces. I use tools like Figma, Canva, Adobe Photoshop, and Adobe Illustrator to design UI concepts, layouts, and visual experiences that make digital systems intuitive and engaging."
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
      title: "Graphic Artist / Designer",
      period: "2025",
      subtext: "Alpha Centauri Garments Corporation",
      details: "Created graphic design assets and visual materials for garment products and branding.",
      icon: <FaPaintBrush />,
    },
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
        `}</style>

        <main className="min-h-screen flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden px-6 sm:px-12 py-20 gap-24">

          <section className="fu-1 flex flex-col items-center text-center gap-5 pt-8">
            <p className="text-[0.55rem] font-bold tracking-[0.4em] uppercase text-white/30">
              About Me
            </p>
          
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/50 max-w-sm">
              {ABOUT_DATA.role}
            </p>
            <div className="w-12 h-px bg-white opacity-15 mt-2" />
            <div className="max-w-2xl flex flex-col gap-5">
              {ABOUT_DATA.description.map((t, i) => (
                <p key={i} className="text-sm sm:text-[0.95rem] leading-loose text-white/60 tracking-wide">
                  {t}
                </p>
              ))}
            </div>
          </section>

          <section className="fu-2 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="flex flex-col gap-6">
              <p className="text-[0.55rem] font-bold tracking-[0.4em] uppercase text-white/30 text-center">
                Academy
              </p>
              {ACADEMIC.map((item, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-3 border border-white/[0.07] bg-[#0f0f0f] p-7 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-xl text-white/25 group-hover:text-white/70 transition-colors duration-300">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-snug tracking-wide text-white">
                      {item.institution}
                    </p>
                    <p className="text-xs text-white/50 mt-1 tracking-wide">
                      {item.subtext}
                    </p>
                    <p className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-white/30 mt-4 italic">
                      {item.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-[0.55rem] font-bold tracking-[0.4em] uppercase text-white/30 text-center">
                Experience
              </p>
              {EXPERIENCE.map((exp, i) => (
                <div
                  key={i}
                  className="group flex flex-col gap-3 border border-white/[0.07] bg-[#0f0f0f] p-7 hover:-translate-y-1 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-xl text-white/25 group-hover:text-white/70 transition-colors duration-300">
                    {exp.icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-snug tracking-wide text-white">
                      {exp.title}
                    </p>
                    <p className="text-xs text-white/50 mt-1 tracking-wide">
                      {exp.subtext}
                    </p>
                    <p className="text-xs text-white/40 mt-2 leading-relaxed">
                      {exp.details}
                    </p>
                    <p className="text-[0.55rem] font-bold tracking-[0.3em] uppercase text-white/30 mt-4 italic">
                      {exp.period}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </section>

          <section className="fu-3 flex flex-col items-center gap-3 pb-8">
            <div className="w-12 h-px bg-white opacity-10" />
            <p className="font-[Cormorant_Garamond] text-[clamp(1rem,2.5vw,1.4rem)] font-light tracking-[0.2em] uppercase text-white/20 text-center max-w-lg leading-loose">
              Crafting experiences, one component at a time.
            </p>
            <div className="w-12 h-px bg-white opacity-10" />
          </section>

        </main>
      </>
    );
  }