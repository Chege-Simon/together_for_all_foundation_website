import React from 'react';
import type { SectionProps } from '../../types';
import { ScrollIndicator } from '../common/ScrollIndicator';

interface HeroSectionProps extends SectionProps {
    onJoinMissionClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, scrollY, onJoinMissionClick }) => {
    const heroContent = content.hero;

    // Parallax effect for the background
    const backgroundStyle = {
        transform: `translate3d(0, ${scrollY * 0.3}px, 0)`,
    };

    // Fade out content on scroll
    const contentOpacity = Math.max(0, 1 - scrollY / 400);

    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
            {/* Background Image/Effect could go here if needed, but the App has a background pattern. Let's stick with that. */}
            {/* Using a pseudo-element for a dark overlay to make text more readable */}
            <div className="absolute inset-0 bg-black/30" style={backgroundStyle}></div>

            <div className="relative z-10 px-6" style={{ opacity: contentOpacity }}>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg animate-fade-in-down">
                    {heroContent.title}
                </h1>
                <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 drop-shadow-md animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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
            
            {/* Adding keyframes for animations */}
            <style>{`
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.8s ease-out forwards;
                }

                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.8s ease-out forwards;
                }
            `}</style>
        </section>
    );
};
