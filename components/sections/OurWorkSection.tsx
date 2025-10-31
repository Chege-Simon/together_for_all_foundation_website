import React, { useState } from 'react';
import type { SectionProps, Project } from '../../types';
import { CarouselCard } from '../common/CarouselCard';
import { ProjectModal } from '../common/ProjectModal';
import useOnScreen from '../../hooks/useOnScreen';
import { AnimatedCard } from '../common/AnimatedCard';


export const OurWorkSection: React.FC<SectionProps> = ({ content }) => {
    const { title, description, projects } = content.ourWork;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const [ref, isVisible] = useOnScreen<HTMLElement>({ threshold: 0.1 });

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
    };
    
    return (
        <>
            <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <AnimatedCard isVisible={isVisible}>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
                            <p className="max-w-2xl mx-auto text-lg text-white/80">{description}</p>
                        </div>
                    </AnimatedCard>

                    <div className="relative h-[450px] w-full" style={{ perspective: '1200px' }}>
                        {projects.map((project, index) => {
                            const offset = index - currentIndex;
                            return (
                                <CarouselCard 
                                    key={project.title}
                                    project={project}
                                    offset={offset}
                                    onClick={() => offset === 0 && setSelectedProject(project)}
                                />
                            );
                        })}
                    </div>

                    <div className="mt-8 flex justify-center gap-6">
                        <button onClick={handlePrev} aria-label="Previous project" className="text-4xl text-white/60 hover:text-white transition-transform duration-300 hover:scale-110">&larr;</button>
                        <button onClick={handleNext} aria-label="Next project" className="text-4xl text-white/60 hover:text-white transition-transform duration-300 hover:scale-110">&rarr;</button>
                    </div>
                </div>
            </section>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
            )}
        </>
    );
};
