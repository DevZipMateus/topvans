
import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';
import { useIsMobile } from '../hooks/use-mobile';
const Contact = () => {
  const isMobile = useIsMobile();
  return <section id="contact" className="section bg-neutral-100">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-topvans-blue/10 text-topvans-blue font-medium px-4 py-1.5 rounded-full text-sm mb-4">
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Entre em contato conosco
          </h2>
          <p className="text-neutral-600 text-lg">
            Estamos prontos para atender às suas necessidades através dos nossos canais de atendimento.
          </p>
        </div>
        
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in">
            <div className="bg-green-500 p-6 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="white">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">WhatsApp</h3>
              <p className="text-neutral-600 mb-4">Atendimento rápido e prático</p>
              <a href="https://wa.me/5517996490497" target="_blank" rel="noopener noreferrer" className="bg-topvans-black hover:bg-neutral-800 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium">
                <span>Enviar mensagem</span>
              </a>
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            <div className="bg-topvans-blue p-6 flex items-center justify-center">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Telefone</h3>
              <p className="text-neutral-600 mb-4">Fale diretamente conosco</p>
              <a href="tel:+5517996490497" className="bg-topvans-black hover:bg-neutral-800 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium">
                <span>(17) 99649-0497</span>
              </a>
            </div>
          </div>
          
          {/* Instagram Card */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 flex items-center justify-center">
              <Instagram className="w-12 h-12 text-white" />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Instagram</h3>
              <p className="text-neutral-600 mb-4">Siga nossas redes sociais</p>
              <a href="https://instagram.com/topvans.turismos" target="_blank" rel="noopener noreferrer" className="bg-topvans-black hover:bg-neutral-800 text-white px-6 py-2 rounded-md inline-flex items-center justify-center gap-2 transition-all font-medium">
                <span>@topvans.turismos</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Address and Hours Card */}
        <div className="mt-12 bg-white rounded-xl shadow-sm p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Address */}
            <div className="flex items-start mb-6 md:mb-0 md:w-1/2">
              <div className="bg-neutral-100 p-3 rounded-full mr-4 flex-shrink-0">
                <MapPin className="text-neutral-700" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-neutral-900 mb-2">Endereço</h4>
                <p className="text-neutral-600">Rua José Tibúrcio de Souza, 871 – Américo de Campos – SP</p>
              </div>
            </div>
            
            {/* Working Hours */}
            <div className="md:w-1/2">
              <h4 className="text-lg font-semibold text-neutral-900 mb-4">Horário de Atendimento</h4>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-neutral-600">Segunda - Sexta:</span>
                  <span className="font-medium text-neutral-900">08:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Sábado:</span>
                  <span className="font-medium text-neutral-900">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600">Domingo:</span>
                  <span className="font-medium text-neutral-900">Fechado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
