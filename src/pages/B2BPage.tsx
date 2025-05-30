import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, MessageSquare, Users, Target, Award, BarChart3, Shield, Clock, CheckCircle, Play, BookOpen, Headphones, Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const B2BPage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const whatsappNumber = "5511999999999"; // Substitua pelo número real
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os treinamentos corporativos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };
  const menuItems = [{
    label: "A Educa",
    action: () => scrollToSection("hero")
  }, {
    label: "Treinamentos",
    action: () => scrollToSection("services")
  }, {
    label: "Quem somos",
    action: () => scrollToSection("team")
  }, {
    label: "Nossos benefícios",
    action: () => scrollToSection("benefits")
  }, {
    label: "Recursos",
    action: () => scrollToSection("resources")
  }, {
    label: "Depoimentos",
    action: () => scrollToSection("testimonials")
  }];
  const teamMembers = [{
    name: "Camilo Damião",
    role: "Gerente de Produtos",
    image: "/lovable-uploads/a9d75bd0-4f03-4d10-ae9f-77fd7daca1d7.png"
  }, {
    name: "Murillo Brito",
    role: "Gerente de Treinamentos",
    image: "/lovable-uploads/b55b7fa0-ab77-4eb5-a0ac-72301fde4d4a.png"
  }, {
    name: "Thacio Cardoso",
    role: "Analista de Suporte e Treinamentos",
    image: "/lovable-uploads/cc96ec33-2cc9-4801-ba06-ca25d05f7ed1.png"
  }, {
    name: "Alexandro Baumhardt",
    role: "Gerente de Contas",
    image: "/lovable-uploads/e11afb9f-e35b-4020-b37a-ed589a18121b.png"
  }, {
    name: "Rodrigo Santos",
    role: "Engenheiro de Vendas",
    image: "/lovable-uploads/6470ca05-625b-4904-9acb-fa96fa35da16.png"
  }, {
    name: "Alyson Pessoa",
    role: "Diretor Comercial",
    image: "/lovable-uploads/f8e20740-99f9-4bd7-ad62-c997c6ba6b20.png"
  }, {
    name: "Danilo Teixeira",
    role: "Gerente de Vendas",
    image: "/lovable-uploads/d56f690c-dd26-4784-85a5-9d5029ecf06c.png"
  }, {
    name: "Julian Portilo",
    role: "Pré-Vendas",
    image: "/lovable-uploads/ce35a898-6e42-4cdf-b438-46396a70799e.png"
  }, {
    name: "Alexandre Guimarães",
    role: "Company Owner",
    image: "/lovable-uploads/95032967-a3e2-45dd-bf4e-b86e41707caa.png"
  }];
  const services = [{
    title: "Cursos Personalizados",
    description: "Desenvolvemos cursos sob medida para sua empresa, abrangendo tópicos relevantes como atendimento ao cliente, instalação e manutenção de redes.",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Treinamento ao Vivo",
    description: "Nossos especialistas oferecem sessões de treinamento interativas e dinâmicas, garantindo que sua equipe adquira habilidades práticas.",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#4FC3F7'
    }} />
  }, {
    title: "Plataforma Online",
    description: "Criamos uma plataforma online com mais de 200 horas de conteúdos, distribuídos entre assuntos técnicos e soft skills, para atender todas as áreas de sua empresa.",
    icon: <Play className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#60AB4B'
    }} />
  }];
  const platformFeatures = ["Conteúdos Interativos - +200 horas de cursos com vídeos, exercícios e testes interativos para engajamento da equipe.", "Suporte Personalizado - Equipe de especialistas para fornecer orientação e tirar dúvidas.", "Testes Dinâmicos e Seguros - Vários modelos de avaliação com mecanismos \"anti-cola\" para garantir a segurança e assertividade do conhecimento adquirido.", "Acompanhamento de Progresso - Monitoramento do aprendizado e desempenho da sua equipe."];
  const benefits = [{
    title: "+200h de Conteúdo",
    description: "Biblioteca completa com mais de 200 horas de conteúdo especializado em telecomunicações.",
    icon: <Clock className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Certificações Oficiais",
    description: "Parceria com Viavi, Sumitomo e outros grandes fabricantes do setor.",
    icon: <Award className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Dashboards para Gestores",
    description: "Acompanhe o progresso da sua equipe em tempo real com relatórios detalhados.",
    icon: <BarChart3 className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#60AB4B'
    }} />
  }, {
    title: "Formatos Híbridos",
    description: "Online, ao vivo, gravado ou presencial. Escolha o que funciona melhor para sua equipe.",
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#4FC3F7'
    }} />
  }, {
    title: "Mecanismos Anti-Cola",
    description: "Tecnologia avançada para garantir a integridade e qualidade do aprendizado.",
    icon: <Shield className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#4FC3F7'
    }} />
  }, {
    title: "Foco em Resultados",
    description: "Metodologia comprovada com foco na aplicação prática e resultados mensuráveis.",
    icon: <Target className="w-6 h-6 md:w-8 md:h-8" style={{
      color: '#4FC3F7'
    }} />
  }];
  const heroFeatures = ["Conteúdos ajustados às necessidades da sua empresa, garantindo resultados práticos e imediatos.", "Cursos certificados e desenvolvidos por especialistas, foco nas tecnologias mais relevantes do mercado.", "Acompanhe em tempo real o progresso e desempenho dos seus colaboradores, com relatórios detalhados de evolução."];
  return <div className="min-h-screen" style={{
    backgroundColor: '#102A3F'
  }}>
      {/* Static Header */}
      <header className="shadow-lg" style={{
      backgroundColor: '#102A3F'
    }}>
        <div className="container mx-auto px-4 md:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" alt="Educa Nextest" className="h-10 md:h-12" />
            </div>

            {/* Desktop Navigation Menu - Centered */}
            <nav className="hidden lg:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {menuItems.map((item, index) => <button key={index} onClick={item.action} className="text-white hover:text-gray-300 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white hover:bg-opacity-10 text-sm">
                    {item.label}
                  </button>)}
              </div>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Back Button - Hidden on mobile */}
              <Button variant="ghost" onClick={() => navigate('/')} className="hidden md:flex text-white hover:bg-white hover:bg-opacity-10 text-base">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Voltar
              </Button>

              {/* Login Button */}
              <Button onClick={() => window.open('https://cursos.educanextest.com.br/', '_blank')} className="text-white font-semibold px-6 py-3 text-base rounded-lg hover:opacity-90 transition-opacity" style={{
              backgroundColor: '#60AB4B'
            }}>
                Fazer login →
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white hover:bg-white hover:bg-opacity-10">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && <div className="lg:hidden mt-4 bg-gray-800 bg-opacity-90 rounded-lg border border-gray-600 shadow-xl animate-in slide-in-from-top-2 duration-200">
              <nav className="p-4 space-y-3">
                {menuItems.map((item, index) => <button key={index} onClick={item.action} className="block w-full text-left text-white hover:text-gray-300 transition-colors py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 text-base">
                    {item.label}
                  </button>)}
                <div className="pt-3 border-t border-gray-600">
                  <Button variant="ghost" onClick={() => {
                navigate('/');
                setIsMenuOpen(false);
              }} className="w-full text-white hover:bg-white hover:bg-opacity-10 justify-start py-3">
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Voltar
                  </Button>
                </div>
              </nav>
            </div>}
        </div>
      </header>

      {/* CTA Flutuante */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
        <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-4 py-3 md:px-6 md:py-4 shadow-2xl animate-pulse hover:scale-105 transition-all duration-300 text-sm md:text-base" style={{
        backgroundColor: '#60AB4B'
      }} size="lg">
          <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Falar Agora
        </Button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div id="hero" className="py-10 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Transforme sua equipe com 
                <span className="block text-transparent bg-clip-text" style={{
                backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)'
              }}>
                  capacitação técnica
                </span>
                de alta performance
              </h1>
              

              {/* Hero Features */}
              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                {heroFeatures.map((feature, index) => <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" style={{
                  color: '#60AB4B'
                }} />
                    <p className="text-gray-300 text-sm md:text-base">{feature}</p>
                  </div>)}
              </div>

              <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:scale-105 transition-all duration-300 w-full md:w-auto" style={{
              backgroundColor: '#60AB4B'
            }} size="lg">
                <MessageSquare className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                FALAR COM ESPECIALISTA
              </Button>
            </div>
            
            {/* Vídeo Vimeo */}
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
                <iframe src="https://player.vimeo.com/video/1022315308?badge=0&autopause=0&quality_selector=1&player_id=0&app_id=58479" width="100%" height="100%" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Educa Nextest - Apresentação" className="w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefícios e Diferenciais */}
        <div id="benefits" className="py-10 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            Por que escolher a Educa Nextest?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {benefits.map((benefit, index) => <Card key={index} className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-3 md:mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{benefit.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Equipe */}
        <div id="team" className="py-10 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-8">
            Quem está por trás da EDUCA NEXTEST
          </h2>
          <p className="text-lg md:text-xl text-gray-300 text-center mb-8 md:mb-12 max-w-3xl mx-auto px-4">
            Nossa equipe conta com especialistas na área educacional no setor de telecomunicações, 
            liderada por engenheiros experientes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => <Card key={index} className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" onError={e => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `<span class="text-white font-bold text-lg">${member.name.charAt(0)}</span>`;
                    parent.style.backgroundColor = '#60AB4B';
                  }
                }} />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{member.name}</h3>
                  <p className="text-gray-300 text-xs md:text-sm">{member.role}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Como podemos te ajudar */}
        <div id="services" className="py-10 md:py-20">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">
              Como podemos te ajudar?
            </h2>
            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto mb-6 md:mb-8 px-4">
              A Educa Nextest não é apenas um hub de ensino é um catalisador para o sucesso dos provedores de internet.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => <Card key={index} className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="mb-3 md:mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{service.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base">{service.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>

        {/* Recursos da Plataforma */}
        <div id="resources" className="py-10 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            Recursos
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            {platformFeatures.map((feature, index) => <div key={index} className="p-4 md:p-6 rounded-lg bg-gray-800 bg-opacity-30 hover:bg-opacity-50 transition-all duration-300">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="w-5 h-5 md:w-6 md:h-6 mt-1 flex-shrink-0" style={{
                color: '#60AB4B'
              }} />
                  <div>
                    <h3 className="text-white font-semibold mb-1 md:mb-2 text-lg md:text-2xl">
                      {feature.split(' - ')[0]}
                    </h3>
                    <p className="text-gray-300 font-normal text-sm md:text-lg">
                      {feature.split(' - ')[1]}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>

        {/* Depoimentos */}
        <div id="testimonials" className="py-10 md:py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-300 mb-3 md:mb-4 italic text-sm md:text-base">
                  "A Educa Nextest transformou nossa equipe técnica. Em 6 meses, aumentamos nossa eficiência em 40% e reduzimos retrabalhos significativamente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4" style={{
                  backgroundColor: '#60AB4B'
                }}></div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">Carlos Silva</p>
                    <p className="text-gray-400 text-xs md:text-sm">Gerente Técnico - TechCorp</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm">
              <CardContent className="p-4 md:p-6">
                <p className="text-gray-300 mb-3 md:mb-4 italic text-sm md:text-base">
                  "O suporte e a qualidade do conteúdo são excepcionais. Nossa equipe está muito mais preparada para os desafios do mercado."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4" style={{
                  backgroundColor: '#4FC3F7'
                }}></div>
                  <div>
                    <p className="text-white font-semibold text-sm md:text-base">Ana Costa</p>
                    <p className="text-gray-400 text-xs md:text-sm">Diretora de RH - FiberNet</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-10 md:py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Pronto para transformar sua equipe?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
            Fale com nossos especialistas e descubra como podemos acelerar os resultados da sua empresa.
          </p>
          <Button onClick={handleWhatsAppClick} className="text-white font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl hover:scale-105 transition-all duration-300 w-full md:w-auto" style={{
          backgroundColor: '#60AB4B'
        }} size="lg">
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
            Conversar com Especialista Agora
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 bg-opacity-90 mt-10 md:mt-20">
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Logo e Descrição */}
            <div className="sm:col-span-2">
              <img src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" alt="Educa Nextest" className="h-8 md:h-12 mb-3 md:mb-4" />
              <p className="text-gray-300 mb-3 md:mb-4 text-sm md:text-base">
                Revolucionando o setor de telecomunicações com treinamentos técnicos inovadores para profissionais e empresas.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </div>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Contato</h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center text-gray-300 text-sm md:text-base">
                  <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" style={{
                  color: '#60AB4B'
                }} />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm md:text-base">
                  <Mail className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3" style={{
                  color: '#60AB4B'
                }} />
                  <span>contato@educanextest.com.br</span>
                </div>
                <div className="flex items-start text-gray-300 text-sm md:text-base">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-2 md:mr-3 mt-1" style={{
                  color: '#60AB4B'
                }} />
                  <span>São Paulo, SP<br />Brasil</span>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Links Rápidos</h3>
              <div className="space-y-1 md:space-y-2">
                <a href="/empresas" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Treinamentos Corporativos</a>
                <a href="/cursos" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Cursos Individuais</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Sobre Nós</a>
                <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm md:text-base">Certificações</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
            <p className="text-gray-400 text-sm md:text-base">
              © 2024 Educa Nextest. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default B2BPage;