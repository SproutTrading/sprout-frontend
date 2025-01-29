import React from 'react';

const FarmSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          The Farm is where you can discover, track, and interact with all tokens launched through the Sprout Deployer. View real-time metrics, contribute resources, and trade tokens directly through your connected wallet.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Farm Features</h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/AtCOTrU.png" alt="Metrics" className="w-4 h-4" />
                </div>
                Token Metrics
              </h3>
              <p className="text-sm text-emerald-600 mb-2">
                Track key performance indicators for each token:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Market cap & price</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Number of holders</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Trading volume</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Liquidity stats</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/SpwFpMe.png" alt="Resources" className="w-4 h-4" />
                </div>
                Resource Contributions
              </h3>
              <p className="text-sm text-emerald-600 mb-2">
                Support your favorite tokens by contributing:
              </p>
              <div className="grid grid-cols-3 gap-2">
                <div className="p-2 bg-blue-50 rounded border border-blue-100 hover:bg-blue-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
                    <span className="text-sm text-blue-700">Water</span>
                  </div>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-100 hover:bg-stone-100 transition-colors">
                  <div className="flex items-center gap-2">
                    <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
                    <span className="text-sm text-stone-700">Fertilizer</span>
                  </div>
                </div>
                <div className="p-2 bg-amber-50 rounded border border-amber-100 hover:bg-amber-100 transition-colors">
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
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/hmk6l58.png" alt="Stats" className="w-4 h-4" />
                </div>
                Contribution Statistics
              </h3>
              <p className="text-sm text-emerald-600 mb-2">
                Track detailed resource contribution data:
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Historical contributions</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Resource allocation</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Growth impact</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Contributor rankings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmSection;