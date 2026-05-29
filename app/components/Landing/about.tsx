"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaArrowRight,
  FaFigma,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaTimes,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub as SiGithubIcon,
  SiLaravel,
  SiBootstrap,
  SiNotion,
  SiTrello,
  SiJira,
  SiClickup,
  SiBehance,
  SiDribbble,
  SiWix,
  SiWebflow,
} from "react-icons/si";

import { CgMonday } from "react-icons/cg";


const HERO_DATA = {
  title: "UI/UX Designer & Frontend Developer",
  subtitle: "UI/UX, Graphic Design & QA Testing",
  location: "Marilao, Bulacan, Philippines",
  email: "johnrenzbandianon@gmail.com",
  phone: "+63 966 798 7702",
  bio: "I am an Information Technology professional with hands-on experience in UI/UX design, full-stack development, and quality assurance. I specialize in bridging the gap between beautiful design layouts and functional, production-ready code.",
};

const WORK_EXPERIENCE = [
  {
    role: "UI/UX Product Designer & Team Lead",
    company: "Alpha Centauri Garments",
    subtitle: "Clothing Brand",
    type: "Internship",
    period: "April 2026 – May 2026",
    logo: "/Image/CompanyLogo/Alpha.png",
    certificate: "/Image/Certificate/alpha-certificate.png",
    description:
      "Designed end-to-end UI/UX for an apparel e-commerce platform in Figma, creating wireframes and responsive prototypes that improved user experience and interface consistency. Collaborated with developers on design handoff and implementation, reducing rework. Led a small design-dev team, managing task delegation, documentation, and workflow. Maintained a consistent design system aligned with brand identity and usability goals.",
    highlights: [
      "Designed e-commerce wireframes and responsive prototypes in Figma",
      "Led design-dev team workflow and task delegation",
      "Maintained consistent design system with brand identity alignment",
      "Collaborated on design handoff to reduce development rework",
      "UI/UX design with end-to-end workflow optimization",
      "Web system design and interactive prototyping",
    ],
    timeline: "2026 UI/UX Designer – Web System & E-commerce Design",
  },
  {
    role: "IT Intern (Volunteer)",
    company: "BoxHive Digital Solutions",
    subtitle: "Tech Company",
    type: "Volunteer",
    period: "March 2026 – May 2026",
    logo: "/Image/CompanyLogo/Boxhive.png",
    certificate: "/Image/Certificate/BoxHive.png",
    description:
      "Designed web and mobile app screens in Figma, improving layout clarity, usability, and visual hierarchy. Created the Replica Icebreaker App UI with interactive prototype, including user flows and screen transitions. Supported QA efforts for Android app testing, documenting bugs and validating fixes. Demonstrated attention to detail and collaboration with developers.",
    highlights: [
      "Designed web and mobile application screens in Figma",
      "Created Replica Icebreaker App UI and interactive prototype",
      "Supported Android app QA testing and bug validation",
      "Improved layout clarity and onboarding workflows",
      "Mobile and web UI/UX design implementation",
      "User flow documentation and prototype creation",
    ],
    timeline: "2026 Graphic Design & QA Testing – T-shirt Clothing & Mobile Apps",
  },
  {
    role: "Full Stack Developer",
    company: "STI College",
    subtitle: "Capstone Project",
    type: "Capstone Project",
    period: "March 2025 – Nov 2025",
    logo: "/Image/CompanyLogo/STI.png",
    description:
      "Led a 3-person development team through planning, implementation, and QA using Agile-style coordination. Developed full-stack features including appointment scheduling system and AI chatbot integration. Built and maintained core system components ensuring production-ready performance, usability, and stability.",
    highlights: [
      "Led 3-person development team via Agile coordination",
      "Developed appointment scheduling system and AI chatbot",
      "Built full-stack core system components",
      "Ensured production-ready system performance",
      "Frontend system architecture and implementation",
      "Web design and database integration",
    ],
    timeline: "2025 – 2026 Frontend System Project (December 2025 – January 2026)",
  },
];

