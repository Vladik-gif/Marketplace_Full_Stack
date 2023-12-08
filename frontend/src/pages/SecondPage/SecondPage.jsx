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
  const [dataToShow, setDataToShow] = useState([]);

  const getTitleAndDataByPath = currentPage => {
    switch (currentPage) {
      case '/mobile':
        setTitle('Телефони та аксесуари');
        setDataToShow([
          {
            id: 1,
            name: 'Мобільні телефони та смартфони',
            image: 'https://loremflickr.com/320/240',
          },
          {
            id: 2,
            name: 'Чохли, захисні плівки та скло',
            image: 'https://loremflickr.com/320/245',
          },
          { id: 3, name: 'Bluetooth гарнітури', image: 'https://loremflickr.com/320/241' },
          {
            id: 4,
            name: 'Все для selfie',
            image: 'https://loremflickr.com/320/246',
          },
          {
            id: 5,
            name: 'Комплектуючі',
            image: 'https://loremflickr.com/320/247',
          },
          {
            id: 6,
            name: 'Носимі гаджети та аксесуари',
            image: 'https://loremflickr.com/320/248',
          },
          {
            id: 7,
            name: 'Кабелі та адаптери',
            image: 'https://loremflickr.com/320/249',
          },
          {
            id: 8,
            name: 'Карти пам’яті',
            image: 'https://loremflickr.com/320/250',
          },
          {
            id: 9,
            name: 'Тримачі в машину',
            image: 'https://loremflickr.com/320/251',
          },
          {
            id: 10,
            name: 'Зарядні пристрої',
            image: 'https://loremflickr.com/320/252',
          },
        ]);
        break;

      case '/desktop':
        setTitle('Комп’ютери та комплектуючі');
        setDataToShow([
          {
            id: 11,
            name: 'Моноблоки та компьютери',
            image: 'https://loremflickr.com/320/250',
          },
          {
            id: 12,
            name: 'Монітори',
            image: 'https://loremflickr.com/320/251',
          },
          { id: 13, name: 'Системні блоки', image: 'https://loremflickr.com/320/241' },
          {
            id: 14,
            name: 'Комплектуючі',
            image: 'https://loremflickr.com/320/252',
          },
          {
            id: 15,
            name: 'Серверне обладнання',
            image: 'https://loremflickr.com/320/253',
          },
          {
            id: 16,
            name: 'Мережеве обладнання',
            image: 'https://loremflickr.com/320/254',
          },
          {
            id: 17,
            name: 'Аксесуари',
            image: 'https://loremflickr.com/320/255',
          },
          {
            id: 18,
            name: 'Носії інформації',
            image: 'https://loremflickr.com/320/256',
          },
          {
            id: 19,
            name: 'Офісна техніка',
            image: 'https://loremflickr.com/320/257',
          },
          {
            id: 20,
            name: 'Кабелі та перехідники',
            image: 'https://loremflickr.com/320/258',
          },
        ]);
        break;

      case '/foto':
        setTitle('Фото та відео');
        setDataToShow([
          {
            id: 21,
            name: 'Фотоапарати та цифрові відеокамери',
            image: 'https://loremflickr.com/320/261',
          },
          {
            id: 22,
            name: 'Аксесуари для фото та відео',
            image: 'https://loremflickr.com/320/262',
          },

          {
            id: 23,
            name: 'Студійне обладнання',
            image: 'https://loremflickr.com/320/263',
          },
          {
            id: 24,
            name: 'Квадрокоптери та аксесуари',
            image: 'https://loremflickr.com/320/264',
          },
          {
            id: 25,
            name: 'Екшн-камери та аксесуари',
            image: 'https://loremflickr.com/320/265',
          },
          {
            id: 26,
            name: 'Об`єктиви',
            image: 'https://loremflickr.com/320/267',
          },
          {
            id: 27,
            name: 'Камери відеоспостереження',
            image: 'https://loremflickr.com/320/268',
          },
          {
            id: 28,
            name: 'Карти пам’яті',
            image: 'https://loremflickr.com/320/269',
          },
          {
            id: 29,
            name: 'Запчастини для фото та відео',
            image: 'https://loremflickr.com/320/270',
          },
          {
            id: 30,
            name: 'Запчастини  для квадракоптерів',
            image: 'https://loremflickr.com/320/241',
          },
        ]);
        break;
      case '/tv':
        setTitle('ТВ та відеотехніка');
        setDataToShow([
          {
            id: 31,
            name: 'Телевізори та аксесуари',
            image: 'https://loremflickr.com/320/271',
          },
          {
            id: 32,
            name: 'Домашщні кінотеатри',
            image: 'https://loremflickr.com/320/272',
          },

          {
            id: 33,
            name: 'Проектори',
            image: 'https://loremflickr.com/320/273',
          },
          {
            id: 34,
            name: 'Інтерактивні дошки',
            image: 'https://loremflickr.com/320/274',
          },
          {
            id: 35,
            name: 'Медіаплеєри',
            image: 'https://loremflickr.com/320/275',
          },
          {
            id: 36,
            name: 'Караоке-системи',
            image: 'https://loremflickr.com/320/276',
          },
          {
            id: 37,
            name: 'Супутникове, кабельне телебачення',
            image: 'https://loremflickr.com/320/277',
          },
          {
            id: 38,
            name: 'Комплектуючі ',
            image: 'https://loremflickr.com/320/278',
          },
          {
            id: 39,
            name: 'Тюнери та ресивери',
            image: 'https://loremflickr.com/320/279',
          },
        ]);
        break;

      case '/audio':
        setTitle('Аудіотехніка');
        setDataToShow([
          {
            id: 40,
            name: 'Акустичні системи',
            image: 'https://loremflickr.com/320/280',
          },
          {
            id: 41,
            name: 'Портативні колонки',
            image: 'https://loremflickr.com/320/281',
          },

          {
            id: 42,
            name: 'Музичні центри, магнітоли',
            image: 'https://loremflickr.com/320/282',
          },
          {
            id: 43,
            name: 'Навушники та аксесуари',
            image: 'https://loremflickr.com/320/283',
          },
          {
            id: 44,
            name: 'Програвачі вінілу',
            image: 'https://loremflickr.com/320/284',
          },
          {
            id: 45,
            name: 'МР3, МР4-плеєри',
            image: 'https://loremflickr.com/320/285',
          },
          {
            id: 46,
            name: 'Радіоприймачі',
            image: 'https://loremflickr.com/320/286',
          },
          {
            id: 47,
            name: 'Електронні перекладачі ',
            image: 'https://loremflickr.com/320/287',
          },
          {
            id: 48,
            name: 'Диктофони',
            image: 'https://loremflickr.com/320/288',
          },
          {
            id: 49,
            name: 'Запчастини та аксесуари',
            image: 'https://loremflickr.com/320/289',
          },
        ]);
        break;

      case '/game':
        setTitle('Ігрові приставки та пристрої');
        setDataToShow([
          {
            id: 50,
            name: 'Ігрові приставки',
            image: 'https://loremflickr.com/320/290',
          },
          {
            id: 51,
            name: 'Ігрові ноутбуки',
            image: 'https://loremflickr.com/320/291',
          },

          {
            id: 52,
            name: 'Ігрові комп’ютери',
            image: 'https://loremflickr.com/320/292',
          },
          {
            id: 53,
            name: 'Ігрові монітори',
            image: 'https://loremflickr.com/320/293',
          },
          {
            id: 54,
            name: 'Аксесуари для геймерів',
            image: 'https://loremflickr.com/320/294',
          },
          {
            id: 55,
            name: 'Ігрові комплектуючі',
            image: 'https://loremflickr.com/320/295',
          },
          {
            id: 56,
            name: 'Ігрові маршрутизатори',
            image: 'https://loremflickr.com/320/296',
          },
          {
            id: 57,
            name: 'Окуляри та шоломи VR ',
            image: 'https://loremflickr.com/320/297',
          },
          {
            id: 58,
            name: 'Ігри',
            image: 'https://loremflickr.com/320/298',
          },
        ]);
        break;

      default:
        setTitle('');
        setDataToShow([]);
        break;
    }
  };

  useEffect(() => {
    getTitleAndDataByPath(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className={styles.item__container}>
        <SideBar />
        <div className={styles.item__content}>
          <h2 className={styles.item__title}>{title}</h2>
          <CardList data={dataToShow} />
        </div>
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
