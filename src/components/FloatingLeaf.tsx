import React from 'react';
import { Leaf } from 'lucide-react';

interface FloatingLeafProps {
  delay: number;
  scale: number;
  initialX: number;
  initialY: number;
}

const FloatingLeaf: React.FC<FloatingLeafProps> = ({ delay, scale, initialX, initialY }) => {
  return (
    <div
      className="absolute animate-float"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        animation: `float 20s infinite ease-in-out`,
        animationDelay: `${delay}s`,
        transform: `scale(${scale})`,
      }}
    >
      <Leaf 
        size={24} 
        className="text-emerald-600/30" 
        style={{ 
          animation: `spin ${15 + delay}s infinite linear`,
        }} 
      />
    </div>
  );
};

export default FloatingLeaf;