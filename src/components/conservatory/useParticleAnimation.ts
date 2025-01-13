import { useState, useCallback } from 'react';

interface ParticleConfig {
  type: 'water_contributed' | 'water_non_contributed' |'fertilizer_contributed' | 'fertilizer_non_contributed'| 'sunshine_contributed'| 'sunshine_non_contributed';
  startPosition: { x: number; y: number };
  endPosition: { x: number; y: number };
}

export function useParticleAnimation() {
  const [particles, setParticles] = useState<ParticleConfig[]>([]);

  const addParticle = useCallback((config: ParticleConfig) => {
    setParticles(prev => [...prev, config]);
  }, []);

  const removeParticle = useCallback((index: number) => {
    setParticles(prev => prev.filter((_, i) => i !== index));
  }, []);

  return {
    particles,
    addParticle,
    removeParticle
  };
}