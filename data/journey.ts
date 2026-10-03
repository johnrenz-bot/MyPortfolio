import type { GalleryItem } from "../types";

export type JourneyImage = {
  src: string;
  alt: string;
  /** Tailwind aspect class, e.g. "aspect-[4/5]" */
  ratio: string;
  /** optional rotation class for the scattered/stacked look */
  tilt?: string;
};

export type JourneyLayout =
  | "portrait-left"
  | "landscape-right"
  | "duo-offset"
  | "bleed"
  | "stack";

export type Chapter = {
  id: string;
  chapter: string;
  period: string;
  title: string;
  kicker: string;
  story: string[];
  takeaway: string;
  tags: string[];
  layout: JourneyLayout;
  images: JourneyImage[];
};

export const JOURNEY_CHAPTERS: Chapter[] = [
  {
    id: "start",
    chapter: "01",
    period: "2022 — 2026",
    title: "Starting over, in a small building in Bulacan",
    kicker: "BSIT Student — STI College San Jose del Monte, Bulacan",
    story: [
      "I started BSIT in 2022 at STI College San Jose del Monte, mostly because I liked taking things apart and wanted a course that let me keep doing that for money.",
      "The first year was not glamorous. Java Foundations, spreadsheets that eventually became databases, and a lot of small broken layouts that I refused to throw away until I understood why they broke. Somewhere in there I stopped thinking of programming as something I was bad at and started thinking of it as something I was getting better at, slowly.",
      "Four years later I finished it. This is my college journey, and I graduated on July 31, 2026.",
    ],
    takeaway:
      "Takeaway: I learned to keep the broken version around. Almost every bug I've fixed since started as something I refused to delete without understanding.",
    tags: ["BSIT", "STI College", "Java Foundations", "SAP Business One"],
    layout: "portrait-left",
    images: [
      {
        src: "/Image/Journey/ME.jpg",
        alt: "Group of STI College students with lanyards posing in a hallway during class hours",
        ratio: "aspect-[4/5]",
        tilt: "-rotate-1",
      },
    ],
  },
  {
    id: "webdev",
    chapter: "02",
    period: "2024 — 2026",
    title: "The point where web development stopped being one subject",
    kicker: "Website Development Focus",
    story: [
      "Partway through BSIT my focus narrowed onto one thing: building for the web. Frontend, backend, databases, APIs, and eventually full-stack projects that had to work end to end instead of just render.",
      "That meant a lot of small, unglamorous practice — wiring a form to an API, modelling a database properly, then reading the server logs until the failure finally made sense.",
      "This focus is what everything after it builds on: the capstone, the UI/UX work, the QA passes, and the client portal.",
    ],
    takeaway:
      "Takeaway: the full-stack mindset is mostly about knowing where the failure is — frontend, API, or database — before you start changing things.",
    tags: ["Frontend", "Backend", "Databases", "APIs", "Full-Stack"],
    layout: "landscape-right",
    images: [
      {
        src: "/Image/Groove/GR2.png",
        alt: "Login and registration screen with role-based access on a full-stack web application",
        ratio: "aspect-[16/10]",
      },
    ],
  },
  {
    id: "capstone",
    chapter: "03",
    period: "March — November 2025",
    title: "Groove: three people, one database, a lot of meetings",
    kicker: "Groove — Capstone Project, Full-Stack Developer & Team Lead",
    story: [
      "Groove was my academic capstone project at STI — not an internship, and not client work. I led a three-person team building a platform connecting artists, studio owners, and coaches. We worked in an Agile rhythm and held quality to ISO/IEC 25010:2014, which sounded bureaucratic until it saved us during QA.",
      "Before writing any code we surveyed 152 people. Those answers shaped the requirements: appointment scheduling, role-based access, Google Maps integration, and an AI chat assistant.",
      "I worked on the full-stack web application — the database, the APIs, and authentication with RBAC — alongside the testing and the documentation I was very glad existed at 2am during debugging week. We shipped it, tested it, and submitted it.",
    ],
    takeaway:
      "Takeaway: 152 survey responses taught me more about scoping than any textbook chapter. Requirements are a product decision, not an admin task.",
    tags: ["React", "PHP / Laravel", "MySQL", "REST APIs", "RBAC", "Agile"],
    layout: "duo-offset",
    images: [
      {
        src: "/Image/Journey/Capstone.png",
        alt: "Group of STI College students with lanyards at a gaming expo booth, holding swag bags",
        ratio: "aspect-[16/10]",
        tilt: "rotate-1",
      },
      {
        src: "/Image/Groove.png",
        alt: "Groove capstone platform landing page UI",
        ratio: "aspect-[4/3]",
        tilt: "rotate-2",
      },
    ],
  },
  {
    id: "design",
    chapter: "04",
    period: "March — June 2026",
    title: "Learning to design before I learned to argue about it",
    kicker: "UI/UX Product Designer & Team Lead — Alpha Centauri Garments (Required School Internship / OJT)",
    story: [
      "My first internship was the required school OJT, and it put me in front of Figma for the first time. I designed responsive e-commerce and marketing interfaces for an apparel brand and then watched developers turn them into HTML/CSS, while also leading the team on design coordination.",
      "I kept a design system so the layouts stopped drifting, documented the specs, and ran testing cycles with the devs. Seeing my own spacing decisions argued about in code was humbling and useful.",
      "The Google UX Designer certification in the same period lined up with all of it. Wireframing, prototyping, usability testing — the vocabulary finally matched the instinct I already had.",
    ],
    takeaway:
      "Takeaway: designers and developers disagree less when the spec is specific. I stopped handing over screenshots and started handing over rules.",
    tags: ["Figma", "Design Systems", "Wireframing", "Google UX Designer"],
    layout: "stack",
    images: [
      {
        src: "/Image/Journey/Intern.png",
        alt: "John Renz giving two thumbs up beside a laptop showing the Bestive IceBreaker Training mobile UI in Figma",
        ratio: "aspect-[4/5]",
      },
      {
        src: "/Image/UI/Reefer.png",
        alt: "REEFER clothing e-commerce homepage hero design",
        ratio: "aspect-[4/3]",
      },
    ],
  },
  {
    id: "boxhive",
    chapter: "05",
    period: "April — June 2026",
    title: "Writing the bug reports, then fixing my own screens",
    kicker: "IT Intern — Volunteer, BoxHive Digital Solutions",
    story: [
      "At BoxHive this was volunteer experience rather than a regular internship. I got hands-on exposure to QA and web development support: testing web interfaces, checking functionality and layout issues, documenting defects, and verifying the fixes with the developers before release.",
      "The work was mostly manual test cases and layout checks — finding what was actually broken rather than what I had meant to build.",
      "Six weeks of volunteering gave me the QA side of software development, which is the side fewer people talk about and most products depend on.",
    ],
    takeaway:
      "Takeaway: writing the test case forces you to admit what you actually built, not what you meant to build.",
    tags: ["QA Testing", "Manual Testing", "Defect Reports", "Volunteer"],
    layout: "bleed",
    images: [
      {
        src: "/Image/tech/tech4.png",
        alt: "IceBreaker app how-to guide for PSYSC STEM Expo 2026, powered by BoxHive Digital Solution",
        ratio: "aspect-[3/4]",
      },
      {
        src: "/Image/tech/STEM7.png",
        alt: "PSYSC STEM Expo 2026 IceBreaker challenges poster",
        ratio: "aspect-[3/4]",
        tilt: "rotate-1",
      },
      {
        src: "/Image/tech/tech5.png",
        alt: "IceBreaker voting how-to poster for the PSYSC Science Film Festival",
        ratio: "aspect-[3/4]",
        tilt: "-rotate-1",
      },
    ],
  },
  {
    id: "stemex",
    chapter: "06",
    period: "May 2026",
    title: "An exhibitor badge and a booth that actually had a queue",
    kicker: "STEMEXPO / PSYSC — Project Exhibitor, UP Diliman",
    story: [
      "In May 2026 I exhibited at STEMEXPO / PSYSC at UP Diliman. The badge says Exhibitors, and I spent the event explaining my project's software to people who had never heard of it.",
      "Standing behind a table explaining your own work is the fastest feedback loop there is. You find out in one sentence whether a person understood anything you built.",
      "It sits here as a community and academic milestone — a school project showing up in the same room as everyone else's, and holding its own.",
    ],
    takeaway:
      "Takeaway: exhibitor mode and audience mode are different skills. I needed both before I understood that was the job.",
    tags: ["STEMEXPO", "PSYSC", "UP Diliman", "Project Exhibitor"],
    layout: "stack",
    images: [
      {
        src: "/Image/Gallery/StemExpo.jpg",
        alt: "PSYSC STEM Expo 2026 exhibitor credential held in hand",
        ratio: "aspect-[3/4]",
      },
      {
        src: "/Image/Gallery/StemExpo2.jpg",
        alt: "Re:Live 3D Build Your Own ClickyS banner at the exhibition booth",
        ratio: "aspect-[4/3]",
      },
      {
        src: "/Image/Gallery/StemExpo3.jpg",
        alt: "Triode and Parallel3D display boards set up on easels at the expo booth",
        ratio: "aspect-[3/4]",
        tilt: "rotate-1",
      },
    ],
  },
  {
    id: "sunlife",
    chapter: "07",
    period: "June — July 2026",
    title: "Sun Life: my first build that real people used",
    kicker: "Advisor Support Associate Intern — Sun Life, Phoenix Palm Empire (Team Padua)",
    story: [
      "This is the stretch I'm most careful about claiming, because it's the one where I stopped being a student and started being responsible for something.",
      "I interned with the Advisor Services team at Sun Life Financial Philippines, Phoenix Palm Empire — Team Padua. Alongside the day-to-day admin and coordination work, I built and deployed the Team Padua Client Management Portal with Next.js, React, TypeScript, Tailwind, Supabase, and Vercel.",
      "Authentication, role-based access for Admin / Advisor / Intern, real-time data syncing, client servicing tracking, task management, attendance, birthday greetings, a CPST prospect tracker, an analytics dashboard, and internal messaging. Advisors and admin staff used it. They also found things that were confusing, and we fixed them.",
      "The rest of it was unglamorous and necessary: unit testing, debugging, code review, Git and GitHub discipline, and sitting with the people who would actually use the thing and asking what was wrong with it.",
    ],
    takeaway:
      "Takeaway: shipping to real users is the only feedback that counts. I stopped guessing what was confusing after this one.",
    tags: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "RBAC"],
    layout: "stack",
    images: [
      {
        src: "/Image/Journey/SunLifeIntern.jpg",
        alt: "Phoenix team members in uniform posing on tiered seating in the office lounge",
        ratio: "aspect-[3/2]",
      },
      {
        src: "/Image/Journey/SunlifeIntern2.jpg",
        alt: "Group selfie in front of the Sun Life event backdrop reading Let's Get Loud",
        ratio: "aspect-[3/2]",
        tilt: "rotate-1",
      },
      {
        src: "/Image/Journey/SunLifeIntern3.jpg",
        alt: "Large team on the steps at an I Got Gold Sun Life event in matching uniforms",
        ratio: "aspect-[3/2]",
      },
      {
        src: "/Image/Journey/SunLife4.jpg",
        alt: "Team gathered around a decorated cake for a workplace celebration",
        ratio: "aspect-[3/2]",
        tilt: "-rotate-1",
      },
    ],
  },
  {
    id: "hermes",
    chapter: "08",
    period: "October 2, 2026",
    title: "Eight hours awake for someone else's demo",
    kicker: "Volunteer — DEVCON Manila, Camp Run: Go Agentic with Hermes Agent",
    story: [
      "Camp Run was an overnight workshop and mini hackathon at DEVCON Manila with Avtica and Amihan — learn, build, run. I volunteered on the technical and AV side.",
      "My night: slide QA, internet and AV readiness, setting up the Hermes Agent demo, then testing Hermes Agent workflows before and during the hackathon to spot issues before the room found them first. Somewhere around 4am I was very glad I had done the layout checks at BoxHive, because everything got checked again.",
      "There's a group photo at the end of it with fifty-odd people around the tables, and honestly that's the version of the night I remember best.",
    ],
    takeaway:
      "Takeaway: most of my most useful work has been at the edges of someone else's event, making sure the demo doesn't die in front of a crowd.",
    tags: ["DEVCON Manila", "Hermes Agent", "Hackathon", "AV & Demo Support"],
    layout: "landscape-right",
    images: [
      {
        src: "/Image/Gallery/DevconME.jpg",
        alt: "Volunteer presenting beside the Go Agentic with Hermes Agent Camp Run screen at DEVCON Manila",
        ratio: "aspect-[3/2]",
      },
      {
        src: "/Image/Gallery/Devcon.jpg",
        alt: "Around sixty participants posing around the worktables at the Hermes Agent Camp Run hackathon",
        ratio: "aspect-[3/2]",
        tilt: "rotate-1",
      },
    ],
  },
  {
    id: "now",
    chapter: "09",
    period: "Now",
    title: "Fresh out, looking for somewhere to be useful",
    kicker: "Open to opportunities",
    story: [
      "I graduated BSIT in July 2026 with a 2.15 GWA, and I've spent the last year alternating between building things and being the person who checks them.",
      "What I bring is a bit unusual for a fresh grad: I've shipped a production portal used by real advisors, designed and QA-tested the same screens, led a capstone team of three, and spent a night in a hackathon hall keeping someone else's demo alive.",
      "What I want next is a team that ships things, gives honest code review, and doesn't mind that I ask a lot of questions in the first two weeks.",
    ],
    takeaway:
      "Takeaway: I'm early in my career and comfortable saying so. I'd rather be honest about what I've done than dress it up.",
    tags: ["Open to Work", "Full-Stack", "UI/UX", "QA"],
    layout: "portrait-left",
    images: [
      {
        src: "/Image/Gallery/AwsME.jpg",
        alt: "John Renz seated on a sofa in front of an AWS wall logo, wearing a staff lanyard",
        ratio: "aspect-[3/4]",
      },
      {
        src: "/Image/Hero/grad.png",
        alt: "John Renz Bandianon, BSIT graduate",
        ratio: "aspect-[3/4]",
        tilt: "rotate-1",
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/Image/Gallery/Devcon.jpg",
    alt: "Participants posing around worktables at the Hermes Agent Camp Run hackathon",
    caption: "Camp Run, end of the night",
    note: "DEVCON Manila workshop + mini hackathon",
    tag: "Community",
    span: "tall",
  },
  {
    src: "/Image/Gallery/Devcon3.jpg",
    alt: "Opening keynote by Winston Damarillo, Founder and President of DEVCON Philippines",
    caption: "Opening keynote",
    note: "Founder & President, DEVCON Philippines",
    tag: "Community",
    span: "tall",
  },
  {
    src: "/Image/Gallery/DevconME.jpg",
    alt: "Presenter beside the Camp Run event screen during the DEVCON Manila session",
    caption: "My volunteer slot",
    note: "Slides, AV, and the Hermes Agent demo",
    tag: "Community",
    span: "wide",
  },
  {
    src: "/Image/Gallery/DEvcon2.jpg",
    alt: "Elevated view over the hackathon floor with a countdown projected on the wall",
    caption: "The room mid-build",
    note: "Tables, laptops, cables, snacks",
    tag: "Community",
    span: "normal",
  },
  {
    src: "/Image/Gallery/StemExpo.jpg",
    alt: "PSYSC STEM Expo 2026 exhibitor credential",
    caption: "Exhibitor badge",
    note: "PSYSC STEMEXPO 2026, Manila",
    tag: "Events",
    span: "tall",
  },
  {
    src: "/Image/Gallery/StemExpo2.jpg",
    alt: "Re:Live 3D Build Your Own ClickyS banner at the booth",
    caption: "Our booth, two days running",
    note: "Re:Live 3D keycap builds",
    tag: "Events",
    span: "normal",
  },
  {
    src: "/Image/Gallery/StemExpo3.jpg",
    alt: "Triode and Parallel3D display boards on easels",
    caption: "Neighbours on both sides",
    note: "Triode · Parallel3D",
    tag: "Events",
    span: "normal",
  },
  {
    src: "/Image/Gallery/Aws3.jpg",
    alt: "Projected slide titled How AI Native Teams Plan, Build, Test, and Ship",
    caption: "Sat in the front row",
    note: "OpenAI / Codex tech meetup",
    tag: "Meetups",
    span: "tall",
  },
  {
    src: "/Image/Gallery/AwsME.jpg",
    alt: "Portrait taken in front of an illuminated AWS wall logo",
    caption: "An AWS event I got into",
    note: "Makati",
    tag: "Meetups",
    span: "tall",
  },
  {
    src: "/Image/Gallery/Aws2.jpg",
    alt: "Standing beside an illuminated aws sign and event audio equipment",
    caption: "AV corner, as usual",
    note: "Lanyard on, mixer running",
    tag: "Meetups",
    span: "normal",
  },
  {
    src: "/Image/Journey/SunLifeIntern.jpg",
    alt: "Phoenix team in uniform on tiered seating in the office lounge",
    caption: "Team Padua, end of the internship",
    note: "Sun Life · Phoenix Palm Empire",
    tag: "Work",
    span: "wide",
  },
  {
    src: "/Image/Journey/SunlifeIntern2.jpg",
    alt: "Group selfie in front of the Sun Life Let's Get Loud backdrop",
    caption: "Company event",
    note: "Sun Life, in uniform",
    tag: "Work",
    span: "normal",
  },
  {
    src: "/Image/Journey/SunLifeIntern3.jpg",
    alt: "Large team on outdoor steps beneath an I Got Gold event arch",
    caption: "Everyone at once",
    note: "Fifty-plus people and one wide lens",
    tag: "Work",
    span: "wide",
  },
  {
    src: "/Image/Journey/SunLife4.jpg",
    alt: "Team gathered around a decorated cake",
    caption: "Someone's celebration, all of ours",
    note: "Cake first, questions later",
    tag: "Work",
    span: "normal",
  },
  {
    src: "/Image/Journey/Intern.png",
    alt: "Thumbs up beside a laptop running the Bestive IceBreaker Training mobile UI in Figma",
    caption: "BoxHive desk",
    note: "IceBreaker app UI in Figma",
    tag: "Work",
    span: "tall",
  },
  {
    src: "/Image/Journey/ygg.png",
    alt: "STI College group at a gaming expo booth holding swag bags",
    caption: "School field trip energy",
    note: "STI College, lanyards on",
    tag: "School",
    span: "wide",
  },
  {
    src: "/Image/Journey/Capstone.png",
    alt: "Group of STI College students posing in a hallway with lanyards",
    caption: "Between classes",
    note: "STI College San Jose del Monte",
    tag: "School",
    span: "tall",
  },
  {
    src: "/Image/tech/tech4.png",
    alt: "IceBreaker app guide for PSYSC STEM Expo 2026",
    caption: "IceBreaker, step by step",
    note: "BoxHive Digital Solution",
    tag: "Projects",
    span: "tall",
  },
  {
    src: "/Image/tech/STEM7.png",
    alt: "PSYSC STEM Expo 2026 challenges poster for IceBreaker",
    caption: "Challenges, points, rewards",
    note: "PSYSC STEMEXPO 2026",
    tag: "Projects",
    span: "normal",
  },
  {
    src: "/Image/tech/tech1.png",
    alt: "IceBreaker networking made easy poster with smartwatch mockups",
    caption: "Networking made easy",
    note: "IceBreaker",
    tag: "Projects",
    span: "normal",
  },
  {
    src: "/Image/tech/STEM1.png",
    alt: "Poster inviting attendees to download the STEM Expo 2026 app",
    caption: "The app that ran the show",
    note: "PSYSC STEMEXPO 2026",
    tag: "Projects",
    span: "tall",
  },
];

export const GALLERY_TAGS = [
  "All",
  "Community",
  "Events",
  "Meetups",
  "Work",
  "School",
  "Projects",
] as const;