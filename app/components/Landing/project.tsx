"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";

type Item = {
  id: string;
  title: string;
  href: string;
  image: string;
  description: string;
  techStack?: string[];
  github?: string;
  uiTools?: string[];
  category?: string;
  workType?: string;
  featured?: boolean;
  tags?: string[];
};

const WEB_DEVELOPMENT: Item[] = [
  {
    id: "capstone",
    title: "Groove (Capstone Project)",
    href: "/Groove",
    image: "/Image/Groove.png",
    description: "A Bulacan all-in-one performing arts hub with smart chat support and real-time event management.",
    techStack: ["Laravel", "MySQL", "Xampp", "TailwindCSS"],
    github: "https://github.com/johnrenz-bot/groove",
    workType: "web-development",
    featured: true,
    tags: ["Agency"],
  },
];

const WEBSITE_DESIGN: Item[] = [
  {
    id: "w5",
    title: "Kiyoto",
    href: "https://kiyoto.vercel.app/",
    image: "/Image/Kiyoto.png",
    description: "Personal portfolio website with interactive UI and smooth animations throughout.",
    techStack: ["React", "Tailwind", "Next.js"],
    workType: "website-design",
    featured: true,
    tags: ["Design"],
  },
  {
    id: "w2",
    title: "Weeknd Soundtrip",
    href: "https://weeknd-soundtrip.vercel.app/",
    image: "/Image/WeekndSoundtrip.png",
    description: "Interactive music experience inspired by The Weeknd with immersive design.",
    techStack: ["React", "Tailwind", "JavaScript"],
    workType: "website-design",
  },
  {
    id: "w3",
    title: "DinoVerse",
    href: "https://dinoverse-buce.vercel.app/",
    image: "/Image/Dinoverse.png",
    description: "Educational dinosaur exploration web app with interactive learning modules.",
    techStack: ["React", "Next.js", "CSS"],
    workType: "website-design",
  },
  {
    id: "w4",
    title: "EduGuide",
    href: "https://edu-guide-three.vercel.app/",
    image: "/Image/EduGuide.png",
    description: "Educational platform to guide students through interactive courses with progress tracking.",
    techStack: ["React", "Tailwind", "JavaScript"],
    workType: "web-development",
  },
  {
    id: "w6",
    title: "Windbreaker",
    href: "https://windbreaker-7lq1wcy18-johnrenz-bots-projects.vercel.app/",
    image: "/Image/windbreaker.png",
    description: "Digital home for street riders to track progress, connect with crews and share experiences.",
    techStack: ["Next.js", "Tailwind"],
    workType: "web-development",
  },
];

const UI_UX_DESIGNS: Item[] = [
  {
    id: "ui1",
    title: "Reefer",
    href: "/Reefer",
    image: "/Image/UI/Reefer.png",
    uiTools: ["Figma"],
    description: "Modern mobile application interface with intuitive user experience design.",
    category: "UI/UX",
    workType: "ui-ux",
    featured: true,
    tags: ["Design Systems"],
  },
];

const DEVICE_MOCKUPS: Item[] = [
  {
    id: "M1",
    title: "Watch Mockup",
    href: "",
    image: "/Image/Devices/watch.png",
    uiTools: ["Adobe Photoshop"],
    description: "Watch mockup for tech event",
    category: "Mockup",
    workType: "mockup",
  },
  {
    id: "M2",
    title: "iPhone Mockup",
    href: "",
    image: "/Image/Devices/Iphonee.png",
    uiTools: ["Adobe Photoshop"],
    description: "iPhone mockup for tech event",
    category: "Mockup",
    workType: "mockup",
  },
  {
    id: "M3",
    title: "iPhone Display",
    href: "",
    image: "/Image/Devices/Iphone.png",
    uiTools: ["Adobe Photoshop"],
    description: "iPhone mockup for tech event",
    category: "Mockup",
    workType: "mockup",
  },
  {
    id: "M4",
    title: "iPhone Pro",
    href: "",
    image: "/Image/Devices/Iphone1.png",
    uiTools: ["Adobe Photoshop"],
    description: "iPhone mockup for tech event",
    category: "Mockup",
    workType: "mockup",
  },
  {
    id: "M5",
    title: "iPhone Max",
    href: "",
    image: "/Image/Devices/Iphone2.png",
    uiTools: ["Adobe Photoshop"],
    description: "iPhone mockup for tech event",
    category: "Mockup",
    workType: "mockup",
  },
];

