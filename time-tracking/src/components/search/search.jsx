import React from 'react';
import styles from './search.module.css';

function Search({label, name }) {
  return (
    <>
        <div className={styles.containerSearch}>
            <label>{label}</label>
            <input
                name={name}
                type="text"
                className={styles.inputSearch}
            />
        </div>
    </>
  )
}

export default Search;
