/**
 * Registry of dedicated community pages that get an organization-branded
 * welcome transition.
 *
 * Only routes that actually exist belong here. Each entry must use that
 * organization's own logo asset — never borrow another organization's mark.
 *
 * Note: STI currently has no dedicated community route, so it is intentionally
 * not registered here. If a dedicated STI page is added later, register it with
 * `/Image/CompanyLogo/STI.png` rather than reusing a DEVCON or GDG logo.
 */
export type OrganizationTransition = {
  /** Existing in-app route, normalized without a trailing slash. */
  route: `/${string}`;
  name: string;
  logo: string;
  logoAlt: string;
  subtitle?: string;
  /** Small label above the name (e.g. "Community"). */
  eyebrow: string;
};

export const ORGANIZATION_TRANSITIONS = [
  {
    route: "/devcon",
    name: "DEVCON Manila",
    logo: "/Image/Community/devcon17-logo.png",
    logoAlt: "DEVCON17 logo",
    subtitle: "Developer Community · Philippines",
    eyebrow: "Community",
  },
  {
    route: "/gdg",
    name: "Google Developer Groups",
    logo: "/Image/Community/gdg-logo.png",
    logoAlt: "Google Developer Groups logo",
    subtitle: "GDG Manila",
    eyebrow: "Community",
  },
] as const satisfies readonly OrganizationTransition[];

/**
 * Converts an anchor href into the same shape used by the registry.
 * Handles query strings, hashes, trailing slashes, and same-origin URLs.
 */
export function normalizeRoute(href: string): string {
  const withoutOrigin = href.replace(/^https?:\/\/[^/]+/i, "");
  const path = withoutOrigin.split(/[?#]/)[0] || "/";
  if (path.length > 1) return path.replace(/\/+$/, "");
  return path;
}

export function findOrganization(href: string): OrganizationTransition | null {
  const route = normalizeRoute(href);
  return (
    ORGANIZATION_TRANSITIONS.find((organization) => organization.route === route) ??
    null
  );
}
