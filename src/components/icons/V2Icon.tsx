import React from 'react';
import CustomIcon from './CustomIcon';

const V2Icon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/eOkLi0H.png" {...props} />;
};

export default V2Icon;