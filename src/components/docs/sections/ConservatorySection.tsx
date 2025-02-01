import React from 'react';

const ConservatorySection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          The Conservatory is where our community sprout grows through collective contributions.
          Monitor growth, provide resources, and track activity in real-time. After completing three growth stages,
          a Bloom Stage occurs where the top 50 contributors earn rewards from our reserved token allocation.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Main Features</h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Growth Stages</h3>
              <p className="text-sm text-emerald-600 mb-2">
                Our sprout grows through three stages before reaching a Bloom Stage:
              </p>
              <div className="grid grid-cols-3 gap-2 mb-3">
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-medium text-emerald-700">1</span>
                    <span className="text-sm text-emerald-700">Stage One</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-medium text-emerald-700">2</span>
                    <span className="text-sm text-emerald-700">Stage Two</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-sm font-medium text-emerald-700">3</span>
                    <span className="text-sm text-emerald-700">Stage Three</span>
                  </div>
                </div>
              </div>
              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700">
                  <strong>Bloom Stage:</strong> After completing all three stages, 50% of the remaining reward pool is distributed to top 50 contributors.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Resource Contributions</h3>
              <p className="text-sm text-emerald-600 mb-2">
                Help the sprout grow by providing essential resources:
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-blue-50 rounded border border-blue-100">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
                    <span className="text-sm text-blue-700">Water</span>
                  </div>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-100">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
                    <span className="text-sm text-stone-700">Fertilizer</span>
                  </div>
                </div>
                <div className="p-2 bg-amber-50 rounded border border-amber-100">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
                    <span className="text-sm text-amber-700">Sunshine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Activity Tracking</h3>
              <p className="text-sm text-emerald-600">
                Monitor all contributions in real-time through the activity log. See who's contributing and what resources they're providing to help the sprout grow.
              </p>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="/images/bloom-stage-rewards.png" alt="Bloom Stage Rewards" className="w-4 h-4" />
                </div>
                Bloom Stage Rewards
              </h3>
              <p className="text-sm text-emerald-600">
                15% of the total Sprout V1 token supply (150,000,000 tokens) is reserved for Bloom Stage rewards, locked securely on Streamflow. After completing three growth stages, it will bloom and 50% of the remaining reward pool is distributed to the top 50 contributors, this cycle will repeat forever. Continously using 50% of the remaining reward pool to distribute to the top 50 contributors.
              </p>
              <div className="mt-3 space-y-2">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                  <h4 className="text-sm font-medium text-purple-800 mb-2">Reward Distribution</h4>
                  <div className="space-y-2 text-sm text-purple-600">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      First Bloom Stage: 75,000,000 tokens
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      Second Bloom Stage: 37,500,000 tokens
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      Third Bloom Stage: 18,750,000 tokens
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      And so on... (50% of remaining pool each time)
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Each Bloom Stage distributes 50% of the remaining reward pool, creating a potentially value-increasing reward system that continues indefinitely. As token value grows, even smaller percentage distributions may represent significant rewards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConservatorySection;