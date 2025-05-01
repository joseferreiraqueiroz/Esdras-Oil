
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';
import { Gauge, Shield, Clock } from 'lucide-react';
import carroImage from '../assets/carro.jpg'
const HeroSection = () => {
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-[#1B263B] to-[#0D1B2A] text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l7.9-7.9h-.828zm5.656 0L19.515 8.485 17.343 10.657l7.9-7.9h2.757zm5.656 0l-6.485 6.485L25.515 8.14l7.9-7.9h-.714zm5.657 0l-4.243 4.242L33.414 5.9 41.3 0h-2.087zm5.657 0l-2 2-1.414 1.414L41.3 0h2.944zM32.03 0l-2 2-1.415-1.415L30.444 0h1.587zM27.03 0l-3.657 3.657 1.414 1.414L30.444 0h-3.415zM21.372 0L17.714 3.657l1.415 1.414L24.787 0h-3.415zM15.714 0l-3.657 3.657 1.414 1.414L19.13 0h-3.415zM10.058 0L6.4 3.657l1.415 1.414L13.472 0h-3.414zm32.656 0l-3.657 3.657 1.414 1.414L45.13 0h-2.415zM38.4 0l-3.656 3.657 1.414 1.414L41.817 0h-3.415zM4.4 0L.743 3.657l1.414 1.414L7.815 0H4.4zm47.257 0l-3.657 3.657 1.415 1.414L54.073 0h-2.416zm-39.6 0l-3.657 3.657 1.415 1.414L15.53 0h-3.415zm32.656 0l-3.657 3.657 1.415 1.414L45.187 0h-2.415zm-25.6 0l-3.657 3.657 1.415 1.414L22.587 0h-3.415zm18.657 0l-3.657 3.657 1.414 1.414L38.244 0h-2.415zM4.4 0L.743 3.657l1.414 1.414L7.815 0H4.4zm47.257 0l-3.657 3.657 1.415 1.414L54.073 0h-2.416zm-39.6 0l-3.657 3.657 1.415 1.414L15.53 0h-3.415zm32.656 0l-3.657 3.657 1.415 1.414L45.187 0h-2.415zm-25.6 0l-3.657 3.657 1.415 1.414L22.587 0h-3.415zm18.657 0l-3.657 3.657 1.414 1.414L38.244 0h-2.415zM4.4 0L.743 3.657l1.414 1.414L7.815 0H4.4zm47.257 0l-3.657 3.657 1.415 1.414L54.073 0h-2.416zm-39.6 0l-3.657 3.657 1.415 1.414L15.53 0h-3.415zm32.656 0l-3.657 3.657 1.415 1.414L45.187 0h-2.415zm-25.6 0l-3.657 3.657 1.415 1.414L22.587 0h-3.415zm18.657 0l-3.657 3.657 1.414 1.414L38.244 0h-2.415z' fill='%23ffffff' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Troca de Óleo de Câmbio Automático
            </h1>
            <p className="text-xl md:text-2xl italic mb-8 text-[#FF6B00] font-semibold">
              "Porque performance não aceita descuido."
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-300">
              Especialistas em prolongar a vida útil do seu câmbio automático com técnica, 
              equipamento de ponta e os melhores fluidos do mercado.
            </p>
            
            <div className="mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CTAButton />
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12">
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <Gauge className="text-[#FF6B00] mb-2" size={24} />
                <span className="text-sm">Precisão Total</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <Shield className="text-[#FF6B00] mb-2" size={24} />
                <span className="text-sm">Garantia 12 Meses</span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-4 bg-white/5 rounded-lg backdrop-blur-sm"
              >
                <Clock className="text-[#FF6B00] mb-2" size={24} />
                <span className="text-sm">2h de Serviço</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              <img 
                src={carroImage} 
                alt="Troca de óleo profissional"
                className="rounded-lg shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1B263B]/50 to-transparent rounded-lg" />
            </div>
            
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-[#FF6B00] text-white p-4 rounded-lg shadow-xl transform rotate-3"
            >
              <p className="font-bold">Vagas Limitadas</p>
              <p className="text-sm">Restam apenas 3 horários hoje</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;