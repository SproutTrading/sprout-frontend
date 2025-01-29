import React from 'react';

const DeployerSection: React.FC = () => {
  return (
    <div className="space-y-8 animate-[fadeIn_0.3s_ease-out]">
      <div className="p-4 bg-gradient-to-br from-emerald-50 to-white rounded-lg border border-emerald-100">
        <p className="text-emerald-600 leading-relaxed">
          The Sprout Deployer is a launchpad that allows gardeners to create and deploy their own tokens. Each deployment automatically contributes to the Sprout ecosystem through token purchases and allocations.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-emerald-800">Launch Process</h2>

        <div className="grid gap-4">
          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/AtCOTrU.png" alt="Requirements" className="w-4 h-4" />
                </div>
                Launch Requirements
              </h3>
              <div className="grid gap-2">
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">$25 worth of Sprout v1 tokens will be purchased automatically</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">0.5% of token supply allocated to Sprout.trading collector wallet</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">First on pump.fun, then migrates to Raydium when the marketcap threshold is met.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/rjjjesY.png" alt="Token" className="w-4 h-4" />
                </div>
                Token Requirements
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Token image (200x200px maximum)</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Token name and ticker symbol</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Social media links</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Connected Phantom wallet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1 flex items-center gap-2">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img src="https://i.imgur.com/hmk6l58.png" alt="Post-Launch" className="w-4 h-4" />
                </div>
                Post-Launch
              </h3>
              <p className="text-sm text-emerald-600 mb-2">
                After successful deployment:
              </p>
              <div className="grid gap-2">
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Token appears in The Farm for tracking and trading</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Community members can contribute resources to show support</span>
                  </div>
                </div>
                <div className="p-2 bg-emerald-50 rounded border border-emerald-100">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span className="text-sm text-emerald-700">Token metrics and contribution statistics are publicly visible</span>
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

export default DeployerSection;