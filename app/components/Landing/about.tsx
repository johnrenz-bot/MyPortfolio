"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
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
  FaFigma,
  FaReact,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const ABOUT_DATA = {
  role: "Aspiring UI/UX Designer • Frontend Developer • Team Lead",

  description: [
    "I’m an aspiring IT professional and UI/UX Designer who enjoys creating thoughtful, user-friendly digital experiences. I’m passionate about understanding user needs and turning ideas into clean, intuitive interfaces through wireframes, prototypes, and responsive designs using Figma.",

    "Through academic projects and hands-on internship experience, I’ve gained practical exposure to frontend development using React, Next.js, Vite, and Tailwind CSS. This experience helps me better understand how design decisions translate into real, functional products.",

    "Currently, I’m interning at Alpha Centauri Garments as a UI/UX Product Designer and Team Lead for REEFER, a streetwear e-commerce web system. I contribute to product design, collaborate with teams, and support frontend implementation while continuously learning how to balance usability, business goals, and development constraints.",
  ],

  goals: [
    "Continue growing as a UI/UX Designer by improving my skills in user research, wireframing, prototyping, usability, and creating meaningful digital experiences that genuinely help users.",

    "Strengthen the connection between design and development by building responsive and accessible interfaces using React, Next.js, and Tailwind CSS, while ensuring design ideas are implemented thoughtfully and consistently.",

    "Develop into a dependable design and technical team contributor — someone who communicates well, collaborates effectively, and helps create polished, user-centered digital products through continuous learning and experience.",
  ],
};
const ACADEMIC = [
  {
    institution: "STI College SJDM",
    period: "August 2022 – Present",
    subtext: "BS Information Technology",
    bio: "Pursuing a degree in IT with hands-on exposure to the full software development lifecycle. Capstone project and internships have shaped me into a well-rounded IT professional experienced in design, frontend development, and team leadership.",
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
      "Designed end-to-end UI/UX for REEFER, a streetwear e-commerce platform by building user flows, wireframes, and responsive Figma prototypes delivering a consistent and shoppable interface across all screens. Promoted to Team Lead managing task delegation, documentation, and designer-developer collaboration streamlining workflows. Developed responsive web pages and UI components using React.js, Vite, and Tailwind CSS translating Figma designs into reusable frontend interfaces. Collaborated with design and backend teams aligning on implementation details and resolving interface inconsistencies delivering a polished production-ready web system.",
    icon: <FaPaintBrush className="text-4xl text-zinc-700" />,
  },
  {
    title: "IT Intern – UI/UX, Graphic Design & QA",
    period: "April 2026 – Present",
    subtext: "BoxHive Digital Solutions · Internship",
    details:
      "Designed client-facing web UI screens in Figma by structuring layouts and refining visual hierarchy improving consistency and presentation across delivered projects. Produced marketing materials including expo posters, social media graphics, and device mockups supporting active campaigns. Executed QA testing for the IceBreaker Android app by documenting bugs, validating fixes, and reporting findings to the dev team contributing to a cleaner and more stable product release.",
    icon: <FaBug className="text-4xl text-zinc-700" />,
  },
  {
    title: "Lead Developer & UI/UX Designer",
    period: "March 2025 – November 2025",
    subtext: "Capstone Project · Groove Performing Arts Ecosystem",
    details:
      "Led a 3-person development team by coordinating tasks, timelines, and collaboration across design and build phases delivering a fully functional platform on schedule. Conducted user research with 150+ participants synthesizing findings into user flows, wireframes, and interface designs creating an experience grounded in real user needs. Built and tested core system features across the full development cycle iterating through planning, coding, and QA shipping a user-centered web platform ready for evaluation.",
    icon: <FaUsers className="text-4xl text-zinc-700" />,
  },
  {
    title: "Full-Stack Developer & UI Designer",
    period: "2023 – 2024",
    subtext: "Academic Projects",
    details:
      "Built multiple projects integrating design and development workflows. Designed user interfaces in Figma and implemented them with focus on responsive design, accessibility, and performance. Gained experience with component-based architecture using React and modern development practices.",
    icon: <FaLaptopCode className="text-4xl text-zinc-700" />,
  },
  {
    title: "Programming Fundamentals",
    period: "2022 – 2023",
    subtext: "Java & Web Development Foundation",
    details:
      "Built foundational programming skills in Java and object-oriented principles. Learned essential concepts in web development, database design, and software architecture enabling progression to frontend and full-stack development.",
    icon: <FaCode className="text-4xl text-zinc-700" />,
  },
  {
    title: "Technical Foundation",
    period: "2020 – 2022",
    subtext: "High School ICT Specialization",
    details:
      "Completed specialized ICT coursework covering computer systems, digital logic, networking fundamentals, and basic programming concepts forming the foundation for my IT degree.",
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
          "I design wireframes, build user flows with FigJam, create responsive prototypes, and develop design systems for complex web applications. Used extensively on REEFER project for design-to-development handoff.",
      },
      {
        icon: <SiAdobephotoshop className="text-2xl text-blue-600 mt-1" />,
        title: "Photoshop",
        subtext: "Visual Design & Graphics",
        details:
          "I create visual compositions, design mockups, and produce marketing materials. Used professionally at BoxHive Digital Solutions for campaign assets and social media content.",
      },
      {
        icon: <SiAdobeillustrator className="text-2xl text-orange-600 mt-1" />,
        title: "Illustrator",
        subtext: "Vector Graphics & Branding",
        details:
          "I build scalable vector graphics, logos, and brand assets ensuring visuals remain crisp across all platforms and print formats.",
      },
      {
        icon: <SiCanva className="text-2xl text-green-600 mt-1" />,
        title: "Canva",
        subtext: "Presentations & Documentation",
        details:
          "I create structured project documentation, design workflow trackers, and polished presentations used actively for team collaboration and stakeholder communication.",
      },
    ],
  },
  {
    category: "Frontend Tech Stack",
    items: [
      {
        icon: <FaReact className="text-2xl text-cyan-600 mt-1" />,
        title: "React.js",
        subtext: "Frontend Framework",
        details:
          "I build interactive components and responsive UI pages using React with focus on reusable architecture and component scalability. Currently applied in production on REEFER project.",
      },
      {
        icon: <SiVite className="text-2xl text-purple-600 mt-1" />,
        title: "Vite",
        subtext: "Build Tool & Development Server",
        details:
          "I use Vite for fast frontend development and optimized builds. Implemented on REEFER project for rapid iteration and improved developer experience.",
      },
      {
        icon: <SiNextdotjs className="text-2xl text-zinc-700 mt-1" />,
        title: "Next.js",
        subtext: "Full-Stack React Framework",
        details:
          "I develop server-side rendered and static applications with optimized performance. Implemented routing, API routes, and deployment strategies for production applications.",
      },
      {
        icon: <SiTailwindcss className="text-2xl text-sky-500 mt-1" />,
        title: "Tailwind CSS",
        subtext: "Utility-First CSS Framework",
        details:
          "My go-to styling framework for responsive, consistent, and efficient UI. Applied across REEFER, Groove capstone, and personal frontend projects.",
      },
      {
        icon: <SiTypescript className="text-2xl text-blue-600 mt-1" />,
        title: "TypeScript",
        subtext: "Type-Safe JavaScript",
        details:
          "I write scalable and maintainable code with static type checking. Used to catch errors early and improve developer experience with better tooling.",
      },
    ],
  },
];

