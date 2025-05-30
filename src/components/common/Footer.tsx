
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
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

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Links Rápidos</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><button onClick={() => navigate('/')} className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Início</button></li>
              <li><button onClick={() => navigate('/empresas')} className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Para Empresas</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Sobre Nós</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Blog</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">Contato</button></li>
            </ul>
          </div>

          {/* Cursos Populares */}
          <div>
            <h3 className="text-white font-semibold text-lg sm:text-xl mb-4 sm:mb-6">Cursos Populares</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li><button className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Redes 5G</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">OTDR Avançado</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Redes DWDM</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">WiFi Pro</button></li>
              <li><button className="text-gray-300 hover:text-white transition-colors text-left text-sm sm:text-base">Mikrotik</button></li>
            </ul>
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
