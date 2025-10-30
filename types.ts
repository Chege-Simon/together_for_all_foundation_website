// FIX: Define the data structures used throughout the application to resolve module and type errors.
export interface Project {
  image: string;
  title: string;
  description: string;
  detailedDescription: string;
  galleryImages: string[];
}

export interface Event {
  date: string;
  title: string;
  description: string;
}

export interface ContactPerson {
    name: string;
    phone: string;
    whatsapp: string;
}

export interface Content {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
  };
  ourWork: {
    title: string;
    description: string;
    projects: Project[];
  };
  events: {
    title: string;
    description: string;
    eventList: Event[];
  };
  getInvolved: {
    title: string;
    description: string;
    donateCta: string;
    volunteerCta: string;
  };
  contact: {
      title: string;
      description: string;
      persons: ContactPerson[];
  }
}

export interface SectionProps {
  content: Content;
  scrollY: number;
}