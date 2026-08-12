"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import styles from "./ScrollIndicator.module.css";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className={styles.container}
    >
      <span className={styles.label}>
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={styles.iconWrapper}
      >
        <ArrowDown size={14} className={styles.icon} />
      </motion.div>
    </motion.div>
  );
}
