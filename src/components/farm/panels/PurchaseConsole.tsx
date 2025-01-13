import React from 'react';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

export type LogState = 'pending' | 'success' | 'error' | null;

interface PurchaseConsoleProps {
  state: LogState;
  message: string;
}

const PurchaseConsole: React.FC<PurchaseConsoleProps> = ({ state, message }) => {
  if (!state) return null;

  const stateStyles = {
    pending: 'bg-blue-50 border-blue-200 text-blue-700',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    error: 'bg-red-50 border-red-200 text-red-700'
  };

  const StateIcon = {
    pending: () => <Loader2 size={16} className="animate-spin text-blue-500" />,
    success: () => <CheckCircle2 size={16} className="text-emerald-500" />,
    error: () => <XCircle size={16} className="text-red-500" />
  }[state];

  return (
    <div className={`p-3 rounded-lg border ${stateStyles[state]} text-sm flex items-start gap-2`}>
      <StateIcon />
      <span className="flex-1">{message}</span>
    </div>
  );
};

export default PurchaseConsole;