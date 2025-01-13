import React from 'react';
import CustomIcon from './CustomIcon';

const InventoryIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/IkJfdHr.png" {...props} />;
};

export default InventoryIcon;