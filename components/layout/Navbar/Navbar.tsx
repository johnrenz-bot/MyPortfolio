"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND } from "../../../constants/brand";
import { NAVIGATION } from "../../../constants/navigation";
import { NavButton } from "../../ui/NavButton/NavButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Navbar.module.css";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("main");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Simple scroll spy logic
      const sections = NAVIGATION.map(n => n.href.substring(1));
      let current = sections[0];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.brandContainer}>
          <Link href="#main" className={styles.brand}>
            {BRAND.shortName}
          </Link>
        </div>

        <div className={styles.navLinks}>
          {NAVIGATION.map((item) => (
            <NavButton 
              key={item.href}
              href={item.href} 
              isActive={activeSection === item.href.substring(1)}
            >
              {item.label}
            </NavButton>
          ))}
        </div>

        <div className={styles.socialLinks}>
          <Link href={BRAND.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub size={20} />
          </Link>
          <Link href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaLinkedin size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
