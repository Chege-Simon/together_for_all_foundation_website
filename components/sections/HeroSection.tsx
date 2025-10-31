import React from 'react';
import type { Content } from '../../types';
import { ScrollIndicator } from '../common/ScrollIndicator';

interface HeroSectionProps {
    content: Content;
    scrollY: number;
    onJoinMissionClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ content, scrollY, onJoinMissionClick }) => {
    const { title, subtitle, cta } = content.hero;
    const isScrolled = scrollY > 50;

    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background panels */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 -translate-y-1/2 h-[30vh] w-[15vw] animate-d-pan-1 shadow-2xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop)', backgroundSize: '2700px 1500px', backgroundPosition: '0% 50%', zIndex: 2 }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[10vw] h-[50vh] w-[25vw] animate-d-pan-2" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop)', backgroundSize: '2700px 1500px', backgroundPosition: '-10vw 50%', zIndex: 1 }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[25vw] h-full w-[40vw] animate-d-pan-3 shadow-2xl" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop)', backgroundSize: '2700px 1500px', backgroundPosition: '-35vw 50%', zIndex: 3 }}></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-[60vw] h-[80vh] w-[25vw] animate-d-pan-4" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop)', backgroundSize: '2700px 1500px', backgroundPosition: '-70vw 50%', zIndex: 1 }}></div>
                <div className="absolute inset-0 bg-black/50"></div>
            </div>
            
            <div 
                className="z-10 text-center p-4 transition-transform duration-500 ease-out"
                style={{ transform: `translateY(${scrollY * 0.2}px)` }}
            >
                <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-4 text-shadow bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
                    {title}
                </h1>
                <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-8 text-shadow">
                    {subtitle}
                </p>
                <button 
                    onClick={onJoinMissionClick}
                    className="bg-white/10 border-2 border-white/50 backdrop-blur-md text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 hover:scale-105 transition-all duration-300 transform"
                >
                    {cta}
                </button>
            </div>
            <ScrollIndicator isVisible={!isScrolled} />
        </section>
    );
};
