
import React from 'react';
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MobileHeaderProps {
  showBackButton?: boolean;
  onWhatsAppClick?: () => void;
}

const MobileHeader = ({ showBackButton = false, onWhatsAppClick }: MobileHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="relative z-10 py-4 sm:py-6 px-4 sm:px-6" style={{ background: 'linear-gradient(135deg, #0A1019 0%, #0D1B2A 50%, #102A3F 100%)' }}>
      <div className="container mx-auto flex items-center justify-between">
        {showBackButton ? (
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="text-white hover:bg-white hover:bg-opacity-10 p-2 sm:px-4 sm:py-2"
          >
            <ArrowLeft className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
        ) : (
          <div className="w-[60px] sm:w-[80px]"></div>
        )}
        
        <img 
          src="/lovable-uploads/bb450ec0-408d-48fd-8658-aaa1bbbfec7d.png" 
          alt="Educa Nextest" 
          className="h-10 sm:h-12"
        />
        
        {onWhatsAppClick && (
          <Button 
            onClick={onWhatsAppClick}
            className="text-white font-semibold hover:scale-105 transition-all duration-300 relative overflow-hidden group p-2 sm:px-4 sm:py-2 text-sm sm:text-base"
            style={{
              background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
              boxShadow: '0 0 15px rgba(37,211,102,0.3)'
            }}
          >
            <MessageSquare className="w-4 h-4 sm:mr-2" />
            <span className="hidden sm:inline relative z-10">Dúvidas</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
        )}
      </div>
    </header>
  );
};

export default MobileHeader;
