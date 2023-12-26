import styles from "./FourthPage.module.css";

//Для мене, прочитай! Причина, чого так криво працює, це те, що потрібний шляг з категорії і підкатегорії для побудови шляху.
// А бази даних немає, тому так. Потрібно буде щось придумати!

const FourthPage = () => {

   return (
      <div className={styles.FourthPage__container}>
         <nav className={styles.FourthPage__menu}>
            <ul className={styles.FourthPage__list}>
               <li className={styles.FourthPage__item}>Товар</li>
               <li className={styles.FourthPage__item}>Характеристики</li>
               <li className={styles.FourthPage__item}>Відгуки <span>0</span></li>
            </ul>
         </nav>
         <div className={styles.FourthPage__block}>
            <div className={styles.FourthPage__blockTest}></div>
         </div>
      </div>
   );
}

export default FourthPage;