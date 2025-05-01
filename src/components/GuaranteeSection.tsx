
import { ShieldCheck, Clock, Award, ThumbsUp } from 'lucide-react';
import CTAButton from './CTAButton';

const GuaranteeSection = () => {
  return (
    <section id="garantia" className="py-16 bg-[#1B263B] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          Serviço seguro
        </h2>
        <p className="text-lg text-center mb-12 text-gray-300 max-w-2xl mx-auto">
          Oferecemos total segurança para que você realize seu serviço com tranquilidade
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col items-center text-center p-6">
          </div>  
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-[#FF6B00]/20 p-4 rounded-full mb-4">
              <Clock size={32} className="text-[#FF6B00]" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Serviço Rápido</h3>
            <p className="text-gray-300">Em até 2 horas seu veículo estará pronto</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
            <div className="bg-[#FF6B00]/20 p-4 rounded-full mb-4">
              <Award size={32} className="text-[#FF6B00]" />
            </div>
            <h3 className="font-semibold text-xl mb-2">Técnicos Certificados</h3>
            <p className="text-gray-300">Profissionais com certificação internacional</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6">
          
          </div>
        </div>
        
        <div className="bg-white/10 rounded-lg p-8 max-w-3xl mx-auto text-center flex flex-col items-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            Vagas limitadas para agendamentos da semana. 
            <span className="text-[#FF6B00]"> Garanta seu horário antes que esgote!</span>
          </h3>
          <p className="mb-6 text-gray-300">
            Nosso calendário está quase completamente preenchido. 
            Agende agora e garanta a saúde do seu câmbio automático.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;