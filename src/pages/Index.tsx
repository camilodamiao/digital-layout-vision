
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, ArrowRight, Star, Trophy, Users, Target } from "lucide-react";

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
        {/* Header with Logo */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/13fc976b-e352-4fbb-beb1-732066329a17.png" 
              alt="Educa Nextest" 
              className="h-12 mr-3"
            />
            <h1 className="text-3xl font-bold text-white">Educa Nextest</h1>
          </div>
          
          <Badge className="mb-6 text-white border border-opacity-30" style={{ backgroundColor: '#0075C5', borderColor: '#1AA3F7' }}>
            Transforme seu futuro digital
          </Badge>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Educação Digital
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #1AA3F7, #61AF4D)' }}>
              de Excelência
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Capacitação especializada em tecnologia e inovação para pessoas e empresas que querem liderar a transformação digital
          </p>
        </div>

        {/* Path Selection Cards */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-semibold text-white text-center mb-12">
            Para quem você está buscando esse treinamento?
          </h3>
          
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
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <User className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#61AF4D' }} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Para Mim
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Capacitação profissional para você desenvolver suas habilidades em tecnologia e impulsionar sua carreira
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center" style={{ color: '#61AF4D' }}>
                    <Star className="w-4 h-4 mr-2" />
                    <span className="text-sm">Certificação reconhecida</span>
                  </div>
                  <div className="flex items-center justify-center" style={{ color: '#61AF4D' }}>
                    <Trophy className="w-4 h-4 mr-2" />
                    <span className="text-sm">Mentoria personalizada</span>
                  </div>
                </div>
                <Button 
                  className="w-full text-white group-hover:translate-y-[-2px] transition-all duration-300"
                  style={{ backgroundColor: '#61AF4D' }}
                  size="lg"
                >
                  Explorar Capacitação Profissional
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
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <Building2 className="w-16 h-16 mx-auto group-hover:scale-110 transition-transform duration-300" style={{ color: '#0075C5' }} />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Para Minha Empresa
                </h4>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Soluções empresariais e capacitação corporativa para transformar sua empresa digitalmente
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center" style={{ color: '#0075C5' }}>
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">Treinamento em equipe</span>
                  </div>
                  <div className="flex items-center justify-center" style={{ color: '#0075C5' }}>
                    <Target className="w-4 h-4 mr-2" />
                    <span className="text-sm">Soluções customizadas</span>
                  </div>
                </div>
                <Button 
                  className="w-full text-white group-hover:translate-y-[-2px] transition-all duration-300"
                  style={{ backgroundColor: '#0075C5' }}
                  size="lg"
                >
                  Explorar Soluções Empresariais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold mb-2" style={{ color: '#61AF4D' }}>5000+</div>
            <div className="text-gray-300 text-sm">Profissionais capacitados</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold mb-2" style={{ color: '#0075C5' }}>200+</div>
            <div className="text-gray-300 text-sm">Empresas atendidas</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold mb-2" style={{ color: '#61AF4D' }}>15+</div>
            <div className="text-gray-300 text-sm">Anos de experiência</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-3xl font-bold mb-2" style={{ color: '#0075C5' }}>98%</div>
            <div className="text-gray-300 text-sm">Satisfação dos clientes</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Educa Nextest. Transformando o futuro através da tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
