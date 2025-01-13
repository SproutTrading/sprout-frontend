import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BuyTokenModalProps {
  isOpen: boolean;
  onClose: () => void;
  tokenName: string;
  tokenTicker: string;
  position: { x: number; y: number };
  width: number;
}

const BuyTokenModal: React.FC<BuyTokenModalProps> = ({ 
  isOpen, 
  onClose, 
  tokenName, 
  tokenTicker,
  position,
  width
}) => {
  const [solAmount, setSolAmount] = useState('');
  const [jitoTip, setJitoTip] = useState('0.0001');

  if (!isOpen) return null;

  const handleBuy = () => {
    console.log('Buying token:', { solAmount, jitoTip });
    onClose();
  };

  return (
    <div className="fixed inset-0" style={{ zIndex: 9999 }}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 backdrop-blur-sm bg-emerald-900/20"
        onClick={onClose}
      />

      {/* Modal positioned over the token card */}
      <div 
        className="absolute bg-gradient-to-br from-white/95 to-emerald-50/95 backdrop-blur-md rounded-lg shadow-xl border border-emerald-200 transform transition-all duration-200 ease-out"
        style={{
          top: position.y,
          left: position.x,
          width: width,
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Rest of the modal content remains the same */}
        <div className="flex items-center justify-between p-3 border-b border-emerald-100">
          <h3 className="text-sm font-semibold text-emerald-800">Buy {tokenName}</h3>
          <button 
            onClick={onClose}
            className="text-emerald-400 hover:text-emerald-600 transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        
        <div className="p-3 space-y-3">
          <div className="space-y-1">
            <label className="block text-xs font-medium text-emerald-700">
              SOL Amount
            </label>
            <div className="relative">
              <input
                type="number"
                value={solAmount}
                onChange={(e) => setSolAmount(e.target.value)}
                placeholder="0.0"
                step="0.01"
                min="0"
                className="w-full px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded focus:outline-none focus:border-emerald-400 text-emerald-800 text-sm transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-600 font-medium">
                SOL
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-medium text-emerald-700">
              Jito Tip
            </label>
            <div className="relative">
              <input
                type="number"
                value={jitoTip}
                onChange={(e) => setJitoTip(e.target.value)}
                step="0.0001"
                min="0"
                className="w-full px-3 py-1.5 bg-white/80 backdrop-blur-sm border border-emerald-200 rounded focus:outline-none focus:border-emerald-400 text-emerald-800 text-sm transition-colors"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-emerald-600 font-medium">
                SOL
              </span>
            </div>
          </div>

          <div className="p-2 bg-emerald-50/80 backdrop-blur-sm rounded border border-emerald-200">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-emerald-700">Token</span>
              <span className="text-xs font-bold text-emerald-800">{tokenTicker}</span>
            </div>
          </div>

          <button
            onClick={handleBuy}
            disabled={!solAmount || parseFloat(solAmount) <= 0}
            className="w-full py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-sm rounded font-medium hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-emerald-500 disabled:hover:to-green-500"
          >
            Buy Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyTokenModal;