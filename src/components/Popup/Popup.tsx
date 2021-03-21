import Card from "../Card/Card";
import "./Popup.css";

function Placeholder(this: any, { onClosePopup }:any) {
  let allCard: any[] = [];
  (function autoGenerateAllCardsArr() {
    for (let i = 0; i < 200; i++) {
      allCard.push(i + 1);
    }
    return allCard;
  })();

  return (
    <div className="popup" onFocus={this}>
      <div className="popup__content ">
        <h2 className="popup__title">Выберите карточку для добавления</h2>
        <div className="popup__card-choice cards">
          <Card cardsArr={allCard} />
        </div>
        <button className="popup__button-close" onClick={onClosePopup} />
      </div>
    </div>
  );
}
export default Placeholder;
