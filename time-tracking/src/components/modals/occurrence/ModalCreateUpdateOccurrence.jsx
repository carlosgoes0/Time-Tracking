import React from 'react';
import styles from './ModalCreateUpdateOccurrence.module.css';

const ModalCreateUpdateOccurrence = ({ isOpen, onClose, onSubmit, user, handleInputChange, modalType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {modalType === 'edit' ? (
          <div>
            <h2>Editar Ocorrência</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(user); }}>
              <label>
                Tipo de Ocorrência:
                <input
                  type="text"
                  value={user.idEmployee}
                  onChange={(e) => handleInputChange(e)}
                  name="typeOfOccurrence"
                  readOnly
                />
              </label>
              <label>
                Abono:
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  name="allowance"
                />
              </label>
              <button type="submit" className={styles.submitButton}>Salvar</button>
            </form>
          </div>
        ) : modalType === 'create' ? (
          <div>
            <h2>Cadastrar Ocorrência</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(user); }}>
              <label>
               Tipo de Ocorrência:
                <input
                  type="text"
                  value={user.idEmployee}
                  onChange={(e) => handleInputChange(e)}
                  name="typeOfOccurrence"
                />
              </label>
              <label>
               Abono:
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  name="allowance"
                />
              </label>
              <button type="submit" className={styles.submitButton}>Cadastrar</button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ModalCreateUpdateOccurrence;
