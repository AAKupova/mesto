import { popupСlose } from '../utils/constants';

/** @class Popup - создание экземпляра попапа. */
export default class Popup {
  #popup;

  #form;

  #conteiner;

  /** @constructor */
  /**
   * Параметр:
   * @param {string} popupSelector - селектор попапа.
   */

  constructor(popupSelector) {
    this.#popup = document.querySelector(popupSelector);
  }

  /** Метод открывающий попап. */
  open() {
    this.#popup.classList.remove('popup_hidden');

    this.setEventListeners();
  }

  /** Метод закрытия попап. */
  close() {
    this.#popup.classList.add('popup_hidden');
    this.#removeEventListeners();
  }

  /** Метод проверки таргета.
   * popupСlose - селектор иконки закрытия попапа.
   */
  handlerHide = (e) => {
    const { target } = e;
    const closeButton = this.#popup.querySelector(popupСlose);

    if (target === this.#popup || target === closeButton) {
      this.close();
    }
  };

  /** Метод проверки таргета на нажатия Escape. */
  #handleEscClose = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }
  };

  /** Метод удаление прослушивателями событий. */
  #removeEventListeners() {
    document.removeEventListener('keydown', this.#handleEscClose);
    this.#popup.removeEventListener('click', this.handlerHide);
  }

  /** Метод подписки на событий. */
  setEventListeners() {
    this.#popup.addEventListener('click', this.handlerHide);
    document.addEventListener('keydown', this.#handleEscClose);
  }
}
