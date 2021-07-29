import { initialCards } from './initial-cards.js';

/**
 * @typedef TClassNames
 * @type {object}
 * @property {string} card класс карточки
 * @property {string} image класс картинки карточки
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

/** @type {HTMLElement} контайнер карточек */
const containerCards = document.querySelector('.cards__list');

/** @type {HTMLElement} template - шаблон карточки */
const cardTemplate = document.querySelector('#card').content;

/** @class Card - создание экземпляра карты */
class Card {
  #template;
  #data;

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
  constructor(data, template) {
    this.#template = template;
    this.#data = data;
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
    const card = this.#cloneTemplate();
    const image = card.querySelector(this.#selectors.image);
    const title = card.querySelector(this.#selectors.title);
    const like = card.querySelector(this.#selectors.like);
    const remove = card.querySelector(this.#selectors.delete);

    image.src = link;
    image.alt = name;
    title.textContent = name;

    this.#addEventsListener(like, remove);

    return card;
  }

  /**
   * Метод добавляет прослушиватели событий для карточки.
   *
   * @param {HTMLElement} like - элемент карточки - иконка лайка.
   * @param {HTMLElement} remove - элемент карточки - иконка удаления.
   */
  #addEventsListener(like, remove) {
    like.addEventListener('click', this.#handlerClickLike.bind(this));
    remove.addEventListener('click', this.#handlerDeleteCard.bind(this));
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

/**
 * Функция добавлении карточки в дом дерево.
 *
 * @param {HTMLElement} card -  карточкаю
 */
const insertCard = (card) => {
  containerCards.prepend(card);
};

/**
 * Функция создания экземпляра класса карточки.
 *
 * @param {object} item - параметры карточки.
 */
export const renderCard = (item) => {
  const card = new Card(item, cardTemplate);
  insertCard(card.newCard());
};

/**
 * Функция перебора обекта с данными.
 *
 * @param {object} arrCards - обекта с данными для карточек.
 */
const renderCards = (arrCards) => {
  arrCards.forEach(renderCard);
};

renderCards(initialCards);
