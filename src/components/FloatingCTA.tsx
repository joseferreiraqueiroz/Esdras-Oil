import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1B263B] p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 animate-slideUp">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-white font-semibold text-lg">
            Agende agora e ganhe diagnóstico eletrônico gratuito!
          </p>
          <p className="text-gray-300 text-sm">
            Oferta válida por tempo limitado
          </p>
        </div>
        <div className="flex items-center">
          <CTAButton small />
          <button 
            onClick={handleDismiss}
            className="ml-4 text-gray-400 hover:text-white"
            aria-label="Fechar"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;