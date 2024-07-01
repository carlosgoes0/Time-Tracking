import React from 'react';
import styles from './ModalCreateUpdateUser.module.css';

const ModalCreateUpdateUser = ({ isOpen, onClose, onSubmit, user, handleInputChange, modalType }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        {modalType === 'edit' ? (
          <div>
            <h2>Editar Usuário</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(user); }}>
              <label>
                Matrícula:
                <input
                  type="text"
                  value={user.idEmployee}
                  onChange={(e) => handleInputChange(e)}
                  name="idEmployee"
                  readOnly  // readOnly para matrícula não ser editável
                />
              </label>
              <label>
                Nome Completo:
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  name="name"
                />
              </label>
              <label>
                Jornada:
                <input
                  type="text"
                  value={user.journey}
                  onChange={(e) => handleInputChange(e)}
                  name="journey"
                />
                <span>Horas</span>
              </label>
              <label>
                Intervalo:
                <input
                  type="text"
                  value={user.allowance}
                  onChange={(e) => handleInputChange(e)}
                  name="allowance"
                />
                <span>Minutos</span>
              </label>
              <button type="submit" className={styles.submitButton}>Salvar</button>
            </form>
          </div>
        ) : modalType === 'create' ? (
          <div>
            <h2>Cadastrar Usuário</h2>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(user); }}>
              <label>
                Matrícula:
                <input
                  type="text"
                  value={user.idEmployee}
                  onChange={(e) => handleInputChange(e)}
                  name="idEmployee"
                />
              </label>
              <label>
                Nome Completo:
                <input
                  type="text"
                  value={user.name}
                  onChange={(e) => handleInputChange(e)}
                  name="name"
                />
              </label>
              <label>
                Jornada:
                <input
                  type="text"
                  value={user.journey}
                  onChange={(e) => handleInputChange(e)}
                  name="journey"
                />
                <span>Horas</span>
              </label>
              <label>
                Intervalo:
                <input
                  type="text"
                  value={user.allowance}
                  onChange={(e) => handleInputChange(e)}
                  name="allowance"
                />
                <span>Minutos</span>
              </label>
              <button type="submit" className={styles.submitButton}>Cadastrar</button>
            </form>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ModalCreateUpdateUser;
