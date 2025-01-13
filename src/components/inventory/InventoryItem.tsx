import React from 'react';

interface InventoryItemProps {
  name: string;
  quantity: number;
  maxQuantity: number;
  icon: string;
  color: {
    bg: string;
    border: string;
  };
}

const InventoryItem: React.FC<InventoryItemProps> = ({ 
  name, 
  quantity, 
  maxQuantity,
  icon,
  color
}) => {
  return (
    <div className={`p-2.5 rounded-lg border-2 ${color.bg} ${color.border} transition-all duration-200 hover:shadow-md hover:border-opacity-100 border-opacity-50`}>
      <div className="flex items-center gap-2">
        <img 
          src={icon} 
          alt={name}
          className="w-6 h-6 object-contain"
        />
        <div className="flex-1">
          <h3 className="font-medium text-gray-800 text-sm">{name}</h3>
          <p className="text-xs text-gray-600">
            {quantity} / {maxQuantity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;