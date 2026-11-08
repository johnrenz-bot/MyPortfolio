"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Check,
  Copy,
  Download,
  Home,
  Mail,
  Menu,
  Moon,
  Route,
  Sparkles,
  Sun,
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
import { useCvModal } from "@/components/portfolio/CvModalProvider";
import ThemeSwitch from "./ThemeSwitch";

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
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

const DOCK_ITEMS = ["Home", "Work", "About", "Contact"];

export default function FloatingNav() {
  const pathname = usePathname();
  const cvModal = useCvModal();
  const cvOpen = cvModal.isOpen;
  const [previewOpen, setPreviewOpen] = useState(false);
  useEffect(() => {
    const check = () => setPreviewOpen(!!document.querySelector('[role="dialog"][aria-modal="true"]'));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.body, { childList: true, subtree: true });
    return () => obs.disconnect();
  }, []);
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const copyEmail = async () => {
    const email = PORTFOLIO_META.email;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        throw new Error("no");
      }
    } catch {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); } catch {}
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const closePanel = () => setOpen(false);

  // Close on outside click (ignore menu button), Escape, resize to >=1024
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (panelRef.current && panelRef.current.contains(target)) return;
      if (menuRef.current && menuRef.current.contains(target)) return;
      setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Focus management
  useEffect(() => {
    if (open) {
      const panel = panelRef.current;
      if (panel) {
        const focusables = panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length) (focusables[0] as HTMLElement).focus();
      }
    } else {
      if (menuRef.current) menuRef.current.focus();
    }
  }, [open]);

  // Close panel on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleCv = () => {
    setOpen(false);
    // close panel first, then open modal
    setTimeout(() => cvModal.open(), 0);
  };

  const dockItems = DOCK_ITEMS.map((label) => PORTFOLIO_NAV.find((n) => n.label === label)).filter(Boolean);

  return (
    <>
      {/* Floating dock */}
      <nav
        aria-label="Primary mobile"
        aria-hidden={cvOpen || previewOpen}
        inert={cvOpen || previewOpen ? true : undefined}
        className={`lg:hidden fixed left-1/2 z-40 -translate-x-1/2 ${cvOpen || previewOpen ? "pointer-events-none opacity-0" : ""}`}
        style={{ bottom: "max(16px, env(safe-area-inset-bottom))" }}
      >
        <div className="floating-dock flex items-center gap-1 rounded-full border border-line bg-surface/80 px-2 py-1.5 shadow-lg backdrop-blur-xl">
          {dockItems.map((item) => {
            if (!item) return null;
            const Icon = ICONS[item.label] ?? Home;
            const active = isActiveRoute(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                  active
                    ? "bg-accent text-accent-contrast"
                    : "text-muted hover:bg-hover hover:text-ink"
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={active ? 2 : 1.75} />
              </Link>
            );
          })}
          <button
            ref={menuRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="floating-menu-panel"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
              open ? "bg-accent text-accent-contrast" : "text-muted hover:bg-hover hover:text-ink"
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Floating menu panel */}
      <AnimatePresence>
        {open && !cvOpen && !previewOpen ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="lg:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
              onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
              aria-hidden="true"
            />
            <motion.div
              id="floating-menu-panel"
              data-lenis-prevent
              ref={panelRef}
              role="dialog"
              aria-label="Navigation menu"
              onKeyDown={(e) => { if (e.key === "Escape") setOpen(false); }}
              tabIndex={-1}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden fixed left-1/2 z-50 -translate-x-1/2 overflow-y-auto no-scrollbar rounded-2xl border border-line bg-surface/95 shadow-2xl backdrop-blur-xl"
              style={{
                bottom: "calc(max(16px, env(safe-area-inset-bottom)) + 64px)",
                width: "min(92vw, 360px)",
                maxHeight: "calc(100dvh - 120px)",
              }}
            >
              <div className="p-4 sm:p-5">
                {/* Contact pill */}
                <Link
                  href="/contact"
                  className="mb-3 flex h-10 items-center justify-center gap-2 rounded-full border border-line bg-surface text-[14px] font-medium text-ink transition-colors hover:bg-hover"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </Link>

                {/* Nav items (grouped) */}
                <div className="flex flex-col gap-3">
                  {[
                    { label: "Portfolio", items: ["Home", "Work", "About"] },
                    { label: "Background", items: ["Experience", "Stack", "Journey", "Resources"] },
                    { label: "Connect", items: ["Community", "Network", "Contact"] },
                  ].map((group) => (
                    <div key={group.label} className="flex flex-col gap-1">
                      <p className="px-2 text-[12px] font-medium text-muted">{group.label}</p>
                      <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
                        {group.items.map((label) => {
                          const item = PORTFOLIO_NAV.find((n) => n.label === label)!;
                          const Icon = ICONS[label] ?? Home;
                          const active = isActiveRoute(pathname, item.href);
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`flex items-center gap-2.5 rounded-[10px] px-2.5 py-2 transition-colors ${
                                active
                                  ? "bg-hover text-ink"
                                  : "text-muted hover:bg-hover hover:text-ink"
                              }`}
                            >
                              <Icon className={`h-[18px] w-[18px] shrink-0 ${active ? "text-ink" : "text-muted"}`} strokeWidth={active ? 2 : 1.75} />
                              <span className="truncate text-[14px] font-medium">{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="my-3 h-px bg-line" aria-hidden="true" />

                <div className="my-3 h-px bg-line" aria-hidden="true" />

                {/* Status line */}
                <div className="mb-2 flex items-center gap-2 px-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-[12px] font-normal text-muted">
                    Open to opportunities
                  </span>
                </div>

                {/* Footer icon row */}
                <div className="flex items-center gap-1.5">
                  <div className="flex h-9 w-9 items-center justify-center">
                    <ThemeSwitch compact />
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email"
                    title={copied ? "Copied" : "Copy email"}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </button>
                  <button
                    type="button"
                    onClick={handleCv}
                    aria-label="Request CV"
                    title="Request CV"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <a
                    href={PORTFOLIO_META.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink"
                  >
                    <FaGithub className="h-4 w-4" />
                  </a>
                  <a
                    href={PORTFOLIO_META.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-hover hover:text-ink"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                </div>

                {copied ? (
                  <p className="mt-1 text-[12px] text-muted" aria-live="polite">
                    Copied
                  </p>
                ) : null}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
