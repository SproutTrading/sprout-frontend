import React, { useState } from 'react';
import PurchaseConsole, { LogState } from './PurchaseConsole';

interface BuyPanelProps {
  token: {
    name: string;
    ticker: string;
  };
  onClose: () => void;
}

const BuyPanel: React.FC<BuyPanelProps> = ({ token, onClose }) => {
  const [solAmount, setSolAmount] = useState('');
  const [jitoTip, setJitoTip] = useState('0.0001');
  const [logState, setLogState] = useState<LogState>(null);
  const [logMessage, setLogMessage] = useState('');

  const handleBuy = async () => {
    const amount = parseFloat(solAmount);
    const tip = parseFloat(jitoTip);
    const total = amount + tip;

    setLogState('pending');
    setLogMessage(`Processing purchase of ${token.ticker} for ${amount} SOL (${tip} SOL tip)...`);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLogState('success');
    setLogMessage(`Successfully purchased ${token.ticker} for ${total} SOL total! Transaction confirmed.`);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLogState('error');
    setLogMessage(`Failed to process next transaction: Insufficient funds (${total} SOL required)`);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <h3 className="text-sm font-medium text-emerald-700 mb-1">Token Info</h3>
        <div className="text-lg font-semibold text-emerald-800">{token.name}</div>
        <div className="text-sm text-emerald-600">{token.ticker}</div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <img src="https://i.imgur.com/IAKIik8.png" alt="SOL" className="w-4 h-4" />
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
              className="w-full px-4 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 text-emerald-800 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-emerald-600 font-medium">
              SOL
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <img src="https://i.imgur.com/eenDBqM.png" alt="Jito" className="w-4 h-4" />
            Jito Tip
          </label>
          <div className="relative">
            <input
              type="number"
              value={jitoTip}
              onChange={(e) => setJitoTip(e.target.value)}
              step="0.0001"
              min="0"
              className="w-full px-4 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 text-emerald-800 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-emerald-600 font-medium">
              SOL
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleBuy}
        disabled={!solAmount || parseFloat(solAmount) <= 0}
        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <img src="https://i.imgur.com/ERV79bv.png" alt="Buy" className="w-4 h-4" />
        Buy Now
      </button>

      {logState && (
        <PurchaseConsole 
          state={logState}
          message={logMessage}
        />
      )}
    </div>
  );
};

export default BuyPanel;