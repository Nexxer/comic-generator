import "./App.css";
import React, { useState } from "react";
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

  const submitGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    let newArr: any[] = [];
    for (let i = 0; i < numberOfCards; i++) {
      const idCard = Math.floor(Math.random() * Math.floor(totalCards - 1) + 1);
      newArr.push(idCard);
    }
    setNumberOfCards(minCardsGenerate);
    return setAutoCreateArr(newArr);
  };

  //определение элемента меню
  function click(e: any) {
    setItemMenu(e.target.innerText);
  }

  //открытие / закрытие попапа
  function toglePopup() {
    setShowPopup(!showPopup);
  }

  //функция определяет какое меню отображать и возвращает поле Card с требуемыми значениями
  //TODO убрать console
  function setMenuDisplay() {
    console.log("RENDER SET MENU");
    switch (itemMenu) {
      case "Создать":
        return (
          <Cards manualCreate={true} onOpenPopup={toglePopup} manualCreateArr={manualCreateArr} />
        );
      case "Сгенерировать":
        return (
          <Cards
            manualCreate={false}
            autoCreateArr={autoCreateArr}
            submitGenerate={submitGenerate}
            handleChange={handleChange}
            numberOfCards={numberOfCards}
          />
        );
      default:
        return <Info />;
    }
  }

  //добавление карточки из попапа в комикс
  function addCard(e: number, key: any) {
    if (showPopup) {
      if (!manualCreateArr.includes(e)) {
        setManualCreateArr([...manualCreateArr, e]);
        return console.log(e + "  " + key);
      }
      setFailAdd(true);
      return alert("Уже имеется");
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
        />
      ) : null}
    </>
  );
}

export default App;