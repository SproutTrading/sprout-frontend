import React from 'react';
import Desktop from '../components/Desktop';
import SproutWidget from '../components/widget/SproutWidget';
import TokenWidget from '../components/widget/TokenWidget';

const DesktopPage: React.FC = () => {
  return (
    <>
      <Desktop />
      <SproutWidget />
      <TokenWidget />
    </>
  );
};

export default DesktopPage;