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

      <section className="flex-1 flex justify-center items-center">
        <div className="w-full max-w-5xl flex flex-col items-center gap-10">
          <div
            className={`h-36 w-36 rounded-full overflow-hidden border border-[var(--border)] ${shadowClass}`}
          >
            <img src="/Image/me.jpg" alt="Profile" className="h-full w-full object-cover" />
          </div>

          <div className={`px-8 py-3 rounded-3xl border-b border-[var(--border)] ${shadowClass}`}>
            <p className="text-2xl font-semibold text-center">{user.name}</p>
          </div>

          <p className="text-lg font-semibold text-center">{user.role}</p>

          <div className="flex gap-6">
            <button
              onClick={handleCopyLink}
              className={`border border-[var(--border)] px-6 py-2 rounded-3xl hover:font-semibold ${shadowClass}`}
            >
              {copied ? "Link Copied!" : "Copy Link"}
            </button>

            <Link
              href="/Resume"
              className={`border border-[var(--border)] px-6 py-2 bg-[var(--text)] text-[var(--bg)] hover:bg-[var(--text)]/90 transition rounded-3xl hover:font-semibold ${shadowClass}`}
            >
              Resume
            </Link>
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
                <li><strong>Dark/Light Mode:</strong> Toggle between dark and light themes using the button on the top left.</li>
                <li><strong>Copy Link:</strong> Easily copy the page URL using the Copy Link button.</li>
                <li><strong>Resume:</strong> Click the Resume button to view/download my resume.</li>
                <li><strong>Social Links:</strong> Access my LinkedIn and GitHub profiles from the top right links.</li>
                <li><strong>Explore:</strong> Check other sections for projects, contact info, and more.</li>
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
