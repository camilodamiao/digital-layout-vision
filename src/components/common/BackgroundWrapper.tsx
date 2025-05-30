
import { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  variant?: 'default' | 'minimal';
}

const BackgroundWrapper = ({ children, variant = 'default' }: BackgroundWrapperProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0A1019 0%, #102A3F 25%, #0D1B2A 50%, #102A3F 75%, #0A1019 100%)'
    }}>
      {/* Background Pattern */}
      {variant === 'default' && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 2px 2px, rgba(79,195,247,0.3) 1px, transparent 0),
              linear-gradient(45deg, transparent 24%, rgba(96,171,75,0.1) 25%, rgba(96,171,75,0.1) 26%, transparent 27%, transparent 74%, rgba(79,195,247,0.1) 75%, rgba(79,195,247,0.1) 76%, transparent 77%)
            `,
            backgroundSize: '40px 40px, 80px 80px'
          }}></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 border border-cyan-400 opacity-20 rotate-45 circuit-line"></div>
          <div className="absolute top-40 right-20 w-16 md:w-24 h-16 md:h-24 border border-green-400 opacity-20 rotate-12 circuit-line" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 left-1/4 w-12 md:w-20 h-12 md:h-20 border border-blue-400 opacity-20 rotate-45 circuit-line" style={{ animationDelay: '2s' }}></div>
          
          {/* Circuit lines */}
          <div className="absolute top-0 left-1/3 w-px h-20 md:h-40 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-30 circuit-line"></div>
          <div className="absolute top-60 right-1/4 w-px h-16 md:h-32 bg-gradient-to-b from-transparent via-green-400 to-transparent opacity-30 circuit-line" style={{ animationDelay: '1.5s' }}></div>
          
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/5 w-1 h-1 bg-cyan-400 rounded-full opacity-60 circuit-line"></div>
          <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-green-400 rounded-full opacity-60 circuit-line" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-2/3 w-1 h-1 bg-blue-400 rounded-full opacity-60 circuit-line" style={{ animationDelay: '2.5s' }}></div>
        </div>
      )}

      {variant === 'minimal' && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-20 md:w-32 h-20 md:h-32 rounded-full blur-3xl" style={{
            backgroundColor: '#60AB4B'
          }}></div>
          <div className="absolute top-40 right-20 w-16 md:w-24 h-16 md:h-24 rounded-full blur-2xl" style={{
            backgroundColor: '#4FC3F7'
          }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 md:w-40 h-24 md:h-40 rounded-full blur-3xl" style={{
            backgroundColor: '#60AB4B'
          }}></div>
        </div>
      )}

      {children}
    </div>
  );
};

export default BackgroundWrapper;
