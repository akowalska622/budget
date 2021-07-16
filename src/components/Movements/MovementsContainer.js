import classes from './MovementsContainer.module.css';
import Card from '../UI/Card';
import AddNew from './AddNew';

const MovementsContainer = () => {
  return (
    <div className={classes.movementsContainer}>
      <div className={classes.addNewForm}>
        <AddNew />
      </div>
      <div className={classes.summary}>
        <div className={classes.balance}>balance</div>
        <div className={classes.movementsSummary}>
          <div className={classes.movementsList}>
            <div className={classes.movementsTitle}>expenses</div>
            <div className={classes.movementsDetails}>
              <Card className={`${classes.expenseCard}`}>expense card</Card>
            </div>
          </div>
          <div className={classes.movementsList}>
            <div className={classes.movementsTitle}>incomes</div>
            <div className={classes.details}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovementsContainer;
