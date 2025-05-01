

const ServiceImageSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold mb-6 text-[#1B263B]">
              Tecnologia e precisão em cada detalhe
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Nosso processo de troca de óleo de câmbio utiliza equipamentos de última geração que permitem:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Troca completa sem mistura com o fluido antigo",
                "Calibragem eletrônica da pressão do sistema",
                "Remoção e limpeza do filtro de transmissão",
                "Verificação dos solenoides e sensores",
                "Ajuste dos parâmetros de funcionamento"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#FF6B00] mr-2">➤</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-medium text-[#1B263B]">
              Tudo isso com atendimento personalizado e transparência total.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://atrialub.com.br/wp-content/uploads/2018/11/catalogo_fundo_lust.jpg" 
                alt="Mecânico realizando troca de óleo de câmbio" 
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3 text-center">
              Equipe técnica especializada em transmissões automáticas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceImageSection;