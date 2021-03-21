import React, { useState } from "react";
import Card from "./../Card/Card";
import "./Cards.css";

function Cards() {
  const [numberOfCards, setNumberOfCards] = useState<number>(3);
  const [arrCards, setArrCards] = useState({ cards: [] as any });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfCards(event.target.valueAsNumber);
  };

  const submitGenerate = (e: React.FormEvent) => {
    const arr: number[] = [];
    e.preventDefault();
    for (let i = 0; i < numberOfCards; i++) {
      const idCard = Math.floor(Math.random() * Math.floor(301));
      arr.push(idCard);
    }
    setNumberOfCards(3);
    return setArrCards({ cards: arr });
  };

  return (
    <section>
      <form className="generator" onSubmit={submitGenerate}>
        <label className="generator__title">
          Введите количество карт для генерирования (от 3 до 15)
          <input
            type="number"
            name="maxCards"
            className="generator__input"
            placeholder="Сюда"
            min="3"
            max="15"
            value={numberOfCards}
            onChange={handleChange}
          />
        </label>
        <button className="generator__button" type="submit">
          Генерировать
        </button>
      </form>
      {arrCards.cards.length > 2 ? (
        <div className="cards">
          <Card lol={arrCards.cards} />
        </div>
      ) : null}
    </section>
  );
}
export default Cards;
