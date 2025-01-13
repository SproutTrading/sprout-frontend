import React from 'react';
import { useInventory } from './useInventory';

const InventoryStats: React.FC = () => {
  const { totalItems } = useInventory();

  return (
    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
      <div className="text-sm text-emerald-600">Total Resources</div>
      <div className="text-xl font-bold text-emerald-700 text-center">{totalItems}</div>
    </div>
  );
};

export default InventoryStats;