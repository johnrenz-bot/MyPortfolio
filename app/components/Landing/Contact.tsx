"use client";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaThreads,
} from "react-icons/fa6";
import { FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";

export default function Contact() {
  const TITLE = {
    header: "Let’s Connect",
    description:
      "Open to opportunities, collaborations, and meaningful conversations. Feel free to reach out anytime.",
  };

  const PERSONAL = {
    address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
    phone: "+63 966 798 7702",
    email: "johnrenzbandianon9@gmail.com",
  };

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/johnrenz-bot", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
    { icon: <SiGlassdoor />, url: "https://www.glassdoor.com/member/profile", label: "Glassdoor" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/wiieidjxhdshehe/", label: "Instagram" },
    { icon: <FaThreads />, url: "https://www.threads.net/@wiieidjxhdshehe", label: "Threads" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/john.r.bandianon/", label: "Facebook" },
    { icon: <FaXTwitter />, url: "https://x.com/JohnRen94949414/", label: "Twitter X" },
    { icon: <FaRedditAlien />, url: "https://www.reddit.com/user/Aware-Scratch8897/", label: "Reddit" },
  ];

  const glass =
    "relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500";

  const card =
    "group relative flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-white/90 to-white/70 text-black hover:from-white hover:to-white hover:-translate-y-1 transition-all duration-300 shadow-lg";

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[var(--bg)] text-[var(--text)] px-4 sm:px-8 py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col gap-20">
        <section className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
            {TITLE.header}
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-xl opacity-80 leading-relaxed">
            {TITLE.description}
          </p>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className={`${glass} p-8 sm:p-10 flex flex-col gap-8`}>
            <h2 className="text-xs font-black tracking-[0.35em] uppercase opacity-50 text-center">
              Contact Details
            </h2>

            <div className="grid gap-4">
              <div className={`${card} h-32 text-center`}>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                  Address
                </span>
                <span className="text-base sm:text-lg font-semibold px-4">
                  {PERSONAL.address}
                </span>
              </div>

              <div className={`${card} h-32 text-center`}>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                  Phone
                </span>
                <span className="text-xl sm:text-2xl font-black">
                  {PERSONAL.phone}
                </span>
              </div>

              <a
                href={`https://mail.google.com/mail/?view=cm&to=${PERSONAL.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`${card} h-32 text-center`}
              >
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-60">
                  Email
                </span>
                <span className="text-base sm:text-lg font-bold break-all px-4">
                  {PERSONAL.email}
                </span>
              </a>
            </div>
          </div>

          <div className={`${glass} p-8 sm:p-10 flex flex-col gap-8`}>
            <h2 className="text-xs font-black tracking-[0.35em] uppercase opacity-50 text-center">
              Social Presence
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${card} h-36`}
                >
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
