import { useState, useEffect } from 'react';
import { Menu, X, Clock } from 'lucide-react';
import CTAButton from './CTAButton';
import Logo from '../assets/logo.PNG'
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1B263B] shadow-lg py-2' : 'bg-[#1B263B]/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl flex items-center gap-4">
            <img src={Logo} alt="" className='w-[200px] h-[70px]'/>
          </div>
          
          <div className="hidden md:flex items-center text-white text-sm">
            <Clock size={16} className="mr-2" />
            <span>Seg-Sex: 08h às 17h45 | Sáb: 08h às 14h45</span>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-white hover:text-[#FF6B00] transition-colors">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-white hover:text-[#FF6B00] transition-colors">
              Depoimentos
            </a>
            <a href="#garantia" className="text-white hover:text-[#FF6B00] transition-colors">
              Garantia
            </a>
            <CTAButton small />
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1B263B] absolute top-full left-0 w-full">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <div className="flex items-center text-white text-sm mb-4">
              <Clock size={16} className="mr-2" />
              <span>Seg-Sex: 08h às 17h45 | Sáb: 08h às 14h45</span>
            </div>
            <a 
              href="#beneficios" 
              className="text-white py-2 hover:text-[#FF6B00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-white py-2 hover:text-[#FF6B00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#garantia" 
              className="text-white py-2 hover:text-[#FF6B00] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Garantia
            </a>
            <div className="py-2">
              <CTAButton onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;