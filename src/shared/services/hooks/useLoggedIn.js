import { useSelector } from 'react-redux';
import { getLoggedStatus } from 'redux/auth/auth-selectors';

export const useLoggedIn = () => {
  const isLoggedIn = useSelector(getLoggedStatus);
  return isLoggedIn;
};
