/**
 * @typedef TFormData
 * @type {object}
 * @property {string} formSelector селектор формы
 * @property {string} inputSelector селектор элемента инпута блока формы
 * @property {string} submitButtonSelector селектор элемента кнопки блока формы
 * @property {string} inactiveButtonClass селектор элемента кнопки блока формы в состоянии неактивна
 * @property {string} inputErrorClass селектор элемента инпута блока формы с модификатором тип со значение ошибка
 * @property {string} errorClass селектор элемента ошибка блока формы в состоянии активна
 */

/** @type {TFormData} */
export const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: '.form__input_type_error',
  errorClass: 'form__input-error_active',
};

export const buttonPopupEdit = document.querySelector('.profile__edit');
export const buttonPopupAdd = document.querySelector('.profile__add-btn');

/** @type {HTMLElement} dom элемент имеи профиля */
export const profileName = document.querySelector('.profile__title');
/** @type {HTMLElement} dom элемент описания профиля */
export const profileText = document.querySelector('.profile__text');

/** @type {HTMLElement} контайнер карточек */
export const containerCards = document.querySelector('.cards__list');
/** @type {HTMLElement} template - шаблон карточки */
export const cardTemplate = document.querySelector('#card').content;

/** @type {HTMLElement} dom элемент инпута - имени, формы редактирования профиля */
export const nameInput = document.querySelector('.form__input_type_name');
/** @type {HTMLElement} dom элемент инпута - описания, формы редактирования профиля */
export const jobInput = document.querySelector('.form__input_type_description');

/** @type {String} селектор попапа добавления карточки */
export const popupAdd = '.popup_js_add';
/** @type {String} селектор попапа превью */
export const popupPreview = '.popup_js_preview';
/** @type {String} селектор формы добавления карточки */
export const formAdd = '.form_js_add';
/** @type {String} селектор формы редактирования профиля */
export const formEdit = '.form_js_edit';
/** @type {String} селектор попапа редактирования профиля */
export const popupEdit = '.popup_js_edit';

/** @type {String} селектор попапа иконки закрытия */
export const popupСlose = '.popup__close';
/** @type {String} селектор формы инпута */
export const formInput = '.form__input';
/** @type {String} селектор превью картинки */
export const previewImage = '.preview__image';
/** @type {String} селектор превью текста */
export const previewCaption = '.preview__caption';