const POSTERS: Item[] = [
  {
    id: "Tech1",
    title: "WATCH mockup Poster",
    href: "",
    image: "/Image/tech/tech1.png",
    uiTools: ["Canva"],
    description: "Watch mockup poster for tech event",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "Tech2",
    title: "iPhone mockup Poster",
    href: "",
    image: "/Image/tech/tech2.png",
    uiTools: ["Canva"],
    description: "iPhone mockup poster for tech event",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "Tech3",
    title: "iPhone mockup Poster",
    href: "",
    image: "/Image/tech/tech3.png",
    uiTools: ["Canva"],
    description: "iPhone mockup poster for tech event",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "Tech4",
    title: "iPhone mockup Poster",
    href: "",
    image: "/Image/tech/tech4.png",
    uiTools: ["Canva"],
    description: "iPhone mockup poster for tech event",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "Tech5",
    title: "iPhone mockup Poster",
    href: "",
    image: "/Image/tech/tech5.png",
    uiTools: ["Canva"],
    description: "iPhone mockup poster for tech event",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM1",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM1.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM2",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM2.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM3",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM3.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM4",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM4.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM5",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM5.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM6",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM6.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "STEM7",
    title: "TECH EVENT mockup Poster",
    href: "",
    image: "/Image/tech/STEM7.png",
    uiTools: ["Canva"],
    description: "Tech event mockup poster",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "cv1",
    title: "The Price of Sugar",
    href: "",
    image: "/Image/UI/1.jpg",
    uiTools: ["Canva"],
    description: "Graphic design poster exploring visual storytelling.",
    category: "Poster",
    workType: "poster",
  },
  {
    id: "ps3",
    title: "GA design poster",
    href: "",
    image: "/Image/UI/poster.png",
    uiTools: ["Photoshop"],
    description: "Graphic design poster for new arrival campaign.",
    category: "Poster",
    workType: "poster",
  },
];

const MERCHANDISE_DESIGNS: Item[] = [
  {
    id: "ps4",
    title: "Alien Shirt",
    href: "",
    image: "/Image/UI/alien.png",
    uiTools: ["Photoshop"],
    description: "Custom T-shirt design featuring Reefer branding.",
    category: "Merchandise",
    workType: "merchandise",
  },
  {
    id: "ps5",
    title: "Chest Shirt",
    href: "",
    image: "/Image/UI/11.png",
    uiTools: ["Photoshop"],
    description: "Alternate colorway shirt design for streetwear collection.",
    category: "Merchandise",
    workType: "merchandise",
  },
  {
    id: "ps6",
    title: "Devine Outcast Shirt",
    href: "",
    image: "/Image/UI/12.png",
    uiTools: ["Photoshop"],
    description: "Custom T-shirt design with artistic expression.",
    category: "Merchandise",
    workType: "merchandise",
  },
  {
    id: "ps7",
    title: "Visionless Shirt",
    href: "",
    image: "/Image/UI/13.png",
    uiTools: ["Photoshop"],
    description: "Alternate colorway shirt design for brand identity.",
    category: "Merchandise",
    workType: "merchandise",
  },
  {
    id: "ps8",
    title: "Last hope Shirt",
    href: "",
    image: "/Image/UI/14.png",
    uiTools: ["Photoshop"],
    description: "Custom T-shirt design with meaningful message.",
    category: "Merchandise",
    workType: "merchandise",
  },
  {
    id: "ps9",
    title: "hiphop Shirt",
    href: "",
    image: "/Image/UI/15.png",
    uiTools: ["Photoshop"],
    description: "Custom T-shirt design for music culture enthusiasts.",
    category: "Merchandise",
    workType: "merchandise",
  },
  {
    id: "ps10",
    title: "hiphop Shirt Alt",
    href: "",
    image: "/Image/UI/Cmytk.png",
    uiTools: ["Photoshop"],
    description: "Alternative design for hip-hop inspired collection.",
    category: "Merchandise",
    workType: "merchandise",
  },
];

