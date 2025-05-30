
import React from 'react';
import { Separator } from "@/components/ui/separator";

interface SectionSeparatorProps {
  variant?: 'blue' | 'green' | 'purple' | 'cyan';
  className?: string;
}

const SectionSeparator = ({ variant = 'blue', className = "" }: SectionSeparatorProps) => {
  const gradientMap = {
    blue: 'from-transparent via-blue-400 to-transparent',
    green: 'from-transparent via-green-400 to-transparent',
    purple: 'from-transparent via-purple-400 to-transparent',
    cyan: 'from-transparent via-cyan-400 to-transparent'
  };

  return (
    <div className={`mb-16 sm:mb-20 ${className}`}>
      <Separator className={`bg-gradient-to-r ${gradientMap[variant]} opacity-30`} />
    </div>
  );
};

export default SectionSeparator;
