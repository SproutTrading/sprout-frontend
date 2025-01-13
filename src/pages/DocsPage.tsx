import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Background from '../components/Background';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import { DOCS_SECTIONS } from '../components/docs/docsSections';
import DocsContent from '../components/docs/DocsContent';

const DocsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname.split('/docs/')[1] || 'registering';

  return (
    <div className="min-h-screen relative">
      <Background />
      <Header />
      
      <div className="relative z-10 pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-8 h-[calc(100vh-12rem)]">
            {/* Sidebar - with proper scrolling */}
            <div className="w-96 flex-shrink-0">
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-100 overflow-hidden">
                <div className="p-6 h-full flex flex-col">
                  <h2 className="text-lg font-semibold text-emerald-800 mb-4 flex-shrink-0">Documentation</h2>
                  <nav className="space-y-2 overflow-y-auto flex-1 pr-2">
                    {DOCS_SECTIONS.map((section) => {
                      const { Icon } = section;
                      const isActive = currentPath === section.path;
                      
                      return (
                        <button
                          key={section.id}
                          onClick={() => navigate(`/docs/${section.path}`)}
                          className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-emerald-100 text-emerald-900 shadow-sm'
                              : 'text-emerald-700 hover:bg-emerald-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={18} className={isActive ? 'text-emerald-600' : 'text-emerald-500'} />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-medium">
                                {section.title}
                              </div>
                              <div className="text-xs text-emerald-600 mt-0.5">
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
            </div>

            {/* Content - with proper scrolling */}
            <div className="flex-1">
              <div className="h-full bg-white/80 backdrop-blur-sm rounded-lg border border-emerald-100 overflow-hidden">
                <div className="h-full overflow-y-auto p-8">
                  <DocsContent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocsPage;