import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDesktopWindows } from '../hooks/useDesktopWindows';
import { useWindowManager } from '../hooks/useWindowManager';
import Window from './Window';
import DesktopIcon from './DesktopIcon';
import SproutGrowth from './SproutGrowth';
import SproutIcon from './icons/SproutIcon';
import ProfileIcon from './icons/ProfileIcon';
import DocsIcon from './icons/DocsIcon';
import LeaderboardIcon from './icons/LeaderboardIcon';
import DeployerIcon from './icons/DeployerIcon';
import V2Icon from './icons/V2Icon';
import FarmIcon from './icons/FarmIcon';
import UnifiedProfile from './profile/UnifiedProfile';
import SproutV2ComingSoon from './common/SproutV2ComingSoon';
import TaskBar from './TaskBar';
import Background from './Background';

const Desktop: React.FC = () => {
  const desktopRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const {
    windows,
    minimized,
    handleToggleWindow,
    handleMinimize,
    handleRestore
  } = useDesktopWindows();
  const { getZIndex, bringToFront } = useWindowManager();

  return (
    <div className="h-screen w-screen overflow-hidden">
      <Background />

      <div ref={desktopRef} className="absolute inset-0 bottom-12">
        {/* Desktop Icons Layer */}
        <div className="relative z-10 p-4 grid grid-cols-2 gap-8 w-fit pointer-events-auto">
          <div className="space-y-8">
            <DesktopIcon
              icon={SproutIcon}
              label="Conservatory"
              onClick={() => {
                handleToggleWindow('sprout', true);
                bringToFront('sprout');
              }}
            />
            <DesktopIcon
              icon={ProfileIcon}
              label="Profile"
              onClick={() => {
                handleToggleWindow('profile', true);
                bringToFront('profile');
              }}
            />
            <DesktopIcon
              icon={DeployerIcon}
              label="Sprout Deployer"
              onClick={() => navigate('/deployer')}
            />
            <DesktopIcon
              icon={FarmIcon}
              label="Farm"
              onClick={() => navigate('/farm')}
            />
          </div>

          <div className="space-y-8">
            <DesktopIcon
              icon={DocsIcon}
              label="Documentation"
              onClick={() => navigate('/docs')}
            />
            <DesktopIcon
              icon={LeaderboardIcon}
              label="Leaderboard"
              onClick={() => navigate('/leaderboard')}
            />
            <DesktopIcon
              icon={V2Icon}
              label="Bloom Stages"
              onClick={() => {
                handleToggleWindow('v2', true);
                bringToFront('v2');
              }}
            />

          </div>
        </div>

        {/* Windows Layer */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Window
            title="Conservatory"
            isOpen={windows.sprout && !minimized.sprout}
            onClose={() => handleToggleWindow('sprout', false)}
            onMinimize={() => handleMinimize('sprout')}
            icon={SproutIcon}
            containerRef={desktopRef}
            zIndex={getZIndex('sprout')}
            onFocus={() => bringToFront('sprout')}
          >
            <SproutGrowth />
          </Window>

          <Window
            title="Profile"
            isOpen={windows.profile && !minimized.profile}
            onClose={() => handleToggleWindow('profile', false)}
            onMinimize={() => handleMinimize('profile')}
            icon={ProfileIcon}
            containerRef={desktopRef}
            zIndex={getZIndex('profile')}
            onFocus={() => bringToFront('profile')}
          >
            <UnifiedProfile />
          </Window>

          <Window
            title="Bloom Stages"
            isOpen={windows.v2 && !minimized.v2}
            onClose={() => handleToggleWindow('v2', false)}
            onMinimize={() => handleMinimize('v2')}
            icon={V2Icon}
            containerRef={desktopRef}
            zIndex={getZIndex('v2')}
            onFocus={() => bringToFront('v2')}
          >
            <SproutV2ComingSoon />
          </Window>
        </div>
      </div>

      <TaskBar
        windows={windows}
        minimized={minimized}
        onRestore={handleRestore}
        onToggleWindow={handleToggleWindow}
      />
    </div>
  );
};

export default Desktop;