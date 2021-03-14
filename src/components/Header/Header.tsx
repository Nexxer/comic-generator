import dangerImg from './../images/18plus.png';

function Header() {
    return (
    <header className="border-secondary border-bottom mb-4">
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <h1 className="navbar-brand m-0 p-0 text-uppercase fs-1">
                    <img src={dangerImg} alt="Danger! Only 18+" className="w-auto h-auto me-3"/>
                    Генератор коммиксов
                </h1>
            </div>
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                <label className="btn  btn-outline-secondary fs-4" htmlFor="btnradio1">Создать</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                <label className="btn  btn-outline-secondary fs-4" htmlFor="btnradio2">Сгенерировать</label>

                <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" defaultChecked/>
                <label className="btn  btn-outline-secondary fs-4" htmlFor="btnradio3">Инфо</label>
            </div>
        </nav>
    </header>
)
}

export default Header;
