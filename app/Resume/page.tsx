"use client";

import Link from "next/link";
import { FaCaretLeft, FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="relative min-h-screen w-full bg-neutral-100 dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 flex justify-center py-10 px-4 transition-colors duration-300">
      {/* Top Action Bar */}
      <div className="fixed top-4 left-4 right-4 max-w-4xl mx-auto flex items-center justify-between z-30 pointer-events-none">
        <Link
          href="/"
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-black/10 dark:border-white/15 bg-white/90 dark:bg-neutral-900/90 px-4 py-2 text-xs font-semibold shadow-sm hover:bg-white dark:hover:bg-neutral-800 transition-all"
        >
          <FaCaretLeft className="text-sm" />
          <span>Back to Portfolio</span>
        </Link>

        <a
          href="/JohnRenz_Resume.pdf"
          download="JohnRenz_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 px-4 py-2 text-xs font-semibold shadow-sm hover:opacity-90 transition-opacity"
        >
          <FaDownload className="text-xs" />
          <span>Download PDF</span>
        </a>
      </div>

      {/* Main Resume Sheet */}
      <main className="w-full max-w-4xl bg-white dark:bg-neutral-900 shadow-md border border-black/10 dark:border-white/10 rounded-2xl p-8 sm:p-12 md:p-14 mt-12 space-y-8 text-neutral-800 dark:text-neutral-200">
        {/* Header */}
        <header className="text-center pb-6 border-b border-black/10 dark:border-white/10 space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-[0.2em] uppercase text-neutral-950 dark:text-white">
            JOHN RENZ C. BANDIANON
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
            Marilao, Bulacan, Philippines &nbsp;|&nbsp; +63 966 798 7702 &nbsp;|&nbsp;{" "}
            <a href="mailto:johnrenzbandianon9@gmail.com" className="underline hover:text-neutral-950 dark:hover:text-white">
              johnrenzbandianon9@gmail.com
            </a>
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono flex flex-wrap justify-center gap-3 pt-1">
            <a href="https://johnrenz.vercel.app" target="_blank" rel="noopener noreferrer" className="underline">
              johnrenz.vercel.app
            </a>
            <span>•</span>
            <a href="https://linkedin.com/in/john-renz-bandianon" target="_blank" rel="noopener noreferrer" className="underline">
              linkedin.com/in/john-renz-bandianon
            </a>
            <span>•</span>
            <a href="https://github.com/johnrenz-bot" target="_blank" rel="noopener noreferrer" className="underline">
              github.com/johnrenz-bot
            </a>
          </p>
        </header>

        {/* Summary */}
        <section className="space-y-2">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase border-b border-black/10 dark:border-white/10 pb-1 text-neutral-950 dark:text-white">
            SUMMARY
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            Recent BS Information Technology graduate with internship experience in full-stack web development, UI/UX design, and quality assurance. Skilled in building responsive web applications with Next.js, React, TypeScript, and Supabase, with a working foundation in relational databases and Agile team collaboration. Approaches new challenges with humility and a strong willingness to learn, with the goal of growing into a well-rounded Software Engineer.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="space-y-2.5">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase border-b border-black/10 dark:border-white/10 pb-1 text-neutral-950 dark:text-white">
            TECHNICAL SKILLS
          </h2>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <p>
              <strong className="text-neutral-950 dark:text-white">Languages:</strong> JavaScript (ES6+), TypeScript, PHP, Java, C#, Python
            </p>
            <p>
              <strong className="text-neutral-950 dark:text-white">Frameworks/Libraries:</strong> React, Next.js, Laravel (MVC), Node.js, Express.js, Vite.js, Tailwind CSS, Bootstrap
            </p>
            <p>
              <strong className="text-neutral-950 dark:text-white">Databases &amp; Cloud:</strong> MySQL, PostgreSQL, Prisma ORM, Supabase, XAMPP, Hostinger, REST API Integration
            </p>
            <p>
              <strong className="text-neutral-950 dark:text-white">Tools &amp; Platforms:</strong> Git, GitHub, Vercel, Figma, Notion, ClickUp, Trello, Jira, Monday.com
            </p>
            <p>
              <strong className="text-neutral-950 dark:text-white">Quality Assurance:</strong> Bug Checking, Design Review, Layout Inspection based on ISO/IEC 25010:2014
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase border-b border-black/10 dark:border-white/10 pb-1 text-neutral-950 dark:text-white">
            EXPERIENCE
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white">
                Advisor Support Associate (ASA) Intern / Full-Stack Developer (Volunteer)
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                June 2026 – July 2026
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
              Sun Life of Canada (Philippines), Inc. — Phoenix Palm Branch (Team Padua) &nbsp;•&nbsp; Quezon City, Philippines
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Built and deployed the Team Padua Client Management Portal using Next.js, React, TypeScript, Tailwind CSS, and Supabase (PostgreSQL), hosting the app on Vercel to centralize advisor workflows.
              </li>
              <li>
                Implemented user authentication and role-based access control for Admin, Advisor, and Intern accounts, integrating real-time data syncing with Supabase to keep records consistent across users.
              </li>
              <li>
                Developed core platform features — client servicing tracking, task management, attendance monitoring, automated birthday greetings, a prospect tracker (CPST), an analytics dashboard, and internal messaging — consolidating advisor tools into a single system.
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white">
                Website UI/UX Designer (Volunteer)
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                Mar 2026 – June 2026
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
              Alpha Centauri Garments (Apparel Brand) &nbsp;•&nbsp; Quezon Avenue, Philippines
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Designed responsive web interfaces in Figma and collaborated with front-end developers to implement designs as functional web pages.
              </li>
              <li>
                Maintained design specifications and component documentation in Notion and ClickUp, streamlining handoff and test coordination with the development team.
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white">
                QA &amp; UI Support Intern (Volunteer)
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                April 2026 – June 2026
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
              BoxHive Digital Solutions (Digital Tech Agency) &nbsp;•&nbsp; Quezon Avenue, Philippines
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Tested UI layouts on web application designs and reported usability issues to improve interface consistency.
              </li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="space-y-4">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase border-b border-black/10 dark:border-white/10 pb-1 text-neutral-950 dark:text-white">
            PROJECTS
          </h2>

          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white">
                Groove — Full-Stack Developer &amp; Capstone Lead
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                Mar 2025 – Nov 2025
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
              Academic Capstone Project, STI College San Jose del Monte
            </p>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Led a 3-person team to build Groove, a platform connecting artists, studio owners, and coaches, following Agile practices and ISO/IEC 25010:2014 quality guidelines.
              </li>
              <li>
                Implemented role-based access control, Google Maps API integration, and an AI chat assistant based on requirements gathered from 152 survey participants.
              </li>
              <li>
                Designed the database schema and system architecture, and tested the application to confirm stability before submission.
              </li>
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white">
                REEFER Clothing — E-Commerce UX Ecosystem
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                Mar 2026 – May 2026
              </span>
            </div>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
              <li>
                Designed wireframes, user flows, and a Figma component library for an e-commerce platform, ensuring consistent, responsive layouts across the site.
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="space-y-3">
          <h2 className="text-xs font-bold tracking-[0.25em] uppercase border-b border-black/10 dark:border-white/10 pb-1 text-neutral-950 dark:text-white">
            EDUCATION
          </h2>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
              <h3 className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white">
                Bachelor of Science in Information Technology (BSIT)
              </h3>
              <span className="font-mono text-xs text-neutral-500 dark:text-neutral-400">
                Aug 2022 – July 2026
              </span>
            </div>
            <p className="text-xs text-neutral-600 dark:text-neutral-400">
              STI College San Jose Del Monte, Bulacan, Philippines &nbsp;•&nbsp; General Weighted Average (GWA): 2.15
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              <strong>Relevant Coursework:</strong> Application Development &amp; Design, Systems Analysis, Relational Database Frameworks, Advanced Programming, OOP, Information Security
            </p>
            <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
              <strong>Certifications:</strong> Google UX Designer (May 2026) &nbsp;•&nbsp; Accenture Skills Training — Technology Fundamentals &amp; Digital Skills (Nov 2025)
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}