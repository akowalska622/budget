import { useDispatch } from 'react-redux';
import { movementsActions } from '../../store/index';

import classes from './MovementItem.module.css';
import Card from '../UI/Card';
import {
  AiOutlineCalendar,
  AiFillGift,
  AiOutlineSecurityScan,
  AiOutlineCar,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import {
  FaRegMoneyBillAlt,
  FaTheaterMasks,
  FaRegLightbulb,
  FaExchangeAlt,
  FaQuestion,
} from 'react-icons/fa';
import { GiTakeMyMoney, GiMoneyStack, GiFoodTruck } from 'react-icons/gi';
import { RiMentalHealthLine } from 'react-icons/ri';

const MovementItem = props => {
  let icon;
  if (props.category === 'entertainment') icon = <FaTheaterMasks size={30} />;
  if (props.category === 'salary') icon = <GiTakeMyMoney size={30} />;
  if (props.category === 'gift' || props.category === 'gifts')
    icon = <AiFillGift size={30} />;
  if (props.category === 'freelancing') icon = <FaRegLightbulb size={30} />;
  if (props.category === 'savings') icon = <GiMoneyStack size={30} />;
  if (props.category === 'trade') icon = <FaExchangeAlt size={30} />;
  if (props.category === 'other') icon = <FaQuestion size={30} />;
  if (props.category === 'food') icon = <GiFoodTruck size={30} />;
  if (props.category === 'health') icon = <RiMentalHealthLine size={30} />;
  if (props.category === 'insurance')
    icon = <AiOutlineSecurityScan size={30} />;
  if (props.category === 'transport') icon = <AiOutlineCar size={30} />;
  if (props.category === 'shopping') icon = <AiOutlineShoppingCart size={30} />;

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(movementsActions.delete(props.id));
  };

  return (
    <Card className={`${classes.expenseCard}`}>
      <button
        onClick={handleDelete}
        type='button'
        className={classes.deleteBtn}
      >
        x
      </button>
      <p className={classes.title}>
        {props.title[0].toUpperCase()}
        {props.title.slice(1)}
      </p>
      <p className={classes.detail}>
        <AiOutlineCalendar size={30} /> <span>{props.date}</span>
      </p>
      <p className={classes.detail}>
        <FaRegMoneyBillAlt size={30} /> <span>${props.amount}</span>
      </p>
      <p className={classes.detail}>
        {icon}
        <span>
          {props.category[0].toUpperCase()}
          {props.category.slice(1)}
        </span>
      </p>
    </Card>
  );
};

export default MovementItem;
