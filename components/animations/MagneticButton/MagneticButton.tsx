"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import Link from "next/link";
import styles from "./MagneticButton.module.css";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
}

export function MagneticButton({
  children,
  href,
  className = "",
  onClick,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantClass = styles[variant] || styles.primary;

  const inner = (
    <motion.div
      className={`${styles.button} ${variantClass} ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={styles.container}
      onClick={onClick}
    >
      {href ? (
        <Link href={href}>{inner}</Link>
      ) : (
        inner
      )}
    </div>
  );
}
