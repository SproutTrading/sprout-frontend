import React from 'react';
import CustomIcon from './CustomIcon';

const FarmIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/TNnw9uC.png" {...props} />;
};

export default FarmIcon;