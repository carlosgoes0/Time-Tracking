import React from 'react';
import styles from './ButtonMenuExit.module.css';
import { TbLogout2 } from "react-icons/tb";


function ButtonMenuExit() {
  return (
    <div className={styles.buttonExitContainer}>
         <TbLogout2 />
         <p className={styles.text}>Sair</p>
    </div>
  );
}

export default ButtonMenuExit;
