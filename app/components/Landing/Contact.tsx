"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaThreads, FaRedditAlien, FaXTwitter, FaGoogle } from "react-icons/fa6";
import { SiGlassdoor, SiInteractiondesignfoundation } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";

type Detail = {
  label: string;
  value: string;
  href: string | null;
  Icon: React.ComponentType<{ className?: string }>;
};

const PERSONAL = {
  address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
  phone: "+63 966 798 7702",
  email: "johnrenzbandianon9@gmail.com",
};

const SOCIALS = [
  { icon: <FaGoogle />, url: "https://gdg.community.dev/u/m5ucyf/#/about", label: "GDG", image: "/Image/profiles/gdg.png" },
  { icon: <SiInteractiondesignfoundation />, url: "https://ixdf.org/my-private-profile", label: "IxDF", image: "/Image/profiles/ixdf.png" },
  { icon: <FaGithub />, url: "https://github.com/johnrenz-bot", label: "GitHub", image: "/Image/profiles/Github.png" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn", image: "/Image/profiles/linkedin.png" },
  { icon: <SiGlassdoor />, url: "https://www.glassdoor.com/member/profile", label: "Glassdoor", image: "/Image/profiles/Glassdoor.png" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/wiieidjxhdshehe/", label: "Instagram", image: "/Image/profiles/instagram.png" },
  { icon: <FaThreads />, url: "https://www.threads.net/@wiieidjxhdshehe", label: "Threads", image: "/Image/profiles/threads.png" },
  { icon: <FaXTwitter />, url: "https://x.com/JohnRen94949414/", label: "Twitter", image: "/Image/profiles/X.png" },
  { icon: <FaRedditAlien />, url: "https://www.reddit.com/user/Aware-scratch8897/", label: "Reddit", image: "/Image/profiles/reddit.png" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/john.r.bandianon/", label: "Facebook", image: "/Image/profiles/facebook.png" },
];

const DETAILS: Detail[] = [
  { label: "Location", value: PERSONAL.address, href: null, Icon: HiLocationMarker },
  { label: "Phone", value: PERSONAL.phone, href: `tel:${PERSONAL.phone}`, Icon: MdPhone },
  { label: "Direct Email", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, Icon: MdEmail },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = containerRef.current?.querySelectorAll(".aos");
    if (!els) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("aos-in");
          else entry.target.classList.remove("aos-in");
        });
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 font-sans selection:bg-neutral-900 selection:text-white dark:selection:bg-white dark:selection:text-neutral-900 overflow-x-hidden transition-colors duration-300"
    >
      <style jsx global>{`
        .aos { opacity: 0; transform: translateY(24px); transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
        .aos-in { opacity: 1; transform: translateY(0); }
        .sd1 { transition-delay: 0.08s; }
        .sd2 { transition-delay: 0.18s; }
        .sd3 { transition-delay: 0.28s; }

        .socials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          width: 100%;
        }

        @media (min-width: 640px) {
          .socials-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 14px;
          }
        }

        @media (min-width: 1024px) {
          .socials-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-12 md:py-16 space-y-16 md:space-y-20">
        {/* Section Header */}
        <section className="space-y-6">
          <div className="aos sd1 flex items-center gap-3">
            <span className="w-10 h-[2px] bg-neutral-900 dark:bg-white" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-neutral-500 dark:text-neutral-400">
              Get in Touch
            </span>
          </div>

          <h2 className="aos sd2 text-5xl sm:text-7xl md:text-9xl font-black leading-[0.9] tracking-tighter uppercase text-neutral-950 dark:text-white">
            REACH OUT
          </h2>

          <p className="aos sd3 max-w-lg text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-[0.18em] leading-relaxed">
            BSIT graduate open to full-time Software Engineer, Web Developer, and IT roles across the Philippines and remotely.
          </p>
        </section>

        {/* Contact Details Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 w-full">
          {DETAILS.map((d) => (
            <div key={d.label} className="aos h-full">
              {d.href ? (
                <a href={d.href} className="block h-full group focus:outline-none focus:ring-2 focus:ring-neutral-900/30 rounded-2xl">
                  <DetailBox d={d} />
                </a>
              ) : (
                <div className="group h-full">
                  <DetailBox d={d} />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Social Network Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="aos text-xs font-bold uppercase tracking-[0.35em] text-neutral-500 dark:text-neutral-400">
              Professional Network &amp; Profiles
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
              {SOCIALS.length} Profiles
            </span>
          </div>

          <div className="socials-grid">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aos group relative aspect-square bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden block rounded-2xl shadow-sm hover:border-neutral-900 dark:hover:border-white transition-all duration-300"
              >
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={s.image}
                    alt={`${s.label} profile`}
                    fill
                    sizes="(max-width: 640px) 150px, 220px"
                    className="object-cover grayscale opacity-35 dark:opacity-25 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </div>

                <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 transition-all duration-300 group-hover:bg-neutral-950/10 dark:group-hover:bg-black/30">
                  <div className="text-xl text-neutral-900 dark:text-white bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md w-11 h-11 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm transition-all duration-300 group-hover:scale-95 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950">
                    {s.icon}
                  </div>

                  <div className="relative flex flex-col items-start gap-1 w-full">
                    <span className="inline-block text-[9px] font-bold text-neutral-800 dark:text-neutral-200 uppercase tracking-widest px-2.5 py-1 bg-white/85 dark:bg-neutral-900/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-1">
                      {s.label}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between pointer-events-none opacity-0 translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-[9px] font-black uppercase tracking-wider text-neutral-900 dark:text-white">
                        View Account
                      </span>
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 text-xs">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Footer Actions & Branding */}
        <footer className="pt-16 border-t border-neutral-200 dark:border-neutral-800 flex flex-col items-center space-y-10">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href={`mailto:${PERSONAL.email}`}
              className="aos group relative inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 transition-all duration-300 rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.15)] hover:-translate-y-0.5 text-xs font-bold uppercase tracking-[0.25em]"
            >
              <MdEmail className="text-base" />
              <span>Drop an Email</span>
            </a>
          </div>

          <div className="aos flex flex-col items-center gap-2 text-neutral-900 dark:text-neutral-100 opacity-40">
            <div className="text-2xl font-black tracking-tighter uppercase italic">BANDIANON</div>
            <p className="text-[9px] font-bold uppercase tracking-widest font-mono">
              © 2026 John Renz Bandianon · All Rights Reserved
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DetailBox({ d }: { d: Detail }) {
  return (
    <div className="p-6 sm:p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 flex flex-col justify-between h-full space-y-8 transition-all duration-300 rounded-2xl group-hover:border-neutral-400 dark:group-hover:border-neutral-600 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:-translate-y-0.5">
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-all duration-300">
        <d.Icon className="text-2xl opacity-75 group-hover:opacity-100 transition-all duration-300" />
      </div>
      <div className="space-y-1.5 text-neutral-900 dark:text-white">
        <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          {d.label}
        </p>
        <p className="text-xs sm:text-sm font-bold leading-relaxed break-words uppercase">
          {d.value}
        </p>
      </div>
    </div>
  );
}