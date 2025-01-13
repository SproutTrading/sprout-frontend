import React, { useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import { Users, GripHorizontal } from 'lucide-react';
import { axiosHttp, API_URL } from '../../lib/axios';
import { EpochResourcesStatistics } from '../conservatory/EpochProgress';
import { useEpochsCtx } from '../../context/EpochsContext';

const SproutWidget: React.FC = () => {
  const { epochs, setEpochs, level, setLevel, currentEpoch, setCurrentEpoch } = useEpochsCtx();
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getResourcesEpochs();
  }, []);

  useEffect(() => {
    if (epochs) {
      let idx = (epochs as EpochResourcesStatistics[]).findIndex(x => x.selected);
      if (idx >= 0) {
        setLevel(idx + 1);
        setCurrentEpoch(epochs[idx]); 
      }
    }
  }, [epochs])

  const getResourcesEpochs = async () => {
    let { data: { ok, data: response } } = await axiosHttp.get(`${API_URL}/resources/epochs`);
    if (ok) {
      setEpochs(response.epochs);
      let idx = (response.epochs as EpochResourcesStatistics[]).findIndex(x => x.selected);
      if (idx >= 0) {
        setLevel(idx + 1);
        setCurrentEpoch(response.epochs[idx]);
      }
    }
  }

  const getTotalActions = () => {
    if (!currentEpoch) {
      return 0;
    }
    return currentEpoch.water + currentEpoch.fertilizer + currentEpoch.sunshine;
  }

  const getCompletedEpochs = () => {
    return epochs.filter(x => x.percentage === 100).length;
  }

  const getFutureEpochs = () => {
    return epochs.filter(x => x.percentage === 0).length;
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      <Draggable
        handle=".widget-handle"
        nodeRef={widgetRef}
        defaultPosition={{ x: window.innerWidth - 340, y: 16 }}
        bounds="parent"
      >
        <div
          ref={widgetRef}
          className="pointer-events-auto absolute w-80 backdrop-blur-sm bg-white/30 rounded-xl border border-white/50 shadow-lg overflow-hidden transition-shadow duration-200"
        >
          <div className="bg-gradient-to-r from-emerald-500/80 to-green-500/80 p-3 border-b border-white/20 widget-handle cursor-grab">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <GripHorizontal size={16} className="text-white/50" />
                <h3 className="text-white font-semibold">Sprout Status</h3>
              </div>
              <span className="text-xs text-emerald-100 font-mono">ID #{level}</span>
            </div>
          </div>

          <div className="p-4 space-y-4">
            {/* Sprout Display */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Main frame */}
                <div className="w-24 h-24 bg-emerald-50/50 rounded-lg border-2 border-emerald-400 flex items-center justify-center overflow-hidden">
                  {/* Primary sunlight effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-amber-200/60 via-amber-100/30 to-transparent transform rotate-45" />

                  {/* Secondary glow effect */}
                  <div className="absolute inset-0 bg-gradient-radial from-yellow-100/40 via-amber-50/20 to-transparent animate-pulse" />

                  {/* Centered sprout image */}
                  <div className="relative z-10 w-16 h-16 flex items-center justify-center">
                    <img
                      src="https://i.imgur.com/AtCOTrU.png"
                      alt="Sprout"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Level badge */}
                  <div className="absolute top-1 right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-lg z-20">
                    <span className="text-white font-bold text-xs">{level}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2 text-sm">
                <Users size={14} className="text-emerald-600" />
                <span className="text-emerald-900">{getTotalActions().toLocaleString()} Contr.</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <img
                  src="https://i.imgur.com/fiFmUCU.png"
                  alt="Water"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-emerald-900">{currentEpoch ? currentEpoch.water.toLocaleString() : 0} Water</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <img
                  src="https://i.imgur.com/oZHaXEN.png"
                  alt="Fertilizer"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-emerald-900">{currentEpoch ? currentEpoch.fertilizer.toLocaleString() : 0} Fertilizer</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <img
                  src="https://i.imgur.com/SpwFpMe.png"
                  alt="Sunshine"
                  className="w-4 h-4 object-contain"
                />
                <span className="text-emerald-900">{currentEpoch ? currentEpoch.sunshine.toLocaleString() : 0} Sunshine</span>
              </div>
            </div>

            {/* Spacer */}
            <div className="border-t border-emerald-200/50"></div>

            {/* Epoch Progress */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-emerald-800 font-medium">
                  {/* {currentEpoch.status === 'upcoming'
                    ? `Epoch ${currentEpoch.number}: Awaiting Epoch`
                    : `Epoch ${currentEpoch.number}`} */}
                  Epoch {currentEpoch ? currentEpoch.epoch : 'Awaiting Epoch'}
                </span>
                <span className="text-emerald-600">{currentEpoch ? currentEpoch.percentage : 0}%</span>
              </div>
              <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-green-500 transition-all duration-500 ease-out"
                  style={{ width: `${currentEpoch ? currentEpoch.percentage : 0}%` }}
                />
              </div>
              <div className="text-xs text-emerald-600 mt-1">
                {getCompletedEpochs() > 0 && (
                  <span>{getCompletedEpochs()} completed epochs • </span>
                )}
                {getFutureEpochs()} future epochs
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default SproutWidget;