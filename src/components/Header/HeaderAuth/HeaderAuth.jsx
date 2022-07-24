import { NavLink } from 'react-router-dom';
import styles from './headerAuth.module.css';

const HeaderAuth = () => {
  const chooseActiveLinkClass = ({ isActive }) => {
    return isActive ? styles.linkActive : styles.link;
  };
  return (
    <>
      <NavLink className={chooseActiveLinkClass} to="/login">
        Login
      </NavLink>
      <NavLink className={chooseActiveLinkClass} to="/register">
        Register
      </NavLink>
    </>
  );
};

export default HeaderAuth;
