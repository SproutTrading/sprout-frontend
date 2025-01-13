import React, { useEffect, useState } from 'react';

interface ResourceParticleProps {
  type: 'water_contributed' | 'water_non_contributed' |'fertilizer_contributed' | 'fertilizer_non_contributed'| 'sunshine_contributed'| 'sunshine_non_contributed';
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
  onComplete: () => void;
}

const ResourceParticle: React.FC<ResourceParticleProps> = ({ 
  type, 
  startPosition, 
  endPosition,
  onComplete 
}) => {
  const [position, setPosition] = useState(startPosition);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2000; // 2 seconds

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);
      const easedProgress = easeOutCubic(progress);

      // Calculate current position
      const currentX = startPosition.x + (endPosition.x - startPosition.x) * easedProgress;
      const currentY = startPosition.y + (endPosition.y - startPosition.y) * easedProgress;
      
      // Add a slight arc to the path
      const arcHeight = 100;
      const arcY = Math.sin(progress * Math.PI) * -arcHeight;
      
      setPosition({ 
        x: currentX, 
        y: currentY + arcY 
      });
      setOpacity(1 - progress);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        onComplete();
      }
    };

    requestAnimationFrame(animate);
  }, [startPosition, endPosition, onComplete]);

  const icons = {
    water: 'https://i.imgur.com/fiFmUCU.png',
    fertilizer: 'https://i.imgur.com/oZHaXEN.png',
    sunshine: 'https://i.imgur.com/SpwFpMe.png'
  };

  return (
    <div 
      className="fixed pointer-events-none z-50"
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        opacity,
        transition: 'opacity 0.2s ease-out'
      }}
    >
      <img 
        src={icons[type]} 
        alt={type} 
        className="w-6 h-6 animate-spin"
        style={{ animationDuration: '1s' }}
      />
    </div>
  );
};

export default ResourceParticle;