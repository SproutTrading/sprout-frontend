import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

interface TokenActionsProps {
  tokenName: string;
  tokenTicker: string;
  onBuy: () => void;
  onContribute: () => void;
}

const TokenActions: React.FC<TokenActionsProps> = ({ 
  tokenName, 
  tokenTicker, 
  onBuy, 
  onContribute 
}) => {
  const { profile } = useAuthStore();
  const isConnected = !!profile;

  return (
    <div className="flex gap-2 mt-4">
      <button
        onClick={onBuy}
        disabled={!isConnected}
        className="flex-1 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white text-sm rounded transition-all flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-emerald-500 disabled:hover:to-green-500"
        title={!isConnected ? 'Connect wallet to buy tokens' : undefined}
      >
        {!isConnected ? (
          <>
            <Lock size={14} />
            Buy
          </>
        ) : (
          <>
            Buy <ArrowRight size={14} />
          </>
        )}
      </button>
      <button
        onClick={onContribute}
        disabled={!isConnected}
        className="flex-1 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white text-sm rounded transition-all flex items-center justify-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:from-emerald-500 disabled:hover:to-green-500"
        title={!isConnected ? 'Connect wallet to contribute' : undefined}
      >
        {!isConnected ? (
          <>
            <Lock size={14} />
            Contribute
          </>
        ) : (
          <>
            Contribute <ArrowRight size={14} />
          </>
        )}
      </button>
    </div>
  );
};

export default TokenActions;