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
              <h3 className="font-medium text-emerald-800 mb-1">Token Metrics</h3>
              <p className="text-sm text-emerald-600 mb-2">
                Track key performance indicators for each token:
              </p>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>Market capitalization and price</li>
                <li>Number of holders</li>
                <li>Trading volume and liquidity</li>
                <li>Resource contribution statistics</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Trading Features</h3>
              <p className="text-sm text-emerald-600 mb-2">
                Connect your Phantom wallet to:
              </p>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>Buy tokens directly through the interface</li>
                <li>View your token holdings and portfolio</li>
                <li>Track your trading history</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Resource Contributions</h3>
              <p className="text-sm text-emerald-600 mb-2">
                Support your favorite tokens by contributing:
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
        </div>
      </div>
    </div>
  );
};

export default FarmSection;