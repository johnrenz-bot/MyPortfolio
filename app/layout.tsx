import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import InitialLoaderProvider from "./components/loading/InitialLoaderProvider";
import { OrgTransitionProvider } from "./components/transitions/OrgTransitionProvider";
import { ThemeProvider } from "./components/theme/ThemeProvider";
import BackToTop from "./components/scroll/BackToTop";
import SiteShell from "@/components/portfolio/layout/SiteShell";
import CvModalProvider from "@/components/portfolio/CvModalProvider";
import SmoothScroll from "@/components/portfolio/layout/SmoothScroll";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const SITE_URL = "https://johnrenz.vercel.app";

const SITE_DESCRIPTION =
  "Portfolio of John Renz Bandianon, a software developer specializing in full-stack web development, UI/UX design, and quality assurance. Explore his projects, technical experience, and creative work.";

export const metadata: Metadata = {
  title: {
    default: "John Renz Bandianon | Software Developer",
    template: "%s | John Renz Bandianon",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "John Renz Bandianon",
    "Web Developer",
    "Full-Stack Developer",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Laravel",
    "Supabase",
    "Portfolio",
    "Philippines",
  ],
  authors: [{ name: "John Renz Bandianon" }],
  creator: "John Renz Bandianon",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "John Renz Bandianon | Software Developer",
    description: SITE_DESCRIPTION,
    siteName: "John Renz Bandianon Portfolio",
    images: [
      {
        url: "/Image/Preview/ss.png",
        width: 1899,
        height: 934,
        type: "image/png",
        alt: "John Renz Bandianon - Software Developer Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Renz Bandianon | Software Developer",
    description: SITE_DESCRIPTION,
    creator: "@JohnRen94949414",
    images: [
      {
        url: "/Image/Preview/ss.png",
        alt: "John Renz Bandianon - Software Developer Portfolio Preview",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rznz_theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="antialiased isolate bg-bg text-ink font-sans selection:bg-ink selection:text-bg">
        <div className="global-dot-grid" aria-hidden="true" />
        <ThemeProvider>
          <BackToTop />
          <InitialLoaderProvider>
            <OrgTransitionProvider>
              <CvModalProvider>
                <SmoothScroll>
                  <SiteShell>{children}</SiteShell>
                </SmoothScroll>
              </CvModalProvider>
            </OrgTransitionProvider>
          </InitialLoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}