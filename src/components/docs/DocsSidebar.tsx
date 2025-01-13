import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { DOCS_SECTIONS } from './docsSections';

const DocsSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/').pop();

  return (
    <div className="w-64 h-full border-r border-emerald-100 bg-emerald-50/50">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-emerald-800 mb-4">Documentation</h2>
        <nav className="space-y-1">
          {DOCS_SECTIONS.map((section) => {
            const { Icon } = section;
            const isActive = currentPath === section.path;
            
            return (
              <button
                key={section.id}
                onClick={() => navigate(section.path)}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-emerald-100 text-emerald-900'
                    : 'text-emerald-700 hover:bg-emerald-100/50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon size={16} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium truncate">
                      {section.title}
                    </div>
                    <div className="text-xs text-emerald-600 truncate">
                      {section.description}
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default DocsSidebar;