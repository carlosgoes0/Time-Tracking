import React from 'react';
import styles from './ModalCreateUpdateHoliday.module.css';

const ModalCreateUpdateHoliday = ({ isOpen, onClose, onSubmit, user, handleInputChange, modalType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {modalType === 'edit' ? (
          <div>
            <h2>Editar Feriado</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(user); }}>
              <label>
                Data Inicial:
                <input
                  type="text"
                  value={user.idEmployee}
                  onChange={(e) => handleInputChange(e)}
                  name="initialDate"
                />
              </label>
              <label>
                Data Final:
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  name="name"
                />
              </label>
              <label>
                Descrição:
                <input
                  type="text"
                  value={user.journey}
                  onChange={(e) => handleInputChange(e)}
                  name="description"
                />
              </label>
              <button type="submit" className={styles.submitButton}>Salvar</button>
            </form>
          </div>
        ) : modalType === 'create' ? (
          <div>
            <h2>Cadastrar Feriado</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(user); }}>
              <label>
                Data Inicial:
                <input
                  type="text"
                  value={user.idEmployee}
                  onChange={(e) => handleInputChange(e)}
                  name="initialDate"
                />
              </label>
              <label>
                Data Final:
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  name="finalDate"
                />
              </label>
              <label>
                Descrição:
                <input
                  type="text"
                  value={user.journey}
                  onChange={(e) => handleInputChange(e)}
                  name="description"
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

export default ModalCreateUpdateHoliday;
