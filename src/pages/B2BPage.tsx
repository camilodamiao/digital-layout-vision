import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Users, Target, Award, BarChart3, Shield, Clock, CheckCircle, Play, BookOpen, Headphones, Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
const B2BPage = () => {
  const navigate = useNavigate();
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os treinamentos corporativos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  const teamMembers = [{
    name: "Camila Carvalho",
    role: "Gerente de Contas"
  }, {
    name: "Murilo Rosa",
    role: "Especialista Técnico"
  }, {
    name: "Thiago Cardoso",
    role: "Coordenador"
  }, {
    name: "Alexandre Nascimento",
    role: "Instrutor Sênior"
  }, {
    name: "Rodrigo Santos",
    role: "Consultor Técnico"
  }, {
    name: "Ayrton Pereira",
    role: "Especialista em Fibra"
  }, {
    name: "Danilo Pereira",
    role: "Instrutor"
  }, {
    name: "Judiel Martins",
    role: "Consultor"
  }, {
    name: "Alexandre Gomes Azi",
    role: "Diretor Técnico"
  }];
  const services = [{
    title: "Cursos Personalizados",
    description: "Desenvolvemos conteúdo específico para as necessidades da sua empresa, garantindo máxima relevância e aplicabilidade.",
    icon: <Target className="w-8 h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Treinamentos In-Company",
    description: "Capacitação realizada diretamente na sua empresa, otimizando tempo e recursos da sua equipe.",
    icon: <Users className="w-8 h-8" style={{
      color: '#4FC3F7'
    }} />
  }, {
    title: "Modalidades Online",
    description: "Flexibilidade total com acesso 24/7 aos melhores conteúdos de telecomunicações do mercado.",
    icon: <Play className="w-8 h-8" style={{
      color: '#60AB4B'
    }} />
  }];
  const platformFeatures = ["Conteúdo interativo e prático", "Trilhas de aprendizagem personalizadas", "Certificados reconhecidos pelo mercado", "Suporte técnico especializado"];
  const benefits = [{
    title: "+150h de Conteúdo",
    description: "Biblioteca completa com mais de 150 horas de conteúdo especializado em telecomunicações.",
    icon: <Clock className="w-8 h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Certificações Oficiais",
    description: "Parceria com Viavi, Sumitomo e outros grandes fabricantes do setor.",
    icon: <Award className="w-8 h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Dashboards para Gestores",
    description: "Acompanhe o progresso da sua equipe em tempo real com relatórios detalhados.",
    icon: <BarChart3 className="w-8 h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Formatos Híbridos",
    description: "Online, ao vivo, gravado ou presencial. Escolha o que funciona melhor para sua equipe.",
    icon: <Users className="w-8 h-8" style={{
      color: '#4FC3F7'
    }} />
  }, {
    title: "Mecanismos Anti-Cola",
    description: "Tecnologia avançada para garantir a integridade e qualidade do aprendizado.",
    icon: <Shield className="w-8 h-8" style={{
      color: '#4FC3F7'
    }} />
  }, {
    title: "Foco em Resultados",
    description: "Metodologia comprovada com foco na aplicação prática e resultados mensuráveis.",
    icon: <Target className="w-8 h-8" style={{
      color: '#4FC3F7'
    }} />
  }];
  return <div className="min-h-screen" style={{
    backgroundColor: '#102A3F'
  }}>
      {/* Header */}
      <header className="relative z-10 py-6 px-6">
        <div className="container mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate('/')} className="text-white hover:bg-white hover:bg-opacity-10">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <img src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" alt="Educa Nextest" className="h-12" />
          <div className="w-20"></div>
        </div>
      </header>

      {/* CTA Flutuante */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-6 py-4 shadow-2xl animate-pulse hover:scale-105 transition-all duration-300" style={{
        backgroundColor: '#60AB4B'
      }} size="lg">
          <MessageSquare className="w-5 h-5 mr-2" />
          Falar Agora
        </Button>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Hero Section */}
        <div className="py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Transforme sua equipe com 
                <span className="block text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)'
              }}>
                  capacitação técnica
                </span>
                de alta performance
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Treinamentos personalizados, certificados e focados em resultados. 
                + DE 150 HORAS DE CONTEÚDO PARA TODA A SUA EMPRESA
              </p>
              <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300" style={{
              backgroundColor: '#60AB4B'
            }} size="lg">
                <MessageSquare className="w-5 h-5 mr-2" />
                FALAR COM ESPECIALISTA
              </Button>
            </div>
            
            {/* Vídeo Container */}
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl" style={{
              backgroundColor: '#1a365d'
            }}>
                {/* Placeholder para o vídeo do Vimeo */}
                <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-gray-500">
                  <div className="text-center text-gray-400">
                    <Play className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg">Vídeo de Apresentação</p>
                    <p className="text-sm opacity-75">Incorporar URL do Vimeo aqui</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conheça a EDUCA NEXTEST */}
        <div style={{
        backgroundColor: '#4FC3F7',
        margin: '0 -1.5rem',
        padding: '5rem 1.5rem',
        borderRadius: '1rem'
      }} className="py-20 bg-[#000a00]/0">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8">
              Conheça a EDUCA NEXTEST
            </h2>
            <div className="space-y-6 text-white text-lg leading-relaxed">
              <p>
                Fruto da união entre Educa Telecom, Consultoria DWDM da Engenharia Carmo Dorneles e Nextest, 
                a Educa Nextest é uma empresa inovadora em educação para profissionais de telecom.
              </p>
              <p>
                Nossa missão é revolucionar o setor de telecomunicações com treinamentos técnicos para iniciantes e veteranos.
              </p>
              <p>
                Combinamos experiência técnica avançada e métodos de ensino inovadores para entregar uma experiência 
                de aprendizado única, baseada em anos de atuação junto aos maiores clientes.
              </p>
            </div>
          </div>
        </div>

        {/* Benefícios e Diferenciais */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Por que escolher a Educa Nextest?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Equipe */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Quem está por trás da EDUCA NEXTEST
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Nossa equipe conta com especialistas na área educacional no setor de telecomunicações, 
            liderada por engenheiros experientes.
          </p>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => <Card key={index} className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{
                backgroundColor: '#60AB4B'
              }}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300 text-sm">{member.role}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Como podemos te ajudar */}
        <div style={{
        backgroundColor: '#4FC3F7',
        margin: '0 -1.5rem',
        padding: '5rem 1.5rem',
        borderRadius: '1rem'
      }} className="py-20 bg-[#000a00]/0">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-8">
              Como podemos te ajudar?
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              A Educa Nextest tem o objetivo de auxiliar a sua evolução para a excelência dos processos de treinamento.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => <Card key={index} className="bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white text-opacity-90">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Recursos da Plataforma */}
        <div className="py-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Recursos da Plataforma
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {platformFeatures.map((feature, index) => <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-gray-800 bg-opacity-30 hover:bg-opacity-50 transition-all duration-300">
                <CheckCircle className="w-6 h-6" style={{
              color: '#60AB4B'
            }} />
                <span className="text-white text-lg">{feature}</span>
              </div>)}
          </div>
        </div>

        {/* Depoimentos */}
        <div className="py-20">
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
                  <div className="w-12 h-12 rounded-full mr-4" style={{
                  backgroundColor: '#60AB4B'
                }}></div>
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
                  <div className="w-12 h-12 rounded-full mr-4" style={{
                  backgroundColor: '#4FC3F7'
                }}></div>
                  <div>
                    <p className="text-white font-semibold">Ana Costa</p>
                    <p className="text-gray-400 text-sm">Diretora de RH - FiberNet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{
        backgroundColor: '#4FC3F7',
        margin: '0 -1.5rem',
        padding: '5rem 1.5rem',
        borderRadius: '1rem'
      }} className="py-20 bg-[#000a00]/0">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              FICOU COM DÚVIDAS SOBRE OS TREINAMENTOS?
            </h2>
            <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
              Entre em contato com nossos consultores e tire todas as suas dúvidas sobre nossos treinamentos.
            </p>
            <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300" style={{
            backgroundColor: '#60AB4B'
          }} size="lg">
              <MessageSquare className="w-5 h-5 mr-2" />
              ENTRAR EM CONTATO
            </Button>
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-20 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar sua equipe?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Fale com nossos especialistas e descubra como podemos acelerar os resultados da sua empresa.
          </p>
          <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-12 py-6 text-xl hover:scale-105 transition-all duration-300" style={{
          backgroundColor: '#60AB4B'
        }} size="lg">
            <MessageSquare className="w-6 h-6 mr-3" />
            Conversar com Especialista Agora
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-90 mt-20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <img src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" alt="Educa Nextest" className="h-12 mb-4" />
              <p className="text-gray-300 mb-4">
                Revolucionando o setor de telecomunicações com treinamentos técnicos inovadores para profissionais e empresas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3" style={{
                  color: '#60AB4B'
                }} />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3" style={{
                  color: '#60AB4B'
                }} />
                  <span>contato@educanextest.com.br</span>
                </div>
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 mr-3 mt-1" style={{
                  color: '#60AB4B'
                }} />
                  <span>São Paulo, SP<br />Brasil</span>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <a href="/empresas" className="block text-gray-300 hover:text-white transition-colors">Treinamentos Corporativos</a>
                <a href="/cursos" className="block text-gray-300 hover:text-white transition-colors">Cursos Individuais</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Sobre Nós</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors">Certificações</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Educa Nextest. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default B2BPage;