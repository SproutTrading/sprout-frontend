import React from 'react';
import { Loader2, CheckCircle2, XCircle } from 'lucide-react';

interface DeploymentLogsProps {
  state: 'deploying' | 'success' | 'error';
  logs: string[];
}

const DeploymentLogs: React.FC<DeploymentLogsProps> = ({ state, logs }) => {
  const stateStyles = {
    deploying: 'bg-blue-50 border-blue-200',
    success: 'bg-emerald-50 border-emerald-200',
    error: 'bg-red-50 border-red-200'
  };

  const StateIcon = {
    deploying: () => <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />,
    success: () => <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
    error: () => <XCircle className="w-5 h-5 text-red-500" />
  }[state];

  // Function to determine if a log entry is completed
  const isCompleted = (log: string, index: number) => {
    if (state === 'error') return index < logs.length - 1;
    if (state === 'success') return true;
    return index < logs.length - 1;
  };

  return (
    <div className={`mt-6 p-4 rounded-lg border ${stateStyles[state]}`}>
      <div className="flex items-center gap-2 mb-3">
        <StateIcon />
        <span className="font-medium text-gray-700">
          {state === 'deploying' ? 'Deploying...' :
           state === 'success' ? 'Deployment Complete' :
           'Deployment Failed'}
        </span>
      </div>
      <div className="space-y-2">
        {logs.map((log, index) => (
          <div 
            key={index}
            className={`flex items-center gap-2 text-sm font-mono px-3 py-1.5 rounded ${
              isCompleted(log, index) 
                ? 'bg-emerald-50 text-emerald-700' 
                : state === 'error' && index === logs.length - 1
                  ? 'bg-red-50 text-red-700'
                  : 'bg-black/5 text-gray-700'
            }`}
          >
            {isCompleted(log, index) && (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            )}
            {state === 'error' && index === logs.length - 1 && (
              <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            )}
            {!isCompleted(log, index) && state !== 'error' && (
              <Loader2 className="w-4 h-4 text-blue-500 animate-spin flex-shrink-0" />
            )}
            <span>{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeploymentLogs;