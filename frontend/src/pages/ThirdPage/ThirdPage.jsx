import { useState } from 'react';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import styles from './ThirdPage.module.css';

const db = [
  {
    id: 1,
    category: 'Телефони',
    title: 'Samsung',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 20000,
    image: 'https://loremflickr.com/320/500',
    color: 'red',
    camera: 2,
  },
  {
    id: 2,
    category: 'Телефони',
    title: 'Nokia',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 10000,
    image: 'https://loremflickr.com/320/501',
    color: 'blue',
    camera: 1,
  },
  {
    id: 3,
    category: 'Телефони',
    title: 'Iphone',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 30000,
    image: 'https://loremflickr.com/320/502',
    color: 'white',
    camera: 3,
  },
  {
    id: 4,
    category: 'Телефони',
    title: 'Samsung',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 20000,
    image: 'https://loremflickr.com/320/503',
    color: 'black',
    camera: 2,
  },
];

const ThirdPage = () => {
  return (
    <div className={styles.thirdPageContainer}>
      <div className={styles.filterNav}>
        <form className={styles.filterForm} id="filter-form">
          <label>
            Від: <input type="number" min="0" />
          </label>

          <label>
            До: <input type="number" min="0" />
          </label>

          <label for="color">Колір: </label>
          <input type="checkbox" value="red" />

          <label for="brand">Бренд: </label>
          <select id="brand">
            <option value="">Усі</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
          </select>

          <button type="button" onclick="filterProducts()">
            Фільтрувати
          </button>
        </form>
      </div>
      <div className={styles.productCard}>
        <ProductCardList db={db} />
      </div>
    </div>
  );
};

export default ThirdPage;
