
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp, Search, Star, Play, CheckCircle, Award, Users, Target, Clock, MessageSquare } from "lucide-react";
import BackgroundWrapper from "@/components/common/BackgroundWrapper";
import MobileHeader from "@/components/common/MobileHeader";
import SectionSeparator from "@/components/common/SectionSeparator";
import BenefitCard from "@/components/common/BenefitCard";
import Footer from "@/components/common/Footer";

interface Course {
  id: number;
  title: string;
  originalPrice: number;
  salePrice: number;
  category: string;
  level: string;
  duration: string;
  description: string;
  checkoutUrl: string;
  image: string;
}

const B2CPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [selectedLevel, setSelectedLevel] = useState("todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const menuItems = [
    { label: "Início", action: () => scrollToSection("hero") },
    { label: "Por que escolher", action: () => scrollToSection("why-choose") },
    { label: "Depoimentos", action: () => scrollToSection("testimonials") },
    { label: "Cursos", action: () => scrollToSection("courses") },
    { label: "FAQ", action: () => scrollToSection("faq") }
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "REDES 5G",
      originalPrice: 597,
      salePrice: 569,
      category: "redes",
      level: "avançado",
      duration: "40h",
      description: "Aprenda sobre a nova geração de redes móveis e suas aplicações práticas.",
      checkoutUrl: "https://payment.ticto.app/O81D1A33D",
      image: "/lovable-uploads/7afcc1fe-344a-404a-849c-f6108145d639.png"
    },
    {
      id: 2,
      title: "COMO MANUSEAR UM OTDR",
      originalPrice: 397,
      salePrice: 379,
      category: "instrumentacao",
      level: "intermediario",
      duration: "25h",
      description: "Domine o uso do OTDR para análise e manutenção de fibras ópticas.",
      checkoutUrl: "https://payment.ticto.app/O0B0F2580",
      image: "/lovable-uploads/363ad326-afaf-4448-90c6-f7c27a24007a.png"
    },
    {
      id: 3,
      title: "SIGNAL FLOW EM REDES DWDM",
      originalPrice: 97,
      salePrice: 95,
      category: "dwdm",
      level: "avançado",
      duration: "8h",
      description: "Entenda o fluxo de sinais em redes DWDM de alta capacidade.",
      checkoutUrl: "https://payment.ticto.app/O74FBEBEF",
      image: "/lovable-uploads/1f0d6e6a-db2a-4e40-af60-4a89b21432e6.png"
    },
    {
      id: 4,
      title: "COMUNIDADE DWDM - ONLINE",
      originalPrice: 997,
      salePrice: 958,
      category: "dwdm",
      level: "avançado",
      duration: "60h",
      description: "Acesso completo à comunidade DWDM com conteúdo exclusivo e networking.",
      checkoutUrl: "https://payment.ticto.app/O948DDE0E",
      image: "/lovable-uploads/370dbbca-3f42-4866-97be-1b381c9f4df9.png"
    },
    {
      id: 5,
      title: "PLANEJAMENTO E DIMENSIONAMENTO DE REDES DWDM",
      originalPrice: 797,
      salePrice: 761,
      category: "dwdm",
      level: "avançado",
      duration: "45h",
      description: "Aprenda a planejar e dimensionar redes DWDM de forma eficiente.",
      checkoutUrl: "https://payment.ticto.app/OA7EBFE41",
      image: "/lovable-uploads/885c2a43-3181-46ef-b115-cb853ab9eb0b.png"
    },
    {
      id: 6,
      title: "CARACTERÍSTICAS DE TRANSMISSÃO EM REDES DWDM",
      originalPrice: 347,
      salePrice: 335,
      category: "dwdm",
      level: "intermediario",
      duration: "20h",
      description: "Domine as características de transmissão em sistemas DWDM.",
      checkoutUrl: "https://payment.ticto.app/OCB5DE505",
      image: "/lovable-uploads/0bda33ca-e32a-44a3-ae13-2ca796d92a8d.png"
    },
    {
      id: 7,
      title: "INTRODUÇÃO AS REDES DWDM",
      originalPrice: 497,
      salePrice: 475,
      category: "dwdm",
      level: "iniciante",
      duration: "30h",
      description: "Fundamentos das redes DWDM para iniciantes.",
      checkoutUrl: "https://payment.ticto.app/O32C442CD",
      image: "/lovable-uploads/c526abe5-f518-451e-8d17-b1ea064ddc39.png"
    },
    {
      id: 8,
      title: "SMARTOTDR E OTDR AVANÇADO",
      originalPrice: 1139.40,
      salePrice: 1090,
      category: "instrumentacao",
      level: "avançado",
      duration: "50h",
      description: "Curso avançado de OTDR e SmartOTDR para profissionais experientes.",
      checkoutUrl: "https://payment.ticto.app/O53E36D78",
      image: "/lovable-uploads/0498909b-4ea3-4d3f-93eb-a7f4d58db9da.png"
    },
    {
      id: 9,
      title: "ATENDENTE 360",
      originalPrice: 297,
      salePrice: 285,
      category: "atendimento",
      level: "iniciante",
      duration: "15h",
      description: "Desenvolvimento de habilidades completas para atendimento ao cliente.",
      checkoutUrl: "https://payment.ticto.app/O9CB5B118",
      image: "/lovable-uploads/a33670e6-1679-4d5f-9c11-3aff6c3b4cdd.png"
    },
    {
      id: 10,
      title: "ROTEADORES MIKROTIK",
      originalPrice: 247,
      salePrice: 238,
      category: "redes",
      level: "intermediario",
      duration: "18h",
      description: "Configuração e administração de roteadores MikroTik.",
      checkoutUrl: "https://payment.ticto.app/OA79C4682",
      image: "/lovable-uploads/13fc976b-e352-4fbb-beb1-732066329a17.png"
    },
    {
      id: 11,
      title: "DOMINE O WIFI PRO",
      originalPrice: 197,
      salePrice: 189,
      category: "wifi",
      level: "intermediario",
      duration: "12h",
      description: "Torne-se um especialista em redes WiFi profissionais.",
      checkoutUrl: "https://payment.ticto.app/OB65BD055",
      image: "/lovable-uploads/dede930f-0c71-40b6-831b-f080c2d7b525.png"
    },
    {
      id: 12,
      title: "PLATAFORMA EDUCACIONAL - 1 MÊS",
      originalPrice: 549,
      salePrice: 549,
      category: "plataforma",
      level: "todos",
      duration: "Mensal",
      description: "Acesso completo à plataforma educacional por 1 mês.",
      checkoutUrl: "https://payment.ticto.app/OFE5011EC",
      image: "/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png"
    },
    {
      id: 13,
      title: "PLATAFORMA EDUCACIONAL - 6 MESES",
      originalPrice: 1199.90,
      salePrice: 1199.90,
      category: "plataforma",
      level: "todos",
      duration: "6 meses",
      description: "Acesso completo à plataforma educacional por 6 meses.",
      checkoutUrl: "https://payment.ticto.app/OC8519F44",
      image: "/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png"
    },
    {
      id: 14,
      title: "PLATAFORMA EDUCACIONAL - 12 MESES",
      originalPrice: 1798,
      salePrice: 1798,
      category: "plataforma",
      level: "todos",
      duration: "12 meses",
      description: "Acesso completo à plataforma educacional por 1 ano.",
      checkoutUrl: "https://payment.ticto.app/OF52483EB",
      image: "/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png"
    }
  ];

  const categories = [
    { value: "todos", label: "Todas as Categorias" },
    { value: "redes", label: "Redes" },
    { value: "dwdm", label: "DWDM" },
    { value: "instrumentacao", label: "Instrumentação" },
    { value: "wifi", label: "WiFi" },
    { value: "atendimento", label: "Atendimento" },
    { value: "plataforma", label: "Plataforma" }
  ];

  const levels = [
    { value: "todos", label: "Todos os Níveis" },
    { value: "iniciante", label: "Iniciante" },
    { value: "intermediario", label: "Intermediário" },
    { value: "avançado", label: "Avançado" }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "todos" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "todos" || course.level === selectedLevel;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const benefits = [
    {
      title: "+200h de Conteúdo",
      description: "Biblioteca completa com mais de 200 horas de conteúdo especializado em telecomunicações.",
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    },
    {
      title: "Certificações Reconhecidas",
      description: "Certificados oficiais reconhecidos no mercado de telecomunicações.",
      icon: <Award className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#60AB4B' }} />
    },
    {
      title: "Flexibilidade Total",
      description: "Estude quando e onde quiser, no seu próprio ritmo.",
      icon: <Target className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#4FC3F7' }} />
    },
    {
      title: "Suporte Especializado",
      description: "Tire suas dúvidas com especialistas da área.",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" style={{ color: '#4FC3F7' }} />
    }
  ];

  const faqItems = [
    {
      question: "Como funciona o acesso aos cursos?",
      answer: "Após a compra, você recebe acesso imediato à plataforma com login e senha personalizados. O conteúdo fica disponível 24/7 durante todo o período contratado."
    },
    {
      question: "Os certificados são reconhecidos no mercado?",
      answer: "Sim! Nossos certificados são reconhecidos por empresas do setor de telecomunicações e validados por parcerias com fabricantes como Viavi e Sumitomo."
    },
    {
      question: "Posso estudar pelo celular?",
      answer: "Absolutamente! Nossa plataforma é totalmente responsiva e otimizada para dispositivos móveis, permitindo que você estude de qualquer lugar."
    },
    {
      question: "Existe suporte durante os cursos?",
      answer: "Sim, oferecemos suporte técnico e pedagógico completo. Você pode tirar dúvidas com nossos especialistas via chat ou email."
    },
    {
      question: "Como funcionam as avaliações?",
      answer: "Utilizamos métodos modernos de avaliação com tecnologia anti-cola, garantindo a integridade do processo e a qualidade do aprendizado."
    }
  ];

  const testimonials = [
    {
      name: "João Silva",
      role: "Técnico em Telecomunicações",
      company: "FiberCorp",
      image: "/lovable-uploads/95032967-a3e2-45dd-bf4e-b86e41707caa.png",
      text: "Os cursos da Educa Nextest me ajudaram a conseguir uma promoção. O conteúdo é muito prático e atual."
    },
    {
      name: "Maria Santos",
      role: "Engenheira de Redes",
      company: "TechNet",
      image: "/lovable-uploads/f8e20740-99f9-4bd7-ad62-c997c6ba6b20.png",
      text: "Excelente qualidade de ensino. Os instrutores são muito experientes e o material é top."
    },
    {
      name: "Carlos Oliveira",
      role: "Analista de Suporte",
      company: "ConnectPlus",
      image: "/lovable-uploads/6470ca05-625b-4904-9acb-fa96fa35da16.png",
      text: "Consegui aplicar os conhecimentos imediatamente no meu trabalho. Resultados práticos garantidos!"
    }
  ];

  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre os cursos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

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

      <div className="relative z-10 container mx-auto px-4">
        {/* Hero Section */}
        <div id="hero" className="py-10 md:py-20 fade-in-section">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Domine as 
                <span className="block text-transparent bg-clip-text" style={{
                  backgroundImage: 'linear-gradient(135deg, #4FC3F7 0%, #60AB4B 50%, #00E5FF 100%)'
                }}>
                  Telecomunicações
                </span>
                do futuro
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Cursos especializados que transformam profissionais em especialistas. 
                Aprenda com quem realmente entende do assunto.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button
                  onClick={() => scrollToSection('courses')}
                  className="text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                    boxShadow: '0 0 20px rgba(96,171,75,0.3)'
                  }}
                  size="lg"
                >
                  <span className="relative z-10">Explorar Cursos</span>
                </Button>
                
                <Button
                  onClick={() => scrollToSection('courses')}
                  variant="outline"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white transition-all duration-300 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
                  size="lg"
                >
                  Começar Agora
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#60AB4B' }} />
                  <span>+200h de conteúdo</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#60AB4B' }} />
                  <span>Certificação oficial</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" style={{ color: '#60AB4B' }} />
                  <span>Acesso vitalício</span>
                </div>
              </div>
            </div>
            
            {/* Vídeo */}
            <div className="relative mt-8 lg:mt-0">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-cyan-400/20">
                <iframe
                  src="https://player.vimeo.com/video/956581145?badge=0&autopause=0&quality_selector=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                  title="Educa Nextest - Cursos"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        <SectionSeparator />

        {/* Why Choose Section */}
        <div id="why-choose" className="py-10 md:py-20 fade-in-section">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Por que escolher a Educa Nextest?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Somos referência em educação para telecomunicações, com metodologia comprovada e resultados reais.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
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

          {/* Cursos Certificados Section */}
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Cursos Certificados
            </h3>
            <p className="text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
              Nossos cursos são desenvolvidos em parceria com os principais fabricantes do setor
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 opacity-70">
              <div className="text-white font-bold text-lg md:text-xl">Viavi</div>
              <div className="text-white font-bold text-lg md:text-xl">Sumitomo</div>
              <div className="text-white font-bold text-lg md:text-xl">E muito mais...</div>
            </div>
          </div>
        </div>

        <SectionSeparator variant="green" />

        {/* Testimonials */}
        <div id="testimonials" className="py-10 md:py-20 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
            O que nossos alunos dizem
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl group">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic text-sm md:text-base group-hover:text-white transition-colors duration-300">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4 bg-gradient-to-br from-cyan-400 to-green-400 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm md:text-base group-hover:text-cyan-300 transition-colors duration-300">{testimonial.name}</p>
                      <p className="text-gray-400 text-xs md:text-sm">{testimonial.role} - {testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <SectionSeparator />

        {/* Courses Section */}
        <div id="courses" className="py-10 md:py-20 fade-in-section">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Nossos Cursos
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 md:mb-8">
              Escolha entre nossa seleção de cursos especializados e acelere sua carreira
            </p>
          </div>

          {/* Filters */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/10 backdrop-blur-sm rounded-lg p-4 md:p-6 mb-8 border border-cyan-400/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2">Categoria</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value} className="text-white hover:bg-gray-700">
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Nível</label>
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    {levels.map((level) => (
                      <SelectItem key={level.value} value={level.value} className="text-white hover:bg-gray-700">
                        {level.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar cursos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl group overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png";
                    }}
                  />
                </div>
                <CardContent className="p-4 flex-1 flex flex-col">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {course.level}
                      </Badge>
                      <span className="text-xs text-gray-400">{course.duration}</span>
                    </div>
                    <h3 className="text-white font-bold text-sm md:text-base mb-2 group-hover:text-cyan-300 transition-colors duration-300 line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-300 text-xs md:text-sm mb-3 group-hover:text-white transition-colors duration-300 line-clamp-2 flex-1">
                      {course.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        {course.originalPrice !== course.salePrice && (
                          <span className="text-gray-400 line-through text-xs md:text-sm">
                            R$ {course.originalPrice.toFixed(2)}
                          </span>
                        )}
                        <span className="text-green-400 font-bold text-sm md:text-lg ml-2">
                          R$ {course.salePrice.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <Button
                      onClick={() => window.open(course.checkoutUrl, '_blank')}
                      className="w-full text-white font-semibold py-2 text-xs md:text-sm transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                      style={{
                        background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                        boxShadow: '0 0 10px rgba(96,171,75,0.3)'
                      }}
                      size="sm"
                    >
                      <Play className="w-3 h-3 mr-1" />
                      <span className="relative z-10">Comprar Agora</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                Nenhum curso encontrado com os filtros selecionados.
              </p>
            </div>
          )}
        </div>

        <SectionSeparator variant="green" />

        {/* FAQ Section */}
        <div id="faq" className="py-10 md:py-20 fade-in-section">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Tire suas principais dúvidas sobre nossos cursos e plataforma
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full p-4 md:p-6 text-left flex items-center justify-between hover:bg-blue-900/10 transition-colors duration-300"
                  >
                    <h3 className="text-white font-semibold text-sm md:text-lg pr-4">
                      {item.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 md:px-6 pb-4 md:pb-6">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="py-10 md:py-20 text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Pronto para começar sua jornada?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto">
            Junte-se a milhares de profissionais que já transformaram suas carreiras com nossos cursos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => scrollToSection('courses')}
              className="text-white font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                boxShadow: '0 0 20px rgba(96,171,75,0.3)'
              }}
              size="lg"
            >
              <span className="relative z-10">Ver Todos os Cursos</span>
            </Button>
            
            <Button
              onClick={handleWhatsAppClick}
              className="text-white font-semibold px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 0 20px rgba(37,211,102,0.3)'
              }}
              size="lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              <span className="relative z-10">Falar com Especialista</span>
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </BackgroundWrapper>
  );
};

export default B2CPage;
