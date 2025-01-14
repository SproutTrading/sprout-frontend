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
              <h3 className="font-medium text-emerald-800 mb-1">Launch Requirements</h3>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>$25 worth of Sprout v1 tokens will be purchased automatically</li>
                <li>0.5% of token supply allocated to Sprout.trading collector wallet</li>
                <li>Token will be listed on Raydium for trading</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Token Requirements</h3>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>Token image (200x200px maximum)</li>
                <li>Token name and ticker symbol</li>
                <li>Social media links (Twitter, Telegram, Website)</li>
                <li>Connected Phantom wallet with sufficient SOL balance</li>
              </ul>
            </div>
          </div>

          <div className="p-4 bg-white/50 rounded-lg border border-emerald-100">
            <div>
              <h3 className="font-medium text-emerald-800 mb-1">Post-Launch</h3>
              <p className="text-sm text-emerald-600 mb-2">
                After successful deployment:
              </p>
              <ul className="space-y-2 text-sm text-emerald-600">
                <li>Token appears in The Farm for tracking and trading</li>
                <li>Community members can contribute resources to show support</li>
                <li>Token metrics and contribution statistics are publicly visible</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeployerSection;