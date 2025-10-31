import React, { useState } from 'react';
import type { SectionProps } from '../../types';
import { DonateModal } from '../common/DonateModal';
import useOnScreen from '../../hooks/useOnScreen';
import { AnimatedCard } from '../common/AnimatedCard';

export const GetInvolvedSection = React.forwardRef<HTMLElement, SectionProps>(({ content }, ref) => {
    const { title, description, donateCta, volunteerCta } = content.getInvolved;
    const [isDonateModalOpen, setDonateModalOpen] = useState(false);

    const [cardRef, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

    return (
        <>
            <section className="py-20 md:py-32" ref={ref}>
                <div className="container mx-auto px-6 max-w-4xl text-center" ref={cardRef}>
                    <AnimatedCard isVisible={isVisible}>
                        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
                             <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{title}</h2>
                            <p className="text-lg text-gray-700 mb-10">{description}</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <button 
                                    onClick={() => setDonateModalOpen(true)}
                                    className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105"
                                >
                                    {donateCta}
                                </button>
                                <a 
                                    href="https://chat.whatsapp.com/IW7gYg5p3VA3zm9bhFWRfB"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
                                >
                                    {volunteerCta}
                                </a>
                            </div>
                        </div>
                    </AnimatedCard>
                </div>
            </section>
            {isDonateModalOpen && <DonateModal onClose={() => setDonateModalOpen(false)} />}
        </>
    );
});
