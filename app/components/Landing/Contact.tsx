"use client";

import Link from "next/link";
import {
  FaGithub, FaLinkedin, FaInstagram, FaFacebook,
  FaThreads, FaRedditAlien, FaXTwitter
} from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";

export default function Contact() {
  const PERSONAL = {
    address: "Grand Villas, Loma de Gato, Marilao, Bulacan",
    phone: "+63 966 798 7702",
    email: "johnrenzbandianon9@gmail.com",
  };

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/johnrenz-bot", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/john-renz-96a77728b/", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/wiieidjxhdshehe/", label: "Instagram" },
    { icon: <FaFacebook />, url: "https://www.facebook.com/john.r.bandianon/", label: "Facebook" },
  ];

  return (
    <main className="relative min-h-screen w-full bg-black text-white font-sans uppercase overflow-x-hidden">
      
      {/* Background Watermark */}
      <div className="fixed inset-0 flex flex-col justify-center items-center leading-none select-none pointer-events-none z-0 opacity-5">
        <h2 className="text-[15vw] font-black tracking-tighter text-gray-500">JOHN RENZ</h2>
        <h2 className="text-[18vw] font-black tracking-tighter text-gray-600 -mt-10">BANDANON</h2>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full flex justify-between items-center px-12 py-8">
        <div className="w-12 h-12">
          <img src="/Image/vector.png" alt="Logo" className="h-full object-contain invert" />
        </div>

        <div className="flex items-center gap-12 text-xl font-bold tracking-widest">
          <Link href="/new" className="hover:text-red-500 transition">HOME</Link>
          <Link href="/new/Aboutme" className="hover:text-red-500 transition">ABOUT</Link>
          
          <div className="w-14 h-14 rounded-full border-2 border-zinc-700 overflow-hidden bg-zinc-900 mx-4 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <img src="/Image/general.png" alt="profile" className="w-full h-full object-cover" />
          </div>

          <Link href="/new/Projects" className="hover:text-red-500 transition">PROJECTS</Link>
          <Link href="/new/Contact" className="text-red-500 underline underline-offset-8">CONTACT</Link>
        </div>
        
        <div className="w-12" /> {/* Spacer for balance */}
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 pt-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Side: Info */}
        <div className="space-y-12">
          {/* Section Header with Slant Effect */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-red-900/20 -skew-x-12 transform translate-x-4"></div>
            <h1 className="relative text-7xl font-black italic tracking-tighter px-6 py-2 border-l-4 border-red-600">
              CONTACT
            </h1>
          </div>

          <div className="space-y-8 normal-case font-serif text-zinc-300">
            <div className="space-y-2">
              <h3 className="uppercase font-sans font-bold text-white text-xl tracking-widest">Let's Connect</h3>
              <p className="text-lg max-w-md italic leading-relaxed">
                Open to opportunities, collaborations, and meaningful conversations. Feel free to reach out anytime.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="uppercase font-sans font-bold text-white tracking-widest text-sm opacity-60">Contact Details</h3>
              
              <div className="space-y-4">
                <p className="flex flex-col">
                  <span className="font-sans text-xs uppercase font-black text-zinc-500">Address</span>
                  <span className="text-lg">{PERSONAL.address}</span>
                </p>
                <p className="flex flex-col">
                  <span className="font-sans text-xs uppercase font-black text-zinc-500">Phone</span>
                  <span className="text-lg tracking-wider">{PERSONAL.phone}</span>
                </p>
                <p className="flex flex-col">
                  <span className="font-sans text-xs uppercase font-black text-zinc-500">Email</span>
                  <a href={`mailto:${PERSONAL.email}`} className="text-lg text-red-500 underline hover:text-white transition decoration-1">
                    {PERSONAL.email}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 pt-4">
            {socials.map((social, i) => (
              <a key={i} href={social.url} className="text-2xl hover:text-red-500 transition-transform hover:-translate-y-1">
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: The Box (Map or Form placeholder) */}
        <div className="w-full aspect-square lg:aspect-auto lg:h-[60vh] bg-zinc-900/50 border border-white/5 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
           <div className="w-full h-full bg-gradient-to-br from-zinc-800/50 to-black flex items-center justify-center">
              <p className="uppercase tracking-[1em] text-zinc-700 text-xs rotate-90 lg:rotate-0">Direct Message Area</p>
           </div>
        </div>

      </div>
    </main>
  );
}