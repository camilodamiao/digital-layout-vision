import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, User, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "@/components/common/BackgroundWrapper";
import Footer from "@/components/common/Footer";
const Index = () => {
  const [hoveredCard, setHoveredCard] = useState<'b2b' | 'b2c' | null>(null);
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return <BackgroundWrapper>
      {/* Botão Já sou Aluno */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
        <Button 
          onClick={() => window.open('https://cursos.educanextest.com.br/', '_blank')}
          className="text-white font-semibold px-4 py-2 text-sm hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
            boxShadow: '0 0 15px rgba(96,171,75,0.3)'
          }}
          size="sm"
        >
          <span className="relative z-10">Já sou Aluno</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </Button>
      </div>
      
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-20">
        {/* Logo */}
        <div className="mb-12 sm:mb-16 animate-fade-in">
          <img src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" alt="Educa Nextest" className="h-12 sm:h-16 md:h-20 mx-auto" />
        </div>

        {/* Main Question */}
        <div className="text-center mb-12 sm:mb-16 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Você está buscando cursos
            <span className="block text-transparent bg-clip-text" style={{
            backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)'
          }}>para você ou para sua empresa</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Escolha a jornada ideal para acelerar sua transformação digital
          </p>
        </div>

        {/* Decision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl w-full">
          {/* B2C Card - Para Mim */}
          <Card className={`group cursor-pointer transition-all duration-500 border-2 backdrop-blur-sm transform ${hoveredCard === 'b2c' ? 'scale-105 shadow-2xl' : 'hover:scale-105'}`} style={{
          backgroundColor: 'rgba(96, 171, 75, 0.1)',
          borderColor: hoveredCard === 'b2c' ? '#60AB4B' : 'rgba(96, 171, 75, 0.3)',
          boxShadow: hoveredCard === 'b2c' ? '0 25px 50px rgba(96, 171, 75, 0.3)' : 'none'
        }} onClick={() => handleNavigate('/cursos')} onMouseEnter={() => setHoveredCard('b2c')} onMouseLeave={() => setHoveredCard(null)}>
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-6 sm:mb-8">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${hoveredCard === 'b2c' ? 'animate-pulse' : ''}`} style={{
                backgroundColor: 'rgba(96, 171, 75, 0.2)'
              }}>
                  <User className="w-8 h-8 sm:w-10 sm:h-10" style={{
                  color: '#60AB4B'
                }} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Para Mim
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Aprenda com os melhores e avance na sua carreira em telecomunicações. 
                  Cursos certificados com flexibilidade total.
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{
                  backgroundColor: '#60AB4B'
                }}></div>
                  <span>+200h de conteúdo especializado</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{
                  backgroundColor: '#60AB4B'
                }}></div>
                  <span>Certificações oficiais reconhecidas</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{
                  backgroundColor: '#60AB4B'
                }}></div>
                  <span>Estude no seu ritmo</span>
                </div>
              </div>
              
              <Button className="w-full text-white font-semibold text-base sm:text-lg py-3 sm:py-4 group-hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group" style={{
              background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
              boxShadow: '0 0 15px rgba(96,171,75,0.3)'
            }} size="lg">
                <span className="relative z-10">Ver Nossos Cursos</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </CardContent>
          </Card>

          {/* B2B Card - Para Minha Empresa */}
          <Card className={`group cursor-pointer transition-all duration-500 border-2 backdrop-blur-sm transform ${hoveredCard === 'b2b' ? 'scale-105 shadow-2xl' : 'hover:scale-105'}`} style={{
          backgroundColor: 'rgba(79, 195, 247, 0.1)',
          borderColor: hoveredCard === 'b2b' ? '#4FC3F7' : 'rgba(79, 195, 247, 0.3)',
          boxShadow: hoveredCard === 'b2b' ? '0 25px 50px rgba(79, 195, 247, 0.3)' : 'none'
        }} onClick={() => handleNavigate('/empresas')} onMouseEnter={() => setHoveredCard('b2b')} onMouseLeave={() => setHoveredCard(null)}>
            <CardContent className="p-6 sm:p-8 text-center">
              <div className="mb-6 sm:mb-8">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300 ${hoveredCard === 'b2b' ? 'animate-pulse' : ''}`} style={{
                backgroundColor: 'rgba(79, 195, 247, 0.2)'
              }}>
                  <Building2 className="w-8 h-8 sm:w-10 sm:h-10" style={{
                  color: '#4FC3F7'
                }} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                  Para Minha Empresa
                </h2>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  Transforme sua equipe com capacitação técnica de alta performance. 
                  Treinamentos personalizados e focados em resultados.
                </p>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-left">
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{
                  backgroundColor: '#4FC3F7'
                }}></div>
                  <span>Treinamentos in-company</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{
                  backgroundColor: '#4FC3F7'
                }}></div>
                  <span>Dashboards para gestores</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm sm:text-base">
                  <div className="w-2 h-2 rounded-full mr-3 flex-shrink-0" style={{
                  backgroundColor: '#4FC3F7'
                }}></div>
                  <span>Formatos híbridos flexíveis</span>
                </div>
              </div>
              
              <Button className="w-full text-white font-semibold text-base sm:text-lg py-3 sm:py-4 group-hover:translate-y-[-2px] transition-all duration-300 relative overflow-hidden group" style={{
              background: 'linear-gradient(135deg, #4FC3F7 0%, #60AB4B 100%)',
              boxShadow: '0 0 15px rgba(79,195,247,0.3)'
            }} size="lg">
                <span className="relative z-10">Falar com Especialista</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Transformando o futuro através da educação digital de excelência
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </BackgroundWrapper>;
};
export default Index;