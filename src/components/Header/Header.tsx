import "./Header.css";

function Header({ click }: any) {
  return (
    <header className="header">
      <h1 className="header__title">
        <div className="header__icon">18+</div>
        Генератор коммиксов
      </h1>

      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__list_item">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
            />
            <label htmlFor="btnradio1" onClick={click}>
              Создать
            </label>
          </li>

          <li className="header__list_item">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label htmlFor="btnradio2" onClick={click}>
              Сгенерировать
            </label>
          </li>

          <li className="header__list_item">
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio3"
              autoComplete="off"
              defaultChecked
            />
            <label htmlFor="btnradio3" onClick={click}>
              Инфо
            </label>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
