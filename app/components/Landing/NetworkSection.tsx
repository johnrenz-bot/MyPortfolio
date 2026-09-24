"use client";

import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaThreads,
  FaRedditAlien,
  FaXTwitter,
  FaGoogle,
} from "react-icons/fa6";
import { SiGlassdoor, SiInteractiondesignfoundation } from "react-icons/si";

const SOCIALS = [
  {
    icon: <FaGoogle />,
    url: "https://gdg.community.dev/u/m5ucyf/#/about",
    label: "GDG",
    image: "/Image/profiles/gdg.png",
  },
  {
    icon: <SiInteractiondesignfoundation />,
    url: "https://ixdf.org/my-private-profile",
    label: "IxDF",
    image: "/Image/profiles/ixdf.png",
  },
  {
    icon: <FaGithub />,
    url: "https://github.com/johnrenz-bot",
    label: "GitHub",
    image: "/Image/profiles/Github.png",
  },
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/john-renz-96a77728b/",
    label: "LinkedIn",
    image: "/Image/profiles/linkedin.png",
  },
  {
    icon: <SiGlassdoor />,
    url: "https://www.glassdoor.com/member/profile",
    label: "Glassdoor",
    image: "/Image/profiles/Glassdoor.png",
  },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/wiieidjxhdshehe/",
    label: "Instagram",
    image: "/Image/profiles/instagram.png",
  },
  {
    icon: <FaThreads />,
    url: "https://www.threads.net/@wiieidjxhdshehe",
    label: "Threads",
    image: "/Image/profiles/threads.png",
  },
  {
    icon: <FaXTwitter />,
    url: "https://x.com/JohnRen94949414/",
    label: "Twitter",
    image: "/Image/profiles/X.png",
  },
  {
    icon: <FaRedditAlien />,
    url: "https://www.reddit.com/user/Aware-scratch8897/",
    label: "Reddit",
    image: "/Image/profiles/reddit.png",
  },
  {
    icon: <FaFacebook />,
    url: "https://www.facebook.com/john.r.bandianon/",
    label: "Facebook",
    image: "/Image/profiles/facebook.png",
  },
];

export default function NetworkSection() {
  return (
    <div className="relative w-full bg-[#f9fafb] dark:bg-[#111111] transition-colors duration-300 py-16 sm:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="reveal flex flex-col gap-6 mb-12 sm:mb-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-[1.5px] bg-neutral-900 dark:bg-white" />
              <span className="label-mono text-neutral-500 dark:text-neutral-400">
                Connectivity
              </span>
            </div>
            <span className="label-mono text-neutral-400">
              {SOCIALS.length} Profiles
            </span>
          </div>
          <h2 className="heading-section text-3xl sm:text-4xl lg:text-5xl text-neutral-950 dark:text-white">
            Professional Network & Profiles
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5">
          {SOCIALS.map((s, idx) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal delay-${(idx % 5) + 1} group relative aspect-[4/5] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden block shadow-sm hover:border-neutral-900 dark:hover:border-white transition-all duration-300`}
            >
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={s.image}
                  alt={`${s.label} profile`}
                  fill
                  sizes="(max-width: 640px) 150px, 220px"
                  className="object-cover grayscale opacity-40 dark:opacity-30 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between z-10 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent group-hover:from-neutral-950/80 transition-all duration-300">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/90 dark:bg-neutral-900/90 backdrop-blur border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white text-lg group-hover:bg-neutral-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-neutral-950 transition-colors shadow-sm">
                  {s.icon}
                </div>

                <div className="relative overflow-hidden pt-2">
                  <h3 className="text-xs sm:text-sm font-black text-neutral-900 dark:text-white bg-white/80 dark:bg-neutral-900/80 backdrop-blur border border-neutral-200 dark:border-neutral-700 px-3 py-1.5 rounded uppercase tracking-wider inline-block group-hover:-translate-y-8 transition-transform duration-300">
                    {s.label}
                  </h3>
                  <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                    <span className="text-[10px] font-black uppercase tracking-wider text-white">
                      View Profile
                    </span>
                    <span className="text-white text-xs">↗</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
