import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from 'shared/hooks/useAuth';

const PrivateRoute = () => {
  const isLogin = UseAuth();
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
