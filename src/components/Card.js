import React from 'react';
import '../styles/Card.css';

function Card({ card, onDelete, onEdit }) {
  return (
    <div className="card">
      <img className="card_img" src={card.photo} alt={card.title} />
      <div className="card_content">
        <div className="card_content_main">
          <h3 className="card_heading">{card.title}</h3>
          <p className="card_paragraph">{card.description}</p>
          <p className="card_date">{card.date}</p>
        </div>
        <button onClick={() => onEdit(card.id)}>Редактировать</button>
        <button onClick={() => onDelete(card.id)}>Удалить</button>
      </div>
    </div>
  );
}

export default Card;
