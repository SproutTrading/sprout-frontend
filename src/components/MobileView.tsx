import React from 'react';

const MobileView: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-100 to-emerald-200 p-6 flex flex-col items-center justify-center text-center">
      <div className="w-20 h-20 bg-white/50 backdrop-blur-sm rounded-2xl border border-emerald-200/50 flex items-center justify-center mb-6">
        <img 
          src="https://i.imgur.com/WJxBtdL.png" 
          alt="Sprout"
          className="w-10 h-10 object-contain"
        />
      </div>
      
      <h1 className="text-2xl font-bold text-emerald-800 mb-4">
        Welcome to Sprout.trading
      </h1>
      
      <div className="bg-white/50 backdrop-blur-sm rounded-lg border border-emerald-200 p-6 max-w-sm">
        <p className="text-emerald-700 mb-4">
          For the best experience, please visit Sprout.trading on a desktop computer. Our platform features an interactive desktop environment that isn't optimized for mobile devices.
        </p>
        <div className="text-sm text-emerald-600">
          We're working on mobile-friendly features for the future!
        </div>
      </div>
    </div>
  );
};

export default MobileView;