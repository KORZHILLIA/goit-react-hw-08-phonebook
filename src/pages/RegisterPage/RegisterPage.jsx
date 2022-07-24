import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import RegisterForm from './RegisterForm';
import styles from './registerPage.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();

  function registerUser(userData) {
    dispatch(register(userData));
  }
  return (
    <>
      <h2 className={styles.header}>Please fill in this form to register</h2>
      <RegisterForm onSubmit={registerUser} />
    </>
  );
};

export default RegisterPage;
