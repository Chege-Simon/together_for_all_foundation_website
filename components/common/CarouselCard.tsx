import React from 'react';
import type { Project } from '../../types';

interface CarouselCardProps {
    project: Project;
    offset: number;
    onClick: () => void;
}

export const CarouselCard: React.FC<CarouselCardProps> = ({ project, offset, onClick }) => {
    const isActive = offset === 0;

    // Combine all translations into the transform style to avoid conflicts with CSS classes.
    // The x-translation for centering is -50%. The x-translation for carousel position is offset * 25%.
    const xTranslate = `calc(-50% + ${offset * 25}%)`;

    const style = {
        transform: `translateX(${xTranslate}) translateY(-50%) rotateY(${offset * -35}deg) scale(${1 - Math.abs(offset) * 0.15})`,
        opacity: Math.abs(offset) > 1.5 ? 0 : 1,
        transition: 'transform 0.5s ease, opacity 0.5s ease',
    };

    return (
        <button
            onClick={onClick}
            className="absolute top-0 left-0 w-full h-full group"
            style={{
                transformStyle: 'preserve-3d',
                zIndex: 10 - Math.abs(offset),
            }}
            aria-label={`View details for ${project.title}`}
        >
            <div 
                className="absolute w-[320px] h-[400px] left-1/2 top-1/2 bg-gray-200 rounded-2xl overflow-hidden shadow-2xl" 
                style={style}
            >
                <div className="relative w-full h-full">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    
                    <div className="absolute bottom-0 left-0 p-6 text-left text-white">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-white/90">{project.description}</p>
                    </div>

                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-bold border-2 border-white rounded-full px-6 py-2">
                            View Memories
                        </span>
                    </div>
                </div>
            </div>
        </button>
    );
};