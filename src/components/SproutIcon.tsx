import React from 'react';
import { Sprout } from 'lucide-react';

const SproutIcon: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <Sprout
        size={size}
        className="text-emerald-500 drop-shadow-[0_0_3px_rgba(16,185,129,0.3)]"
        strokeWidth={1.5}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent mix-blend-overlay" />
    </div>
  );
};

export default SproutIcon;