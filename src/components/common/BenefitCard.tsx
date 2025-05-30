
import { Card, CardContent } from '@/components/ui/card';
import { ReactNode } from 'react';

interface BenefitCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  variant?: 'cyan' | 'green';
}

const BenefitCard = ({ title, description, icon, variant = 'cyan' }: BenefitCardProps) => {
  const isGreen = variant === 'green';
  
  return (
    <Card className="gradient-border bg-gradient-to-br from-blue-900/20 to-blue-800/10 backdrop-blur-sm hover:scale-105 transition-all duration-300 hover:shadow-2xl group h-full">
      <CardContent className="p-4 md:p-6 text-center h-full flex flex-col">
        <div className="mb-3 md:mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className={`text-lg md:text-xl font-bold text-white mb-2 md:mb-3 transition-colors duration-300 ${
          isGreen ? 'group-hover:text-green-300' : 'group-hover:text-cyan-300'
        }`}>
          {title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base group-hover:text-white transition-colors duration-300 flex-1">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default BenefitCard;
