
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Clock, Filter, Search, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const B2CPage = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const whatsappNumber = "5511999999999";
  const whatsappMessage = "Olá! Tenho dúvidas sobre os cursos da Educa Nextest.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const categories = ["Todos", "Wi-Fi", "Fibra Óptica", "DWDM", "Redes", "Certificação"];

  const courses = [
    {
      id: 1,
      name: "Fundamentos de Fibra Óptica",
      category: "Fibra Óptica",
      duration: "40h",
      price: "R$ 299,90",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop",
      description: "Aprenda desde conceitos básicos até técnicas avançadas de instalação e manutenção de redes de fibra óptica.",
      checkoutUrl: "https://ticto.com/curso1",
    },
    {
      id: 2,
      name: "Wi-Fi 6 e 6E - Implementação Avançada",
      category: "Wi-Fi",
      duration: "25h",
      price: "R$ 199,90",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
      description: "Domine as mais novas tecnologias Wi-Fi e implemente redes de alta performance com Wi-Fi 6 e 6E.",
      checkoutUrl: "https://ticto.com/curso2",
    },
    {
      id: 3,
      name: "DWDM - Multiplexação Densa",
      category: "DWDM",
      duration: "35h",
      price: "R$ 399,90",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop",
      description: "Tecnologia DWDM para transmissão de dados em longas distâncias com máxima eficiência.",
      checkoutUrl: "https://ticto.com/curso3",
    },
    {
      id: 4,
      name: "Certificação Viavi - Nivel 1",
      category: "Certificação",
      duration: "60h",
      price: "R$ 599,90",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=225&fit=crop",
      description: "Prepare-se para a certificação oficial Viavi e destaque-se no mercado de telecomunicações.",
      checkoutUrl: "https://ticto.com/curso4",
    },
    {
      id: 5,
      name: "Redes Ópticas Passivas (PON)",
      category: "Redes",
      duration: "30h",
      price: "R$ 249,90",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400&h=225&fit=crop",
      description: "Tecnologias PON, GPON, XGS-PON para implementação de redes de acesso de alta velocidade.",
      checkoutUrl: "https://ticto.com/curso5",
    },
    {
      id: 6,
      name: "Soldas e Emendas em Fibra Óptica",
      category: "Fibra Óptica",
      duration: "20h",
      price: "R$ 179,90",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=225&fit=crop",
      description: "Técnicas práticas de soldas e emendas com equipamentos profissionais da indústria.",
      checkoutUrl: "https://ticto.com/curso6",
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
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cursos Técnicos em
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
              Telecomunicações
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ensino personalizado que impulsiona resultados. Flexibilidade e qualidade de um método inovador.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

        {/* Filtros e Busca */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categorias */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={`${
                    selectedCategory === category 
                      ? 'text-white relative overflow-hidden group' 
                      : 'text-gray-300 border-gray-600 hover:bg-white hover:bg-opacity-10'
                  }`}
                  style={selectedCategory === category ? {
                    background: 'linear-gradient(135deg, #60AB4B 0%, #4FC3F7 100%)',
                    boxShadow: '0 0 15px rgba(96,171,75,0.3)'
                  } : {}}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  <span className="relative z-10">{category}</span>
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  )}
                </Button>
              ))}
            </div>

            {/* Busca */}
            <div className="relative w-full lg:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-gray-800 bg-opacity-50 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 w-full lg:w-80"
              />
            </div>
          </div>
        </div>

        {/* Catálogo de Cursos - Layout Netflix */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">
            Nossos Cursos ({filteredCourses.length})
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredCourses.map((course) => (
              <div key={course.id} className="group cursor-pointer">
                {/* Course Image/Cover */}
                <div className="relative mb-3 overflow-hidden rounded-lg aspect-video bg-gray-800">
                  <img 
                    src={course.image} 
                    alt={course.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                <div className="space-y-2">
                  <h3 className="text-white font-semibold text-sm line-clamp-2 group-hover:text-blue-300 transition-colors">
                    {course.name}
                  </h3>
                  
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                    <span className="font-bold text-green-400">{course.price}</span>
                  </div>

                  {/* Buy Button */}
                  <Button 
                    onClick={() => handleBuyNow(course.checkoutUrl)}
                    className="w-full text-white font-semibold text-sm py-2 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
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