const CERTIFICATIONS = [
  {
    title: "Graphic Design Essentials",
    issuer: "Canva Design School · Canva Certified",
    date: "March 2026",
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

const GALLERY_IMAGES = [
  { id: 1, image: "/Image/Gallery/1.jpg" },
  { id: 2, image: "/Image/Gallery/2.jpg" },
  { id: 3, image: "/Image/Gallery/3.jpg" },
  { id: 4, image: "/Image/Gallery/4.jpg" },
  { id: 5, image: "/Image/Gallery/5.jpg" },
  { id: 6, image: "/Image/Gallery/6.jpg" },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!galleryRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !galleryRef.current) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const renderCards = (
    data: typeof EXPERIENCE | typeof TOOLS[0]["items"]
  ) =>
    data.map((item, i) => (
      <div
        key={i}
        className={`aos sd${Math.min(i + 1, 5)} exp-row group relative border-t border-black/10 hover:bg-black/[0.03] transition-colors py-10 px-6 rounded-lg`}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8">
          <div className="flex items-start gap-4 md:w-1/3">
            {"icon" in item && item.icon && <div className="flex-shrink-0">{item.icon}</div>}
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight flex items-center gap-2">
                {"title" in item ? item.title : ""}
                <FaArrowRight className="text-[10px] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
              </h3>
              {"subtext" in item && (
                <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-700 block mt-1">
                  {item.subtext}
                </span>
              )}
              {"period" in item && (
                <span className="block text-[10px] font-bold tracking-widest uppercase text-zinc-400 mt-2">
                  {(item as { period: string }).period}
                </span>
              )}
            </div>
          </div>
          {"details" in item && (
            <div className="mt-4 md:mt-0 md:w-2/3">
              <p className="text-base md:text-lg font-medium leading-relaxed text-zinc-800">
                {item.details}
              </p>
            </div>
          )}
        </div>
      </div>
    ));

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full overflow-x-hidden text-black font-sans selection:bg-black selection:text-zinc-100"
    >
      <style jsx global>{`
        html,
        body {
          overflow-x: hidden;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        html::-webkit-scrollbar,
        body::-webkit-scrollbar {
          width: 0px;
          display: none;
        }
      `}</style>

      <style jsx>{`
        .aos {
          opacity: 0;
          transform: translateY(36px);
          filter: blur(5px);
          transition:
            opacity 1s cubic-bezier(0.22, 1, 0.36, 1),
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

        .gallery-scroll {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          -ms-overflow-style: none;
          scrollbar-width: none;
          cursor: grab;
          padding: 8px 0;
        }

        .gallery-scroll::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        .gallery-scroll.dragging {
          cursor: grabbing;
        }

        .gallery-item {
          flex: 0 0 auto;
          width: 200px;
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          user-select: none;
          position: relative;
        }

        .gallery-item:hover {
          border-color: rgba(0, 0, 0, 0.15);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        @media (max-width: 768px) {
          .gallery-scroll {
            gap: 10px;
          }

          .gallery-item {
            width: 160px;
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .gallery-scroll {
            gap: 8px;
          }

          .gallery-item {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>

      <main className="w-full max-w-7xl mx-auto flex flex-col gap-24 px-6 md:px-8">
        <section className="flex flex-col items-start space-y-8 mt-12">
          <div className="aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" />
            <span className="text-base md:text-lg font-black tracking-[0.6em] uppercase text-zinc-900">
              About Me
            </span>
          </div>
          <h1 className="aos sd2 font-black leading-[0.8] tracking-tighter uppercase text-3xl md:text-5xl lg:text-6xl">
            User-Centered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-zinc-600 to-black">
              Design & Code
            </span>
          </h1>
          <p className="aos sd3 text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-500">
            {ABOUT_DATA.role}
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-black/10 pt-16">
          <div className="aos sd1 flex flex-col gap-4">
            <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 flex items-center gap-3">
              <span className="w-16 h-[2px] bg-black" /> Overview
            </div>
            <div className="flex gap-2 text-zinc-500 text-lg">
              <FaLayerGroup />
              <FaBezierCurve />
            </div>
          </div>
          <div className="space-y-6">
            {ABOUT_DATA.description.map((text, i) => (
              <p
                key={i}
                className={`aos sd${i + 2} font-medium leading-relaxed tracking-tight text-zinc-800 text-base md:text-lg`}
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
              className={`aos sd${i + 1} p-6 border border-black/5 bg-black/[0.02] rounded-lg hover:border-black/10 hover:bg-black/[0.05] transition-all duration-300`}
            >
              <p className="text-lg font-bold uppercase mb-3">0{i + 1}.</p>
              <p className="text-base md:text-lg font-medium text-zinc-700">{goal}</p>
            </div>
          ))}
        </section>

        <section className="space-y-6 border-t border-black/10 pt-16">
          <div className="aos sd1 flex flex-col gap-2">
            <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 flex items-center gap-3">
              <span className="w-16 h-[2px] bg-black" /> Gallery
            </div>
          </div>

          <div
            ref={galleryRef}
            className={`gallery-scroll ${isDragging ? "dragging" : ""}`}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {GALLERY_IMAGES.map((image, i) => (
              <div
                key={image.id}
                className={`gallery-item aos sd${Math.min(i + 1, 5)}`}
              >
                <Image
                  src={image.image}
                  alt={`Gallery image ${image.id}`}
                  fill
                  className="object-cover"
                  sizes="200px"
                  priority={i < 2}
                />
              </div>
            ))}
          </div>

          <p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">
            Drag to explore
          </p>
        </section>

        <section className="space-y-8">
          <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" /> Education
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {ACADEMIC.map((item, i) => (
              <div key={i} className={`aos sd${i + 1} flex flex-col gap-4`}>
                <div className="flex items-center gap-6 mb-4">
                  {item.icon}
                  <div className="h-[1px] flex-grow bg-black/10" />
                </div>
                <h3 className="text-2xl font-black uppercase">{item.institution}</h3>
                <p className="text-xs md:text-sm font-black tracking-[0.3em] uppercase text-zinc-700">
                  {item.subtext}
                </p>
                <span className="text-xs md:text-sm font-black tracking-[0.3em] text-zinc-900 uppercase">
                  {item.period}
                </span>
                <p className="mt-4 text-base md:text-lg text-zinc-800 font-medium leading-relaxed">
                  {item.bio}
                </p>
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
            <h3 className="text-xs md:text-sm font-black tracking-widest uppercase text-zinc-900">
              {section.category}
            </h3>
            {renderCards(section.items)}
          </section>
        ))}

        <section className="space-y-8 mb-20">
          <div className="text-2xl md:text-3xl font-black uppercase text-zinc-700 aos sd1 flex items-center gap-3">
            <span className="w-16 h-[2px] bg-black" /> Certifications
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATIONS.map((cert, i) => (
              <div
                key={i}
                className={`aos sd${i + 1} p-6 border border-black/10 rounded-lg hover:bg-black/[0.02] hover:border-black/20 transition-all duration-300`}
              >
                <h4 className="text-base font-black uppercase tracking-tight">{cert.title}</h4>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-500 mt-2">
                  {cert.issuer}
                </p>
                <p className="text-xs md:text-sm font-bold tracking-widest uppercase text-zinc-400 mt-1">
                  {cert.date}
                </p>
                {cert.credential && (
                  <p className="text-xs md:text-sm font-medium text-zinc-400 mt-2">
                    {cert.credential}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}