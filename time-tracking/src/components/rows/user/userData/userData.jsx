import React, { useState } from 'react';
import styles from './userData.module.css';
import { MdDeleteForever } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlinePageview } from "react-icons/md";

const RowsData = ({ id, name, onApagar, onEditar }) => {
  const [showConfirm, setShowConfirm] = useState(true);

  return (
    <div className={styles.rowsDataContainer}>
        <div className={styles.rowsData}>
          <div className={styles.idUser}>
            {id}
          </div>
          <div className={styles.name}>
            {name}
          </div>
          <div className={styles.buttonsData}>
          <FaRegEdit onClick={() => onEditar(id)} className={styles.pointer} size={20}/>
          <MdDeleteForever onClick={() => onApagar(true)} className={styles.pointer} color='red' size={25}/>
          </div>
        </div>
    </div>
   
  );
}

export default RowsData;
