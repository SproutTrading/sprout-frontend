import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import LoginForm from '../profile/LoginForm';
import { User } from '../../lib/auth';


const WalletConnection: React.FC = ({ }) => {
  const { profile } = useAuthStore();
  const [status] = useState<'initial' | 'connecting' | 'connected'>('initial');

  // If already connected, show the connected state
  if (profile) {
    return (
      <div className="w-72 flex flex-col items-center justify-center space-y-2 text-center">
        <div className="text-sm text-emerald-600">Connected!</div>
        <div className="text-sm font-medium text-emerald-700">
          Logged in as: Gardener #{String(profile.id).padStart(5, '0')}
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
        <LoginForm displayTitle={false} />
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
            Logged in as: Gardener #{String((profile ? (profile as User).id : 0)).padStart(5, '0')}
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletConnection;