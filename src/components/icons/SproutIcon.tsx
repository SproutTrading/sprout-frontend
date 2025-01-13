import React from 'react';
import CustomIcon from './CustomIcon';

const SproutIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/WJxBtdL.png" {...props} />;
};

export default SproutIcon;