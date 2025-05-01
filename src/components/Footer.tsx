
import { MapPin, Phone, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">AutoTrans</h3>
            <p className="mb-4">
              Especialistas em transmissão automática com mais de 10 anos de experiência.
              Nosso compromisso é oferecer o melhor serviço com transparência e qualidade.
            </p>
         
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>Estrada velha de Itapevi, 3742 - Jardim paulista - Barueri SP</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>(11) 4162-3593</span>
              </li>
             
              <li className="flex items-start">
                <Clock size={20} className="mr-2 flex-shrink-0 mt-1" />
                <span>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Troca de Óleo de motor e filtros</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Troca de óleo de câmbio automático</a></li>
              <li><a href="#" className="hover:text-[#FF6B00] transition-colors">Troca de óleo de diferencial</a></li>
           

            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EsdrasOil - Todos os direitos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-[#FF6B00] transition-colors">Política de Privacidade</a>
            {' | '}
            <a href="#" className="hover:text-[#FF6B00] transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;