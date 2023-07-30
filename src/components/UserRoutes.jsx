import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import PrivateRoute from '../shared/component/PrivateRoute';
import PublicRoute from '../shared/component/PublicRoute';

const AuthPage = lazy(() => import('./pages/AuthPages'));
const NotPage = lazy(() => import('./pages/NotPage'));

const ContactsPage = lazy(() => import('./pages/ContactsPage'));

const HomePage = lazy(() => import('./pages/HomePage'));

const UserRoutes = () => {
  return (
    <Suspense fallback="...Loading">
      <Routes>
        <Route path="*" element={<NotPage />} />
        <Route element={<PublicRoute />}>
          <Route path="login" element={<AuthPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="home" element={<HomePage />}>
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
export default UserRoutes;
