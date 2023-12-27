import { useState, useEffect } from 'react';

import React from 'react';

import styles from './SelectLang.module.css';
import UA from '../../assets/svg/UA.svg';
import US from '../../assets/svg/US.svg';

const SelectLang = () => {
   const [heightUp, setHeightUp] = useState(36);
   const [togle, setTogle] = useState(false);

   const [language, setLanguage] = useState(["UA", "US"]);

   const showLanguage = () => {
      setHeightUp((up) => (togle ? up - 25 : up + 25));
      setTogle(!togle);
   }

   useEffect(() => {
      document.getElementById("UA").addEventListener("click", () => {
         setLanguage(["UA", "US"]);
      });

      document.getElementById("US").addEventListener("click", () => {
         setLanguage(["US", "UA"]);
      });
   }, [])

   return (
      <div className={styles.container}>
         <div className={styles.buttonLang__container} id='len' onClick={showLanguage}
            style={{ height: heightUp }}>
            {language.map((e, index) => <div className={styles.buttonLang__language} key={index} id={e}>
               <img src={e === "UA" ? UA : US} alt={e} className={styles.buttonLang__flag} />
               <span className={styles.buttonLang__text}>{e}</span>
            </div>)}
         </div>
      </div>
   );
};

export default SelectLang;

