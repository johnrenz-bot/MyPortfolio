"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SiPhp, SiJavascript, SiReact, SiLaravel, SiHtml5, SiCss3,
  SiBootstrap, SiTailwindcss, SiGithub, SiNodedotjs, SiExpress,
  SiPostgresql, SiMysql, SiPrisma, SiTypescript, SiNextdotjs,
  SiFigma, SiCanva, SiAdobephotoshop, SiAdobeillustrator,
  SiGit, SiHostinger, SiVercel, SiXampp, SiSap
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

type Tech = { name: string; Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string };

const WEB_PROJECTS: Item[] = [
  { id: "capstone", title: "Groove (Capstone Project)", href: "/Groove", image: "/Image/Groove.png", description: "A Bulacan all-in-one performing arts hub with smart chat support.", techStack: ["React", "Next.js", "Tailwind", "Laravel", "MySQL", "Prisma"], github: "https://github.com/johnrenz-bot/groove" },
  { id: "w1", title: "Simon Game", href: "https://simon-game2-gamma.vercel.app/", image: "/Image/Simon.png", description: "Classic Simon memory game with animations and sound effects.", techStack: ["JavaScript", "HTML", "CSS"] },
  { id: "w2", title: "Weeknd Soundtrip", href: "https://weeknd-soundtrip.vercel.app/", image: "/Image/WeekndSoundtrip.png", description: "Interactive music experience inspired by The Weeknd.", techStack: ["React", "Tailwind", "JavaScript"] },
  { id: "w3", title: "DinoVerse", href: "https://dinoverse-buce.vercel.app/", image: "/Image/Dinoverse.png", description: "Educational dinosaur exploration web app.", techStack: ["React", "Next.js", "CSS"] },
  { id: "w4", title: "EduGuide", href: "https://edu-guide-three.vercel.app/", image: "/Image/EduGuide.png", description: "Educational platform to guide students through courses.", techStack: ["React", "Tailwind", "JavaScript"] },
  { id: "w5", title: "Kiyoto", href: "https://kiyoto.vercel.app/", image: "/Image/Kiyoto.png", description: "Personal portfolio website with interactive UI.", techStack: ["React", "Tailwind", "Next.js"] },
  { id: "w6", title: "Windbreaker", href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/", image: "/Image/windbreaker.png", description: "A digital home for street riders to track progress and connect with crews.", techStack: ["Next.js", "Tailwind"] },
];

const CANVA_PROJECTS: Item[] = [
  { id: "cv1", title: "The Price of Sugar", href: "", image: "/Image/UI/1.jpg", uiTools: ["Canva"], description: "Graphic design poster made with Canva." },
  { id: "cv2", title: "Clay Cuneiform Tables", href: "", image: "/Image/UI/2.jpg", uiTools: ["Canva"], description: "Informational graphic design piece." },
  { id: "cv3", title: "Weeknd UI Concept", href: "", image: "/Image/UI/3.jpg", uiTools: ["Canva"], description: "UI concept inspired by The Weeknd's aesthetic." },
];

const FIGMA_PROJECTS: Item[] = [
  { id: "fg1", title: "XREAPER Hoodie", href: "", image: "/Image/UI/4.png", uiTools: ["Figma"], description: "Streetwear hoodie mockup and branding." },
  { id: "fg2", title: "BATTLE", href: "", image: "/Image/UI/5.jpg", uiTools: ["Figma"], description: "Bold editorial-style graphic layout." },
  { id: "fg3", title: "Mazda", href: "", image: "/Image/UI/6.png", uiTools: ["Figma"], description: "Automotive brand UI concept." },
];

const PHOTOSHOP_PROJECTS: Item[] = [
  { id: "ps1", title: "McLaren", href: "", image: "/Image/UI/7.png", uiTools: ["Photoshop"], description: "McLaren automotive graphic design." },
  { id: "ps2", title: "McLaren Alt", href: "", image: "/Image/UI/8.png", uiTools: ["Photoshop"], description: "Alternative McLaren composition." },
  { id: "ps3", title: "McLaren Shirt", href: "", image: "/Image/UI/9.png", uiTools: ["Photoshop"], description: "Custom T-shirt design featuring McLaren branding." },
  { id: "ps4", title: "McLaren Shirt Alt", href: "", image: "/Image/UI/10.png", uiTools: ["Photoshop"], description: "Alternate colorway shirt design." },
];

const CERTS: Item[] = [
  { id: "c1", title: "Accenture – Skills to Succeed", href: "/Image/Certificate/S2.jpg", image: "/Image/Certificate/S2.jpg", description: "" },
  { id: "c2", title: "Java Programming Certificate", href: "/Image/Certificate/java.jpg", image: "/Image/Certificate/java.jpg", description: "" },
  { id: "c3", title: "Oracle Certified", href: "/Image/Certificate/oracle.jpg", image: "/Image/Certificate/oracle.jpg", description: "" },
  { id: "c4", title: "Canva Graphic Design Certificate", href: "https://www.canva.com/design-school/certification-award/198b01d5-617f-440d-b42e-453aedc794df", image: "/Image/Certificate/Canva.png", description: "" },
];

const CERT_ACCENT: Record<string, string> = {
  c1: "#a100ff",
  c2: "#f89820",
  c3: "#f80000",
  c4: "#00c4cc",
};

const TECH_DATA: Record<string, Tech[]> = {
  Frontend: [
    { name: "HTML", Icon: SiHtml5, color: "#e34f26" },
    { name: "CSS", Icon: SiCss3, color: "#1572b6" },
    { name: "Tailwind", Icon: SiTailwindcss, color: "#06b6d4" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "#7952b3" },
    { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
    { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
    { name: "React", Icon: SiReact, color: "#61dafb" },
    { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  ],
  Backend: [
    { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { name: "Express", Icon: SiExpress, color: "#ffffff" },
    { name: "PHP", Icon: SiPhp, color: "#777bb4" },
    { name: "Laravel", Icon: SiLaravel, color: "#ff2d20" },
    { name: "Java", Icon: FaJava, color: "#f89820" },
    { name: "C#", Icon: TbBrandCSharp, color: "#239120" },
  ],
  Database: [
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
    { name: "MySQL", Icon: SiMysql, color: "#4479a1" },
    { name: "Prisma", Icon: SiPrisma, color: "#2d3748" },
    { name: "XAMPP", Icon: SiXampp, color: "#fb7a24" },
  ],
  Enterprise: [{ name: "SAP", Icon: SiSap, color: "#0faaff" }],
  Design: [
    { name: "Figma", Icon: SiFigma, color: "#f24e1e" },
    { name: "Canva", Icon: SiCanva, color: "#00c4cc" },
    { name: "Photoshop", Icon: SiAdobephotoshop, color: "#31a8ff" },
    { name: "Illustrator", Icon: SiAdobeillustrator, color: "#ff9a00" },
    { name: "PowerPoint", Icon: FaFilePowerpoint, color: "#d24726" },
  ],
  "Dev Tools": [
    { name: "VS Code", Icon: DiVisualstudio, color: "#007acc" },
    { name: "Git", Icon: SiGit, color: "#f05032" },
    { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    { name: "Vercel", Icon: SiVercel, color: "#ffffff" },
    { name: "Hostinger", Icon: SiHostinger, color: "#673de6" },
  ],
};

const CARD = "shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white/40";

const TOOL_COLOR: Record<string, string> = {
  Figma: "#f24e1e",
  Canva: "#00c4cc",
  Photoshop: "#31a8ff",
};

const MAIN_TABS = [
  { key: "projects", label: "Projects", sub: "Web & UI work" },
  { key: "tech", label: "Tech Stack", sub: "Tools & languages" },
  { key: "cert", label: "Certificates", sub: "Credentials" },
] as const;

const PROJECT_CATS = [
  { key: "web", label: "Web Projects", sub: "React · Next.js · more" },
  { key: "design", label: "Graphic & UI Design", sub: "Canva · Figma · Photoshop" },
] as const;

const DESIGN_TOOLS = [
  { key: "canva", label: "Canva", sub: "Graphic Design", color: "#00c4cc", Icon: SiCanva },
  { key: "figma", label: "Figma", sub: "UI Design", color: "#f24e1e", Icon: SiFigma },
  { key: "photoshop", label: "Photoshop", sub: "Graphics & Shirts", color: "#31a8ff", Icon: SiAdobephotoshop },
] as const;

function SectionHeader({ label }: { label: string }) {
  return (
    <h2 className="text-xs font-bold tracking-[0.4em] uppercase opacity-70 mb-5 flex items-center gap-4">
      {label} <span className="h-px flex-1 bg-[var(--text)]/25" />
    </h2>
  );
}

function UIGrid({ items, onSelect }: { items: Item[]; onSelect: (item: Item) => void }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((p) => (
        <div key={p.id} onClick={() => onSelect(p)}
          className={`relative h-[260px] overflow-hidden cursor-pointer group ${CARD}`}>
          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/65 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-5 text-white">
            <h3 className="font-bold text-sm mb-2">{p.title}</h3>
            <p className="text-[0.6rem] text-white/65 mb-3 leading-relaxed">{p.description}</p>
            <div className="flex gap-2">
              {p.uiTools?.map((tool) => (
                <span key={tool} className="text-[0.48rem] px-2 py-1 bg-white/20 flex items-center gap-1.5 uppercase font-bold tracking-wider"
                  style={{ border: `1px solid ${TOOL_COLOR[tool]}50` }}>
                  <span style={{ color: TOOL_COLOR[tool] }}>●</span> {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function SubNavBtn({ active, onClick, label, sub }: { active: boolean; onClick: () => void; label: string; sub: string }) {
  return (
    <button onClick={onClick}
      className={`flex flex-col items-center gap-1.5 px-6 py-3.5 border transition-all duration-300
        ${active
          ? "border-[var(--text)]/60 bg-[var(--text)]/10 text-[var(--text)]"
          : "border-[var(--text)]/18 hover:border-[var(--text)]/45 text-[var(--text)]/60 hover:text-[var(--text)]/90"
        }`}>
      <span className="text-[0.6rem] font-bold tracking-[0.28em] uppercase">{label}</span>
      <span className={`text-[0.45rem] tracking-[0.18em] uppercase ${active ? "opacity-50" : "opacity-30"}`}>{sub}</span>
    </button>
  );
}

export default function PortfolioSection() {
  const [tab, setTab] = useState<"projects" | "tech" | "cert">("projects");
  const [projectCat, setProjectCat] = useState<"web" | "design">("web");
  const [designTool, setDesignTool] = useState<"canva" | "figma" | "photoshop">("canva");
  const [selectedUI, setSelectedUI] = useState<Item | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectedUI && modalRef.current) {
      modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedUI]);

  const designItems = designTool === "canva" ? CANVA_PROJECTS : designTool === "figma" ? FIGMA_PROJECTS : PHOTOSHOP_PROJECTS;

  return (
    <section className="w-full flex justify-center py-20 bg-[var(--bg)] text-[var(--text)]">
      <div className="w-full max-w-6xl px-6 space-y-14">

        <nav className="flex justify-center gap-4 md:gap-6">
          {MAIN_TABS.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)}
              className={`flex flex-col items-center gap-1.5 px-8 py-4 border transition-all duration-300
                ${tab === t.key
                  ? "border-[var(--text)]/65 bg-[var(--text)]/10 text-[var(--text)]"
                  : "border-[var(--text)]/20 hover:border-[var(--text)]/50 text-[var(--text)]/65 hover:text-[var(--text)]/95"
                }`}>
              <span className="text-xs font-bold tracking-[0.3em] uppercase">{t.label}</span>
              <span className={`text-[0.5rem] tracking-[0.2em] uppercase ${tab === t.key ? "opacity-50" : "opacity-35"}`}>{t.sub}</span>
            </button>
          ))}
        </nav>

        {tab === "projects" && (
          <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-bottom-4 duration-700">

            <div className="grid grid-cols-2 gap-3">
              {PROJECT_CATS.map((c) => (
                <SubNavBtn key={c.key} active={projectCat === c.key} onClick={() => setProjectCat(c.key)} label={c.label} sub={c.sub} />
              ))}
            </div>

            {projectCat === "web" && (
              <div className="flex flex-col gap-14">
                <section>
                  <SectionHeader label="Featured" />
                  <Link href={WEB_PROJECTS[0].href}>
                    <div className={`relative h-[450px] overflow-hidden group ${CARD}`}>
                      <Image src={WEB_PROJECTS[0].image} alt={WEB_PROJECTS[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-10">
                        <span className="w-fit text-[0.5rem] font-bold uppercase tracking-[0.3em] px-3 py-1 border border-white/35 mb-4 opacity-80">
                          Capstone Project
                        </span>
                        <h3 className="text-3xl font-bold text-white mb-3">{WEB_PROJECTS[0].title}</h3>
                        <p className="max-w-2xl text-white/85 mb-6 line-clamp-2">{WEB_PROJECTS[0].description}</p>
                        <div className="flex flex-wrap gap-2">
                          {WEB_PROJECTS[0].techStack?.map((tech) => (
                            <span key={tech} className="text-[10px] px-3 py-1 bg-white/20 text-white/90 border border-white/30 uppercase font-semibold">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </section>
                <section>
                  <SectionHeader label="Web Projects" />
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {WEB_PROJECTS.slice(1).map((p) => (
                      <Link key={p.id} href={p.href} target="_blank">
                        <div className={`relative h-[260px] overflow-hidden group ${CARD}`}>
                          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                            <h3 className="text-sm font-bold text-white mb-1">{p.title}</h3>
                            <p className="text-xs text-white/70 mb-3 leading-relaxed">{p.description}</p>
                            <div className="flex flex-wrap gap-1.5">
                              {p.techStack?.map((tech) => (
                                <span key={tech} className="text-[9px] px-2 py-0.5 bg-white/20 border border-white/30 text-white font-bold uppercase">
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
              </div>
            )}

            {projectCat === "design" && (
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-3 gap-3">
                  {DESIGN_TOOLS.map((dt) => (
                    <button key={dt.key} onClick={() => setDesignTool(dt.key)}
                      className={`flex flex-col items-center gap-2 py-5 border transition-all duration-300
                        ${designTool === dt.key
                          ? "bg-[var(--text)]/8 text-[var(--text)]"
                          : "border-[var(--text)]/18 hover:border-[var(--text)]/40 text-[var(--text)]/60 hover:text-[var(--text)]/90"
                        }`}
                      style={{ borderColor: designTool === dt.key ? `${dt.color}80` : undefined }}>
                      <dt.Icon className="text-xl transition-all duration-300" style={{ color: dt.color, opacity: designTool === dt.key ? 1 : 0.5 }} />
                      <span className="text-[0.6rem] font-bold tracking-[0.28em] uppercase">{dt.label}</span>
                      <span className={`text-[0.45rem] tracking-[0.18em] uppercase ${designTool === dt.key ? "opacity-50" : "opacity-25"}`}>{dt.sub}</span>
                    </button>
                  ))}
                </div>

                <div key={designTool} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                  <SectionHeader label={
                    designTool === "canva" ? "Canva — Graphic Design"
                    : designTool === "figma" ? "Figma — UI Design"
                    : "Photoshop — Graphics & T-Shirt Design"
                  } />
                  <UIGrid items={designItems} onSelect={setSelectedUI} />
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "tech" && (
          <div className="space-y-12 animate-in fade-in zoom-in-95 duration-500">
            {Object.entries(TECH_DATA).map(([group, list]) => (
              <div key={group} className="space-y-4">
                <h3 className="text-xs font-bold tracking-[0.4em] uppercase opacity-70 flex items-center gap-4">
                  {group} <span className="h-px flex-1 bg-[var(--text)]/25" />
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                  {list.map((t) => (
                    <div key={t.name}
                      className="group flex flex-col items-center gap-3 py-6 border border-[var(--text)]/20 hover:border-[var(--text)]/50 hover:bg-[var(--text)]/8 transition-all duration-300">
                      <t.Icon className="text-2xl transition-all duration-300 group-hover:scale-125" style={{ color: t.color, opacity: 0.8 }} />
                      <span className="text-[0.48rem] font-bold uppercase tracking-[0.2em] opacity-65 group-hover:opacity-100 transition-opacity">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "cert" && (
          <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-4">
            <h3 className="text-xs font-bold tracking-[0.4em] uppercase opacity-70 flex items-center gap-4">
              Credentials <span className="h-px flex-1 bg-[var(--text)]/25" />
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CERTS.map((c) => (
                <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer"
                  className="group overflow-hidden border border-white/20 hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="relative h-[200px] overflow-hidden">
                    <Image src={c.image} alt={c.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ background: `radial-gradient(ellipse at center, ${CERT_ACCENT[c.id]}, transparent 70%)` }} />
                  </div>
                  <div className="px-4 py-3 border-t border-white/20 group-hover:border-white/35 transition-colors">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                        style={{ background: CERT_ACCENT[c.id] }} />
                      <p className="text-[0.55rem] font-bold tracking-[0.22em] uppercase opacity-65 group-hover:opacity-100 transition-opacity">{c.title}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

      </div>

      {selectedUI && (
        <div ref={modalRef} onClick={() => setSelectedUI(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl max-h-[85vh]">
            <p className="text-[0.52rem] font-bold tracking-[0.4em] uppercase opacity-60 mb-4 text-center text-white">{selectedUI.title}</p>
            <Image src={selectedUI.image} alt={selectedUI.title} width={1600} height={1000}
              className="object-contain w-full border border-white/25" />
            <button className="mt-4 block mx-auto text-[0.52rem] font-bold tracking-[0.4em] uppercase opacity-55 hover:opacity-100 transition-opacity text-white">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}