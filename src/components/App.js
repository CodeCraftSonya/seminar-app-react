import React, { useEffect, useState } from 'react';
import '../styles/App.css';

import CardList from './CardList';
import DeleteModal from './DeleteModal';
import EditModal from './EditModal';

function App() {
  // Состояние списка карточек
  const [cards, setCards] = useState([]);
  // Состояния модальных окон
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  // Загрузка данных с сервера при первом рендере
  useEffect(() => {
    fetch('http://localhost:3001/seminars')
      .then((res) => res.json())
      .then((data) => setCards(data))

      .catch((error) => console.error(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/seminars/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Ошибка при удалении');
      }

      setCards((prevCards) => prevCards.filter((card) => card.id !== id));

      closeModals();
    } catch (error) {
      console.error('Ошибка:', error);
    }
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
    setSelectedCardId(id);
    setIsDeleteModalOpen(true);
  };

  const openEditModal = (id) => {
    setSelectedCardId(id);
    setIsEditModalOpen(true);
  };

  const closeModals = () => {
    setIsDeleteModalOpen(false);
    setIsEditModalOpen(false);
    setSelectedCardId(null);
  };
  // Поиск карточки, которая сейчас выброанна для редактирования
  const selectedCard = cards.find((card) => card.id === selectedCardId);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Семинары</h1>
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
