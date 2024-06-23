import React from 'react';
import styles from './ButtonMenu.module.css';
import { IoIosArrowForward } from 'react-icons/io';


function ButtonMenu({ icon: Icon, text }) {
  return (
    <div className={styles.buttonContainer}>
        <div className={styles.titleButton}>
         {Icon && <Icon className={styles.icon}/>}
         <p className={styles.text}>{text}</p>
        </div>
        {Icon && <IoIosArrowForward className={styles.icon}/>} 
    </div>
  );
}

export default ButtonMenu;
