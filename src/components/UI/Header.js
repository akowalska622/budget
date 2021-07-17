import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../store/index';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';

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
      <div className={classes.logo}>
        <GiPayMoney />
        <GiReceiveMoney />
      </div>
      <h2>BudgetApp</h2>
      {isLoggedIn && (
        <button className={classes.logoutBtn} onClick={handleLogout}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
