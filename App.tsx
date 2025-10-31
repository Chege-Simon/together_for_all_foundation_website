import React, { useState, useEffect, useRef } from 'react';
import type { Content } from './types';
import { BackgroundPattern } from './components/common/BackgroundPattern';
import { PageSections } from './components/PageSections';

const siteContent: Content = {
  hero: {
    title: "Together For All",
    subtitle: "Spreading love, hope, and chapati. We are a community dedicated to making a tangible difference, one act of kindness at a time.",
    cta: "Join Our Mission",
  },
  about: {
    title: "Our Story of Hope and Action",
    paragraph1: "Founded in 2010, our organization was born from a simple yet powerful idea: that collective action can solve the most pressing challenges in our communities. We started with a small group of volunteers and a big vision for a better future.",
    paragraph2: "Today, we have grown into a network of passionate individuals, partners, and supporters, all working together to provide resources, foster resilience, and empower people to reach their full potential. Our work is driven by compassion, collaboration, and a deep commitment to the communities we serve.",
  },
  ourWork: {
    title: "Making a Tangible Impact",
    description: "From feeding programs to educational support, our projects are a testament to what we can achieve together. Explore the memories we've created and the lives we've touched.",
    projects: [
      {
        image: 'https://images.unsplash.com/photo-1488521787991-ed7b2f28a727?q=80&w=2070&auto=format&fit=crop',
        title: "Community Feeding Program",
        description: "Nourishing bodies and souls, one meal at a time.",
        detailedDescription: "Our flagship program, the community feeding drive, has served thousands of hot meals to street families and underprivileged children. We believe that a warm meal is more than just sustenance; it's a message of care and dignity. Volunteers gather weekly to cook and distribute food, creating a space of community and support.",
        galleryImages: [
          'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1518398046578-83821481135a?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1618428261390-5079a4a4282b?q=80&w=1948&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1604168283499-d4e085229f3e?q=80&w=1964&auto=format&fit=crop'
        ]
      },
      {
        image: 'https://images.unsplash.com/photo-1542810634-71277d95dc35?q=80&w=2070&auto=format&fit=crop',
        title: "Sanitary Towel Drive",
        description: "Ensuring dignity and health for young women.",
        detailedDescription: "Access to sanitary products is a major challenge for many young women, impacting their health and education. Our annual sanitary towel drive collects and distributes these essential items to schools and community centers, empowering girls to stay in school and live with confidence.",
        galleryImages: [
          'https://images.unsplash.com/photo-1618347803264-6d9b00703c9a?q=80&w=2069&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1583921832966-998544f8b2d7?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop'
        ]
      },
      {
        image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop',
        title: "Mentorship & Education",
        description: "Inspiring the next generation of leaders.",
        detailedDescription: "We connect experienced professionals and community leaders with young people seeking guidance. Our mentorship program offers academic support, career advice, and life skills training, helping to shape a brighter future for the youth in our community.",
        galleryImages: [
          'https://images.unsplash.com/photo-1491841550275-5b462bf48545?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop'
        ]
      }
    ]
  },
  events: {
    title: "Upcoming Events",
    description: "Join us in spreading love and hope. Here's where you can find us making a difference next.",
    eventList: [
      { date: "14th DEC", title: "Chapati Festival - Narok", description: "Our flagship event! We'll be cooking with street families, distributing food, and planting trees at the Red Cross Ground in Narok County." },
      { date: "25th DEC", title: "Christmas Day Outreach", description: "Sharing the joy of Christmas with children's homes, providing gifts, food, and entertainment." },
      { date: "1st JAN", title: "New Year's Hope Drive", description: "Starting the year by distributing care packages with essential supplies to those in need." }
    ]
  },
  getInvolved: {
    title: "Be the Change",
    description: "Your support is crucial to our success. Whether you donate, volunteer, or spread the word, you are making a difference.",
    donateCta: "Donate Now",
    volunteerCta: "Volunteer With Us"
  },
  contact: {
      title: "Get In Touch",
      description: "Have questions or want to collaborate? Reach out to our team. We'd love to hear from you.",
      persons: [
        { name: "Kaby", phone: "+254799125755", whatsapp: "+254799125755" },
        { name: "Vero", phone: "+254741743593", whatsapp: "+254741743593" }
      ]
  }
};


const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 p-4 transition-all duration-300 bg-gray-900/50 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-white text-shadow">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  Together for All Foundation
              </span>
          </div>
      </div>
  </header>
);

const Footer = () => (
    <footer className="py-6 text-center text-white/60">
        <p>&copy; {new Date().getFullYear()} Together for All Foundation. All Rights Reserved.</p>
    </footer>
);


function App() {
  const [scrollY, setScrollY] = useState(0);
  const getInvolvedRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  
  const handleJoinMissionClick = () => {
    getInvolvedRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="animate-gradient text-white font-sans">
      <Header />
      <BackgroundPattern />
      <div className="relative z-10">
        <PageSections 
            content={siteContent} 
            scrollY={scrollY}
            onJoinMissionClick={handleJoinMissionClick}
            ref={getInvolvedRef}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;