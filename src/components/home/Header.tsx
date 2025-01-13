import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DocsIcon from '../icons/DocsIcon';
import LeaderboardIcon from '../icons/LeaderboardIcon';
import FarmIcon from '../icons/FarmIcon';
import NavLink from './NavLink';
import Logo from './Logo';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-sm bg-white/30 border-b border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Logo onClick={() => navigate('/')} />

          <nav className="flex items-center gap-6">
            <NavLink 
              to="/desktop"
              active={location.pathname === '/desktop'}
              icon={<img src="https://i.imgur.com/csxJfOP.png" alt="Desktop" className="w-5 h-5" />}
            >
              Desktop
            </NavLink>
            <NavLink 
              to="/farm"
              active={location.pathname === '/farm'}
              icon={<FarmIcon size={20} />}
            >
              Farm
            </NavLink>
            <NavLink 
              to="/docs"
              active={location.pathname.startsWith('/docs')}
              icon={<DocsIcon size={20} />}
            >
              Documentation
            </NavLink>
            <NavLink 
              to="/leaderboard"
              active={location.pathname === '/leaderboard'}
              icon={<LeaderboardIcon size={20} />}
            >
              Leaderboard
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;