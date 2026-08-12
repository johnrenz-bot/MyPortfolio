import Image from "next/image";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { SectionHeader } from "../../ui/SectionHeader/SectionHeader";
import { WORK_EXPERIENCE } from "../../../data/experience";
import styles from "./ExperienceSection.module.css";
import { FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";

export function ExperienceSection() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader 
          eyebrow="Experience"
          title="Where I've Worked"
        />
        
        <div className={styles.experienceList}>
          {WORK_EXPERIENCE.map((job, index) => (
            <FadeIn key={job.company} delay={0.2 + index * 0.1}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.logoWrapper}>
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      fill
                      className={styles.logo}
                    />
                  </div>
                  
                  <div className={styles.headerInfo}>
                    <div className={styles.titleRow}>
                      <h3 className={styles.role}>{job.role}</h3>
                      <span className={styles.type}>{job.type}</span>
                    </div>
                    <div className={styles.companyRow}>
                      <span className={styles.company}>{job.company}</span>
                      <span className={styles.dot}>•</span>
                      <span className={styles.subtitle}>{job.subtitle}</span>
                    </div>
                    <p className={styles.period}>{job.period}</p>
                  </div>
                </div>
                
                <div className={styles.cardBody}>
                  <p className={styles.description}>{job.description}</p>
                  
                  <div className={styles.highlights}>
                    <h4 className={styles.highlightsTitle}>Key Achievements</h4>
                    <ul className={styles.highlightsList}>
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className={styles.highlightItem}>
                          <FaCheckCircle className={styles.highlightIcon} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {(job.link || job.certificate) && (
                  <div className={styles.cardFooter}>
                    {job.link && (
                      <a href={job.link} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                        <FaExternalLinkAlt size={12} />
                        View Company
                      </a>
                    )}
                    {job.certificate && (
                      <button className={styles.footerButton}>
                        <FaExternalLinkAlt size={12} />
                        View Certificate
                      </button>
                    )}
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
