import React, {useEffect, useState} from 'react';
import '../styles/App.css';

import CardList from './CardList';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

function App() {
  const [cards, setCards] = useState([]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/seminars')
      .then((res) => res.json())
      .then((data) => setCards(data))

      .catch((error) => console.error(error));
  }, []);

  const handleDelete = (id) => {
    setCards(cards.filter((card) => card.id !== id));
    closeModals();
  };

  const handleEdit = (updatedCard) => {
    setCards(
      cards.map((seminar) =>
        seminar.id === updatedCard.id ? updatedCard : seminar
      )
    );

    closeModals();
  };

  const openDeleteModal = (id) => {
    setSelectedCardId(id); // Устанавливаем ID карточки
    setIsDeleteModalOpen(true); // Открываем модальное окно
  };

  // Функция для открытия модального окна редактирования
  const openEditModal = (id) => {
    setSelectedCardId(id); // Устанавливаем ID карточки
    setIsEditModalOpen(true); // Открываем модальное окно
  };

  // Функция для закрытия модальных окон
  const closeModals = () => {
    setIsDeleteModalOpen(false); // Закрываем модальное окно удаления
    setIsEditModalOpen(false); // Закрываем модальное окно редактирования
    setSelectedCardId(null); // Сбрасываем ID выбранной карточки
  };

  // Находим выбранную карточку по ID
  const selectedCard = cards.find((card) => card.id === selectedCardId);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Seminars</h1>
        <CardList
          cards={cards}
          onDelete={openDeleteModal}
          onEdit={openEditModal}
        />
      </header>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={closeModals}
        onConfirm={() => handleDelete(selectedCardId)}
      />

      <EditModal
        isOpen={isEditModalOpen}
        onClose={closeModals}
        onSave={handleEdit}
        card={selectedCard}
      />
    </div>
  );
}

export default App;
