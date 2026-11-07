"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { OrgTransitionOverlay } from "./OrgTransitionOverlay";
import {
  findOrganization,
  normalizeRoute,
  type OrganizationTransition,
} from "./organizations";

/** Time the branded reveal is allowed to play before the route changes. */
const REVEAL_MS = 1100;
/** Reduced-motion visitors skip the cinematic wait. */
const REDUCED_REVEAL_MS = 220;
/** Beat after the destination mounts before the overlay fades away. */
const EXIT_HOLD_MS = 260;
/** Safety net so a failed/slow navigation can never trap the screen. */
const FALLBACK_MS = 3000;

type OrgTransitionContextValue = {
  /** Trigger the branded transition for a registered route (or entry). */
  navigateWithBrand: (routeOrOrganization: string | OrganizationTransition) => void;
};

const OrgTransitionContext = createContext<OrgTransitionContextValue | null>(null);

export function useOrgTransition() {
  const context = useContext(OrgTransitionContext);
  if (!context) {
    throw new Error("useOrgTransition must be used inside OrgTransitionProvider");
  }
  return context;
}

export function OrgTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [organization, setOrganization] = useState<OrganizationTransition | null>(
    null,
  );

  const activeRef = useRef(false);
  const pathnameRef = useRef(pathname);
  const timersRef = useRef<number[]>([]);
  const warmedRoutesRef = useRef(new Set<string>());

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  }, []);

  const addTimer = useCallback((callback: () => void, delay: number) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
    return timer;
  }, []);

  const close = useCallback(() => {
    clearTimers();
    activeRef.current = false;
    setOrganization(null);
  }, [clearTimers]);

  const navigateWithBrand = useCallback(
    (routeOrOrganization: string | OrganizationTransition) => {
      const target =
        typeof routeOrOrganization === "string"
          ? findOrganization(routeOrOrganization)
          : routeOrOrganization;

      if (!target || activeRef.current) return;

      // No welcome screen when the visitor is already on the destination.
      if (normalizeRoute(pathnameRef.current) === target.route) {
        router.push(target.route);
        return;
      }

      activeRef.current = true;
      setOrganization(target);
      router.prefetch(target.route);

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const revealMs = reduceMotion ? REDUCED_REVEAL_MS : REVEAL_MS;

      addTimer(() => router.push(target.route), revealMs);
      addTimer(close, FALLBACK_MS);
    },
    [addTimer, close, router],
  );

  // Fade out only once the destination route has actually mounted.
  useEffect(() => {
    if (!organization) return;
    if (normalizeRoute(pathname) !== organization.route) return;

    clearTimers();
    addTimer(close, EXIT_HOLD_MS);
  }, [addTimer, clearTimers, close, organization, pathname]);

  // Never leave a pending navigation timer behind on full unmount.
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, [clearTimers]);

  // Intercept clicks on registered community links only. Everything else keeps
  // its normal navigation behavior, including back/forward history.
  useEffect(() => {
    const organizationForEvent = (target: EventTarget | null) => {
      const anchor = (target as HTMLElement | null)?.closest("a");
      if (!anchor) return null;
      if (anchor.hasAttribute("download")) return null;

      const anchorTarget = anchor.getAttribute("target");
      if (anchorTarget && anchorTarget !== "_self") return null;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#")) return null;

      return findOrganization(href);
    };

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = organizationForEvent(event.target);
      if (!target) return;

      event.preventDefault();
      navigateWithBrand(target);
    };

    // Warm the destination route on intent so the page swap stays instant.
    const warmRoute = (event: Event) => {
      const target = organizationForEvent(event.target);
      if (!target || warmedRoutesRef.current.has(target.route)) return;

      warmedRoutesRef.current.add(target.route);
      router.prefetch(target.route);
    };

    document.addEventListener("click", handleClick, true);
    document.addEventListener("pointerover", warmRoute, { passive: true });
    document.addEventListener("focusin", warmRoute);

    return () => {
      document.removeEventListener("click", handleClick, true);
      document.removeEventListener("pointerover", warmRoute);
      document.removeEventListener("focusin", warmRoute);
    };
  }, [navigateWithBrand, router]);

  const contextValue = useMemo(
    () => ({ navigateWithBrand }),
    [navigateWithBrand],
  );

  return (
    <OrgTransitionContext.Provider value={contextValue}>
      {children}
      <AnimatePresence>
        {organization && (
          <OrgTransitionOverlay
            key={organization.route}
            organization={organization}
          />
        )}
      </AnimatePresence>
    </OrgTransitionContext.Provider>
  );
}
