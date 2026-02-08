"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface MainProps {
  mobile?: boolean;
}

export default function Main({ mobile }: MainProps) {
  const [theme, setTheme] = useState("light");
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = saved || (systemDark ? "dark" : "light");
    
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    
    if (!localStorage.getItem("visited")) {
      setShowModal(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const user = {
    name: "John Renz Bandianon",
    role: "WEB DEVELOPER (FRONTEND DEVELOPER) / UI DESIGNER",
  };

  const socials = [
    { url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
    { url: "https://github.com/johnrenz-bot", label: "GitHub" },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("visited", "true");
  };

  const shadowClass = "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300";

  return (
    <main className="min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-12 bg-[var(--bg)] text-[var(--text)] transition-colors duration-500 overflow-x-hidden">
      
      <header className="h-16 sm:h-20 w-full flex items-center justify-between animate-in fade-in slide-in-from-top-4 duration-700">
        <button
          onClick={toggleTheme}
          className="border border-[var(--border)] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 px-5 py-1.5 rounded-full text-xs font-black tracking-widest uppercase hover:scale-105 transition-all"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>

        <ul className="flex gap-6 sm:gap-10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold tracking-widest uppercase hover:opacity-50 transition"
            >
              {social.label}
            </a>
          ))}
        </ul>
      </header>

      <section className="flex-1 flex justify-center items-center py-10 animate-in fade-in zoom-in-95 duration-1000">
        <div className="w-full max-w-5xl flex flex-col items-center gap-8">
          
          <div className="relative">
            <div className={`h-40 w-40 rounded-full overflow-hidden border-2 border-[var(--text)]/10 ${shadowClass}`}>
              <img src="/Image/me.jpg" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-green-500 text-white text-[10px] font-bold rounded-full shadow-lg whitespace-nowrap animate-pulse">
              ● AVAILABLE FOR Internship
            </div>
          </div>

          <div className="space-y-4 flex flex-col items-center">
            <div className={`px-10 py-4 rounded-[2rem] border border-[var(--border)] bg-[var(--text)]/5 backdrop-blur-sm ${shadowClass}`}>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tighter text-center">{user.name}</h1>
            </div>
            <p className="text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase opacity-40 text-center">
              {user.role}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <button
              onClick={handleCopyLink}
              className={`w-52 border border-[var(--border)] px-8 py-3 rounded-2xl font-bold text-sm bg-transparent hover:bg-[var(--text)]/5 ${shadowClass}`}
            >
              {copied ? "✓ Link Copied" : "🔗 Copy Link"}
            </button>

            <Link
              href="/Resume"
              className={`w-52 border border-[var(--border)] px-8 py-3 bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 rounded-2xl text-center font-bold text-sm ${shadowClass}`}
            >
              Full Resume
            </Link>
          </div>

          <div className="w-48 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent opacity-30 my-4" />

          <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-30 italic">UI Portfolio Assets</span>
            <div className="flex gap-4">
              <a
                href="/Image/UiPortolio.png" 
                target="_blank"
                className={`flex items-center gap-2 border border-blue-500/40 text-blue-500 px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all ${shadowClass}`}
              >
                👁 View
              </a>
              <a
                href="/Image/UiPortolio.png"
                download="UiPortolio.png"
                className={`flex items-center gap-2 border border-[var(--border)] px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all ${shadowClass}`}
              >
                ↓ Download
              </a>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[var(--bg)] text-[var(--text)] rounded-[2.5rem] p-8 max-w-md w-[90%] shadow-2xl flex flex-col gap-6 border border-white/10">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-black tracking-tighter">Welcome!</h2>
              <p className="text-xs uppercase tracking-widest opacity-40 font-bold">Portfolio Guide</p>
            </div>
            
            <div className="text-xs sm:text-sm space-y-4 opacity-80">
              <div className="flex gap-4 items-start">
                <span className="text-blue-500 font-bold">01</span>
                <p><strong>UI Portfolio:</strong> High-resolution design assets ready for view/download.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-500 font-bold">02</span>
                <p><strong>Adaptive UI:</strong> Supports system-level dark and light preferences.</p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-blue-500 font-bold">03</span>
                <p><strong>Full Resume:</strong> Comprehensive background and technical stack details.</p>
              </div>
            </div>

            <button
              onClick={closeModal}
              className="mt-4 w-full py-4 bg-blue-600 text-white rounded-2xl font-black tracking-widest uppercase text-xs hover:bg-blue-700 shadow-lg shadow-blue-500/20 transition-all active:scale-95"
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}
    </main>
  );
}