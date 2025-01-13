import React from 'react';
import { SproutLeaderboardStatistics } from '../../context/ResourcesContext';

interface LeaderboardStatsProps {
  statistics: SproutLeaderboardStatistics,
}

const LeaderboardStats: React.FC<LeaderboardStatsProps> = ({ statistics }) => {

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="p-3 bg-emerald-50 rounded-lg border-2 border-emerald-300">
        <div className="text-emerald-800">
          <div className="text-sm font-medium">Highest</div>
          <div className="text-xl font-bold mt-1">{statistics.highest.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-3 bg-emerald-50 rounded-lg border-2 border-emerald-300">
        <div className="text-emerald-800">
          <div className="text-sm font-medium">Total Actions</div>
          <div className="text-xl font-bold mt-1">{statistics.total_actions.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-3 bg-emerald-50 rounded-lg border-2 border-emerald-300">
        <div className="text-emerald-800">
          <div className="text-sm font-medium">Gardeners</div>
          <div className="text-xl font-bold mt-1">{statistics.gardeners.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-3 bg-blue-50 rounded-lg border-2 border-blue-300">
        <div className="text-blue-800">
          <div className="flex items-center gap-2 mb-1">
            <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
            <span className="text-sm font-medium">Total Water</span>
          </div>
          <div className="text-xl font-bold">{statistics.water.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-3 bg-stone-50 rounded-lg border-2 border-stone-300">
        <div className="text-stone-800">
          <div className="flex items-center gap-2 mb-1">
            <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
            <span className="text-sm font-medium">Total Fertilizer</span>
          </div>
          <div className="text-xl font-bold">{statistics.fertilizer.toLocaleString()}</div>
        </div>
      </div>

      <div className="p-3 bg-amber-50 rounded-lg border-2 border-amber-300">
        <div className="text-amber-800">
          <div className="flex items-center gap-2 mb-1">
            <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
            <span className="text-sm font-medium">Total Sunshine</span>
          </div>
          <div className="text-xl font-bold">{statistics.sunshine.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardStats;