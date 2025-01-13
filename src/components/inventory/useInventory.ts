import { useResourceStore } from '../../store/useResourceStore';

export const useInventory = () => {
  const { water_non_contributed, fertilizer_non_contributed, sunshine_non_contributed } = useResourceStore();
  
  const items = [
    {
      id: 'water',
      name: 'Watering Cans',
      quantity: water_non_contributed,
      maxQuantity: 10,
      icon: 'https://i.imgur.com/fiFmUCU.png',
      color: {
        bg: 'bg-blue-50',
        border: 'border-blue-200'
      }
    },
    {
      id: 'sunshine',
      name: 'Sunshines',
      quantity: sunshine_non_contributed,
      maxQuantity: 10,
      icon: 'https://i.imgur.com/SpwFpMe.png',
      color: {
        bg: 'bg-amber-50',
        border: 'border-amber-200'
      }
    },
    {
      id: 'fertilizer',
      name: 'Fertilizer',
      quantity: fertilizer_non_contributed,
      maxQuantity: 10,
      icon: 'https://i.imgur.com/oZHaXEN.png',
      color: {
        bg: 'bg-stone-50',
        border: 'border-stone-300'
      }
    }
  ];
  
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return {
    items,
    totalItems
  };
};