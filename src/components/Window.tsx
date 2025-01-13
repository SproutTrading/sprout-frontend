import React, { useRef, useEffect, useState, useCallback } from 'react';
import { X, Minus } from 'lucide-react';
import Draggable from 'react-draggable';
import { useWindowPosition } from '../hooks/useWindowPosition';

interface WindowProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onMinimize: () => void;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  children: React.ReactNode;
  size?: 'normal' | 'large';
  containerRef: React.RefObject<HTMLDivElement>;
  zIndex: number;
  onFocus: () => void;
}

const Window: React.FC<WindowProps> = ({ 
  title, 
  isOpen, 
  onClose, 
  onMinimize, 
  icon: Icon, 
  children,
  size = 'normal',
  containerRef,
  zIndex,
  onFocus
}) => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const windowSize = size === 'large' 
    ? { width: 1200, height: 800 }
    : { width: 750, height: 500 };

  const { position, updatePosition } = useWindowPosition(
    isOpen,
    containerRef,
    windowSize
  );

  const handleDrag = useCallback((e: any, data: { x: number; y: number }) => {
    updatePosition({ x: data.x, y: data.y });
  }, [updatePosition]);

  const handleFocus = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    onFocus();
  }, [onFocus]);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setMounted(true);
      });
    } else {
      setMounted(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const windowSizeClass = size === 'large' 
    ? 'w-[1200px] h-[800px]' 
    : 'w-[750px] h-[500px]';

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex }}
    >
      <Draggable 
        handle=".vista-titlebar" 
        nodeRef={windowRef}
        bounds="parent"
        position={position}
        onDrag={handleDrag}
        onStart={handleFocus}
      >
        <div 
          ref={windowRef} 
          className={`vista-window ${windowSizeClass} pointer-events-auto`}
          style={{ 
            maxHeight: 'calc(100% - 32px)',
            maxWidth: 'calc(100% - 32px)',
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'none' : 'scale(0.98)',
            transition: 'opacity 150ms ease-out, transform 150ms ease-out'
          }}
          onClick={handleFocus}
        >
          <div className="vista-titlebar h-8 flex items-center justify-between px-2 text-white cursor-move bg-gradient-to-r from-emerald-600 to-green-500">
            <div className="flex items-center gap-2">
              <Icon size={16} className="text-white" />
              <span>{title}</span>
            </div>
            <div className="flex items-center gap-1">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onMinimize();
                }}
                className="hover:bg-emerald-500 p-1 rounded transition-colors"
              >
                <Minus size={16} />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="hover:bg-red-500 p-1 rounded transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>
          <div className="relative h-[calc(100%-2rem)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white" />
            <div className="absolute inset-0 overflow-auto">
              <div className="p-4">
                {children}
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Window;