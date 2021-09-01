import Popup from './Popup';
import { formInput } from '../utils/constants';

/** @class PopupWithForm - создание экземпляра попапа с формой. */
/** @extends Popup */
export default class PopupWithForm extends Popup {
  /** @type {HTMLElement}  form элемент формы. */
  form;

  /** @type {CallableFunction} onSubmit - функция отправки данных. */
  #onSubmit;

  /** @type {[HTMLElement]} inputList - элементы полей формы. */
  #inputList;

  /** @type {Object} formValues. */
  #formValues;

  /** @type {HTMLElement} button - кнопка сабмит. */
  #button;

  /** @type {String} initialText - первоначальный текст кнопки. */
  #initialText;

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
    this.form = this.popup.querySelector(formSelector);
    this.#button = this.form.querySelector('.form__submit-btn');
    this.#initialText = this.#button.textContent;
    this.#onSubmit = onSubmit;

    this.setEventListeners();
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
  }

  /** Метод собирающий данные всех полей формы.
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
   */
  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (e) => {
      this.#handlerSubmit(e);
    });
  }

  /** Метод показывает индификатор загрузки.
   * @param {Boolean} - isLoading.
   */
  renderLoading(isLoading) {
    if (isLoading) {
      this.#button.textContent = 'Сохранить...';
    } else {
      this.#button.textContent = this.#initialText;
    }
  }
}
