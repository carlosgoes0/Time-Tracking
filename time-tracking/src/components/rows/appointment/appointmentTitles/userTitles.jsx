import React from 'react';
import styles from './userTitles.module.css';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";

function TitlesData({nome, matricula}) {
  return (
    <div className={styles.rowsTitleContainer}>
            <div className={styles.rowsTitle}>
              <div className={styles.idUser}>
                 <span>Matrícula</span>
              </div>
              <div className={styles.name}>
                  <span>Nome Colaborador</span>
              </div>
            </div>
           
    </div>
  );    
}

export default TitlesData;
