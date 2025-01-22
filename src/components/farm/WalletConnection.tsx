import React, { useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';
import { User } from '../../lib/auth';
import { useDesktopWindows } from '../../hooks/useDesktopWindows';
import { useWindowManager } from '../../hooks/useWindowManager';
import Window from '../Window';
import UnifiedProfile from '../profile/UnifiedProfile';
import ProfileIcon from '../icons/ProfileIcon';

const WalletConnection: React.FC = ({ }) => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const { profile } = useAuthStore();
  const [status] = useState<'initial' | 'connecting' | 'connected'>('initial');
  const {
    windows,
    minimized,
    handleToggleWindow,
    handleMinimize,
  } = useDesktopWindows();
  const { getZIndex, bringToFront } = useWindowManager();

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
      <button type="button"
        onClick={() => {
          handleToggleWindow('profile', true);
          bringToFront('profile');
        }}
        className="w-full flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all"
      >
        <img src="https://i.imgur.com/k1c0SFG.png" alt="Phantom" className="w-5 h-5" />
        Sign with Phantom Wallet
      </button>

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

      <Window
        title="Profile"
        isOpen={windows.profile && !minimized.profile}
        onClose={() => handleToggleWindow('profile', false)}
        onMinimize={() => handleMinimize('profile')}
        icon={ProfileIcon}
        containerRef={desktopRef}
        zIndex={getZIndex('profile')}
        onFocus={() => bringToFront('profile')}
      >
        <UnifiedProfile />
      </Window>
    </div>
  );
};

export default WalletConnection;