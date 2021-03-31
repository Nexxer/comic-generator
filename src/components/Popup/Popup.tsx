import Card from "../Card/Card";
import "./Popup.css";
import { maxCardsInPopup } from "./../../const/const";
import ReactPaginate from "react-paginate";
import { useState } from "react";

function Popup({ onClosePopup, addCard, failAdd, manualCreateArr, onOverlayAndEscClick }: any) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  let allCard: any[] = [];
  const pageCount: number = 10;

  function pageChangeHandler({ selected }: any) {
    setCurrentPage(selected);
  }

  //Вывод всех имеющихся карт
  //TODO добавить пангинацию
  (function autoGenerateAllCardsArr() {
    for (let i = 0; i < maxCardsInPopup; i++) {
      allCard.push(i + 1);
    }
    return allCard;
  })();

  return (
    <div className="popup" onClick={onOverlayAndEscClick}>
      <div className="popup__content ">
        <h2 className="popup__title">Выберите карточку для добавления</h2>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          breakLabel={"..."}
          breakClassName={"pagination-item_break"}
          pageCount={pageCount}
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
