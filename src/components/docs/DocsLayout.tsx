import React from 'react';
import DocsSidebar from './DocsSidebar';

const DocsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-full flex">
      <DocsSidebar />
      <div className="flex-1 overflow-auto p-8">
        {children}
      </div>
    </div>
  );
};

export default DocsLayout;