import React from 'react';
import "./Card.css";

function Card({lol}: any) {
  return (
    <>
      {lol.map((card: number, index: any) => {
        return (
          <div className="card" key={index}>
            <div className="card__info">
              <span className="card__number">№1</span>
              <span className="card__id">{`id: ${card}`}</span>
            </div>
            <img src={`/cards/${card}.jpg`} alt="карточка" className="card__image" />
          </div>
        );
      })}
    </>
  );
}
export default Card;
