import React, { useState, useMemo } from 'react';
import TokenCard from './TokenCard';
import TokenFilters from './TokenFilters';
import Pagination from './Pagination';
import SidePanel from './SidePanel';
import { useMockTokens, Token } from '../../hooks/useMockTokens';
import type { PanelType } from './SidePanel';

const ITEMS_PER_PAGE = 15;

const TokenGrid: React.FC = () => {
  const { tokens } = useMockTokens();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<'marketCap' | 'price' | 'holders'>('marketCap');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [panelType, setPanelType] = useState<PanelType>(null);

  // Filter and sort tokens
  const filteredTokens = useMemo(() => {
    let result = [...tokens];

    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(
        token => 
          token.name.toLowerCase().includes(searchLower) ||
          token.ticker.toLowerCase().includes(searchLower)
      );
    }

    result.sort((a, b) => {
      if (sortBy === 'marketCap') {
        return parseFloat(b.marketCap) - parseFloat(a.marketCap);
      }
      if (sortBy === 'price') {
        return parseFloat(b.price) - parseFloat(a.price);
      }
      return b.holders - a.holders;
    });

    return result;
  }, [tokens, search, sortBy]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredTokens.length / ITEMS_PER_PAGE);
  const paginatedTokens = filteredTokens.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleBuy = (token: Token) => {
    setSelectedToken(token);
    setPanelType('buy');
  };

  const handleContribute = (token: Token) => {
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
            key={token.id} 
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