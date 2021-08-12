import Popup from './Popup';

export default class PopupWithImage extends Popup {
  open(e) {
    super.open();
    const previewImg = document.querySelector('.preview__image');
    const previewText = document.querySelector('.preview__caption');

    previewImg.src = e.target.src;
    previewImg.alt = e.target.alt;
    previewText.textContent = e.target.alt;
  }
}
