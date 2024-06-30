import React from 'react';
import styles from './Button.module.css';
import { IoIosArrowForward } from 'react-icons/io';


function Button({ icon: Icon, text, onPost}) {
  return (
    <div className={styles.buttonContainer} onclick={onPost}>
        <div className={styles.titleButton}>
         {Icon && <Icon className={styles.icon}/>}
         <p className={styles.text}>{text}</p>
        </div>
        {Icon && <IoIosArrowForward className={styles.icon}/>}
    </div>
  );
}

export default Button;
