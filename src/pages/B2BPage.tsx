
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Users, Target, Award, BarChart3, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const B2BPage = () => {
  const navigate = useNavigate();
  
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os treinamentos corporativos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#102A3F' }}>
      {/* Header */}
      <header className="relative z-10 py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white hover:bg-opacity-10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <img 
            src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
            alt="Educa Nextest" 
            className="h-12"
          />
          <div className="w-20"></div>
        </div>
      </header>

      {/* CTA Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          onClick={handleWhatsAppClick}
          className="text-white font-semibold px-6 py-4 shadow-2xl animate-pulse"
          style={{ backgroundColor: '#60AB4B' }}
          size="lg"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Falar Agora
        </Button>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transforme sua equipe com
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
              capacitação técnica de alta performance
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Treinamentos personalizados, certificados e focados em resultados que sua empresa precisa para liderar o mercado de telecomunicações.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#60AB4B' }}
            size="lg"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Falar com Especialista no WhatsApp
          </Button>
        </div>

        {/* Benefícios e Diferenciais */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Por que escolher a Educa Nextest?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 mx-auto mb-4" style={{ color: '#60AB4B' }} />
                <h3 className="text-xl font-bold text-white mb-3">+150h de Conteúdo</h3>
                <p className="text-gray-300">Biblioteca completa com mais de 150 horas de conteúdo especializado em telecomunicações.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4" style={{ color: '#60AB4B' }} />
                <h3 className="text-xl font-bold text-white mb-3">Certificações Oficiais</h3>
                <p className="text-gray-300">Parceria com Viavi, Sumitomo e outros grandes fabricantes do setor.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4" style={{ color: '#60AB4B' }} />
                <h3 className="text-xl font-bold text-white mb-3">Dashboards para Gestores</h3>
                <p className="text-gray-300">Acompanhe o progresso da sua equipe em tempo real com relatórios detalhados.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4" style={{ color: '#4FC3F7' }} />
                <h3 className="text-xl font-bold text-white mb-3">Formatos Híbridos</h3>
                <p className="text-gray-300">Online, ao vivo, gravado ou presencial. Escolha o que funciona melhor para sua equipe.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#4FC3F7' }} />
                <h3 className="text-xl font-bold text-white mb-3">Mecanismos Anti-Cola</h3>
                <p className="text-gray-300">Tecnologia avançada para garantir a integridade e qualidade do aprendizado.</p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 mx-auto mb-4" style={{ color: '#4FC3F7' }} />
                <h3 className="text-xl font-bold text-white mb-3">Foco em Resultados</h3>
                <p className="text-gray-300">Metodologia comprovada com foco na aplicação prática e resultados mensuráveis.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "A Educa Nextest transformou nossa equipe técnica. Em 6 meses, aumentamos nossa eficiência em 40% e reduzimos retrabalhos significativamente."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4" style={{ backgroundColor: '#60AB4B' }}></div>
                  <div>
                    <p className="text-white font-semibold">Carlos Silva</p>
                    <p className="text-gray-400 text-sm">Gerente Técnico - TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4 italic">
                  "O suporte e a qualidade do conteúdo são excepcionais. Nossa equipe está muito mais preparada para os desafios do mercado."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full mr-4" style={{ backgroundColor: '#4FC3F7' }}></div>
                  <div>
                    <p className="text-white font-semibold">Ana Costa</p>
                    <p className="text-gray-400 text-sm">Diretora de RH - FiberNet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar sua equipe?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Fale com nossos especialistas e descubra como podemos acelerar os resultados da sua empresa.
          </p>
          <Button 
            onClick={handleWhatsAppClick}
            className="text-white font-semibold px-12 py-6 text-xl hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: '#60AB4B' }}
            size="lg"
          >
            <MessageSquare className="w-6 h-6 mr-3" />
            Conversar com Especialista Agora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default B2BPage;
