import React from 'react';

interface DesktopIconProps {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-32 h-32 flex items-center justify-center rounded-lg bg-gradient-to-br from-emerald-200/30 to-green-100/30 border border-emerald-300/50 backdrop-blur-sm hover:bg-white/10 transition-colors pointer-events-auto cursor-pointer"
    >
      <div className="flex flex-col items-center gap-2">
        <Icon size={32} className="text-emerald-500" />
        <span className="text-sm text-center text-emerald-500 font-semibold">
          {label}
        </span>
      </div>
    </button>
  );
}

export default DesktopIcon;