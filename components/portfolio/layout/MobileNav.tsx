"use client";

import { useEffect, useState } from "react";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Download,
  Home,
  Mail,
  Menu,
  Route,
  Sparkles,
  User,
  Users,
  Globe,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  PORTFOLIO_META,
  PORTFOLIO_NAV,
  isActiveRoute,
} from "@/constants/portfolio";
import ThemeSwitch from "./ThemeSwitch";
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

export default function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const cvModal = useCvModal();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const current = PORTFOLIO_NAV.find((item) => isActiveRoute(pathname, item.href));

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-sidebar/90 backdrop-blur-xl md:hidden">
        <div className="flex h-16 items-center justify-between gap-3 px-4 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Home">
            <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface">
              <Image
                src="/Image/Favicon/Favicon.png"
                alt="RIINZ logo"
                width={24}
                height={24}
                className="h-6 w-6 object-contain"
                priority
              />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-sm font-extrabold leading-tight tracking-[-0.03em] text-ink">
                John Renz
              </span>
              <span className="block truncate font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                {current?.label ?? "Portfolio"}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeSwitch compact />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open navigation"
              aria-expanded={open}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink transition-colors hover:bg-hover"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.2 }}
            />
            <motion.aside
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-y-0 left-0 z-50 flex w-[86vw] max-w-85 flex-col border-r border-line bg-sidebar md:hidden"
              initial={{ x: reduceMotion ? 0 : "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: reduceMotion ? 0 : "-100%" }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4">
                <div className="flex items-center gap-2.5">
                  <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-line bg-surface">
                    <Image
                      src="/Image/Favicon/Favicon.png"
                      alt="RIINZ logo"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                  </span>
                  <div>
                    <p className="font-display text-sm font-extrabold tracking-[-0.03em] text-ink">
                      Navigation
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                      Index · 01—10
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-ink transition-colors hover:bg-hover"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-5">
                <ul className="space-y-1">
                  {PORTFOLIO_NAV.map((item) => {
                    const Icon = ICONS[item.label] ?? Home;
                    const active = isActiveRoute(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          className={`flex items-center gap-3 rounded-xl px-3 py-3 transition-colors duration-200 ${
                            active
                              ? "bg-accent text-accent-contrast"
                              : "text-muted hover:bg-hover hover:text-ink"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5 shrink-0" strokeWidth={active ? 2 : 1.75} />
                          <span className="flex-1">
                            <span className={`block text-[13px] ${active ? "font-semibold" : "font-medium"}`}>
                              {item.label}
                            </span>
                            <span className={`mt-0.5 block text-[10px] ${active ? "opacity-65" : "text-subtle"}`}>
                              {item.hint}
                            </span>
                          </span>
                          <span className={`font-mono text-[9px] tabular-nums ${active ? "opacity-60" : "text-subtle"}`}>
                            {item.index}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="shrink-0 space-y-3 border-t border-line p-4">
                <ThemeSwitch />
                <button
                  type="button"
                  onClick={(e) => cvModal.open(e.currentTarget as HTMLElement)}
                  className="btn-primary w-full justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <Download className="h-3.5 w-3.5" />
                    Request CV
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={PORTFOLIO_META.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={PORTFOLIO_META.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:bg-hover hover:text-ink"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                  <span className="ml-auto font-mono text-[9px] uppercase tracking-[0.12em] text-subtle">
                    © 2026
                  </span>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
