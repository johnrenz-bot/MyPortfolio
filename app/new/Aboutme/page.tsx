"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Aboutme() {
  const navItems = [
    { name: "Home", path: "/new" },
    { name: "About", path: "/new/Aboutme" },
    { name: "Projects", path: "/new/Projects" },
    { name: "Contact", path: "/new/Contact" },
  ];

  const backgroundTextVariants: Variants = {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 0.1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  const logoVariants: Variants = {
    hidden: { opacity: 0, y: -50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" } }),
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans uppercase">

      <motion.div
        className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0"
        initial="hidden"
        animate="visible"
        variants={backgroundTextVariants}
      >
        <h2 className="text-[15vw] font-black tracking-tighter text-gray-500">JOHN RENZ</h2>
        <h2 className="text-[18vw] font-black tracking-tighter text-gray-600 -mt-10">BANDANON</h2>
      </motion.div>

      <nav className="relative z-20 w-full flex justify-center items-center py-6 mb-20">
        <motion.div
          className="w-[10%] flex justify-center"
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <img src="/Image/vector.png" alt="John Renz Logo" className="h-[5vh] object-contain" />
        </motion.div>

        <div className="w-[90%] flex justify-evenly items-center text-2xl font-semibold gap-8">
          {navItems.slice(0, 2).map((item, i) => (
            <motion.div
              key={item.name}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link href={item.path} className={item.name === "About" ? "text-red-500" : "hover:text-gray-400 transition"}>
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            className="w-16 h-16 rounded-xl border-2 border-zinc-500 overflow-hidden bg-zinc-900 mt-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src="/Image/general.png" alt="profile" className="w-full h-full object-cover" />
          </motion.div>

          {navItems.slice(2).map((item, i) => (
            <motion.div
              key={item.name}
              custom={i + 2}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <Link href={item.path} className="hover:text-gray-400 transition">{item.name}</Link>
            </motion.div>
          ))}
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start justify-center">

        <motion.section
          className="flex-1 flex flex-col gap-10 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div variants={fadeUpVariants}>
            <div className="inline-block bg-zinc-700/30 backdrop-blur-lg px-8 py-3 rounded-lg border-l-8 border-red-600 shadow-lg">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white uppercase">About Me</h2>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <div className="space-y-6 text-gray-300">
              <p className="text-xl md:text-2xl font-bold text-white leading-tight">Programmer & UI/UX Designer</p>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                I'm an IT student with a strong interest in frontend web development and UI/UX Design. I enjoy creating clean, responsive, and user-friendly interfaces, focusing on both functionality and visual design to deliver a good user experience.
              </p>
              <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
                I am currently strengthening my skills through academic projects such as my Capstone and individual builds, which help improve my problem-solving and development workflow. While my main focus is frontend development, I also have basic experience with backend concepts and am eager to learn more through hands-on experience as an IT intern.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          className="flex-1 flex flex-col gap-12 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <motion.div variants={fadeUpVariants}>
            <div className="space-y-6">
              <div className="inline-block bg-zinc-700/30 backdrop-blur-lg px-8 py-2 rounded-lg border-l-8 border-red-600 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Academics</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-white font-bold text-lg">STI College San Jose Del Monte</h3>
                  <p className="text-md">Bachelor of Science in Information Technology</p>
                  <p className="text-sm text-gray-500 font-bold">2022 - Present</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Prenza National Senior High School</h3>
                  <p className="text-md">Vocational / Technical</p>
                  <p className="text-sm text-gray-500 font-bold">2020 - 2022</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUpVariants}>
            <div className="space-y-6">
              <div className="inline-block bg-zinc-700/30 backdrop-blur-lg px-8 py-2 rounded-lg border-l-8 border-red-600 shadow-lg">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white uppercase">Experience</h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">Capstone Project</h3>
                  <p className="text-sm">STI San Jose Del Monte • Lead Developer</p>
                  <p className="text-sm">Full-stack development for performing arts hub.</p>
                  <p className="text-sm text-gray-500 font-bold">2024 - 2025</p>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg uppercase">First Code Experience</h3>
                  <p className="text-sm italic">The Beginning</p>
                  <p className="text-sm">Wrote my first line of code and discovered my passion for building web apps.</p>
                  <p className="text-sm text-gray-500 font-bold">2022</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

      </div>
    </main>
  );
}