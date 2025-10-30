import React from 'react';
import type { SectionProps } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';

// Helper component for individual timeline items to manage their own animations
const TimelineItem: React.FC<{ event: any, isLast: boolean }> = ({ event, isLast }) => {
    const [ref, isVisible] = useOnScreen<HTMLLIElement>({ threshold: 0.5 });

    return (
        <li 
            ref={ref} 
            className={`transition-all duration-700 ease-out ${isLast ? '' : 'mb-10'} ml-8 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
        >
            <div className="absolute w-4 h-4 bg-pink-500 rounded-full mt-1.5 -left-[2.1rem] border-4 border-[#190028] ring-2 ring-pink-500/70"></div>
            <time className="mb-1 text-sm font-normal leading-none text-white/60">{event.date}</time>
            <h3 className="text-lg font-semibold text-white">{event.title}</h3>
            <p className="text-base font-normal text-white/80">{event.description}</p>
        </li>
    );
};

export const EventsSection: React.FC<SectionProps> = ({ content }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
    const eventsContent = content.events;

    return (
        <section ref={ref} className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {eventsContent.title}
                    </h2>
                    <p className={`text-lg text-white/80 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                        {eventsContent.description}
                    </p>
                </div>
                
                <div className="max-w-2xl mx-auto">
                    <ol className="relative border-s border-white/30">
                        {eventsContent.eventList.map((event, index) => (
                           <TimelineItem key={index} event={event} isLast={index === eventsContent.eventList.length - 1} />
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};