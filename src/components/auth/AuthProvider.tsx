import React from 'react';
import { useWallet } from '../../hooks/useWallet';
import { useAuthStore } from '../../store/useAuthStore';

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { connected } = useWallet();
  const { profile } = useAuthStore();

  // Add any global auth state management here
  
  return <>{children}</>;
}

export default AuthProvider;