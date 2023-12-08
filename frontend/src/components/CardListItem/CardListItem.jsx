import { NavLink } from 'react-router-dom';
import styles from './CardListItem.module.css';

const CardListItem = ({ name, image }) => {
  return (
    <>
      <NavLink className={styles.card}>
        <div className={styles.card__containerFirst}>
          <img className={styles.card__image} src={image} />
        </div>

        <div className={styles.card__containerSecond}>
          <p className={styles.card__title}>{name}</p>
        </div>
      </NavLink>
    </>
  );
};

export default CardListItem;
