import React from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import LoginForm from './LoginForm';
import ProfileView from './ProfileView';

const UnifiedProfile: React.FC = () => {
  const { profile } = useAuthStore();
  
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-emerald-50 to-white">
      <div className="h-full overflow-auto p-6">
        {profile ? <ProfileView /> : <LoginForm />}
      </div>
    </div>
  );
};

export default UnifiedProfile;