import UserRoutes from './UserRoutes';
import AuthPage from './pages/AuthPages/AuthPage';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentAuthThunk } from 'redux/auth/auth-operation';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentAuthThunk());
  }, [dispatch]);
  return (
    <div>
      <AuthPage />
      <UserRoutes />
    </div>
  );
};
