import React from 'react';
import styles from './Button.module.css';
import { IoIosArrowForward } from 'react-icons/io';


function Button({ icon: Icon, text }) {
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

export default Button;
