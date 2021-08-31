import { popupСlose } from '../utils/constants';

/** @class Popup - создание экземпляра попапа. */
export default class Popup {
  /** @type {HTMLElement}  popup. */
  popup;

  /** @constructor */
  /**
   * Параметр:
   * @param {string} popupSelector - селектор попапа.
   */

  constructor(popupSelector) {
    this.popup = document.querySelector(popupSelector);
  }

  /** Метод открывающий попап. */
  open() {
    this.popup.classList.toggle('popup_hidden');
    document.addEventListener('keydown', this.#handleEscClose.bind(this));
  }

  /** Метод закрытия попап. */
  close() {
    this.popup.classList.add('popup_hidden');
    document.removeEventListener('keydown', this.#handleEscClose);
  }

  /** Метод проверки таргета.
   * popupСlose - селектор иконки закрытия попапа.
   */
  handlerHide(e) {
    const { target } = e;
    const closeButton = this.popup.querySelector(popupСlose);

    if (target === this.popup || target === closeButton) {
      this.close();
    }
  }

  /** Метод проверки таргета на нажатия Escape. */
  #handleEscClose(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

  /** Метод подписки на событий. */
  setEventListeners() {
    this.popup.addEventListener('click', this.handlerHide.bind(this));
  }
}
