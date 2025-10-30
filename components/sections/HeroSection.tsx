import React from 'react';
import type { SectionProps } from '../../types';
import { ScrollIndicator } from '../common/ScrollIndicator';
import useOnScreen from '../../hooks/useOnScreen';

interface HeroSectionProps extends SectionProps {
    onJoinMissionClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, scrollY, onJoinMissionClick }) => {
    const heroContent = content.hero;
    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });

    const contentOpacity = Math.max(0, 1 - scrollY / 400);
    const imageUrl = "https://images.unsplash.com/photo-1534224039824-7640243b83f5?q=80&w=2070&auto=format&fit=crop";

    const panelAnimation = isVisible ? 'running' : 'paused';

    return (
        <section ref={ref} className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 -translate-y-1/2 h-[30vh] w-[15vw] z-20 shadow-2xl" style={{ animation: `d-pan-1 20s ease-in-out infinite`, animationPlayState: panelAnimation, backgroundImage: `url(${imageUrl})`, backgroundSize: '2700px 1500px', backgroundPosition: '0% 50%' }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[10vw] h-[50vh] w-[25vw] z-10" style={{ animation: `d-pan-2 20s ease-in-out infinite`, animationPlayState: panelAnimation, backgroundImage: `url(${imageUrl})`, backgroundSize: '2700px 1500px', backgroundPosition: '-10vw 50%' }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[25vw] h-screen w-[40vw] z-30 shadow-2xl" style={{ animation: `d-pan-3 20s ease-in-out infinite`, animationPlayState: panelAnimation, backgroundImage: `url(${imageUrl})`, backgroundSize: '2700px 1500px', backgroundPosition: '-35vw 50%' }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[60vw] h-[80vh] w-[25vw] z-10" style={{ animation: `d-pan-4 20s ease-in-out infinite`, animationPlayState: panelAnimation, backgroundImage: `url(${imageUrl})`, backgroundSize: '2700px 1500px', backgroundPosition: '-70vw 50%' }}></div>
            </div>

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 px-6" style={{ opacity: contentOpacity }}>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-shadow-lg animate-fade-in-down">
                    {heroContent.title}
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 text-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {heroContent.subtitle}
                </p>
                <button
                    onClick={onJoinMissionClick}
                    className="bg-gradient-to-r from-indigo-600 to-pink-500 hover:from-indigo-700 hover:to-pink-600 text-white font-bold py-3 px-8 rounded-full text-lg transform hover:scale-105 transition-all duration-300 shadow-lg animate-fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    {heroContent.cta}
                </button>
            </div>

            <ScrollIndicator isVisible={scrollY < 100} />
            
            <style>{`
                .text-shadow-lg { text-shadow: 0 4px 6px rgba(0,0,0,0.4); }
                .text-shadow-md { text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
                @keyframes fade-in-down {
                    0% { opacity: 0; transform: translateY(-20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
            `}</style>
        </section>
    );
};