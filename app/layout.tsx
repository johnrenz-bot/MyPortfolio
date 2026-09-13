import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import InitialLoaderProvider from "./components/loading/InitialLoaderProvider";
import { ThemeProvider } from "./components/theme/ThemeProvider";

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
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "John Renz Bandianon | Software Engineer & Web Developer",
    template: "%s | John Renz Bandianon",
  },
  description:
    "Portfolio of John Renz Bandianon — Entry-Level Software Engineer & Web Developer. Experienced in Next.js, React, TypeScript, PHP/Laravel, and Supabase.",
  keywords: [
    "John Renz Bandianon",
    "Software Engineer",
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
  metadataBase: new URL("https://johnrenz.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://johnrenz.dev",
    title: "John Renz Bandianon | Software Engineer & Web Developer",
    description:
      "Entry-level Software Engineer & Web Developer with experience in Next.js, React, TypeScript, PHP/Laravel, and Supabase.",
    siteName: "John Renz Bandianon Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "John Renz Bandianon Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Renz Bandianon | Software Engineer & Web Developer",
    description:
      "Entry-level Software Engineer & Web Developer with experience in Next.js, React, TypeScript, PHP/Laravel, and Supabase.",
    creator: "@JohnRen94949414",
    images: ["/twitter-image.png"],
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
      <body className="antialiased bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-950 transition-colors duration-300">
        <ThemeProvider>
          <InitialLoaderProvider>
            {children}
          </InitialLoaderProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}