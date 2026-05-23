"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaPaintBrush,
  FaArrowRight,
  FaBezierCurve,
  FaUsers,
  FaFigma,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub as SiGithubIcon,
  SiLaravel,
  SiBootstrap,
} from "react-icons/si";

const HERO_DATA = {
  name: "JOHN RENZ C. BANDIANON",
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
    company: "Alpha Centauri Garments – Clothing Brand (Internship)",
    type: "Internship",
    period: "April 2026 – May 2026",
    description:
      "Designed end‑to‑end UI/UX for an apparel e‑commerce platform in Figma, creating wireframes and responsive prototypes that improved user experience and interface consistency. Collaborated with developers on design handoff and implementation, reducing rework. Delivered a cohesive, shoppable interface across devices. Led a small design‑dev team as Team Lead, managing task delegation, documentation, and workflow to keep the project on track. Fostered stronger design–development collaboration through clear communication and feedback loops. Achieved smoother, faster progress from concept to launch. Refined layouts, visual hierarchy, and interaction patterns through iterative testing and stakeholder feedback. Maintained a consistent design system in Figma that aligned with brand identity and usability goals. Helped ship a polished, user‑centered apparel e‑commerce site ready for real‑world use.",
    highlights: [
      "Designed e-commerce wireframes and responsive prototypes in Figma",
      "Led design-dev team workflow, documentation, and task delegation",
      "Maintained consistent design system and refined interaction patterns",
      "Collaborated on design handoff to reduce development rework",
    ],
  },
  {
    role: "IT Intern (Volunteer)",
    company: "BoxHive Digital Solutions – Tech Company",
    type: "Volunteer",
    period: "March 2026 – May 2026",
    description:
      "Designed web and mobile apps screens in Figma, improving layout clarity, usability, and visual hierarchy. Collaborated with developers and stakeholders to align on flows and interactions. Reduced user confusion and improved onboarding clarity. Created a Replica Icebreaker App UI and interactive prototype in Figma, including user flows and screen transitions. Practiced user‑centered design and received feedback from mentors. Delivered a usable training asset for internal demos and onboarding. Supported QA efforts for an Android app, documenting bugs, validating fixes, and reporting issues. Demonstrated attention to detail, problem‑solving, and collaboration with devs. Helped ship a cleaner, more stable release with fewer post‑launch issues.",
    highlights: [
      "Designed web and mobile application screens in Figma",
      "Created Replica Icebreaker App UI and interactive prototype",
      "Supported Android app QA testing, bug tracking, and validation",
      "Improved layout clarity and onboarding workflows",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "STI College San Jose del Monte Bulacan",
    type: "Capstone Project",
    period: "March 2025 – Nov 2025",
    description:
      "Led a 3-person development team through planning, implementation, and QA using Agile-style coordination, ensuring on-time delivery and proper task alignment across the project lifecycle. Developed full-stack features including an appointment scheduling system and AI chatbot integration, implementing both frontend interfaces and backend logic for seamless functionality. Built and maintained core system components across frontend and backend, ensuring performance, usability, and stability in a production-ready web application.",
    highlights: [
      "Led 3-person development team via Agile-style coordination",
      "Developed appointment scheduling system and AI chatbot integrations",
      "Built and maintained core full-stack system components",
      "Ensured production-ready system performance and stability",
    ],
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
    year: "Exhibitor",
    role: "Exhibitor",
    description: "Presented a STEM tech project and discussed real-world applications of technology.",
  },
  {
    name: "OpenAI / Codex Tech Meetup",
    location: "BGC",
    year: "Participant",
    role: "Participant",
    description: "Explored AI-assisted development workflows and modern software tools.",
  },
  {
    name: "Academic Week IT/CpE Seminar 2024",
    location: "STI College",
    year: "Participant",
    role: "Participant",
    description: "Attended GitHub-focused session on collaboration and development practices.",
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
    <div className="text-center">
      <div className="text-4xl font-black text-black">
        {count}+
      </div>
      <p className="text-sm font-medium text-neutral-800 mt-2">{label}</p>
    </div>
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
      whileHover={{ y: -4 }}
      className="group p-6 border border-neutral-200 rounded-lg hover:border-black hover:bg-neutral-50 transition-all duration-200"
    >
      <div className="text-black mb-4 transition-transform duration-200">
        {icon}
      </div>
      <h4 className="font-bold text-black mb-1">{name}</h4>
      <p className="text-xs font-bold text-neutral-900 mb-2 uppercase tracking-wider">{proficiency}</p>
      <p className="text-sm text-neutral-800 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-black overflow-x-hidden antialiased selection:bg-black selection:text-white"
    >
      <main className="w-full max-w-6xl mx-auto px-4 md:px-8 py-24 space-y-32">
        
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-black font-bold tracking-widest uppercase text-xs">
              Portfolio Profile
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-black max-w-4xl uppercase">
              {HERO_DATA.name}
            </h1>
            <p className="text-xl md:text-2xl font-bold text-neutral-800 max-w-2xl">
              {HERO_DATA.title} — {HERO_DATA.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
            <div className="md:col-span-2">
              <p className="text-lg text-neutral-900 leading-relaxed font-medium">
                {HERO_DATA.bio}
              </p>
            </div>
            <div className="space-y-3 text-sm font-medium text-neutral-800">
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-black" /> {HERO_DATA.location}</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-black" /> {HERO_DATA.email}</p>
              <p className="flex items-center gap-2"><FaPhone className="text-black" /> {HERO_DATA.phone}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <a
              href={`mailto:${HERO_DATA.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-sm font-bold tracking-wider uppercase hover:bg-neutral-900 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/johnrenz-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black text-sm font-bold tracking-wider uppercase hover:bg-neutral-50 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/john-renz-bandianon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-black text-black text-sm font-bold tracking-wider uppercase hover:bg-neutral-50 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-12 border-t border-b border-neutral-200"
        >
          <div className="grid grid-cols-3 gap-6">
            <AnimatedCounter value={3} label="Completed Systems" />
            <AnimatedCounter value={2} label="Industry Internships" />
            <AnimatedCounter value={5} label="Expertise Certificates" />
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              Professional Experience
            </h2>
            <p className="text-neutral-800 text-base font-medium">
              Documented background in UI/UX systems design, workflow leadership, and feature deployment
            </p>
          </div>

          <div className="space-y-6">
            {WORK_EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="p-8 border border-neutral-200 rounded-lg hover:border-black transition-colors duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest bg-neutral-100 text-black px-2.5 py-1 rounded">
                      {exp.type}
                    </span>
                    <h3 className="text-2xl font-black text-black mt-3">
                      {exp.role}
                    </h3>
                    <p className="text-base font-bold text-neutral-900 mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-black border border-black px-3 py-1 rounded-full whitespace-nowrap self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <p className="text-neutral-800 text-base leading-relaxed mb-6 font-medium">
                  {exp.description}
                </p>

                <div className="space-y-3 border-t border-neutral-100 pt-6">
                  <p className="text-xs font-black text-black uppercase tracking-wider">
                    Core Focus Points
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 text-neutral-800 font-medium text-sm"
                      >
                        <FaArrowRight className="text-black mt-1 text-xs flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Education</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6">
            {EDUCATION.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="p-8 border border-neutral-200 rounded-lg hover:border-black hover:bg-neutral-50 transition-all duration-200"
              >
                <FaGraduationCap className="text-2xl text-black mb-4" />
                <h3 className="text-xl font-black text-black mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-bold text-neutral-900 mb-1">{edu.school}</p>
                <p className="text-xs font-bold text-neutral-800 mb-4 tracking-wide">{edu.period}</p>
                <p className="text-sm text-neutral-800 leading-relaxed font-medium">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Courses & Certifications</h2>
          </div>

          <div className="grid md:grid-cols-1 gap-4">
            {CERTIFICATES.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="p-5 border border-neutral-200 rounded-lg bg-neutral-50 flex items-start gap-4"
              >
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0" />
                <p className="text-sm font-medium text-neutral-900">{cert}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Design Tools</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_DATA.designTools.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Frontend Stack</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.frontendTech.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Backend & Databases</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS_DATA.backend.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Tools & Workflow</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {SKILLS_DATA.tools.map((skill, index) => (
              <SkillCard key={index} index={index} {...skill} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Hard Skills Summary</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HARD_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-black hover:bg-white transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="font-bold text-black text-sm uppercase tracking-wider">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Soft Skills Summary</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SOFT_SKILLS.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="px-6 py-4 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-black hover:bg-white transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-black rounded-full" />
                  <span className="font-bold text-black text-sm uppercase tracking-wider">{skill}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">Tech Events & Seminars</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {EVENTS.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="p-6 border border-neutral-200 bg-neutral-50 rounded-lg hover:border-black hover:bg-white transition-all duration-200"
              >
                <span className="text-xs font-black text-black tracking-wider block mb-2">
                  {event.year}
                </span>
                <h3 className="text-lg font-black text-black mb-1">
                  {event.name}
                </h3>
                <p className="text-xs font-bold text-neutral-800 mb-3">{event.location}</p>
                <p className="text-sm font-bold text-black border-b border-black pb-2 inline-block mb-3">
                  {event.role}
                </p>
                <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>
    </div>
  );
}