import React from 'react';
import type { SectionProps } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';
import { AnimatedCard } from '../common/AnimatedCard';

export const ContactSection: React.FC<SectionProps> = ({ content }) => {
    const { title, description, persons } = content.contact;
    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.2 });

    const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
    );

    const WhatsAppIcon = () => (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
    );

    return (
        <section ref={ref} className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-4xl text-center">
                <AnimatedCard isVisible={isVisible}>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
                    <p className="text-lg text-white/80 mb-12">{description}</p>
                </AnimatedCard>

                <div className="grid md:grid-cols-2 gap-8">
                    {persons.map((person, index) => (
                        <AnimatedCard key={person.name} isVisible={isVisible} delay={`delay-${index * 150}`}>
                            <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center backdrop-blur-lg shadow-lg">
                                <h3 className="text-2xl font-bold mb-2 italic text-pink-400">{person.name}</h3>
                                
                                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                                     <a href={`tel:${person.phone}`} className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 border border-white/20 rounded-lg transition-colors duration-300">
                                        <PhoneIcon />
                                        Call
                                    </a>
                                    <a href={`https://wa.me/${person.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                                        <WhatsAppIcon />
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
                        </AnimatedCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
