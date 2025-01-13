import React, { useState } from 'react';
import { X } from 'lucide-react';
import BuyPanel from './panels/BuyPanel';
import ContributePanel from './panels/ContributePanel';

export type PanelType = 'buy' | 'contribute' | null;

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  type: PanelType;
  token: {
    name: string;
    ticker: string;
  } | null;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose, type: initialType, token }) => {
  const [activeTab, setActiveTab] = useState<'buy' | 'contribute'>(initialType || 'buy');

  if (!isOpen || !token) return null;

  return (
    <div 
      className="fixed inset-y-0 right-0 w-96 bg-white/95 backdrop-blur-md shadow-xl border-l border-emerald-200 transform transition-transform duration-300 ease-out z-50"
      style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-emerald-100">
          <h2 className="text-lg font-semibold text-emerald-800">{token.name}</h2>
          <button
            onClick={onClose}
            className="p-1 text-emerald-400 hover:text-emerald-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-emerald-100">
          <button
            onClick={() => setActiveTab('buy')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'buy'
                ? 'text-emerald-800 border-b-2 border-emerald-500'
                : 'text-emerald-600 hover:text-emerald-700'
            }`}
          >
            Buy Token
          </button>
          <button
            onClick={() => setActiveTab('contribute')}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === 'contribute'
                ? 'text-emerald-800 border-b-2 border-emerald-500'
                : 'text-emerald-600 hover:text-emerald-700'
            }`}
          >
            Contribute
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'buy' && <BuyPanel token={token} onClose={onClose} />}
          {activeTab === 'contribute' && <ContributePanel token={token} onClose={onClose} />}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;