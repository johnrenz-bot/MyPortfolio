import Image from "next/image";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { COMMUNITIES } from "../../../data/communities";
import styles from "./CommunitySection.module.css";

export function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="Community"
          title="Growing Together"
          subtitle="Being part of tech communities has been a game-changer for me. I attend to learn from industry leaders, connect with fellow developers, and stay inspired by the vibrant local tech scene."
        />
        
        <div className={styles.grid}>
          {COMMUNITIES.map((community, index) => (
            <FadeIn key={community.name} delay={0.2 + index * 0.1}>
              <a 
                href={community.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.card}
              >
                <div className={styles.header}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src={community.logo}
                      alt={`${community.name} logo`}
                      fill
                      className={styles.logo}
                    />
                  </div>
                  <div>
                    <h3 className={styles.name}>{community.name}</h3>
                    <p className={styles.location}>{community.location}</p>
                  </div>
                </div>
                
                <div className={styles.details}>
                  <span className={styles.role}>{community.role}</span>
                  <span className={styles.year}>{community.year}</span>
                </div>
                
                <p className={styles.description}>
                  {community.description}
                </p>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
