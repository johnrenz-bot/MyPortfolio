"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PortfolioLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut", delay: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1], // premium ease curve
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            src="/logo.png"
            alt="JR Logo"
            width={120}
            height={120}
            className="object-contain filter contrast-125"
            priority
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
