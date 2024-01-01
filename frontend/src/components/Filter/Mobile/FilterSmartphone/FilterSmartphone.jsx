import styles from './FilterSmartphone.module.css';

const FilterSmartphone = db => {
  const data = db.filter('Телефони');
  console.log(data);

  return (
    <>
      <form className={styles.filterForm} id="filter-form">
        <label>
          Від:
          <input type="number" min="0" />
        </label>

        <label>
          До:
          <input type="number" min="0" />
        </label>

        <p>Колір:</p>

        {db.map(({ id, color }) => (
          <label key={id}>
            <input type="checkbox" />
            {color}
          </label>
        ))}

        <button type="button">Фільтрувати</button>
      </form>
    </>
  );
};

export default FilterSmartphone;
