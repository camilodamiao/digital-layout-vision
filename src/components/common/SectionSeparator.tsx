
interface SectionSeparatorProps {
  variant?: 'cyan' | 'green' | 'gradient';
}

const SectionSeparator = ({ variant = 'cyan' }: SectionSeparatorProps) => {
  const getGradient = () => {
    switch (variant) {
      case 'green':
        return 'from-green-400/30 to-transparent';
      case 'gradient':
        return 'from-cyan-400/30 via-green-400/30 to-transparent';
      default:
        return 'from-cyan-400/30 to-transparent';
    }
  };

  const getGlowGradient = () => {
    switch (variant) {
      case 'green':
        return 'from-green-400 to-cyan-400';
      case 'gradient':
        return 'from-cyan-400 via-green-400 to-cyan-400';
      default:
        return 'from-cyan-400 to-green-400';
    }
  };

  return (
    <div className="relative py-4 md:py-8">
      <div className="absolute inset-0 flex items-center">
        <div className={`w-full h-px bg-gradient-to-r ${getGradient()}`}></div>
      </div>
      <div className="relative flex justify-center">
        <div className={`w-8 md:w-16 h-px bg-gradient-to-r ${getGlowGradient()} glow-effect`}></div>
      </div>
    </div>
  );
};

export default SectionSeparator;
