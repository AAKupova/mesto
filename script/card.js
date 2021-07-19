/** @type {HTMLElement} контайнер карточек */
const containerCards = document.querySelector('.cards__list');
const cardTemplate = document.querySelector('#card').content;

// /**
//  * Функция рендора карточек
//  *
//  * @param {TInitialCards[]} arrCards массив данных карточек
//  */
// const renderCards = (arrCards) => {
//   arrCards.forEach((item) => addCards(createCard(item)));
// };

// /**
//  * Функция создания dom элемента карточки
//  *
//  * @param {TInitialCards} item данные карточки
//  * @returns {HTMLElement} dom элемент карточки
//  */
// const createCard = (item) => {
//   const cardTemplate = document.querySelector('#card').content;
//   const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
//   const imageElement = cardElement.querySelector('.card__image');
//   const titleElement = cardElement.querySelector('.card__title');

//   imageElement.src = item.link;
//   imageElement.alt = item.name;
//   titleElement.textContent = item.name;

//   return cardElement;
// };

// /**
//  * Функция вставки карточки в контейнер
//  *
//  * @param {HTMLElement} card dom элемент карточки
//  */
// const addCards = (card) => {
//   containerCards.prepend(card);
// };

// /**
//  * Обработчик события лайка / дизлайка
//  *
//  * @param {Event} event
//  */
// const handlerClickLike = (event) => {
//   if (event.target.classList.contains('card__like')) {
//     event.target.classList.toggle('card__like_active');
//   }
// };

// /**
//  * Обработчик события удаления карточки
//  *
//  * @param {Event} event
//  */
// const handlerDeleteCard = (event) => {
//   if (event.target.classList.contains('card__delete')) {
//     event.target.closest('.card').remove();
//   }
// };

// renderCards(initialCards);

// containerCards.addEventListener('click', handlerClickLike);
// containerCards.addEventListener('click', handlerDeleteCard);

class Card {
  #template;
  #data;
  #classNames = {
    card: 'card',
    image: 'card__image',
    title: 'card__title',
    like: 'card__like',
    likeActive: 'card__like_active',
    delete: 'card__delete',
  };
  #selectors = {
    card: `.${this.#classNames.card}`,
    image: `.${this.#classNames.image}`,
    title: `.${this.#classNames.title}`,
  };

  constructor(data, template) {
    this.#template = template;
    this.#data = data;
  }

  #cloneTemplate() {
    return this.#template.querySelector(this.#selectors.card).cloneNode(true);
  }

  #createCard() {
    const { link, name } = this.#data;
    const card = this.#cloneTemplate();
    const image = card.querySelector(this.#selectors.image);
    const title = card.querySelector(this.#selectors.title);

    image.src = link;
    image.alt = name;
    title.textContent = name;

    this.#addEventsListener(card);

    return card;
  }

  #addEventsListener(card) {
    card.addEventListener('click', this.#handlerClickLike.bind(this));
    card.addEventListener('click', this.#handlerDeleteCard.bind(this));
  }

  #handlerClickLike(e) {
    if (e.target.classList.contains(this.#classNames.like)) {
      e.target.classList.toggle(this.#classNames.likeActive);
    }
  }

  #handlerDeleteCard(e) {
    if (e.target.classList.contains(this.#classNames.delete)) {
      e.target.closest(this.#selectors.card).remove();
    }
  }

  get newCard() {
    return this.#createCard();
  }
}

const insertCard = (card) => {
  containerCards.prepend(card);
};

const renderCard = (item) => {
  const card = new Card(item, cardTemplate);
  insertCard(card.newCard);
};

const renderCards = (arrCards) => {
  arrCards.forEach(renderCard);
};

renderCards(initialCards);
