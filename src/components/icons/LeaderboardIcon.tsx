import React from 'react';
import CustomIcon from './CustomIcon';

const LeaderboardIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/S6mhlHq.png" {...props} />;
};

export default LeaderboardIcon;