import React from 'react';
import styles from './TitleSection.module.css';
import Calendar from '../calendar/calendar'
import Search from '../search/search';


function RowsTitle({text}) {
  return (
    <div className={styles.rowsTitleContainer}>
            <div className={styles.titleSection}>
                {text}
                Mural de Apontamentos
            </div>
            <div className={styles.dateRangepicker}>
              <Calendar label={"Data Inicial"} name={"Data Inicial"} />
              <Calendar label={"Data Final"} name={"Data Final"} />
            </div>
            <div className={styles.search}>
              <Search label={"Pesquisar"} name={"Pesquisar"}/>
            </div>
    </div>
  );    
}

export default RowsTitle;
