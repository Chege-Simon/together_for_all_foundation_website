import React from 'react';
import type { SectionProps, Event } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';

const TimelineItem: React.FC<{event: Event, index: number}> = ({ event, index }) => {
    const [ref, isVisible] = useOnScreen<HTMLLIElement>({ threshold: 0.5 });
    
    return (
        <li ref={ref} className="ms-6 mb-10">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-pink-600 rounded-full -start-3 ring-8 ring-pink-900/20">
                <svg className="w-2.5 h-2.5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                    <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </span>
            <div 
                className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                style={{ transitionDelay: `${index * 100}ms`}}
            >
                <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                    {event.title}
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-300">
                    {event.date}
                </time>
                <p className="text-base font-normal text-white/80">{event.description}</p>
            </div>
        </li>
    );
}

export const EventsSection: React.FC<SectionProps> = ({ content }) => {
    const { title, description, eventList } = content.events;
    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });

    return (
        <section ref={ref} className="py-20 md:py-32">
            <div className="container mx-auto px-6 max-w-3xl">
                <div 
                    className={`text-center mb-16 transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/80">{description}</p>
                </div>
                
                <ol className="relative border-s border-gray-700">
                    {eventList.map((event, index) => (
                       <TimelineItem key={index} event={event} index={index} />
                    ))}
                </ol>
            </div>
        </section>
    );
};