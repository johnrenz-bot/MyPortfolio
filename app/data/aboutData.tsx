import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaReact,
  FaGithub,
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
  SiNodedotjs,
  SiPrisma,
  SiFigma,
} from "react-icons/si";
import { CgMonday } from "react-icons/cg";

export const HERO_DATA = {
  title: "UI/UX Designer & Frontend Developer",
  subtitle: "UI/UX, Graphic Design & QA Testing",
  location: "Marilao, Bulacan, Philippines",
  email: "johnrenzbandianon@gmail.com",
  phone: "+63 966 798 7702",
  bio: "I am an Information Technology professional with over 2 years of hands-on experience in UI/UX Design, Full-Stack Development, and Quality Assurance. I specialize in bridging the gap between stunning design layouts and clean, functional, production-ready code — turning ideas into meaningful and user-friendly digital experiences.",
  image: "/Image/grad-photo.jpg",
  resume: "/JohnRenz_Resume.pdf",
  openToWork: true,
};

export const WORK_EXPERIENCE = [
  {
    role: "Advisor Support Associate Intern",
    company: "Sun Life Financial Philippines",
    subtitle: "Phoenix Palm Empire Branch",
    type: "Internship",
    period: "June 2026 – August 2026",
    logo: "/Image/CompanyLogo/phoenix.jpg",
    link: "https://www.facebook.com/phoenixpalmempire",
    description:
      "Interned at the Team Padua Business Development Team as an ASA (Advisor Support Associate) intern. Supported the Advisor Services team at Sun Life Financial Philippines (Phoenix Palm Empire) with day-to-day administrative and operational workflows. Assisted in the documentation and organization of advisor-related records, client service requests, and internal process coordination. Contributed to improving team efficiency through structured tracking tools and digital support systems. Gained firsthand exposure to the operations of a major financial institution and its advisor support infrastructure.",
    highlights: [
      "Assisted Advisor Services team with operational workflows",
      "Managed documentation and advisor-related client records",
      "Supported internal process coordination and service requests",
      "Contributed to team efficiency through digital tracking tools",
      "Gained exposure to financial services operations",
      "Collaborated with cross-functional teams in a corporate setting",
    ],
    timeline: "2026 Advisor Support Intern – Financial Services & Operations",
  },
  {
    role: "UI/UX Product Designer & Team Lead",
    company: "Alpha Centauri Garments",
    subtitle: "Clothing Brand",
    type: "Internship",
    period: "March 2026 – June 2026",
    logo: "/Image/CompanyLogo/Alpha.png",
    certificate: "/Image/Certificate/Alpha.jpg",
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
    logo: "/Image/CompanyLogo/Boxhive.jpg",
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

export const EXPERIENCE_TIMELINE = [
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

export const SKILLS_DATA = {
  designTools: [
    {
      icon: <SiFigma className="text-2xl" />,
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
      icon: <CgMonday className="text-2xl" />,
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
  devTools: [
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

export const SOFT_SKILLS = [
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

export const HARD_SKILLS = [
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

export const COMMUNITIES = [
  {
    name: "Google Developer Groups Philippines",
    location: "Manila, Philippines",
    role: "Community Member",
    year: "2024 - Present",
    logo: "/Image/Community/gdg.png",
    description: "I joined GDG Manila to stay updated with modern technologies and grow alongside passionate developers. The workshops, study jams, and networking opportunities have greatly contributed to my technical growth.",
    link: "https://gdg.community.dev/gdg-manila/",
  },
  {
    name: "DevCon Manila",
    location: "Manila, Philippines",
    role: "Community Member",
    year: "2024 - Present",
    logo: "/Image/Community/devcon.png",
    description: "Being part of DevCon Manila has been a game-changer for me. I attend to learn from industry leaders, connect with fellow developers, and stay inspired by the vibrant local tech scene.",
    link: "https://devcon.ph/",
  },
];

export const EVENTS = [
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

export const EDUCATION = [
  {
    degree: "Bachelor of Science Information Technology",
    school: "STI College San jose del monte",
    period: "2022 - 2026",
    description:
      "Completed coursework in software development fundamentals, including programming logic, systems analysis, and application design. Gained foundational knowledge in computer systems, databases, and basic hardware concepts as part of IT curriculum. Developed practical exposure to software-focused projects and self-initiated UI/UX practice using modern design tools such as Figma.",
  },
];

export const CERTIFICATES = [
  "Google UX Design Training — User research, wireframing, prototyping, usability testing, Figma interface design.",
  "Accenture Skills Training Program — Technology fundamentals, digital skills, communication, and job readiness training.",
  "SAP Business One Training (ERP System) — ERP concepts, business operations, inventory and process management.",
  "System Administration & Maintenance Training — System administration, troubleshooting, and hardware/software maintenance.",
  "Java Foundations Certification — Core Java, object-oriented programming (OOP), and programming fundamentals.",
];
