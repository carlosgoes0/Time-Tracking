import React from 'react';
import styles from './ModalDelete.module.css';

const DeleteModal = ({ isOpen, onClose, onConfirm, user, modalType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {modalType === 'delete' ? (
          <div>
            <h2>Deletar Usuário</h2>
            <p>Deseja remover o usuário {user.name}?</p>
            <p className={styles.warning}>Essa ação é irreversível, confirme abaixo para concluir ação!</p>
            <button 
              onClick={() => onConfirm()} 
              className={styles.submitButton}>
              Confirmar
            </button>
            
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DeleteModal;
