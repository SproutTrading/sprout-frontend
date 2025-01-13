import { useState, useCallback } from 'react';

const COOLDOWN_DURATION = 2000; // 2 seconds cooldown

export function useContributionCooldown() {
  const [isInCooldown, setIsInCooldown] = useState(false);

  const startCooldown = useCallback(() => {
    setIsInCooldown(true);
    setTimeout(() => {
      setIsInCooldown(false);
    }, COOLDOWN_DURATION);
  }, []);

  return {
    isInCooldown,
    startCooldown
  };
}