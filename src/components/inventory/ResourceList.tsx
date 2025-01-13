import React from 'react';
import { useResourceStore } from '../../store/useResourceStore';

const ResourceList: React.FC = () => {
  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed } = useResourceStore();

  const resources = [
    {
      name: 'Water',
      quantity: water_non_contributed,
      icon: 'https://i.imgur.com/fiFmUCU.png',
      color: {
        bg: 'bg-blue-50',
        border: 'border-blue-200'
      }
    },
    {
      name: 'Fertilizer',
      quantity: fertilizer_non_contributed,
      icon: 'https://i.imgur.com/oZHaXEN.png',
      color: {
        bg: 'bg-stone-50',
        border: 'border-stone-200'
      }
    },
    {
      name: 'Sunshine',
      quantity: sunshine_non_contributed,
      icon: 'https://i.imgur.com/SpwFpMe.png',
      color: {
        bg: 'bg-amber-50',
        border: 'border-amber-200'
      }
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-2">
      {resources.map((resource) => (
        <div 
          key={resource.name}
          className={`p-3 rounded-lg border ${resource.color.bg} ${resource.color.border}`}
        >
          <div className="flex flex-col items-center gap-1">
            <img 
              src={resource.icon} 
              alt={resource.name}
              className="w-6 h-6"
            />
            <div className="text-sm font-medium text-gray-700">{resource.quantity.toLocaleString()}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResourceList;