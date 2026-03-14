"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const carouselItems = [
  { id: 1,  src: "/Image/Groove.png",              alt: "Groove",             href: "/Groove" },
  { id: 2,  src: "/Image/Simon.png",               alt: "Simon Game",         href: "https://simon-game2-gamma.vercel.app/" },
  { id: 3,  src: "/Image/WeekndSoundtrip.png",     alt: "Weeknd Soundtrip",   href: "https://weeknd-soundtrip.vercel.app/" },
  { id: 4,  src: "/Image/Dinoverse.png",           alt: "DinoVerse",          href: "https://dinoverse-buce.vercel.app/" },
  { id: 5,  src: "/Image/EduGuide.png",            alt: "EduGuide",           href: "https://edu-guide-three.vercel.app/" },
  { id: 6,  src: "/Image/Kiyoto.png",              alt: "Kiyoto",             href: "https://kiyoto.vercel.app/" },
  { id: 7,  src: "/Image/windbreaker.png",         alt: "Windbreaker",        href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/" },
  { id: 8,  src: "/Image/UI/1.jpg",                alt: "The Price of Sugar", href: "" },
  { id: 9,  src: "/Image/UI/2.jpg",                alt: "Clay Cuneiform Tables", href: "" },
  { id: 10, src: "/Image/UI/3.jpg",                alt: "Weeknd UI Concept",  href: "" },
  { id: 11, src: "/Image/UI/4.png",                alt: "XREAPER Hoodie",     href: "" },
  { id: 12, src: "/Image/UI/5.jpg",                alt: "BATTLE",             href: "" },
  { id: 13, src: "/Image/UI/6.png",                alt: "Mazda",              href: "" },
  { id: 14, src: "/Image/UI/7.png",                alt: "McLaren",            href: "" },
  { id: 15, src: "/Image/UI/8.png",                alt: "McLaren Alt",        href: "" },
  { id: 16, src: "/Image/UI/9.png",                alt: "McLaren Shirt",      href: "" },
  { id: 17, src: "/Image/UI/10.png",               alt: "McLaren Shirt Alt",  href: "" },
];

const socials = [
  { url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
  { url: "https://github.com/johnrenz-bot",                  label: "GitHub" },
];

const guideItems = [
  ["01", "UI Portfolio", "High resolution design assets ready to view."],
  ["02", "Carousel",     "Drag or let it auto scroll through projects."],
  ["03", "Resume",       "Complete background skills and stack."],
];

const SPEED = 0.25;
const LOOP_THRESHOLD = 2000;

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  const [dragging, setDragging]   = useState(false);
  const [startX, setStartX]       = useState(0);
  const [translate, setTranslate] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);
  const items    = [...carouselItems, ...carouselItems];

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
    if (!localStorage.getItem("visited")) setShowModal(true);
  }, []);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      if (!dragging) {
        setTranslate((prev) => {
          const next = prev - SPEED;
          return Math.abs(next) >= LOOP_THRESHOLD ? 0 : next;
        });
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [dragging]);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("visited", "true");
  };

  const onMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setStartX(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const walk = e.clientX - startX;
    setStartX(e.clientX);
    setTranslate((prev) => prev + walk);
  };

  const onMouseUp = () => setDragging(false);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-[#e8e4dc] overflow-x-hidden">

        <nav className="flex justify-end gap-12 px-14 py-9">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              className="text-[0.85rem] font-bold tracking-[0.35em] uppercase opacity-70 hover:opacity-40 transition"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <section className="flex-1 flex flex-col items-center justify-center text-center px-10 gap-6 py-20">
          <h1 className="font-[Cormorant_Garamond] text-[clamp(4rem,10vw,8rem)] font-light tracking-[0.45em] uppercase leading-none [animation:fadeUp_1s_ease_0.1s_forwards] opacity-0">
            John Renz Bandianon
          </h1>

          <p className="text-[clamp(0.8rem,1.2vw,1rem)] font-semibold tracking-[0.45em] uppercase opacity-50 max-w-xl [animation:fadeUp_1s_ease_0.3s_forwards] opacity-0">
            UI / UX Developer • Graphic Designer • Frontend Developer
          </p>

          <p className="text-[0.85rem] tracking-[0.25em] uppercase opacity-30 max-w-md leading-relaxed [animation:fadeUp_1s_ease_0.45s_forwards] opacity-0">
            Building clean interactive web experiences focused on modern UI design and thoughtful user interaction.
          </p>

          <div className="flex gap-6 mt-5 [animation:fadeUp_1s_ease_0.6s_forwards] opacity-0">
            <Link
              href="/Resume"
              className="text-[0.75rem] font-bold tracking-[0.35em] uppercase px-12 py-4 bg-[#e8e4dc] text-[#0a0a0a] hover:opacity-85 transition"
            >
              Full Resume
            </Link>

            <a
              href="/Image/UiPortolio.png"
              target="_blank"
              className="text-[0.75rem] font-bold tracking-[0.35em] uppercase px-12 py-4 border border-[rgba(232,228,220,0.25)] hover:bg-[rgba(232,228,220,0.06)] transition"
            >
              UI Portfolio
            </a>
          </div>
        </section>

        <div className="w-full pt-10 pb-12 overflow-hidden">
          <div
            ref={trackRef}
            className={`flex gap-5 px-10 select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ transform: `translateX(${translate}px)` }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {items.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                className="group flex-none w-[clamp(140px,16vw,220px)] aspect-[4/3] bg-[#141414] border border-[rgba(232,228,220,0.08)] overflow-hidden hover:-translate-y-1 hover:scale-[1.03] transition duration-500"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  draggable={false}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition duration-500"
                />
              </a>
            ))}
          </div>
        </div>

      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl">
          <div className="bg-[#0f0f0f] border border-[rgba(232,228,220,0.1)] p-12 max-w-lg w-[92%] flex flex-col gap-8">

            <div className="text-center">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase opacity-30 font-bold mb-3">
                Portfolio Guide
              </p>
              <h2 className="font-[Cormorant_Garamond] text-[2.6rem] font-light tracking-[0.25em] uppercase">
                Welcome
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {guideItems.map(([n, l, t]) => (
                <div key={n} className="flex gap-4">
                  <span className="text-[0.7rem] font-bold opacity-40 mt-[3px]">{n}</span>
                  <p className="text-[0.9rem] opacity-70 leading-relaxed">
                    <strong>{l}:</strong> {t}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={closeModal}
              className="w-full py-4 bg-[#e8e4dc] text-[#0a0a0a] text-[0.7rem] font-bold tracking-[0.35em] uppercase hover:opacity-85 transition"
            >
              Enter Portfolio
            </button>

          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}