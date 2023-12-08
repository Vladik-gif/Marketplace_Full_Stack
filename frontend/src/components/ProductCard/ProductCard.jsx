import styles from './ProductCard.module.css';
import TestGoods from '../../assets/imges/TestGoods.jpg';

const ProductCard = () => {
   const takeDate = () => {
      fetch("http://localhost:8080/get/products")
         .then((response) => {
            return response.json();
         })
         .then((data) => {
            console.log(data);
         });
   }

   return (
      <div className={styles.product_card} onClick={takeDate}>
         <img src={TestGoods} alt="goods" className={styles.img_product} />
         <span className={styles.name_product}>Назва</span>
         <br />
         <span className={styles.price_product}>Ціна</span>
      </div>
   );
};

export default ProductCard;