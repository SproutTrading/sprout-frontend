import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import Background from '../components/Background';
import Header from '../components/home/Header';
import Footer from '../components/home/Footer';
import TokenDeployForm from '../components/common/TokenDeployForm';
import DeploymentLogs from '../components/common/DeploymentLogs';

const DeployerPage: React.FC = () => {
  const navigate = useNavigate();
  const [deploymentState, setDeploymentState] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [deployedToken, setDeployedToken] = useState<{
    name: string;
    ticker: string;
    address: string;
  } | null>(null);

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

      // Simulate token address generation
      const tokenAddress = '7pLKYWmGvF8dR9zNXH4RtBxQ6JY1nM2UeSJ4KQwXhDVn';
      
      await new Promise(resolve => setTimeout(resolve, 2000));
      setLogs(prev => [...prev, `Successfully launched ${formData.name} (${formData.ticker})!`]);
      setDeploymentState('success');
      setDeployedToken({
        name: formData.name,
        ticker: formData.ticker,
        address: tokenAddress
      });

    } catch (error) {
      setLogs(prev => [...prev, `Failed to launch ${formData.name}: ${error instanceof Error ? error.message : 'Unknown error'}`]);
      setDeploymentState('error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Background />
      <Header />
      
      <div className="flex-1 relative">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="container max-w-4xl mx-auto px-4 py-24">
            <div className="space-y-8">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-emerald-800">Sprout Deployer</h1>
                <p className="text-emerald-600 mt-2">
                  Launch your token through Sprout and automatically contribute to the ecosystem
                </p>
              </div>

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
                  
                  {deploymentState === 'success' && deployedToken && (
                    <div className="mt-6 space-y-3">
                      <a
                        href={`https://dexscreener.com/solana/${deployedToken.address}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        View {deployedToken.name} on DexScreener
                        <ExternalLink size={16} />
                      </a>
                      
                      <button
                        onClick={() => navigate('/farm')}
                        className="w-full flex items-center justify-center gap-2 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
                      >
                        View {deployedToken.name} in Farm
                        <ExternalLink size={16} />
                      </button>

                      <button
                        onClick={() => {
                          setDeploymentState('idle');
                          setLogs([]);
                          setDeployedToken(null);
                        }}
                        className="w-full px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                      >
                        Deploy Another Token
                      </button>
                    </div>
                  )}

                  {deploymentState === 'error' && (
                    <button
                      onClick={() => {
                        setDeploymentState('idle');
                        setLogs([]);
                        setDeployedToken(null);
                      }}
                      className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                    >
                      Deploy Another Token
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DeployerPage;