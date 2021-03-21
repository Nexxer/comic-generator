import Header from "./Header/Header";
import Info from "./Info/Info";
import Cards from "./Cards/Cards.jsx";
import { useState } from "react";

function App() {
  const [itemMenu, setItemMenu] = useState("");
  function click(e: any) {
    setItemMenu(e.target.innerText);
  }

  function foo() {
    console.log('RENDER')
    switch (itemMenu) {
      case "Создать":
        break;
      case "Сгенерировать":
        return <Cards />;
      default:
        return <Info />;
    }
  }

  return (
    <div className="">
      <Header click={click} />

      {foo()}

    </div>
  );
}

export default App;