const GRAPHIC_DESIGNS: Item[] = [
  {
    id: "ps1",
    title: "McLaren",
    href: "",
    image: "/Image/UI/7.png",
    uiTools: ["Photoshop"],
    description: "McLaren-inspired luxury automotive branding concept showcasing high-performance visual identity design.",
    category: "Graphic Design",
    workType: "graphic-design",
    featured: true,
    tags: ["Branding"],
  },
  {
    id: "ps2",
    title: "Me GA",
    href: "",
    image: "/Image/UI/8.png",
    uiTools: ["Photoshop"],
    description: "Experimental McLaren variation exploring alternative automotive branding composition and visual direction.",
    category: "Graphic Design",
    workType: "graphic-design",
  },
  {
    id: "cv3",
    title: "Weeknd UI Concept",
    href: "",
    image: "/Image/UI/3.jpg",
    uiTools: ["Canva"],
    description: "The Weeknd-inspired UI concept focused on moody aesthetics, atmospheric tone, and expressive visual storytelling.",
    category: "Graphic Design",
    workType: "graphic-design",
  },
  {
    id: "dm1",
    title: "Reefer Hoodie",
    href: "",
    image: "/Image/UI/4.png",
    uiTools: ["Figma"],
    description: "Reefer hoodie product concept design featuring a clean, modern layout for apparel presentation.",
    category: "Graphic Design",
    workType: "graphic-design",
  },
  {
    id: "dm2",
    title: "Fliptop Poster",
    href: "",
    image: "/Image/UI/5.jpg",
    uiTools: ["Figma"],
    description: "FlipTop event poster design emphasizing bold typography and strong visual hierarchy for digital display.",
    category: "Graphic Design",
    workType: "graphic-design",
  },
  {
    id: "dm3",
    title: "UI Mazda Figma",
    href: "",
    image: "/Image/UI/6.png",
    uiTools: ["Figma"],
    description: "Mazda-inspired automotive dashboard UI concept with a sleek, modern, and user-focused interface design.",
    category: "Graphic Design",
    workType: "graphic-design",
  },
  {
    id: "cv2",
    title: "Clay Cuneiform Tables",
    href: "",
    image: "/Image/UI/2.jpg",
    uiTools: ["Canva"],
    description: "Informational graphic design piece with historical significance.",
    category: "Poster",
    workType: "poster",
  },
];

const CERTS: Item[] = [
  {
    id: "c1",
    title: "Google UX Certification",
    href: "/Image/Certificate/GoogleUX.jpg",
    image: "/Image/Certificate/GoogleUX.jpg",
    description:
      "Google UX Design Certification focused on user research, wireframing, prototyping, and usability testing in real-world product design workflows.",
  },
  {
    id: "c2",
    title: "DICT UI/UX Certification",
    href: "/Image/Certificate/DICT-UIUX.jpg",
    image: "/Image/Certificate/DICT-UIUX.jpg",
    description:
      "DICT UI/UX Design Certification covering core principles of interface design, user experience workflows, and practical application of design thinking methodologies.",
  },
  {
    id: "c9",
    title: "Alpha Centauri Certification",
    href: "https://www.alphacentauri.ph/certification",
    image: "/Image/Certificate/Alpha.jpg",
    description:
      "UI/UX design internship certification demonstrating hands-on experience in interface design, user experience principles, and applied design execution in a real-world project environment.",
  },
  {
    id: "c7",
    title: "BoxHive Certification",
    href: "https://www.boxhive.com/certification",
    image: "/Image/Certificate/BoxHive.png",
    description:
      "Internship certification from BoxHive Digital Solutions Co., involving UI/UX design, graphic design (mockups and event posters), software testing, and technical documentation for a mobile application project.",
  },
  {
    id: "c3",
    title: "Canva Graphic Design Certificate",
    href: "https://www.canva.com/design-school/certification-award/198b01d5-617f-440d-b42e-453aedc794df",
    image: "/Image/Certificate/Canva.png",
    description:
      "Certification demonstrating proficiency in graphic design using Canva, including layout composition, branding, and visual communication principles.",
  },
  {
    id: "c8",
    title: "IxDF Membership Certificate",
    href: "https://ixdf.org/members/john-renz-bandianon/certificate/membership",
    image: "/Image/Certificate/IxDF.jpg",
    description:
      "Official membership from the Interaction Design Foundation (IxDF), recognizing active participation in the global UX/UI and interaction design community.",
  },
  {
    id: "c4",
    title: "Accenture – Skills to Succeed",
    href: "/Image/Certificate/S2.jpg",
    image: "/Image/Certificate/S2.jpg",
    description:
      "Professional development certification focused on workplace readiness, communication skills, and foundational career competencies.",
  },
  {
    id: "c5",
    title: "Java Programming Certificate",
    href: "/Image/Certificate/java.jpg",
    image: "/Image/Certificate/java.jpg",
    description:
      "Certification covering Java programming fundamentals including object-oriented programming, syntax, and basic application development.",
  },
  {
    id: "c6",
    title: "Oracle Certified",
    href: "/Image/Certificate/oracle.jpg",
    image: "/Image/Certificate/oracle.jpg",
    description:
      "Certification in Oracle database fundamentals, including data management, SQL queries, and database structure operations.",
  },
];

