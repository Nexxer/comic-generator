import Header from "./Header/Header";
import Info from "./Info/Info";
import Cards from "./Card/Cards";
import { useState } from "react";

function App() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="">
      <Header />
      {showInfo ? <Info /> : null}
      <Cards />
    </div>
  );
}

export default App;
