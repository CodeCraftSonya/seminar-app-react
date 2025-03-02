import React from 'react';
import '../styles/Card.css';

function Card({ card, onDelete, onEdit }) {
  return (
    <div className="card">
      <img className="card_img" src={card.photo} alt={card.title} />
      <div className="card_content">
        <h3 className="card_heading">{card.title}</h3>
        <p className="card_paragraph">{card.description}</p>
        <p className="card_date">
          <span>{card.time}</span> <span>{card.date}</span>
        </p>
      </div>
      <button
        className="card_edit"
        onClick={() => onEdit(card.id)}
        aria-label="Редактировать"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2L21 7L7 21H2V16L16 2Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        className="card_delete"
        onClick={() => onDelete(card.id)}
        aria-label="Удалить"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H5H21"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 6V4C8 3.44772 8.44772 3 9 3H15C15.5523 3 16 3.44772 16 4V6M19 6V20C19 20.5523 18.5523 21 18 21H6C5.44772 21 5 20.5523 5 20V6H19Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11V17"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14 11V17"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Card;
