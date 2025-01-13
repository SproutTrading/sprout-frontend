import React from 'react';
import { SproutLeaderboardStatistics } from '../../context/ResourcesContext';

const ContributeSproutView: React.FC<{ statistics: SproutLeaderboardStatistics }> = ({ statistics }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-32 h-32 bg-emerald-50/50 rounded-lg border-2 border-emerald-400 flex items-center justify-center">
          <img
            src="https://i.imgur.com/AtCOTrU.png"
            alt="Sprout"
            className="w-20 h-20 object-contain"
          />
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-3">
          {/* Pulsing orb */}
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
          </div>
          <h3 className="text-lg font-semibold text-emerald-800">Global Contributions</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200" data-resource="water">
            <div className="flex items-center gap-2 text-blue-800 mb-1">
              <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
              <span className="text-sm font-medium">Water</span>
            </div>
            <div className="text-xl font-bold text-blue-900">{statistics.water.toLocaleString()}</div>
          </div>

          <div className="p-3 bg-stone-50 rounded-lg border border-stone-200" data-resource="fertilizer">
            <div className="flex items-center gap-2 text-stone-800 mb-1">
              <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
              <span className="text-sm font-medium">Fertilizer</span>
            </div>
            <div className="text-xl font-bold text-stone-900">{statistics.fertilizer.toLocaleString()}</div>
          </div>

          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200" data-resource="sunshine">
            <div className="flex items-center gap-2 text-amber-800 mb-1">
              <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
              <span className="text-sm font-medium">Sunshine</span>
            </div>
            <div className="text-xl font-bold text-amber-900">{statistics.sunshine.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContributeSproutView;