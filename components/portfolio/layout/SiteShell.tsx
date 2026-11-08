"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import {
  PORTFOLIO_META,
  isPortfolioRoute,
} from "@/constants/portfolio";
import Sidebar from "./Sidebar";
import FloatingNav from "./FloatingNav";

function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-60" />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line pt-8 pb-4">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <p className="text-[14px] font-semibold text-ink">
            {PORTFOLIO_META.name}
          </p>
          <p className="text-[14px] text-muted">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/Resume"
            className="group inline-flex items-center gap-1.5 text-[14px] text-muted transition-colors hover:text-ink"
          >
            Resume
            <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <span className="h-3 w-px bg-line" aria-hidden="true" />
          <a
            href={PORTFOLIO_META.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={PORTFOLIO_META.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-ink"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

const COMMUNITY_ROUTES = ["/devcon", "/gdg", "/gallery"];

function isCommunityRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  const clean = pathname.replace(/\/+$/, "") || "/";
  return COMMUNITY_ROUTES.some((route) => clean.toLowerCase() === route);
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMainRoute = isPortfolioRoute(pathname);
  const isCommunity = isCommunityRoute(pathname);
  const showShell = isMainRoute || isCommunity;
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("rznz_sidebar_collapsed") === "true") setCollapsed(true);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("rznz_sidebar_collapsed", String(collapsed));
    } catch {}
  }, [collapsed]);

  if (!showShell) {
    return <>{children}</>;
  }

  return (
    <div className="relative min-h-screen bg-bg text-ink">
      <AmbientBackground />
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed((v) => !v)} />
      <FloatingNav />

      <div className={`relative z-10 transition-[padding] duration-300 ease-out ${collapsed ? "lg:pl-[104px]" : "lg:pl-[288px]"} pb-[calc(96px+env(safe-area-inset-bottom))] lg:pb-0`}>
        <main className="mx-auto w-full max-w-[960px] px-5 pt-16 pb-16 sm:px-6 sm:pt-24 lg:px-8">
          {children}
          {isCommunity ? null : <SiteFooter />}
        </main>
      </div>
    </div>
  );
}