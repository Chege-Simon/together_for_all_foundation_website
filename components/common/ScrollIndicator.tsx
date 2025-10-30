import React from 'react';

export const ScrollIndicator: React.FC<{isVisible: boolean}> = ({isVisible}) => (
    <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${isVisible ? 'opacity-70' : 'opacity-0'}`}>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1 animate-bounce-slow">
            <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
    </div>
);
