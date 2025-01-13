import React, { useState } from 'react';
import TokenDeployForm from './TokenDeployForm';
import DeploymentLogs from './DeploymentLogs';

const DeployerComingSoon: React.FC = () => {
  const [deploymentState, setDeploymentState] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const handleDeploy = async (formData: {
    name: string;
    ticker: string;
    twitter: string;
    telegram: string;
    website: string;
    imageUrl: string | null;
  }) => {
    setDeploymentState('deploying');
    setLogs([`Processing launch of ${formData.name} (${formData.ticker})...`]);

    try {
      // Simulate deployment steps with delays
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLogs(prev => [...prev, 'Validating token configuration...']);

      await new Promise(resolve => setTimeout(resolve, 1500));
      setLogs(prev => [...prev, 'Purchasing $125 worth of Sprout v1 tokens...']);

      await new Promise(resolve => setTimeout(resolve, 2000));
      setLogs(prev => [...prev, 'Allocating 1% token supply to collector wallet...']);

      await new Promise(resolve => setTimeout(resolve, 1500));
      setLogs(prev => [...prev, `Deploying ${formData.name}...`]);

      await new Promise(resolve => setTimeout(resolve, 2000));
      setLogs(prev => [...prev, `Successfully launched ${formData.name} (${formData.ticker})!`]);
      setDeploymentState('success');

    } catch (error) {
      setLogs(prev => [...prev, `Failed to launch ${formData.name}: ${error.message}`]);
      setDeploymentState('error');
    }
  };

  return (
    <div className="h-full flex flex-col p-8">
      {deploymentState === 'idle' ? (
        <TokenDeployForm 
          onDeploy={handleDeploy}
          disabled={deploymentState === 'deploying'}
        />
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center">
          <DeploymentLogs 
            state={deploymentState}
            logs={logs}
          />
          
          {/* Show reset button after success or error */}
          {(deploymentState === 'success' || deploymentState === 'error') && (
            <button
              onClick={() => {
                setDeploymentState('idle');
                setLogs([]);
              }}
              className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Deploy Another Token
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DeployerComingSoon;