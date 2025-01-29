import React from 'react';

const LeaderboardSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          The leaderboard showcases the top 50 contributors to our community sprout. Your ranking determines your share of the Bloom Stage rewards when the sprout completes its growth cycle.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Leaderboard System</h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/AtCOTrU.png" alt="Stats" className="w-4 h-4" />
                </div>
                Top Contributors
              </h3>
              <p className="text-sm text-emerald-600">
                The leaderboard displays detailed statistics for the top 50 gardeners:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-emerald-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Gardener ID and wallet address
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Total contributions by resource type
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Overall contribution ranking
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/rjjjesY.png" alt="Rewards" className="w-4 h-4" />
                </div>
                Bloom Stage Rewards
              </h3>
              <p className="text-sm text-emerald-600">
                When our sprout completes its growth cycle, a Bloom Stage occurs. During each Bloom Stage, rewards are distributed from our reserved token pool. The team has set aside 15% of the total token supply specifically for Bloom Stage rewards.
              </p>
              <div className="mt-3 space-y-2">
                <div className="p-2 bg-purple-50 rounded border border-purple-100">
                  <div className="text-sm font-medium text-purple-800">Distribution Schedule</div>
                  <ul className="mt-1 space-y-1 text-sm text-purple-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      First Bloom Stage: 7.5% of total supply (50% of reserve)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      Each subsequent stage: 50% of remaining reserve
                    </li>
                  </ul>
                </div>
                <div className="p-2 bg-blue-50 rounded border border-blue-100">
                  <p className="text-sm text-blue-700">
                    As token value grows, even smaller percentage distributions may represent significant rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/hmk6l58.png" alt="Visibility" className="w-4 h-4" />
                </div>
                Community Visibility
              </h3>
              <p className="text-sm text-emerald-600">
                The leaderboard is public and updates in real-time. Everyone can see:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-emerald-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Active contributors and their progress
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Resource contribution patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Competition for top positions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderboardSection;