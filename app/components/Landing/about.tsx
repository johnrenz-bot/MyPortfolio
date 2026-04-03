"use client";

import React, { useEffect, useRef } from "react";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaHistory,
  FaPaintBrush,
  FaTerminal,
  FaArrowRight,
  FaLayerGroup,
  FaBezierCurve,
} from "react-icons/fa";
import { FaFigma, FaReact } from "react-icons/fa";
import { SiAdobephotoshop, SiAdobeillustrator, SiCanva, SiNextdotjs } from "react-icons/si";

const ABOUT_DATA = {
  role: "UI / UX Designer • Full-Stack Developer • Graphic Designer",
  description: [
    "I'm a BSIT student from STI College San Jose Del Monte, Bulacan with a strong interest in frontend development, UI/UX design, and graphic design.",
    "Through my Capstone project, I gained hands-on experience as a full-stack developer/programmer, building a functional system while improving my development and problem-solving skills.",
    "Alongside my academic work, I also create UI/UX and graphic design side projects focused on clean visuals and user-friendly interfaces. I use tools like Figma, Canva, Adobe Photoshop, and Adobe Illustrator to design UI concepts, layouts, and visual experiences that make digital systems intuitive and engaging.",
  ],
  goals: [
    "Create seamless user experiences by merging aesthetics with functional logic.",
    "Continuously evolve as a developer by mastering modern frontend frameworks.",
    "Bridge the communication gap between technical architecture and visual design.",
  ],
};

const ACADEMIC = [
  {
    institution: "STI College SJDM",
    period: "2022 – Present",
    subtext: "BS Information Technology",
    bio: "Currently refining my technical expertise in software architecture and advanced systems. My academic focus is on mastering the full development lifecycle to support my professional work in UI/UX and full-stack implementation.",
    icon: <FaGraduationCap className="text-4xl text-zinc-700" />,
  },
  {
    institution: "Prenza National SHS",
    period: "2020 – 2022",
    subtext: "TVL Track • ICT",
    bio: "Completed my Senior High School education specializing in Information and Communications Technology, establishing a strong technical foundation before entering higher education.",
    icon: <FaHistory className="text-4xl text-zinc-700" />,
  },
];

const EXPERIENCE = [
  {
    title: "Graphic & UI/UX Designer",
    period: "Present",
    subtext: "Alpha Centauri Garments • Internship",
    details: "Currently handling the brand's visual identity by designing streetwear-focused assets and improving the E-commerce UI to create a more seamless shopping experience for users.",
    icon: <FaPaintBrush className="text-4xl text-zinc-700" />,
  },
  {
    title: "Full-Stack Developer & UI Designer",
    period: "2025",
    subtext: "Capstone Project • Groove Hub",
    details: "Led the creation of a performing arts ecosystem. I architected the full-stack system using Laravel and MySQL while designing the entire user experience in Figma. The platform features role-based workflows and real-time messaging through a responsive Tailwind CSS interface.",
    icon: <FaLaptopCode className="text-4xl text-zinc-700" />,
  },
  {
    title: "The First Program",
    period: "2022",
    subtext: "First Year College • Java Foundation",
    details: "Started my programming journey with Java, where I first learned the power of logic and object-oriented principles. This served as my gateway into building more complex software systems.",
    icon: <FaTerminal className="text-4xl text-zinc-700" />,
  },
  {
    title: "Technical Foundation",
    period: "2020 – 2022",
    subtext: "TVL-ICT • Grade 11 & 12",
    details: "Built a solid technical base during Senior High School, covering everything from computer systems servicing to the basics of digital logic and hardware diagnostics.",
    icon: <FaCode className="text-4xl text-zinc-700" />,
  },
];

