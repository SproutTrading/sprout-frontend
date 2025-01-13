import React, { useState } from 'react';
import { useResourceStore } from '../../store/useResourceStore';
import { useContributionCooldown } from '../../hooks/useContributionCooldown';
import { Loader2 } from 'lucide-react';

interface ContributeResourcesProps {
  onContribute: (type: 'water_contributed' | 'water_non_contributed' |'fertilizer_contributed' | 'fertilizer_non_contributed'| 'sunshine_contributed'| 'sunshine_non_contributed') => Promise<void>;
}

const ContributeResources: React.FC<ContributeResourcesProps> = ({ onContribute }) => {
  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed } = useResourceStore();
  const { isInCooldown } = useContributionCooldown();
  const [contributingType, setContributingType] = useState<'water_contributed' | 'water_non_contributed' |'fertilizer_contributed' | 'fertilizer_non_contributed'| 'sunshine_contributed'| 'sunshine_non_contributed' | null>(null);

  const handleContribute = async (type: 'water_contributed' | 'water_non_contributed' |'fertilizer_contributed' | 'fertilizer_non_contributed'| 'sunshine_contributed'| 'sunshine_non_contributed') => {
    if (isInCooldown || contributingType) return;
    
    try {
      setContributingType(type);
      await onContribute(type);
    } finally {
      setContributingType(null);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <button
        onClick={() => handleContribute('water_non_contributed')}
        disabled={water_non_contributed === 0 || isInCooldown || contributingType !== null}
        className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:bg-blue-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-6 h-6" />
          <div className="text-blue-800 text-sm">
            {contributingType === 'water_non_contributed' ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Providing water...</span>
              </div>
            ) : (
              <span>Provide water ({water_non_contributed})</span>
            )}
          </div>
        </div>
      </button>

      <button
        onClick={() => handleContribute('fertilizer_non_contributed')}
        disabled={fertilizer_non_contributed === 0 || isInCooldown || contributingType !== null}
        className="p-4 bg-stone-50 rounded-lg border border-stone-200 hover:bg-stone-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-6 h-6" />
          <div className="text-stone-800 text-sm">
            {contributingType === 'fertilizer_non_contributed' ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Providing fertilizer...</span>
              </div>
            ) : (
              <span>Provide fertilizer ({fertilizer_non_contributed})</span>
            )}
          </div>
        </div>
      </button>

      <button
        onClick={() => handleContribute('sunshine_non_contributed')}
        disabled={sunshine_non_contributed === 0 || isInCooldown || contributingType !== null}
        className="p-4 bg-amber-50 rounded-lg border border-amber-200 hover:bg-amber-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        <div className="flex flex-col items-center gap-2">
          <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-6 h-6" />
          <div className="text-amber-800 text-sm">
            {contributingType === 'sunshine_non_contributed' ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Providing sunshine...</span>
              </div>
            ) : (
              <span>Provide sunshine ({sunshine_non_contributed})</span>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ContributeResources;