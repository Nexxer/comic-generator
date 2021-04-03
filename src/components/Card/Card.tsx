import "./Card.css";

function Card({ card, scaleCard = false, addCard, manualCreateArr = [] }: any) {
  function checkCardinInCreatedArr(number: number) {
    return manualCreateArr.includes(number);
  }

  function handleClickCard(idCard: number) {
    if (scaleCard) {
      return addCard(idCard);
    }
  }
  return (
    <div
      className={`card ${scaleCard ? "card_scale" : ""} ${
        checkCardinInCreatedArr(card) ? "card_error" : ""
      }`}>
      <div className="card__info">
        <span>{`id: ${card}`}</span>
      </div>
      <img
        src={`/cards/${card}.jpg`}
        alt="карточка"
        className="card__image"
        onClick={() => handleClickCard(card)}
      />
    </div>
  );
}
export default Card;
