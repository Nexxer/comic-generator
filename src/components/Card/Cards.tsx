import "./Cards.css";

function rndCard() {
  const idCard = Math.floor(Math.random() * Math.floor(301));
  return idCard;
}

function Cards() {
  return (
    <section className="cards">

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

      <div className="card">
        {/*className="card__number" */}
        <div className="card__info">
          <span className="card__number">№1</span>
          <span className="card__id">{`id: ${rndCard()}`}</span>
        </div>
        <img src={`/cards/${rndCard()}.jpg`} alt="карточка" className="card__image" />
      </div>

    </section>
  );
}
export default Cards;
