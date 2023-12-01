import { useLocation } from 'react-router';
import ProductCard from '../../components/ProductCard/ProductCard';
import SideBar from '../../components/SideBar/SideBar';
import Slider from '../../ui_reuse/slider/Slider';

import styles from './SecondPage.module.css';
import { useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';

const SecondCPage = () => {
  const location = useLocation();
  const currentPage = location.pathname;

  const [title, setTitle] = useState('');

  const getTitleByPath = currentPage => {
    switch (currentPage) {
      case '/mobile':
        return 'Телефони та аксесуари';
      case '/desktop':
        return 'Комп’ютери та комплектуючі';
      case '/foto':
        return 'Фото та відео';
      case '/tv':
        return 'ТВ та Відеотехніка';
      case '/audio':
        return 'Аудіотехніка';
      case '/game':
        return 'Ігри та ігрові приставки';
      case '/tablet':
        return 'Планшети та електронні книги';
      case '/laptop':
        return 'Ноутбуки та аксесуари';
      case '/home':
        return 'Техніка для дому';
      case '/kitchen':
        return 'Техніка для кухні';
      case '/climate':
        return 'Кліматичне обладнання';
      case '/other':
        return 'Інша електроніка';
      default:
    }
  };

  useEffect(() => {
    setTitle(getTitleByPath(currentPage));
  }, [currentPage]);

  return (
    <>
      <div className={styles.itemContainer}>
        <SideBar />
        <h2>{title}</h2>
        <CardList />
      </div>
      <Slider
        settings={{ type: 'carousel', startAt: 0, perView: 5 }}
        title="Новинки"
        slideSArray={[
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
          <ProductCard />,
        ]}
      />
    </>
  );
};

export default SecondCPage;
