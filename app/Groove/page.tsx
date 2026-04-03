"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPhp, FaGithub, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiMysql, SiTailwindcss, SiGooglemaps, SiHostinger, SiXampp } from "react-icons/si";
import Loader from "./loader";

type Item = { id: string; title: string; description: string; image: string };

const DATA = {
  guest: [
    { id: "g1", title: "Landing Page", description: "Platform introduction showcasing features, artists, and system highlights.", image: "/Image/Groove/g1.png" },
    { id: "g2", title: "Authentication", description: "Secure login and registration with role-based access control.", image: "/Image/Groove/GR2.png" },
  ],

  admin: [
    { id: "a1", title: "Admin Dashboard", description: "Central analytics for monitoring users, activity, and system health.", image: "/Image/Groove/S1.png" },
    { id: "a2", title: "User & Role Management", description: "Manage users, assign roles, and control access levels.", image: "/Image/Groove/S2.png" },
    { id: "a3", title: "Verification System", description: "Approve artist credentials such as IDs and portfolios.", image: "/Image/Groove/S3.png" },
    { id: "a4", title: "Transaction Monitoring", description: "Track contracts and booking agreements with immutable records.", image: "/Image/Groove/S4.png" },
    { id: "a5", title: "Content Moderation", description: "Manage posts, reports, and enforce community standards.", image: "/Image/Groove/S5.png" },
    { id: "a6", title: "System Monitoring", description: "Track performance, logs, and system reliability.", image: "/Image/Groove/S3.png" },
    { id: "a7", title: "Ticket System", description: "Handle bug reports and user issues efficiently.", image: "/Image/Groove/S5.png" },
  ],

  choreographer: [
    { id: "c1", title: "Artist Registration", description: "Onboarding system capturing skills, portfolio, and credentials.", image: "/Image/Groove/g3.png" },
    { id: "c2", title: "Profile & Portfolio", description: "Manage personal profile, media uploads, and service details.", image: "/Image/Groove/g5.png" },
    { id: "c3", title: "Dashboard", description: "Overview of bookings, schedules, and client interactions.", image: "/Image/Groove/g6.png" },
    { id: "c4", title: "Scheduling System", description: "Calendar-based session and availability management.", image: "/Image/Groove/g11.png" },
    { id: "c5", title: "Messaging System", description: "Real-time chat with clients for coordination and inquiries.", image: "/Image/Groove/g8.png" },
    { id: "c6", title: "Contract Agreement", description: "Digital agreement system required before booking confirmation.", image: "/Image/Groove/g6.png" },
    { id: "c7", title: "Reviews & Ratings", description: "Track feedback and improve service quality.", image: "/Image/Groove/g5.png" },
  ],

  client: [
    { id: "cl1", title: "Client Registration", description: "Account creation with personalized preferences.", image: "/Image/Groove/g15.png" },
    { id: "cl2", title: "Artist Search & Filters", description: "Find artists by genre, price, rating, and location.", image: "/Image/Groove/g20.png" },
    { id: "cl3", title: "Studio Locator", description: "Locate nearby studios using Google Maps integration.", image: "/Image/Groove/g20.png" },
    { id: "cl4", title: "Booking System", description: "Request and manage appointments with artists.", image: "/Image/Groove/g22.png" },
    { id: "cl5", title: "Messaging", description: "Communicate directly with artists in real-time.", image: "/Image/Groove/g22.png" },
    { id: "cl6", title: "Contract Agreement", description: "Secure agreement required before confirming sessions.", image: "/Image/Groove/g22.png" },
    { id: "cl7", title: "Reviews & Feedback", description: "Provide ratings and feedback after sessions.", image: "/Image/Groove/g15.png" },
  ]
};

