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

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

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
    { name: "HTML",       Icon: SiHtml5,         color: "#e34f26" },
    { name: "CSS",        Icon: SiCss3,          color: "#1572b6" },
    { name: "Tailwind",   Icon: SiTailwindcss,   color: "#06b6d4" },
    { name: "Bootstrap",  Icon: SiBootstrap,     color: "#7952b3" },
    { name: "JavaScript", Icon: SiJavascript,    color: "#f7df1e" },
    { name: "TypeScript", Icon: SiTypescript,    color: "#3178c6" },
    { name: "React",      Icon: SiReact,         color: "#61dafb" },
    { name: "Next.js",    Icon: SiNextdotjs,     color: "#ffffff" },
  ],
  Backend: [
    { name: "Node.js",  Icon: SiNodedotjs, color: "#339933" },
    { name: "Express",  Icon: SiExpress,   color: "#ffffff" },
    { name: "PHP",      Icon: SiPhp,       color: "#777bb4" },
    { name: "Laravel",  Icon: SiLaravel,   color: "#ff2d20" },
    { name: "Java",     Icon: FaJava,      color: "#f89820" },
    { name: "C#",       Icon: TbBrandCSharp, color: "#239120" },
  ],
  Database: [
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
    { name: "MySQL",      Icon: SiMysql,      color: "#4479a1" },
    { name: "Prisma",     Icon: SiPrisma,     color: "#2d3748" },
    { name: "XAMPP",      Icon: SiXampp,      color: "#fb7a24" },
  ],
  Enterprise: [
    { name: "SAP", Icon: SiSap, color: "#0faaff" },
  ],
  Design: [
    { name: "Figma",       Icon: SiFigma,            color: "#f24e1e" },
    { name: "Canva",       Icon: SiCanva,            color: "#00c4cc" },
    { name: "Photoshop",   Icon: SiAdobephotoshop,   color: "#31a8ff" },
    { name: "Illustrator", Icon: SiAdobeillustrator, color: "#ff9a00" },
    { name: "PowerPoint",  Icon: FaFilePowerpoint,   color: "#d24726" },
  ],
  "Dev Tools": [
    { name: "VS Code",    Icon: DiVisualstudio, color: "#007acc" },
    { name: "Git",        Icon: SiGit,          color: "#f05032" },
    { name: "GitHub",     Icon: SiGithub,       color: "#ffffff" },
    { name: "Vercel",     Icon: SiVercel,       color: "#ffffff" },
    { name: "Hostinger",  Icon: SiHostinger,    color: "#673de6" },
  ],
};

const TOOL_COLOR: Record<string, string> = {
  Figma: "#f24e1e",
  Canva: "#00c4cc",
  Photoshop: "#31a8ff",
};

const MAIN_TABS = [
  { key: "projects", label: "Projects",   sub: "Web & UI work",      accent: "#a78bfa" },
  { key: "tech",     label: "Tech Stack", sub: "Tools & languages",  accent: "#34d399" },
  { key: "cert",     label: "Certificates", sub: "Credentials",      accent: "#f472b6" },
] as const;

const PROJECT_CATS = [
  { key: "web",    label: "Web Projects",      sub: "React · Next.js · more" },
  { key: "design", label: "Graphic & UI Design", sub: "Canva · Figma · Photoshop" },
] as const;

const DESIGN_TOOLS = [
  { key: "canva",      label: "Canva",      sub: "Graphic Design",    color: "#00c4cc", Icon: SiCanva },
  { key: "figma",      label: "Figma",      sub: "UI Design",         color: "#f24e1e", Icon: SiFigma },
  { key: "photoshop",  label: "Photoshop",  sub: "Graphics & Shirts", color: "#31a8ff", Icon: SiAdobephotoshop },
] as const;

function GlowCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-0 transition-transform duration-700 ease-out"
      style={{ background: "radial-gradient(circle, rgba(167,139,250,0.055) 0%, transparent 70%)" }}
    />
  );
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute top-[8%]  left-[5%]  w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)", opacity: 0.04, animation: "orbFloat 15s ease-in-out infinite" }} />
      <div className="absolute top-[50%] right-[4%] w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle, #34d399, transparent 70%)", opacity: 0.03, animation: "orbFloat 20s ease-in-out infinite reverse" }} />
      <div className="absolute bottom-[8%] left-[35%] w-56 h-56 rounded-full"
        style={{ background: "radial-gradient(circle, #f472b6, transparent 70%)", opacity: 0.03, animation: "orbFloat 12s ease-in-out infinite 4s" }} />
    </div>
  );
}

