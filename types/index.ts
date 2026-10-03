export interface HeroData {
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  bio: string;
  image: string;
  resume: string;
  openToWork: boolean;
}

export interface WorkExperience {
  role: string;
  company: string;
  subtitle: string;
  type: string;
  period: string;
  logo: string;
  link?: string;
  certificate?: string;
  /** Presentation hint for the certificate panel (source aspect + caption). */
  certificateMeta?: {
    /** "landscape" docs get a wide panel, "portrait" docs a tall one. */
    orientation: "landscape" | "portrait";
    /** Short caption shown under the certificate preview. */
    caption: string;
  };
  description: string;
  highlights: string[];
  timeline: string;
}

export interface TimelineItem {
  period: string;
  title: string;
  description: string;
  focus: string[];
  icon: string;
}

export interface Skill {
  iconId: string;
  name: string;
  proficiency: string;
  description: string;
}

export interface Community {
  name: string;
  location: string;
  role: string;
  year: string;
  logo: string;
  description: string;
  link: string;
}

export interface Event {
  name: string;
  location: string;
  year: string;
  role: string;
  description: string;
  badge: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  href: string;
  image: string;
  description: string;
  techStack?: string[];
  github?: string;
  uiTools?: string[];
  category?: string;
  workType?: string;
  featured?: boolean;
  tags?: string[];
}

export interface Category {
  key: string;
  label: string;
  sub: string;
  count: number;
  featured?: Project;
}

export interface SocialLink {
  iconId: string;
  url: string;
  label: string;
  image: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  note: string;
  tag: string;
  span?: "normal" | "tall" | "wide";
}

export interface ContactDetail {
  label: string;
  value: string;
  href: string | null;
  iconId: string;
}
