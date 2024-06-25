import React from 'react';
import styles from './Section.module.css';
import SideBar from '../sidebar/SideBar';
import RowsTitle from '../rows/titleSection'
       

function Section() {
  return (
    <div className={styles.sectionContainer}>
      <SideBar/>
      <RowsTitle/>
      <div>



      </div>
    </div>
  );
}

export default Section;
