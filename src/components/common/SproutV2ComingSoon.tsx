import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Construction } from 'lucide-react';
import EpochProgress from '../conservatory/EpochProgress';

const SproutV2ComingSoon: React.FC = () => {
  const navigate = useNavigate();

  const epochs = [
    { 
      name: 'Epoch 1', 
      progress: 100,
      resources: {
        water: 100,
        fertilizer: 100,
        sunshine: 100
      }
    },
    { 
      name: 'Epoch 2', 
      progress: 30,
      resources: {
        water: 45,
        fertilizer: 20,
        sunshine: 25
      }
    },
    { 
      name: 'Epoch 3', 
      progress: 0,
      resources: {
        water: 0,
        fertilizer: 0,
        sunshine: 0
      }
    }
  ];

  return (
    <div className="h-full flex flex-col p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
          <Construction className="w-8 h-8 text-emerald-500" />
        </div>
        <h2 className="text-xl font-semibold text-emerald-800 mb-2">
          Sprout v2
        </h2>
        <p className="text-emerald-600 max-w-md mx-auto mb-6">
          Sprout v2 will deploy whenever sprout v1 has completed 3 epochs and met the resource requirements.
        </p>
        <button
          onClick={() => navigate('/docs/v2')}
          className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Learn More
        </button>
      </div>

      <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 p-6">
        <h3 className="text-lg font-semibold text-emerald-800 mb-4">SOL Epoch Progress</h3>
        <EpochProgress epochs={epochs} />
      </div>
    </div>
  );
};

export default SproutV2ComingSoon;