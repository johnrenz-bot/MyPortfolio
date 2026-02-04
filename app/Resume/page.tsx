"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCaretLeft } from "react-icons/fa";

type Item = {
  id: string;
  title: string;
  description: string;
  url: string;
};

const webProjects: Item[] = [
  {
    id: "capstone-groove",
    title: "Groove (Capstone Project)",
    description: `A focused support system for performing artists in San Jose Del Monte, Bulacan. It supports finding coaches, smart chat responses, a studio locator, and community sharing. This project highlights frontend architecture, UI planning, and real-world problem solving.`,
    url: "https://groove-vert.vercel.app/#/Johnrenz"
  },
  {
    id: "1",
    title: "Weeknd Soundtrip",
    description: "A static music website dedicated to The Weeknd, showcasing tracks, playlists, and media content. Designed with a modern UI and responsive layout for all devices.",
    url: "https://weeknd-soundtrip.vercel.app/"
  },
  {
    id: "2",
    title: "DinoVerse",
    description: "A personal project exploring dinosaurs through interactive content such as species profiles, fun facts, habitats, quizzes, and timelines. This project demonstrates creative frontend design and user-friendly layouts.",
    url: "https://dinoverse-buce.vercel.app/"
  },
  {
    id: "3",
    title: "EduGuide",
    description: "An online platform that helps students explore academic strands and college courses. Focused on accessibility, guided decision-making, and intuitive navigation.",
    url: "https://edu-guide-three.vercel.app/"
  },
  {
    id: "4",
    title: "Kiyoto",
    description: "A modern e-commerce website for a matcha brand featuring product listings and smooth browsing experience with responsive design.",
    url: "https://kiyoto.vercel.app/"
  }
];

export default function Resume() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-r from-[#3b373a] via-[#232222] to-[#0f0f0f] text-white">
        <div className="flex flex-col items-center gap-2">
          <h1 className="black-ops-one-regular text-4xl sm:text-5xl tracking-widest text-gray-200 animate-wobble">
            JOHN RENZ
          </h1>
          <h2 className="black-ops-one-regular text-2xl sm:text-3xl tracking-[0.4em] text-gray-400 animate-wobble-slow">
            BANDIANON
          </h2>
          <p className="mt-3 text-[11px] uppercase tracking-[0.3em] text-white/60">
            loading resume
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-slate-100 text-slate-900 flex justify-center py-10 px-4">
      <Link
        href="/"
        className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm hover:bg-white hover:shadow-md transition"
      >
        <FaCaretLeft className="text-lg" />
        <span>Back</span>
      </Link>

      <main className="w-full max-w-4xl bg-white shadow-md rounded-xl px-10 py-10 md:px-14 md:py-12 mt-6">
        <header className="pb-4 mb-6 border-b border-slate-300 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-[0.3em] uppercase">
            JOHN RENZ C. BANDIANON
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-6 text-[13px]">
            <span>+63  966 798 7702</span>
            <a href="mailto:johnrenzbandianon9@gmail.com" className="underline">
              johnrenzbandianon9@gmail.com
            </a>
            <span>Grand Villas, Loma de Gato, Marilao, Bulacan</span>
          </div>
        </header>

        <section className="mb-6">
          <h2 className="text-xs font-bold tracking-[0.35em] uppercase border-b pb-1 mb-3">
            PROFILE SUMMARY
          </h2>
          <p className="text-[13px] leading-relaxed">
            I’m John Renz Bandianon, an IT student with a strong interest in frontend web development and UI/UX Designer. I enjoy creating clean, responsive, and user-friendly interfaces, focusing on both functionality and visual design to deliver a good user experience.          </p>
          <p className="text-[13px] leading-relaxed mt-5">
            I am currently strengthening my skills through academic projects such as my Capstone and individual builds, which help improve my problem-solving and development workflow. While my main focus is frontend development, I also have basic experience with backend concepts and am eager to learn more through hands-on experience as an IT intern.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-bold tracking-[0.35em] uppercase border-b pb-1 mb-3">
            EDUCATION
          </h2>

          <div className="space-y-3 text-[13px]">
            <div className="flex justify-between">
              <span className="font-semibold">STI College San Jose del Monte</span>
              <span className="text-xs">2022 – Present</span>
            </div>
            <p className="ml-4 list-item list-inside">
              Bachelor of Science in Information Technology
            </p>

            <div className="flex justify-between mt-3">
              <span className="font-semibold">Prenza National Senior High School</span>
              <span className="text-xs">2020 – 2022</span>
            </div>
            <p className="ml-4 list-item list-inside">
              ICT Vocational / Technical
            </p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-bold tracking-[0.35em] uppercase border-b pb-1 mb-3">
            PROJECTS
          </h2>

          <div className="space-y-4 text-[13px]">
            {webProjects.map(p => (
              <div key={p.id}>
                <p className="font-semibold">{p.title}</p>
                <a href={p.url} target="_blank" className="underline text-blue-700 text-xs">
                  {p.url}
                </a>
                <p className="mt-1 text-slate-800">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-xs font-bold tracking-[0.35em] uppercase border-b pb-1 mb-3 text-center">
            SKILLS
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-[13px]">
            <div className="space-y-1">
              <p><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, TypeScript, React, Next.js</p>
              <p><strong>Backend:</strong> Node.js, Express, PHP, Laravel, Java</p>
              <p><strong>Database:</strong> PostgreSQL, MySQL</p>
              <p><strong>Design:</strong> Figma, Canva, Adobe Creative Cloud, Photoshop, PowerPoint</p>
              <p><strong>Tools:</strong> GitHub, Prisma, VS Code</p>
            </div>

            <ul className="list-disc list-inside space-y-1">
              <li>Adaptability</li>
              <li>Team Collaboration</li>
              <li>Time Management</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xs font-bold tracking-[0.35em] uppercase border-b pb-1 mb-3 text-center">
            COURSES & CERTIFICATES
          </h2>

          <ul className="space-y-1 text-[13px]">
            <li className="flex justify-between">
              <span>Accenture Skills Training</span>
              <span className="text-xs">Nov 2025</span>
            </li>
            <li className="flex justify-between">
              <span>SAP Business One</span>
              <span className="text-xs">Mar 2024</span>
            </li>
            <li className="flex justify-between">
              <span>System Administrator & Maintenance</span>
              <span className="text-xs">Jun 2023</span>
            </li>
            <li className="flex justify-between">
              <span>Java Foundations</span>
              <span className="text-xs">Jun 2023</span>
            </li>
          </ul>
        </section>

        <footer className="pt-2 border-t text-[11px] text-right">
          <p className="italic">Applicant’s Signature</p>
          <p className="font-semibold">John Renz C. Bandianon</p>
        </footer>
      </main>
    </div>
  );
}