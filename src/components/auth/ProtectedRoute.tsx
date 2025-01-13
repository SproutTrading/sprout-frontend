import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // For development, always allow access
  return <>{children}</>;
  
  // In production, we would use this:
  /*
  const { profile } = useAuthStore();
  if (!profile) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
  */
};

export default ProtectedRoute;