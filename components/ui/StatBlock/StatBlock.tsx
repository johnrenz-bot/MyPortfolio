import { AnimatedCounter } from "../AnimatedCounter/AnimatedCounter";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import styles from "./StatBlock.module.css";

interface StatBlockProps {
  end: number;
  suffix?: string;
  label: string;
  delay?: number;
}

export function StatBlock({ end, suffix, label, delay = 0 }: StatBlockProps) {
  return (
    <FadeIn delay={delay} className={styles.container}>
      <div className={styles.value}>
        <AnimatedCounter end={end} suffix={suffix} />
      </div>
      <div className={styles.label}>
        {label}
      </div>
    </FadeIn>
  );
}
