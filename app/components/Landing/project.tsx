"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiPhp,
  SiJavascript,
  SiReact,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiTypescript,
  SiNextdotjs,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
  SiAdobecreativecloud,
  SiGit,
  SiHostinger,
  SiVercel,
  SiXampp,
  SiSap
} from "react-icons/si";
import { FaJava, FaFilePowerpoint } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";

type Item = {
  id: string;
  title: string;
  href: string;
  image: string;
  description: string;
  techStack?: string[];
  github?: string;
  uiTools?: string[];
};

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const WEB_PROJECTS: Item[] = [
  {
    id: "capstone",
    title: "Groove (Capstone Project)",
    href: "/Groove",
    image: "/Image/Groove.png",
    description: "A Bulacan all-in-one performing arts hub with smart chat support.",
    techStack: ["React", "Next.js", "Tailwind", "Laravel", "MySQL", "Prisma"],
    github: "https://github.com/johnrenz-bot/groove"
  },
  {
    id: "w1",
    title: "Simon Game",
    href: "https://simon-game2-gamma.vercel.app/",
    image: "/Image/Simon.png",
    description: "Classic Simon memory game with animations and sound effects.",
    techStack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/johnrenz-bot/simon-game"
  },
  {
    id: "w2",
    title: "Weeknd Soundtrip",
    href: "https://weeknd-soundtrip.vercel.app/",
    image: "/Image/WeekndSoundtrip.png",
    description: "Interactive music experience inspired by The Weeknd.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/johnrenz-bot/weeknd-soundtrip"
  },
  {
    id: "w3",
    title: "DinoVerse",
    href: "https://dinoverse-buce.vercel.app/",
    image: "/Image/Dinoverse.png",
    description: "Educational dinosaur exploration web app.",
    techStack: ["React", "Next.js", "CSS"],
    github: "https://github.com/johnrenz-bot/dinoverse"
  },
  {
    id: "w4",
    title: "EduGuide",
    href: "https://edu-guide-three.vercel.app/",
    image: "/Image/EduGuide.png",
    description: "Educational platform to guide students through courses.",
    techStack: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/johnrenz-bot/eduguide"
  },
  {
    id: "w5",
    title: "Kiyoto",
    href: "https://kiyoto.vercel.app/",
    image: "/Image/Kiyoto.png",
    description: "Personal portfolio website with interactive UI.",
    techStack: ["React", "Tailwind", "Next.js"],
    github: "https://github.com/johnrenz-bot/kiyoto"
  },
  {
    id: "w6",
    title: "Windbreaker",
    href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/",
    image: "/Image/windbreaker.png",
    description: "A digital home for street riders to track progress and connect with crews.",
    techStack: ["Next.js", "Tailwind"],
    github: "https://github.com/johnrenz-bot/Windbreaker"
  }
];

const UI_PROJECTS: Item[] = [
  { id: "ui1", title: "The Price of Sugar", href: "", image: "/Image/UI/1.jpg", uiTools: ["Canva"], description: "" },
  { id: "ui2", title: "Clay Cuneiform Tables", href: "", image: "/Image/UI/2.jpg", uiTools: ["Canva"], description: "" },
  { id: "ui3", title: "Weeknd UI Concept", href: "", image: "/Image/UI/3.jpg", uiTools: ["Canva"], description: "" },
  { id: "ui4", title: "XREAPER Hoodie", href: "", image: "/Image/UI/4.png", uiTools: ["Figma"], description: "" },
  { id: "ui5", title: "BATTLE", href: "", image: "/Image/UI/5.jpg", uiTools: ["Figma"], description: "" },
  { id: "ui6", title: "Mazda", href: "", image: "/Image/UI/6.png", uiTools: ["Figma"], description: "" }
];

const CERTS: Item[] = [
  { id: "c1", title: "Accenture – Skills to Succeed", href: "/Image/Certificate/S2.jpg", image: "/Image/Certificate/S2.jpg", description: "" },
  { id: "c2", title: "Java Programming Certificate", href: "/Image/Certificate/java.jpg", image: "/Image/Certificate/java.jpg", description: "" },
  { id: "c3", title: "Oracle Certified", href: "/Image/Certificate/oracle.jpg", image: "/Image/Certificate/oracle.jpg", description: "" }
];

const TECH_DATA: Record<string, Tech[]> = {
  Frontend: [
    { name: "HTML", Icon: SiHtml5 },
    { name: "CSS", Icon: SiCss3 },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Bootstrap", Icon: SiBootstrap },
    { name: "JavaScript", Icon: SiJavascript },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React", Icon: SiReact },
    { name: "Next.js", Icon: SiNextdotjs }
  ],
  Backend: [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Express", Icon: SiExpress },
    { name: "PHP", Icon: SiPhp },
    { name: "Laravel", Icon: SiLaravel },
    { name: "Java", Icon: FaJava },
    { name: "C#", Icon: TbBrandCSharp }
  ],
  Database: [
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MySQL", Icon: SiMysql },
    { name: "Prisma", Icon: SiPrisma },
    { name: "XAMPP", Icon: SiXampp }
  ],
  Enterprise: [
    { name: "SAP", Icon: SiSap }
  ],
  Design: [
    { name: "Figma", Icon: SiFigma },
    { name: "Canva", Icon: SiCanva },
    { name: "Adobe CC", Icon: SiAdobecreativecloud },
    { name: "Photoshop", Icon: SiAdobephotoshop },
    { name: "PowerPoint", Icon: FaFilePowerpoint }
  ],
  Development: [
    { name: "VS Code", Icon: DiVisualstudio },
    { name: "Git", Icon: SiGit },
    { name: "GitHub", Icon: SiGithub },
    { name: "Vercel", Icon: SiVercel },
    { name: "Hostinger", Icon: SiHostinger }
  ]
};

