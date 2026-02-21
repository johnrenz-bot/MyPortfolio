"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function New() {
    const navItems = [
        { name: "Home", path: "/new" },
        { name: "About", path: "/new/Aboutme" },
        { name: "Projects", path: "/new/Projects" },
        { name: "Contact", path: "/new/Contact" },
    ];

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    const scaleIn: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
    };

    const navItemVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
        }),
    };

    const handleDownloadCV = () => {
        const link = document.createElement("a");
        link.href = "/resume/CV.pdf";
        link.download = "John_Renz_Bandianon_CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <main className="relative min-h-screen w-full bg-black text-white overflow-hidden font-sans uppercase">
            <div className="fixed inset-0 flex flex-col justify-center items-center pointer-events-none select-none z-0 opacity-10">
                <h2 className="text-[15vw] font-black tracking-tighter text-gray-500">JOHN RENZ</h2>
                <h2 className="text-[18vw] font-black tracking-tighter text-gray-600 -mt-10">BANDANON</h2>
            </div>

            <nav className="relative z-20 w-full flex justify-center items-center py-6 mb-20">
                <div className="w-[10%] flex justify-center">
                    <img src="/Image/Vector.png" alt="John Renz Logo" className="h-[5vh] object-contain" />
                </div>
                <div className="w-[90%] flex justify-evenly items-center text-2xl font-semibold gap-8">
                    {navItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={navItemVariants}
                        >
                            <Link
                                href={item.path}
                                className={item.name === "Home" ? "text-red-500" : "hover:text-gray-400 transition"}
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </nav>

            <div className="absolute inset-0 z-0 flex justify-center items-end">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px]" />
                <motion.img
                    src="/Image/general.png"
                    alt="John Renz"
                    className="relative z-10 h-[90vh] object-contain"
                    initial="hidden"
                    animate="visible"
                    variants={scaleIn}
                />
            </div>

            <div className="absolute inset-0 z-20 flex  justify-center px-12 pointer-events-none">
                <motion.div
                    className="absolute left-12 bottom-32 pointer-events-auto flex flex-col flex items-center gap-4"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >

                    <button
                        onClick={handleDownloadCV}
                        className="group relative px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 skew-x-[-20deg] hover:bg-white hover:text-black transition-all duration-300"
                    >
                        <span className="block skew-x-[20deg] font-bold tracking-widest text-sm">
                            DOWNLOAD CV
                        </span>
                    </button>

                    <Link href="/">
                        <motion.div
                            className="w-40 h-16 bg-white/10 backdrop-blur-md rounded-lg flex justify-center items-center overflow-hidden border border-white/20 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                        >
                            <img
                                src="/Image/page1.png"
                                alt="Avatar"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </Link>
                </motion.div>

                <motion.div
                    className="absolute right-12 bottom-32 text-right space-y-4 pointer-events-none"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.2 } },
                    }}
                >
                    <motion.div variants={fadeInUp}>
                        <h3 className="text-5xl font-black leading-tight text-gray-300">WEB</h3>
                        <h3 className="text-5xl font-black leading-tight">PROGRAMMER</h3>
                        <h3 className="text-5xl font-black leading-tight text-gray-400">& DESIGNER</h3>
                    </motion.div>

                    <motion.div
                        className="inline-block bg-white/10 backdrop-blur-md px-6 py-2 border-r-4 border-red-600 skew-x-[-20deg]"
                        variants={fadeInUp}
                    >
                        <p className="skew-x-[10deg] font-bold tracking-tighter text-2xl">
                            UI UX DESIGN
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