const EXPERIENCE_TIMELINE = [
  {
    period: "2024",
    title: "Basic Web Design & Frontend Foundation",
    description: "Began journey with HTML, CSS, and JavaScript fundamentals. Developed responsive web layouts and basic interactive components using vanilla JavaScript.",
    focus: ["Web Design", "HTML/CSS", "Frontend Basics"],
    icon: "🎯",
  },
  {
    period: "2025",
    title: "Capstone Project & Web System Development",
    description: "Developed a complete capstone web system using Laravel framework, MySQL database, and modern web technologies. Focused on backend functionality, database management, system architecture, and responsive web design.",
    focus: ["Laravel Development", "MySQL Database", "Web System Development"],
    icon: "⚡",
  },
  {
    period: "December 2025 – January 2026",
    title: "Frontend Development & Modern Web Technologies",
    description: "Built scalable frontend applications using React, Vite, and Next.js. Focused on responsive UI development, reusable components, performance optimization, routing, and modern web application architecture.",
    focus: ["React", "Next.js", "Frontend Development"],
    icon: "🚀",
  },
  {
    period: "2026",
    title: "Graphic Design & Clothing Brand Experience",
    description: "1-2 weeks experience in graphic design for t-shirt and clothing designs. Applied UI/UX principles to product packaging and marketing materials.",
    focus: ["Graphic Design", "Branding", "Print Design"],
    icon: "🎨",
  },
  {
    period: "March – May 2026",
    title: "Professional UI/UX Designer & QA Testing",
    description: "UI/UX design specialist with end-to-end workflow expertise. Designed e-commerce platforms, mobile apps, and maintained design systems. Conducted QA testing, bug tracking, and quality assurance.",
    focus: ["UI/UX Design", "Design Systems", "QA Testing"],
    icon: "✨",
  },
];

