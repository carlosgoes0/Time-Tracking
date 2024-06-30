import React, { useEffect, useState } from 'react';
import styles from './Section.module.css';
import TitleSection from '../rows/user/titlesSectionUser/titleSectionUser';
import TitlesData from '../rows/user/userTitles/userTitles';
import RowsData from '../rows/user/userData/userData';
import Button from '../buttons/Button';
import api from '../../api';
import EditModal from '../modals/ModalEditUser';
import DeleteModal from '../modals/ModalDelete';

const ListComponent = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchData();
        setDataList(data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchData();
  }, []);

  const handlePut = (idEmployee) => {
    const user = dataList.find(user => user.idEmployee === idEmployee);
    setSelectedUser(user);
    setIsNewUser(false);
    setIsEditModalOpen(true);
  };

  const handleDel = (idEmployee) => {
    const user = dataList.find(user => user.idEmployee === idEmployee);
    setSelectedUser(user);
    setIsDeleteModalOpen(true);
  };

  const handlePost = () => {
    const newUser = {
      idEmployee: '',
      name: '',
      journey: '',
      allowance: ''
    };
    setSelectedUser(newUser);
    setIsNewUser(true);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async (user) => {
    try {
      if (isNewUser) {
        const newItem = await api.postData(user);
        setDataList([...dataList, newItem]);
        console.log('Novo usuário cadastrado com sucesso.');
      } else {
        const updatedUser = await api.putData(user.idEmployee, user);
        setDataList(dataList.map(item => (item.idEmployee === user.idEmployee ? updatedUser : item)));
        console.log('Usuário atualizado:', updatedUser);
      }
      setIsEditModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(isNewUser ? 'Erro ao cadastrar novo usuário:' : 'Erro ao atualizar usuário:', error);
    }
  };

  const handleConfirmDelete = async () => {
    try {
      await api.deleteData(selectedUser.idEmployee);
      const updateData = dataList.filter(item => item.idEmployee !== selectedUser.idEmployee);
      setDataList(updateData);
      console.log(`Usuário com ID ${selectedUser.idEmployee} deletado com sucesso.`);
      setIsDeleteModalOpen(false);
      setSelectedUser(null);
    } catch (error) {
      console.error(`Erro ao deletar usuário com ID ${selectedUser.idEmployee}:`, error);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setSelectedUser(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className={styles.sectionContainer}>
      <TitleSection />
      <TitlesData />
      <div className={styles.listData}>
        {dataList.map((data) => (
          <RowsData 
            key={data.idEmployee}
            id={data.idEmployee}
            name={data.name}
            onPut={() => handlePut(data.idEmployee)}
            onDel={() => handleDel(data.idEmployee)}
          />
        ))}
      </div>
      <div className={styles.registerUser}>
      <button type="submit" className={styles.submitButton} onClick={handlePost}>Cadastrar</button>
      </div>
      {selectedUser && (
        <EditModal
          isOpen={isEditModalOpen}
          onClose={handleCloseEditModal}
          user={selectedUser}
          onSubmit={handleSaveEdit}
          handleInputChange={handleInputChange}
          modalType={isNewUser ? 'create' : 'edit'}
        />
      )}
      {selectedUser && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={handleCloseDeleteModal}
          user={selectedUser}
          onConfirm={handleConfirmDelete}
          modalType="delete"
        />
      )}
    </div>
  );
}

export default ListComponent;
