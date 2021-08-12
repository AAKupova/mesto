import Popup from './Popup';
import { previewImage, previewCaption } from '../utils/constants';

/** @class PopupWithImage - создание экземпляр попапа с превью. */
/** @extends Popup */
export default class PopupWithImage extends Popup {
  /** Метод наследует от родителя (метод open) и расширяет его,
   * добовляет данные в попап (картинку, текст).
   */
  open(e) {
    super.open();
    const previewImg = document.querySelector(previewImage);
    const previewText = document.querySelector(previewCaption);

    previewImg.src = e.target.src;
    previewImg.alt = e.target.alt;
    previewText.textContent = e.target.alt;
  }
}
