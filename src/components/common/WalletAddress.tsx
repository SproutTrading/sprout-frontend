import React, { useState } from 'react';
import { Copy, ExternalLink } from 'lucide-react';

interface WalletAddressProps {
  address: string;
  className?: string;
}

const WalletAddress: React.FC<WalletAddressProps> = ({ address, className = '' }) => {
  const [copied, setCopied] = useState(false);
  
  if (!address) {
    return null;
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openSolscan = () => {
    window.open(`https://solscan.io/account/${address}`, '_blank');
  };

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className="font-mono text-[10px]">
        {`${address.slice(0, 4)}...${address.slice(-4)}`}
      </span>
      <button
        onClick={handleCopy}
        className="p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
        title={copied ? 'Copied!' : 'Copy address'}
      >
        <Copy size={10} />
      </button>
      <button
        onClick={openSolscan}
        className="p-0.5 text-gray-400 hover:text-gray-600 transition-colors"
        title="View on Solscan"
      >
        <ExternalLink size={10} />
      </button>
    </div>
  );
};

export default WalletAddress;