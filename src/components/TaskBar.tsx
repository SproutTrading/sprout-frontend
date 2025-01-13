import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SproutIcon from './icons/SproutIcon';
import ProfileIcon from './icons/ProfileIcon';
import DocsIcon from './icons/DocsIcon';
import LeaderboardIcon from './icons/LeaderboardIcon';
import FarmIcon from './icons/FarmIcon';
import DeployerIcon from './icons/DeployerIcon';
import Clock from './Clock';
import StartMenu from './StartMenu';

interface Windows {
  sprout: boolean;
  profile: boolean;
  deployer: boolean;
  v2: boolean;
}

interface TaskBarProps {
  windows: Windows;
  minimized: Windows;
  onRestore: (window: keyof Windows) => void;
  onToggleWindow: (window: keyof Windows, state: boolean) => void;
}

const WINDOW_TITLES = {
  sprout: 'Conservatory',
  profile: 'Profile',
  deployer: 'Sprout Deployer',
  v2: 'Sprout v2'
} as const;

const WINDOW_ICONS = {
  sprout: SproutIcon,
  profile: ProfileIcon,
  deployer: DeployerIcon,
  v2: LeaderboardIcon
} as const;

const TaskBar: React.FC<TaskBarProps> = ({
  windows,
  minimized,
  onRestore,
  onToggleWindow
}) => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const navigate = useNavigate();

  const apps = [
    {
      icon: <img src="https://i.imgur.com/uUTNK7N.png" alt="Home" className="w-5 h-5" />,
      label: 'Return to Home',
      onClick: () => navigate('/')
    },
    {
      icon: <SproutIcon size={20} />,
      label: 'Conservatory',
      onClick: () => onToggleWindow('sprout', true)
    },
    {
      icon: <ProfileIcon size={20} />,
      label: 'Profile',
      onClick: () => onToggleWindow('profile', true)
    },
    {
      icon: <DeployerIcon size={20} />,
      label: 'Sprout Deployer',
      onClick: () => onToggleWindow('deployer', true)
    },
    {
      icon: <FarmIcon size={20} />,
      label: 'Farm',
      onClick: () => navigate('/farm')
    },
    {
      icon: <DocsIcon size={20} />,
      label: 'Documentation',
      onClick: () => navigate('/docs')
    },
    {
      icon: <LeaderboardIcon size={20} />,
      label: 'Leaderboard',
      onClick: () => navigate('/leaderboard')
    }
  ];

  return (
    <>
      <StartMenu 
        isOpen={isStartMenuOpen}
        onClose={() => setIsStartMenuOpen(false)}
        apps={apps}
      />
      <div className="taskbar fixed bottom-0 w-full h-12 flex items-center justify-between px-2 bg-gradient-to-b from-emerald-600 to-emerald-700 border-t border-emerald-400/30">
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsStartMenuOpen(true)}
            className="h-10 px-4 rounded flex items-center gap-2 text-white hover:bg-emerald-500/50 transition-colors"
          >
            <img 
              src="https://i.imgur.com/uUTNK7N.png" 
              alt="Start" 
              className="w-5 h-5"
            />
            <span>Start</span>
          </button>
          
          {Object.entries(windows).map(([key, isOpen]) => {
            if (!isOpen || !minimized[key as keyof Windows]) return null;
            
            const windowKey = key as keyof Windows;
            const Icon = WINDOW_ICONS[windowKey];
            const title = WINDOW_TITLES[windowKey];
            
            return (
              <button 
                key={key}
                onClick={() => onRestore(windowKey)}
                className="h-10 px-3 bg-emerald-500/50 text-white rounded flex items-center gap-2 hover:bg-emerald-500/70 transition-colors"
              >
                <Icon size={16} />
                <span>{title}</span>
              </button>
            );
          })}
        </div>

        <Clock />
      </div>
    </>
  );
};

export default TaskBar;