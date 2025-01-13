import React from 'react';
import { FileText } from 'lucide-react';

const EmptyDocContent: React.FC = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8">
      <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4">
        <FileText className="w-8 h-8 text-emerald-500" />
      </div>
      <h2 className="text-xl font-semibold text-emerald-800 mb-2">
        Documentation Coming Soon
      </h2>
      <p className="text-emerald-600 max-w-md">
        We're currently working on this section of the documentation. 
        Check back soon for detailed information about this topic.
      </p>
    </div>
  );
};

export default EmptyDocContent;