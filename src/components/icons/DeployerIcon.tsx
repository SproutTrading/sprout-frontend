import React from 'react';
import CustomIcon from './CustomIcon';

const DeployerIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/xwZK2zD.png" {...props} />;
};

export default DeployerIcon;