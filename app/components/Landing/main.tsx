"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface MainProps {
  mobile?: boolean;
}

export default function Main({ mobile }: MainProps) {
  const [theme, setTheme] = useState("light");
  const [copied, setCopied] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = systemDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.setAttribute("data-theme", initial);
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

  useEffect(() => {
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setShowModal(true);
    }
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("visited", "true");
  };

  const shadowClass =
    "shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_12px_30px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition";

  return (
    <main className="min-h-screen w-full flex flex-col px-4 sm:px-6 lg:px-12 bg-[var(--bg)] text-[var(--text)] transition-colors duration-300">
      <header className="h-16 sm:h-20 w-full flex items-center justify-between">
        <button
          onClick={toggleTheme}
          className="border border-[var(--border)] bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition px-4 py-1 rounded-3xl text-sm font-semibold hover:scale-105"
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <ul className="flex gap-6 sm:gap-10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-lg font-semibold hover:underline transition"
            >
              {social.label}
            </a>
          ))}
        </ul>
      </header>

      <section className="flex-1 flex justify-center items-center py-10">
        <div className="w-full max-w-5xl flex flex-col items-center gap-8">
          <div
            className={`h-36 w-36 rounded-full overflow-hidden border border-[var(--border)] ${shadowClass}`}
          >
            <img src="/Image/me.jpg" alt="Profile" className="h-full w-full object-cover" />
          </div>

          <div className={`px-8 py-3 rounded-3xl border-b border-[var(--border)] ${shadowClass}`}>
            <p className="text-2xl font-semibold text-center">{user.name}</p>
          </div>

          <p className="text-lg font-semibold text-center opacity-80">{user.role}</p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
            <button
              onClick={handleCopyLink}
              className={`w-48 border border-[var(--border)] px-6 py-2 rounded-3xl hover:font-semibold ${shadowClass}`}
            >
              {copied ? "Link Copied!" : "Copy Link"}
            </button>

            <Link
              href="/Resume"
              className={`w-48 border border-[var(--border)] px-6 py-2 bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition rounded-3xl text-center hover:font-semibold ${shadowClass}`}
            >
              Full Resume
            </Link>
          </div>

          <div className="w-full max-w-xs h-px bg-[var(--border)] opacity-20 my-2" />

          <div className="flex flex-col items-center gap-4">
            <span className="text-xs font-bold tracking-[0.2em] uppercase opacity-50">UI Portfolio Asset</span>
            <div className="flex gap-4">
              <a
                href="/Image/UiPortolio.png" 
                target="_blank"
                className={`border border-blue-500/50 px-5 py-2 rounded-3xl text-sm font-medium hover:bg-blue-500 hover:text-white transition-all ${shadowClass}`}
              >
                View Portfolio
              </a>
              <a
                href="/Image/UiPortolio.png"
                download="UiPortolio.png"
                className={`border border-[var(--border)] px-5 py-2 rounded-3xl text-sm font-medium hover:bg-[var(--text)] hover:text-[var(--bg)] transition-all ${shadowClass}`}
              >
                Download UI
              </a>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-[var(--bg)] text-[var(--text)] rounded-2xl p-6 max-w-md w-full shadow-lg flex flex-col gap-4">
            <h2 className="text-xl font-semibold text-center">Welcome!</h2>
            <div className="text-sm text-left space-y-2">
              <p>This website showcases my portfolio and skills. Here's what you can do:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>UI Portfolio:</strong> Quickly view or download my UI design showcase.</li>
                <li><strong>Dark/Light Mode:</strong> Toggle themes at the top left.</li>
                <li><strong>Resume:</strong> Access my full IT resume via the main button.</li>
              </ul>
            </div>
            <button
              onClick={closeModal}
              className="mt-2 self-center px-6 py-2 bg-blue-600 text-white rounded-3xl font-semibold hover:bg-blue-700 transition"
            >
              Okay
            </button>
          </div>
        </div>
      )}
    </main>
  );
}