export interface ResourceEntry {
  title: string;
  category: string;
  description: string;
  href: string;
  /** Optional Simple Icons / Fa / Tb icon id for the entry tile. */
  iconId?: string;
  /** Optional mono badge (e.g. Docs, Video, Code). */
  badge?: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  entries: ResourceEntry[];
}

export const RESOURCE_CATEGORIES: ResourceCategory[] = [
  {
    id: "linux-devops",
    title: "Linux & DevOps",
    description: "Fundamentals for working from the command line.",
    entries: [
      {
        title: "Getting Started with Linux",
        category: "Linux & DevOps",
        description: "Introductory Linux concepts and essential commands.",
        href: "https://devopslabs.dev/room/linux-00-what-is-linux",
        iconId: "TbTerminal",
        badge: "Tutorial",
      },
    ],
  },
  {
    id: "programming-development",
    title: "Programming & Development",
    description: "Build-and-learn projects across the MERN stack and Git.",
    entries: [
      {
        title: "MERN Stack Realtime Chat Tutorial",
        category: "Programming & Development",
        description: "Step-by-step realtime chat app build with MERN.",
        href: "https://www.youtube.com/watch?v=7-aY-tS2LhE",
        iconId: "FaYoutube",
        badge: "Video",
      },
      {
        title: "MERN Chat App Source Code",
        category: "Programming & Development",
        description: "Starter source code for the realtime chat app.",
        href: "https://github.com/burakorkmez/imessage",
        iconId: "FaGithub",
        badge: "Code",
      },
      {
        title: "System Design Documentation (Eraser)",
        category: "Programming & Development",
        description: "System design diagrams and documentation workspace.",
        href: "https://app.eraser.io/workspace/eW4G5fPRZ6QykVly1Osu",
        iconId: "TbEraser",
        badge: "Docs",
      },
      {
        title: "Learn Git Branching",
        category: "Programming & Development",
        description: "Interactive visual exercises for Git branches.",
        href: "https://learngitbranching.js.org/",
        iconId: "FaCodeBranch",
        badge: "Practice",
      },
    ],
  },
  {
    id: "ai-coding-agents",
    title: "AI Development & Coding Agents",
    description: "AI-native workflows, agents and local models.",
    entries: [
      {
        title: "Claude Code in VS Code Tutorial",
        category: "AI Development & Coding Agents",
        description: "Set up Claude Code inside VS Code.",
        href: "https://www.youtube.com/watch?v=kUlkSqz32Pw",
        iconId: "FaYoutube",
        badge: "Video",
      },
      {
        title: "Claude Code Official Documentation",
        category: "AI Development & Coding Agents",
        description: "Official product overview and guides.",
        href: "https://code.claude.com/docs/en/overview",
        iconId: "SiClaude",
        badge: "Docs",
      },
      {
        title: "Ollama Model Library (MiniMax M3)",
        category: "AI Development & Coding Agents",
        description: "Run the MiniMax M3 model locally with Ollama.",
        href: "https://ollama.com/library/minimax-m3",
        iconId: "SiOllama",
        badge: "Models",
      },
    ],
  },
  {
    id: "online-learning",
    title: "Online Learning & Courses",
    description: "Self-paced platforms for data, AI and career skills.",
    entries: [
      {
        title: "DataCamp",
        category: "Online Learning & Courses",
        description: "Interactive data and AI courses.",
        href: "https://app.datacamp.com/",
        iconId: "SiDatacamp",
        badge: "Course",
      },
      {
        title: "NextWork",
        category: "Online Learning & Courses",
        description: "AI-focused career and skills courses.",
        href: "https://nextwork.ai/",
        iconId: "SiNextdotjs",
        badge: "Course",
      },
    ],
  },
  {
    id: "cisco-courses",
    title: "Cisco Programming Courses",
    description: "C++ Essentials pathway with optional advanced track.",
    entries: [
      {
        title: "C++ Essentials 1",
        category: "Cisco Programming Courses",
        description: "C++ Essentials course — module one.",
        href: "https://tinyurl.com/3skzjaa9",
        iconId: "SiCisco",
        badge: "C++",
      },
      {
        title: "C++ Essentials 2",
        category: "Cisco Programming Courses",
        description: "C++ Essentials course — module two.",
        href: "https://tinyurl.com/32jdftvn",
        iconId: "SiCisco",
        badge: "C++",
      },
      {
        title: "C++ Essentials",
        category: "Cisco Programming Courses",
        description: "Core C++ Essentials course material.",
        href: "https://tinyurl.com/9uvf5ek2",
        iconId: "SiCisco",
        badge: "C++",
      },
      {
        title: "C++ Advanced",
        category: "Cisco Programming Courses",
        description: "Advanced C++ programming topics.",
        href: "https://tinyurl.com/d4bztp3s",
        iconId: "SiCisco",
        badge: "C++",
      },
    ],
  },
  {
    id: "design-docs",
    title: "Design & Technical Documentation",
    description: "Future home for UI/UX, hosting, databases and docs.",
    entries: [],
  },
];

export const RESOURCES: ResourceEntry[] = RESOURCE_CATEGORIES.flatMap((c) => c.entries);
