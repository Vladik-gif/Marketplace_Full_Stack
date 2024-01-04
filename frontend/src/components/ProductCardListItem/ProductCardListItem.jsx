import { NavLink } from 'react-router-dom';
import SvgIcon from '@mui/material/SvgIcon';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';
import PropTypes from 'prop-types';

import styles from './ProductCardListItem.module.css';

const ProductCardListItem = ({ image, discription, price }) => {
  return (
    <>
      <div className={styles.prodCardItem}>
        <div className={styles.prodCardItem__wraper}>
          <img className={styles.prodCardItem__img} src={image} alt={'electronics'} />
        </div>

        <div className={styles.prodCardItem__content}>
          <p className={styles.prodCardItem__discription}>{discription}</p>
          <p className={styles.prodCardItem__price}>{price} ₴</p>
        </div>
        <div className={styles.prodCardItem__nav}>
          <NavLink to={'/'} className={styles.prodCardItem__btn}>
            ПЕРЕГЛЯНУТИ
          </NavLink>
          <div className={styles.prodCardItem__linkIcon}>
            <NavLink to={'/'} className={styles.prodCardItem__basket}>
              <SvgIcon sx={{ width: 30, height: 30 }}>
                <ShoppingCartOutlinedIcon />
              </SvgIcon>
            </NavLink>
            <NavLink to={'/'} className={styles.prodCardItem__balance}>
              <SvgIcon sx={{ width: 30, height: 30 }}>
                <BalanceOutlinedIcon />
              </SvgIcon>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardListItem;

ProductCardListItem.propTypes = {
  image: PropTypes.string.isRequired,
  discription: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
