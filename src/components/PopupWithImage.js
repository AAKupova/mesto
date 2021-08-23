import Popup from './Popup';

/** @class PopupWithImage - создание экземпляр попапа с превью. */
/** @extends Popup */
export default class PopupWithImage extends Popup {
  #img;

  #text;

  /** @constructor */
  /**
   * Параметры:
   * @param {string} popupSelector - селектор попапа.
   * @param {string} previewImage - селектор  картинки попапа превью.
   * @param {string} previewCaption -селектор  текста попапа превью.
   */
  constructor(popupSelector, previewImage, previewCaption) {
    super(popupSelector);
    this.#img = this.popup.querySelector(previewImage);
    this.#text = this.popup.querySelector(previewCaption);

    this.setEventListeners();
  }

  /** Метод наследует от родителя (метод open) и расширяет его,
   * добовляет данные в попап (картинку, текст).
   */
  open(e) {
    super.open();

    this.#img.src = e.target.src;
    this.#img.alt = e.target.alt;
    this.#text.textContent = e.target.alt;
  }
}
