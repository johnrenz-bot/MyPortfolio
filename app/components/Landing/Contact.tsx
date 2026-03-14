"use client";

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaThreads, FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhone, MdEmail } from "react-icons/md";

const PERSONAL = {
  address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
  phone: "+63 966 798 7702",
  email: "johnrenzbandianon9@gmail.com",
};

const socials = [
  { icon: <FaGithub />,      url: "https://github.com/johnrenz-bot",                        label: "GitHub",    color: "#ffffff" },
  { icon: <FaLinkedin />,    url: "https://www.linkedin.com/in/john-renz-96a77728b/",        label: "LinkedIn",  color: "#0a66c2" },
  { icon: <SiGlassdoor />,   url: "https://www.glassdoor.com/member/profile",                label: "Glassdoor", color: "#0caa41" },
  { icon: <FaInstagram />,   url: "https://www.instagram.com/wiieidjxhdshehe/",              label: "Instagram", color: "#e1306c" },
  { icon: <FaThreads />,     url: "https://www.threads.net/@wiieidjxhdshehe",                label: "Threads",   color: "#ffffff" },
  { icon: <FaFacebook />,    url: "https://www.facebook.com/john.r.bandianon/",              label: "Facebook",  color: "#1877f2" },
  { icon: <FaXTwitter />,    url: "https://x.com/JohnRen94949414/",                          label: "Twitter X", color: "#ffffff" },
  { icon: <FaRedditAlien />, url: "https://www.reddit.com/user/Aware-Scratch8897/",          label: "Reddit",    color: "#ff4500" },
];

const details = [
  { label: "Address", value: PERSONAL.address, href: null,                                                                         Icon: HiLocationMarker, accent: "#a78bfa" },
  { label: "Phone",   value: PERSONAL.phone,   href: `tel:${PERSONAL.phone}`,                                                      Icon: MdPhone,          accent: "#34d399" },
  { label: "Email",   value: PERSONAL.email,   href: `https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}`,                  Icon: MdEmail,          accent: "#f472b6" },
];

function GlowCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full z-0 transition-transform duration-700 ease-out"
      style={{ background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)" }}
    />
  );
}

function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
      <div className="absolute top-[12%] left-[8%] w-64 h-64 rounded-full"
        style={{ background: "radial-gradient(circle, #a78bfa, transparent 70%)", opacity: 0.04, animation: "orbFloat 14s ease-in-out infinite" }} />
      <div className="absolute top-[55%] right-[6%] w-80 h-80 rounded-full"
        style={{ background: "radial-gradient(circle, #f472b6, transparent 70%)", opacity: 0.035, animation: "orbFloat 18s ease-in-out infinite reverse" }} />
      <div className="absolute bottom-[10%] left-[30%] w-52 h-52 rounded-full"
        style={{ background: "radial-gradient(circle, #34d399, transparent 70%)", opacity: 0.03, animation: "orbFloat 11s ease-in-out infinite 3s" }} />
    </div>
  );
}

