import React from 'react';
import CustomIcon from './CustomIcon';

const DocsIcon: React.FC<{ size?: number; className?: string }> = (props) => {
  return <CustomIcon src="https://i.imgur.com/D6sISNp.png" {...props} />;
};

export default DocsIcon;