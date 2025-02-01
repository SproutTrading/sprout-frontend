import { useState, useCallback, useRef, useEffect } from "react";

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
    if (!containerRef.current) return { x: 0, y: 0 };

    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Center window exactly in the middle
    const x = (containerWidth - windowSize.width) / 2;
    const y = (containerHeight - windowSize.height) / 2;

    return { x, y };
  }, [containerRef, windowSize]);

  useEffect(() => {
    if (isOpen && !positionSet.current) {
      const newPosition = calculateInitialPosition();
      setPosition(newPosition);
      positionSet.current = true;
      cascadeIndex.current = (cascadeIndex.current + 1) % MAX_CASCADE;
    } else if (!isOpen) {
      positionSet.current = false;
    }
  }, [isOpen, calculateInitialPosition]);

  const updatePosition = useCallback((newPosition: Position) => {
    setPosition(newPosition);
  }, []);

  return {
    position,
    updatePosition,
  };
}
