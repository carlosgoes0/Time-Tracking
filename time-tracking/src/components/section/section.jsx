import React, { useEffect, useState } from 'react';
import styles from './Section.module.css';
import TitleSection from '../rows/user/titlesSectionUser/titleSectionUser';
import TitlesData from '../rows/user/userTitles/userTitles';
import RowsData from '../rows/user/userData/userData';
import Button from '../buttons/Button';
import api from '../../api';

const ListComponent = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    fetch('https://66717d38e083e62ee43bd274.mockapi.io/employee')
        .then(response => response.json())
        .then(data => setDataList(data))
        .catch(error => console.error('Erro ao buscar usuários:', error));
}, []);

  return (
    <div className={styles.sectionContainer}>
      <TitleSection />
      <TitlesData />
      <div className={styles.listData}>
        {dataList.map((data) => (
          <RowsData 
          id={data.idEmployee} 
          name={data.name} 
          // onEditar={() => handleEditar(dataList.idEmployee)}
          // onApagar={() => handleApagar(dataList.idEmployee)}
          />
        ))}
      </div>
      <div className={styles.registerUser}>
        <Button text={"Cadastrar"} />
      </div>
    </div>
  );
}

export default ListComponent;
