import React from 'react';
import CustomIcon from './CustomIcon';

const HelpIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/pyA9urT.png" {...props} />;
};

export default HelpIcon;