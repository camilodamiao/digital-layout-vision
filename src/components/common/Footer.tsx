
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone, Mail, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface FooterProps {
  onWhatsAppClick?: () => void;
}

const Footer = ({ onWhatsAppClick }: FooterProps) => {
  const navigate = useNavigate();

  return (
    <footer style={{ backgroundColor: '#102A3F' }}>
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
              alt="Educa Nextest" 
              className="h-12 sm:h-16 mb-4 sm:mb-6"
            />
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-md">
              Especializada em educação técnica para telecomunicações, oferecemos cursos certificados pelos principais fabricantes do setor.
            </p>
            {onWhatsAppClick && (
              <div className="flex space-x-4">
                <Button 
                  onClick={onWhatsAppClick}
                  className="text-white hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  }}
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            )}
          </div>

          {/* Cursos Populares */}
          <div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Cursos Populares</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="https://payment.ticto.app/O81D1A33D" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Redes 5G</a></li>
              <li><a href="https://payment.ticto.app/O53E36D78" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">SmartOTDR e OTDR Avançado</a></li>
              <li><a href="https://payment.ticto.app/O948DDE0E" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Comunidade DWDM</a></li>
              <li><a href="https://payment.ticto.app/OB65BD055" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Domine o WiFi Pro</a></li>
              <li><a href="https://payment.ticto.app/OA79C4682" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Roteadores Mikrotik</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center text-gray-300 text-sm sm:text-base hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" style={{
                  color: '#60AB4B'
                }} />
                <span>+55 35 9824-3322</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm sm:text-base hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" style={{
                  color: '#60AB4B'
                }} />
                <span>contato@educanextest.com.br</span>
              </div>
              <div className="flex items-start text-gray-300 text-sm sm:text-base hover:text-white transition-colors duration-300">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 mt-1" style={{
                  color: '#60AB4B'
                }} />
                <span>São Paulo, SP<br />Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © 2024 Educa Nextest. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <button className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Política de Privacidade</button>
              <button className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Termos de Uso</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