function MarqueeStrip() {
  const items = ["Web Development", "UI / UX Design", "Full-Stack Projects", "React & Next.js", "Laravel & PHP", "Graphic Design"];
  const repeated = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden border-y border-[var(--text)]/8 py-2.5">
      <div className="flex gap-10 whitespace-nowrap" style={{ animation: "marquee 24s linear infinite" }}>
        {repeated.map((item, i) => (
          <span
            key={i}
            className="text-[0.44rem] font-bold tracking-[0.45em] uppercase text-[var(--text)]/25 flex-shrink-0 flex items-center gap-4"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {item}
            <span className="w-1 h-1 rounded-full bg-[var(--text)]/15 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ label }: { label: string }) {
  return (
    <h2
      className="text-[0.48rem] font-bold tracking-[0.45em] uppercase text-[var(--text)]/70 mb-5 flex items-center gap-4"
      style={{ fontFamily: "'DM Mono', monospace" }}
    >
      {label}
      <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(var(--text-raw),0.2), transparent)" }} />
    </h2>
  );
}

function TechCard({ t }: { t: Tech }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center gap-3 py-6 rounded-2xl border transition-all duration-400 overflow-hidden cursor-default"
      style={{
        borderColor: hovered ? `${t.color}55` : "rgba(var(--text-raw),0.18)",
        background: hovered ? `${t.color}08` : "transparent",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-400"
        style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(ellipse at 50% 110%, ${t.color}18, transparent 65%)` }}
      />
      <t.Icon
        className="relative text-2xl transition-all duration-300"
        style={{ color: t.color, opacity: hovered ? 1 : 0.75, filter: hovered ? `drop-shadow(0 0 7px ${t.color}80)` : "none", transform: hovered ? "scale(1.2)" : "scale(1)" }}
      />
      <span
        className="relative text-[0.45rem] font-bold uppercase tracking-[0.22em] transition-colors duration-300"
        style={{ color: hovered ? "rgba(var(--text-raw),1)" : "rgba(var(--text-raw),0.65)", fontFamily: "'DM Mono', monospace" }}
      >
        {t.name}
      </span>
    </div>
  );
}

function UIGrid({ items, onSelect }: { items: Item[]; onSelect: (item: Item) => void }) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {items.map((p) => (
        <div
          key={p.id}
          onClick={() => onSelect(p)}
          className="relative h-[260px] rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-white/40"
        >
          <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-5 text-white">
            <h3 className="font-bold text-sm mb-2 text-white">{p.title}</h3>
            <p className="text-[0.58rem] text-white/80 mb-3 leading-relaxed">{p.description}</p>
            <div className="flex gap-2 flex-wrap">
              {p.uiTools?.map((tool) => (
                <span
                  key={tool}
                  className="text-[0.45rem] px-2 py-1 bg-white/15 rounded-full flex items-center gap-1.5 uppercase font-bold tracking-wider text-white/90"
                  style={{ border: `1px solid ${TOOL_COLOR[tool]}60` }}
                >
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
    <button
      onClick={onClick}
      className="flex flex-col items-center gap-1.5 px-6 py-3.5 rounded-xl border transition-all duration-300"
      style={{
        borderColor: active ? "rgba(var(--text-raw),0.5)" : "rgba(var(--text-raw),0.18)",
        background: active ? "rgba(var(--text-raw),0.08)" : "transparent",
        color: active ? "rgba(var(--text-raw),1)" : "rgba(var(--text-raw),0.65)",
      }}
    >
      <span className="text-[0.58rem] font-bold tracking-[0.28em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{label}</span>
      <span className="text-[0.43rem] tracking-[0.18em] uppercase" style={{ opacity: active ? 0.65 : 0.4, fontFamily: "'DM Mono', monospace" }}>{sub}</span>
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

  const designItems =
    designTool === "canva" ? CANVA_PROJECTS
    : designTool === "figma" ? FIGMA_PROJECTS
    : PHOTOSHOP_PROJECTS;

  const activeTabAccent = MAIN_TABS.find(t => t.key === tab)?.accent ?? "#a78bfa";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Mono:wght@300;400&display=swap');

        @keyframes fadeUp   { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        @keyframes orbFloat { 0%,100% { transform:translateY(0) scale(1); } 50% { transform:translateY(-26px) scale(1.04); } }
        @keyframes marquee  { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes scanIn   { from { opacity:0; transform:scaleY(0.94); } to { opacity:1; transform:scaleY(1); } }
        @keyframes shimmer  { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }

        .portfolio-fade { animation: fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards; opacity:0; }

        .noise-bg::before {
          content:'';
          position:fixed;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.02;
          pointer-events:none;
          z-index:0;
        }

        .tab-underline {
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          height: 2px;
          width: 40%;
          border-radius: 9999px;
          transition: all 0.4s ease;
        }

        .featured-shimmer {
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 50%, transparent 60%);
          background-size: 200% 100%;
          animation: shimmer 3.5s ease-in-out infinite;
        }
      `}</style>

      <GlowCursor />
      <FloatingOrbs />

      <section className="noise-bg relative z-10 w-full flex justify-center py-20 bg-[var(--bg)] text-[var(--text)]">
        <div className="w-full max-w-6xl px-6 space-y-10">

          <div className="portfolio-fade" style={{ animationDelay: "0.05s" }}>
            <nav className="flex justify-center gap-3 md:gap-4">
              {MAIN_TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className="relative flex flex-col items-center gap-1.5 px-8 py-4 rounded-2xl border transition-all duration-400"
                  style={{
                    borderColor: tab === t.key ? `${t.accent}60` : "rgba(var(--text-raw),0.2)",
                    background: tab === t.key ? `${t.accent}0d` : "transparent",
                    color: tab === t.key ? "rgba(var(--text-raw),1)" : "rgba(var(--text-raw),0.65)",
                    boxShadow: tab === t.key ? `0 0 20px ${t.accent}18` : "none",
                  }}
                >
                  <span className="text-[0.65rem] font-bold tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>{t.label}</span>
                  <span className="text-[0.45rem] tracking-[0.22em] uppercase" style={{ opacity: tab === t.key ? 0.65 : 0.42, fontFamily: "'DM Mono', monospace" }}>{t.sub}</span>
                  {tab === t.key && (
                    <span className="tab-underline" style={{ background: t.accent }} />
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="portfolio-fade" style={{ animationDelay: "0.15s" }}>
            <MarqueeStrip />
          </div>

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
                      <div className="relative h-[450px] rounded-3xl overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-600 hover:-translate-y-2 border border-white/15 hover:border-white/35">
                        <Image src={WEB_PROJECTS[0].image} alt={WEB_PROJECTS[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="featured-shimmer absolute inset-0" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent flex flex-col justify-end p-10">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" style={{ boxShadow: "0 0 8px #a78bfa" }} />
                            <span
                              className="text-[0.47rem] font-bold uppercase tracking-[0.4em] px-3 py-1 rounded-full border border-[rgba(167,139,250,0.45)] text-[#a78bfa]"
                              style={{ fontFamily: "'DM Mono', monospace" }}
                            >
                              Capstone Project
                            </span>
                          </div>
                          <h3 className="text-3xl font-light tracking-[0.1em] text-white mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            {WEB_PROJECTS[0].title}
                          </h3>
                          <p className="max-w-2xl text-white/85 mb-6 line-clamp-2 text-sm leading-relaxed">{WEB_PROJECTS[0].description}</p>
                          <div className="flex flex-wrap gap-2">
                            {WEB_PROJECTS[0].techStack?.map((tech) => (
                              <span key={tech} className="text-[9px] px-3 py-1 rounded-full bg-white/15 text-white/90 border border-white/25 uppercase font-semibold tracking-wide"
                                style={{ fontFamily: "'DM Mono', monospace" }}>
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
                      {WEB_PROJECTS.slice(1).map((p, i) => (
                        <Link key={p.id} href={p.href} target="_blank">
                          <div
                            className="relative h-[260px] rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/15 hover:border-white/35"
                            style={{ animationDelay: `${i * 0.05}s` }}
                          >
                            <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                              <h3 className="text-sm font-light tracking-wide text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{p.title}</h3>
                              <p className="text-[0.58rem] text-white/80 mb-3 leading-relaxed">{p.description}</p>
                              <div className="flex flex-wrap gap-1.5">
                                {p.techStack?.map((tech) => (
                                  <span key={tech} className="text-[8px] px-2 py-0.5 rounded-full bg-white/15 border border-white/30 text-white font-bold uppercase tracking-wide"
                                    style={{ fontFamily: "'DM Mono', monospace" }}>
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
                      <button
                        key={dt.key}
                        onClick={() => setDesignTool(dt.key)}
                        className="relative flex flex-col items-center gap-2 py-5 rounded-2xl border transition-all duration-400 overflow-hidden"
                        style={{
                          borderColor: designTool === dt.key ? `${dt.color}70` : "rgba(var(--text-raw),0.18)",
                          background: designTool === dt.key ? `${dt.color}0d` : "transparent",
                          boxShadow: designTool === dt.key ? `0 0 18px ${dt.color}14` : "none",
                        }}
                      >
                        {designTool === dt.key && (
                          <div className="absolute inset-0 rounded-2xl" style={{ background: `radial-gradient(ellipse at 50% 100%, ${dt.color}14, transparent 65%)` }} />
                        )}
                        <dt.Icon
                          className="relative text-xl transition-all duration-300"
                          style={{ color: dt.color, opacity: designTool === dt.key ? 1 : 0.5, filter: designTool === dt.key ? `drop-shadow(0 0 7px ${dt.color}80)` : "none" }}
                        />
                        <span className="relative text-[0.58rem] font-bold tracking-[0.28em] uppercase text-[var(--text)]/80" style={{ fontFamily: "'DM Mono', monospace" }}>{dt.label}</span>
                        <span className="relative text-[0.42rem] tracking-[0.18em] uppercase text-[var(--text)]/45" style={{ fontFamily: "'DM Mono', monospace" }}>{dt.sub}</span>
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
                  <h3
                    className="text-[0.47rem] font-bold tracking-[0.45em] uppercase text-[var(--text)]/70 flex items-center gap-4"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {group}
                    <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(var(--text-raw),0.2), transparent)" }} />
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
                    {list.map((t) => <TechCard key={t.name} t={t} />)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "cert" && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-5">
              <h3
                className="text-[0.47rem] font-bold tracking-[0.45em] uppercase text-[var(--text)]/70 flex items-center gap-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Credentials
                <span className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(var(--text-raw),0.2), transparent)" }} />
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {CERTS.map((c) => (
                  <a
                    key={c.id}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group overflow-hidden rounded-2xl border border-white/15 hover:border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    style={{ boxShadow: undefined }}
                  >
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-600 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-35 transition-opacity duration-500"
                        style={{ background: `radial-gradient(ellipse at center, ${CERT_ACCENT[c.id]}, transparent 70%)` }}
                      />
                    </div>
                    <div className="px-4 py-3 border-t border-white/15 group-hover:border-white/35 transition-colors">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                          style={{ background: CERT_ACCENT[c.id], boxShadow: `0 0 0 0 ${CERT_ACCENT[c.id]}` }}
                        />
                        <p
                          className="text-[0.52rem] font-bold tracking-[0.22em] uppercase text-[var(--text)]/70 group-hover:text-[var(--text)] transition-colors"
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {c.title}
                        </p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {selectedUI && (
        <div
          ref={modalRef}
          onClick={() => setSelectedUI(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/96 backdrop-blur-2xl"
          style={{ animation: "scanIn 0.35s cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          <div className="relative w-full max-w-4xl max-h-[85vh]">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3))" }} />
              <p
                className="text-[0.48rem] font-bold tracking-[0.5em] uppercase text-white/70"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {selectedUI.title}
              </p>
              <div className="h-px w-12" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)" }} />
            </div>
            <Image
              src={selectedUI.image}
              alt={selectedUI.title}
              width={1600}
              height={1000}
              className="object-contain w-full rounded-2xl border border-white/20"
            />
            <button
              className="mt-5 block mx-auto text-[0.48rem] font-bold tracking-[0.5em] uppercase text-white/55 hover:text-white transition-colors px-6 py-2 rounded-full border border-white/15 hover:border-white/35"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              ✕ Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}