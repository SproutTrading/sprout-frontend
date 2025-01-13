import React from 'react';
import { X } from 'lucide-react';

interface WhyContributeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WhyContributeModal: React.FC<WhyContributeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-emerald-800">Why Contribute?</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h4 className="font-medium text-emerald-700">Token Allocation</h4>
            <p className="text-sm text-gray-600">
              When our sprout reaches full growth, it will bloom into a new token. 20% of this new token's supply will be distributed among top contributors based on their contribution ranking.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-emerald-700">Resource Types</h4>
            <div className="grid grid-cols-3 gap-2">
              <div className="p-2 bg-blue-50 rounded border border-blue-100">
                <div className="flex items-center gap-2">
                  <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
                  <span className="text-sm text-blue-700">Water</span>
                </div>
              </div>
              <div className="p-2 bg-stone-50 rounded border border-stone-100">
                <div className="flex items-center gap-2">
                  <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
                  <span className="text-sm text-stone-700">Fertilizer</span>
                </div>
              </div>
              <div className="p-2 bg-amber-50 rounded border border-amber-100">
                <div className="flex items-center gap-2">
                  <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
                  <span className="text-sm text-amber-700">Sunshine</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-emerald-700">Contribution Limits</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Each resource has a maximum capacity of 10 units
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Claim new resources every hour
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                Higher contributions increase your share of the token allocation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyContributeModal;