
import React from 'react';
import { Globe, MapPin, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Turismo',
    description: 'Viagens para eventos, passeios turísticos, excursões e city tours com conforto e segurança para grupos de todos os tamanhos.',
    icon: Globe,
    delay: '0s'
  },
  {
    id: 2,
    title: 'Eventos',
    description: 'Transporte para casamentos, formaturas, congressos e eventos empresariais com pontualidade e qualidade.',
    icon: MapPin,
    delay: '0.1s'
  },
  {
    id: 3,
    title: 'Traslados',
    description: 'Serviços de transporte entre aeroportos, hotéis, eventos e outras localidades com máximo conforto.',
    icon: MapPin,
    delay: '0.2s'
  },
  {
    id: 4,
    title: 'Viagens Corporativas',
    description: 'Soluções personalizadas para empresas, garantindo conforto e pontualidade para seus colaboradores e clientes.',
    icon: Globe,
    delay: '0.3s'
  }
];

const Services = () => {
  return (
    <section id="services" className="section bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-topvans-blue/10 text-topvans-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Soluções completas em transporte
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos serviços especializados para atender às suas necessidades de transporte,
            seja para turismo, eventos ou viagens corporativas.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="bg-topvans-blue/10 p-4 rounded-lg inline-block mb-5">
                <service.icon className="text-topvans-blue" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="bg-topvans-black hover:bg-neutral-800 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center gap-2 font-medium inline-flex"
          >
            <span>Fale com um especialista</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
