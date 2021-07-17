//import { FaBeer } from 'react-icons/fa';
import classes from './MovementsList.module.css';
import Card from '../UI/Card';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const MovementsList = props => {
  const icon = props.type === 'income' ? <FaArrowUp /> : <FaArrowDown />;

  return (
    <div className={classes.movementsList}>
      <div className={classes.movementsTitle}>
        {icon} {`${props.type}S`}
      </div>
      <div className={classes.movementsDetails}>
        <Card className={`${classes.expenseCard}`}></Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
        <Card className={`${classes.expenseCard}`}>expense card</Card>
      </div>
    </div>
  );
};

export default MovementsList;
