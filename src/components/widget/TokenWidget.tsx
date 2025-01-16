import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { GripHorizontal, Copy, ExternalLink } from 'lucide-react';
import { axiosHttp, API_URL } from '../../lib/axios';
import { formatNumber } from '../../lib/format_number';

export interface TokenIpfs {
  name: string,
  symbol: string,
  description: string,
  image: string,
  showName: true,
  createdOn: string,
  twitter: string,
  telegram: string,
  website: string,
}

export interface TokenData {
  supply: string,
  address: string,
  name: string,
  symbol: string,
  icon: string,
  decimals: number,
  holder: number,
  creator: string,
  create_tx: string,
  created_time: number,
  first_mint_tx: string,
  first_mint_time: number,
  price: number,
  volume_24h: number,
  market_cap: number,
  market_cap_rank: number,
  price_change_24h: number
}
export interface TokenDataFarmResources {
  id: number,
  public_key: string,
  water: number,
  fertilizer: number,
  sunshine: number,
  total: number
}
export interface TokenDataFarm {
  ipfs: TokenIpfs,
  token: TokenData,
  resources: TokenDataFarmResources
}

const TokenWidget: React.FC = () => {
  const widgetRef = useRef<HTMLDivElement>(null);
  const [tokenData, setTokenData] = useState<TokenData>();
  const [token_address, setTokenAddress] = useState<string>();
  useEffect(() => {
    getSproutAddress();
    getSproutStatistics();
  }, []);

  const getSproutAddress = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/token/sprout/address`);
    if (ok) {
      setTokenAddress(response.token_address);
    }
  }

  const getSproutStatistics = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/token/sprout/statistics`);
    if (ok) {
      setTokenData(response);
    }
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(token_address!);
  };

  const handleOpenExplorer = () => {
    window.open(`https://solscan.io/token/${token_address}`, '_blank');
  };

  const handleOpenPumpFun = () => {
    window.open(`https://pump.fun/coin/${token_address}`, '_blank');
  };

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Draggable
        handle=".widget-handle"
        nodeRef={widgetRef}
        defaultPosition={{ x: window.innerWidth - 340, y: 380 }}
        bounds="parent"
      >
        <div
          ref={widgetRef}
          className="pointer-events-auto absolute w-80 backdrop-blur-sm bg-white/30 rounded-xl border border-white/50 shadow-lg overflow-hidden transition-shadow duration-200"
        >
          <div className="bg-gradient-to-r from-emerald-500/80 to-green-500/80 p-3 border-b border-white/20 widget-handle cursor-grab">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripHorizontal size={16} className="text-white/50" />
                <h3 className="text-white font-semibold">Sprout Token Data</h3>
              </div>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Contract Address */}
            <div className="space-y-1">
              <div className="text-xs text-emerald-700 font-medium">Contract Address</div>
              <div className="flex items-center gap-2">
                <div className="flex-1 font-mono text-xs text-emerald-800 truncate">
                  {token_address}
                </div>
                <button
                  onClick={handleCopy}
                  className="p-1 text-emerald-500 hover:text-emerald-600 transition-colors"
                  title="Copy address"
                >
                  <Copy size={12} />
                </button>
                <button
                  onClick={handleOpenExplorer}
                  className="p-1 text-emerald-500 hover:text-emerald-600 transition-colors"
                  title="View on Solscan"
                >
                  <ExternalLink size={12} />
                </button>
              </div>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">Holders</span>
                </div>
                <div className="text-lg font-bold text-emerald-800">{tokenData ? formatNumber(tokenData.holder) : 0}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">Market Cap</span>
                </div>
                <div className="text-lg font-bold text-emerald-800">${tokenData ? formatNumber(tokenData.market_cap) : 0}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">24h Volume</span>
                </div>
                <div className="text-lg font-bold text-emerald-800">${tokenData ? formatNumber(tokenData.volume_24h) : 0}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="relative w-2 h-2">
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
                    <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
                  </div>
                  <span className="text-xs text-emerald-700 font-medium">Price</span>
                </div>
                <div className="text-lg font-bold text-emerald-800">${tokenData ? tokenData.price.toFixed(6) : 0}</div>
              </div>
            </div>

            {/* Pump.fun Link */}
            <button
              onClick={handleOpenPumpFun}
              className="w-full flex items-center justify-center gap-2 p-2 bg-white/50 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-white/70 transition-all text-sm"
            >
              <img
                src="https://i.imgur.com/VzvNNsj.png"
                alt="Pump.fun"
                className="w-4 h-4"
              />
              View on Pump.fun
            </button>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default TokenWidget;