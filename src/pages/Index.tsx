
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, ArrowRight, Star, Trophy, Users, Target, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Index = () => {
  const [selectedPath, setSelectedPath] = useState<'b2b' | 'b2c' | null>(null);

  const handlePathSelection = (path: 'b2b' | 'b2c') => {
    setSelectedPath(path);
    setTimeout(() => {
      console.log(`Redirecionando para ${path}...`);
    }, 500);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#102A3F' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: '#0075C5' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: '#61AF4D' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: '#1AA3F7' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header with Logo Only */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-8">
            <img 
              src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
              alt="Educa Nextest" 
              className="h-20"
            />
          </div>
          
          <Badge className="mb-6 text-white border border-opacity-30" style={{ backgroundColor: '#0075C5', borderColor: '#1AA3F7' }}>
            A escola digital líder em transformação tecnológica
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme seu Futuro
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #1AA3F7, #61AF4D)' }}>
              Digital Hoje
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Capacitação especializada em tecnologia e inovação para pessoas e empresas que querem liderar a transformação digital do mercado
          </p>
          
          <Button 
            className="text-white px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#61AF4D' }}
            size="lg"
          >
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        {/* Path Selection Cards */}
        <div className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-semibold text-white text-center mb-4">
            Para quem você está buscando esse treinamento?
          </h3>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Escolha a modalidade que melhor se adapta às suas necessidades e objetivos profissionais
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* B2C Card - Para Mim */}
            <Card 
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 backdrop-blur-sm ${
                selectedPath === 'b2c' 
                  ? 'bg-opacity-20' 
                  : 'bg-gray-800 bg-opacity-50 hover:border-opacity-50'
              }`}
              style={{ 
                borderColor: selectedPath === 'b2c' ? '#61AF4D' : '#4A5568',
                backgroundColor: selectedPath === 'b2c' ? '#61AF4D' : undefined
              }}
              onClick={() => handlePathSelection('b2c')}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="mb-6">
                    <User className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#61AF4D' }} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Para Mim
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Desenvolva suas habilidades em tecnologia, conquiste certificações reconhecidas pelo mercado e acelere sua carreira profissional
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center" style={{ color: '#61AF4D' }}>
                    <Star className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-300">Certificação reconhecida nacionalmente</span>
                  </div>
                  <div className="flex items-center" style={{ color: '#61AF4D' }}>
                    <Trophy className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-300">Mentoria personalizada 1:1</span>
                  </div>
                  <div className="flex items-center" style={{ color: '#61AF4D' }}>
                    <Target className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-300">Suporte para recolocação no mercado</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full text-white group-hover:translate-y-[-2px] transition-all duration-300"
                  style={{ backgroundColor: '#61AF4D' }}
                  size="lg"
                >
                  Explorar Capacitação Individual
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* B2B Card - Para Minha Empresa */}
            <Card 
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 backdrop-blur-sm ${
                selectedPath === 'b2b' 
                  ? 'bg-opacity-20' 
                  : 'bg-gray-800 bg-opacity-50 hover:border-opacity-50'
              }`}
              style={{ 
                borderColor: selectedPath === 'b2b' ? '#0075C5' : '#4A5568',
                backgroundColor: selectedPath === 'b2b' ? '#0075C5' : undefined
              }}
              onClick={() => handlePathSelection('b2b')}
            >
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="mb-6">
                    <Building2 className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#0075C5' }} />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Para Minha Empresa
                  </h4>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Transforme sua empresa digitalmente com soluções customizadas, treinamentos corporativos e consultoria especializada
                  </p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center" style={{ color: '#0075C5' }}>
                    <Users className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-300">Treinamento corporativo in-company</span>
                  </div>
                  <div className="flex items-center" style={{ color: '#0075C5' }}>
                    <Target className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-300">Consultoria e soluções customizadas</span>
                  </div>
                  <div className="flex items-center" style={{ color: '#0075C5' }}>
                    <Trophy className="w-5 h-5 mr-3" />
                    <span className="text-sm text-gray-300">ROI comprovado e resultados mensuráveis</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full text-white group-hover:translate-y-[-2px] transition-all duration-300"
                  style={{ backgroundColor: '#0075C5' }}
                  size="lg"
                >
                  Explorar Soluções Corporativas
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-semibold text-white text-center mb-12">
            Números que Comprovam Nossa Excelência
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center animate-fade-in bg-gray-800 bg-opacity-30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#61AF4D' }}>5000+</div>
              <div className="text-gray-300 text-sm">Profissionais Capacitados</div>
              <div className="text-xs text-gray-400 mt-1">Desde 2009</div>
            </div>
            <div className="text-center animate-fade-in bg-gray-800 bg-opacity-30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0075C5' }}>200+</div>
              <div className="text-gray-300 text-sm">Empresas Atendidas</div>
              <div className="text-xs text-gray-400 mt-1">Pequenas e grandes</div>
            </div>
            <div className="text-center animate-fade-in bg-gray-800 bg-opacity-30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#61AF4D' }}>15+</div>
              <div className="text-gray-300 text-sm">Anos de Experiência</div>
              <div className="text-xs text-gray-400 mt-1">No mercado digital</div>
            </div>
            <div className="text-center animate-fade-in bg-gray-800 bg-opacity-30 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-4xl font-bold mb-2" style={{ color: '#0075C5' }}>98%</div>
              <div className="text-gray-300 text-sm">Satisfação dos Clientes</div>
              <div className="text-xs text-gray-400 mt-1">Avaliação média</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="border-t border-gray-800 py-12" style={{ backgroundColor: '#0A1E2A' }}>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <img 
                src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
                alt="Educa Nextest" 
                className="h-12 mb-4"
              />
              <p className="text-gray-400 mb-4 max-w-md">
                Transformando o futuro através da educação digital de excelência. Capacitação profissional e soluções corporativas em tecnologia.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">contato@educanextest.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-4 h-4 mr-3" />
                  <span className="text-sm">São Paulo, SP</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2">
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm">Sobre Nós</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm">Nossos Cursos</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm">Depoimentos</div>
                <div className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm">Blog</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Educa Nextest. Todos os direitos reservados. Transformando o futuro através da tecnologia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
