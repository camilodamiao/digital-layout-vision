
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ArrowLeft, MessageSquare, Clock, Search, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const B2CPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0A1019 0%, #102A3F 25%, #0D1B2A 50%, #102A3F 75%, #0A1019 100%)' }}>
      {/* Header */}
      <header className="relative z-10 py-6 px-6" style={{ background: 'linear-gradient(135deg, #0A1019 0%, #0D1B2A 50%, #102A3F 100%)' }}>
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
          <Button 
            onClick={handleWhatsAppClick}
            className="text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 0 15px rgba(37,211,102,0.3)'
            }}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            <span className="relative z-10">Dúvidas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section with Video */}
        <div className="text-center mb-16 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Cursos Técnicos em
                <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
                  Telecomunicações
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Ensino personalizado que impulsiona resultados. Flexibilidade e qualidade de um método inovador.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                    boxShadow: '0 0 20px rgba(96,171,75,0.3)'
                  }}
                  size="lg"
                >
                  <span className="relative z-10">Ver Todos os Cursos</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
                <Button 
                  onClick={handleWhatsAppClick}
                  className="text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    boxShadow: '0 0 15px rgba(37,211,102,0.3)'
                  }}
                  size="lg"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  <span className="relative z-10">Falar com Especialista</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Button>
              </div>
            </div>

            {/* Video Content */}
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-2xl">
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

        {/* Filtros e Busca em Dropdown */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between max-w-2xl mx-auto">
            {/* Dropdown com Filtros e Busca */}
            <div className="w-full">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full bg-gray-800 bg-opacity-50 border border-gray-600 text-white">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent className="bg-gray-800 border-gray-600">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="text-white hover:bg-gray-700">
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Campo de Busca */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 bg-opacity-50 border border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </div>
        </div>

        {/* Catálogo de Cursos - Layout Netflix Vertical */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Nossos Cursos ({filteredCourses.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="group cursor-pointer">
                {/* Course Image/Cover - Vertical */}
                <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-800" style={{ aspectRatio: '3/4' }}>
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Category Badge */}
                  <Badge 
                    className="absolute top-3 left-3 text-xs text-white border-0"
                    style={{ backgroundColor: '#60AB4B' }}
                  >
                    {course.category}
                  </Badge>
                </div>

                {/* Course Info */}
                <div className="space-y-3">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-blue-300 transition-colors leading-tight">
                    {course.name}
                  </h3>
                  
                  <div className="flex items-center text-gray-300 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    <span>{course.duration}</span>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-1">
                    {course.originalPrice !== course.price && (
                      <div className="text-gray-400 text-xs line-through">
                        {course.originalPrice}
                      </div>
                    )}
                    <div className="font-bold text-green-400 text-sm">
                      {course.price}
                    </div>
                  </div>

                  {/* Buy Button */}
                  <Button 
                    onClick={() => handleBuyNow(course.checkoutUrl)}
                    className="w-full text-white font-semibold text-xs py-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
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
            ))}
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-6">
            Cursos certificados pelos maiores fabricantes do setor
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Invista no seu futuro profissional com a educação de qualidade que o mercado reconhece e valoriza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="text-white font-semibold px-12 py-6 text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                boxShadow: '0 0 20px rgba(96,171,75,0.3)'
              }}
              size="lg"
            >
              <span className="relative z-10">Ver Todos os Cursos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              className="text-white font-semibold px-12 py-6 text-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 0 15px rgba(37,211,102,0.3)'
              }}
              size="lg"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              <span className="relative z-10">Falar com Especialista</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 text-center" style={{ backgroundColor: '#102A3F' }}>
        <div className="container mx-auto">
          <p className="text-gray-300">
            © 2024 Educa Nextest. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default B2CPage;
