import styles from './ProductCard.module.css';

import TestGoods from '../../assets/imges/TestGoods.png';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import BalanceOutlinedIcon from '@mui/icons-material/BalanceOutlined';

import useFetch from '../../hooks/useFetch';

const ProductCard = () => {
   const dates = useFetch("https://swapi.dev/api/people/1");

   const takeDate = () => {
      console.log(dates);
   }

   return (
      <div className={styles.product_card} onClick={takeDate}>
         <div className={styles.about_product}>
            <img src={TestGoods} alt="product" className={styles.img_product} />
            <span className={styles.name_product}>Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW</span>
            <span className={styles.price_product}>20 000 ₴</span>
         </div>
         <div className={styles.menu_for_buy}>
            <button className={styles.buy}>КУПИТИ</button>
            <div className={styles.icons}>
               <ShoppingCartOutlinedIcon sx={{ color: '#254499' }} />
               <BalanceOutlinedIcon sx={{ color: '#254499' }} />
            </div>
         </div>
      </div>
   );
};

export default ProductCard;