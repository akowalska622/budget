//import { FaBeer } from 'react-icons/fa';
import classes from './MovementsList.module.css';
import MovementItem from './MovementItem';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';

const dummyItems = [
  {
    id: 4,
    type: 'expense',
    amount: 200,
    title: 'medicine',
    category: 'health',
    date: '17/07/2021',
  },
  {
    id: 3,
    type: 'income',
    amount: 2300,
    title: 'june salary',
    category: 'salary',
    date: '10/07/2021',
  },
  {
    id: 2,
    type: 'expense',
    amount: 20,
    title: 'cinema',
    category: 'entertainment',
    date: '01/07/2021',
  },
  {
    id: 1,
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
      <GiReceiveMoney color={'green'} size={35} />
    ) : (
      <GiPayMoney color={'tomato'} size={35} />
    );

  const filteredMovements = dummyItems.filter(item => item.type === props.type);

  return (
    <div className={classes.movementsList}>
      <div className={classes.movementsTitle}>
        {icon} <span>{`${props.type}S`}</span>
      </div>
      <div className={classes.movementsDetails}>
        {filteredMovements.map(item => (
          <MovementItem
            key={item.id}
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
