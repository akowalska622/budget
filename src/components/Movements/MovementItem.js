import classes from './MovementItem.module.css';
import Card from '../UI/Card';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FaRegMoneyBillAlt, FaTheaterMasks } from 'react-icons/fa';

const MovementItem = props => {
  return (
    <Card className={`${classes.expenseCard}`}>
      <p className={classes.title}>{props.name}</p>
      <p className={classes.detail}>
        <AiOutlineCalendar size={30} /> <span>{props.date}</span>
      </p>
      <p className={classes.detail}>
        <FaRegMoneyBillAlt size={30} /> <span>${props.amount}</span>
      </p>
      <p className={classes.detail}>
        <FaTheaterMasks size={30} /> <span>{props.category}</span>
      </p>
    </Card>
  );
};

export default MovementItem;
