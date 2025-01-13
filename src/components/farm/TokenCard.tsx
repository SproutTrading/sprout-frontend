import React from 'react';
import { Twitter, Globe, MessageCircle, User } from 'lucide-react';
import TokenActions from './TokenActions';
import { getMarketCapStyles } from '../../lib/utils';

interface TokenCardProps {
  token: Token;
  onBuy: (token: Token) => void;
  onContribute: (token: Token) => void;
}

const TokenCard: React.FC<TokenCardProps> = ({ token, onBuy, onContribute }) => {
  const mcapStyles = getMarketCapStyles(token.marketCap);
  const isHighMcap = parseFloat(token.marketCap.endsWith('M') ? token.marketCap.slice(0, -1) : '0') >= 1;

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-lg border-2 transition-all duration-200 ${
      isHighMcap 
        ? 'border-blue-300 hover:border-blue-400' 
        : 'border-emerald-300 hover:border-emerald-400'
    } hover:bg-gradient-to-br hover:from-emerald-50 hover:to-white`}>
      <div className="p-4 space-y-4">
        {/* Token Image */}
        <div className="w-[100px] h-[100px] mx-auto rounded-lg bg-emerald-50 flex items-center justify-center overflow-hidden">
          <img 
            src={token.image} 
            alt={token.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Token Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative w-2 h-2">
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[pulse_2s_infinite]" />
                <div className="absolute inset-0 bg-emerald-400 rounded-full animate-[ping_2s_infinite]" />
              </div>
              <h3 className="font-semibold text-emerald-800">{token.name}</h3>
            </div>
            <span className="text-sm text-emerald-600">{token.ticker}</span>
          </div>

          {/* Live Data */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-1.5 bg-emerald-50 rounded text-center">
              <div className="text-emerald-600">Holders</div>
              <div className="font-medium text-emerald-800">{token.holders}</div>
            </div>
            <div className={`p-1.5 rounded text-center relative ${mcapStyles.bg} ${mcapStyles.border}`}>
              {mcapStyles.pulse && (
                <div className={`absolute inset-0 border-2 rounded animate-[pulse_2s_infinite] opacity-50 ${mcapStyles.border}`} />
              )}
              <div className={mcapStyles.text}>MCap</div>
              <div className={`font-medium ${mcapStyles.text}`}>${token.marketCap}</div>
            </div>
            <div className="p-1.5 bg-emerald-50 rounded text-center">
              <div className="text-emerald-600">Price</div>
              <div className="font-medium text-emerald-800">${token.price}</div>
            </div>
          </div>

          {/* Resources */}
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="p-1.5 bg-blue-50 rounded text-center">
              <div className="flex items-center justify-center gap-1 text-blue-600">
                <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-3 h-3" />
                Water
              </div>
              <div className="font-medium text-blue-800">{token.resources.water}</div>
            </div>
            <div className="p-1.5 bg-stone-50 rounded text-center">
              <div className="flex items-center justify-center gap-1 text-stone-600">
                <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-3 h-3" />
                Fert
              </div>
              <div className="font-medium text-stone-800">{token.resources.fertilizer}</div>
            </div>
            <div className="p-1.5 bg-amber-50 rounded text-center">
              <div className="flex items-center justify-center gap-1 text-amber-600">
                <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-3 h-3" />
                Sun
              </div>
              <div className="font-medium text-amber-800">{token.resources.sunshine}</div>
            </div>
          </div>

          {/* Socials */}
          <div className="space-y-1 text-xs">
            <div className="flex items-center">
              <div className="w-24 flex items-center gap-1.5">
                <Twitter size={12} className="text-emerald-600" />
                <span className="font-medium text-emerald-700">Twitter:</span>
              </div>
              <span className="text-emerald-600 text-center flex-1">{token.twitter}</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 flex items-center gap-1.5">
                <Globe size={12} className="text-emerald-600" />
                <span className="font-medium text-emerald-700">Website:</span>
              </div>
              <span className="text-emerald-600 text-center flex-1">{token.website}</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 flex items-center gap-1.5">
                <MessageCircle size={12} className="text-emerald-600" />
                <span className="font-medium text-emerald-700">Telegram:</span>
              </div>
              <span className="text-emerald-600 text-center flex-1">{token.telegram}</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 flex items-center gap-1.5">
                <User size={12} className="text-emerald-600" />
                <span className="font-medium text-emerald-700">Creator:</span>
              </div>
              <span className="text-emerald-600 text-center flex-1">{token.discord}</span>
            </div>
          </div>
        </div>

        <TokenActions 
          tokenName={token.name}
          tokenTicker={token.ticker}
          onBuy={() => onBuy(token)}
          onContribute={() => onContribute(token)}
        />
      </div>
    </div>
  );
};

export default TokenCard;