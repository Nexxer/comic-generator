import "./Info.css";
import { minCardsGenerate, maxCardsGenerate } from "./../../const/const";

function Info() {
  return (
    <section className="info">
      <div className="info__warning">
        <h2 className="info__warning_title">Предупреждение!</h2>
        <p className="info__text">
          Все, что вы увидите далее имеет лишь развлекательную цель и никак не желает оскорбить
          кого-то.
          <br /> Так же я не присваиваю себе права на используеммый материал.
        </p>
      </div>
      <div>
        <h3 className="info__title">Информация о проекте:</h3>
        <p className="info__text">проект создан на ReactJS и TypeScript.</p>
      </div>
      <div>
        <h3 className="info__title">Описание:</h3>
        <p className="info__text">
          {`на данной странице можно создавать свой комикс или генерировать случайный (от ${minCardsGenerate} до ${maxCardsGenerate}          карточек), с возсожностью сохранения на свой ПК`}
        </p>
      </div>
      <div>
        <h3 className="info__title">Как пользоваться:</h3>
        <p className="info__text">на данный момент вы находитесь в меню "Инфо".</p>
        <h3 className="info__title">Для создания своего комикса:</h3>
        <ul className="info__list">
          <li>выберите в меню "Создать"</li>
          <li>нажмите на пустую карту</li>
          <li>выберите из католога понравившеюся карточку для вставки</li>
          <li>
            повторяйте добавлять до достижения желаемого результата или ограничения в 12 карточек
          </li>
        </ul>
        <h3 className="info__title">Для генерации случайного комикса:</h3>
        <ul className="info__list">
          <li>выберите в меню "Сгенерировать"</li>
          <li>{`введите количество желаемых карточек от ${minCardsGenerate} до ${maxCardsGenerate}`}</li>
          <li>Нажмите кнопку "Создать"</li>
        </ul>

        {/*!TODO добавить описание сохранения*/}
      </div>
    </section>
  );
}

export default Info;
