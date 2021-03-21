import React, { useState } from "react";
import Card from "./../Card/Card";
import "./Cards.css";
import { minCardsGenerate, maxCardsGenerate } from "./../../const/const";

function Cards({ manualCreate, onOpenPopup }: any) {
  const [numberOfCards, setNumberOfCards] = useState<number>(minCardsGenerate);
  const [arrCards, setArrCards] = useState([] as any);
  const [arrManualCards, setArrManualCards] = useState([] as any);

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
    setNumberOfCards(minCardsGenerate);
    return setArrCards(arr);
  };

  return (
    <section>
      {!manualCreate ? (
        <form className="generator" onSubmit={submitGenerate}>
          <label className="generator__title">
            {` Введите количество карт для генерирования (от ${minCardsGenerate} до ${maxCardsGenerate})`}
            <input
              type="number"
              name="maxCardsGenerate"
              className="generator__input"
              placeholder="Сюда"
              min={minCardsGenerate}
              max={maxCardsGenerate}
              value={numberOfCards}
              onChange={handleChange}
            />
          </label>
          <button className="generator__button" type="submit">
            Генерировать
          </button>
        </form>
      ) : null}
      <div className="cards">
        {manualCreate ? (
          <>
            <Card cardsArr={arrManualCards} />
            <button className="card cards__button-add" onClick={onOpenPopup}>
              +
            </button>
          </>
        ) : (
          <>
            <Card cardsArr={arrCards} />
          </>
        )}
      </div>
    </section>
  );
}
export default Cards;
