import React from 'react';

interface DesktopIconBoxProps {
  children: React.ReactNode;
  onClick: () => void;
}

const DesktopIconBox: React.FC<DesktopIconBoxProps> = ({ children, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="w-32 h-32 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-200/30 to-green-100/30 border border-emerald-300/50 backdrop-blur-sm hover:bg-white/10 transition-colors"
    >
      {children}
    </button>
  );
};

export default DesktopIconBox;