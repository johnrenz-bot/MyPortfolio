export type PortfolioNavItem = {
  index: string;
  label: string;
  href: string;
  /** Short description used by the mobile drawer + hover previews. */
  hint: string;
};

/**
 * The ten primary routes of the portfolio.
 * `match` keeps active-state detection simple for case-sensitive legacy routes.
 */
export const PORTFOLIO_NAV: PortfolioNavItem[] = [
  { index: "01", label: "Home", href: "/", hint: "Introduction & selected work" },
  { index: "02", label: "Work", href: "/work", hint: "Projects, case studies & visuals" },
  { index: "03", label: "About", href: "/about", hint: "Profile, focus & approach" },
  { index: "04", label: "Experience", href: "/experience", hint: "Internships & professional work" },
  { index: "05", label: "Stack", href: "/stack", hint: "Technologies, tools & strengths" },
  { index: "06", label: "Journey", href: "/Journey", hint: "Chapters, milestones & growth" },
  { index: "07", label: "Community", href: "/community", hint: "Events, orgs & volunteering" },
  { index: "08", label: "Network", href: "/network", hint: "Profiles across the web" },
  { index: "09", label: "Contact", href: "/contact", hint: "Start a conversation" },
  { index: "10", label: "Resources", href: "/resources", hint: "Learning resources & references" },
];

export const PRIMARY_ROUTES = PORTFOLIO_NAV.map((item) => item.href);

export function isPortfolioRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  const clean = pathname.replace(/\/+$/, "") || "/";

  return PORTFOLIO_NAV.some((item) => {
    const href = item.href.replace(/\/+$/, "") || "/";
    return href === "/" ? clean === "/" : clean.toLowerCase() === href.toLowerCase();
  });
}

export function isActiveRoute(pathname: string | null, href: string): boolean {
  if (!pathname) return false;
  const clean = pathname.replace(/\/+$/, "") || "/";
  const target = href.replace(/\/+$/, "") || "/";
  return target === "/"
    ? clean === "/"
    : clean.toLowerCase() === target.toLowerCase();
}

export const PORTFOLIO_META = {
  name: "John Renz Bandianon",
  shortName: "RIINZ",
  role: "Full-Stack Developer & UI/UX Designer",
  location: "Marilao, Bulacan, Philippines",
  email: "johnrenzbandianon9@gmail.com",
  phone: "+63 966 798 7702",
  github: "https://github.com/johnrenz-bot",
  linkedin: "https://www.linkedin.com/in/john-renz-96a77728b/",
  cv: "/CV/John_Renz_Bandianon_CV.pdf",
  availability: "Open to opportunities",
} as const;
