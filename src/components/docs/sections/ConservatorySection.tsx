import React from 'react';

const ConservatorySection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          The Conservatory is where our community sprout grows through collective contributions. 
          Monitor growth, provide resources, and track activity in real-time.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Main Features</h2>
        
        <div className="grid gap-4">
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
              <h3 className="font-medium text-emerald-800 mb-1">Token Information</h3>
              <p className="text-sm text-emerald-600">
                View the sprout's token contract address and track its progress. When fully grown, 20% of the total supply will be distributed to top contributors.
              </p>
              <div className="mt-2 p-3 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> Token allocations are based on your contribution ranking. The more you contribute, the larger your share of the 20% distribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConservatorySection;