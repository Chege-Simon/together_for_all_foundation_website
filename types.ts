import React from 'react';

// Define the structure for the page content
export interface Content {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title:string;
    paragraph1: string;
    paragraph2: string;
  };
  ourWork: {
    title: string;
    description: string;
    projects: {
      title: string;
      description: string;
      image: string;
      detailedDescription: string;
      galleryImages: string[];
    }[];
  };
  events: {
    title: string;
    description: string;
    eventList: {
      title: string;
      date: string;
      description: string;
    }[];
  };
  getInvolved: {
    title: string;
    description: string;
    donateCta: string;
    volunteerCta: string;
  };
}

// Type for a single project
export type Project = Content['ourWork']['projects'][0];


// Props for each section component
export interface SectionProps {
  content: Content;
  scrollY: number;
}