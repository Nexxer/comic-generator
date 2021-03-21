import React from "react";
import "./Card.css";

function Card({ cardsArr }: any) {
  return (
    <>
      {cardsArr.map((card: number, index: any) => {
        return (
          <div className="card" key={index}>
            <div className="card__info">
              <span>{`№${index + 1}`}</span>
              <span>{`id: ${card}`}</span>
            </div>
            <img src={`/cards/${card}.jpg`} alt="карточка" className="card__image" />
          </div>
        );
      })}
    </>
  );
}
export default Card;
