import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { 
  MessageSquare, 
  Clock, 
  Search, 
  Play,
  Star,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Plus,
  Minus,
  ChevronDown
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BackgroundWrapper from "@/components/common/BackgroundWrapper";
import MobileHeader from "@/components/common/MobileHeader";
import SectionSeparator from "@/components/common/SectionSeparator";
import Footer from "@/components/common/Footer";

const B2CPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Tenho dúvidas sobre os cursos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const categories = ["Todos", "Redes 5G", "OTDR", "DWDM", "WiFi", "Mikrotik", "Atendimento", "Plataforma"];

  const courses = [
    {
      id: 1,
      name: "Redes 5G",
      category: "Redes 5G",
      duration: "60h",
      originalPrice: "R$ 597,00",
      price: "R$ 569,00",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=400&fit=crop",
      description: "Domine as tecnologias de redes 5G e suas aplicações práticas na telecomunicação moderna.",
      checkoutUrl: "https://payment.ticto.app/O81D1A33D",
    },
    {
      id: 2,
      name: "Como Manusear um OTDR",
      category: "OTDR",
      duration: "35h",
      originalPrice: "R$ 397,00",
      price: "R$ 379,00",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
      description: "Aprenda técnicas avançadas para operação e interpretação de resultados do OTDR.",
      checkoutUrl: "https://payment.ticto.app/O0B0F2580",
    },
    {
      id: 3,
      name: "Signal Flow em Redes DWDM",
      category: "DWDM",
      duration: "15h",
      originalPrice: "R$ 97,00",
      price: "R$ 95,00",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop",
      description: "Entenda o fluxo de sinais em redes DWDM para otimização de performance.",
      checkoutUrl: "https://payment.ticto.app/O74FBEBEF",
    },
    {
      id: 4,
      name: "Comunidade DWDM - Online",
      category: "DWDM",
      duration: "80h",
      originalPrice: "R$ 997,00",
      price: "R$ 958,00",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=400&fit=crop",
      description: "Acesso completo à comunidade DWDM com conteúdo exclusivo e networking.",
      checkoutUrl: "https://payment.ticto.app/O948DDE0E",
    },
    {
      id: 5,
      name: "Planejamento e Dimensionamento de Redes DWDM",
      category: "DWDM",
      duration: "65h",
      originalPrice: "R$ 797,00",
      price: "R$ 761,00",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=400&fit=crop",
      description: "Projete e dimensione redes DWDM com eficiência e precisão técnica.",
      checkoutUrl: "https://payment.ticto.app/OA7EBFE41",
    },
    {
      id: 6,
      name: "Características de Transmissão em Redes DWDM",
      category: "DWDM",
      duration: "45h",
      originalPrice: "R$ 347,00",
      price: "R$ 335,00",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
      description: "Analise as características técnicas de transmissão em sistemas DWDM.",
      checkoutUrl: "https://payment.ticto.app/OCB5DE505",
    },
    {
      id: 7,
      name: "Introdução às Redes DWDM",
      category: "DWDM",
      duration: "50h",
      originalPrice: "R$ 497,00",
      price: "R$ 475,00",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop",
      description: "Fundamentos essenciais para compreender as redes DWDM.",
      checkoutUrl: "https://payment.ticto.app/O32C442CD",
    },
    {
      id: 8,
      name: "SmartOTDR e OTDR Avançado",
      category: "OTDR",
      duration: "75h",
      originalPrice: "R$ 1.139,40",
      price: "R$ 1.090,00",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop",
      description: "Domine técnicas avançadas com SmartOTDR e análises complexas.",
      checkoutUrl: "https://payment.ticto.app/O53E36D78",
    },
    {
      id: 9,
      name: "Atendente 360",
      category: "Atendimento",
      duration: "25h",
      originalPrice: "R$ 297,00",
      price: "R$ 285,00",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=300&h=400&fit=crop",
      description: "Desenvolva habilidades completas para atendimento ao cliente.",
      checkoutUrl: "https://payment.ticto.app/O9CB5B118",
    },
    {
      id: 10,
      name: "Roteadores Mikrotik",
      category: "Mikrotik",
      duration: "30h",
      originalPrice: "R$ 247,00",
      price: "R$ 238,00",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=300&h=400&fit=crop",
      description: "Configure e administre roteadores Mikrotik profissionalmente.",
      checkoutUrl: "https://payment.ticto.app/OA79C4682",
    },
    {
      id: 11,
      name: "Domine o WiFi Pro",
      category: "WiFi",
      duration: "20h",
      originalPrice: "R$ 197,00",
      price: "R$ 189,00",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop",
      description: "Torne-se especialista em redes WiFi profissionais.",
      checkoutUrl: "https://payment.ticto.app/OB65BD055",
    },
    {
      id: 12,
      name: "Plataforma Educacional - 1 Mês",
      category: "Plataforma",
      duration: "Acesso 1 mês",
      originalPrice: "R$ 549,00",
      price: "R$ 549,00",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Acesso completo à plataforma educacional por 1 mês.",
      checkoutUrl: "https://payment.ticto.app/OFE5011EC",
    },
    {
      id: 13,
      name: "Plataforma Educacional - 6 Meses",
      category: "Plataforma",
      duration: "Acesso 6 meses",
      originalPrice: "R$ 1.199,90",
      price: "R$ 1.199,90",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Acesso completo à plataforma educacional por 6 meses.",
      checkoutUrl: "https://payment.ticto.app/OC8519F44",
    },
    {
      id: 14,
      name: "Plataforma Educacional - 12 Meses",
      category: "Plataforma",
      duration: "Acesso 12 meses",
      originalPrice: "R$ 1.798,00",
      price: "R$ 1.798,00",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Acesso completo à plataforma educacional por 12 meses.",
      checkoutUrl: "https://payment.ticto.app/OF52483EB",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Engenheiro de Telecomunicações",
      company: "TeleBrasil",
      content: "Os cursos da Educa Nextest transformaram minha carreira. O conhecimento prático em DWDM me permitiu assumir projetos mais complexos e aumentar minha remuneração em 40%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Ana Paula Costa",
      role: "Técnica em Redes",
      company: "Vivo",
      content: "A qualidade do ensino é excepcional. Os instrutores são experts no mercado e o conteúdo é sempre atualizado com as últimas tecnologias. Recomendo para todos os profissionais da área.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Roberto Oliveira",
      role: "Supervisor de Campo",
      company: "Oi Fibra",
      content: "O curso de OTDR me deu a confiança que precisava para trabalhar com equipamentos avançados. Hoje sou referência na minha equipe e isso refletiu diretamente na minha promoção.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "Como funciona o acesso aos cursos?",
      answer: "Após a compra, você recebe imediatamente as credenciais de acesso por email. Os cursos ficam disponíveis 24/7 na nossa plataforma, permitindo que você estude no seu próprio ritmo."
    },
    {
      question: "Os cursos têm certificado?",
      answer: "Sim! Todos os nossos cursos oferecem certificado de conclusão reconhecido pelos principais fabricantes do setor. O certificado é emitido automaticamente após a conclusão do curso."
    },
    {
      question: "Posso tirar dúvidas durante o curso?",
      answer: "Claro! Oferecemos suporte completo através do WhatsApp e também temos fóruns de discussão onde você pode interagir com outros alunos e instrutores."
    },
    {
      question: "Qual é a validade do acesso?",
      answer: "O acesso aos cursos gravados é vitalício. Você poderá revisar o conteúdo quantas vezes quiser. Para a plataforma educacional, o acesso varia conforme o plano escolhido (1, 6 ou 12 meses)."
    },
    {
      question: "Preciso de equipamentos específicos?",
      answer: "Não! Nossos cursos são 100% online e você só precisa de um computador ou celular com internet. Todo o material necessário está incluído nas aulas."
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    const matchesSearch = course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const handleBuyNow = (checkoutUrl: string) => {
    window.open(checkoutUrl, '_blank');
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('cursos');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BackgroundWrapper>
      {/* Header */}
      <MobileHeader showBackButton={true} onWhatsAppClick={handleWhatsAppClick} />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Hero Section com Video */}
        <div className="py-16 sm:py-20 mb-16 sm:mb-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
                Transforme sua
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
                  Carreira em
                </span>
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #60AB4B, #4FC3F7)' }}>
                  Telecomunicações
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 sm:mb-10 leading-relaxed">
                Cursos práticos e certificados pelos maiores fabricantes do setor. 
                <span className="block mt-2 text-green-400 font-semibold">Ensino personalizado que impulsiona resultados.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12">
                <Button 
                  onClick={scrollToCourses}
                  className="text-white font-semibold px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                    boxShadow: '0 0 25px rgba(96,171,75,0.4)'
                  }}
                  size="lg"
                >
                  <span className="relative z-10">Explorar Cursos</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-white font-semibold px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 0 20px rgba(37,211,102,0.4)'
                  }}
                  size="lg"
                >
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <span className="relative z-10">Falar com Especialista</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">5000+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Profissionais Certificados</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">98%</div>
                  <div className="text-gray-300 text-sm sm:text-base">Satisfação dos Alunos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">15+</div>
                  <div className="text-gray-300 text-sm sm:text-base">Anos de Experiência</div>
                </div>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl" style={{ boxShadow: '0 0 50px rgba(79, 195, 247, 0.3)' }}>
                <iframe
                  src="https://player.vimeo.com/video/956581145?h=0&title=0&byline=0&portrait=0&autoplay=1&muted=1&loop=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <SectionSeparator variant="blue" />

        {/* Seção Copy Persuasiva */}
        <div className="py-16 sm:py-20 mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8">
              Por que escolher a 
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
                {" "}Educa Nextest?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed">
              Somos a única plataforma que oferece ensino técnico certificado pelos maiores fabricantes do mercado, 
              com metodologia prática que garante sua inserção imediata no mercado de trabalho.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <Card className="bg-gray-800 bg-opacity-50 border border-gray-600 hover:border-blue-400 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Certificação Reconhecida</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Certificados validados pelos principais fabricantes do setor de telecomunicações.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 bg-opacity-50 border border-gray-600 hover:border-green-400 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Professores Especialistas</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Aprenda com profissionais que atuam diretamente no mercado há mais de 15 anos.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 bg-opacity-50 border border-gray-600 hover:border-purple-400 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Conteúdo Prático</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Metodologia hands-on com casos reais do mercado de telecomunicações.</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 bg-opacity-50 border border-gray-600 hover:border-orange-400 transition-all duration-300 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Crescimento Garantido</h3>
                  <p className="text-gray-300 text-sm sm:text-base">Nossos alunos reportam aumento médio de 35% na remuneração após os cursos.</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 sm:p-12 border border-gray-600">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Cursos certificados pelos maiores fabricantes do setor
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
                Invista no seu futuro profissional com a educação de qualidade que o mercado reconhece e valoriza. 
                Seja um especialista requisitado pelas principais empresas de telecomunicações.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <Button 
                  onClick={scrollToCourses}
                  className="text-white font-semibold px-10 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                    boxShadow: '0 0 25px rgba(96,171,75,0.4)'
                  }}
                  size="lg"
                >
                  <span className="relative z-10">Começar Agora</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-white font-semibold px-10 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 0 20px rgba(37,211,102,0.4)'
                  }}
                  size="lg"
                >
                  <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  <span className="relative z-10">Falar com Especialista</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <SectionSeparator variant="green" />

        {/* Seção de Depoimentos */}
        <div className="py-16 sm:py-20 mb-16 sm:mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">
              O que nossos alunos dizem
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16">
              Histórias reais de transformação profissional
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-gray-800 bg-opacity-50 border border-gray-600 hover:border-blue-400 transition-all duration-300">
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center mb-4 sm:mb-6">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-3 sm:mr-4 object-cover"
                      />
                      <div>
                        <h4 className="text-white font-semibold text-base sm:text-lg">{testimonial.name}</h4>
                        <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                        <p className="text-blue-400 text-xs sm:text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed italic text-sm sm:text-base">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <SectionSeparator variant="purple" />

        {/* Filtros e Busca */}
        <div id="cursos" className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-center max-w-md mx-auto">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  className="w-full bg-gray-800 bg-opacity-50 border border-gray-600 text-white hover:bg-gray-700 hover:bg-opacity-50 text-sm sm:text-base"
                >
                  {selectedCategory}
                  <ChevronDown className="ml-2 w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-gray-800 border-gray-600 z-50">
                <div className="p-2">
                  <div className="relative mb-2">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Buscar cursos..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 bg-gray-700 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400 text-sm"
                    />
                  </div>
                  <SectionSeparator variant="cyan" className="my-2 bg-gray-600" />
                  {categories.map((category) => (
                    <DropdownMenuItem 
                      key={category} 
                      onClick={() => setSelectedCategory(category)}
                      className="text-white hover:bg-gray-700 cursor-pointer text-sm"
                    >
                      {category}
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Catálogo de Cursos - Layout Netflix Otimizado */}
        <div className="mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
            Nossos Cursos ({filteredCourses.length})
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="group cursor-pointer flex flex-col">
                {/* Course Image/Cover */}
                <div className="relative mb-3 sm:mb-4 overflow-hidden rounded-lg bg-gray-800 flex-shrink-0" style={{ aspectRatio: '3/4', height: '240px' }}>
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 sm:w-16 sm:h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Category Badge */}
                  <Badge 
                    className="absolute top-2 left-2 text-xs text-white border-0"
                    style={{ backgroundColor: '#60AB4B' }}
                  >
                    {course.category}
                  </Badge>
                </div>

                {/* Course Info */}
                <div className="flex flex-col justify-between h-28 sm:h-32">
                  <div className="flex-grow">
                    <h3 className="text-white font-semibold text-xs sm:text-sm line-clamp-2 group-hover:text-blue-300 transition-colors leading-tight mb-1 sm:mb-2">
                      {course.name}
                    </h3>
                    
                    <div className="flex items-center text-gray-300 text-xs mb-1 sm:mb-2">
                      <Clock className="w-3 h-3 mr-1 flex-shrink-0" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-2">
                    {/* Pricing */}
                    <div className="space-y-1">
                      {course.originalPrice !== course.price && (
                        <div className="text-gray-400 text-xs line-through">
                          {course.originalPrice}
                        </div>
                      )}
                      <div className="font-bold text-green-400 text-xs sm:text-sm">
                        {course.price}
                      </div>
                    </div>

                    {/* Buy Button */}
                    <Button 
                      onClick={() => handleBuyNow(course.checkoutUrl)}
                      className="w-full text-white font-semibold text-xs py-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group h-7 sm:h-8"
                      style={{
                        background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                        boxShadow: '0 0 10px rgba(96,171,75,0.3)'
                      }}
                      size="sm"
                    >
                      <span className="relative z-10">Comprar</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <SectionSeparator variant="cyan" />

        {/* Seção FAQ */}
        <div className="py-16 sm:py-20 mb-16 sm:mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 text-center">
              Perguntas Frequentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 text-center mb-12 sm:mb-16">
              Tire suas dúvidas sobre nossos cursos
            </p>

            <div className="space-y-3 sm:space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-gray-800 bg-opacity-50 border border-gray-600 hover:border-blue-400 transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-gray-700 hover:bg-opacity-30 transition-colors"
                    >
                      <h3 className="text-white font-semibold text-base sm:text-lg pr-4">{faq.question}</h3>
                      {openFAQ === index ? (
                        <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFAQ === index && (
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Ainda tem dúvidas? Entre em contato conosco!</p>
              <Button 
                onClick={handleWhatsAppClick}
                className="text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                  boxShadow: '0 0 20px rgba(37,211,102,0.4)'
                }}
                size="lg"
              >
                <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="relative z-10">Falar no WhatsApp</span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer onWhatsAppClick={handleWhatsAppClick} />
    </BackgroundWrapper>
  );
};

export default B2CPage;
