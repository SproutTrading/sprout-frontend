import React from 'react';

interface ConnectOptionsProps {
  onAdminLogin: () => void;
}

const ConnectOptions: React.FC<ConnectOptionsProps> = ({ onAdminLogin }) => {
  return (
    <div className="space-y-4">
      <button
        onClick={onAdminLogin}
        className="w-full p-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
      >
        Admin Login
      </button>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">or</span>
        </div>
      </div>
      <button
        onClick={() => window.location.href = 'https://phantom.app/'}
        className="w-full p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center gap-2"
      >
        <img 
          src="https://phantom.app/favicon.ico" 
          alt="Phantom"
          className="w-5 h-5"
        />
        Get Phantom Wallet
      </button>
    </div>
  );
};

export default ConnectOptions;