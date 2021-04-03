import Card from "./../Card/Card";
import "./Cards.css";
import { minCardsGenerate, maxCardsGenerate } from "./../../const/const";
const uniqid = require("uniqid");

function Cards({
  manualCreate,
  onOpenPopup,
  manualCreateArr,
  autoCreateArr,
  submitGenerate,
  handleChange,
  numberOfCards,
}: any) {
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
            {manualCreateArr.map((card: number) => {
              return <Card scaleCard={false} card={card} key={uniqid()} />;
            })}

            <button className="card cards__button-add" onClick={onOpenPopup}>
              Добавить карточку
            </button>
          </>
        ) : (
          <>
            {autoCreateArr.map((card: number) => {
              return <Card scaleCard={false} card={card} key={uniqid()} />;
            })}
          </>
        )}
      </div>
    </section>
  );
}
export default Cards;
