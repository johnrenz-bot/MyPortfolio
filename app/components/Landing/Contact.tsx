"use client";

import { useEffect, useRef } from "react";
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
  { label: "Connect", value: PERSONAL.phone, href: `tel:${PERSONAL.phone}`, Icon: MdPhone },
  { label: "Direct", value: PERSONAL.email, href: `mailto:${PERSONAL.email}`, Icon: MdEmail },
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
    <div ref={containerRef} className="relative min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <style jsx global>{`
        .aos { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .aos-in { opacity: 1; transform: translateY(0); }
        .sd1 { transition-delay: 0.1s; }
        .sd2 { transition-delay: 0.2s; }
        .sd3 { transition-delay: 0.3s; }

        .socials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          width: 100%;
        }

        @media (min-width: 768px) {
          .socials-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 16px;
          }
        }
      `}</style>

      <div className="fixed inset-0 bg-white -z-20" />

      <main className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-24 space-y-24">
        <section className="space-y-8">
          <div className="aos sd1 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-black" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-50">Get in Touch</span>
          </div>

          <h1 className="aos sd2 text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter uppercase text-black">
            REACH OUT
          </h1>

          <p className="aos sd3 max-w-md text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
            BSIT graduate open to full-time IT roles and freelance work across the Philippines.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {DETAILS.map((d) => (
            <div key={d.label} className="aos h-full">
              {d.href ? (
                <a href={d.href} className="block h-full group">
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

        <section className="space-y-10">
          <h2 className="aos text-[10px] font-bold uppercase tracking-[0.4em] text-black/40">Network</h2>
          <div className="socials-grid">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aos group relative aspect-square bg-white border border-black/5 overflow-hidden block rounded-xl shadow-sm"
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={s.image}
                    alt={`${s.label} profile`}
                    className="w-full h-full object-cover grayscale opacity-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                </div>

                <div className="absolute inset-0 p-6 flex flex-col justify-between z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-black/5">
                  <div className="text-xl text-black bg-white/70 backdrop-blur-md w-12 h-12 flex items-center justify-center rounded-2xl border border-white/40 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-95 group-hover:bg-black group-hover:text-white group-hover:border-black">
                    {s.icon}
                  </div>

                  <div className="relative flex flex-col items-start gap-1.5 w-full">
                    <span className="inline-block text-[8px] font-bold text-black uppercase tracking-widest px-2.5 py-1.5 bg-white/80 backdrop-blur-md border border-white/40 rounded-lg shadow-sm transition-all duration-500 group-hover:opacity-0 group-hover:-translate-y-1">
                      {s.label}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between pointer-events-none opacity-0 translate-y-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:translate-y-0">
                      <span className="text-[9px] font-black uppercase tracking-wider text-black">
                        View Account
                      </span>
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-gray-100 text-gray-600 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                        ↗
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="pt-20 border-t border-black/5 flex flex-col items-center space-y-12">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="aos group relative px-10 py-5 bg-neutral-900 text-white overflow-hidden transition-all duration-300 rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em]">Drop an Email</span>
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <div className="aos flex flex-col items-center gap-2 opacity-30 text-neutral-900">
            <div className="text-2xl font-black tracking-tighter uppercase italic">BANDIANON</div>
            <p className="text-[8px] font-bold uppercase tracking-widest">© 2026 All Rights Reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DetailBox({ d }: { d: Detail }) {
  return (
    <div className="p-8 border border-black/5 bg-white flex flex-col justify-between h-full space-y-12 transition-all duration-500 rounded-xl group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] group-hover:-translate-y-1">
      <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-neutral-100 border border-black/5 group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500">
        <d.Icon className="text-2xl opacity-60 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <div className="space-y-2 text-neutral-900">
        <p className="text-[9px] font-bold uppercase tracking-widest opacity-50 group-hover:opacity-70">{d.label}</p>
        <p className="text-xs font-bold leading-tight break-words uppercase">{d.value}</p>
      </div>
    </div>
  );
}