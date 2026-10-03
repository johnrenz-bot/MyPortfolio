/**
 * Content for the REEFER case study (/Reefer).
 *
 * Every figure and statement here mirrors work already documented on the
 * portfolio (see /Resume and data/experience.ts) — nothing is invented.
 */

export interface ReeferStat {
  value: string;
  label: string;
}

export interface ReeferChallenge {
  title: string;
  body: string;
}

export interface ReeferProcessStep {
  num: string;
  title: string;
  body: string;
}

export interface ReeferFeature {
  title: string;
  body: string;
}

export interface ReeferPageGroup {
  label: string;
  pages: string[];
}

export interface ReeferGuideline {
  title: string;
  /** Long-form intro copy, or the lead-in for a bullet group. */
  body?: string;
  items?: string[];
}

export interface ReeferSection {
  id: string;
  label: string;
}

/** Sticky rail order — drives both the nav and the section spy. */
export const REEFER_SECTIONS: ReeferSection[] = [
  { id: "overview", label: "Overview" },
  { id: "challenge", label: "Challenge" },
  { id: "references", label: "References" },
  { id: "process", label: "Process" },
  { id: "architecture", label: "Architecture" },
  { id: "features", label: "Features" },
  { id: "system", label: "Design System" },
  { id: "outcomes", label: "Outcomes" },
  { id: "guidelines", label: "Guidelines" },
];

export const REEFER_META = {
  title: "REEFER",
  kicker: "Case Study",
  role: "UI/UX Designer & Team Lead",
  timeline: "6 Weeks",
  timelineDetail: "March – April 2026",
  deliverables: "20+ Screens, Design System",
  tool: "Figma",
    discipline: "Web Design",
    category: "E-Commerce Platform",
    /** The live Figma file for this case study. */
    figmaUrl:
      "https://www.figma.com/design/RlzXqNyoF2v1johAuVKLkl/Untitled?node-id=572-2",
  summary:
    "A modern e-commerce platform designed to deliver engaging shopping experiences through thoughtful interface design and user-centered workflows for contemporary urban fashion.",
  overview: [
    "REEFER is a modern e-commerce platform designed to connect contemporary urban fashion with younger demographics that value both aesthetics and seamless user experiences. The platform balances bold visual direction with clean, structured navigation.",
    "As a self-taught UI/UX designer promoted to Team Lead, I bridged raw cultural identity with professional e-commerce standards. I developed the complete design system, managed cross-functional workflows, and translated stakeholder requirements into an optimized user journey ready for development.",
  ],
  problem:
    "As the sole UI/UX designer for REEFER, one of the key challenges was turning stakeholder feedback into a clear and intuitive shopping experience. The project initially lacked defined user flows and structured interface direction, requiring multiple design iterations to align usability, aesthetics, and business expectations. This cyclical process—design, review, revise, review again—was both the core challenge and the foundation of creating a cohesive system.",
};

export const REEFER_STATS: ReeferStat[] = [
  { value: "20+", label: "Design Screens" },
  { value: "40+", label: "Components Built" },
  { value: "8+", label: "Design System Pages" },
  { value: "12+", label: "Feedback Iterations" },
];

export const REEFER_CHALLENGES: ReeferChallenge[] = [
  {
    title: "Design Iteration Cycle",
    body: "Managing continuous stakeholder updates while maintaining visual consistency and professional aesthetics.",
  },
  {
    title: "Desktop-First Architecture",
    body: "Designing detailed e-commerce interfaces that preserve navigation hierarchy across desktop viewports.",
  },
  {
    title: "Team Leadership",
    body: "Directing collaboration workflows and structural documentation within tight project sprint phases.",
  },
];

export const REEFER_REFERENCES = [
  "Free & Easy",
  "HUF",
  "PLEASURES",
  "Vans",
  "RVCA",
  "Carrotsbyanwar",
  "Fucking Awesome",
  "Gnarly",
  "Spades",
];

export const REEFER_REFERENCES_NOTE =
  "These industry-leading brands informed the aesthetic direction, layout strategies, and visual trends. The goal was to extract premium, high-impact design principles while avoiding cluttered, flashy layouts that disrupt user conversion funnels.";

export const REEFER_PROCESS: ReeferProcessStep[] = [
  {
    num: "01",
    title: "Discovery & Research",
    body: "Conducted competitor profiling and mapped user expectations for consumers aged 18–35 to align cultural trends with seamless navigation mechanics.",
  },
  {
    num: "02",
    title: "User Flows & Architecture",
    body: "Structured critical touchpoints including product filtering, sizing variables, cart management, and optimized checkout flows.",
  },
  {
    num: "03",
    title: "Wireframing & Prototyping",
    body: "Produced low-fidelity outlines to test functional assumptions before defining high-fidelity UI systems.",
  },
  {
    num: "04",
    title: "Visual Design & Iterations",
    body: "Executed visual iterations matching aesthetic standards with minimal typography, resolving feedback cycles without introducing layout clutter.",
  },
  {
    num: "05",
    title: "Design System Development",
    body: "Constructed a robust atomic UI token library in Figma with reusable button states, input cards, navigation menus, and form templates.",
  },
  {
    num: "06",
    title: "Documentation & Handoff",
    body: "Generated organized interface documentation with state specifications, interactive properties, and web grid patterns for engineering alignment.",
  },
];

