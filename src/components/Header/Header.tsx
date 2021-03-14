import "./Header.css";

function Header() {
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
            <label className="" htmlFor="btnradio1">
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
            <label className="" htmlFor="btnradio2">
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
            <label className="" htmlFor="btnradio3">
              Инфо
            </label>
          </li>
        </ul>

        <div className="" role="group" aria-label="Basic radio toggle button group"></div>
      </nav>
    </header>
  );
}

export default Header;
