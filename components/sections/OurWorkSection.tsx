import React, { useState } from 'react';
import type { SectionProps, Project } from '../../types';
import useOnScreen from '../../hooks/useOnScreen';
import { AnimatedCard } from '../common/AnimatedCard';
import { ProjectModal } from '../common/ProjectModal';

export const OurWorkSection: React.FC<SectionProps> = ({ content }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <section ref={ref} className="bg-gray-50 py-16 md:py-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className={`text-3xl md:text-4xl font-bold text-gray-800 mb-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {content.ourWork.title}
                        </h2>
                        <p className={`text-lg text-gray-600 transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                            {content.ourWork.description}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {content.ourWork.projects.map((project, index) => (
                            <AnimatedCard
                                key={index}
                                image={project.image}
                                title={project.title}
                                description={project.description}
                                delay={index * 150}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </>
    );
};