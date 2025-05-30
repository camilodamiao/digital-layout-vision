
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  label: string;
  action: () => void;
}

interface MobileHeaderProps {
  menuItems: MenuItem[];
  showBackButton?: boolean;
  loginUrl?: string;
  loginText?: string;
}

const MobileHeader = ({ 
  menuItems, 
  showBackButton = true, 
  loginUrl = 'https://cursos.educanextest.com.br/',
  loginText = 'Fazer login →'
}: MobileHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    window.open(loginUrl, '_blank');
  };

  return (
    <header className="relative z-50 shadow-lg border-b border-cyan-400/20" style={{ 
      background: 'linear-gradient(135deg, #0A1019 0%, #102A3F 50%, #0D1B2A 100%)' 
    }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
              alt="Educa Nextest" 
              className="h-8 md:h-12" 
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={item.action}
                  className="text-white hover:text-cyan-300 transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-green-500/10 text-sm relative group"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 group-hover:w-full transition-all duration-300"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Back Button - Hidden on mobile */}
            {showBackButton && (
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="hidden md:flex text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-green-500/10 text-sm"
                size="sm"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}

            {/* Login Button */}
            <Button
              onClick={handleLoginClick}
              className="text-white font-semibold px-3 md:px-6 py-2 md:py-3 text-sm rounded-lg transition-all duration-300 hover:scale-105 relative overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                boxShadow: '0 0 15px rgba(37,211,102,0.3)'
              }}
              size="sm"
            >
              <span className="relative z-10">{loginText}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-green-500/10"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gray-800/90 backdrop-blur-sm rounded-lg border border-cyan-400/20 shadow-xl animate-in slide-in-from-top-2 duration-200" 
               style={{ background: 'linear-gradient(135deg, rgba(10,16,25,0.95) 0%, rgba(16,42,63,0.95) 100%)' }}>
            <nav className="p-4 space-y-2">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    item.action();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left text-white hover:text-cyan-300 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-green-500/10 text-sm"
                >
                  {item.label}
                </button>
              ))}
              {showBackButton && (
                <div className="pt-2 border-t border-cyan-400/20">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate('/');
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-green-500/10 justify-start py-2 text-sm"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar
                  </Button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
