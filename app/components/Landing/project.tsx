"use client";

import { useState } from "react";
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
import { HiOutlineSquares2X2 } from "react-icons/hi2";

type Item = {
  id: string;
  title: string;
  href: string;
  image: string;
  description: string;
  techStack?: string[];
  github?: string;
  uiTools?: string[];
  category?: string;
};

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const WEB_PROJECTS: Item[] = [
  { id: "capstone", title: "Groove (Capstone Project)", href: "/Groove", image: "/Image/Groove.png", description: "A Bulacan all-in-one performing arts hub with smart chat support.", techStack: ["Laravel", "MySQL", "Xampp", "TailwindCSS"], github: "https://github.com/johnrenz-bot/groove" },
  { id: "w1", title: "Simon Game", href: "https://simon-game2-gamma.vercel.app/", image: "/Image/Simon.png", description: "Classic Simon memory game with animations and sound effects.", techStack: ["JavaScript", "HTML", "CSS"] },
  { id: "w2", title: "Weeknd Soundtrip", href: "https://weeknd-soundtrip.vercel.app/", image: "/Image/WeekndSoundtrip.png", description: "Interactive music experience inspired by The Weeknd.", techStack: ["React", "Tailwind", "JavaScript"] },
  { id: "w3", title: "DinoVerse", href: "https://dinoverse-buce.vercel.app/", image: "/Image/Dinoverse.png", description: "Educational dinosaur exploration web app.", techStack: ["React", "Next.js", "CSS"] },
  { id: "w4", title: "EduGuide", href: "https://edu-guide-three.vercel.app/", image: "/Image/EduGuide.png", description: "Educational platform to guide students through courses.", techStack: ["React", "Tailwind", "JavaScript"] },
  { id: "w5", title: "Kiyoto", href: "https://kiyoto.vercel.app/", image: "/Image/Kiyoto.png", description: "Personal portfolio website with interactive UI.", techStack: ["React", "Tailwind", "Next.js"] },
  { id: "w6", title: "Windbreaker", href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/", image: "/Image/windbreaker.png", description: "A digital home for street riders to track progress and connect with crews.", techStack: ["Next.js", "Tailwind"] },
];

const CANVA_PROJECTS: Item[] = [
  { id: "cv1", title: "The Price of Sugar", href: "", image: "/Image/UI/1.jpg", uiTools: ["Canva"], description: "Graphic design poster made with Canva.", category: "graphic design" },
  { id: "cv2", title: "Clay Cuneiform Tables", href: "", image: "/Image/UI/2.jpg", uiTools: ["Canva"], description: "Informational graphic design piece.", category: "graphic design" },
  { id: "cv3", title: "Weeknd UI Concept", href: "", image: "/Image/UI/3.jpg", uiTools: ["Canva"], description: "UI concept inspired by The Weeknd's aesthetic.", category: "graphic design" },
];

const FIGMA_PROJECTS: Item[] = [
  { id: "fg1", title: "XREAPER Hoodie", href: "", image: "/Image/UI/4.png", uiTools: ["Figma"], description: "Streetwear hoodie mockup and branding.", category: "tshirt design" },
  { id: "fg2", title: "BATTLE", href: "", image: "/Image/UI/5.jpg", uiTools: ["Figma"], description: "Bold editorial-style graphic layout.", category: "graphic design" },
  { id: "fg3", title: "Mazda", href: "", image: "/Image/UI/6.png", uiTools: ["Figma"], description: "Automotive brand UI concept.", category: "graphic design" },
];

const PHOTOSHOP_PROJECTS: Item[] = [
  { id: "ps1", title: "McLaren", href: "", image: "/Image/UI/7.png", uiTools: ["Photoshop"], description: "McLaren automotive graphic design.", category: "graphic design" },
  { id: "ps2", title: "Me GA", href: "", image: "/Image/UI/8.png", uiTools: ["Photoshop"], description: "Alternative McLaren composition.", category: "graphic design" },
  { id: "ps3", title: "GA design poster", href: "", image: "/Image/UI/poster.png", uiTools: ["Photoshop"], description: "Graphic design poster for new arrival soon.", category: "graphic design" },
  { id: "ps12", title: "Life’s Quote", href: "", image: "/Image/Qoutes/lifes.png", uiTools: ["Photoshop"], description: "Minimal typography quote composition.", category: "graphic design" },
  { id: "ps13", title: "One Quote", href: "", image: "/Image/Qoutes/One.png", uiTools: ["Photoshop"], description: "Creative typography quote layout.", category: "graphic design" },

  { id: "ps4", title: "Alien Shirt", href: "", image: "/Image/UI/alien.png", uiTools: ["Photoshop"], description: "Custom T-shirt design featuring Reefer branding.", category: "tshirt design" },
  { id: "ps5", title: "Chest Shirt", href: "", image: "/Image/UI/11.png", uiTools: ["Photoshop"], description: "Alternate colorway shirt design.", category: "tshirt design" },
  { id: "ps6", title: "Devine Outcast Shirt", href: "", image: "/Image/UI/12.png", uiTools: ["Photoshop"], description: "Custom T-shirt design.", category: "tshirt design" },
  { id: "ps7", title: "Visionless Shirt", href: "", image: "/Image/UI/13.png", uiTools: ["Photoshop"], description: "Alternate colorway shirt design.", category: "tshirt design" },
  { id: "ps8", title: "Last hope Shirt", href: "", image: "/Image/UI/14.png", uiTools: ["Photoshop"], description: "Custom T-shirt design.", category: "tshirt design" },
  { id: "ps9", title: "hiphop Shirt", href: "", image: "/Image/UI/15.png", uiTools: ["Photoshop"], description: "Custom T-shirt design.", category: "tshirt design" },
    { id: "ps10", title: "hiphop Shirt", href: "", image: "/Image/UI/Cmytk.png", uiTools: ["Photoshop"], description: "Custom T-shirt design.", category: "tshirt design" },

  
];

const CERTS: Item[] = [
  { id: "c1", title: "Accenture – Skills to Succeed", href: "/Image/Certificate/S2.jpg", image: "/Image/Certificate/S2.jpg", description: "" },
  { id: "c2", title: "Java Programming Certificate", href: "/Image/Certificate/java.jpg", image: "/Image/Certificate/java.jpg", description: "" },
  { id: "c3", title: "Oracle Certified", href: "/Image/Certificate/oracle.jpg", image: "/Image/Certificate/oracle.jpg", description: "" },
  { id: "c4", title: "Canva Graphic Design Certificate", href: "https://www.canva.com/design-school/certification-award/198b01d5-617f-440d-b42e-453aedc794df", image: "/Image/Certificate/Canva.png", description: "" },
];

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

const MAIN_TABS = [
  { key: "projects", label: "Projects", sub: "Web & UI work" },
  { key: "tech", label: "Tech Stack", sub: "Tools & languages" },
  { key: "cert", label: "Certificates", sub: "Credentials" },
] as const;

const DESIGN_TOOL_ICONS = {
  gallery: HiOutlineSquares2X2,
  canva: SiCanva,
  figma: SiFigma,
  photoshop: SiAdobephotoshop
};

function SectionHeader({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center gap-4 sm:gap-6 mb-10 group ${className}`}>
      <h2 className="text-[0.5rem] sm:text-[0.55rem] font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-[var(--text)]/40 group-hover:text-[var(--text)]/80 transition-colors" style={{ fontFamily: "'DM Mono', monospace" }}>
        {label}
      </h2>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-[var(--text)]/20 via-[var(--text)]/5 to-transparent" />
    </div>
  );
}

export default function PortfolioSection() {
  const [tab, setTab] = useState<"projects" | "tech" | "cert">("projects");
  const [projectCat, setProjectCat] = useState<"web" | "design">("web");
  const [designTool, setDesignTool] = useState<"gallery" | "photoshop" | "canva" | "figma" >("gallery");
  const [selectedUI, setSelectedUI] = useState<Item | null>(null);

  const designItems =
    designTool === "gallery" ? [...PHOTOSHOP_PROJECTS, ...CANVA_PROJECTS, ...FIGMA_PROJECTS] :
      designTool === "canva" ? CANVA_PROJECTS :
        designTool === "figma" ? FIGMA_PROJECTS :
          PHOTOSHOP_PROJECTS;

  const graphicDesignItems = designItems.filter(item => item.category === "graphic design");
  const tshirtDesignItems = designItems.filter(item => item.category === "tshirt design");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Mono:wght@300;400;500&display=swap');
        .container-3d { transform-style: preserve-3d; perspective: 1000px; }
        .card-3d { transition: transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.5s ease; transform: translateZ(0); }
        .card-3d:hover { transform: translateZ(20px) translateY(-8px) rotateX(2deg); box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5); }
        .btn-modern { position: relative; overflow: hidden; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); transform: translateZ(0); }
        .btn-modern::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent); transform: translateX(-100%); transition: transform 0.6s; }
        .btn-modern:hover::after { transform: translateX(100%); }
        .active-tab-glow { box-shadow: inset 0 0 15px rgba(255,255,255,0.05), 0 10px 20px -10px rgba(0,0,0,0.3); }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section className="relative z-10 w-full flex justify-center py-12 sm:py-24 bg-transparent text-[var(--text)]">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          <div className="flex justify-center mb-12 sm:mb-20">
            <nav className="inline-flex p-1 sm:p-1.5 bg-[var(--text)]/5 rounded-2xl sm:rounded-[2rem] border border-[var(--text)]/10 backdrop-blur-md w-full sm:w-auto overflow-x-auto no-scrollbar">
              {MAIN_TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`btn-modern relative flex flex-col items-center flex-1 sm:flex-none min-w-[90px] sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-[1.8rem] transition-all ${tab === t.key
                    ? "bg-[var(--bg)] border border-[var(--text)]/10 text-[var(--text)] active-tab-glow"
                    : "text-[var(--text)]/40 hover:text-[var(--text)]/70"
                    }`}
                >
                  <span className="text-[0.55rem] sm:text-[0.6rem] font-bold tracking-[0.1em] sm:tracking-[0.25em] uppercase mb-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{t.label}</span>
                  <span className="text-[0.35rem] sm:text-[0.4rem] tracking-[0.1em] sm:tracking-[0.15em] uppercase opacity-50 whitespace-nowrap" style={{ fontFamily: "'DM Mono', monospace" }}>{t.sub}</span>
                  {tab === t.key && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {tab === "projects" && (
            <div className="space-y-12 sm:space-y-16 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                {["web", "design"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setProjectCat(cat as any)}
                    className={`btn-modern px-6 sm:px-8 py-3 rounded-xl border text-[0.5rem] sm:text-[0.55rem] font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase ${projectCat === cat
                      ? "bg-[var(--text)]/10 border-[var(--text)]/20 text-[var(--text)]"
                      : "border-transparent text-[var(--text)]/30 hover:text-[var(--text)]/60"
                      }`}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {cat === "web" ? "Digital Development" : "Visual Identity"}
                  </button>
                ))}
              </div>

              {projectCat === "web" && (
                <div className="space-y-8 sm:space-y-12">
                  <SectionHeader label="Web Projects" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 container-3d">
                    {WEB_PROJECTS.map((p, index) => (
                      <Link
                        key={p.id}
                        href={p.href}
                        className={`card-3d group relative rounded-2xl sm:rounded-[2rem] overflow-hidden border border-[var(--text)]/10 ${index === 0 ? "sm:col-span-2 lg:col-span-3 aspect-video sm:aspect-[21/9]" : "aspect-[4/5]"
                          }`}
                      >
                        <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                        <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-4px]">
                          <div className="space-y-2 sm:space-y-4">
                            <div className="flex flex-wrap gap-1 sm:gap-2">
                              {p.techStack?.slice(0, index === 0 ? 6 : 3).map(tech => (
                                <span key={tech} className="text-[8px] sm:text-[10px] px-2 sm:px-3 py-0.5 sm:py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white/80 uppercase font-medium tracking-tighter">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <h3 className={`${index === 0 ? 'text-2xl sm:text-4xl' : 'text-xl sm:text-2xl'} font-light text-white tracking-wide`} style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                            <p className={`text-[0.6rem] sm:text-[0.65rem] text-white/50 leading-relaxed ${index === 0 ? 'max-w-md' : 'max-w-xs'} group-hover:text-white/80 transition-colors line-clamp-2`}>{p.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {projectCat === "design" && (
                <div className="space-y-8 sm:space-y-12">
                  <div className="grid grid-cols-2 sm:flex sm:justify-center gap-3 sm:gap-6">
                    {["gallery", "canva", "figma", "photoshop"].map((tool) => {
                      const Icon = DESIGN_TOOL_ICONS[tool as keyof typeof DESIGN_TOOL_ICONS];
                      const isActive = designTool === tool;
                      return (
                        <button
                          key={tool}
                          onClick={() => setDesignTool(tool as any)}
                          className={`btn-modern min-w-0 sm:min-w-[140px] px-4 sm:px-6 py-4 sm:py-5 rounded-xl sm:rounded-2xl border transition-all duration-500 flex flex-col items-center gap-2 sm:gap-3 ${isActive
                            ? "bg-white/10 border-white/30 translate-y-[-4px] shadow-xl"
                            : "bg-white/5 border-white/5 opacity-40 hover:opacity-100"
                            }`}
                        >
                          <Icon className={`text-lg sm:text-xl transition-transform duration-500 ${isActive ? 'scale-110 sm:scale-125' : ''}`} />
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <div className={`w-1 h-1 rounded-full transition-all duration-500 ${isActive ? 'bg-white scale-150 shadow-[0_0_8px_white]' : 'bg-white/20'}`} />
                            <span className="text-[0.45rem] sm:text-[0.55rem] font-bold tracking-[0.1em] sm:tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{tool}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {graphicDesignItems.length > 0 && (
                    <div className="space-y-6 sm:space-y-8">
                      <SectionHeader label="Graphic Design" />
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 container-3d">
                        {graphicDesignItems.map((item) => (
                          <div key={item.id} onClick={() => setSelectedUI(item)} className="card-3d relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 cursor-pointer group">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
                              <span className="text-[0.45rem] sm:text-[0.5rem] font-bold tracking-[0.2em] sm:tracking-[0.5em] uppercase text-white mb-1 sm:mb-2">{item.title}</span>
                              <span className="text-[0.35rem] sm:text-[0.4rem] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-white/50">{item.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {tshirtDesignItems.length > 0 && (
                    <div className="space-y-6 sm:space-y-8">
                      <SectionHeader label="T-Shirt Design" />
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 container-3d">
                        {tshirtDesignItems.map((item) => (
                          <div key={item.id} onClick={() => setSelectedUI(item)} className="card-3d relative aspect-square rounded-2xl sm:rounded-3xl overflow-hidden border border-white/5 cursor-pointer group">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-4 text-center">
                              <span className="text-[0.45rem] sm:text-[0.5rem] font-bold tracking-[0.2em] sm:tracking-[0.5em] uppercase text-white mb-1 sm:mb-2">{item.title}</span>
                              <span className="text-[0.35rem] sm:text-[0.4rem] tracking-[0.1em] sm:tracking-[0.2em] uppercase text-white/50">{item.category}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {tab === "tech" && (
            <div className="text-gray-300 sm:p-8 rounded-2xl animate-in fade-in zoom-in-95 duration-1000">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 sm:gap-y-16">
                {Object.entries(TECH_DATA).map(([group, list]) => (
                  <div key={group} className="space-y-6 sm:space-y-8">
                    <SectionHeader label={group} className="text-gray-300" />
                    <div className="grid grid-cols-4 gap-3 sm:gap-4">
                      {list.map((t) => (
                        <div
                          key={t.name}
                          className="group relative aspect-square flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-[var(--text)]/5 hover:border-[var(--text)]/20 transition-all bg-zinc-800 duration-500 hover:bg-zinc-700 cursor-default"
                        >
                          <t.Icon className="text-lg sm:text-xl mb-2 sm:mb-3 transition-all duration-500 group-hover:scale-110" style={{ color: t.color }} />
                          <span className="text-[0.35rem] sm:text-[0.45rem] font-md uppercase tracking-[0.1em] sm:tracking-widest text-gray-300 group-hover:text-white px-1 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {t.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "cert" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 animate-in fade-in slide-in-from-top-8 duration-1000">
              {CERTS.map((c) => (
                <a
                  key={c.id}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl sm:rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
                >
                  <div className="relative w-full aspect-[4/3] bg-white">
                    <Image src={c.image} alt={c.title} fill className="object-cover sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedUI && (
        <div
          onClick={() => setSelectedUI(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-3xl bg-black/95 animate-in fade-in duration-300 overflow-hidden"
        >
          <div
            className="relative w-full max-w-5xl flex flex-col items-center justify-center"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] flex items-center justify-center">
              <div className="relative w-full h-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl flex items-center justify-center">
                <Image
                  src={selectedUI.image}
                  alt={selectedUI.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-center text-center space-y-2">
              <h2 className="text-white text-2xl sm:text-3xl font-light tracking-wide" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                {selectedUI.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-6 sm:w-8 h-[1px] bg-white/20" />
                <p className="text-white/50 text-[0.5rem] sm:text-[0.6rem] tracking-[0.2em] sm:tracking-[0.4em] uppercase font-bold" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {selectedUI.category}
                </p>
                <div className="w-6 sm:w-8 h-[1px] bg-white/20" />
              </div>

              <button
                onClick={() => setSelectedUI(null)}
                className="mt-6 sm:mt-8 px-10 sm:px-14 py-3 sm:py-4 rounded-full border border-white/10 bg-white/5 text-[0.5rem] sm:text-[0.55rem] font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}