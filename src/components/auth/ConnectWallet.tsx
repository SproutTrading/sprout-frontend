import React, { useState } from 'react';
import AdminLoginForm from './AdminLoginForm';
import ConnectOptions from './ConnectOptions';

interface ConnectWalletProps {
  onConnect: () => void;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ onConnect }) => {
  const [isAdminLogin, setIsAdminLogin] = useState(false);

  return (
    <div className="space-y-4">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold text-emerald-800">Connect Wallet</h2>
        <p className="text-sm text-emerald-600">
          {isAdminLogin 
            ? 'Enter admin credentials to continue'
            : 'Connect with Phantom wallet or use admin login'}
        </p>
      </div>

      {isAdminLogin ? (
        <AdminLoginForm
          onBack={() => setIsAdminLogin(false)}
          onSuccess={onConnect}
        />
      ) : (
        <ConnectOptions
          onAdminLogin={() => setIsAdminLogin(true)}
        />
      )}
    </div>
  );
};

export default ConnectWallet;