const SKILLS_DATA = {
  designTools: [
    {
      icon: <FaFigma className="text-2xl" />,
      name: "Figma",
      proficiency: "Expert",
      description: "UI/UX design, wireframing, prototyping, design systems, user flows",
    },
    {
      icon: <SiAdobephotoshop className="text-2xl" />,
      name: "Photoshop",
      proficiency: "Advanced",
      description: "Visual layouts, visual hierarchy, asset optimization",
    },
    {
      icon: <SiAdobeillustrator className="text-2xl" />,
      name: "Illustrator",
      proficiency: "Intermediate",
      description: "Vector graphics, brand identity, layout creation",
    },
    {
      icon: <SiCanva className="text-2xl" />,
      name: "Canva",
      proficiency: "Advanced",
      description: "Marketing design, branding, documentation template setups",
    },
  ],
  frontendTech: [
    {
      icon: <FaReact className="text-2xl" />,
      name: "React",
      proficiency: "Advanced",
      description: "Component architecture, application interfaces",
    },
    {
      icon: <SiNextdotjs className="text-2xl" />,
      name: "Next.js",
      proficiency: "Advanced",
      description: "Client-side systems, frontend structures",
    },
    {
      icon: <SiTailwindcss className="text-2xl" />,
      name: "Tailwind CSS",
      proficiency: "Advanced",
      description: "Responsive layouts, structural utility-first classes",
    },
    {
      icon: <SiBootstrap className="text-2xl" />,
      name: "Bootstrap",
      proficiency: "Advanced",
      description: "Responsive frameworks, layout templates",
    },
    {
      icon: <SiTypescript className="text-2xl" />,
      name: "TypeScript",
      proficiency: "Intermediate",
      description: "Static analysis typing, interface checking",
    },
    {
      icon: <SiJavascript className="text-2xl" />,
      name: "JavaScript",
      proficiency: "Advanced",
      description: "Frontend scripts, logic flows, interactive states",
    },
  ],
  backend: [
    {
      icon: <SiLaravel className="text-2xl" />,
      name: "Laravel",
      proficiency: "Intermediate",
      description: "MVC architectures, application backend features",
    },
    {
      icon: <SiMysql className="text-2xl" />,
      name: "MySQL",
      proficiency: "Intermediate",
      description: "Relational tables, core database management",
    },
    {
      icon: <SiPostgresql className="text-2xl" />,
      name: "PostgreSQL",
      proficiency: "Intermediate",
      description: "Data architectures, relational querying scripts",
    },
    {
      icon: <FaCode className="text-2xl" />,
      name: "PHP / Java / C#",
      proficiency: "Intermediate",
      description: "Backend development logic and structural code blocks",
    },
  ],
  managementTools: [
    {
      icon: <SiNotion className="text-2xl" />,
      name: "Notion",
      proficiency: "Advanced",
      description: "Workspace documentation, knowledge bases, task management setups",
    },
    {
      icon: <SiTrello className="text-2xl" />,
      name: "Trello",
      proficiency: "Advanced",
      description: "Kanban board task tracking, project workflows, team collaboration",
    },
    {
      icon: <SiJira className="text-2xl" />,
      name: "Jira",
      proficiency: "Intermediate",
      description: "Agile project tracking, sprint planning, issue and bug management",
    },
    {
      icon: <SiClickup className="text-2xl" />,
      name: "ClickUp",
      proficiency: "Advanced",
      description: "Custom project dashboards, goal tracking, productivity workflows",
    },
    {
      icon: <CgMonday  className="text-2xl" />,
      name: "Monday.com",
      proficiency: "Advanced",
      description: "Operational management, resource tracking, team alignment dashboards",
    },
  ],
  portfolioPlatforms: [
    {
      icon: <SiBehance className="text-2xl" />,
      name: "Behance",
      proficiency: "Advanced",
      description: "Design case studies, project showcases, visual portfolio presentation",
    },
    {
      icon: <SiDribbble className="text-2xl" />,
      name: "Dribbble",
      proficiency: "Advanced",
      description: "Visual design snippets, UI components, creative networking",
    },
    {
      icon: <SiWix className="text-2xl" />,
      name: "Wix",
      proficiency: "Advanced",
      description: "No-code website creation, rapid prototyping, business web templates",
    },
    {
      icon: <SiWebflow className="text-2xl" />,
      name: "Webflow",
      proficiency: "Intermediate",
      description: "Visual web design, custom interactions, CMS-driven responsive sites",
    },
  ],
  tools: [
    {
      icon: <SiGit className="text-2xl" />,
      name: "Git",
      proficiency: "Advanced",
      description: "Version controls, team development lifecycles",
    },
    {
      icon: <SiGithubIcon className="text-2xl" />,
      name: "GitHub",
      proficiency: "Advanced",
      description: "Remote repositories management, deployment pipelines",
    },
  ],
};

const SOFT_SKILLS = [
  "Project management",
  "Team leadership",
  "Communication",
  "Collaboration",
  "Problem-solving",
  "Time management",
  "Adaptability",
  "Critical thinking",
  "Creativity",
];

const HARD_SKILLS = [
  "UI/UX Design",
  "Wireframing & Prototyping",
  "User flows & Information architecture",
  "Responsive design & Design systems",
  "Usability testing",
  "Frontend, Web & Software Development",
  "Backend & Databases",
  "API integration & System architecture",
  "QA Testing & Bug documenting",
];

const EVENTS = [
  {
    name: "PSYSC STEMEX",
    location: "UP Diliman",
    year: "2026",
    role: "Exhibitor",
    description: "Presented a STEM tech project and discussed real-world applications of technology.",
    badge: "🏆",
  },
  {
    name: "OpenAI / Codex Tech Meetup",
    location: "BGC",
    year: "2026",
    role: "Participant",
    description: "Explored AI-assisted development workflows and modern software tools.",
    badge: "🤖",
  },
  {
    name: "Academic Week IT/CpE Seminar 2024",
    location: "STI College",
    year: "2024",
    role: "Participant",
    description: "Attended GitHub-focused session on collaboration and development practices.",
    badge: "💻",
  },
];

