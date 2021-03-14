import card from "./../cards/1.png"


function rndCard() {
    const idCard = Math.floor(Math.random() * Math.floor(301));
    return `https://disk.yandex.ru/d/B7jwVYsE5WRd_Q/${idCard}.png?w=1`
}

function Cards() {
    return(
        <section>
            <div className="row justify-content-start p-2">
                <img src={card} className="col-3 shadow-sm" alt="карточка"/>
                <img src={card} className="col-3 shadow-sm" alt="карточка"/>
                <img src={card} className="col-3 shadow-sm" alt="карточка"/>
                <img src={card} className="col-3 shadow-sm" alt="карточка"/>
                <img src={card} className="col-3 shadow-sm" alt="карточка"/>
                <img src={rndCard()} className="col-3 mb-3" alt="карточка"/>
            </div>
        </section>
    )
}
export default Cards;