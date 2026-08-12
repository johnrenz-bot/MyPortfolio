import Image from "next/image";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { CONTACT_DETAILS } from "../../../data/contact";
import { BRAND } from "../../../constants/brand";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import styles from "./AboutSection.module.css";

export function AboutSection() {
  const getIcon = (iconId: string) => {
    if (iconId.startsWith("Md") && (MdIcons as any)[iconId]) {
      const Icon = (MdIcons as any)[iconId];
      return <Icon />;
    }
    if (iconId.startsWith("Hi") && (HiIcons as any)[iconId]) {
      const Icon = (HiIcons as any)[iconId];
      return <Icon />;
    }
    return null;
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="About Me"
          title={BRAND.tagline}
        />
        
        <div className={styles.grid}>
          <FadeIn delay={0.2} className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackdrop} />
              <div className={styles.imageContainer}>
                <Image
                  src="/Image/profiles/profile.jpg" // Note: Fallback if grad-photo.jpg isn't perfect for this slot, using a placeholder path for now
                  alt={BRAND.name}
                  fill
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </FadeIn>
          
          <div className={styles.textCol}>
            <FadeIn delay={0.3}>
              <h3 className={styles.heading}>
                Bridging the gap between <span className={styles.highlight}>stunning design layouts</span> and <span className={styles.highlight}>clean, functional code</span>.
              </h3>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className={styles.bio}>
                {BRAND.description}
              </p>
            </FadeIn>
            
            <div className={styles.contactGrid}>
              {CONTACT_DETAILS.map((detail, index) => (
                <FadeIn key={detail.label} delay={0.5 + index * 0.1} className={styles.contactItem}>
                  <div className={styles.contactIconWrapper}>
                    {getIcon(detail.iconId)}
                  </div>
                  <div>
                    <p className={styles.contactLabel}>{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className={styles.contactValueLink}>
                        {detail.value}
                      </a>
                    ) : (
                      <p className={styles.contactValue}>{detail.value}</p>
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
