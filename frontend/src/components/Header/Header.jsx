import { NavLink } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';

import SvgIcon from '@mui/material/SvgIcon';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styles from './Header.module.css';
import SelectLang from '../SelectLang/SelectLang';

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };
  return (
    <div className={styles.header}>
      <div className={`${styles.header__wraper} width_limiter`}>
        <div className={styles.logo}>
          <NavLink onClick={handleLogoClick} className={styles.logo__link}>
            <img src={Logo} className={styles.logo__svg} />
            <span className={styles.logo__text}>TechHaven</span>
          </NavLink>
        </div>

        <div className={styles.header__nav}>
          <div className={styles.header__inputLabel}>
            <input
              className={styles.header__input}
              type="text"
              autoComplete="off"
              placeholder="Пошук товару..."
            />

            <button className={styles.header__inputBtn} type="submit">
              <SvgIcon sx={{ width: 27, height: 23 }}>
                <SearchOutlinedIcon />
              </SvgIcon>
            </button>
          </div>

          <SelectLang className={styles.header__selectLang} />

          <NavLink className={styles.header__basket}>
            <SvgIcon sx={{ width: 34, height: 34 }}>
              <ShoppingCartOutlinedIcon />
            </SvgIcon>
          </NavLink>
          <NavLink className={styles.header__account}>
            <SvgIcon sx={{ width: 34, height: 34 }}>
              <AccountCircleOutlinedIcon />
            </SvgIcon>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
