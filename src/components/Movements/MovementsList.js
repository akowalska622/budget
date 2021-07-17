//import { FaBeer } from 'react-icons/fa';
import classes from './MovementsList.module.css';
import MovementItem from './MovementItem';
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi';

const dummyItems = [
  {
    id: 1,
    type: 'expense',
    amount: 200,
    title: 'medicines',
    category: 'health',
    date: '17/07/2021',
  },
  {
    id: 2,
    type: 'income',
    amount: 2300,
    title: 'june salary',
    category: 'salary',
    date: '10/07/2021',
  },
  {
    id: 3,
    type: 'expense',
    amount: 20,
    title: 'cinema',
    category: 'entertainment',
    date: '01/07/2021',
  },
  {
    id: 4,
    type: 'income',
    amount: 50,
    title: 'birthday',
    category: 'gift',
    date: '03/07/2021',
  },
];

const MovementsList = props => {
  const icon =
    props.type === 'income' ? (
      <FiArrowUpRight color={'green'} size={35} />
    ) : (
      <FiArrowDownRight color={'tomato'} size={35} />
    );

  let filteredMovements;
  if (props.type === 'income')
    filteredMovements = dummyItems.filter(item => item.type === 'income');
  if (props.type === 'expense')
    filteredMovements = dummyItems.filter(item => item.type === 'expense');

  return (
    <div className={classes.movementsList}>
      <div className={classes.movementsTitle}>
        {icon} <span>{`${props.type}S`}</span>
      </div>
      <div className={classes.movementsDetails}>
        {filteredMovements.map(item => (
          <MovementItem
            type={item.type}
            amount={item.amount}
            title={item.title}
            category={item.category}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default MovementsList;
