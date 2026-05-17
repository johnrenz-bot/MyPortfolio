"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaPhp, FaGithub, FaGitAlt } from "react-icons/fa";
import {
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiGooglemaps,
  SiHostinger,
  SiXampp,
} from "react-icons/si";
import Loader from "./loader";

const STACK = [
  { label: "Laravel", icon: <SiLaravel /> },
  { label: "PHP", icon: <FaPhp /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "GitHub", icon: <FaGithub /> },
  { label: "XAMPP", icon: <SiXampp /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
  { label: "Hostinger", icon: <SiHostinger /> },
  { label: "Google Maps API", icon: <SiGooglemaps /> },
];

const SURVEY_STATS = [
  { value: "78.9%", label: "Had difficulty finding qualified coaches or choreographers", n: "120 of 152" },
  { value: "88.8%", label: "Relied on referrals to find performing arts professionals", n: "135 of 152" },
  { value: "82.2%", label: "Experienced delays communicating about availability & rates", n: "125 of 152" },
  { value: "96.1%", label: "Had difficulty finding artists whose rates fit their budget", n: "146 of 152" },
  { value: "86.8%", label: "Had difficulty finding nearby rehearsal studios", n: "132 of 152" },
  { value: "88%", label: "Had no consistent platform to share their work with peers", n: "133 of 152" },
];

const MODULES = [
  {
    role: "Super Admin",
    color: "#6366f1",
    features: [
      "Dashboard — platform-wide metrics, user growth, activity logs, system alerts",
      "User & Role Management — delete accounts, assign roles and access levels",
      "Verification Management — approve IDs and portfolios for coaches and choreographers",
      "Transaction Monitoring — immutable contract agreement records with digital signatures",
      "Community Content Management — moderation of posts, reported content, community rules",
      "Analytics & System Monitor — server performance, user retention, system health",
      "Ticket System — bug reports and user-submitted technical issues",
      "Artist Directory Management — approve, edit, or deactivate artist listings",
    ],
  },
  {
    role: "Performing Artist",
    color: "#f59e0b",
    features: [
      "Registration & Login — account creation with role-based secure access",
      "Verification — submit certifications and portfolios to gain verified status",
      "Dashboard — manage bookings, schedules, and client interactions",
      "Profile & Portfolio — bio, talent category, media uploads (photos/videos), service details",
      "Artist Directory — control how profile appears in public search with genre, pricing, availability",
      "Smart Chat Support — AI-powered 24/7 assistance for inquiries about availability and rates",
      "Scheduling — calendar-based session and availability management",
      "Contract Agreement — digital contract must be signed before booking confirmation",
      "Community — connect and collaborate with fellow artists",
      "Reviews & Ratings — view client feedback to maintain service quality",
      "Notifications & Alerts — real-time updates on bookings, messages, and reminders",
    ],
  },
  {
    role: "Client",
    color: "#10b981",
    features: [
      "Registration & Login — account creation with personalized preferences",
      "Dashboard — upcoming bookings, recent activity, and favorite artists",
      "Artist Directory — search coaches or choreographers by genre, price, rating, location",
      "Studio Locator — Google Maps integration with radius-based studio discovery",
      "Smart Chat Support — AI-powered 24/7 assistance for service and availability inquiries",
      "Booking System — request and manage appointments with artists",
      "Contract Agreement — must sign contract before session confirmation",
      "Community — participate in discussions, join groups, connect with artists",
      "Reviews & Feedback — submit ratings and reviews post-session",
    ],
  },
];

const PROCESS_PHASES = [
  {
    phase: "01",
    title: "Discovery & Research",
    detail:
      "Conducted surveys among 152 performing artists, coaches, and choreographers in San Jose Del Monte, Bulacan to identify user pain points, platform requirements, and behavioral patterns. Survey data was incorporated into the requirements analysis to guide all system design decisions.",
  },
  {
    phase: "02",
    title: "Requirements Analysis",
    detail:
      "Defined scope for three distinct user roles — Super Admin, Performing Artist, and Client. Documented functional and non-functional requirements across all modules including Smart Chat Support, Studio Locator, Booking, Community, and Contract Agreement.",
  },
  {
    phase: "03",
    title: "System Design",
    detail:
      "Architected the database schema using MySQL, designed the full-stack application structure using Laravel MVC, and planned UI layouts and user flows. Agile methodology was adopted for iterative development, enabling continuous feedback integration throughout the build.",
  },
  {
    phase: "04",
    title: "Development",
    detail:
      "Front-end built with HTML, Tailwind CSS, and JavaScript for a responsive, modern interface. Back-end powered by PHP and Laravel managing user accounts, bookings, feedback, contract records, and chat histories. Google Maps API integrated for the studio locator. AI chat support implemented for automated client-artist inquiry handling.",
  },
  {
    phase: "05",
    title: "Testing",
    detail:
      "Three-phase testing applied: Unit Testing to verify individual modules, Alpha Testing for internal team evaluation of functionality and UI stability, and Beta Testing with actual performing artists, coaches, and choreographers. All testing aligned with ISO/IEC 25010:2014 quality standards covering functionality, reliability, usability, and performance efficiency.",
  },
  {
    phase: "06",
    title: "Deployment",
    detail:
      "System deployed on Hostinger with Laravel framework and MySQL database configured in a live hosting environment. Post-deployment debugging and final system checks were conducted to ensure stable performance, database connectivity, and cross-device responsiveness before official launch.",
  },
];

const SYSTEM_SCREENS = [
  { id: "g1", title: "Landing Page", role: "Guest", description: "Platform introduction showcasing system highlights and artist features.", image: "/Image/Groove/g1.png" },
  { id: "g2", title: "Authentication", role: "Guest", description: "Secure login and registration with role-based access control.", image: "/Image/Groove/GR2.png" },
  { id: "a1", title: "Admin Dashboard", role: "Super Admin", description: "Central analytics for monitoring users, activity, and system health.", image: "/Image/Groove/S1.png" },
  { id: "a2", title: "User & Role Management", role: "Super Admin", description: "Manage users, assign roles, and control access levels.", image: "/Image/Groove/S2.png" },
  { id: "a3", title: "Verification System", role: "Super Admin", description: "Approve artist credentials such as IDs and portfolios.", image: "/Image/Groove/S3.png" },
  { id: "a4", title: "Transaction Monitoring", role: "Super Admin", description: "Immutable contract and booking agreement records.", image: "/Image/Groove/S4.png" },
  { id: "a5", title: "Content Moderation", role: "Super Admin", description: "Manage posts, reports, and enforce community standards.", image: "/Image/Groove/S5.png" },
  { id: "c1", title: "Artist Registration", role: "Performing Artist", description: "Onboarding capturing skills, portfolio, and credentials.", image: "/Image/Groove/g3.png" },
  { id: "c2", title: "Profile & Portfolio", role: "Performing Artist", description: "Manage personal profile, media uploads, and service details.", image: "/Image/Groove/g5.png" },
  { id: "c3", title: "Artist Dashboard", role: "Performing Artist", description: "Overview of bookings, schedules, and client interactions.", image: "/Image/Groove/g6.png" },
  { id: "c4", title: "Scheduling System", role: "Performing Artist", description: "Calendar-based session and availability management.", image: "/Image/Groove/g11.png" },
  { id: "c5", title: "Smart Chat Support", role: "Performing Artist", description: "AI-powered 24/7 chat for client inquiries about availability and rates.", image: "/Image/Groove/g8.png" },
  { id: "cl1", title: "Client Registration", role: "Client", description: "Account creation with personalized preferences.", image: "/Image/Groove/g15.png" },
  { id: "cl2", title: "Artist Search & Filters", role: "Client", description: "Find artists by genre, price, rating, and location.", image: "/Image/Groove/g20.png" },
  { id: "cl3", title: "Studio Locator", role: "Client", description: "Google Maps integration for locating nearby studios by radius.", image: "/Image/Groove/g20.png" },
  { id: "cl4", title: "Booking System", role: "Client", description: "Request and manage appointments with artists.", image: "/Image/Groove/g22.png" },
];

const ROLE_COLORS: Record<string, string> = {
  "Guest": "bg-white/10 text-white/60",
  "Super Admin": "bg-indigo-500/20 text-indigo-300",
  "Performing Artist": "bg-amber-500/20 text-amber-300",
  "Client": "bg-emerald-500/20 text-emerald-300",
};

export default function Groove() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("overview");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [activeRole, setActiveRole] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const NAV_SECTIONS = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
    { id: "process", label: "Process" },
    { id: "system", label: "System" },
    { id: "results", label: "Results" },
  ];

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [loading]);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  if (loading) return <Loader />;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&family=DM+Mono:wght@300;400;500&display=swap');
        .cs-mono { font-family: 'DM Mono', monospace; }
        .cs-serif { font-family: 'Cormorant Garamond', serif; }
        .prose-text { opacity: 0.7; line-height: 1.85; }
        .fade-up { animation: fadeUp 0.7s cubic-bezier(.22,1,.36,1) both; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .stat-card:hover .stat-value { transform: scale(1.05); }
        .stat-value { transition: transform 0.3s ease; display: inline-block; }
        .screen-card:hover img { transform: scale(1.04); }
        .screen-card img { transition: transform 0.6s cubic-bezier(.22,1,.36,1); }
      `}</style>

      <main className="min-h-screen text-[var(--text)] relative">

        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--text)]/8 backdrop-blur-xl bg-[var(--bg)]/80">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[0.55rem] cs-mono uppercase tracking-[0.2em] border border-[var(--text)]/20 px-4 py-2 rounded-full hover:bg-[var(--text)]/5 transition"
            >
              <FaArrowLeft className="text-[10px]" /> Back
            </Link>
            <div className="hidden sm:flex items-center gap-1">
              {NAV_SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`text-[0.48rem] cs-mono uppercase tracking-[0.2em] px-4 py-2 rounded-full transition ${
                    activeSection === s.id
                      ? "bg-[var(--text)]/10 text-[var(--text)]"
                      : "text-[var(--text)]/30 hover:text-[var(--text)]/70"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <span className="text-[0.48rem] cs-mono uppercase tracking-[0.2em] text-[var(--text)]/30">
              Case Study
            </span>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-32 space-y-40">

          <section ref={setRef("overview")} id="overview" className="fade-up space-y-20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                  Capstone Project · October 2025
                </span>
                <div className="h-px flex-1 bg-[var(--text)]/8" />
                <span className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                  STI College SJDM
                </span>
              </div>

              <h1 className="cs-serif text-5xl sm:text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight">
                Groove
                <br />
                <span className="text-[var(--text)]/30 italic">Hub</span>
              </h1>

              <p className="text-lg sm:text-xl font-light prose-text max-w-2xl leading-relaxed">
                San Jose Del Monte, Bulacan's Web-Based Performing Arts Hub with Smart Chat Support and Studio Locator — a full-stack platform unifying artists, coaches, and clients into one accessible digital ecosystem.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { label: "My Role", value: "Lead Developer & UI Designer" },
                { label: "Team Size", value: "4 Members" },
                { label: "Duration", value: "2024 – 2025" },
                { label: "Deployment", value: "Hostinger (Live)" },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl border border-[var(--text)]/8 bg-[var(--text)]/[0.02] space-y-2">
                  <p className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-[var(--text)]/30">{item.label}</p>
                  <p className="text-sm font-semibold">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--text)]/10 aspect-video sm:aspect-[21/9]">
              <Image
                src="/Image/Groove.png"
                alt="Groove Platform Hero"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-8 right-8">
                <div className="flex flex-wrap gap-2">
                  {STACK.map((s) => (
                    <span
                      key={s.label}
                      className="flex items-center gap-1.5 text-[9px] sm:text-[10px] px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white/80 cs-mono uppercase tracking-tight"
                    >
                      <span className="text-sm">{s.icon}</span>
                      {s.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-6">
                <h2 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                  Project Overview
                </h2>
                <p className="text-2xl sm:text-3xl cs-serif font-light leading-snug">
                  A centralized digital hub built to solve real fragmentation in the performing arts community of San Jose Del Monte, Bulacan.
                </p>
                <p className="prose-text">
                  Groove addresses the core challenges local performing artists face daily — difficulty finding qualified coaches, delays in communication, no accessible studio locator, and the absence of a platform to showcase their work. The system integrates role-based workflows for three distinct user types: Super Admin, Performing Artist, and Client, each with a tailored set of features that streamline discovery, booking, communication, and collaboration.
                </p>
                <p className="prose-text">
                  Built using Laravel, MySQL, Tailwind CSS, and integrated with Google Maps API, Groove was deployed on Hostinger and evaluated against ISO/IEC 25010:2014 software quality standards covering functionality, reliability, usability, and performance efficiency.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                  Team
                </h2>
                {[
                  { name: "John Renz C. Bandianon", role: "Lead Developer & UI Designer" },
                  { name: "Charles John L. Carbonel", role: "Project Manager" },
                  { name: "Melaiza B. Fernandez", role: "System Analyst" },
                  { name: "Adrian Martin D. Salaysay", role: "Quality Assurance" },
                ].map((m) => (
                  <div key={m.name} className="flex items-center gap-3 py-3 border-b border-[var(--text)]/8">
                    <div className="w-8 h-8 rounded-full border border-[var(--text)]/20 flex items-center justify-center text-[10px] cs-mono font-bold">
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-xs font-semibold">{m.name}</p>
                      <p className="text-[0.45rem] cs-mono uppercase tracking-[0.2em] text-[var(--text)]/40">{m.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={setRef("problem")} id="problem" className="space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-[0.42rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">02</span>
              <h2 className="text-3xl sm:text-4xl cs-serif font-light">Problem Statement</h2>
              <div className="flex-1 h-px bg-[var(--text)]/8" />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-[2rem] border border-[var(--text)]/10 space-y-5">
                <span className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-[var(--text)]/30">Context</span>
                <h3 className="text-xl font-semibold leading-snug">The Fragmented Landscape of Local Performing Arts</h3>
                <p className="prose-text text-sm">
                  In San Jose Del Monte, Bulacan, the performing arts community — comprising dancers, coaches, choreographers, and clients — had no unified digital platform. Discovery was done through referrals, communication was delayed, studio access was poorly documented, and artists had no consistent place to present their work.
                </p>
              </div>
              <div className="p-8 sm:p-10 rounded-[2rem] border border-[var(--text)]/10 space-y-5">
                <span className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-[var(--text)]/30">Solution</span>
                <h3 className="text-xl font-semibold leading-snug">A Unified Platform with Smart Features</h3>
                <p className="prose-text text-sm">
                  Groove was developed to consolidate every workflow into one platform — AI-powered Smart Chat Support for 24/7 communication, a radius-based Studio Locator using Google Maps, an Artist Directory with genre and budget filtering, a role-based Booking and Contract system, and a Community space for artist visibility and collaboration.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                Research Data — Survey of 152 Performing Artists, San Jose Del Monte, Bulacan
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SURVEY_STATS.map((stat, i) => (
                  <div
                    key={i}
                    className="stat-card p-6 rounded-2xl border border-[var(--text)]/8 bg-[var(--text)]/[0.02] hover:bg-[var(--text)]/[0.04] transition-colors space-y-3"
                  >
                    <p className="stat-value text-4xl sm:text-5xl cs-serif font-light">{stat.value}</p>
                    <p className="text-xs font-medium leading-relaxed">{stat.label}</p>
                    <p className="text-[0.42rem] cs-mono uppercase tracking-[0.2em] text-[var(--text)]/30">{stat.n} respondents</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                System Objectives
              </h3>
              <div className="space-y-3">
                {[
                  "Design and develop an efficient, user-friendly platform for managing coaching activities and scheduling.",
                  "Implement classification and filtering options for clients to find artists by genre, budget, and location.",
                  "Create a community space for both emerging and established artists to showcase their talents.",
                  "Build an AI chatbot-powered Smart Chat Support system for 24/7 client-artist communication assistance.",
                  "Integrate a Studio Locator feature with Google Maps API and a map radius tool for finding nearby studios.",
                ].map((obj, i) => (
                  <div key={i} className="flex items-start gap-5 py-4 border-b border-[var(--text)]/6">
                    <span className="text-[0.4rem] cs-mono mt-1 text-[var(--text)]/30 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm font-medium leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={setRef("process")} id="process" className="space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-[0.42rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">03</span>
              <h2 className="text-3xl sm:text-4xl cs-serif font-light">Process & Methodology</h2>
              <div className="flex-1 h-px bg-[var(--text)]/8" />
            </div>

            <div className="p-8 rounded-2xl border border-[var(--text)]/8 bg-[var(--text)]/[0.02]">
              <div className="flex items-start gap-5">
                <div className="shrink-0 mt-1">
                  <span className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-[var(--text)]/30 block mb-1">Methodology</span>
                  <span className="text-lg font-bold">Agile SDLC</span>
                </div>
                <div className="h-12 w-px bg-[var(--text)]/10 mx-4 mt-2" />
                <p className="prose-text text-sm">
                  The Groove platform was developed using the Agile Software Development Lifecycle. This allowed the team to iterate on features continuously, respond to survey feedback during development, and conduct progressive testing across unit, alpha, and beta phases throughout the build cycle.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCESS_PHASES.map((phase) => (
                <div
                  key={phase.phase}
                  className="p-7 rounded-2xl border border-[var(--text)]/8 hover:border-[var(--text)]/20 hover:bg-[var(--text)]/[0.02] transition-all space-y-4"
                >
                  <span className="text-3xl cs-serif font-light text-[var(--text)]/20">{phase.phase}</span>
                  <h3 className="text-base font-bold">{phase.title}</h3>
                  <p className="prose-text text-sm">{phase.detail}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">Tech Stack</h3>
              <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3">
                {STACK.map((s) => (
                  <div
                    key={s.label}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border border-[var(--text)]/8 hover:border-[var(--text)]/20 hover:bg-[var(--text)]/[0.03] transition-all"
                  >
                    <span className="text-2xl">{s.icon}</span>
                    <span className="text-[0.38rem] cs-mono uppercase tracking-[0.15em] text-center text-[var(--text)]/50">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={setRef("system")} id="system" className="space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-[0.42rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">04</span>
              <h2 className="text-3xl sm:text-4xl cs-serif font-light">System Architecture</h2>
              <div className="flex-1 h-px bg-[var(--text)]/8" />
            </div>

            <div className="space-y-6">
              <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                Role-Based Module Breakdown
              </h3>
              <div className="flex gap-2 flex-wrap">
                {MODULES.map((m, i) => (
                  <button
                    key={m.role}
                    onClick={() => setActiveRole(i)}
                    className={`px-5 py-2.5 rounded-xl border text-[0.48rem] cs-mono uppercase tracking-[0.2em] transition-all ${
                      activeRole === i
                        ? "border-[var(--text)]/30 bg-[var(--text)]/10 text-[var(--text)]"
                        : "border-transparent text-[var(--text)]/30 hover:text-[var(--text)]/60"
                    }`}
                  >
                    {m.role}
                  </button>
                ))}
              </div>
              <div
                className="p-8 rounded-2xl border border-[var(--text)]/10"
                style={{ borderLeftColor: MODULES[activeRole].color, borderLeftWidth: 3 }}
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  {MODULES[activeRole].features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 py-2">
                      <span className="text-[0.38rem] cs-mono mt-1.5 text-[var(--text)]/25 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed">{feat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                System Screens — {SYSTEM_SCREENS.length} Documented Views
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SYSTEM_SCREENS.map((screen) => (
                  <div
                    key={screen.id}
                    className="screen-card group rounded-2xl border border-[var(--text)]/8 overflow-hidden hover:border-[var(--text)]/20 transition-colors cursor-zoom-in"
                    onClick={() => setModalImage(screen.image)}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-[var(--text)]/5">
                      <Image src={screen.image} alt={screen.title} fill className="object-cover" />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-white/80 border border-white/30 px-4 py-2 rounded-full">
                          View Full
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold">{screen.title}</h4>
                        <span className={`text-[0.38rem] cs-mono uppercase tracking-[0.15em] px-2 py-1 rounded-full ${ROLE_COLORS[screen.role] || "bg-white/10 text-white/60"}`}>
                          {screen.role}
                        </span>
                      </div>
                      <p className="text-[0.52rem] cs-mono text-[var(--text)]/40 leading-relaxed">{screen.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section ref={setRef("results")} id="results" className="space-y-16">
            <div className="flex items-center gap-6">
              <span className="text-[0.42rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">05</span>
              <h2 className="text-3xl sm:text-4xl cs-serif font-light">Results & Outcomes</h2>
              <div className="flex-1 h-px bg-[var(--text)]/8" />
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { value: "ISO/IEC 25010:2014", label: "Quality standard met — functionality, reliability, usability, performance efficiency" },
                { value: "3 Phases", label: "Unit, Alpha, and Beta testing conducted with actual performing artists, coaches, and choreographers" },
                { value: "152 Respondents", label: "Survey-driven development with real user data informing every system requirement" },
              ].map((item, i) => (
                <div key={i} className="p-7 rounded-2xl border border-[var(--text)]/10 bg-[var(--text)]/[0.02] space-y-3">
                  <p className="text-2xl sm:text-3xl cs-serif font-light">{item.value}</p>
                  <p className="text-sm prose-text leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="p-8 sm:p-10 rounded-[2rem] border border-[var(--text)]/10 space-y-5">
                <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">Implementation Results</h3>
                <p className="prose-text text-sm">
                  The Groove platform was successfully deployed on Hostinger. All core features — Smart Chat Support, Studio Locator, Booking System, Contract Agreement, Artist Directory, Community, and Admin Dashboard — functioned as intended after debugging and final testing. Stable database connectivity and responsive UI were confirmed across different devices.
                </p>
                <p className="prose-text text-sm">
                  Feedback gathered from beta testing with actual performers, coaches, and choreographers was incorporated into final refinements. Minor usability adjustments were implemented based on user insights to improve overall platform experience before official deployment.
                </p>
              </div>
              <div className="p-8 sm:p-10 rounded-[2rem] border border-[var(--text)]/10 space-y-5">
                <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">Project Conclusion</h3>
                <p className="prose-text text-sm">
                  Groove successfully connects performers, coaches, and choreographers through a user-friendly, web-based platform. The system makes inquiry communication easier, helps clients locate coaches and studios more efficiently, and creates a space for the performing arts community of San Jose Del Monte, Bulacan to grow and collaborate.
                </p>
                <p className="prose-text text-sm">
                  The system met its objectives of delivering an organized, accessible, and reliable online platform, evaluated against ISO/IEC 25010:2014 standards. It stands as a digital infrastructure that strengthens local performing arts and can be extended to other locations in future iterations.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-[0.45rem] cs-mono uppercase tracking-[0.4em] text-[var(--text)]/30">
                Known Limitations
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "No Payment Processing", detail: "All payments are handled externally. The platform does not support in-app transactions." },
                  { title: "Smart Chat Scope", detail: "AI chat support is limited to artist-provided data. It cannot respond to personal opinions or off-topic queries." },
                  { title: "No Video Conferencing", detail: "The system does not include a built-in video conferencing feature for remote sessions." },
                ].map((lim, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-[var(--text)]/8 space-y-2">
                    <p className="text-sm font-bold">{lim.title}</p>
                    <p className="text-xs prose-text leading-relaxed">{lim.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://github.com/johnrenz-bot/groove"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-[var(--text)]/20 hover:bg-[var(--text)]/5 transition text-sm font-bold cs-mono uppercase tracking-widest"
              >
                <FaGithub /> View Repository
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-transparent text-[var(--text)]/40 hover:text-[var(--text)]/70 transition text-[0.5rem] cs-mono uppercase tracking-widest"
              >
                <FaArrowLeft className="text-[10px]" /> Back to Portfolio
              </Link>
            </div>
          </section>

        </div>

        <footer className="border-t border-[var(--text)]/8 py-10">
          <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-[var(--text)]/25">
              Groove · Capstone Project · STI College San Jose Del Monte · October 2025
            </p>
            <p className="text-[0.42rem] cs-mono uppercase tracking-[0.3em] text-[var(--text)]/25">
              John Renz C. Bandianon · Lead Developer & UI Designer
            </p>
          </div>
        </footer>

      </main>

      {modalImage && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl cursor-zoom-out"
          onClick={() => setModalImage(null)}
        >
          <div className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src={modalImage}
              alt="Screen Preview"
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-[0.45rem] cs-mono uppercase tracking-[0.3em] border border-white/15 px-5 py-2.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}