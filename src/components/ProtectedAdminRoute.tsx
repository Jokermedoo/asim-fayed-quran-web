
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

const ProtectedAdminRoute: React.FC<ProtectedAdminRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAccess = localStorage.getItem('adminAccess');
    if (adminAccess !== 'granted') {
      navigate('/');
    }
  }, [navigate]);

  const adminAccess = localStorage.getItem('adminAccess');
  
  if (adminAccess !== 'granted') {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
