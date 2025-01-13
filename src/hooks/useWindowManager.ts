import { useState, useCallback, useRef } from 'react';

export function useWindowManager() {
  const [zIndexes, setZIndexes] = useState<Record<string, number>>({});
  const baseZIndexRef = useRef(100);
  const highestZIndexRef = useRef(baseZIndexRef.current);

  const bringToFront = useCallback((windowId: string) => {
    setZIndexes(prev => {
      const currentZ = prev[windowId];
      if (currentZ === highestZIndexRef.current) {
        return prev;
      }
      highestZIndexRef.current += 1;
      return {
        ...prev,
        [windowId]: highestZIndexRef.current
      };
    });
  }, []);

  const getZIndex = useCallback((windowId: string) => {
    return zIndexes[windowId] || baseZIndexRef.current;
  }, [zIndexes]);

  return {
    bringToFront,
    getZIndex
  };
}