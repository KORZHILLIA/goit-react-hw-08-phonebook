import useContactForm from 'shared/services/hooks/useContactForm';
import styles from './registerForm.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, inputChangeHandler, submitHandler] = useContactForm(
    initialState,
    onSubmit
  );

  const { name, email, password } = state;

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          name="name"
          onChange={inputChangeHandler}
          placeholder="Enter your name"
        />
      </label>
      <label className={styles.label}>
        E-mail
        <input
          className={styles.input}
          type="email"
          value={email}
          name="email"
          onChange={inputChangeHandler}
          placeholder="Enter your e-mail"
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          value={password}
          name="password"
          onChange={inputChangeHandler}
          placeholder="Enter password"
        />
      </label>
      <button className={`btn ${styles.formBtn}`} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
