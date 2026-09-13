import { Skill } from "../../../types";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as CgIcons from "react-icons/cg";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

export function SkillCard({ skill, index }: SkillCardProps) {
  const faMap = FaIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const siMap = SiIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;
  const cgMap = CgIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>;

  const getIcon = (iconId: string) => {
    if (iconId.startsWith("Fa") && faMap[iconId]) {
      const Icon = faMap[iconId];
      return <Icon />;
    }
    if (iconId.startsWith("Si") && siMap[iconId]) {
      const Icon = siMap[iconId];
      return <Icon />;
    }
    if (iconId.startsWith("Cg") && cgMap[iconId]) {
      const Icon = cgMap[iconId];
      return <Icon />;
    }
    return null;
  };

  return (
    <FadeIn delay={index * 0.05} duration={0.4}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            {getIcon(skill.iconId)}
          </div>
          <div className={styles.content}>
            <h4 className={styles.title}>{skill.name}</h4>
            <p className={styles.proficiency}>
              {skill.proficiency}
            </p>
            <p className={styles.description}>
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
