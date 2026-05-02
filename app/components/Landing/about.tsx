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
  FaBug,
  FaUsers,
} from "react-icons/fa";
import { FaFigma, FaReact } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiNextdotjs,
  SiLaravel,
  SiTailwindcss,
} from "react-icons/si";

const ABOUT_DATA = {
  role: "UI/UX Product Designer • Frontend Developer • Team Lead",
  description: [
    "I'm a BSIT student at STI College San Jose Del Monte, Bulacan with professional internship experience in UI/UX product design, frontend development, and team leadership.",
    "Currently interning at Alpha Centauri Garments as UI/UX Product Designer and Team Lead for REEFER — a full e-commerce web system — while also contributing as a frontend developer on a separate company project using React and Tailwind CSS.",
    "I also intern at BoxHive Digital Solutions where I design web UI screens in Figma, produce graphic design materials, and perform QA testing for IceBreaker, a mobile app published on Google Play. I use tools like Figma, Adobe Photoshop, Adobe Illustrator, and Canva to create intuitive and polished digital experiences.",
  ],
  goals: [
    "Lead product design end-to-end — from user research and wireframing to high-fidelity prototypes and design systems.",
    "Bridge design and development by building clean, responsive frontend interfaces using React, Next.js, and Tailwind CSS.",
    "Grow as a full-stack engineer and team leader who can manage projects, coordinate with stakeholders, and ship quality software.",
  ],
};

const ACADEMIC = [
  {
    institution: "STI College SJDM",
    period: "August 2022 – Present",
    subtext: "BS Information Technology",
    bio: "Currently completing my degree with hands-on exposure to the full software development lifecycle — from system design and backend architecture to UI/UX and frontend implementation. My capstone project and internships have shaped me into a well-rounded IT professional.",
    icon: <FaGraduationCap className="text-4xl text-zinc-700" />,
  },
  {
    institution: "Prenza National SHS",
    period: "June 2020 – June 2022",
    subtext: "TVL Track • ICT",
    bio: "Completed Senior High School specializing in Information and Communications Technology. Built a solid technical and vocational foundation covering computer systems, hardware diagnostics, and digital logic before entering higher education.",
    icon: <FaHistory className="text-4xl text-zinc-700" />,
  },
];

const EXPERIENCE = [
  {
    title: "UI/UX Product Designer & Team Lead",
    period: "March 2026 – Present",
    subtext: "Alpha Centauri Garments · Internship",
    details:
      "Started as UI/UX designer for REEFER, a full streetwear e-commerce web system — handling user research, information architecture, FigJam system flows, wireframes, and high-fidelity Figma prototypes. Promoted to Team Lead overseeing UI/UX direction, facilitating team meetings, and coordinating directly with the company head and clients. Also contributed as a frontend developer on a separate company project (Sorbetes) using React and Tailwind CSS.",
    icon: <FaPaintBrush className="text-4xl text-zinc-700" />,
  },
  {
    title: "IT Intern – UI/UX & Graphic Design",
    period: "April 2026 – Present",
    subtext: "BoxHive Digital Solutions · IT Startup · Internship",
    details:
      "Designed web UI screens (Home, Shop, About, Contact, Login) for a client project in Figma. Produced graphic materials including event expo posters, promotional content, and device mockups for Facebook campaigns. Additionally served as a mobile QA tester for IceBreaker (Android, Google Play) — identifying bugs, writing structured test reports, and collaborating with developers for fix verification.",
    icon: <FaBug className="text-4xl text-zinc-700" />,
  },
  {
    title: "Lead Developer & UI/UX Product Designer",
    period: "2023 – 2024",
    subtext: "Capstone Project · Groove – Performing Arts Ecosystem",
    details:
      "Led a 4-person team to design and build Groove, a performing arts platform for San Jose Del Monte, Bulacan. Conducted user research with 152 participants to define flows for three distinct user roles. Built and deployed a full-stack Laravel + MySQL application with Google Maps API integration and an AI chat feature, hosted on Hostinger. Managed an Agile development cycle aligned with ISO/IEC 25010:2014 quality standards.",
    icon: <FaUsers className="text-4xl text-zinc-700" />,
  },
  {
    title: "Full-Stack Developer & UI Designer",
    period: "2023 – 2024",
    subtext: "Capstone Project · Groove Hub",
    details:
      "Architected the full-stack system using Laravel and MySQL while designing the entire user experience in Figma. The platform features role-based workflows and real-time messaging through a responsive Tailwind CSS interface.",
    icon: <FaLaptopCode className="text-4xl text-zinc-700" />,
  },
  {
    title: "Technical Foundation",
    period: "2020 – 2022",
    subtext: "TVL-ICT · Grade 11 & 12",
    details:
      "Built a solid technical base during Senior High School, covering computer systems servicing, digital logic, and hardware diagnostics. First exposure to programming concepts that shaped my path into IT.",
    icon: <FaCode className="text-4xl text-zinc-700" />,
  },
  {
    title: "The First Program",
    period: "2022 – 2023",
    subtext: "First Year College · Java Foundation",
    details:
      "Began my programming journey with Java, learning object-oriented principles and logic-building. Earned a Java Foundations certification in June 2023. This served as the gateway into building more complex software systems.",
    icon: <FaTerminal className="text-4xl text-zinc-700" />,
  },
];

