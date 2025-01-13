import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

interface WalletConnectionProps {
  onConnect: () => void;
}

const WalletConnection: React.FC<WalletConnectionProps> = ({ onConnect }) => {
  const { profile } = useAuthStore();
  const [status, setStatus] = useState<'initial' | 'connecting' | 'connected'>('initial');
  const [farmerId, setFarmerId] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'connecting') {
      const timer = setTimeout(() => {
        setStatus('connected');
        setFarmerId('00001');
        onConnect();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status, onConnect]);

  // If already connected, show the connected state
  if (profile) {
    return (
      <div className="w-72 flex flex-col items-center justify-center space-y-2 text-center">
        <div className="text-sm text-emerald-600">Connected!</div>
        <div className="text-sm font-medium text-emerald-700">
          Logged in as: {profile.gardenerId}
        </div>
      </div>
    );
  }

  return (
    <div className="w-72 flex flex-col items-center justify-center space-y-3">
      <p className="text-sm text-emerald-700 font-medium text-center">
        Please log in to purchase & contribute to tokens.
      </p>
      
      {status === 'initial' && (
        <button
          onClick={() => setStatus('connecting')}
          className="w-full px-5 py-2.5 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all text-sm"
        >
          Sign in using Phantom
        </button>
      )}

      {status === 'connecting' && (
        <div className="flex items-center gap-2 text-purple-600">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">Connecting Phantom wallet...</span>
        </div>
      )}

      {status === 'connected' && (
        <div className="space-y-2 text-center">
          <div className="text-sm text-emerald-600">Connected!</div>
          <div className="text-sm font-medium text-emerald-700">
            Logged in as: Farmer #{farmerId}
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;