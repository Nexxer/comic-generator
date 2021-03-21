import "./App.css";
import { useState } from "react";
import Header from "../Header/Header";
import Info from "../Info/Info";
import Cards from "../Cards/Cards";
import Popup from "../Popup/Popup";

function App() {
  const [itemMenu, setItemMenu] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  function click(e: any) {
    setItemMenu(e.target.innerText);
  }

  function toglePopup() {
    setShowPopup(!showPopup);
  }

  function setMenuDisplay() {
    console.log("RENDER");
    switch (itemMenu) {
      case "Создать":
        return <Cards manualCreate={true} onOpenPopup={toglePopup} />;

      case "Сгенерировать":
        return <Cards manualCreate={false} />;
      default:
        return <Info />;
    }
  }

  return (
    <>
      <Header click={click} />
      <main className="wrapper">{setMenuDisplay()}</main>
      {showPopup ? <Popup onClosePopup={toglePopup} /> : null}
    </>
  );
}

export default App;
