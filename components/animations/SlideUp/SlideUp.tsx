"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from "./SlideUp.module.css";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
}: SlideUpProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
