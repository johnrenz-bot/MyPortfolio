"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaPhp, FaGithub, FaFigma, FaStaylinked } from "react-icons/fa";
import { SiLaravel, SiMysql, SiTailwindcss, SiGooglemaps, SiGoogle, SiVercel } from "react-icons/si";
import Loader from "./loader";

type Item = { id: string; title: string; description: string; image: string };

const guest: Item[] = [
  { id: "g1", title: "Landing Page", description: "Public entry point of the Groove Performing Arts platform.", image: "/Image/Groove/g1.png" },
  { id: "g2", title: "Login Page", description: "Secure authentication for registered users.", image: "/Image/Groove/GR2.png" },
];

const admin: Item[] = [
  { id: "a1", title: "Admin Dashboard", description: "Centralized dashboard presenting system statistics, analytics, and daily activity logs.", image: "/Image/Groove/S1.png" },
  { id: "a2", title: "User Management", description: "Administrative control panel for managing choreographers and clients.", image: "/Image/Groove/S2.png" },
  { id: "a3", title: "System Monitoring", description: "Real-time monitoring of system health and user activity.", image: "/Image/Groove/S3.png" },
  { id: "a4", title: "Transaction Monitoring", description: "Oversight of appointments and agreements for platform safety.", image: "/Image/Groove/S4.png" },
  { id: "a5", title: "Ticket System", description: "Issue reporting and feedback resolution module.", image: "/Image/Groove/S5.png" },
];

const choreographer: Item[] = [
  { id: "c1", title: "Role Selection", description: "Users choose Choreographer or Client during registration.", image: "/Image/Groove/g2.png" },
  { id: "c2", title: "Artist Registration", description: "Structured registration capturing artist credentials and talents.", image: "/Image/Groove/g3.png" },
  { id: "c3", title: "Artist Home", description: "Primary landing dashboard after authentication.", image: "/Image/Groove/g5.png" },
  { id: "c4", title: "Artist Dashboard", description: "Manage bookings, portfolios, ratings, and client sessions.", image: "/Image/Groove/g6.png" },
  { id: "c5", title: "Profile Management", description: "Edit personal details, skills, and experience.", image: "/Image/Groove/g7.png" },
  { id: "c6", title: "Smart Chat Support", description: "AI-powered chatbot integrated using Google Gemini API.", image: "/Image/Groove/g8.png" },
  { id: "c7", title: "Artist Directory", description: "Talent discovery system for client visibility.", image: "/Image/Groove/g9.png" },
  { id: "c8", title: "Community", description: "Interaction space for performing artists.", image: "/Image/Groove/g10.png" },
  { id: "c9", title: "Scheduling", description: "Appointment management module.", image: "/Image/Groove/g11.png" },
  { id: "c10", title: "Contracts", description: "Digital service agreement workflow.", image: "/Image/Groove/g12.png" },
  { id: "c11", title: "Reviews & Ratings", description: "Client feedback monitoring system.", image: "/Image/Groove/g13.png" },
  { id: "c12", title: "Notifications", description: "Real-time alerts and updates.", image: "/Image/Groove/g14.png" },
];

const client: Item[] = [
  { id: "cl1", title: "Client Registration", description: "Account creation for clients.", image: "/Image/Groove/g15.png" },
  { id: "cl2", title: "Client Home", description: "Main dashboard after login.", image: "/Image/Groove/g16.png" },
  { id: "cl3", title: "Smart Chat Support", description: "AI-assisted inquiry handling.", image: "/Image/Groove/g17.png" },
  { id: "cl4", title: "Contract Agreement", description: "Formal agreement with choreographers.", image: "/Image/Groove/g18.png" },
  { id: "cl5", title: "Community", description: "Client community interaction space.", image: "/Image/Groove/g19.png" },
  { id: "cl6", title: "Studio Locator", description: "Google Maps API–powered radial studio search.", image: "/Image/Groove/g20.png" },
  { id: "cl7", title: "Artist Directory", description: "Search and filter choreographers.", image: "/Image/Groove/g21.png" },
  { id: "cl8", title: "Appointment Request", description: "Session booking system.", image: "/Image/Groove/g22.png" },
  { id: "cl9", title: "Reviews & Feedback", description: "Client-side feedback submission.", image: "/Image/Groove/g23.png" },
];

