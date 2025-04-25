import React from 'react';
import { Zap, PenTool as Tool, Database, Gauge, PiggyBank, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

const benefits = [
  {
    title: "Troca 100% completa",
    description: "Removemos até 95% do fluido antigo, enquanto oficinas convencionais trocam apenas 40%.",
    icon: Zap
  },
  {
    title: "Diagnóstico preventivo",
    description: "Análise computadorizada da saúde do seu câmbio antes e depois do procedimento.",
    icon: Tool
  },
  {
    title: "Fluidos homologados",
    description: "Utilizamos apenas óleo específico para o seu modelo, seguindo as especificações do fabricante.",
    icon: Database
  },
  {
    title: "Limpeza de reservatório",
    description: "Remoção de resíduos do conversor de torque para evitar contaminação do novo fluido.",
    icon: Gauge
  },
  {
    title: "Economia real",
    description: "Previne reparos caros no futuro e reduz o consumo de combustível em até 8%.",
    icon: PiggyBank
  },
  {
    title: "Garantia estendida",
    description: "Oferecemos garantia de 12 meses ou 15.000 km para sua total tranquilidade.",
    icon: Shield
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-16 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#FF6B00]/10 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1B263B]/10 to-transparent rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#1B263B]">
            Por que nossa troca de óleo é superior?
          </h2>
          <div className="w-24 h-1 bg-[#FF6B00] mx-auto rounded-full mb-6" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combinamos tecnologia de ponta, expertise técnica e compromisso com qualidade 
            para oferecer o melhor serviço do mercado.
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#FF6B00]/30"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 bg-gradient-to-br from-[#FF6B00] to-[#FF8C40] rounded-lg p-3 mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#1B263B] group-hover:text-[#FF6B00] transition-colors duration-300">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-16">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-[#1B263B] to-[#2d3e5e] p-8 rounded-2xl shadow-xl max-w-3xl mx-auto flex flex-col items-center">
            <p className="text-lg mb-6 text-white">
              Agende agora e tenha seu câmbio protegido com o serviço que já atendeu 
              mais de <span className="text-[#FF6B00] font-bold">5.000 clientes satisfeitos</span> em todo o Brasil.
            </p>
            <CTAButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;