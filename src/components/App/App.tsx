import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Cards from "../Cards/Cards";
import Popup from "../Popup/Popup";
import { minCardsGenerate, totalCards } from "./../../const/const";

function App() {
  const [itemMenu, setItemMenu] = useState<string>("");
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [numberOfCards, setNumberOfCards] = useState<number>(minCardsGenerate);
  const [autoCreateArr, setAutoCreateArr] = useState<any>([]);
  const [manualCreateArr, setManualCreateArr] = useState<any>([]);
  const [failAdd, setFailAdd] = useState<boolean>(false);

  //установка значения введенного кол-ва карт
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfCards(event.target.valueAsNumber);
  };

  //генерирование случайных карт, в количестве введеных в handleChange
  function submitGenerate(e: React.FormEvent) {
    e.preventDefault();
    let newArr: any[] = [];
    for (let i = 0; i < numberOfCards; i++) {
      const idCard = Math.floor(Math.random() * Math.floor(totalCards - 1) + 1);
      newArr.push(idCard);
    }
    setNumberOfCards(minCardsGenerate);
    return setAutoCreateArr(newArr);
  }

  //определение выбранного элемента меню
  function click(e: any) {
    setItemMenu(e.target.innerText);
  }

  //открытие / закрытие попапа
  function toglePopup() {
    setShowPopup(!showPopup);
  }
  //закрытие попапа по клику на оверлей
  const handleOverlayClosePopup = useCallback((e) => {
    if (e.target.classList.contains("popup")) {
      setShowPopup(false);
    }
  }, []);

  //закрытие попапа по Esc
  useEffect(() => {
    window.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setShowPopup(false);
      }
    });
  }, []);

  //функция определяет какое меню отображать и возвращает поле Card с требуемыми значениями
  function setMenuDisplay() {
    switch (itemMenu) {
      case "Создать":
        return (
          <Cards
            manualCreate={true}
            onOpenPopup={toglePopup}
            manualCreateArr={manualCreateArr}
            deleteCard={deleteCard}
          />
        );
      case "Сгенерировать":
        return (
          <Cards
            manualCreate={false}
            autoCreateArr={autoCreateArr}
            submitGenerate={submitGenerate}
            handleChange={handleChange}
            numberOfCards={numberOfCards}
            deleteCard={deleteCard}
          />
        );
      default:
        return <Info />;
    }
  }

  //добавление карточки из попапа в комикс
  function addCard(e: number) {
    if (showPopup) {
      if (!manualCreateArr.includes(e)) {
        return setManualCreateArr([...manualCreateArr, e]);
      } else {
        return setFailAdd(true);
      }
    }
  }

  //удаление карточки из комикса
  function deleteCard(idCard: number) {
    console.log("WOW Delete" + idCard + "  " + itemMenu);
    switch (itemMenu) {
      case "Создать":
        return setManualCreateArr(
          manualCreateArr.filter(function (item: any) {
            return item !== idCard;
          })
        );
      case "Сгенерировать":
        return setAutoCreateArr(
          autoCreateArr.filter(function (item: any) {
            return item !== idCard;
          })
        );
    }
  }

  return (
    <>
      <Header click={click} />
      <main className="wrapper">{setMenuDisplay()}</main>
      {showPopup ? (
        <Popup
          onClosePopup={toglePopup}
          addCard={addCard}
          failAdd={failAdd}
          manualCreateArr={manualCreateArr}
          onOverlayAndEscClick={handleOverlayClosePopup}
        />
      ) : null}
    </>
  );
}

export default App;
