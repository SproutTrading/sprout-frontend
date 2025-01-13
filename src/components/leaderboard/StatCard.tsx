import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon | string;
  label: string;
  value: number;
  isImage?: boolean;
  tooltip?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon: Icon, 
  label, 
  value, 
  isImage = false,
  tooltip
}) => {
  return (
    <div 
      className="p-2 bg-emerald-50 rounded-lg border border-emerald-100"
      title={tooltip}
    >
      <div className="flex items-center gap-1.5 text-emerald-600">
        {isImage ? (
          <img src={Icon} alt={label} className="w-3.5 h-3.5" />
        ) : (
          <Icon size={14} />
        )}
        <span className="text-xs font-medium">{label}</span>
      </div>
      <div className="mt-0.5 text-lg font-bold text-emerald-700">{value}</div>
    </div>
  );
};

export default StatCard;