import { FadeIn } from "../../animations/FadeIn/FadeIn";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      {eyebrow && (
        <FadeIn delay={0.1}>
          <p className={styles.eyebrow}>
            {eyebrow}
          </p>
        </FadeIn>
      )}
      <FadeIn delay={0.2}>
        <h2 className={styles.title}>
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.3}>
          <p className={styles.subtitle}>
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
