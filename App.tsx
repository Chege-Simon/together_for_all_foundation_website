import React, { useState, useEffect, useRef } from 'react';
import {
  HeroSection,
  AboutSection,
  OurWorkSection,
  EventsSection,
  GetInvolvedSection,
} from './components/sections';
import type { Content } from './types';
import { DonateModal } from './components/common/DonateModal';
import { BackgroundPattern } from './components/common/BackgroundPattern';


// Initial content for the website
const initialContent: Content = {
  hero: {
    title: "Empowering Communities, One Step at aTime",
    subtitle: "We are a non-profit organization dedicated to creating lasting change through education, health, and community-building initiatives.",
    cta: "Join Our Mission",
  },
  about: {
    title: "Our Story of Hope and Action",
    paragraph1: "Founded in 2010, our organization was born from a simple yet powerful idea: that collective action can solve the most pressing challenges in our communities. We started with a small group of volunteers and a big vision for a better future.",
    paragraph2: "Today, we have grown into a network of passionate individuals, partners, and supporters, all working together to provide resources, foster resilience, and empower people to reach their full potential. Our work is driven by compassion, collaboration, and a deep commitment to the communities we serve.",
  },
  ourWork: {
    title: "Making a Tangible Impact",
    description: "From local workshops to global initiatives, our projects are designed to create sustainable and positive change. Explore some of our key areas of work.",
    projects: [
      { 
        title: "Education for All", 
        description: "Providing access to quality education and learning resources for children and adults in underserved areas.", 
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
        detailedDescription: "Our 'Education for All' program is at the heart of our mission. We build and support community learning centers, provide scholarships to promising students, and run literacy programs for adults. By removing barriers to education, we empower individuals to unlock their potential and create brighter futures for themselves and their communities. We believe education is the most powerful tool for sustainable development.",
        galleryImages: [
          "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1170",
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1170",
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1232",
          "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=1172"
        ]
      },
      { 
        title: "Community Health", 
        description: "Running health clinics and awareness programs to improve well-being and access to essential medical care.", 
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        detailedDescription: "Health is a fundamental human right. Our community health initiatives focus on preventative care and accessible treatment. We operate mobile clinics in remote areas, conduct health education workshops on sanitation and nutrition, and partner with local healthcare providers to ensure everyone has access to the care they need. Our goal is to build healthier, more resilient communities from the ground up.",
        galleryImages: [
            "https://images.unsplash.com/photo-1618498119104-e94028b5de9f?auto=format&fit=crop&q=80&w=1170",
            "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1332",
            "https://images.unsplash.com/photo-1584432810601-6c7f27a2366b?auto=format&fit=crop&q=80&w=1170",
        ]
      },
      { 
        title: "Sustainable Livelihoods", 
        description: "Empowering individuals with skills and opportunities to build secure and sustainable futures.", 
        image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        detailedDescription: "We empower individuals to become economically self-sufficient through our Sustainable Livelihoods program. We provide vocational training, small business grants, and mentorship to aspiring entrepreneurs. By fostering skills in areas like agriculture, craftsmanship, and technology, we help people create stable incomes, support their families, and contribute to their local economies. It's about giving a hand up, not a handout.",
        galleryImages: [
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1170",
            "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1170",
            "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1170",
            "https://images.unsplash.com/photo-1627920769854-f0d0446b7809?auto=format&fit=crop&q=80&w=1170"
        ]
      },
    ],
  },
  events: {
    title: "Upcoming Events",
    description: "Join us at our upcoming events to learn more about our work, connect with our community, and find out how you can get involved.",
    eventList: [
      { title: "Annual Charity Gala", date: "October 28, 2023", description: "A night of celebration and fundraising to support our ongoing projects. Formal attire requested." },
      { title: "Community Volunteer Day", date: "November 12, 2023", description: "Join us for a day of hands-on work to improve local community spaces. All ages welcome." },
      { title: "Educational Workshop Series", date: "Starts December 1, 2023", description: "A series of free workshops on financial literacy and career development." },
    ],
  },
  getInvolved: {
    title: "Be the Change",
    description: "Your support is crucial to our success. Whether you donate, volunteer, or spread the word, you are making a difference.",
    donateCta: "Donate Now",
    volunteerCta: "Volunteer With Us",
  },
};

const Header: React.FC = () => (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
                Together for All Foundation
            </h1>
        </div>
    </header>
);

const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Together for All Foundation. All rights reserved.</p>
        </div>
    </footer>
);

function App() {
  const [content] = useState<Content>(initialContent);
  const [scrollY, setScrollY] = useState(0);
  const [isDonateModalOpen, setDonateModalOpen] = useState(false);
  const getInvolvedRef = useRef<HTMLElement>(null);

  const handleJoinMissionClick = () => {
    getInvolvedRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal animate-gradient">
        <BackgroundPattern />
        <div className="relative z-10">
            <Header />
            <main>
                <HeroSection content={content} scrollY={scrollY} onJoinMissionClick={handleJoinMissionClick} />
                <AboutSection content={content} scrollY={scrollY} />
                <OurWorkSection content={content} scrollY={scrollY} />
                <EventsSection content={content} scrollY={scrollY} />
                <GetInvolvedSection 
                  ref={getInvolvedRef}
                  content={content} 
                  scrollY={scrollY} 
                  onDonateClick={() => setDonateModalOpen(true)}
                />
            </main>
            <Footer />
        </div>
        {isDonateModalOpen && <DonateModal onClose={() => setDonateModalOpen(false)} />}
    </div>
  );
}

export default App;