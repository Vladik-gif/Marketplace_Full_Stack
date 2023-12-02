import styles from './ProductCard.module.css';
import TestGoods from '../../assets/imges/TestGoods.jpg';

const ProductCard = () => {
    const takeDate = () => {
        fetch("/get/products")
            .then(response => console.log(response.json()));
    }

    return (
        <div className={styles.product_card}>
            <img src={TestGoods} alt="goods" className={styles.img_product} onClick={takeDate}/>
            <span className={styles.name_product}>Назва</span>
            <br />
            <span className={styles.price_product}>Ціна</span>
        </div>
    );
};

export default ProductCard;