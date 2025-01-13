import React from 'react';
import { Trophy } from 'lucide-react';
import WalletAddress from '../common/WalletAddress';
import { SproutUserStatistics } from '../../context/ResourcesContext';

interface LeaderboardListProps {
  sprouts: SproutUserStatistics[];
}

const LeaderboardList: React.FC<LeaderboardListProps> = ({ sprouts }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-emerald-800">Top Contributors</h2>
      <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
        {sprouts.map((sprout, index) => (
          <div
            key={sprout.user_id}
            className="p-3 bg-white rounded-lg border-2 border-emerald-300 hover:border-emerald-400 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                {index < 3 ? (
                  <Trophy className={`w-5 h-5 ${index === 0 ? 'text-amber-400' :
                    index === 1 ? 'text-gray-400' :
                      'text-amber-600'
                    }`} />
                ) : (
                  <span className="text-sm text-gray-400 font-mono">{index + 1}</span>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900">
                    Gardener #{sprout.user_id}
                  </span>
                  <span className="text-xs text-emerald-600 font-medium">
                    {sprout.contributions.toLocaleString()} contributions
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-600 mt-2">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
                      <span>{sprout.water.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
                      <span>{sprout.fertilizer.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
                      <span>{sprout.sunshine.toLocaleString()}</span>
                    </div>
                  </div>
                  <WalletAddress address={sprout.public_key} className="text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardList;