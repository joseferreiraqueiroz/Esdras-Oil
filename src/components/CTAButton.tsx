import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface CTAButtonProps {
  small?: boolean;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ small, onClick }) => {
  const handleClick = () => {
    const phone = "551141623593";
    const message = "Olá! Gostaria de agendar uma troca de óleo.";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    if (onClick) onClick();
  };

  return (
    <motion.button
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${small 
          ? 'px-4 py-2 text-sm' 
          : 'px-6 py-3 text-base md:px-8 md:py-4 md:text-lg'
        }
        bg-gradient-to-r from-[#FF6B00] to-[#FF8C40]
        text-white font-bold rounded-md
        shadow-lg hover:shadow-xl
        flex items-center justify-center gap-2
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-[#FF6B00] focus:ring-opacity-50
        relative overflow-hidden
        group
      `}
    >
      <span className="relative z-10 flex items-center gap-2">
        <MessageCircle size={20} className="animate-bounce" />
        Agendar via WhatsApp
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8C40] to-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
};

export default CTAButton;