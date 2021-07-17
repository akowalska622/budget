import { useSelector } from 'react-redux';
import classes from './MovementsList.module.css';
import MovementItem from './MovementItem';
import { GiReceiveMoney, GiPayMoney } from 'react-icons/gi';

const MovementsList = props => {
  const movementsList = useSelector(state => state.movements.movements);
  const sortedFromNewest = useSelector(
    state => state.movements.sortedFromNewest
  );

  let filteredMovements = movementsList.filter(
    item => item.type === props.type
  );

  if (!sortedFromNewest) filteredMovements = [...filteredMovements.reverse()];

  const icon =
    props.type === 'income' ? (
      <GiReceiveMoney color={'green'} size={35} />
    ) : (
      <GiPayMoney color={'tomato'} size={35} />
    );

  return (
    <div className={classes.movementsList}>
      <div className={classes.movementsTitle}>
        {icon} <span>{`${props.type}S`}</span>
      </div>
      <div className={classes.movementsDetails}>
        {filteredMovements.map(item => (
          <MovementItem
            id={item.id}
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
