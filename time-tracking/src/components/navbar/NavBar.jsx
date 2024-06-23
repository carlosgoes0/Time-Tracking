import React from 'react';
import styles from './NavBar.module.css';
import LogoFapesp from '../../utils/assets/Img-Logo-FAPESP.png'
import { PiUserSquare } from "react-icons/pi";
import { MdGTranslate } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


function NavBar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
      <img src={LogoFapesp} alt="Logo-Fapesp" />
      </div>
      <div className={styles.breadCrumb}>
      </div>
      <div className={styles.iconsAndUser}>
        <MdGTranslate size={20} />
        <MdOutlineWbSunny size={20} />
        <FaRegBell size={20} />
        <PiUserSquare size={50} /> 
      </div>
    </div>
  );
}

export default NavBar;
