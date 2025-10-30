import React from 'react';
import type { SectionProps } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';

interface GetInvolvedSectionProps extends SectionProps {
    onDonateClick: () => void;
}

export const GetInvolvedSection = React.forwardRef<HTMLElement, GetInvolvedSectionProps>(({ content, onDonateClick }, ref) => {
    const [screenRef, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

    return (
        <section ref={ref} className="container mx-auto px-6 py-16 md:py-24">
            <div ref={screenRef} className={`bg-white max-w-4xl mx-auto text-center p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                     {content.getInvolved.title}
                </h2>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                     {content.getInvolved.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                        onClick={onDonateClick}
                        className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300"
                    >
                         {content.getInvolved.donateCta}
                    </button>
                    <a 
                        href="https://chat.whatsapp.com/IW7gYg5p3VA3zm9bhFWRfB"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-transparent border-2 border-pink-500 text-pink-500 font-bold py-3 px-8 rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 inline-block"
                    >
                         {content.getInvolved.volunteerCta}
                    </a>
                </div>
            </div>
        </section>
    );
});