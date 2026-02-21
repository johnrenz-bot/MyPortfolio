"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    SiPhp, SiJavascript, SiReact, SiLaravel, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiGithub, SiNodedotjs,
    SiExpress, SiPostgresql, SiMysql, SiPrisma, SiTypescript, SiNextdotjs, SiFigma, SiCanva, SiAdobephotoshop,
    SiAdobecreativecloud, SiGit, SiHostinger, SiVercel, SiXampp, SiSap
} from "react-icons/si";
import { FaJava, FaFilePowerpoint } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { motion, Variants } from "framer-motion";

type Tab = "projects" | "tech" | "cert";

type Item = {
    id: string;
    title: string;
    href: string;
    image: string;
    description: string;
    techStack?: string[];
    uiTools?: string[];
    github?: string;
};

type Tech = {
    name: string;
    Icon: React.ComponentType<{ size?: number }>;
};

const UI_PROJECTS: Item[] = [
    { id: "ui1", title: "The Price of Sugar", href: "", image: "/Image/UI/1.jpg", uiTools: ["Canva"], description: "" },
    { id: "ui2", title: "Clay Cuneiform Tables", href: "", image: "/Image/UI/2.jpg", uiTools: ["Canva"], description: "" },
    { id: "ui3", title: "Weeknd UI Concept", href: "", image: "/Image/UI/3.jpg", uiTools: ["Canva"], description: "" },
    { id: "ui4", title: "XREAPER Hoodie", href: "", image: "/Image/UI/4.png", uiTools: ["Figma"], description: "" },
    { id: "ui5", title: "BATTLE", href: "", image: "/Image/UI/5.jpg", uiTools: ["Figma"], description: "" },
    { id: "ui6", title: "Mazda", href: "", image: "/Image/UI/6.png", uiTools: ["Figma"], description: "" }
];

