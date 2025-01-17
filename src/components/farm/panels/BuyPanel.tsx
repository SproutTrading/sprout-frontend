import React, { useEffect, useState } from 'react';
import PurchaseConsole, { LogState } from './PurchaseConsole';
import { TokenDataFarm } from '../../widget/TokenWidget';
import { axiosHttp, API_URL } from '../../../lib/axios';
import { useAuthStore } from '../../../store/useAuthStore';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import { VersionedTransaction } from '@solana/web3.js';
import { useBuyLogsStore } from '../../../store/useBuyLogsStore';

interface BuyPanelProps {
  token: TokenDataFarm;
  onClose: () => void;
}

const BuyPanel: React.FC<BuyPanelProps> = ({ token }) => {
  const [solAmount, setSolAmount] = useState('');
  const [jitoTip, setJitoTip] = useState('0.002');
  const [logState, setLogState] = useState<LogState>(null);
  const [logMessage, setLogMessage] = useState('');
  const { profile } = useAuthStore();
  const wallet = useWallet()
  const { clearBuyLogs, latestLogs } = useBuyLogsStore();

  useEffect(() => {
    clearBuyLogs();
  }, []);

  useEffect(() => {
    if (latestLogs) {
      console.log(latestLogs);
      setLogState(latestLogs.pending ? 'pending' : (latestLogs.ok ? 'success' : 'error'));
      setLogMessage(latestLogs.message);
    }
  }, [latestLogs])

  const handleBuy = async () => {
    await wallet.signIn!({});

    const value = parseFloat(solAmount);
    const tip = parseFloat(jitoTip);
    const total = value + tip;

    let { data: { ok, data: { instructions } } } = await axiosHttp.post(`${API_URL}/buy/request`, {
      tokenId: token.resources.id,
      tip,
      value,
      symbol: token.token.symbol,
      address: profile!.public_key
    });
    if (ok) {
      const versionedTx = VersionedTransaction.deserialize(instructions);
      let signed = await wallet.signTransaction!(versionedTx!);

      await axiosHttp.post(`${API_URL}/buy/process`, {
        instructions: Array.from(signed.serialize()),
        address: wallet.publicKey!.toString(),
        symbol: token.token.symbol,
        total
      });

    }
  };

  return <WalletModalProvider>
    <div className="p-4 space-y-4">
      <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <h3 className="text-sm font-medium text-emerald-700 mb-1">Token Info</h3>
        <div className="text-lg font-semibold text-emerald-800">{token.token.name}</div>
        <div className="text-sm text-emerald-600">{token.token.symbol}</div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <img src="https://i.imgur.com/IAKIik8.png" alt="SOL" className="w-4 h-4" />
            SOL Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={solAmount}
              onChange={(e) => setSolAmount(e.target.value)}
              placeholder="0.0"
              step="0.01"
              min="0"
              className="w-full px-4 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 text-emerald-800 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-emerald-600 font-medium">
              SOL
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-emerald-700">
            <img src="https://i.imgur.com/eenDBqM.png" alt="Jito" className="w-4 h-4" />
            Jito Tip
          </label>
          <div className="relative">
            <input
              type="number"
              value={jitoTip}
              onChange={(e) => setJitoTip(e.target.value)}
              step="0.0001"
              min="0"
              className="w-full px-4 py-2 bg-white border border-emerald-200 rounded-lg focus:outline-none focus:border-emerald-400 text-emerald-800 transition-colors"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-emerald-600 font-medium">
              SOL
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={handleBuy}
        disabled={!solAmount || parseFloat(solAmount) <= 0}
        className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        <img src="https://i.imgur.com/ERV79bv.png" alt="Buy" className="w-4 h-4" />
        Buy Now
      </button>

      {logState && (
        <PurchaseConsole
          state={logState}
          message={logMessage}
        />
      )}
    </div>
  </WalletModalProvider>
};

export default BuyPanel;