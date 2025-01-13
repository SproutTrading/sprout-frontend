import React from 'react';
import AllocationPieChart from './AllocationPieChart';

const V2Section: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          When our current sprout reaches full maturity, it will bloom into a new token. The top 50 contributors will receive a share of this token based on their contribution rankings.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Token Mechanics</h2>
        
        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Growth Cycle</h3>
              <p className="text-sm text-emerald-600">
                Each sprout goes through three epochs of growth before reaching maturity. During each epoch:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-emerald-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Gardeners contribute water, fertilizer, and sunshine
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Progress is tracked on the leaderboard
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                  Each epoch requires specific resource targets
                </li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Token Distribution</h3>
              <p className="text-sm text-emerald-600">
                When the current sprout reaches maturity, it blooms into a new token. This token's supply is distributed as follows:
              </p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="p-2 bg-blue-50 rounded border border-blue-100">
                  <div className="text-sm font-medium text-blue-800">80%</div>
                  <div className="text-xs text-blue-600">Public liquidity pool for token purchases</div>
                </div>
                <div className="p-2 bg-purple-50 rounded border border-purple-100">
                  <div className="text-sm font-medium text-purple-800">20%</div>
                  <div className="text-xs text-purple-600">Team purchase & distribution to top contributors</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Contribution Rankings</h3>
              <p className="text-sm text-emerald-600">
                Your share of the token distribution is determined by your position on the leaderboard:
              </p>
              <div className="mt-2 space-y-2">
                <div className="p-2 bg-amber-50 rounded border border-amber-100">
                  <div className="text-sm font-medium text-amber-800">Top 3 Contributors</div>
                  <ul className="mt-1 space-y-0.5 text-sm text-amber-600">
                    <li>1st Place: 3.00% allocation</li>
                    <li>2nd Place: 2.00% allocation</li>
                    <li>3rd Place: 1.50% allocation</li>
                  </ul>
                </div>
                <div className="p-2 bg-purple-50 rounded border border-purple-100">
                  <div className="text-sm font-medium text-purple-800">Ranks 4-10</div>
                  <ul className="mt-1 space-y-0.5 text-sm text-purple-600">
                    <li>0.75% per position (5.25% total)</li>
                  </ul>
                </div>
                <div className="p-2 bg-blue-50 rounded border border-blue-100">
                  <div className="text-sm font-medium text-blue-800">Ranks 11-25</div>
                  <ul className="mt-1 space-y-0.5 text-sm text-blue-600">
                    <li>0.35% per position (5.25% total)</li>
                  </ul>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="text-sm font-medium text-emerald-800">Ranks 26-50</div>
                  <ul className="mt-1 space-y-0.5 text-sm text-emerald-600">
                    <li>0.12% per position (3.00% total)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Token Allocation Distribution</h3>
              <AllocationPieChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default V2Section;