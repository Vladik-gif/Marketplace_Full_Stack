import { useState } from 'react';

import styles from './SelectLang.module.css';
import UA from '../../assets/svg/UA.svg';
import US from '../../assets/svg/US.svg';

const Languages = ['UA', 'US'];

const SelectLang = () => {
   const [heightUp, setHeightUp] = useState(36);
   const [toggle, setToggle] = useState(false);

   const [currentLang, setCurrentLang] = useState(Languages[0]);

   const showLanguage = () => {
      setHeightUp(up => (toggle ? up - 25 : up + 25));
      setToggle(!toggle);
   };

   const setLanguage = e => {
      setCurrentLang(Languages[Languages.indexOf(e.currentTarget.id)]);
   };

   return (
      <div className={styles.container}>
         <div
            className={styles.buttonLang__container}
            id="len"
            onClick={showLanguage}
            style={{ height: heightUp }}
         >
            {!toggle && (
               <div className={styles.buttonLang__language}>
                  <img
                     src={currentLang === 'UA' ? UA : US}
                     alt={currentLang}
                     className={styles.buttonLang__flag}
                  />
                  <span className={styles.buttonLang__text}>{currentLang}</span>
               </div>
            )}
            {toggle &&
               Languages.sort(i => currentLang !== i).map((i, idx) => (
                  <div
                     onClick={e => setLanguage(e)}
                     className={styles.buttonLang__language}
                     key={idx}
                     id={i}
                  >
                     <img src={i === 'UA' ? UA : US} alt={i} className={styles.buttonLang__flag} />
                     <span className={styles.buttonLang__text}>{i}</span>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default SelectLang;

