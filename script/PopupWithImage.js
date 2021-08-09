import Popup from './popup.js';

export default class PopupWithImage extends Popup {
  #popup;

  constructor(popupSelector) {
    super(popupSelector);
    this.#popup = document.querySelector(popupSelector);
  }

  open(e) {
    super.open();
    const previewImg = document.querySelector('.preview__image');
    const previewText = document.querySelector('.preview__caption');

    previewImg.src = e.target.src;
    previewImg.alt = e.target.alt;
    previewText.textContent = e.target.alt;
  }
}
