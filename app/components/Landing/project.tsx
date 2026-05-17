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
import { HiOutlineSquares2X2, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { RxArrowRight } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

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
  workType?: string;
};

type Tech = {
  name: string;
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
};

const WEB_DEVELOPMENT: Item[] = [
  { id: "capstone", title: "Groove (Capstone Project)", href: "/Groove", image: "/Image/Groove.png", description: "A Bulacan all-in-one performing arts hub with smart chat support and real-time event management.", techStack: ["Laravel", "MySQL", "Xampp", "TailwindCSS"], github: "https://github.com/johnrenz-bot/groove", workType: "web-development" },
];

const WEBSITE_DESIGN: Item[] = [
  { id: "w5", title: "Kiyoto", href: "https://kiyoto.vercel.app/", image: "/Image/Kiyoto.png", description: "Personal portfolio website with interactive UI and smooth animations throughout.", techStack: ["React", "Tailwind", "Next.js"], workType: "website-design" },
  { id: "w2", title: "Weeknd Soundtrip", href: "https://weeknd-soundtrip.vercel.app/", image: "/Image/WeekndSoundtrip.png", description: "Interactive music experience inspired by The Weeknd with immersive design.", techStack: ["React", "Tailwind", "JavaScript"], workType: "website-design" },
  { id: "w3", title: "DinoVerse", href: "https://dinoverse-buce.vercel.app/", image: "/Image/Dinoverse.png", description: "Educational dinosaur exploration web app with interactive learning modules.", techStack: ["React", "Next.js", "CSS"], workType: "website-design" },
  { id: "w4", title: "EduGuide", href: "https://edu-guide-three.vercel.app/", image: "/Image/EduGuide.png", description: "Educational platform to guide students through interactive courses with progress tracking.", techStack: ["React", "Tailwind", "JavaScript"], workType: "web-development" },
  { id: "w6", title: "Windbreaker", href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/", image: "/Image/windbreaker.png", description: "Digital home for street riders to track progress, connect with crews and share experiences.", techStack: ["Next.js", "Tailwind"], workType: "web-development" },
];

const UI_UX_DESIGNS: Item[] = [
  { id: "ui1", title: "Reefer", href: "/Reefer", image: "/Image/UI/Reefer.png", uiTools: ["Figma"], description: "Modern mobile application interface with intuitive user experience design.", category: "UI/UX", workType: "ui-ux" },
];

const DEVICE_MOCKUPS: Item[] = [
  { id: "M1", title: "Mockup", href: "", image: "/Image/Devices/watch.png", uiTools: ["Adobe Photoshop"], description: "watch mockup for tech event", category: "Mockup", workType: "Mockup" },
  { id: "M2", title: "Mockup", href: "", image: "/Image/Devices/phone.png", uiTools: ["Adobe Photoshop"], description: "Iphone mockup for tech event", category: "Mockup", workType: "Mockup" },
  { id: "M3", title: "Mockup", href: "", image: "/Image/Devices/Iphone.png", uiTools: ["Adobe Photoshop"], description: "Iphone mockup for tech event", category: "Mockup", workType: "Mockup" },
  { id: "M4", title: "Mockup", href: "", image: "/Image/Devices/Iphone1.png", uiTools: ["Adobe Photoshop"], description: "Iphone mockup for tech event", category: "Mockup", workType: "Mockup" },
  { id: "M5", title: "Mockup", href: "", image: "/Image/Devices/Iphone2.png", uiTools: ["Adobe Photoshop"], description: "Iphone mockup for tech event", category: "Mockup", workType: "Mockup" },
];

const POSTERS: Item[] = [
  { id: "Tech1", title: "WATCH mockup Poster", href: "", image: "/Image/tech/tech1.png", uiTools: ["Canva"], description: "Watch mockup poster for tech event", category: "Poster", workType: "poster" },
  { id: "Tech2", title: "Iphone mockup Poster", href: "", image: "/Image/tech/tech2.png", uiTools: ["Canva"], description: "Iphone mockup poster for tech event", category: "Poster", workType: "poster" },
  { id: "Tech3", title: "Iphone mockup Poster", href: "", image: "/Image/tech/tech3.png", uiTools: ["Canva"], description: "Iphone mockup poster for tech event", category: "Poster", workType: "poster" },
  { id: "Tech4", title: "Iphone mockup Poster", href: "", image: "/Image/tech/tech4.png", uiTools: ["Canva"], description: "Iphone mockup poster for tech event", category: "Poster", workType: "poster" },
  { id: "Tech5", title: "Iphone mockup Poster", href: "", image: "/Image/tech/tech5.png", uiTools: ["Canva"], description: "Iphone mockup poster for tech event", category: "Poster", workType: "poster" },

  { id: "STEM1", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM1.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },
    { id: "STEM2", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM2.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },
  { id: "STEM3", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM3.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },
  { id: "STEM4", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM4.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },
  { id: "STEM5", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM5.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },
  { id: "STEM6", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM6.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },
  { id: "STEM7", title: "TECH EVENT mockup Poster", href: "", image: "/Image/tech/STEM7.png", uiTools: ["Canva"], description: "Tech event mockup poster", category: "Poster", workType: "poster" },


  { id: "cv1", title: "The Price of Sugar", href: "", image: "/Image/UI/1.jpg", uiTools: ["Canva"], description: "Graphic design poster exploring visual storytelling.", category: "Poster", workType: "poster" },
  { id: "ps3", title: "GA design poster", href: "", image: "/Image/UI/poster.png", uiTools: ["Photoshop"], description: "Graphic design poster for new arrival campaign.", category: "Poster", workType: "poster" },
];

const MERCHANDISE_DESIGNS: Item[] = [
  { id: "ps4", title: "Alien Shirt", href: "", image: "/Image/UI/alien.png", uiTools: ["Photoshop"], description: "Custom T-shirt design featuring Reefer branding.", category: "Merchandise", workType: "merchandise" },
  { id: "ps5", title: "Chest Shirt", href: "", image: "/Image/UI/11.png", uiTools: ["Photoshop"], description: "Alternate colorway shirt design for streetwear collection.", category: "Merchandise", workType: "merchandise" },
  { id: "ps6", title: "Devine Outcast Shirt", href: "", image: "/Image/UI/12.png", uiTools: ["Photoshop"], description: "Custom T-shirt design with artistic expression.", category: "Merchandise", workType: "merchandise" },
  { id: "ps7", title: "Visionless Shirt", href: "", image: "/Image/UI/13.png", uiTools: ["Photoshop"], description: "Alternate colorway shirt design for brand identity.", category: "Merchandise", workType: "merchandise" },
  { id: "ps8", title: "Last hope Shirt", href: "", image: "/Image/UI/14.png", uiTools: ["Photoshop"], description: "Custom T-shirt design with meaningful message.", category: "Merchandise", workType: "merchandise" },
  { id: "ps9", title: "hiphop Shirt", href: "", image: "/Image/UI/15.png", uiTools: ["Photoshop"], description: "Custom T-shirt design for music culture enthusiasts.", category: "Merchandise", workType: "merchandise" },
  { id: "ps10", title: "hiphop Shirt Alt", href: "", image: "/Image/UI/Cmytk.png", uiTools: ["Photoshop"], description: "Alternative design for hip-hop inspired collection.", category: "Merchandise", workType: "merchandise" },
];

const GRAPHIC_DESIGNS: Item[] = [
  { id: "ps1", title: "McLaren", href: "", image: "/Image/UI/7.png", uiTools: ["Photoshop"], description: "McLaren-inspired luxury automotive branding concept showcasing high-performance visual identity design.", category: "Graphic Design", workType: "graphic-design" },
  { id: "ps2", title: "Me GA", href: "", image: "/Image/UI/8.png", uiTools: ["Photoshop"], description: "Experimental McLaren variation exploring alternative automotive branding composition and visual direction.", category: "Graphic Design", workType: "graphic-design" },
  { id: "cv3", title: "Weeknd UI Concept", href: "", image: "/Image/UI/3.jpg", uiTools: ["Canva"], description: "The Weeknd-inspired UI concept focused on moody aesthetics, atmospheric tone, and expressive visual storytelling.", category: "Graphic Design", workType: "graphic-design" },
  { id: "dm1", title: "Reefer Hoodie", href: "", image: "/Image/UI/4.png", uiTools: ["Figma"], description: "Reefer hoodie product concept design featuring a clean, modern layout for apparel presentation.", category: "Graphic Design", workType: "graphic-design" },
  { id: "dm2", title: "Fliptop Poster", href: "", image: "/Image/UI/5.jpg", uiTools: ["Figma"], description: "FlipTop event poster design emphasizing bold typography and strong visual hierarchy for digital display.", category: "Graphic Design", workType: "graphic-design" },
  { id: "dm3", title: "UI Mazda Figma", href: "", image: "/Image/UI/6.png", uiTools: ["Figma"], description: "Mazda-inspired automotive dashboard UI concept with a sleek, modern, and user-focused interface design.", category: "Graphic Design", workType: "graphic-design" },
  { id: "cv2", title: "Clay Cuneiform Tables", href: "", image: "/Image/UI/2.jpg", uiTools: ["Canva"], description: "Informational graphic design piece with historical significance.", category: "Poster", workType: "poster" },

];

const CERTS: Item[] = [
  { id: "c1", title: "Google UX Certification", href: "/Image/Certificate/GoogleUX.jpg", image: "/Image/Certificate/GoogleUX.jpg", description: "Google UX Design Certification covering user research, wireframing, prototyping, and usability testing." },
  { id: "c2", title: "Accenture – Skills to Succeed", href: "/Image/Certificate/S2.jpg", image: "/Image/Certificate/S2.jpg", description: "Certification in professional skills development." },
  { id: "c3", title: "Java Programming Certificate", href: "/Image/Certificate/java.jpg", image: "/Image/Certificate/java.jpg", description: "Certification in Java programming fundamentals." },
  { id: "c4", title: "Oracle Certified", href: "/Image/Certificate/oracle.jpg", image: "/Image/Certificate/oracle.jpg", description: "Certification in Oracle database management." },
  { id: "c5", title: "Canva Graphic Design Certificate", href: "https://www.canva.com/design-school/certification-award/198b01d5-617f-440d-b42e-453aedc794df", image: "/Image/Certificate/Canva.png", description: "Certification in graphic design using Canva." },
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

const WORK_CATEGORIES = [
  { key: "web-dev", label: "Development", sub: "Full-stack", count: WEB_DEVELOPMENT.length },
  { key: "website-design", label: "Frontend Design", sub: "UI/UX", count: WEBSITE_DESIGN.length },
  { key: "ui-ux", label: "UI/UX", sub: "Design", count: UI_UX_DESIGNS.length },
  { key: "mockups", label: "Mockups", sub: "Devices", count: DEVICE_MOCKUPS.length },
  { key: "posters", label: "Posters", sub: "Marketing", count: POSTERS.length },
  { key: "merchandise", label: "Merch", sub: "Fashion", count: MERCHANDISE_DESIGNS.length },
  { key: "graphic-design", label: "Graphics", sub: "Design", count: GRAPHIC_DESIGNS.length },
] as const;

const MAIN_TABS = [
  { key: "portfolio", label: "Portfolio", sub: "All Works" },
  { key: "tech", label: "Stack", sub: "Technologies" },
  { key: "cert", label: "Credentials", sub: "Certificates" },
] as const;

function SectionHeader({ label, count, className = "" }: { label: string; count?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-3 sm:gap-5 mb-10 sm:mb-14 group ${className}`}>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="w-1 h-8 sm:h-10 bg-gradient-to-b from-[var(--text)] to-[var(--text)]/30 rounded-full" />
        <h2 className="text-xs sm:text-sm font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[var(--text)]/80" style={{ fontFamily: "'DM Mono', monospace" }}>
          {label}
        </h2>
      </div>
      {count !== undefined && (
        <span className="ml-auto text-xs sm:text-sm font-black tracking-[0.3em] uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[var(--text)]/5 to-[var(--text)]/0 border border-[var(--text)]/10 text-[var(--text)]/60" style={{ fontFamily: "'DM Mono', monospace" }}>
          {String(count).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}

function CountBadge({ value, label, icon: Icon }: { value: number; label: string; icon?: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[var(--text)]/5 bg-gradient-to-br from-[var(--text)]/[0.02] to-transparent hover:border-[var(--text)]/10 transition-all duration-300 group">
      {Icon && <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform">{Icon}</div>}
      <span className="text-3xl sm:text-5xl font-black text-[var(--text)] tabular-nums" style={{ fontFamily: "'DM Mono', monospace" }}>
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[0.65rem] sm:text-xs font-bold tracking-[0.3em] uppercase text-[var(--text)]/40" style={{ fontFamily: "'DM Mono', monospace" }}>
        {label}
      </span>
    </div>
  );
}

export default function PortfolioSection() {
  const [tab, setTab] = useState<"portfolio" | "tech" | "cert">("portfolio");
  const [workCategory, setWorkCategory] = useState<"web-dev" | "website-design" | "ui-ux" | "mockups" | "posters" | "merchandise" | "graphic-design">("web-dev");
  const [selectedProject, setSelectedProject] = useState<Item | null>(null);

  const getWorkItems = (category: typeof workCategory): Item[] => {
    const categoryMap = {
      "web-dev": WEB_DEVELOPMENT,
      "website-design": WEBSITE_DESIGN,
      "ui-ux": UI_UX_DESIGNS,
      "mockups": DEVICE_MOCKUPS,
      "posters": POSTERS,
      "merchandise": MERCHANDISE_DESIGNS,
      "graphic-design": GRAPHIC_DESIGNS,
    };
    return categoryMap[category] || [];
  };

  const currentItems = getWorkItems(workCategory);
  const totalWorks = WEB_DEVELOPMENT.length + WEBSITE_DESIGN.length + UI_UX_DESIGNS.length + DEVICE_MOCKUPS.length + POSTERS.length + MERCHANDISE_DESIGNS.length + GRAPHIC_DESIGNS.length;
  const isSingleItem = currentItems.length === 1;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&family=DM+Mono:wght@300;400;500&display=swap');
        
        .container-3d { transform-style: preserve-3d; perspective: 1000px; }
        
        .card-3d {
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform: translateZ(0);
        }
        
        .card-3d:hover {
          transform: translateZ(20px) translateY(-10px);
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
        }
        
        .btn-modern {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .btn-modern::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          opacity: 0;
          transition: opacity 0.6s;
        }
        
        .btn-modern:hover::before { opacity: 1; }
        
        .active-tab-glow {
          box-shadow: inset 0 0 20px rgba(255,255,255,0.08), 0 15px 35px -15px rgba(0,0,0,0.4);
        }
        
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        .project-card {
          position: relative;
          overflow: hidden;
          aspect-ratio: 4/3;
        }
        
        .project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.5s;
          pointer-events: none;
        }
        
        .project-card:hover::after { opacity: 1; }
        
        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.4s;
        }
        
        .project-card:hover .image-overlay {
          opacity: 1;
        }
        
        .view-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover .view-indicator {
          opacity: 1;
          transform: translateY(0);
        }
        
        .modal-overlay {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(12px);
          }
        }
        
        .modal-content {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .single-item-container {
          display: grid;
          grid-template-columns: 1fr;
          place-items: center;
        }
        
        .single-item-card {
          max-width: 500px;
          width: 100%;
          margin: 0 auto;
        }
        
        @media (max-width: 640px) {
          .single-item-card { max-width: 100%; }
        }
      `}</style>

      <section className="relative z-10 w-full flex justify-center py-16 sm:py-32 bg-transparent text-[var(--text)]">
        <div className="w-full max-w-7xl px-4 sm:px-8">
          <div className="mb-16 sm:mb-24 space-y-8 sm:space-y-12">
            <div className="grid grid-cols-3 gap-3 sm:gap-6">
              <CountBadge value={totalWorks} label="Works" />
              <CountBadge value={WORK_CATEGORIES.length} label="Category" />
              <CountBadge value={CERTS.length} label="Certified" />
            </div>
            <div className="w-full h-px bg-gradient-to-r from-[var(--text)]/0 via-[var(--text)]/10 to-[var(--text)]/0" />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 sm:gap-12 mb-16 sm:mb-24">
            <div className="space-y-2 sm:space-y-4">
              <h1 className="text-4xl sm:text-6xl font-black text-[var(--text)] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Creative Portfolio
              </h1>
              <p className="text-[var(--text)]/50 text-sm sm:text-base max-w-md" style={{ fontFamily: "'DM Mono', monospace" }}>
                Crafting digital experiences through code, design, and innovation
              </p>
            </div>

            <nav className="inline-flex p-1 sm:p-2 bg-[var(--text)]/[0.03] rounded-2xl sm:rounded-3xl border border-[var(--text)]/5 backdrop-blur-xl w-full sm:w-auto overflow-x-auto no-scrollbar gap-1 sm:gap-2">
              {MAIN_TABS.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setTab(t.key)}
                  className={`btn-modern relative flex flex-col items-center flex-1 sm:flex-none px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all whitespace-nowrap ${tab === t.key
                      ? "bg-[var(--bg)] border border-[var(--text)]/20 text-[var(--text)] active-tab-glow"
                      : "text-[var(--text)]/40 hover:text-[var(--text)]/60 border border-transparent"
                    }`}
                >
                  <span className="text-[0.65rem] sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {t.label}
                  </span>
                  <span className="text-[0.45rem] sm:text-xs tracking-[0.1em] uppercase opacity-50" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {t.sub}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {tab === "portfolio" && (
            <div className="space-y-16 sm:space-y-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2 sm:gap-3">
                {WORK_CATEGORIES.map((cat) => {
                  const catKey = cat.key as typeof workCategory;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => setWorkCategory(catKey)}
                      className={`btn-modern group px-3 sm:px-4 py-4 sm:py-5 rounded-xl sm:rounded-2xl border text-center transition-all relative overflow-hidden ${workCategory === cat.key
                          ? "bg-gradient-to-br from-[var(--text)]/15 to-[var(--text)]/5 border-[var(--text)]/20 text-[var(--text)] shadow-lg"
                          : "border-[var(--text)]/5 text-[var(--text)]/40 hover:border-[var(--text)]/10 hover:text-[var(--text)]/60 hover:bg-[var(--text)]/[0.02]"
                        }`}
                    >
                      <div className="space-y-2">
                        <div className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {cat.label}
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-[0.65rem] sm:text-xs opacity-60">{cat.sub}</span>
                          <span className="text-[0.65rem] sm:text-xs font-black opacity-80">{String(cat.count).padStart(2, "0")}</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-10 sm:space-y-14">
                <SectionHeader label={WORK_CATEGORIES.find(c => c.key === workCategory)?.label || "Works"} count={currentItems.length} />

                {currentItems.length > 0 ? (
                  <div className={isSingleItem ? "single-item-container" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 container-3d"}>
                    {currentItems.map((item) => (
                      <div
                        key={item.id}
                        className={isSingleItem ? "single-item-card" : "group cursor-pointer h-full"}
                        onClick={() => setSelectedProject(item)}
                      >
                        <div className="card-3d relative h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--text)]/5 hover:border-[var(--text)]/15 transition-all bg-gradient-to-br from-[var(--text)]/[0.02] to-transparent">
                          <div className="project-card relative w-full bg-[var(--text)]/[0.03]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                              priority={false}
                            />
                            <div className="image-overlay" />
                            <div className="view-indicator flex items-center justify-center gap-2 text-white text-xs sm:text-sm font-medium">
                              <span>View Project</span>
                              <RxArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="col-span-full text-center py-16 sm:py-20">
                    <p className="text-[var(--text)]/50 text-sm sm:text-base">No items in this category yet</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {tab === "tech" && (
            <div className="animate-in fade-in zoom-in-95 duration-1000">
              <div className="space-y-16 sm:space-y-20">
                {Object.entries(TECH_DATA).map(([group, list]) => (
                  <div key={group} className="space-y-8 sm:space-y-12">
                    <SectionHeader label={group} count={list.length} />
                    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-5">
                      {list.map((t) => (
                        <div
                          key={t.name}
                          className="group relative aspect-square flex flex-col items-center justify-center rounded-2xl sm:rounded-3xl border border-[var(--text)]/5 hover:border-[var(--text)]/20 transition-all bg-gradient-to-br from-[var(--text)]/[0.03] to-transparent hover:from-[var(--text)]/[0.08] duration-500 cursor-default hover:shadow-lg hover:-translate-y-1"
                        >
                          <div className="relative transition-all duration-500 group-hover:scale-125 group-hover:-rotate-12">
                            <t.Icon className="text-2xl sm:text-3xl" style={{ color: t.color }} />
                          </div>
                          <span className="absolute bottom-0 left-0 right-0 text-[0.45rem] sm:text-xs font-bold uppercase tracking-[0.1em] text-[var(--text)]/60 group-hover:text-[var(--text)]/90 px-2 py-2 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
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
            <div className="space-y-10 sm:space-y-16 animate-in fade-in slide-in-from-top-8 duration-1000">
              <SectionHeader label="Certificates & Credentials" count={CERTS.length} />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {CERTS.map((c) => (
                  <a
                    key={c.id}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--text)]/5 hover:border-[var(--text)]/15 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br from-[var(--text)]/[0.02] to-transparent"
                  >
                    <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[var(--text)]/[0.05] to-transparent overflow-hidden">
                      <Image
                        src={c.image}
                        alt={c.title}
                        fill
                        className="object-cover sm:grayscale sm:group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-4">
                        <div className="flex items-center gap-2 text-white text-xs sm:text-sm font-medium">
                          <span>View Certificate</span>
                          <HiArrowTopRightOnSquare className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4 sm:p-5 bg-[var(--bg)] border-t border-[var(--text)]/5">
                      <h3 className="text-xs sm:text-sm font-bold text-[var(--text)] truncate">{c.title}</h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedProject && (
        <div
          className="modal-overlay fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-lg"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="modal-content relative w-full max-w-5xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors z-50"
            >
              <IoClose className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black flex items-center justify-center" style={{ maxHeight: "70vh" }}>
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={1200}
                height={800}
                className="object-contain w-auto h-auto max-h-[70vh] max-w-full"
                priority
              />
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col items-center text-center space-y-6 sm:space-y-8 max-w-3xl">
              <div className="space-y-4 sm:space-y-6">
                <h2
                  className="text-2xl sm:text-4xl font-light text-white tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {selectedProject.title}
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {(selectedProject.techStack || selectedProject.uiTools) && (
                <div className="w-full space-y-4">
                  <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/60" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Technologies & Tools
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                    {(selectedProject.techStack || selectedProject.uiTools)?.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 text-white/90 font-medium hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 sm:pt-8">
                {selectedProject.href && selectedProject.href.startsWith("http") && (
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Visit Project
                  </a>
                )}
                {selectedProject.href && !selectedProject.href.startsWith("http") && (
                  <Link
                    href={selectedProject.href}
                    className="px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    View Project
                  </Link>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    View Code
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 sm:px-12 py-3 sm:py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs sm:text-sm font-bold tracking-[0.2em] uppercase text-white/80 hover:text-white hover:bg-white/10 transition-all duration-500"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}