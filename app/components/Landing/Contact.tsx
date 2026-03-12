"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaThreads, FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";

const PERSONAL = {
  address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
  phone: "+63 966 798 7702",
  email: "johnrenzbandianon9@gmail.com",
};

const socials = [
  { icon: <FaGithub />,     url: "https://github.com/johnrenz-bot",                          label: "GitHub" },
  { icon: <FaLinkedin />,   url: "https://www.linkedin.com/in/john-renz-96a77728b/",          label: "LinkedIn" },
  { icon: <SiGlassdoor />,  url: "https://www.glassdoor.com/member/profile",                  label: "Glassdoor" },
  { icon: <FaInstagram />,  url: "https://www.instagram.com/wiieidjxhdshehe/",                label: "Instagram" },
  { icon: <FaThreads />,    url: "https://www.threads.net/@wiieidjxhdshehe",                  label: "Threads" },
  { icon: <FaFacebook />,   url: "https://www.facebook.com/john.r.bandianon/",                label: "Facebook" },
  { icon: <FaXTwitter />,   url: "https://x.com/JohnRen94949414/",                            label: "Twitter X" },
  { icon: <FaRedditAlien />,url: "https://www.reddit.com/user/Aware-Scratch8897/",            label: "Reddit" },
];

const details = [
  { label: "Address", value: PERSONAL.address, href: null },
  { label: "Phone",   value: PERSONAL.phone,   href: `tel:${PERSONAL.phone}` },
  { label: "Email",   value: PERSONAL.email,   href: `https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}` },
];

export default function Contact() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        .fu-1 { animation: fadeUp 0.9s ease 0.05s forwards; opacity: 0; }
        .fu-2 { animation: fadeUp 0.9s ease 0.2s  forwards; opacity: 0; }
        .fu-3 { animation: fadeUp 0.9s ease 0.35s forwards; opacity: 0; }
      `}</style>

      <main className="min-h-screen bg-[#0a0a0a] text-[#e8e4dc] flex flex-col items-center px-6 sm:px-12 py-20 gap-16">

        <div className="fu-1 flex flex-col items-center gap-3 pt-8 text-center">
          <p className="text-[0.52rem] font-bold tracking-[0.4em] uppercase opacity-40">Contact</p>
          <h1 className="font-[Cormorant_Garamond] text-[clamp(2.8rem,7vw,5.5rem)] font-light tracking-[0.35em] uppercase leading-none">
            Let's Connect
          </h1>
          <div className="w-10 h-px bg-[#e8e4dc] opacity-25 mt-1" />
          <p className="text-xs tracking-[0.2em] uppercase opacity-45 max-w-sm leading-loose mt-1">
            Open to opportunities, collaborations, and meaningful conversations.
          </p>
        </div>

        <div className="fu-2 w-full max-w-5xl flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[0.52rem] font-bold tracking-[0.4em] uppercase opacity-50">Contact Details</p>
            <div className="flex-1 h-px bg-[rgba(232,228,220,0.15)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {details.map(({ label, value, href }) => {
              const inner = (
                <div className="flex flex-col gap-2 p-7 border border-[rgba(232,228,220,0.14)] hover:border-[rgba(232,228,220,0.38)] hover:-translate-y-1 transition-all duration-300 group h-full">
                  <p className="text-[0.48rem] font-bold tracking-[0.4em] uppercase opacity-45 group-hover:opacity-70 transition-opacity">{label}</p>
                  <p className="text-sm leading-relaxed opacity-75 group-hover:opacity-100 transition-opacity break-all">{value}</p>
                </div>
              );
              return href
                ? <a key={label} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
                : <div key={label}>{inner}</div>;
            })}
          </div>
        </div>

        <div className="fu-3 w-full max-w-5xl flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <p className="text-[0.52rem] font-bold tracking-[0.4em] uppercase opacity-50">Social Presence</p>
            <div className="flex-1 h-px bg-[rgba(232,228,220,0.15)]" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 py-8 border border-[rgba(232,228,220,0.14)] hover:border-[rgba(232,228,220,0.38)] hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl opacity-45 group-hover:opacity-90 transition-opacity">{s.icon}</span>
                <span className="text-[0.48rem] font-bold tracking-[0.25em] uppercase opacity-45 group-hover:opacity-75 transition-opacity">{s.label}</span>
              </a>
            ))}
          </div>
        </div>

      </main>
    </>
  );
}