const WEB_PROJECTS: Item[] = [
    { id: "capstone", title: "Groove – Performing Arts Hub", href: "/Groove", image: "/Image/Groove.png", description: "All-in-one performing arts hub with smart chat, bookings, and talent discovery.", techStack: ["React", "Next.js", "Tailwind", "Laravel", "MySQL", "Prisma"], github: "https://github.com/johnrenz-bot/groove" },
    { id: "simon", title: "Simon Game", href: "https://simon-game2-gamma.vercel.app/", image: "/Image/Simon.png", description: "Interactive memory game with animations and sound effects.", techStack: ["JavaScript", "HTML", "CSS"], github: "https://github.com/johnrenz-bot/simon-game" },
    { id: "weeknd", title: "Weeknd Soundtrip", href: "https://weeknd-soundtrip.vercel.app/", image: "/Image/WeekndSoundtrip.png", description: "Immersive music experience inspired by The Weeknd.", techStack: ["React", "Tailwind"], github: "https://github.com/johnrenz-bot/weeknd-soundtrip" },
    { id: "dino", title: "DinoVerse", href: "https://dinoverse-buce.vercel.app/", image: "/Image/Dinoverse.png", description: "Educational dinosaur web app with modern UI.", techStack: ["React", "Next.js"], github: "https://github.com/johnrenz-bot/dinoverse" },
    { id: "eduguide", title: "EduGuide", href: "https://edu-guide-three.vercel.app/", image: "/Image/EduGuide.png", description: "Student-focused learning platform.", techStack: ["React", "Tailwind"], github: "https://github.com/johnrenz-bot/eduguide" },
    { id: "kiyoto", title: "Kiyoto Portfolio", href: "https://kiyoto.vercel.app/", image: "/Image/Kiyoto.png", description: "Personal portfolio with interactive design.", techStack: ["Next.js", "Tailwind"], github: "https://github.com/johnrenz-bot/kiyoto" },
    { id: "windbreaker", title: "Windbreaker", href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/", image: "/Image/windbreaker.png", description: "Street riders platform to track rides and connect with crews.", techStack: ["Next.js", "Tailwind"], github: "https://github.com/johnrenz-bot/Windbreaker" }
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
    Design: [
        { name: "Figma", Icon: SiFigma },
        { name: "Canva", Icon: SiCanva },
        { name: "Adobe CC", Icon: SiAdobecreativecloud },
        { name: "Photoshop", Icon: SiAdobephotoshop },
        { name: "PowerPoint", Icon: FaFilePowerpoint }
    ],
    Tools: [
        { name: "VS Code", Icon: DiVisualstudio },
        { name: "Git", Icon: SiGit },
        { name: "GitHub", Icon: SiGithub },
        { name: "Vercel", Icon: SiVercel },
        { name: "Hostinger", Icon: SiHostinger },
        { name: "SAP", Icon: SiSap }
    ]
};

export default function ProjectsPage() {
    const [tab, setTab] = useState<Tab>("projects");
    const [selectedUI, setSelectedUI] = useState<Item | null>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const CARD_STYLE = "bg-zinc-900 rounded-3xl border border-zinc-800 shadow-lg hover:shadow-2xl";

    useEffect(() => {
        if (selectedUI && modalRef.current) {
            modalRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, [selectedUI]);

    const backgroundTextVariants: Variants = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: { opacity: 0.1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } }
    };

    const logoVariants: Variants = {
        hidden: { opacity: 0, y: -50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
    };

    const navItemVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } })
    };

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } })
    };

    return (
        <main className="relative min-h-screen w-full bg-black text-white font-sans uppercase overflow-hidden">

            <motion.div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0"
                initial="hidden"
                animate="visible"
                variants={backgroundTextVariants}
            >
                <h2 className="text-[15vw] font-black tracking-tighter text-gray-500">JOHN RENZ</h2>
                <h2 className="text-[18vw] font-black tracking-tighter text-gray-600 -mt-10">BANDANON</h2>
            </motion.div>

            <nav className="relative z-20 w-full flex justify-center items-center py-6 mb-20">
                <motion.div className="w-[10%] flex justify-center items-center p-3" initial="hidden" animate="visible" variants={logoVariants}>
                    <img src="/Image/Vector.png" alt="John Renz" className="h-[5vh] object-contain" />
                </motion.div>
                <div className="w-[90%] flex justify-evenly items-center text-2xl font-semibold gap-8">
                    {["Home", "About"].map((item, i) => (
                        <motion.div key={item} custom={i} initial="hidden" animate="visible" variants={navItemVariants}>
                            <Link href={item === "About" ? "/new/Aboutme" : "/new"} className="hover:text-gray-400 transition">{item}</Link>
                        </motion.div>
                    ))}
                    <motion.div className="w-16 h-16 rounded-xl border-2 border-zinc-500 overflow-hidden bg-zinc-900 mt-2" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.5 }}>
                        <img src="/Image/general.png" alt="profile" className="w-full h-full object-cover" />
                    </motion.div>
                    {["Projects", "Contact"].map((item, i) => (
                        <motion.div key={item} custom={i + 2} initial="hidden" animate="visible" variants={navItemVariants}>
                            <Link href={item === "Contact" ? "/new/Contact" : "/new/Projects"} className={item === "Projects" ? "text-red-500" : "hover:text-gray-400 transition"}>{item}</Link>
                        </motion.div>
                    ))}
                </div>
            </nav>

            <section className="relative z-20 px-6 lg:px-12 pb-20">
                <div className="flex flex-col md:flex-row justify-between items-center mb-14 gap-6">
                    <motion.h1 className="text-5xl md:text-6xl font-extrabold tracking-tight" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}>Projects</motion.h1>
                    <motion.div className="relative inline-flex p-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.1 } }}
                    >
                        {["projects", "tech", "cert"].map((t) => (
                            <button
                                key={t}
                                onClick={() => setTab(t as Tab)}
                                className={`relative px-6 py-2 text-sm font-semibold rounded-full transition-all duration-300 tracking-wide
                                ${tab === t ? "bg-white/90 text-black shadow-md scale-105" : "text-zinc-400 hover:text-white hover:bg-white/10"}`}
                            >
                                {t.toUpperCase()}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {tab === "projects" && (
                    <motion.div className="space-y-20" initial="hidden" animate="visible" variants={fadeUpVariants}>
                        <section>
                            <motion.h2 className="text-3xl font-bold mb-8 flex items-center gap-4" variants={fadeUpVariants}>Featured Work <span className="h-px flex-1 bg-[var(--text)]/10" /></motion.h2>
                            <Link href={WEB_PROJECTS[0].href}>
                                <motion.div className={`relative h-[450px] rounded-[2rem] overflow-hidden group ${CARD_STYLE}`} variants={cardVariants} custom={0}>
                                    <Image src={WEB_PROJECTS[0].image} alt={WEB_PROJECTS[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent flex flex-col justify-end p-10">
                                        <span className="w-fit px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 mb-4">
                                            Primary Project
                                        </span>
                                        <h3 className="text-3xl font-bold text-white mb-3">{WEB_PROJECTS[0].title}</h3>
                                        <p className="max-w-2xl text-white/70 mb-6 line-clamp-2">{WEB_PROJECTS[0].description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {WEB_PROJECTS[0].techStack?.map((tech) => (
                                                <span key={tech} className="text-[10px] px-3 py-1 bg-white/10 rounded-lg text-white/90 backdrop-blur-sm border border-white/10 uppercase font-semibold">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        </section>

                        <section>
                            <motion.h2 className="text-2xl font-bold mb-8" variants={fadeUpVariants}>Web Systems & Frontend</motion.h2>
                            <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {WEB_PROJECTS.slice(1).map((p, i) => (
                                    <motion.div key={p.id} variants={cardVariants} custom={i}>
                                        <Link href={p.href}>
                                            <div className={`relative h-[280px] rounded-3xl overflow-hidden group ${CARD_STYLE}`}>
                                                <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                                    <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {p.techStack?.map((tech) => (
                                                            <span key={tech} className="text-[9px] px-2 py-0.5 bg-white/20 rounded-md text-white font-medium">{tech}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </section>

                        <section>
                            <motion.h2 className="text-2xl font-bold mb-8" variants={fadeUpVariants}>UI & Visual Design</motion.h2>
                            <motion.div className="grid md:grid-cols-3 gap-6">
                                {UI_PROJECTS.map((p, i) => (
                                    <motion.div key={p.id} onClick={() => setSelectedUI(p)} variants={cardVariants} custom={i}>
                                        <div className={`relative h-[300px] rounded-2xl overflow-hidden cursor-pointer group ${CARD_STYLE}`}>
                                            <Image src={p.image} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end p-6 text-white">
                                                <h3 className="font-bold text-sm mb-3">{p.title}</h3>
                                                <div className="flex gap-2 flex-wrap">
                                                    {p.uiTools?.map((tool) => (
                                                        <span key={tool} className="text-[10px] px-2 py-1 bg-white/20 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                                                            {tool === "Figma" ? <SiFigma size={12} /> : <SiCanva size={12} />} {tool}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {selectedUI && (
                                <motion.div
                                    ref={modalRef}
                                    onClick={() => setSelectedUI(null)}
                                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <div className="relative w-full max-w-4xl max-h-[85vh]">
                                        <Image src={selectedUI.image} alt={selectedUI.title} width={1600} height={1000} className="rounded-xl shadow-2xl object-contain w-full h-full" />
                                        <button className="absolute -top-12 right-0 text-white text-[10px] font-black tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
                                            Close [x]
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </section>
                    </motion.div>
                )}

                {tab === "tech" && (
                    <motion.div className="space-y-12" initial="hidden" animate="visible" variants={fadeUpVariants}>
                        {Object.entries(TECH_DATA).map(([category, techs], i) => (
                            <div key={category}>
                                <h2 className="text-2xl font-bold mb-6">{category}</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {techs.map((tech, j) => (
                                        <motion.div key={tech.name} className="flex flex-col items-center justify-center p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:bg-white hover:text-black transition shadow hover:shadow-lg" variants={cardVariants} custom={j}>
                                            <tech.Icon size={40} />
                                            <span className="text-xs mt-3 font-medium normal-case">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}

                {tab === "cert" && (
                    <motion.div className="grid md:grid-cols-3 gap-10" initial="hidden" animate="visible" variants={fadeUpVariants}>
                        {CERTS.map((c, i) => (
                            <motion.a key={c.id} href={c.href} target="_blank" className="group block" variants={cardVariants} custom={i}>
                                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-zinc-800 hover:border-white transition shadow hover:shadow-lg">
                                    <Image src={c.image} alt={c.title} fill className="object-cover grayscale group-hover:grayscale-0 transition" />
                                </div>
                                <p className="mt-4 text-center text-sm text-zinc-400 group-hover:text-white transition normal-case">{c.title}</p>
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </section>
        </main>
    );
}
