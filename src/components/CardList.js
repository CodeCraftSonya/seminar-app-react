import React from 'react';
import Card from './Card';
import '../styles/CardList.css';

function CardList({ cards, onDelete, onEdit }) {
  return (
    <div className="cardList">
      {cards.map((card) => (
        <Card key={card.id} card={card} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
}

export default CardList;
