import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

interface WalletConnectButtonProps {
  onConnect: (gardenerId: string) => void;
}

const WalletConnectButton: React.FC<WalletConnectButtonProps> = ({ onConnect }) => {
  const [status, setStatus] = useState<'initial' | 'connecting' | 'connected'>('initial');
  const [gardenerId, setGardenerId] = useState<string | null>(null);
  const [purchaseAmount, setPurchaseAmount] = useState('0.125');
  const [jitoTip, setJitoTip] = useState('0.0001');

  useEffect(() => {
    if (status === 'connecting') {
      const timer = setTimeout(() => {
        const mockGardenerId = '00001';
        setGardenerId(mockGardenerId);
        setStatus('connected');
        onConnect(mockGardenerId);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status, onConnect]);

  if (status === 'connected' && gardenerId) {
    return (
      <div className="space-y-3">
        <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-500" />
          <span className="text-sm text-emerald-700">
            Connected account: Gardener #{gardenerId}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="block text-sm font-medium text-emerald-700">
              Developer purchase (SOL)
            </label>
            <input
              type="number"
              value={purchaseAmount}
              onChange={(e) => setPurchaseAmount(e.target.value)}
              step="0.001"
              min="0"
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-emerald-700">
              Jito Tip (SOL)
            </label>
            <input
              type="number"
              value={jitoTip}
              onChange={(e) => setJitoTip(e.target.value)}
              step="0.0001"
              min="0"
              className="w-full px-3 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 transition-colors"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() => setStatus('connecting')}
      disabled={status === 'connecting'}
      className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all disabled:opacity-75"
    >
      {status === 'connecting' ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Connecting your wallet...
        </>
      ) : (
        'Connect Phantom Wallet'
      )}
    </button>
  );
};

export default WalletConnectButton;