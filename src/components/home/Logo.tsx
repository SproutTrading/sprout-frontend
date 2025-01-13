import React from 'react';

interface LogoProps {
  onClick: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://i.imgur.com/WJxBtdL.png" 
        alt="Sprout"
        className="w-6 h-6"
      />
      <button
        onClick={onClick}
        className="text-lg font-bold text-emerald-800 hover:text-emerald-700 transition-colors"
      >
        Sprout.trading
      </button>
    </div>
  );
};

export default Logo;