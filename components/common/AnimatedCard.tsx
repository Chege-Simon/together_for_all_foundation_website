import React from 'react';

interface AnimatedCardProps {
    children: React.ReactNode;
    isVisible: boolean;
    delay?: string; // e.g., 'delay-300'
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ children, isVisible, delay = '' }) => {
    return (
        <div
            className={`transition-all duration-700 ease-out ${delay} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
            {children}
        </div>
    );
};
