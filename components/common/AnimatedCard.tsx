import React from 'react';
import useOnScreen from '../../hooks/useOnScreen';

interface AnimatedCardProps {
  image?: string;
  title: string;
  description: string;
  delay?: number;
  onClick: () => void;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({ image, title, description, delay = 0, onClick }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-700 ease-out cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative">
        {image && <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white font-bold text-lg border-2 border-white rounded-full px-4 py-2">View Memories</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};