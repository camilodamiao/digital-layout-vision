
import React from 'react';

interface BackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundWrapper = ({ children, className = "" }: BackgroundWrapperProps) => {
  return (
    <div 
      className={`min-h-screen relative overflow-hidden ${className}`} 
      style={{
        background: 'linear-gradient(135deg, #0A1019 0%, #102A3F 25%, #0D1B2A 50%, #102A3F 75%, #0A1019 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full blur-3xl" style={{
          backgroundColor: '#60AB4B'
        }}></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full blur-2xl" style={{
          backgroundColor: '#4FC3F7'
        }}></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full blur-3xl" style={{
          backgroundColor: '#60AB4B'
        }}></div>
      </div>
      {children}
    </div>
  );
};

export default BackgroundWrapper;
