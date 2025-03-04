import React from 'react';
import '../styles/DeleteModal.css';

function DeleteModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p className="modal_text">
          Вы уверены, что хотите удалить эту карточку?
        </p>
        <button onClick={onConfirm} className="button_confirm">
          Да, удалить
        </button>
        <button onClick={onClose}>Отмена</button>
      </div>
    </div>
  );
}

export default DeleteModal;
