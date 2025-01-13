import React from 'react';
import { Search, SortAsc } from 'lucide-react';

interface TokenFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortBy: 'marketCap' | 'price' | 'holders';
  onSortChange: (value: 'marketCap' | 'price' | 'holders') => void;
}

const TokenFilters: React.FC<TokenFiltersProps> = ({
  search,
  onSearchChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      {/* Search */}
      <div className="relative flex-1 w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search tokens..."
          className="w-full pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-500" />
      </div>

      {/* Sort Options */}
      <div className="flex items-center gap-2">
        <SortAsc className="w-5 h-5 text-emerald-600" />
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as any)}
          className="px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="marketCap">Market Cap</option>
          <option value="price">Price</option>
          <option value="holders">Holders</option>
        </select>
      </div>
    </div>
  );
};

export default TokenFilters;