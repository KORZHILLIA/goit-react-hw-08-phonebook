import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getLoggedStatus } from 'redux/auth/auth-selectors';
import { login } from 'redux/auth/auth-operations';
import LoginForm from './LoginForm';
import styles from './loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(getLoggedStatus);
  function loginHandler(userData) {
    dispatch(login(userData));
  }

  if (isLoggedIn) {
    return <Navigate to="/contacts" />;
  }
  return (
    <>
      <h2 className={styles.header}>Please fill in this form to login</h2>
      <LoginForm onSubmit={loginHandler} />
    </>
  );
};

export default LoginPage;
