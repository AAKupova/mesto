import Popup from './Popup';
import { formInput } from '../utils/constants';

/** @class PopupWithForm - создание экземпляра попапа с формой. */
/** @extends Popup */
export default class PopupWithForm extends Popup {
  form;

  #onSubmit;

  #inputList;

  #formValues;

  /** @constructor */
  /**
   * Параметры:
   * @callback onSubmit
   * @param {string} popupSelector - селектор попапа.
   * @param {string} formSelector - селектор формы.
   * @param {onSubmit} -  вызывает функцию отправки данных по submit.
   */
  constructor(formSelector, popupSelector, { onSubmit }) {
    super(popupSelector);
    this.form = document.querySelector(formSelector);
    this.#onSubmit = onSubmit;
  }

  /** Метод наследует от родителя (метод close) и расширяет его,
   *  сбрасывает форму.
   * */
  close() {
    super.close();
    this.form.reset();
  }

  /** Метод отправки формы. */
  #handlerSubmit(e) {
    e.preventDefault();
    this.#onSubmit(this.#getInputValues());
    this.close();
  }

  /** Метод собирающий данные всех полей формы.
   *  formInput - селектор  полей формы.
   * @return {Object} - возрощает объект со значениями полей формы.
   */
  #getInputValues() {
    this.#inputList = this.form.querySelectorAll(formInput);
    this.#formValues = {};

    this.#inputList.forEach((input) => {
      this.#formValues[input.name] = input.value;
    });

    return this.#formValues;
  }

  /** Метод наследует родительский (метод setEventListeners) и расширяет его,
   * подпиской на событие submit.
   * */
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (e) => {
      this.#handlerSubmit(e);
    });
  }
}
