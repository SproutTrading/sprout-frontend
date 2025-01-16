import React, { useState, useMemo } from 'react';
import TokenCard from './TokenCard';
import TokenFilters from './TokenFilters';
import Pagination from './Pagination';
import SidePanel from './SidePanel';
import type { PanelType } from './SidePanel';
import { TokenDataFarm } from '../widget/TokenWidget';

const ITEMS_PER_PAGE = 15;

const TokenGrid: React.FC<{ tokens: TokenDataFarm[] }> = ({ tokens }) => {
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'marketCap' | 'price' | 'holders'>('marketCap');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedToken, setSelectedToken] = useState<TokenDataFarm | null>(null);
  const [panelType, setPanelType] = useState<PanelType>(null);

  // Filter and sort tokens
  const filteredTokens = useMemo(() => {
    let result = [...tokens];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        token =>
          token.token.name.toLowerCase().includes(searchLower) ||
          token.token.symbol.toLowerCase().includes(searchLower)
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'marketCap') {
        return b.token.market_cap - a.token.market_cap;
      }
      if (sortBy === 'price') {
        return b.token.price - a.token.price;
      }
      return b.token.holder - a.token.holder;
    });

    return result;
  }, [tokens, search, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredTokens.length / ITEMS_PER_PAGE);
  const paginatedTokens = filteredTokens.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleBuy = (token: TokenDataFarm) => {
    setSelectedToken(token);
    setPanelType('buy');
  };

  const handleContribute = (token: TokenDataFarm) => {
    setSelectedToken(token);
    setPanelType('contribute');
  };

  const handleClosePanel = () => {
    setPanelType(null);
    setSelectedToken(null);
  };

  return (
    <div className="space-y-6">
      <TokenFilters
        search={search}
        onSearchChange={setSearch}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {paginatedTokens.map((token) => (
          <TokenCard
            key={token.token.address}
            token={token}
            onBuy={handleBuy}
            onContribute={handleContribute}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}

      <SidePanel
        isOpen={!!panelType}
        onClose={handleClosePanel}
        type={panelType}
        token={selectedToken}
      />
    </div>
  );
};

export default TokenGrid;