function SocialCard({ s }: { s: typeof socials[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex flex-col items-center gap-3 py-8 rounded-2xl border transition-all duration-500 overflow-hidden"
      style={{
        borderColor: hovered ? `${s.color}50` : "rgba(232,228,220,0.14)",
        background: hovered ? `${s.color}08` : "transparent",
        transform: hovered ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(ellipse at 50% 120%, ${s.color}18, transparent 65%)` }}
      />
      <span
        className="relative text-2xl transition-all duration-300"
        style={{ color: hovered ? s.color : "rgba(232,228,220,0.6)", filter: hovered ? `drop-shadow(0 0 8px ${s.color}80)` : "none" }}
      >
        {s.icon}
      </span>
      <span
        className="relative text-[0.48rem] font-bold tracking-[0.25em] uppercase transition-colors duration-300"
        style={{ color: hovered ? "rgba(232,228,220,0.9)" : "rgba(232,228,220,0.55)", fontFamily: "'DM Mono', monospace" }}
      >
        {s.label}
      </span>
    </a>
  );
}

function DetailCard({ d }: { d: typeof details[0] }) {
  const [hovered, setHovered] = useState(false);
  const inner = (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col gap-3 p-7 rounded-2xl border transition-all duration-500 overflow-hidden h-full cursor-pointer"
      style={{
        borderColor: hovered ? `${d.accent}55` : "rgba(232,228,220,0.15)",
        background: hovered ? `${d.accent}07` : "transparent",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(ellipse at 0% 0%, ${d.accent}12, transparent 60%)` }}
      />
      <div className="relative flex items-center gap-2">
        <d.Icon
          className="text-base transition-all duration-300"
          style={{ color: hovered ? d.accent : "rgba(232,228,220,0.45)", filter: hovered ? `drop-shadow(0 0 6px ${d.accent}70)` : "none" }}
        />
        <p
          className="text-[0.48rem] font-bold tracking-[0.4em] uppercase transition-colors duration-300"
          style={{ color: hovered ? `${d.accent}cc` : "rgba(232,228,220,0.55)", fontFamily: "'DM Mono', monospace" }}
        >
          {d.label}
        </p>
      </div>
      <p
        className="relative text-sm leading-relaxed transition-colors duration-300 break-all"
        style={{ color: hovered ? "rgba(232,228,220,1)" : "rgba(232,228,220,0.75)" }}
      >
        {d.value}
      </p>
    </div>
  );
  return d.href
    ? <a href={d.href} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
    : <div>{inner}</div>;
}

function MarqueeStrip() {
  const items = ["Available for Work", "Open to Collaborate", "Let's Build Together", "Based in Bulacan, PH", "Full-Stack Developer"];
  const repeated = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden py-3 border-y border-[rgba(232,228,220,0.07)]">
      <div className="flex gap-12 whitespace-nowrap" style={{ animation: "marquee 28s linear infinite" }}>
        {repeated.map((item, i) => (
          <span key={i} className="text-[0.47rem] font-bold tracking-[0.4em] uppercase text-[#e8e4dc]/28 flex-shrink-0 flex items-center gap-4"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            {item} <span className="w-1 h-1 rounded-full bg-[#e8e4dc]/20 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&family=DM+Mono:wght@300;400&display=swap');

        @keyframes fadeUp    { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        @keyframes orbFloat  { 0%,100% { transform:translateY(0px) scale(1); } 50% { transform:translateY(-28px) scale(1.04); } }
        @keyframes marquee   { from { transform:translateX(0); } to { transform:translateX(-50%); } }
        @keyframes pulseGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.4); } 50% { box-shadow: 0 0 0 6px rgba(52,211,153,0); } }
        @keyframes letterFloat { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-5px); } }

        .fu-1 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.05s forwards; opacity:0; }
        .fu-2 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.2s  forwards; opacity:0; }
        .fu-3 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.35s forwards; opacity:0; }
        .fu-4 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.5s  forwards; opacity:0; }
        .fu-5 { animation: fadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.65s forwards; opacity:0; }

        .letter-float span { display:inline-block; animation: letterFloat 3.5s ease-in-out infinite; }
        .letter-float span:nth-child(2)  { animation-delay:0.10s; }
        .letter-float span:nth-child(3)  { animation-delay:0.20s; }
        .letter-float span:nth-child(4)  { animation-delay:0.30s; }
        .letter-float span:nth-child(5)  { animation-delay:0.40s; }
        .letter-float span:nth-child(6)  { animation-delay:0.50s; }
        .letter-float span:nth-child(7)  { animation-delay:0.60s; }
        .letter-float span:nth-child(8)  { animation-delay:0.70s; }
        .letter-float span:nth-child(9)  { animation-delay:0.80s; }
        .letter-float span:nth-child(10) { animation-delay:0.90s; }
        .letter-float span:nth-child(11) { animation-delay:1.00s; }
        .letter-float span:nth-child(12) { animation-delay:1.10s; }

        .noise-overlay::after {
          content:'';
          position:fixed;
          inset:0;
          background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity:0.025;
          pointer-events:none;
          z-index:1;
        }

        .grid-bg {
          background-image:
            linear-gradient(rgba(232,228,220,0.028) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,228,220,0.028) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .status-dot { animation: pulseGlow 2.5s ease-in-out infinite; }
      `}</style>

      <div className="noise-overlay" />
      <GlowCursor />
      <FloatingOrbs />

      <main className="relative z-10 min-h-screen bg-[#080808] grid-bg text-[#e8e4dc] flex flex-col items-center px-6 sm:px-12 py-20 gap-16">

        <div className="fu-1 flex flex-col items-center gap-4 pt-8 text-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-[#e8e4dc]/20" />
            <p className="text-[0.47rem] font-bold tracking-[0.55em] uppercase text-[#e8e4dc]/50" style={{ fontFamily: "'DM Mono', monospace" }}>
              Contact
            </p>
            <div className="w-8 h-px bg-[#e8e4dc]/20" />
          </div>

          <div className="relative">
            <h1
              className="letter-float font-light tracking-[0.3em] uppercase leading-none text-[clamp(2.8rem,7vw,5.5rem)]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {"Let's Connect".split("").map((char, i) => (
                <span key={i}>{char === " " ? "\u00A0" : char}</span>
              ))}
            </h1>
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-px w-3/4"
              style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.5), transparent)" }}
            />
          </div>

          <div className="flex items-center gap-3 mt-2">
            <span
              className="status-dot w-2 h-2 rounded-full bg-[#34d399] inline-block"
            />
            <p className="text-[0.48rem] tracking-[0.28em] uppercase text-[#e8e4dc]/60" style={{ fontFamily: "'DM Mono', monospace" }}>
              Open to opportunities &amp; collaborations
            </p>
          </div>
        </div>

        <div className="fu-2 w-full max-w-5xl">
          <MarqueeStrip />
        </div>

        <div className="fu-3 w-full max-w-5xl flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <p className="text-[0.47rem] font-bold tracking-[0.45em] uppercase text-[#e8e4dc]/55" style={{ fontFamily: "'DM Mono', monospace" }}>
              Contact Details
            </p>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,228,220,0.2), transparent)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {details.map((d) => <DetailCard key={d.label} d={d} />)}
          </div>
        </div>

        <div className="fu-4 w-full max-w-5xl flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <p className="text-[0.47rem] font-bold tracking-[0.45em] uppercase text-[#e8e4dc]/55" style={{ fontFamily: "'DM Mono', monospace" }}>
              Social Presence
            </p>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(232,228,220,0.2), transparent)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {socials.map((s) => <SocialCard key={s.label} s={s} />)}
          </div>
        </div>

        <div className="fu-5 w-full max-w-5xl">
          <div
            className="relative overflow-hidden rounded-3xl border border-[rgba(232,228,220,0.12)] p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, rgba(167,139,250,0.06), rgba(244,114,182,0.04))" }}
          >
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(167,139,250,0.08), transparent 60%)" }}
            />
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(244,114,182,0.06), transparent 70%)", transform: "translate(30%, -30%)" }}
            />
            <div className="relative flex flex-col gap-2">
              <p className="text-[0.47rem] font-bold tracking-[0.4em] uppercase text-[#a78bfa]/80" style={{ fontFamily: "'DM Mono', monospace" }}>
                Ready to collaborate?
              </p>
              <h2
                className="text-2xl font-light tracking-[0.15em] uppercase text-[#e8e4dc]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Drop me a message
              </h2>
            </div>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 px-8 py-3.5 rounded-full border border-[rgba(167,139,250,0.4)] text-[0.58rem] font-bold tracking-[0.35em] uppercase text-[#a78bfa] transition-all duration-300 hover:bg-[rgba(167,139,250,0.12)] hover:border-[rgba(167,139,250,0.7)] hover:shadow-[0_0_24px_rgba(167,139,250,0.25)]"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Send Email →
            </a>
          </div>
        </div>

        <div className="text-[0.42rem] tracking-[0.35em] uppercase text-[#e8e4dc]/20 text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
          © {new Date().getFullYear()} John Renz Bandianon — All rights reserved
        </div>

      </main>
    </>
  );
}