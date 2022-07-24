import { Navigate, Outlet } from 'react-router-dom';
import { useLoggedIn } from 'shared/services/hooks/useLoggedIn';

const PrivateRoutes = () => {
  const isLoggedIn = useLoggedIn();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
