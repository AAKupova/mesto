/**
 * @typedef TFormData
 * @type {object}
 * @property {string} formSelector селектор формы
 * @property {string} inputSelector селектор елемента инпут блока формы
 * @property {string} submitButtonSelector селектор елемента кнопка блока формы
 * @property {string} inactiveButtonClass селектор елемента кнопка блока формы в состоянии неактивна
 * @property {string} inputErrorClass селектор елемента инпут блока формы с модификатором тип со значение ошибка
 * @property {string} errorClass селектор елемента ошибка блока формы в состоянии активна
 */

/** @type {TFormData} */

const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: '.form__input_type_error',
  errorClass: 'form__input-error_active',
};

const editButton = document.querySelector('.profile__edit');
const addButton = document.querySelector('.profile__add-btn');

editButton.addEventListener('click', openPopupEdit);
containerCards.addEventListener('click', openPopupPreview);
addButton.addEventListener('click', openPopupAdd);
