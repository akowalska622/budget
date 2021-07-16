import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/index';

import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Your Budget</h1>
      {isLoggedIn && (
        <button className={classes.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
