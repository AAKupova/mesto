import Popup from './Popup';

/** @class PopupWithConfirm - создание экземпляра попапа с потверждением. */
/** @extends Popup */
export default class PopupWithConfirm extends Popup {
  /** @type {HTMLElement} form - dom форма. */
  #form;

  /** @type {CallableFunction} api - функция отправки данных. */
  #api;

  /** @type {HTMLElement} button - кнопка сабмит. */
  #button;

  /** @type {String} initialText - первоначальный текст кнопки. */
  #initialText;

  /** @constructor */
  /**
   * Параметры:
   * @callback api
   * @param {string} popupSelector - селектор попапа.
   * @param {api} -  вызывает функцию отправки данных на сервер.
   */
  constructor(popupSelector, { api }) {
    super(popupSelector);
    this.#api = api;
    this.#form = this.popup.querySelector('form');
    this.#button = this.#form.querySelector('.form__submit-btn');
    this.#initialText = this.#button.textContent;
    this.#addEventListener();
  }

  /** Метод наследует от родителя (метод open) и расширяет его,
   * принимает данные (карточку и id).
   * @param {Number} id карточки.
   * @param {HTMLElement} element карточки.
   */
  open(id, element) {
    super.open();
    this.id = id;
    this.element = element;
  }

  /** Метод наследует родительский (метод setEventListeners) и расширяет его,
   * подпиской на событие submit.
   */
  #addEventListener() {
    super.setEventListeners();
    this.#form.addEventListener('submit', this.#deleteCard.bind(this));
  }

  /** Метод передает данные на сервер для удаление картчоки. */
  #deleteCard(e) {
    e.preventDefault();
    this.#api(this.id);
  }

  /** Метод удаляет карточку из Dom. */
  delete() {
    this.element.remove();
  }

  /** Метод показывает индификатор загрузки.
   * @param {Boolean} - isLoading.
   */
  renderLoading(isLoading) {
    if (isLoading) {
      this.#button.textContent = 'Удаление...';
    } else {
      this.#button.textContent = this.#initialText;
    }
  }
}
