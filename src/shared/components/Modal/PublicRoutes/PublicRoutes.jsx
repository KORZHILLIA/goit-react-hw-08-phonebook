import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedIn } from 'shared/services/hooks/useLoggedIn';

const PublicRoutes = () => {
  const isLoggedIn = useLoggedIn();
  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return <Outlet />;
};

export default PublicRoutes;
