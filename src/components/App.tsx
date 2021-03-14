import React from 'react';
import Header from "./components/Header";
import Info from "./components/Info";
import Cards from "./components/Cards";

function App() {
  return (
  <div className="container bg-light pt-3 shadow min-vh-100">
       <Header />
      <Info />
      <Cards/>
    </div>
  );
}

export default App;
