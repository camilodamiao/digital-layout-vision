
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Clock, Award, Filter, Search } from "lucide-react";
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
      modality: "Online + Prático",
      description: "Aprenda desde conceitos básicos até técnicas avançadas de instalação e manutenção de redes de fibra óptica.",
      checkoutUrl: "https://ticto.com/curso1", // Substitua pela URL real
    },
    {
      id: 2,
      name: "Wi-Fi 6 e 6E - Implementação Avançada",
      category: "Wi-Fi",
      duration: "25h",
      modality: "100% Online",
      description: "Domine as mais novas tecnologias Wi-Fi e implemente redes de alta performance com Wi-Fi 6 e 6E.",
      checkoutUrl: "https://ticto.com/curso2",
    },
    {
      id: 3,
      name: "DWDM - Multiplexação Densa",
      category: "DWDM",
      duration: "35h",
      modality: "Híbrido",
      description: "Tecnologia DWDM para transmissão de dados em longas distâncias com máxima eficiência.",
      checkoutUrl: "https://ticto.com/curso3",
    },
    {
      id: 4,
      name: "Certificação Viavi - Nivel 1",
      category: "Certificação",
      duration: "60h",
      modality: "Online + Prático",
      description: "Prepare-se para a certificação oficial Viavi e destaque-se no mercado de telecomunicações.",
      checkoutUrl: "https://ticto.com/curso4",
    },
    {
      id: 5,
      name: "Redes Ópticas Passivas (PON)",
      category: "Redes",
      duration: "30h",
      modality: "100% Online",
      description: "Tecnologias PON, GPON, XGS-PON para implementação de redes de acesso de alta velocidade.",
      checkoutUrl: "https://ticto.com/curso5",
    },
    {
      id: 6,
      name: "Soldas e Emendas em Fibra Óptica",
      category: "Fibra Óptica",
      duration: "20h",
      modality: "Prático Presencial",
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
          <Button 
            onClick={handleWhatsAppClick}
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-gray-900"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Dúvidas
          </Button>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Aprenda com os melhores e
            <span className="block text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(to right, #4FC3F7, #60AB4B)' }}>
              avance na sua carreira
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Escolha seu curso, estude com flexibilidade e seja certificado pelos maiores fabricantes do setor de telecomunicações.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="text-white font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#60AB4B' }}
              size="lg"
            >
              Ver Todos os Cursos
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 text-lg"
              size="lg"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Falar com Especialista
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
                      ? 'text-white' 
                      : 'text-gray-300 border-gray-600 hover:bg-white hover:bg-opacity-10'
                  }`}
                  style={selectedCategory === category ? { backgroundColor: '#60AB4B' } : {}}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category}
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

        {/* Catálogo de Cursos */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Nossos Cursos ({filteredCourses.length})
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-gray-800 bg-opacity-50 border border-gray-700 backdrop-blur-sm hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge 
                      className="text-white border-0"
                      style={{ backgroundColor: '#60AB4B' }}
                    >
                      {course.category}
                    </Badge>
                    <Badge variant="outline" className="text-gray-300 border-gray-600">
                      {course.modality}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{course.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4 text-gray-300">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {course.description}
                  </p>
                  <Button 
                    onClick={() => handleBuyNow(course.checkoutUrl)}
                    className="w-full text-white font-semibold hover:scale-105 transition-all duration-300"
                    style={{ backgroundColor: '#60AB4B' }}
                    size="lg"
                  >
                    Comprar Agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Dúvidas Frequentes
          </h2>
          <div className="space-y-6">
            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Como funcionam as certificações?</h3>
                <p className="text-gray-300">Nossos cursos oferecem certificações reconhecidas pelos principais fabricantes do setor, como Viavi e Sumitomo. Após completar o curso e ser aprovado na avaliação, você recebe o certificado oficial.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Posso estudar no meu ritmo?</h3>
                <p className="text-gray-300">Sim! Nossos cursos online permitem que você estude quando e onde quiser. O conteúdo fica disponível 24/7 durante o período do curso.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 bg-opacity-50 border border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-white font-semibold mb-2">Há suporte durante o curso?</h3>
                <p className="text-gray-300">Oferecemos suporte completo com instrutores especializados, fóruns de discussão e atendimento via WhatsApp para tirar todas as suas dúvidas.</p>
              </CardContent>
            </Card>
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
              className="text-white font-semibold px-12 py-6 text-xl hover:scale-105 transition-all duration-300"
              style={{ backgroundColor: '#60AB4B' }}
              size="lg"
            >
              <Award className="w-6 h-6 mr-3" />
              Ver Certificações
            </Button>
            <Button 
              onClick={handleWhatsAppClick}
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-gray-900 font-semibold px-12 py-6 text-xl"
              size="lg"
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2CPage;
