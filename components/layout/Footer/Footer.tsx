import Link from "next/link";
import { BRAND } from "../../../constants/brand";
import { NAVIGATION } from "../../../constants/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandSection}>
            <h2 className={styles.brand}>{BRAND.name}</h2>
            <p className={styles.tagline}>{BRAND.tagline}</p>
          </div>
          
          <div className={styles.linksGrid}>
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Navigation</h3>
              <ul className={styles.linkList}>
                {NAVIGATION.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>Connect</h3>
              <ul className={styles.linkList}>
                <li>
                  <Link href={BRAND.socials.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <a href={`mailto:${BRAND.email}`} className={styles.link}>
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            &copy; {currentYear} {BRAND.name}. All rights reserved.
          </p>
          <div className={styles.socials}>
            <Link href={BRAND.socials.github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaGithub size={20} />
            </Link>
            <Link href={BRAND.socials.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