const STACK = [
  { label: "Laravel", icon: <SiLaravel /> },
  { label: "PHP", icon: <FaPhp /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "GitHub", icon: <FaGithub /> },
  { label: "XAMPP", icon: <SiXampp /> },
  { label: "Tailwind", icon: <SiTailwindcss /> },
  { label: "Hostinger", icon: <SiHostinger /> },
  { label: "Google Maps", icon: <SiGooglemaps /> },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="space-y-16">
      <div className="flex items-center gap-6">
        <h2 className="text-3xl font-black tracking-tight">{title}</h2>
        <div className="flex-1 h-px bg-[var(--text)]/10" />
      </div>

      <div className="space-y-20">
        {items.map((item, i) => (
          <div key={item.id} className={`grid lg:grid-cols-2 gap-12 items-center`}>
            
            <div className={`relative group ${i % 2 ? "lg:order-2" : ""}`}>
              <div className="absolute inset-0 scale-[0.96] blur-2xl opacity-20 group-hover:opacity-40 transition" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--text)]/10 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.15)] group-hover:scale-[1.02] transition duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover cursor-zoom-in transition duration-700 group-hover:scale-110"
                  onClick={() => setModalImage(item.image)}
                />
              </div>
            </div>

            <div className={`space-y-6 ${i % 2 ? "lg:order-1" : ""}`}>
              <span className="text-xs uppercase tracking-[0.3em] opacity-40 font-bold">
                Feature {i + 1}
              </span>
              <h3 className="text-3xl font-bold leading-tight tracking-tight">
                {item.title}
              </h3>
              <p className="text-lg opacity-70 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setModalImage(null)}
        >
          <img src={modalImage} className="max-w-full max-h-full rounded-xl" />
        </div>
      )}
    </section>
  );
}

export default function Groove() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen text-[var(--text)]">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-32">

        <header className="grid lg:grid-cols-2 gap-12 items-end">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-widest border px-5 py-2 rounded-full hover:opacity-70 transition">
              <FaArrowLeft /> Back
            </Link>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
                Groove Hub
              </h1>
              <p className="text-xl opacity-60 max-w-xl">
                A full-stack performing arts ecosystem designed to unify artists, clients, and studios into one seamless digital experience.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-[2rem] border border-[var(--text)]/10 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,0.1)] space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full flex items-center justify-center border">JR</div>
              <div>
                <p className="font-bold">John Renz Bandianon</p>
                <p className="text-xs uppercase opacity-40">Lead Developer</p>
              </div>
            </div>
            <a
              href="https://github.com/johnrenz-bot"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border hover:opacity-80 transition text-xs uppercase font-bold tracking-widest"
            >
              <FaGithub /> Repository
            </a>
          </div>
        </header>

        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xs uppercase tracking-[0.4em] opacity-30 font-bold">Case Study</h2>
            <p className="text-2xl font-semibold leading-relaxed">
              Groove addresses fragmentation in the performing arts industry by creating a centralized platform for discovery, booking, and collaboration.
            </p>
            <p className="opacity-70 leading-relaxed">
              The system integrates role-based workflows, real-time communication, and location-based services into one scalable architecture. Built using Laravel and MySQL, the platform ensures structured data handling, while Tailwind CSS delivers a responsive and modern UI layer.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xs uppercase tracking-[0.4em] opacity-30 font-bold">Stack</h2>
            <div className="grid grid-cols-2 gap-3">
              {STACK.map(s => (
                <div key={s.label} className="flex items-center gap-3 border p-3 rounded-xl backdrop-blur-xl hover:scale-105 transition">
                  <span className="text-xl">{s.icon}</span>
                  <span className="text-xs font-bold uppercase">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-16">
          <h2 className="text-3xl font-black">Problem → Solution</h2>
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 rounded-[2rem] border backdrop-blur-xl shadow">
              <h3 className="font-bold text-xl mb-4">Problem</h3>
              <p className="opacity-70 leading-relaxed">
                Artists and clients rely on scattered communication channels, manual booking, and limited visibility of opportunities, leading to inefficiencies and missed connections.
              </p>
            </div>
            <div className="p-8 rounded-[2rem] border backdrop-blur-xl shadow">
              <h3 className="font-bold text-xl mb-4">Solution</h3>
              <p className="opacity-70 leading-relaxed">
                Groove introduces a unified platform with smart chat support, booking systems, and studio discovery, enabling efficient collaboration and streamlined workflows.
              </p>
            </div>
          </div>
        </section>

        <Section title="Guest Experience" items={DATA.guest} />
        <Section title="Admin System" items={DATA.admin} />
        <Section title="Artist Experience" items={DATA.choreographer} />
        <Section title="Client Experience" items={DATA.client} />

        <footer className="text-center pt-20">
          <div className="h-px w-full bg-[var(--text)]/10 mb-10" />
          <p className="text-xs uppercase tracking-[0.4em] opacity-20">
            Capstone Project 2025
          </p>
        </footer>

      </div>
    </main>
  );
}