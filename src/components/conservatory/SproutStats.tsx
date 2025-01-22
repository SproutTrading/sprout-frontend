import React from 'react';

const SproutStats: React.FC<{ water: number, fertilizer: number, sunshine: number }> = ({ water, fertilizer, sunshine }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
        <div className="text-blue-800 flex items-center gap-2 mb-1">
          <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-4 h-4" />
          <span className="font-medium">Water</span>
        </div>
        <div className="text-xl font-bold text-blue-900">{water.toLocaleString()}</div>
      </div>

      <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
        <div className="text-stone-800 flex items-center gap-2 mb-1">
          <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-4 h-4" />
          <span className="font-medium">Fertilizer</span>
        </div>
        <div className="text-xl font-bold text-stone-900">{fertilizer.toLocaleString()}</div>
      </div>

      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
        <div className="text-amber-800 flex items-center gap-2 mb-1">
          <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-4 h-4" />
          <span className="font-medium">Sunshine</span>
        </div>
        <div className="text-xl font-bold text-amber-900">{sunshine.toLocaleString()}</div>
      </div>
    </div>
  );
};

export default SproutStats;