import styles from './CardListItem.module.css';

const CardListItem = ({ id, name, image }) => {
  console.log(id, name, image);
  return (
    <>
      <div>
        <div className={styles.card__container}>
          <div className={styles.card__container1}>
            <p>Картинка</p>
          </div>

          <div className={styles.card__container2}>
            <p>Товар</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardListItem;
