"use client";

import Image from "next/image";
import { FadeIn } from "../../animations/FadeIn/FadeIn";
import { SlideUp } from "../../animations/SlideUp/SlideUp";
import styles from "./TechJourneySection.module.css";

const TIMELINE = [
  { year: "2024", label: "Learning Fundamentals" },
  { year: "2025", label: "Web System Development" },
  { year: "2026", label: "UI/UX & Frontend Mastery" },
];

export function TechJourneySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.textContent}>
            <FadeIn>
              <h2 className={styles.title}>
                The Tech <br />
                <span className={styles.titleHighlight}>Journey</span>
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className={styles.description}>
                From learning basic HTML/CSS to architecting full-stack web systems and designing 
                intuitive user interfaces. My journey is driven by a passion for continuous 
                learning and building digital products that matter.
              </p>
            </FadeIn>
            
            <div className={styles.timeline}>
              {TIMELINE.map((item, i) => (
                <FadeIn key={item.year} delay={0.3 + i * 0.1} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div>
                    <span className={styles.timelineYear}>{item.year}</span>
                    <h3 className={styles.timelineLabel}>{item.label}</h3>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div className={styles.imageGallery}>
            <SlideUp delay={0.4} className={styles.imageCardWrapper1}>
              <div className={styles.imageCard}>
                <Image 
                  src="/Image/1.jpg" 
                  alt="Tech Journey 1" 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </SlideUp>
            <SlideUp delay={0.6} className={styles.imageCardWrapper2}>
              <div className={styles.imageCard}>
                <Image 
                  src="/Image/2.jpg" 
                  alt="Tech Journey 2" 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </SlideUp>
            <SlideUp delay={0.8} className={styles.imageCardWrapper3}>
              <div className={styles.imageCard}>
                <Image 
                  src="/Image/5.jpg" 
                  alt="Tech Journey 3" 
                  fill 
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
}
