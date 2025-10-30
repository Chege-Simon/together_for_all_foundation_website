import React, { useEffect } from 'react';
import type { Project } from '../../types';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
    
    useEffect(() => {
        // Prevent background scrolling when the modal is open
        document.body.style.overflow = 'hidden';
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // Simple function to get a different grid span class for variety
    const getGridSpan = (index: number) => {
        const patterns = [
            'col-span-2 row-span-2', // Large featured
            'col-span-1 row-span-1', // Small square
            'col-span-1 row-span-2', // Tall portrait
            'col-span-1 row-span-1', // Small square
            'col-span-2 row-span-1', // Wide landscape
            'col-span-1 row-span-1', // Small square
            'col-span-1 row-span-1', // Small square
            'col-span-2 row-span-2', // Another large one
            'col-span-1 row-span-2', // Tall portrait
            'col-span-2 row-span-1', // Wide landscape
            'col-span-1 row-span-1', // Small square
        ];
        return patterns[index % patterns.length] || 'col-span-1 row-span-1';
    };

    return (
        <div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-transform duration-300 scale-95 animate-scale-in"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-6 md:p-8 sticky top-0 bg-white border-b flex justify-between items-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-3xl">&times;</button>
                </div>
                
                <div className="p-6 md:p-8">
                    <p className="text-lg text-gray-600 mb-8">{project.detailedDescription}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
                        {project.galleryImages.map((img, index) => (
                            <div key={index} className={`${getGridSpan(index)} rounded-lg overflow-hidden shadow-md`}>
                                <img src={img} alt={`${project.title} gallery image ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

                @keyframes scale-in {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
            `}</style>
        </div>
    );
};