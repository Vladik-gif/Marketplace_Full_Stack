import { useEffect, useState } from 'react';
import React from 'react';
import styles from './SelectLang.module.css';
import Ua from '../../assets/svg/UA.svg';
import Us from '../../assets/svg/US.svg';

const SelectLang = () => {
  const [activeButton, setActiveButton] = useState(1);

  const activateButton = buttonNumber => {
    setActiveButton(buttonNumber);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(`.${styles.buttonLang}`);
    buttons.forEach((button, index) => {
      if (index + 1 === activeButton) {
        button.classList.add(styles.buttonLang__active);
      } else {
        button.classList.remove(styles.buttonLang__active);
      }
    });
  }, [activeButton]);

  return (
    <div className={styles.buttonLang__container}>
      {[1, 2].map(buttonNumber => (
        <React.Fragment key={buttonNumber}>
          {buttonNumber > 1 && <span className={styles.buttonLang__border}>|</span>}
          <button
            className={`${styles.buttonLang} ${
              activeButton === buttonNumber ? styles.buttonLang__active : ''
            }`}
            onClick={() => activateButton(buttonNumber)}
          >
            <img
              className={styles.buttonLang__img}
              src={buttonNumber === 1 ? Ua : Us}
              alt="прапор"
            />
            {buttonNumber === 1 ? 'UA' : 'US'}
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SelectLang;
