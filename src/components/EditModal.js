import { useEffect, useState } from 'react';
import '../styles/EditModal.css';

function EditModal({ card, onClose, onSave, isOpen }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: '',
    date: '',
  });

  useEffect(() => {
    if (card) {
      setFormData({
        title: card.title,
        description: card.description,
        photo: card.image,
        date: card.date,
      });
    }
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...card, ...formData });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Редактировать карточку</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Название"
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Описание"
          />
          <input
            type="text"
            name="image"
            value={formData.photo}
            onChange={handleChange}
            placeholder="Ссылка на изображение"
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">Сохранить</button>
          <button type="button">Отмена</button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
