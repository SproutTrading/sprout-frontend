import React, { useEffect, useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';
import { axiosHttp, API_URL } from '../../lib/axios';


const TokenizationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [token_address, setTokenAddress] = useState<string>();
  useEffect(() => {
    getSproutAddress();
  }, []);

  const getSproutAddress = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/token/sprout/address`);
    if (ok) {
      setTokenAddress(response.token_address);
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(token_address!);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-4">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          {/* Live indicator */}
          <div className="relative w-2 h-2">
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
            <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
          </div>
          <h2 className="text-xl font-bold text-emerald-800">Tokenized Sprout</h2>
        </div>
        <p className="text-base text-emerald-600">
          Our first sprout is ready for your contributions. Start by visiting the desktop
          and creating your gardener profile. You can provide essential resources like{' '}
          <span className="inline-flex items-center gap-1">
            <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-3.5 h-3.5" />
            <span className="text-blue-600">water</span>
          </span>
          ,{' '}
          <span className="inline-flex items-center gap-1">
            <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-3.5 h-3.5" />
            <span className="text-stone-600">fertilizer</span>
          </span>
          , and{' '}
          <span className="inline-flex items-center gap-1">
            <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-3.5 h-3.5" />
            <span className="text-amber-600">sunshine</span>
          </span>
          , with new resources available to claim every hour. After 3 Solana epochs, if we meet
          our resource requirements, the sprout will enter its first Bloom Stage - distributing 7.5% of our reserved token supply to our top contributors
          based on their position in the leaderboards. Each subsequent Bloom Stage will distribute 50% of remaining reserved rewards,
          creating an ongoing incentive for active participation.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex-1 p-2.5 bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 font-mono text-xs text-emerald-800 text-center">
          {token_address}
        </div>
        <button
          onClick={handleCopy}
          className="p-2.5 bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 text-emerald-600 hover:text-emerald-700 transition-colors"
          title={copied ? 'Copied!' : 'Copy address'}
        >
          <Copy size={16} />
        </button>
        <a
          href={`https://solscan.io/token/${token_address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 text-emerald-600 hover:text-emerald-700 transition-colors"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <div className="flex items-center justify-center mt-6">
        <a
          href={`https://pump.fun/coin/${token_address}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 text-emerald-700 hover:bg-white/70 transition-all text-sm"
        >
          <img
            src="https://i.imgur.com/VzvNNsj.png"
            alt="Pump.fun"
            className="w-4 h-4"
          />
          View on Pump.fun
        </a>
      </div>
    </div>
  );
};

export default TokenizationSection;