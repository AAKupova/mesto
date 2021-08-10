import { renderCard } from './Card.js';
import Popup from './popup.js';
import UserInfo from './UserInfo.js';

// /**
//  * @typedef TPopupWithFormConfig
//  * @type {Object}
//  * @property {String} popup селектор попапа
//  * @property {String} form селектор формы
//  * @property {String} open ссылка на кнопку открытия попапа
//  * @property {String} openByElem css класс который должен присутствовать на элементе для открытия попапа
//  * @property {String} close ссылка на кнопку закрытия попапа
//  * @property {Function} onOpen колбек на открытие попапа
//  * @property {Function} onClose колбек на закрытие попапа
//  * @property {Function} onSubmit колбек на отправку формы
//  */

// /**
//  * Функция создания попапа с формой
//  *
//  * @param {TPopupWithFormConfig} config
//  */
// export const createPopupWithFrom = (config) => {
//   /** @type {HTMLElement} dom элемент формы */
//   const form = document.querySelector(config.form);

//   const validation = new FormValidator({
//     ...config.configValidation,
//     formSelector: config.form,
//   });
//   validation.enableValidation();
//   /**
//    * Обработчик открытия попапа
//    *
//    * @param {Event} e
//    */
//   const handlerOpen = (e) => {
//     if (config.onOpen) {
//       config.onOpen(e);
//     }

//     validation.resetValidation();
//   };

//   /**
//    * Обработчик закрытия попапа
//    *
//    * @param {Event} e
//    */
//   const handlerClose = (e) => {
//     form.reset();

//     if (config.onClose) {
//       config.onClose(e);
//     }
//   };

//   /** @type {{ hide: Function }} объект с методом закрытия попапа */
//   const popup = createPopup({
//     ...config,
//     onClose: handlerClose,
//     onOpen: handlerOpen,
//   });

//   /**
//    * Обработчик отправки формы
//    *
//    * @param {Event} e
//    */
//   const handlerSubmit = (e) => {
//     e.preventDefault();

//     if (config.onSubmit) {
//       config.onSubmit(e);
//     }

//     popup.hide(e);
//   };

//   form.addEventListener('submit', handlerSubmit);
// };

export default class PopupWithForm extends Popup {
  #form;

  #onSubmit;

  #inputList;

  #formValues;

  constructor(formSelector, popupSelector, { onSubmit }) {
    super(popupSelector);
    this.#form = document.querySelector(formSelector);
    this.#onSubmit = onSubmit;
  }

  #close() {
    super.close();
    this.#form.reset();
  }

  #handlerSubmit(e) {
    e.preventDefault();
    this.#onSubmit(this.#getInputValues());
    this.#close();
  }

  #getInputValues() {
    this.#inputList = this.#form.querySelectorAll('.form__input');
    this.#formValues = {};

    this.#inputList.forEach((input) => {
      this.#formValues[input.name] = input.value;
    });

    return this.#formValues;
  }

  setEventListeners() {
    this.#form.addEventListener('submit', (e) => {
      this.#handlerSubmit(e);
    });
  }
}

const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: '.form__input_type_error',
  errorClass: 'form__input-error_active',
};

// /** @type {HTMLElement} dom элемент инпута тайтла формы дабавления карточки */
// const titleInput = document.querySelector('.form__input_type_title');
// /** @type {HTMLElement} dom элемент инпута ссылки формы дабавления карточки */
// const linkInput = document.querySelector('.form__input_type_link');

/**
 * Обработчик отправки формы добавления карточки
 */
const handlerSubmitFormAddCard = (data) => {
  renderCard(data);
};

const popupWithFormAdd = new PopupWithForm('.form_js_add', '.popup_js_add', {
  configValidation: formData,
  onSubmit: handlerSubmitFormAddCard,
});

popupWithFormAdd.setEventListeners();

// /** @type {HTMLElement} dom элемент инпута - имени, формы редактирования профиля */
// const nameInput = document.querySelector('.form__input_type_name');
// /** @type {HTMLElement} dom элемент инпута - описания, формы редактирования профиля */
// const jobInput = document.querySelector('.form__input_type_description');]

/** @type {HTMLElement} dom элемент имеи профиля */
const profileName = document.querySelector('.profile__title');
/** @type {HTMLElement} dom элемент описания профиля */
const profileText = document.querySelector('.profile__text');

const handlerSubmitFormAddEdit = (valueEdit) => {
  const userInfo = new UserInfo(profileName, profileText);
  userInfo.setUserInfo(valueEdit);
};

const popupWithFormEdit = new PopupWithForm('.form_js_edit', '.popup_js_edit', {
  configValidation: formData,
  // onOpen: handlerOpenPopupAddEdit,
  onSubmit: handlerSubmitFormAddEdit,
});

popupWithFormEdit.setEventListeners();