const TOOLS = [
  {
    category: "Design Tools",
    items: [
      {
        icon: <FaFigma className="text-2xl text-indigo-600 mt-1" />,
        title: "Figma",
        subtext: "UI/UX Design & Prototyping",
        details:
          "I map out user journeys, design information architecture, build wireframes, and prototype high-fidelity interactions in Figma — including full design systems and FigJam flow diagrams for complex web systems.",
      },
      {
        icon: <SiAdobephotoshop className="text-2xl text-blue-600 mt-1" />,
        title: "Photoshop",
        subtext: "Visual Compositions",
        details:
          "I craft event posters, promotional visuals, t-shirt designs, and layered graphic compositions — used professionally at both Alpha Centauri Garments and BoxHive Digital Solutions.",
      },
      {
        icon: <SiAdobeillustrator className="text-2xl text-orange-600 mt-1" />,
        title: "Illustrator",
        subtext: "Vector Graphics & Branding",
        details:
          "I build scalable logos, vector graphics, and brand assets for clothing and digital projects — ensuring visuals stay crisp across all platforms and print formats.",
      },
      {
        icon: <SiCanva className="text-2xl text-green-600 mt-1" />,
        title: "Canva",
        subtext: "Presentations & Documentation",
        details:
          "I create structured project documentation, design workflow trackers, and polished presentations — used actively for team documentation during the REEFER internship project.",
      },
    ],
  },
  {
    category: "Tech Stack",
    items: [
      {
        icon: <FaReact className="text-2xl text-cyan-600 mt-1" />,
        title: "React",
        subtext: "Frontend Interfaces",
        details:
          "I build interactive components and responsive UI pages using React and Tailwind CSS — currently applied in a production environment at Alpha Centauri Garments on the Sorbetes project.",
      },
      {
        icon: <SiNextdotjs className="text-2xl text-zinc-700 mt-1" />,
        title: "Next.js",
        subtext: "Modern Frontend",
        details:
          "I optimize frontend performance, manage routing, and deliver fast, polished web experiences — used across personal and academic projects including EduGuide and DinoVerse.",
      },
      {
        icon: <SiTailwindcss className="text-2xl text-sky-500 mt-1" />,
        title: "Tailwind CSS",
        subtext: "Utility-First Styling",
        details:
          "My go-to styling framework for responsive, consistent, and efficient UI. Applied across capstone (Groove), internship (Sorbetes), and personal frontend projects.",
      },
      {
        icon: <SiLaravel className="text-2xl text-red-600 mt-1" />,
        title: "Laravel",
        subtext: "Backend Framework",
        details:
          "I structure backend logic, connect MySQL databases, and integrate third-party APIs. Used to build and deploy the full-stack Groove performing arts platform with Google Maps API and AI chat.",
      },
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Graphic Design Essentials",
    issuer: "Canva Design School · Canva Certified",
    date: "March 8, 2026",
    credential: "Credential ID: 198b01",
  },
  {
    title: "Accenture Skills Training",
    issuer: "Accenture",
    date: "November 2025",
    credential: "",
  },
  {
    title: "SAP Business One – System Administration & Maintenance",
    issuer: "SAP",
    date: "March 2024",
    credential: "",
  },
  {
    title: "Java Foundations",
    issuer: "Oracle / Java",
    date: "June 2023",
    credential: "",
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
          entry.isIntersecting
            ? entry.target.classList.add("aos-in")
            : entry.target.classList.remove("aos-in")
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
              {"subtext" in item && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-700">
                  {item.subtext}
                </span>
              )}
              {"period" in item && (
                <span className="block text-[10px] font-bold tracking-widest uppercase text-zinc-400 mt-1">
                  {(item as { period: string }).period}
                </span>
              )}
            </div>
          </div>
        </div>
        {"details" in item && (
          <p className="mt-4 text-lg font-medium leading-relaxed text-[#1a1a1a] max-w-2xl">
            {item.details}
          </p>
        )}
      </div>
    ));

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen text-black font-sans selection:bg-black selection:text-zinc-100 overflow-hidden"
    >
      <style jsx global>{`
        .aos {
          opacity: 0;
          transform: translateY(36px);
          filter: blur(5px);
          transition: opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
            transform 1s cubic-bezier(0.22, 1, 0.36, 1),
            filter 1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .aos-in {
          opacity: 1;
          transform: translateY(0);
          filter: blur(0);
        }
        .sd1 { transition-delay: 0.05s; }
        .sd2 { transition-delay: 0.15s; }
        .sd3 { transition-delay: 0.25s; }
        .sd4 { transition-delay: 0.35s; }
        .sd5 { transition-delay: 0.45s; }
        .exp-grid {
          display: grid;
          grid-template-columns: 4fr 8fr;
          gap: 32px;
        }
        @media (max-width: 479px) {
          .exp-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}</style>

      <main className="max-w-6xl mx-auto flex flex-col gap-32 p-8">
        <section className="flex flex-col items-start space-y-8">
          <div className="aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" />
            <span className="text-lg md:text-xl font-black tracking-[0.6em] uppercase text-zinc-900">
              ABOUT ME
            </span>
          </div>
          <h1 className="aos sd2 hero-h font-black leading-[0.8] tracking-tighter uppercase text-3xl md:text-5xl lg:text-6xl">
            Creative <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-black">
              Systems
            </span>
          </h1>
          <p className="aos sd3 text-sm font-bold tracking-widest uppercase text-zinc-500">
            {ABOUT_DATA.role}
          </p>
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
              <p
                key={i}
                className={`aos sd${i + 2} desc-text font-medium leading-relaxed tracking-tight text-zinc-800 mb-6 last:mb-0 text-lg`}
              >
                {text}
              </p>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_DATA.goals.map((goal, i) => (
            <div
              key={i}
              className={`aos sd${i + 1} p-6 border border-black/5 bg-black/[0.02] rounded-lg`}
            >
              <p className="text-lg font-bold uppercase mb-2">0{i + 1}.</p>
              <p className="text-zinc-700 font-medium">{goal}</p>
            </div>
          ))}
        </section>

        <section className="space-y-8">
          <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" /> Academic
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {ACADEMIC.map((item, i) => (
              <div key={i} className={`aos sd${i + 1} flex flex-col gap-4`}>
                <div className="flex items-center gap-6 mb-4">
                  {item.icon}
                  <div className="h-[1px] flex-grow bg-black/10" />
                </div>
                <h3 className="text-2xl font-black uppercase">{item.institution}</h3>
                <p className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-700">
                  {item.subtext}
                </p>
                <span className="text-[10px] font-black tracking-[0.3em] text-zinc-900 uppercase">
                  {item.period}
                </span>
                <p className="mt-4 text-zinc-800 font-medium leading-relaxed">{item.bio}</p>
              </div>
            ))}
          </div>
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

        <section className="space-y-8">
          <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" /> Certifications
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className={`aos sd${i + 1} p-6 border border-black/10 rounded-lg hover:bg-black/[0.02] transition-colors`}
              >
                <h4 className="text-base font-black uppercase tracking-tight">{cert.title}</h4>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-500 mt-1">
                  {cert.issuer}
                </p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-zinc-400 mt-1">
                  {cert.date}
                </p>
                {cert.credential && (
                  <p className="text-[10px] font-medium text-zinc-400 mt-1">{cert.credential}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}