const EDUCATION = [
  {
    degree: "Bachelor of Science Information Technology",
    school: "STI College San jose del monte",
    period: "2022 - 2026",
    description:
      "Completed coursework in software development fundamentals, including programming logic, systems analysis, and application design. Gained foundational knowledge in computer systems, databases, and basic hardware concepts as part of IT curriculum. Developed practical exposure to software-focused projects and self-initiated UI/UX practice using modern design tools such as Figma.",
  },
];

const CERTIFICATES = [
  "Google UX Design Training — User research, wireframing, prototyping, usability testing, Figma interface design.",
  "Accenture Skills Training Program — Technology fundamentals, digital skills, communication, and job readiness training.",
  "SAP Business One Training (ERP System) — ERP concepts, business operations, inventory and process management.",
  "System Administration & Maintenance Training — System administration, troubleshooting, and hardware/software maintenance.",
  "Java Foundations Certification — Core Java, object-oriented programming (OOP), and programming fundamentals.",
];

const AnimatedCounter = ({
  value,
  label,
}: {
  value: number;
  label: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const stepTime = Math.abs(Math.floor(duration / value));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
      }
    }, stepTime || 10);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center p-8 rounded-2xl bg-white border border-gray-100 hover:border-slate-900 hover:shadow-lg transition-all"
    >
      <div className="text-5xl font-black text-slate-900">
        {count}+
      </div>
      <p className="text-sm font-bold text-gray-600 mt-3">{label}</p>
    </motion.div>
  );
};

