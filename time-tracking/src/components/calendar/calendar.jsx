import React from 'react';
import styles from './calendar.module.css';

function Calendar({label, name }) {
  return (
    <>
        <div className={styles.date}>
            <label>{label}</label>
            <input
                name={name}
                type="text"
                className={styles.inputField}
            />
        </div>
    </>
  )
}

export default Calendar;
