import { useState } from "react";
import "./Card.css";
const uniqid = require("uniqid");


//TODO доделать ошибку добавления
function Card({ cardsArr, scaleCard, addCard, failAdd, manualCreateArr }: any) {

  const [errorAdd, setErrorAdd] = useState<boolean>(false)

  function clickCard(card: any) {
    if (manualCreateArr) {
      if (manualCreateArr.includes(card)) {
        return setErrorAdd(true);
      }
      addCard(card);
    }
  }

  return (
    <>
      {cardsArr.map((card: number) => {
        const key = uniqid();
        return (
          <div className={`card ${scaleCard ? "card_scale" : ""} ${errorAdd ? "card_error" : ""}`} key={key}>
            <div className="card__info">
              <span>{`id: ${card}`}</span>
            </div>
            <img
              src={`/cards/${card}.jpg`}
              alt="карточка"
              className="card__image"
              onClick={()=>clickCard(card)}
            />
          </div>
        );
      })}
    </>
  );
}
export default Card;
