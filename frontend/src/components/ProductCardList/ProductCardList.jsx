import ProductCardListItem from '../ProductCardListItem/ProductCardListItem';
import PropTypes from 'prop-types';

import styles from './ProductCardList.module.css';

const ProductCardList = ({ db }) => {
  return (
    <div className={styles.productCardList}>
      {db.map(({ id, discription, price, image }) => (
        <ProductCardListItem
          key={id}
          id={id}
          discription={discription}
          price={price}
          image={image}
        />
      ))}
    </div>
  );
};

export default ProductCardList;

ProductCardList.propTypes = {
  db: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      discription: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};
