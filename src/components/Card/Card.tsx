import "./Card.css";

function Card({ card, scaleCard = false, addCard, manualCreateArr = [], deleteCard }: any) {
  const filePath = require(`./../../images/cards/${card}.jpg`);

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
        checkCardinInCreatedArr(card) ? "card_message" : ""
      }`}>
      <div className="card__info">
        <span>{`id: ${card}`}</span>
      </div>
      {scaleCard ? null : (
        <button className="card__button-delete" onClick={() => deleteCard(card)} />
      )}
      <img
        src={filePath.default}
        alt="карточка"
        className="card__image"
        onClick={() => handleClickCard(card)}
      />
    </div>
  );
}
export default Card;
