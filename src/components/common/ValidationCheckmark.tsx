import React from 'react';
import { Check } from 'lucide-react';

const ValidationCheckmark: React.FC = () => (
  <div className="absolute top-2 right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center">
    <Check className="w-3 h-3 text-white stroke-[3]" />
  </div>
);

export default ValidationCheckmark;