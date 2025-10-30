import React, { useState, useEffect, useRef } from 'react';
import { BackgroundPattern } from './components/common/BackgroundPattern';
import { DonateModal } from './components/common/DonateModal';
import { PageSections } from './components/PageSections';
import { ContactSection } from './components/sections/ContactSection';
import type { Content } from './types';

const siteContent: Content = {
  hero: {
    title: "Together for All Foundation",
    subtitle: "A passionate community dedicated to creating lasting change, one act of kindness at a time. We believe in the power of collective action to uplift and empower.",
    cta: "Join Our Mission",
  },
  about: {
    title: "Our Story of Hope and Action",
    paragraph1: "Founded in 2010, our organization was born from a simple yet powerful idea: that collective action can solve the most pressing challenges in our communities. We started with a small group of volunteers and a big vision for a better future.",
    paragraph2: "Today, we have grown into a network of passionate individuals, partners, and supporters, all working together to provide resources, foster resilience, and empower people to reach their full potential. Our work is driven by compassion, collaboration, and a deep commitment to the communities we serve."
  },
  ourWork: {
    title: "Making a Tangible Impact",
    description: "From educational drives to community-building events, our projects are designed to create lasting positive change. Explore some of our key initiatives and the lives we've touched.",
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7b2f28a727?q=80&w=2070&auto=format&fit=crop',
        title: "Education & Literacy Program",
        description: "Providing after-school tutoring and learning resources to help children excel academically.",
        detailedDescription: "Our flagship program provides over 200 children with daily after-school support, including homework assistance, reading sessions, and access to a mini-library. We focus on building foundational literacy and numeracy skills to bridge the educational gap.",
        galleryImages: ['https://images.unsplash.com/photo-1542810610-185472612140?q=80&w=2070&auto=format&fit=crop', 'https://images.unsplash.com/photo-1517404829-50d884141c24?q=80&w=2070&auto=format&fit=crop'],
      },
      {
        image: 'https://images.unsplash.com/photo-1593113646773-ae62c1883985?q=80&w=2070&auto=format&fit=crop',
        title: "Community Feeding Program",
        description: "Ensuring vulnerable families receive nutritious meals to support their health and well-being.",
        detailedDescription: "A healthy mind needs a healthy body. We provide warm, nutritious meals to hundreds of individuals and families each week. This initiative has significantly improved community health and overall well-being.",
        galleryImages: ['https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?q=80&w=1974&auto=format&fit=crop', 'https://images.unsplash.com/photo-1576156768398-63c639454189?q=80&w=2070&auto=format&fit=crop'],
      },
      {
        image: 'https://images.unsplash.com/photo-1527525443983-6e60c7535228?q=80&w=1953&auto=format&fit=crop',
        title: "Youth Mentorship & Sports",
        description: "Building confidence and life skills through mentorship and recreational activities.",
        detailedDescription: "We believe in the power of play and positive role models. Our monthly events include sports, arts, and games, while our mentorship program pairs older students and volunteers with younger kids for guidance and support.",
        galleryImages: ['https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=2073&auto=format&fit=crop', 'https://images.unsplash.com/photo-1627843563095-2df5326f24d3?q=80&w=2070&auto=format&fit=crop'],
      },
    ]
  },
  events: {
    title: "Upcoming Events",
    description: "Join us in our upcoming events to support our cause, meet the community, and make a difference.",
    eventList: [
      { date: "14th DEC 2024", title: "Chapati Festival", description: "Join us in spreading love and hope at the Red Cross Ground, Narok County. Activities include cooking with street families, food distribution, and more." },
      { date: "JAN 18, 2025", title: "Community Book Drive", description: "Help us stock our library! Drop off new or gently used children's books at our community center." },
      { date: "FEB 22, 2025", title: "Volunteer Appreciation Day", description: "A special day to celebrate and thank our incredible volunteers who make our work possible." },
    ]
  },
  getInvolved: {
    title: "Be the Change",
    description: "Your support is crucial to our success. Whether you donate, volunteer, or spread the word, you are making a difference.",
    donateCta: "Donate Now",
    volunteerCta: "Volunteer With Us",
  },
  contact: {
    title: "Get in Touch",
    description: "Have questions or want to partner with us? We'd love to hear from you. Reach out to our coordinators directly.",
    persons: [
        { name: "Kaby", phone: "0799125755", whatsapp: "0799125755" },
        { name: "Vero", phone: "0741743593", whatsapp: "0741743593" },
    ]
  }
};

const Header: React.FC = () => (
    <header className="fixed top-0 left-0 right-0 z-40 p-4 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center">
             <div className="text-xl font-bold">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500">
                    Together for All Foundation
                 </span>
             </div>
        </div>
    </header>
);

const Footer: React.FC = () => (
    <footer className="relative z-10 text-center p-6 text-white/50">
        <p>&copy; {new Date().getFullYear()} Together for All Foundation. All Rights Reserved.</p>
    </footer>
);

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isDonateModalOpen, setDonateModalOpen] = useState(false);
  const getInvolvedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinMissionClick = () => {
    getInvolvedRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="bg-[#190028] font-sans text-white animate-gradient">
      <BackgroundPattern />
      <Header />
      <div className="relative z-10">
        <PageSections
          ref={getInvolvedRef}
          content={siteContent}
          scrollY={scrollY}
          onJoinMissionClick={handleJoinMissionClick}
          onDonateClick={() => setDonateModalOpen(true)}
        />
        <ContactSection content={siteContent} scrollY={scrollY} />
      </div>
      <Footer />

      {isDonateModalOpen && <DonateModal onClose={() => setDonateModalOpen(false)} />}
    </div>
  );
}

export default App;