const TOOLS = [
  {
    category: "Design Tools",
    items: [
      {
        icon: <FaFigma className="text-2xl text-indigo-600 mt-1" />,
        title: "Figma",
        subtext: "UI/UX Design",
        details:
          "I map out the user journey, wireframe interfaces, and prototype interactions so that every element feels intuitive before development even begins.",
      },
      {
        icon: <SiAdobephotoshop className="text-2xl text-blue-600 mt-1" />,
        title: "Photoshop",
        subtext: "Visual Compositions",
        details:
          "I craft visuals, edit images, and layer graphics to bring concepts to life, ensuring every poster and digital composition tells the right story.",
      },
      {
        icon: <SiAdobeillustrator className="text-2xl text-orange-600 mt-1" />,
        title: "Illustrator",
        subtext: "Vector Graphics",
        details:
          "I build logos and scalable graphics that stay crisp across any platform, shaping the visual identity of projects I design.",
      },
      {
        icon: <SiCanva className="text-2xl text-green-600 mt-1" />,
        title: "Canva",
        subtext: "Presentations",
        details:
          "I quickly structure presentations and visual layouts, turning ideas into organized, polished visuals that communicate effectively.",
      },
    ],
  },
  {
    category: "Tech Stack",
    items: [
      {
        icon: <FaCode className="text-2xl text-zinc-800 mt-1" />,
        title: "VS Code",
        subtext: "Development Environment",
        details:
          "I keep my code clean, manage multiple projects, and debug efficiently, making development smooth and organized.",
      },
      {
        icon: <FaLaptopCode className="text-2xl text-red-600 mt-1" />,
        title: "Laravel",
        subtext: "Backend Framework",
        details:
          "I structure backend logic, connect databases, and integrate Tailwind CSS, turning complex requirements into seamless, functional applications.",
      },
      {
        icon: <FaReact className="text-2xl text-cyan-600 mt-1" />,
        title: "React JS",
        subtext: "Frontend Interfaces",
        details:
          "I create interactive components and dynamic interfaces, letting users experience smooth transitions and responsive layouts in real time.",
      },
      {
        icon: <SiNextdotjs className="text-2xl text-zinc-700 mt-1" />,
        title: "Next JS",
        subtext: "Modern Frontend",
        details:
          "I optimize frontend performance, manage routing efficiently, and deliver modern web experiences that feel fast and polished.",
      },
    ],
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".aos");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting ? entry.target.classList.add("aos-in") : entry.target.classList.remove("aos-in")
        ),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const renderCards = (data: typeof EXPERIENCE | typeof TOOLS[0]["items"]) =>
    data.map((item, i) => (
      <div
        key={i}
        className={`aos sd${Math.min(i + 1, 5)} exp-row exp-grid group relative border-t border-black/10 hover:bg-black/[0.03] transition-colors py-10 px-6 rounded-lg`}
      >
        <div className="flex flex-col justify-between py-1 gap-2">
          <div className="flex items-center gap-4">
            {"icon" in item && item.icon && item.icon}
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight flex items-center gap-3">
                {"title" in item ? item.title : ""}
                <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </h3>
              {"subtext" in item && <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-700">{item.subtext}</span>}
            </div>
          </div>
        </div>
        {"details" in item && <p className="mt-4 text-lg font-medium leading-relaxed text-[#1a1a1a] max-w-2xl">{item.details}</p>}
      </div>
    ));

  return (
    <div ref={containerRef} className="relative min-h-screen text-black font-sans selection:bg-black selection:text-zinc-100 overflow-hidden">
      <style jsx global>{`
        .aos { opacity: 0; transform: translateY(36px); filter: blur(5px); transition: opacity 1s cubic-bezier(.22,1,.36,1), transform 1s cubic-bezier(.22,1,.36,1), filter 1s cubic-bezier(.22,1,.36,1); }
        .aos-in { opacity: 1; transform: translateY(0); filter: blur(0); }
        .sd1 { transition-delay: .05s; } .sd2 { transition-delay: .15s; } .sd3 { transition-delay: .25s; } .sd4 { transition-delay: .35s; } .sd5 { transition-delay: .45s; }
        .exp-grid { display: grid; grid-template-columns: 4fr 8fr; gap: 32px; }
        @media(max-width: 479px) { .exp-grid { grid-template-columns: 1fr; gap: 16px; } }
      `}</style>

      <main className="max-w-6xl mx-auto flex flex-col gap-32 p-8">

        <section className="flex flex-col items-start space-y-8">
          <div className="aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" />
            <span className="text-lg md:text-xl font-black tracking-[0.6em] uppercase text-zinc-900">ABOUT ME</span>
          </div>
          <h1 className="aos sd2 hero-h font-black leading-[0.8] tracking-tighter uppercase text-3xl md:text-5xl lg:text-6xl">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-black">Systems</span>
          </h1>
        </section>

        <section className="intro-grid border-t border-black/10 pt-16">
          <div className="aos sd1 flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 flex items-center gap-3">
              <span className="w-16 h-[2px] bg-black" /> Biography
            </div>
            <div className="flex gap-2 text-zinc-500">
              <FaLayerGroup />
              <FaBezierCurve />
            </div>
          </div>
          <div>
            {ABOUT_DATA.description.map((text, i) => (
              <p key={i} className={`aos sd${i + 2} desc-text font-medium leading-relaxed tracking-tight text-zinc-800 mb-6 last:mb-0 text-lg`}>
                {text}
              </p>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_DATA.goals.map((goal, i) => (
            <div key={i} className={`aos sd${i+1} p-6 border border-black/5 bg-black/[0.02] rounded-lg`}>
              <p className="text-lg font-bold uppercase mb-2">0{i+1}.</p>
              <p className="text-zinc-700 font-medium">{goal}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" /> Academic
          </div>
          <div className="grid md:grid-cols-2 gap-12">{ACADEMIC.map((item, i) => (
            <div key={i} className={`aos sd${i+1} flex flex-col gap-4`}>
              <div className="flex items-center gap-6 mb-4">{item.icon}<div className="h-[1px] flex-grow bg-black/10" /></div>
              <h3 className="text-2xl font-black uppercase">{item.institution}</h3>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-700">{item.subtext}</p>
              <span className="text-[10px] font-black tracking-[0.3em] text-zinc-900 uppercase">{item.period}</span>
              <p className="mt-4 text-zinc-800 font-medium leading-relaxed">{item.bio}</p>
            </div>
          ))}</div>
        </section>

        <section className="space-y-8">
          <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" /> Experience
          </div>
          <div className="space-y-4">{renderCards(EXPERIENCE)}</div>
        </section>

        {TOOLS.map((section, i) => (
          <section key={i} className="space-y-4">
            <h3 className="text-sm font-black tracking-widest uppercase">{section.category}</h3>
            {renderCards(section.items)}
          </section>
        ))}
      </main>
    </div>
  );
}