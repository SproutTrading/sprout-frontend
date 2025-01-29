import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SproutIcon } from 'lucide-react';
import EpochProgress, { EpochResourcesStatistics } from '../conservatory/EpochProgress';

const SproutV2ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  const epochs: EpochResourcesStatistics[] = [
    {
      epoch: 'Epoch 1',
      water: 100,
      fertilizer: 100,
      sunshine: 100,
      progress: 100,
      percentage: 100,
      selected: false,
      completed: true
    },
    {
      epoch: 'Epoch 2',
      water: 45,
      fertilizer: 20,
      sunshine: 25,
      progress: 30,
      percentage: 30,
      selected: false,
      completed: false
    },
    {
      epoch: 'Epoch 3',
      water: 0,
      fertilizer: 0,
      sunshine: 0,
      progress: 0,
      percentage: 0,
      selected: false,
      completed: false
    }
  ];

  return (
    <div className="h-full flex flex-col p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <SproutIcon className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-2">
          Bloom Stages & Growth Process
        </h2>
        <p className="text-emerald-600 max-w-md mx-auto mb-4">
          Our sprout grows through three distinct epochs, each requiring community contributions of essential resources. Track progress and compete for top contributor positions.
        </p>
        <div className="bg-blue-50 rounded-lg border border-blue-100 p-4 max-w-md mx-auto mb-6">
          <h3 className="text-sm font-medium text-blue-800 mb-2">Growth Stages</h3>
          <div className="space-y-3 text-sm">
            <div className="p-2 bg-white/50 rounded border border-blue-100">
              <div className="flex items-center gap-2 text-blue-700">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>Each epoch requires specific resource targets</span>
              </div>
            </div>
            <div className="p-2 bg-white/50 rounded border border-blue-100">
              <div className="flex items-center gap-2 text-blue-700">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>Progress is tracked on the leaderboard</span>
              </div>
            </div>
            <div className="p-2 bg-white/50 rounded border border-blue-100">
              <div className="flex items-center gap-2 text-blue-700">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                <span>After three epochs, sprout enters Bloom Stage</span>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate('/docs/v2')}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Learn More
        </button>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 p-6">
        <h3 className="text-lg font-semibold text-emerald-800 mb-4">Growth Progress</h3>
        <EpochProgress epochs={epochs} />
      </div>
    </div>
  );
};

export default SproutV2ComingSoon;