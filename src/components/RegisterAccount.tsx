import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterAccount: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="w-20 h-20 mx-auto bg-emerald-100 rounded-full flex items-center justify-center">
          <img 
            src="https://i.imgur.com/WJxBtdL.png" 
            alt="Success"
            className="w-10 h-10"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-emerald-800">Welcome!</h2>
          <p className="text-sm text-emerald-600">
            This is a demo version with simplified functionality.
          </p>
        </div>
        <button
          onClick={() => navigate('/desktop')}
          className="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
        >
          Continue to Desktop
        </button>
      </div>
    </div>
  );
};

export default RegisterAccount;