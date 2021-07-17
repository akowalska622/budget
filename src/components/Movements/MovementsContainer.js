import classes from './MovementsContainer.module.css';
import AddNew from './AddNew';
import Balance from './Balance';
import MovementsList from './MovementsList';

const MovementsContainer = () => {
  return (
    <div className={classes.movementsContainer}>
      <AddNew />
      <div className={classes.summary}>
        <Balance />
        <div className={classes.movementsSummary}>
          <MovementsList type='income' />
          <MovementsList type='expense' />
        </div>
      </div>
    </div>
  );
};

export default MovementsContainer;
