"use client";

import { useState, useEffect } from "react";
import { HERO_DATA } from "../../../data/hero";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { MagneticButton } from "../../animations/MagneticButton/MagneticButton";
import { RevealText } from "../../animations/RevealText/RevealText";
import { ScrollIndicator } from "../../animations/ScrollIndicator/ScrollIndicator";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import { StatBlock } from "../../ui/StatBlock/StatBlock";

const ROLES = [
  "Software Engineer",
  "Frontend Developer",
  "UI/UX Designer"
];

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="main" className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn delay={0.1}>
            <div className={styles.badgeWrapper}>
              <div className={styles.badge}>
                <span className={styles.pulseDot} />
                <span className={styles.badgeText}>Available for new opportunities</span>
              </div>
            </div>
          </FadeIn>

          <h1 className={styles.title}>
            <RevealText text="John Renz" className={styles.nameLine} />
            <br />
            <RevealText text="Bandianon" delay={0.2} className={styles.nameLine} />
          </h1>

          <div className={styles.roleContainer}>
            <span className={styles.rolePrefix}>I'm a </span>
            <div className={styles.roleCarousel}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className={styles.roleText}
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <FadeIn delay={0.6}>
            <p className={styles.bio}>{HERO_DATA.bio}</p>
          </FadeIn>

          <FadeIn delay={0.8} className={styles.actions}>
            <MagneticButton href={HERO_DATA.resume} variant="primary">
              Download Resume
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="secondary">
              View Projects
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              Contact Me
            </MagneticButton>
          </FadeIn>

          <div className={styles.statsRow}>
            <StatBlock end={2} suffix="+" label="Years Experience" delay={1.0} />
            <StatBlock end={20} suffix="+" label="Projects Completed" delay={1.1} />
            <StatBlock end={5} suffix="+" label="Awards Won" delay={1.2} />
          </div>
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
}
