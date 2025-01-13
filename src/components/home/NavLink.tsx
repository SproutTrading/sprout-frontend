import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  active: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, active, icon, children }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(to)}
      className={`flex items-center gap-2 transition-colors ${
        active
          ? 'text-emerald-800'
          : 'text-emerald-700 hover:text-emerald-800'
      }`}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
};

export default NavLink;