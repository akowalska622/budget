import classes from './Balance.module.css';
import { useSelector } from 'react-redux';

const Balance = () => {
  const movements = useSelector(state => state.movements.movements);
  const incomes = movements
    .filter(mov => mov.type === 'income')
    .map(mov => mov.amount);

  const expenses = movements
    .filter(mov => mov.type === 'expense')
    .map(mov => mov.amount * -1);

  const totalMovementsWithSign = [...incomes, ...expenses];

  const balanceAmount = totalMovementsWithSign.reduce((a, b) => a + b, 0);

  const colouring = balanceAmount > 0 ? 'green' : 'tomato';

  return (
    <div className={classes.balance}>
      Your current balance: &nbsp;
      <span style={{ color: colouring }}>
        {' '}
        {balanceAmount < 0 && '- '}${Math.abs(balanceAmount)}
      </span>
    </div>
  );
};

export default Balance;
