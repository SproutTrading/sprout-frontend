import React from 'react';
import CustomIcon from './CustomIcon';

const ProfileIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/9Pd4Pna.png" {...props} />;
};

export default ProfileIcon;