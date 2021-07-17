import classes from './Balance.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { movementsActions } from '../../store/index';

const Balance = () => {
  const dispatch = useDispatch();

  const movements = useSelector(state => state.movements.movements);
  const sortedFromNewest = useSelector(
    state => state.movements.sortedFromNewest
  );

  const incomes = movements
    .filter(mov => mov.type === 'income')
    .map(mov => mov.amount);

  const expenses = movements
    .filter(mov => mov.type === 'expense')
    .map(mov => mov.amount * -1);

  const totalMovementsWithSign = [...incomes, ...expenses];

  const balanceAmount = totalMovementsWithSign.reduce((a, b) => a + b, 0);

  const colouring = balanceAmount > 0 ? 'green' : 'tomato';

  const handleSorting = () => {
    dispatch(movementsActions.changeSorting());
  };

  return (
    <div className={classes.balance}>
      <div>
        {' '}
        Your current balance: &nbsp;
        <span style={{ color: colouring }}>
          {' '}
          {balanceAmount < 0 && '- '}${Math.abs(balanceAmount)}
        </span>
      </div>
      <div onClick={handleSorting} className={classes.sort}>
        Sort from {sortedFromNewest ? 'oldest' : 'newest'}
      </div>
    </div>
  );
};

export default Balance;