const WORK_CATEGORIES = [
   {
    key: "certificates",
    label: "Certificates",
    sub: "Creds",
    count: CERTS.length,
    featured: CERTS[0],
  },
   {
    key: "web-dev",
    label: "Development",
    sub: "Full-stack",
    count: WEB_DEVELOPMENT.length,
    featured: WEB_DEVELOPMENT[0],
  },

  {
    key: "ui-ux",
    label: "UI/UX",
    sub: "Design",
    count: UI_UX_DESIGNS.length,
    featured: UI_UX_DESIGNS[0],
  },

  {
    key: "website-design",
    label: "Frontend Design",
    sub: "UI/UX",
    count: WEBSITE_DESIGN.length,
    featured: WEBSITE_DESIGN[0],
  },
  
  {
    key: "mockups",
    label: "Mockups",
    sub: "Devices",
    count: DEVICE_MOCKUPS.length,
    featured: DEVICE_MOCKUPS[0],
  },
  {
    key: "posters",
    label: "Posters",
    sub: "Marketing",
    count: POSTERS.length,
    featured: POSTERS[0],
  },
  {
    key: "merchandise",
    label: "Merch",
    sub: "Fashion",
    count: MERCHANDISE_DESIGNS.length,
    featured: MERCHANDISE_DESIGNS[0],
  },
  {
    key: "graphic-design",
    label: "Graphics",
    sub: "Design",
    count: GRAPHIC_DESIGNS.length,
    featured: GRAPHIC_DESIGNS[0],
  },
] as const;

type Category = (typeof WORK_CATEGORIES)[number];
type CategoryKey = Category["key"];

