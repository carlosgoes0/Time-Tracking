import React from 'react';
import styles from './Section.module.css';
import SideBar from '../sidebar/SideBar';
       

function Section() {
  return (
    <div className={styles.sectionContainer}>
      <SideBar/>
      
    </div>
  );
}

export default Section;
