import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

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
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "John Renz Bandianon | Software Engineer",
    template: "%s | John Renz Bandianon"
  },
  description: "Software Engineer, Frontend Developer, UI/UX Designer Portfolio",
  keywords: ["Software Engineer", "Frontend Developer", "UI/UX Designer", "Philippines", "React", "Next.js", "Web Development"],
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
    title: "John Renz Bandianon | Software Engineer",
    description: "Software Engineer, Frontend Developer, UI/UX Designer Portfolio",
    siteName: "John Renz Portfolio",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "John Renz Bandianon Portfolio"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "John Renz Bandianon | Software Engineer",
    description: "Software Engineer, Frontend Developer, UI/UX Designer Portfolio",
    creator: "@JohnRen94949414",
    images: ["/twitter-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import InitialLoaderProvider from "./components/loading/InitialLoaderProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <body className="antialiased bg-white text-black font-sans selection:bg-black selection:text-white">
        <InitialLoaderProvider>
          {children}
        </InitialLoaderProvider>
      </body>
    </html>
  );
}