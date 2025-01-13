import React, { useState } from 'react';
import { useResourceStore } from '../../../store/useResourceStore';
import PurchaseConsole, { LogState } from './PurchaseConsole';

interface ContributePanelProps {
  token: {
    name: string;
    ticker: string;
    resources: {
      water: number;
      fertilizer: number;
      sunshine: number;
    };
  };
  onClose: () => void;
}

const ContributePanel: React.FC<ContributePanelProps> = ({ token }) => {
  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed, useResource } = useResourceStore();
  const [logState, setLogState] = useState<LogState>(null);
  const [logMessage, setLogMessage] = useState('');

  const handleContribute = async (type: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed') => {
    if (!useResource(type)) {
      setLogState('error');
      setLogMessage(`Not enough ${type} available to contribute`);
      return;
    }

    setLogState('pending');
    setLogMessage(`Contributing ${type} to ${token.ticker}...`);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setLogState('success');
    setLogMessage(`Successfully contributed ${type} to ${token.ticker}!`);
  };

  return (
    <div className="p-4 space-y-4">
      {/* Fun Message */}
      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
        <p className="text-sm text-amber-700">
          <span className="font-medium">Just for fun!</span> Contributing resources to tokens launched through Sprout has no real utility - it's just a fun way to show support for your favorite projects! 🌱
        </p>
      </div>

      {/* Token Info */}
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <h3 className="text-sm font-medium text-emerald-700 mb-1">Contributing to</h3>
        <div className="text-lg font-semibold text-emerald-800">{token.name}</div>
        <div className="text-sm text-emerald-600">{token.ticker}</div>
      </div>

      {/* Current Resources */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-emerald-700">Current Resources</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
              <span className="text-sm font-medium text-blue-700">Water</span>
            </div>
            <div className="text-lg font-bold text-blue-800 text-center">{token.resources.water}</div>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
              <span className="text-sm font-medium text-stone-700">Fertilizer</span>
            </div>
            <div className="text-lg font-bold text-stone-800 text-center">{token.resources.fertilizer}</div>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
              <span className="text-sm font-medium text-amber-700">Sunshine</span>
            </div>
            <div className="text-lg font-bold text-amber-800 text-center">{token.resources.sunshine}</div>
          </div>
        </div>
      </div>

      {/* Your Resources */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-emerald-700">Your Resources</h3>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
              <span className="text-sm font-medium text-blue-700">Water</span>
            </div>
            <div className="text-lg font-bold text-blue-800 text-center mb-2">{water_non_contributed}</div>
            <button
              onClick={() => handleContribute('water_non_contributed')}
              disabled={water_non_contributed === 0}
              className="w-full py-1.5 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Provide
            </button>
          </div>
          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
              <span className="text-sm font-medium text-stone-700">Fertilizer</span>
            </div>
            <div className="text-lg font-bold text-stone-800 text-center mb-2">{fertilizer_non_contributed}</div>
            <button
              onClick={() => handleContribute('fertilizer_non_contributed')}
              disabled={fertilizer_non_contributed === 0}
              className="w-full py-1.5 bg-stone-500 text-white text-sm rounded hover:bg-stone-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Provide
            </button>
          </div>
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center justify-center gap-2 mb-1">
              <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
              <span className="text-sm font-medium text-amber-700">Sunshine</span>
            </div>
            <div className="text-lg font-bold text-amber-800 text-center mb-2">{sunshine_non_contributed}</div>
            <button
              onClick={() => handleContribute('sunshine_non_contributed')}
              disabled={sunshine_non_contributed === 0}
              className="w-full py-1.5 bg-amber-500 text-white text-sm rounded hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Provide
            </button>
          </div>
        </div>
      </div>

      {/* Console Messages */}
      {logState && (
        <PurchaseConsole
          state={logState}
          message={logMessage}
        />
      )}
    </div>
  );
};

export default ContributePanel;