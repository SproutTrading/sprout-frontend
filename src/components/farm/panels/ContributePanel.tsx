import React, { useEffect, useState } from 'react';
import { useResourceStore } from '../../../store/useResourceStore';
import PurchaseConsole, { LogState } from './PurchaseConsole';
import { TokenDataFarm } from '../../widget/TokenWidget';
import { axiosHttp, API_URL } from '../../../lib/axios';
import { useAuthStore } from '../../../store/useAuthStore';

interface ContributePanelProps {
  token: TokenDataFarm;
  onClose: () => void;
}

const ContributePanel: React.FC<ContributePanelProps> = ({ token }) => {
  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed, useResource, setResources, setContributions } = useResourceStore();
  const [logState, setLogState] = useState<LogState>(null);
  const [logMessage, setLogMessage] = useState('');
  const { profile } = useAuthStore();
  useEffect(() => {
    if (profile) {
      getUserResources();
    } else {
      setResources(0, 0, 0, 0, 0, 0);
    }
  }, [profile]);

  const getUserResources = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/resources/data`);
    if (ok) {
      setResources(response.water.contributed, response.water.non_contributed, response.fertilizer.contributed, response.fertilizer.non_contributed, response.sunshine.contributed, response.sunshine.non_contributed);
      setContributions(response.contributions);
    }
  }

  const handleContribute = async (type: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed') => {
    if (!useResource(type)) {
      setLogState('error');
      setLogMessage(`Not enough ${type} available to contribute`);
      return;
    }
    let object_id: number | undefined;
    let item_name = '';
    switch (type) {
      case 'water_non_contributed':
        object_id = 1;
        item_name = 'water';
        break;
      case 'fertilizer_non_contributed':
        object_id = 2;
        item_name = 'fertilizer';
        break;
      case 'sunshine_non_contributed':
        object_id = 3;
        item_name = 'sunshine';
        break;
    }

    setLogState('pending');
    setLogMessage(`Contributing ${item_name} to ${token.token.symbol}...`);


    if (!object_id) return;
    let { data: { ok } } = await axiosHttp.post(`${API_URL}/resources/contribute`, { object_id, tokenId: token.resources.id });
    if (ok) {
      setLogState('success');
      setLogMessage(`Successfully contributed ${item_name} to ${token.token.symbol}!`);
    } else {
      setLogState('error');
    }
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
        <div className="text-lg font-semibold text-emerald-800">{token.token.name}</div>
        <div className="text-sm text-emerald-600">{token.token.symbol}</div>
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