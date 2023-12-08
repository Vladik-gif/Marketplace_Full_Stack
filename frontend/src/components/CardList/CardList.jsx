import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.css';

const CardList = ({ data }) => {
  return (
    <div className={styles.cardList}>
      {data.map(({ id, name, image }) => (
        <CardListItem key={id} id={id} name={name} image={image} />
      ))}
    </div>
  );
};

export default CardList;
