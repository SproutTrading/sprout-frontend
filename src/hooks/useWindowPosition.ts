import { useState, useCallback, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const WINDOW_OFFSET = 24;
const MAX_CASCADE = 5;

export function useWindowPosition(
  isOpen: boolean,
  containerRef: React.RefObject<HTMLDivElement>,
  windowSize: { width: number; height: number }
) {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const positionSet = useRef(false);
  const cascadeIndex = useRef(0);

  const calculateInitialPosition = useCallback(() => {
    if (!containerRef.current) return { x: WINDOW_OFFSET, y: WINDOW_OFFSET };

    const container = containerRef.current.getBoundingClientRect();
    const offset = cascadeIndex.current * WINDOW_OFFSET;
    
    // Center window with cascade offset
    const x = Math.max(WINDOW_OFFSET, Math.min(
      (container.width - windowSize.width) / 2 + offset,
      container.width - windowSize.width - WINDOW_OFFSET
    ));
    
    const y = Math.max(WINDOW_OFFSET, Math.min(
      (container.height - windowSize.height) / 3 + offset,
      container.height - windowSize.height - WINDOW_OFFSET
    ));

    return { x, y };
  }, [containerRef, windowSize]);

  useEffect(() => {
    if (isOpen && !positionSet.current) {
      // Small delay to ensure smooth transition
      requestAnimationFrame(() => {
        const newPosition = calculateInitialPosition();
        setPosition(newPosition);
        positionSet.current = true;
        cascadeIndex.current = (cascadeIndex.current + 1) % MAX_CASCADE;
      });
    } else if (!isOpen) {
      positionSet.current = false;
    }
  }, [isOpen, calculateInitialPosition]);

  const updatePosition = useCallback((newPosition: Position) => {
    setPosition(newPosition);
  }, []);

  return {
    position,
    updatePosition
  };
}