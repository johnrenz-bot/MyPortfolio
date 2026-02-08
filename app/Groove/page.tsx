"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPhp, FaGithub, FaFigma, FaStaylinked, FaGitAlt } from "react-icons/fa";
import { SiLaravel, SiMysql, SiTailwindcss, SiGooglemaps, SiGoogle, SiHostinger, SiXampp } from "react-icons/si";
import Loader from "./loader";

type Item = { id: string; title: string; description: string; image: string };

const DATA = {
  guest: [
    { id: "g1", title: "Landing Page", description: "Public entry point of the Groove Performing Arts platform.", image: "/Image/Groove/g1.png" },
    { id: "g2", title: "Login Page", description: "Secure authentication for registered users.", image: "/Image/Groove/GR2.png" },
  ],
  admin: [
    { id: "a1", title: "Admin Dashboard", description: "Centralized dashboard presenting system statistics, analytics, and daily activity logs.", image: "/Image/Groove/S1.png" },
    { id: "a2", title: "User Management", description: "Administrative control panel for managing choreographers and clients.", image: "/Image/Groove/S2.png" },
    { id: "a3", title: "System Monitoring", description: "Real-time monitoring of system health and user activity.", image: "/Image/Groove/S3.png" },
    { id: "a4", title: "Transaction Monitoring", description: "Oversight of appointments and agreements for platform safety.", image: "/Image/Groove/S4.png" },
    { id: "a5", title: "Ticket System", description: "Issue reporting and feedback resolution module.", image: "/Image/Groove/S5.png" },
  ],
  choreographer: [
    { id: "c1", title: "Role Selection", description: "Users choose Choreographer or Client during registration.", image: "/Image/Groove/g2.png" },
    { id: "c2", title: "Artist Registration", description: "Structured registration capturing artist credentials and talents.", image: "/Image/Groove/g3.png" },
    { id: "c3", title: "Artist Home", description: "Primary landing dashboard after authentication.", image: "/Image/Groove/g5.png" },
    { id: "c4", title: "Artist Dashboard", description: "Manage bookings, portfolios, ratings, and client sessions.", image: "/Image/Groove/g6.png" },
    { id: "c6", title: "Smart Chat Support", description: "AI-powered chatbot integrated using Google Gemini API.", image: "/Image/Grooke/g8.png" },
    { id: "c9", title: "Scheduling", description: "Appointment management module.", image: "/Image/Groove/g11.png" },
  ],
  client: [
    { id: "cl1", title: "Client Registration", description: "Account creation for clients.", image: "/Image/Groove/g15.png" },
    { id: "cl6", title: "Studio Locator", description: "Google Maps API–powered radial studio search.", image: "/Image/Groove/g20.png" },
    { id: "cl8", title: "Appointment Request", description: "Session booking system.", image: "/Image/Groove/g22.png" },
  ]
};

const STACK = [
  { label: "Laravel", icon: <SiLaravel className="text-[#FF2D20]" /> },
  { label: "PHP", icon: <FaPhp className="text-[#777BB4]" /> },
  { label: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
  { label: "Git", icon: <FaGitAlt className="text-[#F05032]" /> },
  { label: "GitHub", icon: <FaGithub className="text-[var(--text)]" /> },
  { label: "XAMPP", icon: <SiXampp className="text-[#FB7220]" /> },
  { label: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { label: "Hostinger", icon: <SiHostinger className="text-[#673DE6]" /> },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <section className="space-y-12">
      <div className="flex items-center gap-4">
        <h2 className="text-2xl font-black tracking-tight uppercase underline decoration-blue-500 decoration-4 underline-offset-8">
          {title}
        </h2>
        <div className="flex-1 h-px bg-[var(--text)] opacity-10" />
      </div>
      
      <div className="grid grid-cols-1 gap-16">
        {items.map((item, i) => (
          <div key={item.id} className={`flex flex-col lg:flex-row ${i % 2 ? "lg:flex-row-reverse" : ""} gap-10 items-center group`}>
            <div className="w-full lg:w-[60%] overflow-hidden rounded-[2rem] bg-[var(--text)]/5 border border-[var(--text)]/5 shadow-2xl transition-all duration-500 group-hover:shadow-blue-500/10">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover cursor-zoom-in transition-transform duration-700 group-hover:scale-105"
                onClick={() => setModalImage(item.image)}
              />
            </div>
            <div className="w-full lg:w-[40%] space-y-4">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">Module Feature {i + 1}</span>
              <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="text-base leading-relaxed opacity-70 font-medium">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-300" onClick={() => setModalImage(null)}>
          <img src={modalImage} className="max-h-full max-w-full rounded-xl shadow-2xl object-contain" />
        </div>
      )}
    </section>
  );
}

export default function Groove() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] selection:bg-blue-500 selection:text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20 space-y-32">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-1000">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase border border-[var(--text)]/10 px-5 py-2 rounded-full hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all">
              <FaArrowLeft /> Back to Project
            </Link>
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-6xl font-black tracking-tighter leading-none">Groove Hub.</h1>
              <p className="text-lg lg:text-xl font-medium opacity-60 max-w-xl">
                A full-stack performing arts ecosystem centralizing talent discovery and digital contract workflows.
              </p>
            </div>
          </div>

          <div className="bg-[var(--text)]/5 border border-[var(--text)]/5 p-6 rounded-[2rem] space-y-3 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">JR</div>
              <div>
                <p className="text-sm font-bold">John Renz Bandianon</p>
                <p className="text-[10px] font-bold opacity-40 uppercase tracking-widest">Lead Developer</p>
              </div>
            </div>
            <a
              href="https://github.com/johnrenz-bot"
              target="_blank"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--text)] text-[var(--bg)] text-xs font-black uppercase tracking-widest hover:opacity-90 transition-all active:scale-95"
            >
              <FaGithub size={14} /> Repository
            </a>
          </div>
        </header>

        

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xs font-black tracking-[0.4em] uppercase opacity-30">Overview</h2>
            <p className="text-xl font-medium leading-relaxed italic opacity-80">
              "Systematic version control was the backbone of this project's development lifecycle."
            </p>
            <p className="text-base opacity-60 leading-relaxed">
              This project utilized Git for meticulous version control and GitHub for remote repository management and collaboration. By maintaining a clean commit history and branch structure, I ensured code integrity throughout the development of the Laravel backend. The final production build is deployed on Hostinger, bridged through a structured CI/CD-ready workflow.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-xs font-black tracking-[0.4em] uppercase opacity-30">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-3">
              {STACK.map(s => (
                <div key={s.label} className="flex items-center gap-3 bg-[var(--text)]/5 p-3 rounded-xl border border-[var(--text)]/5 transition-all hover:bg-[var(--text)]/10">
                  <span className="text-xl opacity-80">{s.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-tight">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="space-y-40">
          <Section title="Guest Access" items={DATA.guest} />
          <Section title="Admin Console" items={DATA.admin} />
          <Section title="Artist Module" items={DATA.choreographer} />
          <Section title="Client Experience" items={DATA.client} />
        </div>

        <footer className="text-center pt-20 pb-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--text)] to-transparent opacity-10 mb-10" />
          <p className="text-[10px] font-black tracking-[0.5em] uppercase opacity-20">Capstone Project 2025</p>
        </footer>
      </div>
    </main>
  );
}