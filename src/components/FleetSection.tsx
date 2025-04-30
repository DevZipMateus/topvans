
import React from 'react';

const vehicles = [
  {
    id: 1,
    name: 'Vans Executivas',
    capacity: 'Até 16 passageiros',
    description: 'Vans modernas e confortáveis, ideais para grupos menores e com ar-condicionado, poltronas reclináveis e sistema de áudio.',
    image: '/lovable-uploads/a6d69b65-5aad-4b29-a88d-f3505efe60fd.png',
    delay: '0s'
  },
  {
    id: 2,
    name: 'Micro-ônibus',
    capacity: 'Até 28 passageiros',
    description: 'Veículos espaçosos com maior capacidade, perfeitos para grupos médios e equipados com ar-condicionado, poltronas reclináveis e bagageiro.',
    image: '/lovable-uploads/ducato-por-do-sol_13_384405-168554791638323.jpeg',
    delay: '0.1s'
  },
  {
    id: 3,
    name: 'Ônibus Executivo',
    capacity: 'Até 46 passageiros',
    description: 'Ônibus de grande porte para grupos numerosos, com máximo conforto, ar-condicionado, banheiro, TV e poltronas reclináveis.',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    delay: '0.2s'
  }
];

const FleetSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-topvans-blue/10 text-topvans-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Nossa Frota
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Veículos modernos e confortáveis
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça nossa frota de veículos com diferentes capacidades para atender às suas necessidades de transporte.
          </p>
        </div>
        
        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: vehicle.delay }}
            >
              {/* Vehicle Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="bg-topvans-blue/10 text-topvans-blue inline-block px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {vehicle.capacity}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            * Os modelos disponíveis podem variar conforme a demanda. Entre em contato para verificar disponibilidade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
