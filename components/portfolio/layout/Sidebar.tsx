"use client";

import type { ComponentType } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  Briefcase,
  Check,
  Copy,
  Download,
  Home,
  Mail,
  PanelLeft,
  Route,
  Sparkles,
  User,
  Users,
  Globe,
  ArrowUpRight,
  Moon,
  Sun,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  PORTFOLIO_META,
  PORTFOLIO_NAV,
  isActiveRoute,
} from "@/constants/portfolio";
import { useTheme } from "@/app/components/theme/ThemeProvider";
import { useCvModal } from "@/components/portfolio/CvModalProvider";

const ICONS: Record<string, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Home,
  Work: Briefcase,
  About: User,
  Experience: Award,
  Stack: Sparkles,
  Journey: Route,
  Community: Users,
  Network: Globe,
  Contact: Mail,
  Resources: BookOpen,
};

const GROUPS: { label: string; items: string[] }[] = [
  { label: "Portfolio", items: ["Home", "Work", "About"] },
  { label: "Background", items: ["Experience", "Stack", "Journey", "Resources"] },
  { label: "Connect", items: ["Community", "Network"] },
];

function findNav(label: string) {
  return PORTFOLIO_NAV.find((n) => n.label === label)!;
}

type SidebarProps = {
  collapsed: boolean;
  onToggle: () => void;
};

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const cvModal = useCvModal();
  const { theme, toggleTheme } = useTheme();
  const [copied, setCopied] = useState(false);

  const isDark = theme === "dark";

  const copyEmail = async () => {
    const email = PORTFOLIO_META.email;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error("no clipboard");
      }
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-line-strong";

  // ---------- Collapsed (icon rail) ----------
  if (collapsed) {
    return (
      <>
        <aside
          data-lenis-prevent
          style={{ boxSizing: "border-box" }}
          className="sidebar-grain fixed left-3 top-3 z-40 hidden h-[calc(100dvh-24px)] w-16 flex-col items-center overflow-x-hidden overflow-y-auto rounded-3xl border border-line bg-surface py-4 no-scrollbar lg:flex"
        >
          <Link
            href="/"
            aria-label="John Renz Bandianon — Home"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-105 ${focusRing}`}
          >
            <Image
              src="/Image/Favicon/Favicon.png"
              alt="RIINZ logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              priority
            />
          </Link>

          <button
            type="button"
            onClick={onToggle}
            aria-label="Expand sidebar"
            title="Expand sidebar"
            aria-expanded={false}
            className={`mt-2 flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
          >
            <PanelLeft className="h-4 w-4" />
          </button>

          <div className="my-3 h-px w-8 bg-line" aria-hidden="true" />

          <nav aria-label="Primary" className="flex flex-1 flex-col items-center gap-1.5 overflow-y-auto no-scrollbar">
            {PORTFOLIO_NAV.map((item) => {
              const Icon = ICONS[item.label] ?? Home;
              const active = isActiveRoute(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  aria-label={item.label}
                  title={item.label}
                  className={`group relative inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-200 ${focusRing} ${
                    active
                      ? "bg-hover text-ink"
                      : "text-muted hover:bg-hover hover:text-ink"
                  }`}
                >
                  <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={active ? 2 : 1.75} />
                  <span className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[12px] font-medium text-ink opacity-0 shadow-card transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="my-3 h-px w-8 bg-line" aria-hidden="true" />

          <div className="flex flex-col items-center gap-1.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email"
              title={copied ? "Copied" : "Copy email"}
              className={`relative inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? (
                <span className="pointer-events-none absolute left-full z-50 ml-3 whitespace-nowrap rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[12px] font-medium text-ink shadow-card">
                  Copied
                </span>
              ) : null}
            </button>
            <button
              type="button"
              onClick={() => cvModal.open()}
              aria-label="Request CV"
              title="Request CV"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              <Download className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1 rounded-xl border border-line bg-surface p-1">
              <a
                href={PORTFOLIO_META.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_META.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
        </aside>
      </>
    );
  }

  // ---------- Expanded ----------
  return (
    <>
      <aside
        data-lenis-prevent
        style={{ boxSizing: "border-box" }}
        className="sidebar-grain fixed left-3 top-3 z-40 hidden h-[calc(100dvh-24px)] w-66 flex-col overflow-x-hidden overflow-y-auto rounded-3xl border border-line bg-surface py-5 no-scrollbar transition-[width,opacity] duration-200 ease-out lg:flex"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center gap-2 px-4 pb-3">
          <Link
            href="/"
            aria-label="John Renz Bandianon — Home"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 hover:scale-105 ${focusRing}`}
          >
            <Image
              src="/Image/Favicon/Favicon.png"
              alt="RIINZ logo"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
              priority
            />
          </Link>
          <div className="min-w-0 flex-1">
            <Link href="/" className="block truncate text-[17px] font-semibold leading-tight text-ink">
              John Renz
            </Link>
            <p className="mt-0.5 truncate text-[12px] font-normal text-muted">
              Portfolio 2026
            </p>
          </div>
          <button
            type="button"
            onClick={onToggle}
            aria-label="Collapse sidebar"
            title="Collapse sidebar"
            aria-expanded={true}
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
          >
            <PanelLeft className="h-4 w-4" />
          </button>
        </div>

        {/* Contact pill */}
        <div className="px-3 pb-3">
          <Link
            href="/contact"
            className={`flex h-11 items-center justify-center gap-2 rounded-full border border-line bg-surface text-[14px] font-medium text-ink transition-colors hover:bg-hover ${focusRing}`}
          >
            <Mail className="h-4 w-4" />
            Contact
          </Link>
        </div>

        {/* Navigation */}
        <nav aria-label="Primary" className="flex-1 overflow-y-auto no-scrollbar px-3">
          <div className="flex flex-col gap-6">
            {GROUPS.map((group) => (
              <div key={group.label} className="flex flex-col gap-1.5">
                <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-subtle">
                  {group.label}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {group.items.map((label) => {
                    const item = findNav(label);
                    const Icon = ICONS[label] ?? Home;
                    const active = isActiveRoute(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`group relative flex h-10 items-center gap-3 rounded-xl px-4 transition-colors duration-150 ${focusRing} ${
                            active
                              ? "bg-hover text-ink"
                              : "text-muted hover:bg-hover hover:text-ink"
                          }`}
                        >
                          <span className="flex w-5 shrink-0 items-center justify-center">
                            <Icon
                              className={`h-4.5 w-4.5 shrink-0 ${
                                active ? "text-ink" : "text-muted"
                              }`}
                              strokeWidth={active ? 2 : 1.75}
                            />
                          </span>
                          <span className={`truncate text-[14px] ${active ? "font-semibold" : "font-medium"}`}>
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="shrink-0 px-3 pt-2">
          {/* Status line */}
          <div className="mb-3 flex items-center gap-2 px-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[12px] font-normal text-muted">
              Open to opportunities
            </span>
          </div>

          {/* Dark mode row (full) */}
          <div className="hidden [@media(min-height:801px)]:flex items-center justify-between rounded-full border border-line bg-surface px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              {isDark ? <Moon className="h-4 w-4 text-muted" /> : <Sun className="h-4 w-4 text-muted" />}
              <span className="text-[14px] font-medium text-ink">Dark mode</span>
            </div>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className="relative inline-flex h-5 w-9 items-center rounded-full border border-line bg-surface-2 p-[2px] transition-colors"
            >
              <span
                className={`h-3.5 w-3.5 rounded-full bg-ink transition-transform duration-300 ${
                  isDark ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Compact footer (short heights) */}
          <div className="hidden [@media(max-height:800px)]:flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={copyEmail}
              aria-label="Copy email"
              title={copied ? "Copied" : "Copy email"}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => cvModal.open()}
              aria-label="Request CV"
              title="Request CV"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              <Download className="h-4 w-4" />
            </button>
            <a
              href={PORTFOLIO_META.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              title="GitHub"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href={PORTFOLIO_META.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>

          {/* Email block */}
          <div className="mt-2 rounded-2xl border border-line bg-surface-2 p-3">
            <p className="text-[11px] font-medium text-muted">
              Work &amp; collabs
            </p>
            <div className="mt-1 flex items-center gap-2">
              <p className="min-w-0 flex-1 truncate text-[13px] text-ink">
                {PORTFOLIO_META.email}
              </p>
              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email"
                title={copied ? "Copied" : "Copy email"}
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            {copied ? (
              <p className="mt-1 text-[12px] text-muted" aria-live="polite">
                Copied
              </p>
            ) : null}
          </div>

          {/* Request CV row */}
          <button
            type="button"
            onClick={() => cvModal.open()}
            aria-label="Request CV"
            className={`mt-2 flex h-11 w-full items-center justify-between rounded-full border border-line bg-surface px-4 text-[14px] font-medium text-ink transition-colors hover:bg-hover ${focusRing}`}
          >
            <span className="flex items-center gap-2.5">
              <Download className="h-4 w-4" />
              Request CV
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </button>

          {/* Bottom row */}
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[12px] text-muted">
              © 2026
            </span>
            <div className="flex items-center gap-2">
              <a
                href={PORTFOLIO_META.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={PORTFOLIO_META.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink ${focusRing}`}
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <span className="sr-only" aria-live="polite">{copied ? "Copied" : ""}</span>
        </div>
      </aside>
    </>
  );
}
