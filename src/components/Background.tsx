import React, { useMemo } from 'react';
import FloatingLeaf from './FloatingLeaf';

// Move leaves array outside component to prevent recreation on re-renders
const leaves = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  delay: Math.random() * 20,
  scale: 0.5 + Math.random() * 0.5,
  initialX: Math.random() * 100,
  initialY: Math.random() * 100,
}));

const Background: React.FC = () => {
  // Memoize the leaves to prevent re-rendering
  const memoizedLeaves = useMemo(() => leaves, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 overflow-hidden">
      <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.8),_transparent_80%)]" />
      {memoizedLeaves.map((leaf) => (
        <FloatingLeaf key={leaf.id} {...leaf} />
      ))}
    </div>
  );
};

export default Background;