function Section({ title, items }: { title: string; items: Item[] }) {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <section className="space-y-16 relative">
      <h2 className="text-3xl font-semibold border-b border-[var(--border)] pb-4">{title}</h2>
      {items.map((item, i) => (
        <div key={item.id} className={`flex flex-col md:flex-row ${i % 2 ? "md:flex-row-reverse" : ""} gap-12 items-center`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover cursor-pointer hover:scale-105 transition"
            onClick={() => openModal(item.image)}
          />
          <div className="md:w-1/2 space-y-3">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-[var(--text)]/70 leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 cursor-pointer" onClick={closeModal}>
          <img src={modalImage} className="max-h-[90%] max-w-[90%] rounded-2xl shadow-xl object-contain" />
        </div>
      )}
    </section>
  );
}

function Overview() {
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-semibold">Groove: Web-Based Performing Arts Hub</h1>
      <p className="text-lg text-[var(--text)]/70 leading-relaxed">
        Groove is a full-stack web-based performing arts management system developed as a capstone project.
        The system centralizes interaction between choreographers, performing artists, and clients.
        It supports talent discovery, appointment scheduling, contracts, community engagement, and AI-assisted inquiries.
      </p>
      <p className="text-lg text-[var(--text)]/70 leading-relaxed">
        Role-based modules: Guest, Admin, Choreographer, Client. Each module is secured and functionally separated, ensuring scalability and clear access control.
      </p>
    </section>
  );
}

function TechStack() {
  const stack = [
    { label: "Laravel", icon: <SiLaravel /> },
    { label: "PHP", icon: <FaPhp /> },
    { label: "MySQL", icon: <SiMysql /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    { label: "GitHub", icon: <FaGithub /> },
    { label: "Figma", icon: <FaFigma /> },
    { label: "Google Gemini API", icon: <SiGoogle /> },
    { label: "Google Maps API", icon: <SiGooglemaps /> },
    { label: "Vercel (Frontend Demo)", icon: <SiVercel /> },
  ];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-semibold border-b border-[var(--border)] pb-4">Technology Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {stack.map(s => (
          <div key={s.label} className="border border-[var(--border)] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition rounded-2xl px-5 py-4 flex items-center gap-3 justify-center text-sm font-medium">
            <span className="text-xl">{s.icon}</span>
            {s.label}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Groove() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex justify-center">
      <div className="w-full max-w-6xl px-6 py-20 space-y-20">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
          <Link href="/" className="flex items-center gap-2 border border-[var(--border)] px-4 py-2 rounded-3xl hover:scale-105 transition">
            <FaArrowLeft /> Back
          </Link>
          <div className="flex flex-col items-start sm:items-end gap-2">
            <p className="font-semibold">John Renz Bandianon</p>
            <p className="text-sm text-[var(--text)]/60">Capstone System Developer · STI San Jose Del Monte Bulacan</p>
            <a
              href="https://groove-vert.vercel.app/#/Johnrenz"
              target="_blank"
              className="mt-1 inline-flex items-center gap-2 text-xs font-semibold px-4 py-1 rounded-full bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition"
            >
              <FaStaylinked /> Visit Frontend Demo
            </a>
          </div>
        </header>

        <Overview />
        <TechStack />
        <Section title="Guest Access" items={guest} />
        <Section title="Admin Module" items={admin} />
        <Section title="Choreographer Module" items={choreographer} />
        <Section title="Client Module" items={client} />
      </div>
    </main>
  );
}
