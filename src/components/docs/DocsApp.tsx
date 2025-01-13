import React from 'react';
import DocsLayout from './DocsLayout';
import DocsContent from './DocsContent';

const DocsApp: React.FC = () => {
  return (
    <div className="h-full">
      <DocsLayout>
        <DocsContent />
      </DocsLayout>
    </div>
  );
};

export default DocsApp;