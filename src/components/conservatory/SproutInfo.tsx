import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import EpochProgress, { EpochResourcesStatistics } from './EpochProgress';

const SproutInfo: React.FC<{ epochs: EpochResourcesStatistics[], token_address: string }> = ({ epochs, token_address }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(token_address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenExplorer = () => {
    window.open(`https://solscan.io/token/${token_address}`, '_blank');
  };

  return (
    <div className="grid gap-3">
      <div className="p-3 bg-emerald-50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white rounded-lg border border-emerald-200 transition-all duration-200">
        <div className="text-sm text-emerald-600 font-medium mb-2">SOL Epoch</div>
        <EpochProgress epochs={epochs} />
      </div>

      <div className="p-3 bg-emerald-50 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white rounded-lg border border-emerald-200 transition-all duration-200">
        <div className="text-sm text-emerald-600 font-medium mb-1 flex items-center gap-2">
          <img src="https://i.imgur.com/rjjjesY.png" alt="Token" className="w-4 h-4" />
          Token Address
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="font-mono text-xs text-emerald-800 truncate">
            {token_address}
          </div>
          <button
            onClick={handleCopy}
            className="p-1 text-emerald-500 hover:text-emerald-600 active:scale-95 transition-all relative"
            title={copied ? 'Copied!' : 'Copy address'}
          >
            <Copy size={14} className={copied ? 'text-emerald-700' : ''} />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-emerald-800 text-white text-xs px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </button>
          <button
            onClick={handleOpenExplorer}
            className="p-1 text-emerald-500 hover:text-emerald-600 active:scale-95 transition-all"
            title="View on Solscan"
          >
            <ExternalLink size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SproutInfo;