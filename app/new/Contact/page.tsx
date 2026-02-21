"use client";

import Link from "next/link";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaFacebook,
    FaThreads,
    FaRedditAlien,
    FaXTwitter,
} from "react-icons/fa6";
import { SiGlassdoor } from "react-icons/si";
import { motion, Variants } from "framer-motion";

export default function Contact() {
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
                    <img src="/Image/Vector.png" alt="John Renz Logo" className="h-[5vh] object-contain" />
                </motion.div>

                <div className="w-[90%] flex justify-evenly items-center text-2xl font-semibold gap-8">
                    {["Home", "About"].map((item, i) => (
                        <motion.div
                            key={item}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                        >
                            <Link
                                href={item === "About" ? "/new/Aboutme" : "/new"}
                                className={item === "About" ? "hover:text-gray-400 transition" : "hover:text-gray-400 transition"}
                            >
                                {item}
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

                    {["Projects", "Contact"].map((item, i) => (
                        <motion.div
                            key={item}
                            custom={i + 2}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                        >
                            <Link
                                href={item === "Contact" ? "/new/Contact" : "/new/Projects"}
                                className={item === "Contact" ? "text-red-500" : "hover:text-gray-400 transition"}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </nav>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
            >
                <motion.div className="flex flex-col gap-10" variants={fadeUpVariants}>
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-zinc-800 -skew-x-12 transform translate-x-4 opacity-50"></div>
                        <h1 className="relative text-8xl font-black italic tracking-tighter border-l-8 border-red-600 pl-6">
                            CONTACT
                        </h1>
                    </div>

                    <div className="space-y-8">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold tracking-widest text-white">Let's Connect</h3>
                            <p className="normal-case font-serif text-lg text-zinc-400 max-w-md italic">
                                Open to opportunities, collaborations, and meaningful conversations. Feel free to reach out anytime.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <h3 className="text-xs font-black tracking-[0.3em] text-zinc-500">CONTACT DETAILS</h3>
                            <div className="space-y-4">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-600 font-bold">ADDRESS</span>
                                    <span className="text-lg normal-case font-serif">{PERSONAL.address}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-600 font-bold">PHONE</span>
                                    <span className="text-lg tracking-widest">{PERSONAL.phone}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-600 font-bold">EMAIL</span>
                                    <a
                                        href={`mailto:${PERSONAL.email}`}
                                        className="text-lg normal-case font-serif text-zinc-300 hover:text-white underline decoration-zinc-700"
                                    >
                                        {PERSONAL.email}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="relative h-[40vh] bg-zinc-900/40 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl overflow-hidden"
                    variants={fadeUpVariants}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent"></div>
                    <div className="relative z-10 h-full flex flex-col justify-center items-center">
                        <h3 className="text-lg font-bold tracking-widest text-zinc-400 mb-10">
                            SOCIAL NETWORKS
                        </h3>
                        <div className="grid grid-cols-4 gap-6">
                            {socials.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-14 h-14 flex items-center justify-center bg-zinc-900 border border-white/10 rounded-xl text-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-110 hover:shadow-xl"
                                    title={social.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </main>
    );
}
