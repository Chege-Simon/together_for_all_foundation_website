import React from 'react';
import type { SectionProps } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';

export const AboutSection: React.FC<SectionProps> = ({ content }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });
    
    return (
        <section className="container mx-auto px-6 py-16 md:py-24">
            <div ref={ref} className={`bg-white/80 backdrop-blur-lg max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    {content.about.title}
                </h2>
                <div className="text-lg text-gray-700 space-y-4">
                     <p>{content.about.paragraph1}</p>
                     <p>{content.about.paragraph2}</p>
                </div>
            </div>
        </section>
    );
};