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
  /** @type {HTMLElement}  template - шаблон для карточки. */
  #template;

  /** @type {object}  data - данные для карточки. */
  #data;

  /** @type {HTMLElement}  image - элемент для вставки картинки. */
  #image;

  /** @type {HTMLElement}  card - клонированный элемент для создания карточки. */
  #card;

  /** @type {HTMLElement}  title - элемент для вставки текста. */
  #title;

  /** @type {HTMLElement}  like - иконка лайка. */
  #like;

  /** @type {HTMLElement}  likes - элемент для вставки количества лайков. */
  #likes;

  /** @type {HTMLElement}  remove - иконка удаление карточки. */
  #remove;

  /** @type {Number}  id карточки. */
  #id;

  /** @type {TClassNames} */
  #classNames = {
    card: 'card',
    image: 'card__image',
    title: 'card__title',
    like: 'card__like',
    likes: 'card__like-counter',
    likeActive: 'card__like_active',
    delete: 'card__delete',
    iconDelete: 'card__delete_hidden',
  };

  /** @type {TSelectors} */
  #selectors = {
    card: `.${this.#classNames.card}`,
    image: `.${this.#classNames.image}`,
    title: `.${this.#classNames.title}`,
    like: `.${this.#classNames.like}`,
    likes: `.${this.#classNames.likes}`,
    delete: `.${this.#classNames.delete}`,
    iconDelete: `.${this.#classNames.iconDelete}`,
  };

  /** @constructor */
  /**
   * Параметры:
   * @param {object} data - данные для создание новой карточки.
   * @param {HTMLElement} template - шаблон карточки.
   */
  constructor(
    data,
    template,
    { handleCardClick, handleCardDelete, like, disLike }
  ) {
    this.#template = template;
    this.#data = data;
    this.handleCardClick = handleCardClick;
    this.handleCardDelete = handleCardDelete;
    this.like = like;
    this.disLike = disLike;
  }

  /**
   * Метод клонирует шаблон карточки.
   * @return {HTMLElement}
   */
  #cloneTemplate() {
    return this.#template.querySelector(this.#selectors.card).cloneNode(true);
  }

  /**
   * Метод создание карточки.
   * @return {HTMLElement} - возрощает элемент готовой карточки.
   */
  #createCard() {
    const { link, name } = this.#data;
    this.#card = this.#cloneTemplate();
    this.#title = this.#card.querySelector(this.#selectors.title);
    this.#like = this.#card.querySelector(this.#selectors.like);
    this.#likes = this.#card.querySelector(this.#selectors.likes);
    this.#remove = this.#card.querySelector(this.#selectors.delete);
    this.#image = this.#card.querySelector(this.#selectors.image);
    // eslint-disable-next-line
    this.#id = this.#data._id;

    this.#image.src = link;
    this.#image.alt = name;
    this.#title.textContent = name;

    this.#initialLikes();
    this.#addEventsListener();
    this.#addDeleteIcon();

    return this.#card;
  }

  /** Метод добавляет лайка на карточках от пользователя. */
  #initialLikes() {
    const { likes } = this.#data;
    this.#data.likes.forEach((item) => {
      // eslint-disable-next-line
      if (item._id !== 'a74fbad0e0fcfdc67af96c64') {
        this.#disLike(likes.length);
      } else {
        this.#addLike(likes.length);
      }
    });
  }

  /** Метод переключающий активность кнопки лайка. */
  #handlerClickLike() {
    // eslint-disable-next-line
    const id = this.#data._id;
    if (this.#like.classList.contains(this.#classNames.likeActive)) {
      this.disLike(id).then((res) => {
        this.#disLike(res.likes.length);
      });
    } else {
      this.like(id).then((res) => {
        this.#addLike(res.likes.length);
      });
    }
  }

  /** Метод добавляет лайков.
   * @param {Number} - likes количество лайков.
   */
  #addLike(likes) {
    this.#like.classList.add(this.#classNames.likeActive);
    this.#likes.textContent = likes;
  }

  /** Метод удаление лайков.
   * @param {Number} - likes количество лайков.
   */
  #disLike(likes) {
    this.#like.classList.remove(this.#classNames.likeActive);
    this.#likes.textContent = likes;
  }

  /** Метод добавляет прослушиватели событий для карточки. */
  #addEventsListener() {
    this.#like.addEventListener('click', this.#handlerClickLike.bind(this));
    this.#remove.addEventListener('click', (e) =>
      this.handleCardDelete(e, this.#id, this.#card)
    );
    this.#image.addEventListener('click', (e) =>
      this.handleCardClick(e, this.#data)
    );
  }

  /** Метод добавление иконки удаление. */
  #addDeleteIcon() {
    const iconDelete = this.#card.querySelector(this.#selectors.iconDelete);
    // eslint-disable-next-line
    if (this.#data.owner._id !== 'a74fbad0e0fcfdc67af96c64') {
      iconDelete.classList.add(this.#classNames.iconDelete);
    } else {
      iconDelete.classList.remove(this.#classNames.iconDelete);
    }
  }

  /**
   * Метод возвращает готовую карточку.
   * @return {HTMLElement} - возвращает готовую карточку.
   */
  newCard() {
    return this.#createCard();
  }
}
