"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaThreads, FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";

const PERSONAL = {
  address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
  phone: "+63 966 798 7702",
  email: "johnrenzbandianon9@gmail.com",
};

const SOCIALS = [
  { icon: <FaGithub />, url: "https://github.com/johnrenz-bot", label: "GitHub" },
  { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
  { icon: <SiGlassdoor />, url: "https://www.glassdoor.com/member/profile", label: "Glassdoor" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/wiieidjxhdshehe/", label: "Instagram" },
  { icon: <FaThreads />, url: "https://www.threads.net/@wiieidjxhdshehe", label: "Threads" },
  { icon: <FaXTwitter />, url: "https://x.com/JohnRen94949414/", label: "Twitter" },
  { icon: <FaRedditAlien />, url: "https://www.reddit.com/user/Aware-scratch8897/", label: "Reddit" },
  { icon: <FaFacebook />, url: "https://www.facebook.com/john.r.bandianon/", label: "Facebook" },
];

const DETAILS = [
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
    <div ref={containerRef} className="relative min-h-screen text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-bg {
          background: linear-gradient(-45deg, #f0f0f0, #ffffff, #e0e0e0, #f8f8f8);
          background-size: 400% 400%;
          animation: gradientMove 15s ease-in-out infinite;
        }
        .noise-overlay {
          position: absolute; inset: 0; opacity: 0.03; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .aos { opacity: 0; transform: translateY(30px); transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
        .aos-in { opacity: 1; transform: translateY(0); }
        .sd1 { transition-delay: 0.1s; }
        .sd2 { transition-delay: 0.2s; }
        .sd3 { transition-delay: 0.3s; }
        
        .grid-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          width: 100%;
        }

        @media(min-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
        }
      `}</style>

      <div className="fixed inset-0 animate-bg -z-20" />
      <div className="noise-overlay -z-10" />

      <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-24">
        
        <section className="space-y-8">
          <div className="aos sd1 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-black" />
            <span className="text-[10px] font-bold tracking-[0.5em] uppercase opacity-50">Get in touch</span>
          </div>
          <h1 className="aos sd2 text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter uppercase">
            REACH <br />
            <span className="text-transparent border-text" style={{ WebkitTextStroke: '1px black' }}>OUT</span>
          </h1>
          <p className="aos sd3 max-w-sm text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em] leading-relaxed">
            Available for freelance opportunities and full-time positions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {DETAILS.map((d, i) => (
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
          <div className="grid-container">
            {SOCIALS.map((s, i) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aos group bg-white/50 border border-black/5 aspect-square flex flex-col items-center justify-center space-y-3 transition-all duration-500 hover:bg-black hover:text-white"
              >
                <span className="text-xl transition-transform duration-500 group-hover:scale-110">{s.icon}</span>
                <span className="text-[8px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100">{s.label}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="pt-20 border-t border-black/5 flex flex-col items-center space-y-12">
          <a
            href={`mailto:${PERSONAL.email}`}
            className="aos group relative px-10 py-5 bg-black text-white overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.3em]">Drop an Email</span>
            <div className="absolute inset-0 bg-zinc-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <div className="aos flex flex-col items-center gap-2 opacity-30">
            <div className="text-2xl font-black tracking-tighter uppercase italic">BANDIANON</div>
            <p className="text-[8px] font-bold uppercase tracking-widest">© 2026 All Rights Reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function DetailBox({ d }: { d: any }) {
  return (
    <div className="p-8 border border-black/5 bg-white/30 backdrop-blur-sm flex flex-col justify-between h-full space-y-12 transition-all duration-500 group-hover:bg-black group-hover:text-white">
      <d.Icon className="text-2xl opacity-30 group-hover:opacity-100 transition-all duration-500" />
      <div className="space-y-2">
        <p className="text-[9px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-60">{d.label}</p>
        <p className="text-xs font-bold leading-tight break-words uppercase">{d.value}</p>
      </div>
    </div>
  );
}