"use client";

import { useState } from "react";
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
  SiCanva
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
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

export default function PortfolioSection() {
  const [tab, setTab] = useState<"projects" | "tech" | "cert">("projects");
  const [selectedUI, setSelectedUI] = useState<Item | null>(null);

  const webProjects: Item[] = [
    {
      id: "capstone",
      title: "Groove (Capstone Project)",
      href: "/Groove",
      image: "/Image/Groove.png",
      description: "A Bulacan all-in-one performing arts hub with smart chat support.",
      techStack: ["React", "Next.js", "Tailwind", "Laravel", "MySQL", "Prisma"],
      github: "https://github.com/username/groove"
    },
    {
      id: "w1",
      title: "Simon Game",
      href: "https://simon-game2-gamma.vercel.app/",
      image: "/Image/Simon.png",
      description: "Classic Simon memory game with animations and sound effects.",
      techStack: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/username/simon-game"
    },
    {
      id: "w2",
      title: "Weeknd Soundtrip",
      href: "https://weeknd-soundtrip.vercel.app/",
      image: "/Image/WeekndSoundtrip.png",
      description: "Interactive music experience inspired by The Weeknd.",
      techStack: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/username/weeknd-soundtrip"
    },
    {
      id: "w3",
      title: "DinoVerse",
      href: "https://dinoverse-buce.vercel.app/",
      image: "/Image/Dinoverse.png",
      description: "Educational dinosaur exploration web app.",
      techStack: ["React", "Next.js", "CSS"],
      github: "https://github.com/username/dinoverse"
    },
    {
      id: "w4",
      title: "EduGuide",
      href: "https://edu-guide-three.vercel.app/",
      image: "/Image/EduGuide.png",
      description: "Educational platform to guide students through courses.",
      techStack: ["React", "Tailwind", "JavaScript"],
      github: "https://github.com/username/eduguide"
    },
    {
      id: "w5",
      title: "Kiyoto",
      href: "https://kiyoto.vercel.app/",
      image: "/Image/Kiyoto.png",
      description: "Personal portfolio website with interactive UI.",
      techStack: ["React", "Tailwind", "Next.js"],
      github: "https://github.com/username/kiyoto"
    }
  ];

  const uiProjects: Item[] = [
    { id: "ui1", title: "The Price of Sugar", href: "", image: "/Image/UI/1.jpg", uiTools: ["Figma"], description: "" },
    { id: "ui2", title: "Clay Cuneiform Tables", href: "", image: "/Image/UI/2.jpg", uiTools: ["Figma"], description: "" },
    { id: "ui3", title: "Weeknd UI Concept", href: "", image: "/Image/UI/3.jpg", uiTools: ["Figma"], description: "" },
    { id: "ui4", title: "XREAPER Hoodie", href: "", image: "/Image/UI/4.png", uiTools: ["Canva"], description: "" },
    { id: "ui5", title: "BATTLE", href: "", image: "/Image/UI/5.jpg", uiTools: ["Figma", "Canva"], description: "" }
  ];

  const certs: Item[] = [
    { id: "c1", title: "Accenture – Skills to Succeed", href: "/Image/Certificate/S2.jpg", image: "/Image/Certificate/S2.jpg", description: "" },
    { id: "c2", title: "Java Programming Certificate", href: "/Image/Certificate/java.jpg", image: "/Image/Certificate/java.jpg", description: "" },
    { id: "c3", title: "Oracle Certified", href: "/Image/Certificate/oracle.jpg", image: "/Image/Certificate/oracle.jpg", description: "" }
  ];

  const tech: Record<string, Tech[]> = {
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
      { name: "Java", Icon: FaJava }
    ],
    Database: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "MySQL", Icon: SiMysql }
    ],
    Tools: [
      { name: "GitHub", Icon: SiGithub },
      { name: "Prisma", Icon: SiPrisma },
      { name: "VS Code", Icon: DiVisualstudio },
      { name: "Figma", Icon: SiFigma },
      { name: "Canva", Icon: SiCanva }
    ]
  };

  const cardShadow = "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition";

  return (
    <section className="w-full flex justify-center py-24 bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <div className="w-full max-w-6xl px-4 space-y-20">

        <div className="flex justify-center gap-14 text-xs font-semibold tracking-[0.3em]">
          {["projects", "tech", "cert"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t as any)}
              className={`relative px-2 pb-1 transition-colors duration-200 ${
                tab === t
                  ? " border-b-2 border-[var(--text)]"
                  : "text-[var(--text)]/50 hover:text-[var(--text)]"
              }`}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        {tab === "projects" && (
          <div className="space-y-16">

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold mb-4">Featured Project</h2>
              <Link href={webProjects[0].href}>
                <div className={`relative h-[360px] rounded-3xl overflow-hidden group ${cardShadow}`}>
                  <Image src={webProjects[0].image} alt={webProjects[0].title} fill className="object-cover" />
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full bg-white/20 text-white">
                    Groove Capstone
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                  <div className="absolute bottom-0 w-full p-5 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition">
                    <h3 className="text-xl font-semibold">{webProjects[0].title}</h3>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/20 mt-2 inline-block">{webProjects[0].description}</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {webProjects[0].techStack?.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-white/20 rounded-full">{tech}</span>
                      ))}
                    </div>
                    {webProjects[0].github && (
                      <a href={webProjects[0].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-2 hover:underline">
                        <SiGithub /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold mb-4">Function Web System</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.slice(1, 4).map(p => (
                  <Link key={p.id} href={p.href}>
                    <div className={`relative h-[200px] rounded-3xl overflow-hidden ${cardShadow} group`}>
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                      <div className="absolute bottom-0 w-full p-3 text-white opacity-0 group-hover:opacity-100 transition">
                        <h3 className="text-sm font-semibold">{p.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 inline-block mt-1">{p.description}</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {p.techStack?.map((tech) => (
                            <span key={tech} className="text-xs px-1 py-0.5 bg-white/20 rounded-full">{tech}</span>
                          ))}
                        </div>
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-1 hover:underline">
                            <SiGithub /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold mb-4">Other Frontend Web Projects</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {webProjects.slice(4).map(p => (
                  <Link key={p.id} href={p.href}>
                    <div className={`relative h-[200px] rounded-3xl overflow-hidden ${cardShadow} group`}>
                      <Image src={p.image} alt={p.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                      <div className="absolute bottom-0 w-full p-3 text-white opacity-0 group-hover:opacity-100 transition">
                        <h3 className="text-sm font-semibold">{p.title}</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 inline-block mt-1">{p.description}</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {p.techStack?.map((tech) => (
                            <span key={tech} className="text-xs px-1 py-0.5 bg-white/20 rounded-full">{tech}</span>
                          ))}
                        </div>
                        {p.github && (
                          <a href={p.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs mt-1 hover:underline">
                            <SiGithub /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold mb-4">UI Design</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {uiProjects.map(p => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedUI(p)}
                    className={`relative h-[260px] rounded-3xl overflow-hidden cursor-pointer group ${cardShadow}`}
                  >
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
                    <div className="absolute bottom-0 w-full p-5 text-white opacity-0 group-hover:opacity-100 transition">
                      <h3 className="font-semibold">{p.title}</h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {p.uiTools?.map((tool) => (
                          <span key={tool} className="text-xs px-2 py-1 bg-white/20 rounded-full flex items-center gap-1">
                            {tool === "Figma" && <SiFigma />}
                            {tool === "Canva" && <SiCanva />}
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {tab === "tech" && (
          <div className="space-y-16">
            {Object.entries(tech).map(([group, list]) => (
              <div key={group}>
                <h3 className="text-xs font-semibold tracking-widest mb-6">{group.toUpperCase()}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                  {list.map(t => (
                    <div
                      key={t.name}
                      className={`h-[130px] rounded-3xl bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition flex flex-col items-center justify-center gap-3 ${cardShadow}`}
                    >
                      <t.Icon className="text-3xl" />
                      <span className="text-sm">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "cert" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {certs.map(c => (
              <a key={c.id} href={c.href} target="_blank" rel="noopener noreferrer">
                <div className={`rounded-3xl overflow-hidden ${cardShadow}`}>
                  <Image src={c.image} alt={c.title} width={400} height={180} className="object-cover w-full h-[180px]" />
                  <div className="p-4 text-sm font-medium bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition">{c.title}</div>
                </div>
              </a>
            ))}
          </div>
        )}

      </div>

      {selectedUI && (
        <div
          onClick={() => setSelectedUI(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50"
        >
          <Image src={selectedUI.image} alt={selectedUI.title} width={1200} height={800} className="max-h-[90vh] rounded-2xl shadow-2xl object-contain" />
        </div>
      )}
    </section>
  );
}
