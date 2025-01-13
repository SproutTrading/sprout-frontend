import React from 'react';

interface SproutCircleProps {
  level: number;
  sproutId: string;
}

const SproutCircle: React.FC<SproutCircleProps> = ({ level, sproutId }) => {
  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative flex justify-center">
        {/* Outer pulsing frame */}
        <div className="absolute -inset-4">
          <div className="w-48 h-48 rounded-lg border-4 border-emerald-400/30 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
        
        {/* Main frame */}
        <div className="relative w-40 h-40 bg-emerald-50/50 rounded-lg border-2 border-emerald-400 flex items-center justify-center overflow-hidden">
          {/* Primary sunlight effect */}
          <div className="absolute inset-0 bg-gradient-radial from-amber-200/60 via-amber-100/30 to-transparent transform rotate-45" />
          
          {/* Secondary glow effect */}
          <div className="absolute inset-0 bg-gradient-radial from-yellow-100/40 via-amber-50/20 to-transparent animate-pulse" />
          
          {/* Centered sprout image */}
          <div className="relative z-10 w-32 h-32 flex items-center justify-center">
            <img 
              src="https://i.imgur.com/AtCOTrU.png"
              alt="Sprout"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Level badge */}
          <div className="absolute top-2 right-2 w-8 h-8 bg-emerald-500 rounded-full border-2 border-emerald-400 flex items-center justify-center shadow-lg z-20">
            <span className="text-white font-bold text-sm">{level}</span>
          </div>
        </div>
      </div>

      {/* Info section below image */}
      <div className="grid grid-cols-2 gap-2 w-48">
        <div className="p-2 bg-emerald-50 rounded-lg border-2 border-emerald-400">
          <div className="flex items-center gap-2 mb-1">
            <img src="https://i.imgur.com/vhp38Ex.png" alt="ID" className="w-4 h-4" />
            <div className="text-xs text-emerald-600">ID</div>
          </div>
          <div className="font-mono text-sm text-emerald-800 text-center">
            #{sproutId}
          </div>
        </div>
        <div className="p-2 bg-emerald-50 rounded-lg border-2 border-emerald-400">
          <div className="flex items-center gap-2 mb-1">
            <img src="https://i.imgur.com/4kD6L8P.png" alt="Level" className="w-4 h-4" />
            <div className="text-xs text-emerald-600">Level</div>
          </div>
          <div className="font-mono text-sm text-emerald-800 text-center">
            {level}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SproutCircle;