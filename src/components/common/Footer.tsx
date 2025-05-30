
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  showExtendedContent?: boolean;
}

const Footer = ({ showExtendedContent = true }: FooterProps) => {
  return (
    <footer className="backdrop-blur-sm mt-10 md:mt-20 border-t border-cyan-400/20" style={{ 
      backgroundColor: '#102A3F',
      boxShadow: '0 -10px 30px rgba(79,195,247,0.1)' 
    }}>
      <div className="container mx-auto px-4 md:px-6 py-6 md:py-12">
        {showExtendedContent ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Logo e Descrição */}
            <div className="sm:col-span-2">
              <img 
                src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
                alt="Educa Nextest" 
                className="h-8 md:h-12 mb-3 md:mb-4" 
              />
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                Revolucionando o setor de telecomunicações com treinamentos técnicos inovadores para profissionais e empresas.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-cyan-300 transition-colors duration-300 hover:scale-110">
                  <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center text-gray-300 text-sm hover:text-white transition-colors duration-300">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 flex-shrink-0" style={{ color: '#60AB4B' }} />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm hover:text-white transition-colors duration-300">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 flex-shrink-0" style={{ color: '#60AB4B' }} />
                  <span>contato@educanextest.com.br</span>
                </div>
                <div className="flex items-start text-gray-300 text-sm hover:text-white transition-colors duration-300">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 mt-1 flex-shrink-0" style={{ color: '#60AB4B' }} />
                  <span>São Paulo, SP<br />Brasil</span>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h3>
              <div className="space-y-1 md:space-y-2">
                <a href="/empresas" className="block text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm">
                  Treinamentos Corporativos
                </a>
                <a href="/cursos" className="block text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm">
                  Cursos Individuais
                </a>
                <a href="#" className="block text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm">
                  Sobre Nós
                </a>
                <a href="#" className="block text-gray-300 hover:text-cyan-300 transition-colors duration-300 text-sm">
                  Certificações
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <img 
              src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
              alt="Educa Nextest" 
              className="h-8 md:h-10 mx-auto mb-4" 
            />
          </div>
        )}

        <div className={`border-t border-cyan-400/20 ${showExtendedContent ? 'mt-6 md:mt-8' : 'mt-4'} pt-4 md:pt-6 text-center`}>
          <p className="text-gray-400 text-sm">
            © 2024 Educa Nextest. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
