import Card from "../Card/Card";
import "./Popup.css";
import { maxCardsInPopup, totalCards } from "./../../const/const";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function Popup({ onClosePopup, addCard, failAdd, manualCreateArr, onOverlayAndEscClick }: any) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  let allCard: any[] = [];
  let subArray: any[] = [];
  let maxPageCount: number = 1;

  //Сбор всех имеющихся карт
  (function autoGenerateAllCardsArr() {
    for (let i = 0; i < totalCards; i++) {
      allCard.push(i + 1);
    }
    return allCard;
  })();

  if (allCard.length % maxCardsInPopup) {
    maxPageCount = Math.floor(allCard.length / maxCardsInPopup) + 1;
  } else {
    maxPageCount = allCard.length / maxCardsInPopup;
  }
  console.log(maxPageCount);

  //Функция разбивки целого массива на подмасивы
  (function createSubArray(totalArr: any[]) {
    for (let i = 0; i < Math.ceil(totalArr.length / maxCardsInPopup); i++) {
      subArray[i] = totalArr.slice(i * maxCardsInPopup, i * maxCardsInPopup + maxCardsInPopup);
    }
    return subArray;
  })(allCard);

  function pageChangeHandler({ selected }: any) {
    setCurrentPage(selected);
  }

  return (
    <div className="popup" onClick={onOverlayAndEscClick}>
      <div className="popup__content ">
        <h2 className="popup__title">Выберите карточку для добавления</h2>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"pagination-item_break"}
          pageCount={maxPageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={3}
          onPageChange={pageChangeHandler}
          containerClassName={"pagination"}
          activeClassName={"pagination-item_active"}
          disabledClassName={"pagination-item_disabled"}
          pageClassName="pagination-item"
          pageLinkClassName="pagination-link"
          previousClassName="pagination-item"
          nextClassName="pagination-item"
          previousLinkClassName="pagination-link"
          nextLinkClassName="pagination-link"
        />
        <div className="popup__card-choice cards">
          <Card
            cardsArr={subArray[currentPage]}
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
