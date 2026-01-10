// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Sarpanch } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const sarpanch = Sarpanch({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-sarpanch" });

export const metadata: Metadata = {
  title: "John Renz Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${sarpanch.variable} ${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        style={{
          backgroundColor: "var(--bg)",
          color: "var(--text)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
