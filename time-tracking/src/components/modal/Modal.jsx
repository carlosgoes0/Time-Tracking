import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ show, onClose, onSubmit, user, handleInputChange, modalType }) => {
  if (!show) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {modalType === 'delete' ? (
          <div>
            <h2>Deletar Usuário</h2>
            <p>Tem certeza de que deseja deletar o usuário {user.name}?</p>
            <button onClick={onSubmit} className={styles.submitButton}>Deletar</button>
          </div>
        ) : (
          <div>
            <h2>{modalType === 'edit' ? 'Editar Usuário' : 'Cadastrar Usuário'}</h2>
            <form onSubmit={onSubmit}>
              <label>
                Matrícula:
                <input
                  type="text"
                  name="registration"
                  value={user.registration}
                  onChange={handleInputChange}
                  readOnly={modalType === 'edit'}
                />
              </label>
              <label>
                Nome Completo:
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Jornada:
                <input
                  type="text"
                  name="jornada"
                  value={user.jornada}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Intervalo:
                <input
                  type="text"
                  name="intervalo"
                  value={user.intervalo}
                  onChange={handleInputChange}
                />
              </label>
              <button type="submit" className={styles.submitButton}>
                {modalType === 'edit' ? 'Alterar' : 'Cadastrar'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
