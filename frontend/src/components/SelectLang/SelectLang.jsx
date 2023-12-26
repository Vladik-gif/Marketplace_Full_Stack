import { useState } from 'react';

import React from 'react';

import styles from './SelectLang.module.css';
import UA from '../../assets/svg/UA.svg';
import US from '../../assets/svg/US.svg';

const SelectLang = () => {
   const [heightUp, setHeightUp] = useState(36);
   const [togle, setTogle] = useState(false);

   const [ua, setUa] = useState("UA");
   const [us, setUs] = useState("US");

   const showLanguage = () => {
      if (togle) {
         setHeightUp((up) => up - 25);
         setTogle(!togle);
      } else {
         setHeightUp((up) => up + 25);
         setTogle(!togle);
      }
   }

   const changeLanguage = (event) => {
      if (event.target.id === "US") {
         setUa(us);
         setUs(ua);
      }
   };

   return (
      <div className={styles.container}>
         <div className={styles.buttonLang__container} id='len' onClick={showLanguage}
            style={{ height: heightUp }}>
            <div className={styles.buttonLang__language} id='UA' onClick={changeLanguage}>
               <img src={UA} alt={ua} className={styles.buttonLang__flag} />
               <span className={styles.buttonLang__text}>{ua}</span>
            </div>
            <div className={styles.buttonLang__language} id='US' onClick={changeLanguage}>
               <img src={US} alt={us} className={styles.buttonLang__flag} />
               <span className={styles.buttonLang__text}>{us}</span>
            </div>
         </div>
      </div>
   );
};

export default SelectLang;

