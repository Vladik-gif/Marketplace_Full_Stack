// import { useState } from 'react';
import FilterComputer from '../../components/Filter/Desktop/FilterComputer/FilterComputer';
import FilterSmartphone from '../../components/Filter/Mobile/FilterSmartphone/FilterSmartphone';
import ProductCardList from '../../components/ProductCardList/ProductCardList';
import styles from './ThirdPage.module.css';
import { useLocation } from 'react-router-dom';

const db = [
  {
    id: 1,
    category: 'Телефони',
    title: 'Samsung',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 20000,
    image: 'https://loremflickr.com/320/500',
    color: 'червоний',
    camera: 2,
    diagonal: 6.5,
  },
  {
    id: 2,
    category: 'Телефони',
    title: 'Nokia',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 10000,
    image: 'https://loremflickr.com/320/501',
    color: 'голубий',
    camera: 1,
    diagonal: 7,
  },
  {
    id: 3,
    category: 'Телефони',
    title: 'Iphone',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 30000,
    image: 'https://loremflickr.com/320/502',
    color: 'червоний',
    camera: 3,
    diagonal: 6.5,
  },
  {
    id: 4,
    category: 'Телефони',
    title: 'Samsung',
    discription: 'Samsung Galaxy S21 FE G990B 6/128GB Light Violet (SM-G990BLVFSEK) NEW',
    price: 20000,
    image: 'https://loremflickr.com/320/503',
    color: 'чорний',
    camera: 2,
    diagonal: 6,
  },
];

const ThirdPage = () => {
  const location = useLocation();

  const sectionFilters = {
    smartphones: FilterSmartphone,
    computers: FilterComputer,
  };

  const sectionId = Object.keys(sectionFilters).find(section =>
    location.pathname.includes(section)
  );

  const FilterComponent = sectionFilters[sectionId];

  return (
    <div className={styles.thirdPageContainer}>
      <div className={styles.filterNav}>{FilterComponent && <FilterComponent db={db} />}</div>

      <div className={styles.productCard}>
        <ProductCardList db={db} />
      </div>
    </div>
  );
};

export default ThirdPage;
