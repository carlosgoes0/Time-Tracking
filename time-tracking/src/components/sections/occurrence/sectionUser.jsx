import React, { useEffect, useState } from 'react';
import styles from '../sections/SectionUser.module.css'; // Verifique se o caminho para o CSS está correto
import TitleSectionUser from '../../rows/user/titlesSectionUser/titleSectionUser';
import TitlesDataUser from '../../rows/user/userTitles/userTitles';
import RowsData from '../../rows/user/userData/userData';
import api from '../../../api';
import ModalCreateUpdate from '../../modals/user/ModalCreateUpdateUser';
import DeleteModal from '../../modals/ModalDelete';

const SectionOccurrence = () => {
  const [dataList, setDataList] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalCreateUpdateOpen, setIsModalCreateUpdateOpen] = useState(false);
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
    setIsModalCreateUpdateOpen(true);
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
    setIsModalCreateUpdateOpen(true);
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
      setIsModalCreateUpdateOpen(false);
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

  const handleCloseModalCreateUpdate = () => {
    setIsModalCreateUpdateOpen(false);
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
      <TitleSectionUser />
      <TitlesDataUser />
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
        <ModalCreateUpdate
          isOpen={isModalCreateUpdateOpen}
          onClose={handleCloseModalCreateUpdate}
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

export default SectionOccurrence;
