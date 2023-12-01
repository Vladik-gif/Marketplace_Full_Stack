import CardListItem from '../CardListItem/CardListItem';
import styles from './CardList.module.css';

const CardList = () => {
  const data = [
    { id: 1, name: 'Мобільні телефони та смартфони', image: 'https://loremflickr.com/320/240' },
    // { id: 2, name: 'Чохли, захисні плівки та скло', image: 'https://loremflickr.com/320/245' },
    // { id: 3, name: 'Bluetooth гарнітури', image: 'https://loremflickr.com/320/241' },
  ];

  return (
    <div>
      {data.map(({ id, name, image }) => (
        <CardListItem key={id} id={id} name={name} image={image} />
      ))}
    </div>
  );
};

export default CardList;
