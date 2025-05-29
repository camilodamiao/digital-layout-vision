
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<'b2b' | 'b2c' | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#102A3F' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: '#60AB4B' }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full blur-2xl" style={{ backgroundColor: '#4FC3F7' }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: '#60AB4B' }}></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-20">
        {/* Logo */}
        <div className="mb-16 animate-fade-in">
          <img 
            src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
            alt="Educa Nextest" 
            className="h-16 md:h-20 mx-auto"
          />
        </div>

        {/* Main Question */}
        <div className="text-center mb-16 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Você está buscando cursos
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
              para você ou para sua empresa?
            </span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Escolha a jornada ideal para acelerar sua transformação digital
          </p>
        </div>

        {/* Decision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
          {/* B2C Card - Para Mim */}
          <Card 
            className={`group cursor-pointer transition-all duration-500 border-2 backdrop-blur-sm transform ${
              hoveredCard === 'b2c' ? 'scale-105 shadow-2xl' : 'hover:scale-105'
            }`}
            style={{ 
              backgroundColor: 'rgba(96, 171, 75, 0.1)',
              borderColor: hoveredCard === 'b2c' ? '#60AB4B' : 'rgba(96, 171, 75, 0.3)',
              boxShadow: hoveredCard === 'b2c' ? '0 25px 50px rgba(96, 171, 75, 0.3)' : 'none'
            }}
            onClick={() => handleNavigate('/cursos')}
            onMouseEnter={() => setHoveredCard('b2c')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredCard === 'b2c' ? 'animate-pulse' : ''
                }`} style={{ backgroundColor: 'rgba(96, 171, 75, 0.2)' }}>
                  <User className="w-10 h-10" style={{ color: '#60AB4B' }} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Para Mim
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Aprenda com os melhores e avance na sua carreira em telecomunicações. 
                  Cursos certificados com flexibilidade total.
                </p>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#60AB4B' }}></div>
                  <span>+150h de conteúdo especializado</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#60AB4B' }}></div>
                  <span>Certificações oficiais reconhecidas</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#60AB4B' }}></div>
                  <span>Estude no seu ritmo</span>
                </div>
              </div>
              
              <Button 
                className="w-full text-white font-semibold text-lg py-4 group-hover:translate-y-[-2px] transition-all duration-300"
                style={{ backgroundColor: '#60AB4B' }}
                size="lg"
              >
                Ver Nossos Cursos
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>

          {/* B2B Card - Para Minha Empresa */}
          <Card 
            className={`group cursor-pointer transition-all duration-500 border-2 backdrop-blur-sm transform ${
              hoveredCard === 'b2b' ? 'scale-105 shadow-2xl' : 'hover:scale-105'
            }`}
            style={{ 
              backgroundColor: 'rgba(79, 195, 247, 0.1)',
              borderColor: hoveredCard === 'b2b' ? '#4FC3F7' : 'rgba(79, 195, 247, 0.3)',
              boxShadow: hoveredCard === 'b2b' ? '0 25px 50px rgba(79, 195, 247, 0.3)' : 'none'
            }}
            onClick={() => handleNavigate('/empresas')}
            onMouseEnter={() => setHoveredCard('b2b')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-8">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${
                  hoveredCard === 'b2b' ? 'animate-pulse' : ''
                }`} style={{ backgroundColor: 'rgba(79, 195, 247, 0.2)' }}>
                  <Building2 className="w-10 h-10" style={{ color: '#4FC3F7' }} />
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Para Minha Empresa
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Transforme sua equipe com capacitação técnica de alta performance. 
                  Treinamentos personalizados e focados em resultados.
                </p>
              </div>
              
              <div className="space-y-3 mb-8 text-left">
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#4FC3F7' }}></div>
                  <span>Treinamentos in-company</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#4FC3F7' }}></div>
                  <span>Dashboards para gestores</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#4FC3F7' }}></div>
                  <span>Formatos híbridos flexíveis</span>
                </div>
              </div>
              
              <Button 
                className="w-full text-white font-semibold text-lg py-4 group-hover:translate-y-[-2px] transition-all duration-300"
                style={{ backgroundColor: '#4FC3F7' }}
                size="lg"
              >
                Falar com Especialista
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Transformando o futuro através da educação digital de excelência
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
