
import React from 'react';
import { Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-topvans-black text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Info */}
          <div className="animate-fade-in flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/25251098-fff7-4bff-bf39-e72ba91e2910.png" 
              alt="Top Vans Turismo e Locações" 
              className="h-24 w-auto mb-6"
            />
            <p className="text-gray-300 mb-4 text-center md:text-left">
              Desde 2021, transportando nossos clientes com segurança, qualidade e conforto que só a Top Vans pode proporcionar.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start justify-center md:justify-start">
                <Phone className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>(17) 99762-0162</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <a href="mailto:topvansturismo@hotmail.com" className="hover:text-topvans-blue transition-colors">
                  <span>topvansturismo@hotmail.com</span>
                </a>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin className="mr-3 mt-1 flex-shrink-0" size={18} />
                <span>Rua José Tibúrcio de Souza, 871 – Américo de Campos – SP</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Links Rápidos</h3>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <a href="#" className="hover:text-topvans-blue transition-colors duration-300 inline-block">Início</a>
              <a href="#about" className="hover:text-topvans-blue transition-colors duration-300 inline-block">Sobre Nós</a>
              <a href="#services" className="hover:text-topvans-blue transition-colors duration-300 inline-block">Serviços</a>
              <a href="#contact" className="hover:text-topvans-blue transition-colors duration-300 inline-block">Contato</a>
              
              <div className="mt-4 pt-4 border-t border-white/10 w-full">
                <a 
                  href="https://www.instagram.com/topvans.turismos" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center md:justify-start hover:text-topvans-blue transition-colors"
                >
                  <Instagram size={20} className="mr-2" />
                  <span>@topvans.turismos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/70">
          <p>© {new Date().getFullYear()} Top Vans Turismo e Locações. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
