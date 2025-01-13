import React from 'react';

const LeaderboardSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          The leaderboard showcases the top 50 contributors to our community sprout. Your ranking determines 
          your share of the token allocation when the sprout reaches maturity and blooms into a new token.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Leaderboard System</h2>
        
        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Top Contributors</h3>
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
              <h3 className="font-medium text-emerald-800 mb-1">Token Distribution</h3>
              <p className="text-sm text-emerald-600">
                When our sprout reaches maturity, a new token will bloom. The team will purchase 20% of the total supply, which will then be distributed among the top 50 contributors.
              </p>
              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700">
                  <strong>Distribution:</strong> The remaining 80% will be allocated to a public liquidity pool for token purchases.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Community Visibility</h3>
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