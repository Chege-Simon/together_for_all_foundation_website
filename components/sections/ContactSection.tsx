import React from 'react';
import type { SectionProps } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.598-3.824-1.598-5.854 0-5.39 4.383-9.772 9.771-9.772 2.657 0 5.145 1.04 6.988 2.882s2.882 4.33 2.882 6.988c0 5.39-4.384 9.773-9.773 9.773-2.028 0-3.99-.588-5.697-1.625L.057 24zM4.943 20.506l.328.192c1.479.873 3.14 1.34 4.865 1.34 4.297 0 7.79-3.492 7.79-7.79 0-4.297-3.493-7.79-7.79-7.79-4.297 0-7.79 3.493-7.79 7.79 0 1.772.588 3.486 1.625 4.943l.192.328L2.21 21.875l1.732-1.369z" />
    </svg>
);

export const ContactSection: React.FC<SectionProps> = ({ content }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });
    const contactContent = content.contact;

    return (
        <section ref={ref} className="container mx-auto px-6 py-16 md:py-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {contactContent.title}
                </h2>
                <p className={`text-lg text-white/80 mb-12 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {contactContent.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {contactContent.persons.map((person, index) => (
                        <div 
                            key={person.name}
                            className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 200 + 300}ms` }}
                        >
                            <h3 className="text-3xl font-semibold text-white mb-6">
                                <em className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-500 not-italic">{person.name}</em>
                            </h3>
                            <div className="flex flex-col items-center gap-4">
                                <a href={`tel:${person.phone}`} className="w-full flex items-center justify-center bg-white/20 text-white font-bold py-3 px-6 rounded-full hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                                    <PhoneIcon /> Call
                                </a>
                                <a href={`https://wa.me/${person.whatsapp}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-green-500 text-white font-bold py-3 px-6 rounded-full hover:bg-green-600 transform hover:scale-105 transition-all duration-300">
                                    <WhatsAppIcon /> WhatsApp
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};