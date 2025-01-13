import React from 'react';

interface CustomIconProps {
  src: string;
  size?: number;
  className?: string;
}

const CustomIcon: React.FC<CustomIconProps> = ({ src, size = 32, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <img 
        src={src} 
        alt="icon" 
        width={size} 
        height={size}
        className="drop-shadow-[0_0_3px_rgba(16,185,129,0.3)] object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  );
};

export default CustomIcon;