function CategoryCard({ category, isActive, onClick }: { category: Category; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative flex-shrink-0 w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[420px] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-900/20"
    >
      <Image
        src={category.featured.image}
        alt={category.label}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        priority={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-white/20 to-transparent transition-all duration-500" />
      {isActive && (
        <div className="absolute inset-0 border-2 border-gray-900/30 rounded-2xl md:rounded-3xl shadow-lg shadow-gray-900/5" />
      )}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-white/98 via-transparent to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex justify-end">
          <div className="px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-900/10 text-gray-900 text-xs font-semibold">
            {String(category.count).padStart(2, "0")} Projects
          </div>
        </div>
        <div className="space-y-3">
          <div className="flex items-end gap-3">
            <div className="w-1 h-10 md:h-12 bg-gradient-to-t from-gray-900 to-gray-900/40 rounded-full" />
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 tracking-wide leading-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
              {category.label}
            </h3>
          </div>
          <p className="text-gray-700 text-xs md:text-sm ml-4 md:ml-5 tracking-wide font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
            {category.sub} • Explore
          </p>
        </div>
      </div>
      <div className="absolute top-5 md:top-6 right-5 md:right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/50 backdrop-blur-md border border-gray-900/10 flex items-center justify-center">
          <MdArrowOutward className="w-4 h-4 md:w-5 md:h-5 text-gray-900" />
        </div>
      </div>
    </button>
  );
}

function ProjectGrid({ items, onSelectProject }: { items: Item[]; onSelectProject: (item: Item) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
      {items.map((item, index) => (
        <button
          key={item.id}
          onClick={() => onSelectProject(item)}
          className="group relative h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-gray-900/20 bg-white border border-gray-100 animate-in fade-in slide-in-from-bottom-4"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-transparent group-hover:from-white/90 group-hover:via-white/20 transition-all duration-700" />
          <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
            <div className="flex justify-end">
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-2 group-hover:translate-y-0 px-2.5 py-1 rounded-full bg-white/40 backdrop-blur-md border border-gray-900/10">
                <span className="text-gray-900 text-xs uppercase tracking-wide font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  View
                </span>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight text-left opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm line-clamp-2 text-left opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 delay-75" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item.description}
              </p>
              <div className="flex items-center gap-2 text-gray-900 text-xs md:text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0 delay-100">
                <span className="text-gray-600">View Details</span>
                <RxArrowRight className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Item; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl flex flex-col items-center my-6 md:my-10 animate-in zoom-in-95 slide-in-from-bottom-8 duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-3xl overflow-hidden border border-gray-200/60 shadow-2xl bg-white flex items-center justify-center animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ maxHeight: "70vh" }}>
          <Image
            src={project.image}
            alt={project.title}
            width={1400}
            height={900}
            className="object-contain w-auto h-auto max-h-[70vh] max-w-full"
            priority
          />
        </div>

        <div className="mt-10 md:mt-14 flex flex-col items-center text-center space-y-8 md:space-y-10 max-w-4xl w-full px-4">
          <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {project.title}
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-gray-900/60 to-transparent rounded-full mx-auto mt-3 animate-in scale-x-0 origin-left duration-700 delay-200" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto animate-in fade-in duration-700 delay-300" style={{ fontFamily: "'Inter', sans-serif" }}>
              {project.description}
            </p>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-in scale-x-0 origin-right duration-700 delay-300" />

          {(project.techStack || project.uiTools) && (
            <div className="w-full space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                Technologies & Tools
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                {(project.techStack || project.uiTools)?.map((tech, index) => (
                  <span
                    key={tech}
                    className="text-xs sm:text-sm px-3 md:px-4 py-2 bg-gray-100 rounded-lg border border-gray-200 text-gray-700 font-medium hover:bg-gray-200 hover:border-gray-300 transition-all duration-300 transform hover:scale-105 animate-in fade-in zoom-in-75 duration-500"
                    style={{ animationDelay: `${400 + index * 50}ms`, fontFamily: "'Inter', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 pt-6 md:pt-8 w-full justify-center flex-wrap animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            {project.href && project.href.startsWith("http") && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-gray-300 bg-white text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-500 transform hover:scale-105"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Visit Project
                <MdArrowOutward className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </a>
            )}
            {project.href && !project.href.startsWith("http") && (
              <Link
                href={project.href}
                className="group/btn inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-gray-300 bg-white text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-500 transform hover:scale-105"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View Project
                <MdArrowOutward className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </Link>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-gray-300 bg-white text-xs sm:text-sm font-semibold tracking-wide uppercase text-gray-900 hover:bg-gray-50 hover:border-gray-400 transition-all duration-500 transform hover:scale-105"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View Code
                <SiGithub className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryView({ category, onBack }: { category: Category; onBack: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Item | null>(null);

  const getItems = (): Item[] => {
    const map: Record<CategoryKey, Item[]> = {
      "web-dev": WEB_DEVELOPMENT,
      "website-design": WEBSITE_DESIGN,
      "ui-ux": UI_UX_DESIGNS,
      mockups: DEVICE_MOCKUPS,
      posters: POSTERS,
      merchandise: MERCHANDISE_DESIGNS,
      "graphic-design": GRAPHIC_DESIGNS,
      certificates: CERTS,
    };
    return map[category.key];
  };

  const items = getItems();

  return (
    <>
      <div className="space-y-10 md:space-y-12 lg:space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 md:gap-6 animate-in fade-in duration-700">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 hover:border-gray-300 text-gray-900 transition-all duration-500 transform hover:scale-105 text-xs md:text-sm font-semibold"
            >
              <RxArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back
            </button>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {category.label}
              </h1>
              <p className="text-gray-500 text-xs md:text-sm mt-1.5 tracking-wider uppercase font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                {category.sub} • {items.length} Projects
              </p>
            </div>
          </div>

          <div className="space-y-2 animate-in fade-in slide-in-from-left-8 duration-700 delay-100">
            <p className="text-xs md:text-sm font-semibold tracking-widest uppercase text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
              Selected Works
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-gray-900/60 to-transparent rounded-full" />
          </div>
        </div>

        {items.length > 0 ? (
          <div className="animate-in fade-in duration-1000 delay-200">
            <ProjectGrid items={items} onSelectProject={setSelectedProject} />
          </div>
        ) : (
          <div className="text-center py-20 md:py-28 animate-in fade-in duration-700">
            <p className="text-gray-500 text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              No projects in this category
            </p>
          </div>
        )}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </>
  );
}

export default function PortfolioSection() {
  const [view, setView] = useState<"categories" | "projects">("categories");
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("web-dev");
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCategoryClick = (key: CategoryKey) => {
    setSelectedCategory(key);
    setView("projects");
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const currentCategory = WORK_CATEGORIES.find((c) => c.key === selectedCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        
        .category-scroll {
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        .category-scroll > * {
          scroll-snap-align: start;
        }
        
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .delay-75 {
          animation-delay: 75ms;
        }

        .delay-100 {
          animation-delay: 100ms;
        }

        .delay-200 {
          animation-delay: 200ms;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>

  <section className="relative z-10 w-full flex justify-center py-20 md:py-32 bg-white text-neutral-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(243,244,246,1),transparent_50%)] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 relative z-10">
        {view === "categories" ? (
          <div className="space-y-20 md:space-y-28 lg:space-y-36 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-4 animate-in fade-in slide-in-from-left-8 duration-700">
                <span className="w-12 h-[2px] bg-neutral-950" />
                <span
                  className="text-xs font-bold tracking-[0.5em] uppercase text-neutral-400"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Portfolio Collection
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="space-y-3 lg:col-span-7">
                  <h1
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-neutral-950 tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    User-Centered
                  </h1>
                  <h2
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neutral-950 via-neutral-800 to-neutral-500 tracking-tighter leading-[0.95] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Design & Code
                  </h2>
                </div>

                <div className="space-y-5 lg:col-span-5 lg:pl-4">
                  <h3
                    className="text-xs text-neutral-450 tracking-[0.25em] uppercase font-bold animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Creative Work Across Multiple Disciplines
                  </h3>
                  <p
                    className="text-neutral-500 text-sm sm:text-base leading-relaxed font-normal animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Explore a curated collection of my creative portfolio. Each
                    category represents a unique approach to design and
                    development, showcasing excellence in web development, UI/UX
                    design, graphic design, and creative direction. Discover
                    projects that combine aesthetic appeal with functional
                    excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] group/slider animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hidden md:flex items-center justify-start pl-16">
                <button
                  onClick={() => scroll("left")}
                  className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-neutral-950/10 hover:bg-neutral-950 text-neutral-950 hover:text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-500 border border-neutral-950/15"
                  aria-label="Scroll left"
                >
                  <RxArrowLeft className="w-6 h-6" />
                </button>
              </div>

              <div
                ref={scrollContainerRef}
                className="flex w-full gap-8 md:gap-10 overflow-x-auto no-scrollbar py-12 scroll-smooth snap-x snap-mandatory px-[max(1rem,calc((100vw-80rem)/2+2.5rem))]"
              >
                {WORK_CATEGORIES.map((cat, index) => (
                  <div
                    key={cat.key}
                    className="flex-shrink-0 snap-start animate-in fade-in slide-in-from-bottom-8 duration-700 hover:translate-y-[-8px] transition-transform duration-500"
                    style={{ animationDelay: `${500 + index * 75}ms` }}
                  >
                    <div className="p-1 rounded-3xl bg-gradient-to-b from-neutral-200/60 to-transparent shadow-[0_12px_40px_-12px_rgba(0,0,0,0.05)] backdrop-blur-md">
                      <CategoryCard
                        category={cat}
                        isActive={cat.key === selectedCategory}
                        onClick={() => handleCategoryClick(cat.key)}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-all duration-500 hidden md:flex items-center justify-end pr-16">
                <button
                  onClick={() => scroll("right")}
                  className="pointer-events-auto w-14 h-14 flex items-center justify-center rounded-full bg-neutral-950/10 hover:bg-neutral-950 text-neutral-950 hover:text-white shadow-[0_8px_32px_0_rgba(0,0,0,0.08)] backdrop-blur-xl hover:scale-105 active:scale-95 transition-all duration-500 border border-neutral-950/15"
                  aria-label="Scroll right"
                >
                  <RxArrowRight className="w-6 h-6" />
                </button>
              </div>

              <div className="flex md:hidden items-center justify-center gap-3 mt-4 opacity-100 animate-in fade-in duration-700 delay-700">
                {WORK_CATEGORIES.map((cat) => (
                  <span
                    key={`dot-${cat.key}`}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                      cat.key === selectedCategory
                        ? "w-12 bg-neutral-950"
                        : "w-2 bg-neutral-200 hover:bg-neutral-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 animate-in fade-in duration-700 delay-700">
              <p
                className="text-neutral-400 text-xs tracking-[0.25em] uppercase font-bold"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {WORK_CATEGORIES.length} Categories •{" "}
                {WORK_CATEGORIES.reduce((sum, cat) => sum + cat.count, 0)} Total
                Projects
              </p>
              <span className="text-[10px] uppercase tracking-[0.3em] font-black text-neutral-300 pointer-events-none select-none hidden sm:block">
                © 2026 Studio
              </span>
            </div>
          </div>
        ) : (
          currentCategory && (
            <CategoryView
              category={currentCategory}
              onBack={() => setView("categories")}
            />
          )
        )}
      </div>
    </section>
    </>
  );
}