import { Routes, Route } from 'react-router-dom';
import PublicRoutes from 'shared/components/Modal/PublicRoutes';
import PrivateRoutes from 'shared/components/PrivateRoutes';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicRoutes />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
