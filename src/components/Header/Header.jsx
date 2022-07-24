import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getLoggedStatus } from 'redux/auth/auth-selectors';
import HeaderAuth from './HeaderAuth';
import styles from './header.module.css';
import HeaderMenu from './UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(getLoggedStatus);
  return (
    <header className={styles.header}>
      {isLoggedIn && (
        <Link className={styles.contacts} to="/contacts">
          Contacts
        </Link>
      )}
      <div className={styles.userDedicated}>
        {isLoggedIn ? <HeaderMenu /> : <HeaderAuth />}
      </div>
    </header>
  );
};

export default Header;
