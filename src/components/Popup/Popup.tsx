import Card from "../Card/Card";
import "./Popup.css";
import { maxCardsInPopup } from "./../../const/const";

function Popup(this: any, { onClosePopup, addCard, failAdd, manualCreateArr }: any) {
  let allCard: any[] = [];

  //Вывод всех имеющихся карт
  //TODO добавить пангинацию
  (function autoGenerateAllCardsArr() {
    for (let i = 0; i < maxCardsInPopup; i++) {
      allCard.push(i + 1);
    }
    return allCard;
  })();

  return (
    <div className="popup" onFocus={this}>
      <div className="popup__content ">
        <h2 className="popup__title">Выберите карточку для добавления</h2>
        <div className="popup__card-choice cards">
          <Card
            cardsArr={allCard}
            scaleCard={true}
            addCard={addCard}
            failAdd={failAdd}
            manualCreateArr={manualCreateArr}
          />
        </div>
        <button className="popup__button-close" onClick={onClosePopup} />
      </div>
    </div>
  );
}
export default Popup;
