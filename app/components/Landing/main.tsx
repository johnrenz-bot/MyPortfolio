"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const carouselItems = [
  { id: 1, src: "/Image/Groove.png",          alt: "Groove",           href: "/Groove" },
  { id: 2, src: "/Image/Simon.png",           alt: "Simon Game",       href: "https://simon-game2-gamma.vercel.app/" },
  { id: 3, src: "/Image/WeekndSoundtrip.png", alt: "Weeknd Soundtrip", href: "https://weeknd-soundtrip.vercel.app/" },
  { id: 4, src: "/Image/Dinoverse.png",       alt: "DinoVerse",        href: "https://dinoverse-buce.vercel.app/" },
  { id: 5, src: "/Image/EduGuide.png",        alt: "EduGuide",         href: "https://edu-guide-three.vercel.app/" },
  { id: 6, src: "/Image/Kiyoto.png",          alt: "Kiyoto",           href: "https://kiyoto.vercel.app/" },
  { id: 7, src: "/Image/windbreaker.png",     alt: "Windbreaker",      href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/" },

  { id: 8,  src: "/Image/UI/1.jpg",  alt: "The Price of Sugar",      href: "" },
  { id: 9,  src: "/Image/UI/2.jpg",  alt: "Clay Cuneiform Tables",  href: "" },
  { id: 10, src: "/Image/UI/3.jpg",  alt: "Weeknd UI Concept",      href: "" },

  { id: 11, src: "/Image/UI/4.png",  alt: "XREAPER Hoodie",         href: "" },
  { id: 12, src: "/Image/UI/5.jpg",  alt: "BATTLE",                 href: "" },
  { id: 13, src: "/Image/UI/6.png",  alt: "Mazda",                  href: "" },

  { id: 14, src: "/Image/UI/7.png",  alt: "McLaren",                href: "" },
  { id: 15, src: "/Image/UI/8.png",  alt: "McLaren Alt",            href: "" },
  { id: 16, src: "/Image/UI/9.png",  alt: "McLaren Shirt",          href: "" },
  { id: 17, src: "/Image/UI/10.png", alt: "McLaren Shirt Alt",      href: "" },
];
const socials = [
  { url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
  { url: "https://github.com/johnrenz-bot", label: "GitHub" },
];

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    if (!localStorage.getItem("visited")) setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("visited", "true");
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    trackRef.current.scrollLeft = scrollLeft - (e.pageX - trackRef.current.offsetLeft - startX);
  };
  const onMouseUp = () => setIsDragging(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e8e4dc] overflow-x-hidden">

        <nav className="flex justify-end gap-10 px-12 py-7">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer"
              className="text-[0.62rem] font-bold tracking-[0.28em] uppercase opacity-75 hover:opacity-35 transition-opacity">
              {s.label}
            </a>
          ))}
        </nav>

        <section className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-4 py-12">
          <h1 className="font-[Cormorant_Garamond] text-[clamp(3.2rem,9vw,6.5rem)] font-light tracking-[0.4em] uppercase leading-none animate-[fadeUp_0.9s_ease_0.05s_forwards] opacity-0">
            John Renz
          </h1>
          <p className="text-[clamp(0.5rem,1.1vw,0.68rem)] font-bold tracking-[0.4em] uppercase opacity-45 max-w-lg leading-loose animate-[fadeUp_0.9s_ease_0.2s_forwards] opacity-0">
            UI/UX Developer, Graphic Design,<br />Frontend Developer
          </p>
          <p className="text-[0.58rem] tracking-[0.22em] uppercase opacity-25 max-w-sm leading-loose animate-[fadeUp_0.9s_ease_0.35s_forwards] opacity-0">
            Building clean, interactive web experiences with a passion for UI design and modern frontend stacks.
          </p>
          <div className="flex gap-4 mt-3 animate-[fadeUp_0.9s_ease_0.5s_forwards] opacity-0">
            <Link href="/Resume"
              className="text-[0.58rem] font-bold tracking-[0.3em] uppercase px-9 py-3 bg-[#e8e4dc] text-[#0a0a0a] border border-[#e8e4dc] hover:opacity-85 transition-opacity">
              Full Resume
            </Link>
            <a href="/Image/UiPortolio.png" target="_blank"
              className="text-[0.58rem] font-bold tracking-[0.3em] uppercase px-9 py-3 border border-[rgba(232,228,220,0.25)] hover:bg-[rgba(232,228,220,0.07)] transition-colors">
              UI Portfolio
            </a>
          </div>
        </section>

        <div className="w-full pt-10 pb-4 animate-[fadeUp_0.9s_ease_0.65s_forwards] opacity-0">
          <div
            ref={trackRef}
            className={`flex gap-2.5 overflow-x-auto scrollbar-hide select-none px-8 pb-4 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ scrollbarWidth: "none" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {carouselItems.map((item) => (
              <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer"
                className="flex-none w-[clamp(130px,20vw,250px)] aspect-[4/3] bg-[#161616] border border-[rgba(232,228,220,0.08)] overflow-hidden hover:-translate-y-1.5 transition-transform">
                <img src={item.src} alt={item.alt} draggable={false}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity pointer-events-none"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </a>
            ))}
          </div>
        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl">
          <div className="bg-[#0f0f0f] border border-[rgba(232,228,220,0.1)] p-11 max-w-md w-[90%] flex flex-col gap-7">
            <div className="text-center">
              <p className="text-[0.52rem] tracking-[0.35em] uppercase opacity-25 font-bold mb-2">Portfolio Guide</p>
              <h2 className="font-[Cormorant_Garamond] text-[2.2rem] font-light tracking-[0.25em] uppercase">Welcome!</h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                ["01", "UI Portfolio:", "High-resolution design assets ready to view."],
                ["02", "Carousel:", "Drag to browse through all project screenshots."],
                ["03", "Full Resume:", "Complete background, skills, and tech stack details."],
              ].map(([num, label, text]) => (
                <div key={num} className="flex gap-4 items-start">
                  <span className="text-[0.6rem] font-bold opacity-35 mt-0.5">{num}</span>
                  <p className="text-[0.72rem] leading-relaxed opacity-65"><strong>{label}</strong> {text}</p>
                </div>
              ))}
            </div>
            <button onClick={closeModal}
              className="w-full py-4 bg-[#e8e4dc] text-[#0a0a0a] text-[0.58rem] font-bold tracking-[0.32em] uppercase hover:opacity-82 transition-opacity">
              Continue to Site
            </button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');
        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </>
  );
}