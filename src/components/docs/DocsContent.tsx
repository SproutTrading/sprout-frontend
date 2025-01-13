import React from 'react';
import { useLocation } from 'react-router-dom';
import { DOCS_SECTIONS } from './docsSections';
import RegisteringSection from './sections/RegisteringSection';
import ProfileSection from './sections/ProfileSection';
import ConservatorySection from './sections/ConservatorySection';
import InventorySection from './sections/InventorySection';
import LeaderboardSection from './sections/LeaderboardSection';
import V2Section from './sections/V2Section';
import FarmSection from './sections/FarmSection';
import DeployerSection from './sections/DeployerSection';
import EmptyDocContent from './EmptyDocContent';

const DocsContent: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/docs/')[1] || 'registering';
  const currentSection = DOCS_SECTIONS.find(section => section.path === currentPath);

  if (!currentSection) {
    return <EmptyDocContent />;
  }

  const { Icon } = currentSection;

  return (
    <div className="prose prose-emerald max-w-none">
      <div className="flex items-center gap-3 mb-8">
        <Icon size={24} className="text-emerald-600" />
        <h1 className="text-2xl font-bold text-emerald-800 !mb-0">{currentSection.title}</h1>
      </div>
      
      {currentPath === 'registering' && <RegisteringSection />}
      {currentPath === 'profile' && <ProfileSection />}
      {currentPath === 'conservatory' && <ConservatorySection />}
      {currentPath === 'inventory' && <InventorySection />}
      {currentPath === 'farm' && <FarmSection />}
      {currentPath === 'deployer' && <DeployerSection />}
      {currentPath === 'leaderboard' && <LeaderboardSection />}
      {currentPath === 'v2' && <V2Section />}
      {!['registering', 'profile', 'conservatory', 'inventory', 'farm', 'deployer', 'leaderboard', 'v2'].includes(currentPath) && <EmptyDocContent />}
    </div>
  );
};

export default DocsContent;