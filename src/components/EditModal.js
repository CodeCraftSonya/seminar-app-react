import { useEffect, useState } from 'react';
import '../styles/EditModal.css';

function EditModal({ card, onClose, onSave, isOpen }) {
  // Состояние формы
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: '',
    time: '',
    date: '',
  });
  // Когда модальное окно открывается и передаётся card, заполняем форму данными карточки
  useEffect(() => {
    if (card) {
      setFormData({
        title: card.title,
        description: card.description,
        photo: card.photo,
        time: card.time,
        date: card.date,
      });
    }
  }, [card]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Если изменяется дата, форматируем её в "дд.мм.гг"
    if (name === 'date') {
      const [year, month, day] = value.split('-');
      const formattedDate = `${day}.${month}.${year.slice(2)}`;
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...card, ...formData });
    onClose();
  };
  // Если модальное окно закрыто, ничего не рендерим
  if (!isOpen) return null;
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 className="modal_heading">Редактировать карточку</h2>
        <form onSubmit={handleSubmit} className="modal_form">
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
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <button type="submit">Сохранить</button>
          <button type="button" onClick={onClose}>
            Отмена
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditModal;
