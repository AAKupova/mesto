/**
 * @typedef TClassNames
 * @type {object}
 * @property {string} card класс карточки
 * @property {string} image класс кxартинки карточки
 * @property {string} title класс заголовка карточки
 * @property {string} like класс иконки лайка карточки
 * @property {string} likeActive класс иконки лайка в активном состоянии карточки
 * @property {string} delete класс иконки удаления карточки
 */

/**
 * @typedef TSelectors
 * @type {object}
 * @property {string} card селектор карточки
 * @property {string} image селектор картинки карточки
 * @property {string} title title заголовка карточки
 */

/** @class Card - создание экземпляра карты */
export default class Card {
  #template;

  #data;

  #image;

  #card;

  #title;

  #like;

  #remove;

  /** @type {TClassNames} */
  #classNames = {
    card: 'card',
    image: 'card__image',
    title: 'card__title',
    like: 'card__like',
    likeActive: 'card__like_active',
    delete: 'card__delete',
  };

  /** @type {TSelectors} */
  #selectors = {
    card: `.${this.#classNames.card}`,
    image: `.${this.#classNames.image}`,
    title: `.${this.#classNames.title}`,
    like: `.${this.#classNames.like}`,
    delete: `.${this.#classNames.delete}`,
  };

  /** @constructor */
  /**
   * Параметры:
   * @param {object} data - данные для создание новой карточки.
   * @param {HTMLElement} template - шаблон карточки.
   */
  constructor(data, template, { handleCardClick }) {
    this.#template = template;
    this.#data = data;
    this.handleCardClick = handleCardClick;
  }

  /**
   * Метод клонирует шаблон карточки.
   *
   * @return {HTMLElement}
   */
  #cloneTemplate() {
    return this.#template.querySelector(this.#selectors.card).cloneNode(true);
  }

  /**
   * Метод создание карточки.
   *
   * @return {HTMLElement} - возрощает элемент карточки.
   */
  #createCard() {
    const { link, name } = this.#data;
    this.#card = this.#cloneTemplate();
    this.#title = this.#card.querySelector(this.#selectors.title);
    this.#like = this.#card.querySelector(this.#selectors.like);
    this.#remove = this.#card.querySelector(this.#selectors.delete);

    this.#image = this.#card.querySelector(this.#selectors.image);

    this.#image.src = link;
    this.#image.alt = name;
    this.#title.textContent = name;

    this.#addEventsListener();
    this.#setEventListener(this.#card);

    return this.#card;
  }

  /** Метод добавляет прослушиватели событий для карточки. */
  #addEventsListener() {
    this.#like.addEventListener('click', this.#handlerClickLike.bind(this));
    this.#remove.addEventListener('click', this.#handlerDeleteCard.bind(this));
  }

  #setEventListener(card) {
    card.addEventListener('click', (e) => {
      if (e.target === this.#image) {
        this.handleCardClick(e);
      }
    });
  }

  /**
   * Метод переключающий активность кнопки лайка.
   *
   * @param {Event} e - элемент события.
   */
  #handlerClickLike(e) {
    e.target.classList.toggle(this.#classNames.likeActive);
  }

  /**
   * Метод удаление карточки.
   *
   * @param {Event} e - элемент события.
   */
  #handlerDeleteCard(e) {
    e.target.closest(this.#selectors.card).remove();
  }

  /**
   * Метод возвращает готовую карточку.
   *
   * @return {HTMLElement} - возвращает готовую карточку.
   */
  newCard() {
    return this.#createCard();
  }
}
