import React, { useState } from 'react';
import type { SectionProps, Project } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';
import { ProjectModal } from '../common/ProjectModal';
import { CarouselCard } from '../common/CarouselCard';

const ChevronLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export const OurWorkSection: React.FC<SectionProps> = ({ content }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeIndex, setActiveIndex] = useState(1); // Start with the second item centered

    const ourWorkContent = content.ourWork;

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : ourWorkContent.projects.length - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < ourWorkContent.projects.length - 1 ? prev + 1 : 0));
    };

    return (
        <section className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                 <div 
                    ref={ref} 
                    className={`bg-white max-w-6xl mx-auto p-8 md:p-12 rounded-2xl shadow-xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                            {ourWorkContent.title}
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            {ourWorkContent.description}
                        </p>
                    </div>

                    <div className="relative h-[450px] flex items-center justify-center">
                        <div className="relative w-full h-full" style={{ perspective: '1000px' }}>
                            {ourWorkContent.projects.map((project, index) => (
                                <CarouselCard 
                                    key={index} 
                                    project={project}
                                    offset={index - activeIndex}
                                    onClick={() => setSelectedProject(project)}
                                />
                            ))}
                        </div>

                        <button 
                            onClick={handlePrev} 
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 text-gray-700 transition-colors z-30 shadow-md"
                            aria-label="Previous project"
                        >
                            <ChevronLeft />
                        </button>
                        <button 
                            onClick={handleNext} 
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 rounded-full p-2 text-gray-700 transition-colors z-30 shadow-md"
                            aria-label="Next project"
                        >
                            <ChevronRight />
                        </button>
                    </div>
                </div>
            </div>

            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </section>
    );
};
