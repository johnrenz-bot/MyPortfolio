import { Skill } from "../types";

export const FRONTEND_TECH: Skill[] = [
  {
    iconId: "FaReact",
    name: "React",
    proficiency: "Advanced",
    description: "Component architecture, application interfaces, hooks & state management",
  },
  {
    iconId: "SiNextdotjs",
    name: "Next.js",
    proficiency: "Advanced",
    description: "Client-side systems, frontend structures, server rendering & routing",
  },
  {
    iconId: "SiTailwindcss",
    name: "Tailwind CSS",
    proficiency: "Advanced",
    description: "Responsive layouts, modern utility-first classes & design tokens",
  },
  {
    iconId: "SiBootstrap",
    name: "Bootstrap",
    proficiency: "Advanced",
    description: "Responsive frameworks, grid systems & layout templates",
  },
  {
    iconId: "SiHtml5",
    name: "HTML5",
    proficiency: "Advanced",
    description: "Semantic markup, modern web structures & accessibility standards",
  },
  {
    iconId: "SiCss3",
    name: "CSS3",
    proficiency: "Advanced",
    description: "Responsive layouts, Flexbox, Grid, keyframe animations & styling",
  },
];

export const BACKEND_TECH: Skill[] = [
  {
    iconId: "SiLaravel",
    name: "Laravel",
    proficiency: "Intermediate",
    description: "MVC architectures, Eloquent ORM, authentication & backend APIs",
  },
  {
    iconId: "SiNodedotjs",
    name: "Node.js",
    proficiency: "Intermediate",
    description: "Server-side JavaScript runtime, backend logic & REST services",
  },
  {
    iconId: "SiExpress",
    name: "Express.js",
    proficiency: "Intermediate",
    description: "Lightweight backend routing, middleware & API endpoints",
  },
  {
    iconId: "FaServer",
    name: "REST APIs",
    proficiency: "Advanced",
    description: "API design, endpoint integration, HTTP methods & data exchange",
  },
];

export const DATABASES_TECH: Skill[] = [
  {
    iconId: "SiMysql",
    name: "MySQL",
    proficiency: "Intermediate",
    description: "Relational tables, schema architecture & core database management",
  },
  {
    iconId: "SiPostgresql",
    name: "PostgreSQL",
    proficiency: "Intermediate",
    description: "Data architectures, relational querying scripts & indexing",
  },
  {
    iconId: "SiSupabase",
    name: "Supabase",
    proficiency: "Intermediate",
    description: "Postgres database, realtime subscriptions & authentication services",
  },
  {
    iconId: "SiFirebase",
    name: "Firebase",
    proficiency: "Intermediate",
    description: "Cloud Firestore, realtime sync & authentication integration",
  },
  {
    iconId: "SiMongodb",
    name: "MongoDB",
    proficiency: "Intermediate",
    description: "NoSQL document collections, JSON-like data storage & schemas",
  },
];

export const DATABASE_TECH = DATABASES_TECH;

export const PROGRAMMING_LANGUAGES: Skill[] = [
  {
    iconId: "SiJavascript",
    name: "JavaScript",
    proficiency: "Advanced",
    description: "Modern ES6+, frontend scripts, logic flows & interactive states",
  },
  {
    iconId: "SiTypescript",
    name: "TypeScript",
    proficiency: "Intermediate",
    description: "Static analysis typing, interface definitions & type safety",
  },
  {
    iconId: "SiPhp",
    name: "PHP",
    proficiency: "Intermediate",
    description: "Backend scripting, server-side logic & web application features",
  },
  {
    iconId: "FaJava",
    name: "Java",
    proficiency: "Intermediate",
    description: "Object-oriented programming, data structures & backend logic",
  },
  {
    iconId: "TbBrandCSharp",
    name: "C#",
    proficiency: "Intermediate",
    description: "Object-oriented architectures, application logic & software design",
  },
  {
    iconId: "SiPython",
    name: "Python",
    proficiency: "Intermediate",
    description: "Scripting, algorithm implementations & data processing tasks",
  },
];

export const DESIGN_TOOLS: Skill[] = [
  {
    iconId: "SiFigma",
    name: "Figma",
    proficiency: "Expert",
    description: "UI/UX design, wireframing, prototyping, design systems & user flows",
  },
  {
    iconId: "SiAdobephotoshop",
    name: "Photoshop",
    proficiency: "Advanced",
    description: "Visual layouts, visual hierarchy & graphic asset optimization",
  },
  {
    iconId: "SiAdobeillustrator",
    name: "Illustrator",
    proficiency: "Intermediate",
    description: "Vector graphics, brand identity & creative layout creation",
  },
  {
    iconId: "SiCanva",
    name: "Canva",
    proficiency: "Advanced",
    description: "Marketing design, branding & presentation template setups",
  },
  {
    iconId: "SiBehance",
    name: "Behance",
    proficiency: "Advanced",
    description: "Design case studies, project showcases & visual portfolio presentation",
  },
  {
    iconId: "SiDribbble",
    name: "Dribbble",
    proficiency: "Advanced",
    description: "Visual design snippets, UI components & creative networking",
  },
];

export const MANAGEMENT_DEV_TOOLS: Skill[] = [
  {
    iconId: "SiGit",
    name: "Git",
    proficiency: "Advanced",
    description: "Version controls, branch workflows & team development lifecycles",
  },
  {
    iconId: "SiGithub",
    name: "GitHub",
    proficiency: "Advanced",
    description: "Remote repository management, pull requests & collaboration",
  },
  {
    iconId: "TbBrandVscode",
    name: "VS Code",
    proficiency: "Advanced",
    description: "Source code editing, debugging, workspace tooling & extensions",
  },
  {
    iconId: "SiPostman",
    name: "Postman",
    proficiency: "Advanced",
    description: "API testing, request debugging & endpoint documentation",
  },
  {
    iconId: "SiJira",
    name: "Jira",
    proficiency: "Intermediate",
    description: "Agile project tracking, sprint planning & issue management",
  },
  {
    iconId: "SiTrello",
    name: "Trello",
    proficiency: "Advanced",
    description: "Kanban board task tracking, project workflows & team collaboration",
  },
  {
    iconId: "SiNotion",
    name: "Notion",
    proficiency: "Advanced",
    description: "Workspace documentation, knowledge bases & task setups",
  },
  {
    iconId: "SiClickup",
    name: "ClickUp",
    proficiency: "Advanced",
    description: "Custom project dashboards, goal tracking & productivity workflows",
  },
  {
    iconId: "CgMonday",
    name: "Monday.com",
    proficiency: "Advanced",
    description: "Operational management, resource tracking & team dashboards",
  },
];

/* ─── Backwards-compatible aliases ─── */
export const DEV_TOOLS: Skill[] = MANAGEMENT_DEV_TOOLS.slice(0, 2);
export const MANAGEMENT_TOOLS: Skill[] = MANAGEMENT_DEV_TOOLS.slice(4);
export const PORTFOLIO_PLATFORMS: Skill[] = DESIGN_TOOLS.slice(4);

export const SOFT_SKILLS: string[] = [
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

export const HARD_SKILLS: string[] = [
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