const CARD_STYLE = "shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5";

export default function PortfolioSection() {
  const [tab, setTab] = useState<"projects" | "tech" | "cert">("projects");
  const [selectedUI, setSelectedUI] = useState<Item | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedUI && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedUI]);

  return (
    <section className="w-full flex justify-center py-20 bg-[var(--bg)] text-[var(--text)]">
      <div className="w-full max-w-6xl px-6 space-y-16">
        <nav className="flex justify-center gap-8 md:gap-16 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase border-b border-[var(--text)]/10 pb-4">
          {(["projects", "tech", "cert"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative px-4 transition-all duration-300 ${tab === t ? "text-[var(--text)]" : "text-[var(--text)]/40 hover:text-[var(--text)]"}`}
            >
              {t}
              {tab === t && <span className="absolute -bottom-[18px] left-0 w-full h-1 bg-[var(--text)] rounded-t-full" />}
            </button>
          ))}
        </nav>

        {tab === "projects" && (
          <div className="space-y-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                Featured Work <span className="h-px flex-1 bg-[var(--text)]/10" />
              </h2>
              <Link href={WEB_PROJECTS[0].href}>
                <div className={`relative h-[450px] rounded-[2rem] overflow-hidden group ${CARD_STYLE}`}>
                  <Image src={WEB_PROJECTS[0].image} alt={WEB_PROJECTS[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-10">
                    <span className="w-fit px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-4">
                      Primary Project
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-3">{WEB_PROJECTS[0].title}</h3>
                    <p className="max-w-2xl text-white/70 mb-6 line-clamp-2">{WEB_PROJECTS[0].description}</p>
                    <div className="flex flex-wrap gap-2">
                      {WEB_PROJECTS[0].techStack?.map((tech) => (
                        <span key={tech} className="text-[10px] px-3 py-1 bg-white/10 rounded-lg text-white/90 backdrop-blur-sm border border-white/10 uppercase font-semibold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8">Web Systems & Frontend</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {WEB_PROJECTS.slice(1).map((p) => (
                  <Link key={p.id} href={p.href}>
                    <div className={`relative h-[280px] rounded-3xl overflow-hidden group ${CARD_STYLE}`}>
                      <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                        <div className="flex flex-wrap gap-1.5">
                          {p.techStack?.map((tech) => (
                            <span key={tech} className="text-[9px] px-2 py-0.5 bg-white/20 rounded-md text-white font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-8">UI & Visual Design</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {UI_PROJECTS.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedUI(p)}
                    className={`relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group ${CARD_STYLE}`}
                  >
                    <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6 text-white">
                      <h3 className="font-bold text-sm mb-3">{p.title}</h3>
                      <div className="flex gap-2">
                        {p.uiTools?.map((tool) => (
                          <span key={tool} className="text-[10px] px-2 py-1 bg-white/20 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                            {tool === "Figma" ? <SiFigma size={12} /> : <SiCanva size={12} />} {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {tab === "tech" && (
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
            {Object.entries(TECH_DATA).map(([group, list]) => (
              <div key={group} className="space-y-6">
                <h3 className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40 px-2">{group}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                  {list.map((t) => (
                    <div
                      key={t.name}
                      className="group p-6 rounded-2xl bg-[var(--text)]/5 hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all duration-300 flex flex-col items-center gap-4 border border-[var(--text)]/5"
                    >
                      <t.Icon className="text-3xl group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-[10px] font-bold uppercase tracking-wider">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "cert" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-500">
            {CERTS.map((c) => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer" className={`group rounded-3xl overflow-hidden bg-black/5 ${CARD_STYLE}`}>
                <div className="relative h-[220px]">
                  <Image src={c.image} alt={c.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <div className="p-6 text-xs font-bold tracking-wider text-center uppercase">
                  {c.title}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>

      {selectedUI && (
        <div
          ref={modalRef}
          onClick={() => setSelectedUI(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
        >
          <div className="relative w-full max-w-4xl max-h-[85vh]">
            <Image
              src={selectedUI.image}
              alt={selectedUI.title}
              width={1600}
              height={1000}
              className="rounded-xl shadow-2xl object-contain w-full h-full"
            />
            <button className="absolute -top-12 right-0 text-white text-[10px] font-black tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
              Close [x]
            </button>
          </div>
        </div>
      )}
    </section>
  );
}