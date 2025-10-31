import React from 'react';
import type { SectionProps } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';
import { AnimatedCard } from '../common/AnimatedCard';

export const AboutSection: React.FC<SectionProps> = ({ content }) => {
    const { title, paragraph1, paragraph2 } = content.about;
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.3 });

    return (
        <section ref={ref} className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                 <AnimatedCard isVisible={isVisible}>
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{title}</h2>
                        <div className="text-lg text-gray-700 space-y-6">
                            <p>{paragraph1}</p>
                            <p>{paragraph2}</p>
                        </div>
                    </div>
                </AnimatedCard>
            </div>
        </section>
    );
};
