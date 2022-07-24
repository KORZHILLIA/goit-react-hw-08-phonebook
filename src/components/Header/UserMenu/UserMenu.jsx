import { useDispatch, useSelector } from 'react-redux';
import { getUserMail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
import styles from './userMenu.module.css';
const HeaderMenu = () => {
  const dispatch = useDispatch();
  const userMail = useSelector(getUserMail);

  function logoutHandler() {
    dispatch(logout());
  }
  return (
    <div className={styles.menu}>
      <span>{userMail}</span>
      <button className="btn" type="button" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default HeaderMenu;