export const REEFER_ARCHITECTURE: ReeferPageGroup[] = [
  {
    label: "Public Pages",
    pages: [
      "Landing Page",
      "About Page",
      "Shop Page",
      "Product Details",
      "Contact Page",
      "FAQ Page",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    label: "Member Pages",
    pages: [
      "Cart Page",
      "Checkout",
      "Order Confirmation",
      "Order Tracking",
      "Order History",
      "User Profile",
      "Wishlist",
      "Notifications",
    ],
  },
];

export const REEFER_FEATURES: ReeferFeature[] = [
  {
    title: "Product Discovery Experience",
    body: "Clear catalog layout with comprehensive filtering tools. Product photography drives the grid with stripped-back typography, relying on visual aesthetics to influence purchasing decisions.",
  },
  {
    title: "Streamlined Checkout",
    body: "Optimized single-page checkout with structural status nodes. Simplified flow reduces drop-off while building trust and transparency.",
  },
  {
    title: "Web Interface Layout",
    body: "Reliable desktop layouts through structured interface grids. Components preserve legibility and interaction safety across desktop viewports.",
  },
  {
    title: "Component Library",
    body: "Solid UI design system for uniform layout behaviors, button interaction phases, and product card variations across the platform.",
  },
];

export const REEFER_ADDITIONAL_PAGES: { title: string; body: string }[] = [
  {
    title: "Home Page",
    body: "Hero, featured collections, and brand messaging",
  },
  {
    title: "Product Details",
    body: "Image gallery, sizing, reviews, and purchase flow",
  },
  {
    title: "User Profile",
    body: "Account settings, order history, and preferences",
  },
  {
    title: "Order Tracking",
    body: "Status updates, shipping information, and support",
  },
];

export const REEFER_PALETTE = [
  { role: "Primary", hex: "#B45309" },
  { role: "Neutral", hex: "#111827" },
  { role: "Background", hex: "#F9FAFB" },
];

export const REEFER_TYPOGRAPHY = [
  { role: "Heading", sample: "Inter Bold", scale: "24px–72px" },
  { role: "Body", sample: "Inter Regular", scale: "14px–16px" },
];

export const REEFER_SPACING = ["4px", "8px", "12px", "16px", "24px", "32px", "48px", "64px"];

export const REEFER_COMPONENTS = [
  { name: "Primary Button", tone: "primary" },
  { name: "Secondary Button", tone: "secondary" },
  { name: "Tertiary Button", tone: "tertiary" },
  { name: "Disabled Button", tone: "disabled" },
] as const;

export const REEFER_DELIVERABLES = [
  "20+ high-fidelity desktop UI screens",
  "Complete UI design system with components",
  "Comprehensive design handoff documentation",
  "Multiple stakeholder feedback iterations",
  "Desktop web design layout specifications",
  "Component usage guidelines and specs",
];

export const REEFER_LEARNINGS = [
  "Iterative design requires flexibility and adaptability",
  "Clear documentation prevents production misunderstandings",
  "Regular communication maintains layout alignment",
  "Leadership clarifies decisions and removes obstacles",
  "Design systems create consistency at scale",
  "User research informs better design decisions",
];

export const REEFER_GUIDELINES: ReeferGuideline[] = [
  {
    title: "Brand Foundation",
    body: "Understand REEFER's identity: modern, visually appealing, and user-centered. Study reference brands for inspiration while avoiding cluttered, flashy layouts that disrupt conversion funnels.",
  },
  {
    title: "Design Approach",
    body: "Start with low-fidelity wireframes before moving to high-fidelity mockups. Annotate designs clearly. Collaborate with developers to ensure accurate implementation.",
  },
  {
    title: "Key Responsibilities",
    items: [
      "Design wireframes, mockups, and prototypes",
      "Conduct user research on customer behavior",
      "Collaborate with developers for implementation",
      "Document design decisions clearly",
    ],
  },
  {
    title: "Workflow Tips",
    items: [
      "Study competitor websites closely",
      "Use design tracking tools for progress",
      "Maintain consistent brand guidelines",
      "Iterate based on feedback cycles",
    ],
  },
];

/** Real REEFER-branded artwork from the existing asset tree. */
export const REEFER_SHOWCASE = [
  {
    src: "/Image/UI/Reefer.png",
    alt: "REEFER storefront homepage design with brand navigation and hero imagery",
    caption: "Storefront Homepage",
  },
  {
    src: "/Image/UI/Cmytk.png",
    alt: "REEFER back-print artwork presented with CMYK colour separation options",
    caption: "Colour Separation Study",
  },
  {
    src: "/Image/UI/alien.png",
    alt: "REEFER black crew-neck tee with alien graphic front and chrome script back print",
    caption: "Alien Tee — Front & Back",
  },
  {
    src: "/Image/UI/11.png",
    alt: "REEFER black crew-neck tee with chess-themed front and back graphics",
    caption: "Strategy Tee — Front & Back",
  },
];