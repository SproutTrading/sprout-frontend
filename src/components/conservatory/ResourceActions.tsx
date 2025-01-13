import React from 'react';
import { Loader2 } from 'lucide-react';
import { useResourceStore } from '../../store/useResourceStore';

interface ResourceActionsProps {
  onGiveResource: (type: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed') => void;
  loading: 'water_contributed' | 'water_non_contributed' | 'fertilizer_contributed' | 'fertilizer_non_contributed' | 'sunshine_contributed' | 'sunshine_non_contributed' | null;
}

const ResourceActions: React.FC<ResourceActionsProps> = ({ onGiveResource, loading }) => {
  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed } = useResourceStore();

  const canWater = water_non_contributed > 0;
  const canFertilize = fertilizer_non_contributed > 0;
  const canSunshine = sunshine_non_contributed > 0;

  return (
    <div className="grid grid-cols-3 gap-3">
      <button
        onClick={() => onGiveResource('water_non_contributed')}
        disabled={loading !== null || !canWater}
        className="p-3 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <div className="flex flex-col items-center gap-2 text-blue-800 min-h-[64px] justify-center">
          {loading === 'water_non_contributed' ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-6 h-6" />
              <span className="font-medium">Give Water ({water_non_contributed})</span>
            </>
          )}
        </div>
      </button>

      <button
        onClick={() => onGiveResource('fertilizer_non_contributed')}
        disabled={loading !== null || !canFertilize}
        className="p-3 bg-stone-50 rounded-lg border border-stone-200 hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <div className="flex flex-col items-center gap-2 text-stone-800 min-h-[64px] justify-center">
          {loading === 'fertilizer_non_contributed' ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-6 h-6" />
              <span className="font-medium">Give Fertilizer ({fertilizer_non_contributed})</span>
            </>
          )}
        </div>
      </button>

      <button
        onClick={() => onGiveResource('sunshine_non_contributed')}
        disabled={loading !== null || !canSunshine}
        className="p-3 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <div className="flex flex-col items-center gap-2 text-amber-800 min-h-[64px] justify-center">
          {loading === 'sunshine_non_contributed' ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <>
              <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-6 h-6" />
              <span className="font-medium">Give Sunshine ({sunshine_non_contributed})</span>
            </>
          )}
        </div>
      </button>
    </div>
  );
};

export default ResourceActions;