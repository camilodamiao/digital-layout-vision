
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Target, Award, BarChart3, Shield, Clock, CheckCircle, Play } from "lucide-react";
import { useState, useEffect } from "react";
import BackgroundWrapper from "@/components/common/BackgroundWrapper";
import MobileHeader from "@/components/common/MobileHeader";
import SectionSeparator from "@/components/common/SectionSeparator";
import BenefitCard from "@/components/common/BenefitCard";
import Footer from "@/components/common/Footer";

const B2BPage = () => {
  // Scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.fade-in-section');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        if (isVisible) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os treinamentos corporativos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: "A Educa", action: () => scrollToSection("hero") },
    { label: "Treinamentos", action: () => scrollToSection("services") },
    { label: "Quem somos", action: () => scrollToSection("team") },
    { label: "Nossos benefícios", action: () => scrollToSection("benefits") },
    { label: "Recursos", action: () => scrollToSection("resources") },
    { label: "Depoimentos", action: () => scrollToSection("testimonials") }
  ];

  const teamMembers = [
    { name: "Camilo Damião", role: "Gerente de Produtos", image: "/lovable-uploads/a9d75bd0-4f03-4d10-ae9f-77fd7daca1d7.png" },
    { name: "Murillo Brito", role: "Gerente de Treinamentos", image: "/lovable-uploads/b55b7fa0-ab77-4eb5-a0ac-72301fde4d4a.png" },
    { name: "Thacio Cardoso", role: "Analista de Suporte e Treinamentos", image: "/lovable-uploads/cc96ec33-2cc9-4801-ba06-ca25d05f7ed1.png" },
    { name: "Alexandro Baumhardt", role: "Gerente de Contas", image: "/lovable-uploads/e11afb9f-e35b-4020-b37a-ed589a18121b.png" },
    { name: "Rodrigo Santos", role: "Engenheiro de Vendas", image: "/lovable-uploads/6470ca05-625b-4904-9acb-fa96fa35da16.png" },
    { name: "Alyson Pessoa", role: "Diretor Comercial", image: "/lovable-uploads/f8e20740-99f9-4bd7-ad62-c997c6ba6b20.png" },
    { name: "Danilo Teixeira", role: "Gerente de Vendas", image: "/lovable-uploads/d56f690c-dd26-4784-85a5-9d5029ecf06c.png" },
    { name: "Julian Portilo", role: "Pré-Vendas", image: "/lovable-uploads/ce35a898-6e42-4cdf-b438-46396a70799e.png" },
    { name: "Alexandre Guimarães", role: "Company Owner", image: "/lovable-uploads/95032967-a3e2-45dd-bf4e-b86e41707caa.png" }
  ];

  const services = [
    {
      title: "Cursos Personalizados",
      description: "Desenvolvemos cursos sob medida para sua empresa, abrangendo tópicos relevantes como atendimento ao cliente, instalação e manutenção de redes.",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    },
    {
      title: "Treinamento ao Vivo",
      description: "Nossos especialistas oferecem sessões de treinamento interativas e dinâmicas, garantindo que sua equipe adquira habilidades práticas.",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#4FC3F7' }} />
    },
    {
      title: "Plataforma Online",
      description: "Criamos uma plataforma online com mais de 200 horas de conteúdos, distribuídos entre assuntos técnicos e soft skills, para atender todas as áreas de sua empresa.",
      icon: <Play className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    }
  ];

  const platformFeatures = [
    "Conteúdos Interativos - +200 horas de cursos com vídeos, exercícios e testes interativos para engajamento da equipe.",
    "Suporte Personalizado - Equipe de especialistas para fornecer orientação e tirar dúvidas.",
    "Testes Dinâmicos e Seguros - Vários modelos de avaliação com mecanismos \"anti-cola\" para garantir a segurança e assertividade do conhecimento adquirido.",
    "Acompanhamento de Progresso - Monitoramento do aprendizado e desempenho da sua equipe."
  ];

  const benefits = [
    {
      title: "+200h de Conteúdo",
      description: "Biblioteca completa com mais de 200 horas de conteúdo especializado em telecomunicações.",
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    },
    {
      title: "Certificações Oficiais",
      description: "Parceria com Viavi, Sumitomo e outros grandes fabricantes do setor.",
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    },
    {
      title: "Dashboards para Gestores",
      description: "Acompanhe o progresso da sua equipe em tempo real com relatórios detalhados.",
      icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    },
    {
      title: "Formatos Híbridos",
      description: "Online, ao vivo, gravado ou presencial. Escolha o que funciona melhor para sua equipe.",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#4FC3F7' }} />
    },
    {
      title: "Mecanismos Anti-Cola",
      description: "Tecnologia avançada para garantir a integridade e qualidade do aprendizado.",
      icon: <Shield className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#4FC3F7' }} />
    },
    {
      title: "Foco em Resultados",
      description: "Metodologia comprovada com foco na aplicação prática e resultados mensuráveis.",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#4FC3F7' }} />
    }
  ];

  const heroFeatures = [
    "Conteúdos ajustados às necessidades da sua empresa, garantindo resultados práticos e imediatos.",
    "Cursos certificados e desenvolvidos por especialistas, foco nas tecnologias mais relevantes do mercado.",
    "Acompanhe em tempo real o progresso e desempenho dos seus colaboradores, com relatórios detalhados de evolução."
  ];

  return (
    <BackgroundWrapper>
      <MobileHeader menuItems={menuItems} />

      {/* CTA Flutuante */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="text-white font-semibold px-4 py-3 shadow-2xl animate-pulse hover:scale-105 transition-all duration-300 text-sm relative overflow-hidden group"
          style={{
            background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
            boxShadow: '0 0 20px rgba(37,211,102,0.4)'
          }}
          size="lg"
        >
          <MessageSquare className="w-4 h-4 mr-2" />
          <span className="relative z-10">Falar Agora</span>
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <div id="hero" className="py-10 md:py-20 fade-in-section">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Transforme sua equipe com 
                <span className="block text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #4FC3F7 0%, #60AB4B 50%, #00E5FF 100%)'
                }}>
                  capacitação técnica
                </span>
                de alta performance
              </h1>
              
              {/* Hero Features */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ color: '#60AB4B' }} />
                    <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300">{feature}</p>
                  </div>
                ))}
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:scale-105 transition-all duration-300 w-full md:w-auto relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  boxShadow: '0 0 20px rgba(37,211,102,0.3)'
                }}
                size="lg"
              >
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="relative z-10">FALAR COM ESPECIALISTA</span>
              </Button>
            </div>
            
            {/* Vídeo Vimeo */}
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-cyan-400/20 glow-effect">
                <iframe
                  src="https://player.vimeo.com/video/1022315308?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Educa Nextest - Apresentação"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <SectionSeparator />

        {/* Benefícios e Diferenciais */}
        <div id="benefits" className="py-10 md:py-20 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            Por que escolher a Educa Nextest?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
                variant={index % 2 === 0 ? 'green' : 'cyan'}
              />
            ))}
          </div>
        </div>

        <SectionSeparator variant="green" />

        {/* Equipe */}
        <div id="team" className="py-10 md:py-20 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-8">
            Quem está por trás da EDUCA NEXTEST
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-8 md:mb-12 max-w-3xl mx-auto">
            Nossa equipe conta com especialistas na área educacional no setor de telecomunicações, 
            liderada por engenheiros experientes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl group"
              >
                <CardContent className="p-3 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-20 md:h-20 mx-auto mb-2 md:mb-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-green-400/20 flex items-center justify-center overflow-hidden border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `<span class="text-white font-bold text-lg">${member.name.charAt(0)}</span>`;
                          parent.style.background = 'linear-gradient(135deg, #60AB4B, #4FC3F7)';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xs md:text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">{member.name}</h3>
                  <p className="text-gray-300 text-xs md:text-sm group-hover:text-white transition-colors duration-300">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <SectionSeparator />

        {/* Como podemos te ajudar */}
        <div id="services" className="py-10 md:py-20 fade-in-section">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
              Como podemos te ajudar?
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-6 md:mb-8">
              A Educa Nextest não é apenas um hub de ensino é um catalisador para o sucesso dos provedores de internet.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <BenefitCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                variant={index % 2 === 0 ? 'green' : 'cyan'}
              />
            ))}
          </div>
        </div>

        <SectionSeparator variant="green" />

        {/* Recursos da Plataforma */}
        <div id="resources" className="py-10 md:py-20 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Recursos
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {platformFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-4 md:p-6 rounded-lg gradient-border bg-gradient-to-r from-blue-900/10 to-blue-800/5 hover:from-blue-900/20 hover:to-blue-800/10 transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{ color: '#60AB4B' }} />
                  <div>
                    <h3 className="text-white font-semibold mb-1 md:mb-2 text-lg md:text-2xl group-hover:text-cyan-300 transition-colors duration-300">
                      {feature.split(' - ')[0]}
                    </h3>
                    <p className="text-gray-300 font-normal text-sm md:text-lg group-hover:text-white transition-colors duration-300">
                      {feature.split(' - ')[1]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionSeparator />

        {/* Depoimentos */}
        <div id="testimonials" className="py-10 md:py-20 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-300 mb-3 md:mb-4 italic text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  "A Educa Nextest transformou nossa equipe técnica. Em 6 meses, aumentamos nossa eficiência em 40% e reduzimos retrabalhos significativamente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4" style={{ background: 'linear-gradient(135deg, #60AB4B, #4FC3F7)' }}></div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base group-hover:text-cyan-300 transition-colors duration-300">Carlos Silva</p>
                    <p className="text-gray-400 text-xs md:text-sm">Gerente Técnico - TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-300 mb-3 md:mb-4 italic text-sm md:text-base group-hover:text-white transition-colors duration-300">
                  "O suporte e a qualidade do conteúdo são excepcionais. Nossa equipe está muito mais preparada para os desafios do mercado."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4" style={{ background: 'linear-gradient(135deg, #4FC3F7, #60AB4B)' }}></div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base group-hover:text-green-300 transition-colors duration-300">Ana Costa</p>
                    <p className="text-gray-400 text-xs md:text-sm">Diretora de RH - FiberNet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-10 md:py-20 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Pronto para transformar sua equipe?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Fale com nossos especialistas e descubra como podemos acelerar os resultados da sua empresa.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="text-white font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl hover:scale-105 transition-all duration-300 w-full md:w-auto relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 0 20px rgba(37,211,102,0.3)'
            }}
            size="lg"
          >
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            <span className="relative z-10">Conversar com Especialista Agora</span>
          </Button>
        </div>
      </div>

      <Footer />
    </BackgroundWrapper>
  );
};

export default B2BPage;
