import classes from './Balance.module.css';

const Balance = () => {
  const balanceAmount = -300;

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
