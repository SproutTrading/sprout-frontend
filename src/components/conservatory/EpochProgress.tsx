import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface EpochResourcesStatistics {
  epoch: number,
  water: number,
  fertilizer: number,
  sunshine: number,
  percentage: number,
  selected: boolean
}

const EpochProgress: React.FC<{ epochs: EpochResourcesStatistics[] }> = ({ epochs }) => {
  const RESOURCE_TARGET = 100;
  const WATER_RESOURCE_TARGET = 250;

  return (
    <div className="space-y-3">
      {epochs.map((epoch, index) => {

        return (
          <div
            key={index}
            className={`relative p-3 rounded-lg border-2 transition-all duration-200 bg-blue-50/80 ${epoch.selected
              ? 'border-emerald-400'
              : 'border-blue-200'
              } hover:bg-gradient-to-br hover:from-blue-50/80 hover:to-white`}
          >
            {epoch.selected && (
              <div className="absolute -top-2 -right-2 bg-white rounded-full">
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              </div>
            )}

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Epoch {index + 1}</span>
                <span className="text-xs text-gray-600 font-medium">{epoch.percentage}% Complete</span>
              </div>

              {/* Main epoch progress */}
              <div className="h-2 bg-white/50 rounded overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ease-out bg-gradient-to-r ${epoch.selected
                    ? 'from-emerald-400 to-emerald-500'
                    : 'from-blue-400 to-blue-500'
                    }`}
                  style={{ width: `${epoch.percentage}%` }}
                />
              </div>

              {/* Resource progress */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <img src="https://i.imgur.com/fiFmUCU.png" alt="Water" className="w-3 h-3" />
                      <span className="text-blue-600">Water</span>
                    </div>
                    <span className="text-blue-600">{epoch.water}/{WATER_RESOURCE_TARGET > epoch.water ? WATER_RESOURCE_TARGET : '∞'}</span>
                  </div>
                  <div className="h-1.5 bg-white/50 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-blue-500 transition-all duration-500 ease-out"
                      style={{ width: `${(epoch.water / WATER_RESOURCE_TARGET) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <img src="https://i.imgur.com/oZHaXEN.png" alt="Fertilizer" className="w-3 h-3" />
                      <span className="text-stone-600">Fertilizer</span>
                    </div>
                    <span className="text-stone-600">{epoch.fertilizer}/{RESOURCE_TARGET > epoch.fertilizer ? RESOURCE_TARGET : '∞'}</span>
                  </div>
                  <div className="h-1.5 bg-white/50 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-stone-500 transition-all duration-500 ease-out"
                      style={{ width: `${(epoch.fertilizer / RESOURCE_TARGET) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1">
                      <img src="https://i.imgur.com/SpwFpMe.png" alt="Sunshine" className="w-3 h-3" />
                      <span className="text-amber-600">Sunshine</span>
                    </div>
                    <span className="text-amber-600">{epoch.sunshine}/{RESOURCE_TARGET > epoch.sunshine ? RESOURCE_TARGET : '∞'}</span>
                  </div>
                  <div className="h-1.5 bg-white/50 rounded-sm overflow-hidden">
                    <div
                      className="h-full bg-amber-500 transition-all duration-500 ease-out"
                      style={{ width: `${(epoch.sunshine / RESOURCE_TARGET) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EpochProgress;