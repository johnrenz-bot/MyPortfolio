"use client";

import { motion } from "framer-motion";
import styles from "./RevealText.module.css";

interface RevealTextProps {
  text: string;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}

export function RevealText({
  text,
  delay = 0,
  className = "",
  as: Component = "span",
}: RevealTextProps) {
  const words = text.split(" ").map(word => `${word}\u00A0`);

  return (
    <Component className={`${styles.inlineBlock} ${className}`}>
      {words.map((word, i) => (
        <span key={i} className={styles.wordContainer}>
          <motion.span
            className={styles.inlineBlock}
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