const SkillCard = ({
  icon,
  name,
  proficiency,
  description,
  index,
}: {
  icon: React.ReactNode;
  name: string;
  proficiency: string;
  description: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="group p-6 border border-gray-100 rounded-2xl bg-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-slate-900 group-hover:text-white text-3xl transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h4 className="font-bold text-slate-900 group-hover:text-white mb-1 text-lg transition-colors duration-300">
        {name}
      </h4>
      <p className="text-xs font-bold text-gray-500 group-hover:text-gray-300 mb-3 uppercase tracking-wider transition-colors duration-300">
        {proficiency}
      </p>
      <p className="text-sm text-gray-600 group-hover:text-gray-200 leading-relaxed transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const CompanyLogoImage = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative w-24 h-24 rounded-2xl bg-white border border-gray-100 flex items-center justify-center overflow-hidden hover:border-slate-900 hover:shadow-md transition-all group"
  >
    <Image
      src={src}
      alt={alt}
      width={96}
      height={96}
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      priority
    />
  </motion.div>
);

const CertificateModal = ({
  isOpen,
  certificate,
  company,
  onClose,
}: {
  isOpen: boolean;
  certificate: string | undefined;
  company: string;
  onClose: () => void;
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      modalRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  React.useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen || !certificate) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-center"
      >
        <Image
          src={certificate}
          alt={`${company} Certificate`}
          width={1200}
          height={800}
          priority
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [certificateModal, setCertificateModal] = useState<{
    isOpen: boolean;
    certificate?: string;
    company: string;
  }>({
    isOpen: false,
    company: "",
  });

  const openCertificate = (certificate: string | undefined, company: string) => {
    setCertificateModal({
      isOpen: true,
      certificate,
      company,
    });
  };

  const closeCertificate = () => {
    setCertificateModal({
      isOpen: false,
      company: "",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-slate-900 overflow-x-hidden antialiased selection:bg-slate-900 selection:text-white"
    >
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-40">

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-900 font-bold tracking-widest uppercase text-sm"
            >
              ✨ Welcome to my portfolio
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 max-w-4xl leading-tight"
            >
              Creative Developer & Designer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-slate-800 max-w-3xl"
            >
              {HERO_DATA.title} — {HERO_DATA.subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 pt-12 border-t border-gray-200"
          >
            <div className="md:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {HERO_DATA.bio}
              </p>
            </div>
            <div className="space-y-4 text-sm font-medium text-gray-700">
              <p className="flex items-center gap-3 hover:text-slate-900 transition-colors">
                <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                  <FaMapMarkerAlt />
                </span>
                {HERO_DATA.location}
              </p>
              <p className="flex items-center gap-3 hover:text-slate-900 transition-colors">
                <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                  <FaEnvelope />
                </span>
                {HERO_DATA.email}
              </p>
              <p className="flex items-center gap-3 hover:text-slate-900 transition-colors">
                <span className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300">
                  <FaPhone />
                </span>
                {HERO_DATA.phone}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4 pt-8"
          >
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 text-sm font-bold tracking-wider uppercase rounded-xl border border-gray-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all hover:shadow-md"
            >
              <FaEnvelope /> Get in Touch
            </a>
            <a
              href="https://github.com/johnrenz-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 text-sm font-bold tracking-wider uppercase rounded-xl border border-gray-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all hover:shadow-md"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/john-renz-bandianon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 text-sm font-bold tracking-wider uppercase rounded-xl border border-gray-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all hover:shadow-md"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCounter value={3} label="Completed Systems" />
            <AnimatedCounter value={2} label="Industry Internships" />
            <AnimatedCounter value={5} label="Expertise Certificates" />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Professional Experience
            </h2>
            <p className="text-gray-700 text-lg font-medium max-w-2xl">
              Documented background in UI/UX systems design, workflow leadership, and feature deployment across multiple organizations and projects.
            </p>
          </div>

          <div className="space-y-12">
            {WORK_EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-10 border border-gray-200 rounded-3xl bg-white hover:border-slate-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-10 mb-10">
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    className="flex-shrink-0"
                  >
                    <CompanyLogoImage src={exp.logo} alt={exp.company} />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full text-slate-900 bg-gray-100 border border-gray-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                            {exp.type}
                          </span>
                          <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                            {exp.period}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-lg font-bold text-slate-900">
                          {exp.company} <span className="text-gray-600 text-sm">• {exp.subtitle}</span>
                        </p>
                      </div>

                      {(exp.company === "BoxHive Digital Solutions" ||
                        exp.company === "Alpha Centauri Garments") && (
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                              openCertificate(exp.certificate, exp.company)
                            }
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
                          >
                            <FaAward className="text-lg" />
                            View Certificate
                          </motion.button>
                        )}
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mb-8 font-medium">
                      {exp.description}
                    </p>

                    <div className="space-y-6 border-t border-gray-200 pt-8">
                      <p className="text-sm font-black text-slate-900 uppercase tracking-wider">
                        Experience Timeline & Focus
                      </p>
                      <p className="text-base font-bold text-slate-900 bg-gray-50 px-6 py-3 rounded-xl inline-block border border-gray-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                        {exp.timeline}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mt-6">
                        {exp.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group/item"
                          >
                            <FaArrowRight className="text-slate-900 group-hover/item:text-white mt-1 text-xs flex-shrink-0 font-bold transition-colors duration-300" />
                            <span className="text-sm text-slate-900 group-hover/item:text-white font-medium transition-colors duration-300">
                              {highlight}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Career Journey
            </h2>
            <p className="text-gray-700 text-lg font-medium max-w-2xl">
              Complete timeline from 2024 to 2026 showcasing continuous growth in web design and development
            </p>
          </div>

          <div className="space-y-8">
            {EXPERIENCE_TIMELINE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-slate-900 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex gap-8">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white text-2xl font-black shadow-md group-hover:shadow-lg transition-shadow duration-300"
                    >
                      {item.icon}
                    </motion.div>
                    {index < EXPERIENCE_TIMELINE.length - 1 && (
                      <div className="w-1 h-20 bg-gradient-to-b from-slate-900 to-gray-300 mt-4 group-hover:h-24 transition-all" />
                    )}
                  </div>

                  <div className="pb-8 flex-1">
                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-2">
                      {item.period}
                    </p>
                    <h3 className="text-2xl font-black text-slate-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-700 leading-relaxed mb-6 font-medium">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {item.focus.map((tag, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-white text-slate-900 text-xs font-bold rounded-full border border-gray-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Education
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Foundation & Academic Excellence
            </p>
          </div>

          <div className="grid gap-8">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-10 border border-gray-200 rounded-3xl bg-white hover:border-slate-900 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-slate-900 text-3xl shadow-sm border border-gray-200 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-300">
                    <FaGraduationCap />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-slate-900 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-bold text-slate-900 mb-1">
                      {edu.school}
                    </p>
                    <p className="text-sm font-bold text-gray-600 uppercase tracking-widest">
                      {edu.period}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Certifications
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Professional Development & Recognition
            </p>
          </div>

          <div className="grid gap-4">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="p-6 border border-gray-100 rounded-2xl bg-white hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-slate-900 group-hover:bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-all duration-300" />
                <p className="text-base font-medium text-slate-900 group-hover:text-white transition-colors duration-300">
                  {cert}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Design Tools
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Creative & Design Software Expertise
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS_DATA.designTools.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Frontend Stack
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Modern Web Development Technologies
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS_DATA.frontendTech.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Backend & Databases
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Server-Side & Data Management
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS_DATA.backend.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>



        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Developer Tools
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Version Control & Collaboration
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {SKILLS_DATA.tools.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Technical Skills
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Core Competencies & Expertise Areas
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HARD_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-white border border-gray-100 rounded-2xl hover:border-slate-900 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-slate-900 group-hover:bg-white rounded-full group-hover:scale-125 transition-all duration-300" />
                  <span className="font-bold text-slate-900 group-hover:text-white text-sm uppercase tracking-wider transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Soft Skills
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Professional & Interpersonal Abilities
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOFT_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-white border border-gray-100 rounded-2xl hover:border-slate-900 hover:bg-slate-900 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-slate-900 group-hover:bg-white rounded-full group-hover:scale-125 transition-all duration-300" />
                  <span className="font-bold text-slate-900 group-hover:text-white text-sm uppercase tracking-wider transition-colors duration-300">
                    {skill}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900">
              Events & Speaking
            </h2>
            <p className="text-gray-700 text-lg font-medium">
              Community Engagement & Networking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {EVENTS.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 border border-gray-200 bg-white rounded-3xl hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group overflow-hidden relative"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-4xl font-black">
                      {event.badge}
                    </span>
                    <span className="text-xs font-bold text-gray-600 group-hover:text-gray-300 uppercase tracking-widest bg-gray-100 group-hover:bg-white/20 px-3 py-1 rounded-full border border-gray-200 group-hover:border-white/30 transition-all duration-300">
                      {event.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 group-hover:text-white mb-3 transition-colors duration-300">
                    {event.name}
                  </h3>
                  <p className="text-sm font-bold text-gray-600 group-hover:text-gray-300 mb-4 uppercase tracking-wider transition-colors duration-300">
                    {event.location}
                  </p>
                  <p className="text-base font-bold text-slate-900 group-hover:text-white border-b border-gray-200 group-hover:border-white/30 pb-3 inline-block mb-4 transition-all duration-300">
                    {event.role}
                  </p>
                  <p className="text-sm text-gray-700 group-hover:text-gray-200 leading-relaxed font-medium transition-colors duration-300">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      <CertificateModal
        isOpen={certificateModal.isOpen}
        certificate={certificateModal.certificate}
        company={certificateModal.company}
        onClose={closeCertificate}
      />
    </div>
  );
}
