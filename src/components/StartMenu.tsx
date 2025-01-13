import React from 'react';
import { Sprout } from 'lucide-react';

interface StartMenuItem {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
  apps: StartMenuItem[];
}

const StartMenu: React.FC<StartMenuProps> = ({ isOpen, onClose, apps }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed bottom-12 left-0 w-64 bg-gradient-to-br from-emerald-700 to-emerald-800 rounded-t-lg shadow-xl border border-emerald-600/50 overflow-hidden z-50"
      onMouseLeave={onClose}
    >
      <div className="p-4 border-b border-emerald-600/30">
        <div className="flex items-center gap-2 text-white">
          <Sprout className="text-emerald-300" />
          <span className="font-semibold">Conservatory OS</span>
        </div>
      </div>
      <div className="p-2">
        {apps.map((app, index) => (
          <button
            key={index}
            onClick={() => {
              app.onClick();
              onClose();
            }}
            className="w-full flex items-center gap-3 px-4 py-2 text-white hover:bg-emerald-600/30 rounded transition-colors"
          >
            {app.icon}
            <span>{app.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default StartMenu;