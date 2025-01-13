import React from 'react';
import { X } from 'lucide-react';

interface ClaimResourcesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ClaimResourcesPopup: React.FC<ClaimResourcesPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const resources = [
    { name: 'Water', amount: 5, icon: 'https://i.imgur.com/fiFmUCU.png', color: 'text-blue-600' },
    { name: 'Fertilizer', amount: 2, icon: 'https://i.imgur.com/oZHaXEN.png', color: 'text-stone-600' },
    { name: 'Sunshine', amount: 2, icon: 'https://i.imgur.com/SpwFpMe.png', color: 'text-amber-600' }
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
      <div className="relative bg-white rounded-lg shadow-xl border border-emerald-200 p-4 pointer-events-auto animate-[fadeIn_0.2s_ease-out]">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="text-center mb-4">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <img 
              src="https://i.imgur.com/dVJ2OZf.png" 
              alt="Success"
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-lg font-semibold text-emerald-800">Resources Claimed!</h3>
          <p className="text-sm text-emerald-600">You've received:</p>
        </div>

        <div className="flex gap-4">
          {resources.map((resource) => (
            <div key={resource.name} className="text-center">
              <div className="w-10 h-10 bg-white rounded-lg border border-gray-200 flex items-center justify-center mx-auto mb-1">
                <img 
                  src={resource.icon} 
                  alt={resource.name}
                  className="w-6 h-6"
                />
              </div>
              <div className={`text-lg font-bold ${resource.color}`}>
                +{resource.amount}
              </div>
              <div className="text-xs text-gray-500">
                {resource.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClaimResourcesPopup;