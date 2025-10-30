import React, { useEffect, useState } from 'react';

interface DonateModalProps {
    onClose: () => void;
}

export const DonateModal: React.FC<DonateModalProps> = ({ onClose }) => {
    const [copyText, setCopyText] = useState('Copy');

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleCopy = () => {
        const tillNumber = '5418747';
        navigator.clipboard.writeText(tillNumber).then(() => {
            setCopyText('Copied!');
            setTimeout(() => setCopyText('Copy'), 2000);
        });
    };
    
    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <div 
                className="relative bg-white/10 border border-white/20 rounded-2xl shadow-2xl w-full max-w-md transform transition-transform duration-300 scale-95 animate-scale-in p-8 text-white overflow-hidden backdrop-blur-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/50 rounded-full filter blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 w-48 h-48 bg-pink-500/40 rounded-full filter blur-3xl opacity-50"></div>
                
                <div className="relative z-10 text-center">
                    <button onClick={onClose} className="absolute -top-4 -right-4 text-white/70 hover:text-white text-4xl">&times;</button>
                    
                    <h2 className="text-3xl font-bold mb-2">Support Our Mission</h2>
                    <p className="text-white/80 mb-6">Your contribution makes a world of difference.</p>

                    <div className="bg-white/10 rounded-lg p-6">
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-2">Method</p>
                        <p className="text-xl font-bold">MPesa - Buy Goods</p>
                        <div className="my-4 border-b border-white/20"></div>
                        <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-2">Till Number</p>
                        <div className="flex items-center justify-center gap-4">
                            <p className="text-4xl font-mono font-bold tracking-widest">5418747</p>
                            <button 
                                onClick={handleCopy}
                                className={`text-sm font-semibold px-3 py-1 rounded-md transition-all duration-300 ${copyText === 'Copied!' ? 'bg-green-500/80' : 'bg-white/20 hover:bg-white/30'}`}
                            >
                                {copyText}
                            </button>
                        </div>
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