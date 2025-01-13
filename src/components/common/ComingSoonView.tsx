import React from 'react';
import { Construction } from 'lucide-react';

const ComingSoonView: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center text-center p-8">
      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
        <Construction className="w-8 h-8 text-emerald-500" />
      </div>
      <h2 className="text-xl font-semibold text-emerald-800 mb-2">
        {title} - Coming Soon!
      </h2>
      <p className="text-emerald-600 max-w-md">
        We're working hard to bring you exciting new features. 
        Check back soon for updates!
      </p>
    </div>
  );
};

export default ComingSoonView;