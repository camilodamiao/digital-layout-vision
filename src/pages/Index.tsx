
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, User, ArrowRight, Star, Trophy, Users, Target } from "lucide-react";

const Index = () => {
  const [selectedPath, setSelectedPath] = useState<'b2b' | 'b2c' | null>(null);

  const handlePathSelection = (path: 'b2b' | 'b2c') => {
    setSelectedPath(path);
    // Aqui você pode adicionar navegação para páginas específicas no futuro
    setTimeout(() => {
      console.log(`Redirecionando para ${path}...`);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full blur-2xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-6 bg-blue-600/20 text-blue-300 border-blue-500/30">
              Transforme seu futuro digital
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Educação Digital
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                de Excelência
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capacitação especializada em tecnologia e inovação para pessoas e empresas que querem liderar a transformação digital
            </p>
          </div>

          {/* Path Selection Cards */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-semibold text-white text-center mb-12">
              Qual é o seu objetivo?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* B2C Card */}
              <Card 
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 ${
                  selectedPath === 'b2c' 
                    ? 'border-green-400 bg-green-500/10' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-green-500/50'
                } backdrop-blur-sm`}
                onClick={() => handlePathSelection('b2c')}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <User className="w-16 h-16 mx-auto text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Desenvolvimento Pessoal
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Cursos e treinamentos para você desenvolver suas habilidades em tecnologia e impulsionar sua carreira
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-green-300">
                      <Star className="w-4 h-4 mr-2" />
                      <span className="text-sm">Certificação reconhecida</span>
                    </div>
                    <div className="flex items-center justify-center text-green-300">
                      <Trophy className="w-4 h-4 mr-2" />
                      <span className="text-sm">Mentoria personalizada</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white group-hover:translate-y-[-2px] transition-all duration-300"
                    size="lg"
                  >
                    Explorar Cursos Individuais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>

              {/* B2B Card */}
              <Card 
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 border-2 ${
                  selectedPath === 'b2b' 
                    ? 'border-blue-400 bg-blue-500/10' 
                    : 'border-gray-700 bg-gray-800/50 hover:border-blue-500/50'
                } backdrop-blur-sm`}
                onClick={() => handlePathSelection('b2b')}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Building2 className="w-16 h-16 mx-auto text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Soluções Empresariais
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Capacitação corporativa e consultorias especializadas para transformar sua empresa digitalmente
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-center text-blue-300">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">Treinamento em equipe</span>
                    </div>
                    <div className="flex items-center justify-center text-blue-300">
                      <Target className="w-4 h-4 mr-2" />
                      <span className="text-sm">Soluções customizadas</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:translate-y-[-2px] transition-all duration-300"
                    size="lg"
                  >
                    Explorar Soluções Corporativas
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-400 mb-2">5000+</div>
              <div className="text-gray-300 text-sm">Profissionais capacitados</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-blue-400 mb-2">200+</div>
              <div className="text-gray-300 text-sm">Empresas atendidas</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-gray-300 text-sm">Anos de experiência</div>
            </div>
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Satisfação dos clientes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Educação Digital. Transformando o futuro através da tecnologia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
