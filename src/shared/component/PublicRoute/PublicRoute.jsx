import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import UseAuth from 'shared/hooks/useAuth';

const PublicRoute = () => {
  const isLogin = UseAuth();
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};

export default PublicRoute;
