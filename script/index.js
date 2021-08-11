import { initialCards } from './initial-cards.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/popupWithForm.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import Popup from '../components/Popup.js';
import Card from '../components/Card.js';

import {
  buttonPopupEdit,
  buttonPopupAdd,
  selectorPopupAdd,
  selectorPopupEdit,
  profileName,
  profileText,
  cardTemplate,
  containerCards,
  formData,
  nameInput,
  jobInput,
  popupPreview,
  formAdd,
  popupAdd,
  formEdit,
  popupEdit,
} from '../utils/constants.js';

const renderCard = (item) => {
  const card = new Card(item, cardTemplate, {
    handleCardClick: (e) => {
      const openPopupPreview = new PopupWithImage(popupPreview);
      openPopupPreview.open(e);
    },
  });
  return card.newCard();
};

const renderDom = (item) => {
  section.addItem(renderCard(item));
};

const section = new Section(
  {
    initialCards,
    renderer: (item) => {
      renderDom(item);
    },
  },
  containerCards
);
section.rendererGeneral();

const handlerSubmitFormAddCard = (data) => {
  renderDom(data);
};

const userInfo = new UserInfo(profileName, profileText);

const handlerOpenPopupAddEdit = () => {
  const valueEdit = userInfo.getUserInfo();
  nameInput.value = profileName.textContent.trim() || valueEdit.name;
  jobInput.value = profileText.textContent.trim() || valueEdit.job;
};

const handlerSubmitFormAddEdit = (valueEdit) => {
  userInfo.setUserInfo(valueEdit);
};

const validationAdd = new FormValidator({
  ...formData,
  formSelector: formAdd,
});

const validationEdit = new FormValidator({
  ...formData,
  formSelector: formEdit,
});

// validationEdit.enableValidation();
// validationAdd.enableValidation();

const popupWithFormAdd = () => {
  const popupWithForm = new PopupWithForm(formAdd, popupAdd, {
    onSubmit: handlerSubmitFormAddCard,
  });
  popupWithForm.setEventListeners();
  validationAdd.enableValidation();
};

const popupWithFormEdit = () => {
  const popupWithForm = new PopupWithForm(formEdit, popupEdit, {
    onSubmit: handlerSubmitFormAddEdit,
  });

  popupWithForm.setEventListeners();
  validationEdit.enableValidation();
};

popupWithFormEdit();
popupWithFormAdd();

const openPopupEdit = () => {
  const classPopupu = new Popup(selectorPopupEdit);
  classPopupu.open();
  handlerOpenPopupAddEdit();
  validationEdit.resetValidation();
};

const openPopupAdd = () => {
  const classPopupu = new Popup(selectorPopupAdd);
  classPopupu.open();
  validationAdd.resetForm();
  validationAdd.resetValidation();
};

buttonPopupAdd.addEventListener('click', openPopupAdd);
buttonPopupEdit.addEventListener('click', openPopupEdit);

// /** @type {HTMLElement} previewImg - картинка попапа превью. */
// const previewImg = document.querySelector('.preview__image');

// /** @type {HTMLElement} previewText - текст попапа превью. */
// const previewText = document.querySelector('.preview__caption');

// /**
//  * Обработчик открытия попапа просмотра картинок
//  *
//  * @param {Event} e
//  */
// const handlerOpenPopupPreview = ({ target }) => {
//   previewImg.src = target.src;
//   previewImg.alt = target.alt;
//   previewText.textContent = target.alt;
// };

// createPopup({
//   popup: '.popup_js_preview',
//   open: '.cards__list',
//   openByElem: 'card__image',
//   close: '.popup__close_js_preview',
//   onOpen: handlerOpenPopupPreview,
// });

// /** @type {HTMLElement} dom элемент инпута тайтла формы дабавления карточки */
// const titleInput = document.querySelector('.form__input_type_title');
// /** @type {HTMLElement} dom элемент инпута ссылки формы дабавления карточки */
// const linkInput = document.querySelector('.form__input_type_link');

// /**
//  * Обработчик отправки формы добавления карточки
//  */
// const handlerSubmitFormAddCard = () => {
//   renderCard({
//     name: titleInput.value,
//     link: linkInput.value,
//   });
// };

// createPopupWithFrom({
//   popup: '.popup_js_add',
//   open: '.profile__add-btn',
//   close: '.popup__close_js_add',
//   form: '.form_js_add',
//   configValidation: formData,
//   onSubmit: handlerSubmitFormAddCard,
// });

// /** @type {HTMLElement} dom элемент инпута - имени, формы редактирования профиля */
// const nameInput = document.querySelector('.form__input_type_name');
// /** @type {HTMLElement} dom элемент инпута - описания, формы редактирования профиля */
// const jobInput = document.querySelector('.form__input_type_description');
// /** @type {HTMLElement} dom элемент имеи профиля */
// const profileName = document.querySelector('.profile__title');
// /** @type {HTMLElement} dom элемент описания профиля */
// const profileText = document.querySelector('.profile__text');

// /**
//  * Обработчик открытия попапа редактирования профиля
//  */
// const handlerOpenPopupAddEdit = () => {
//   nameInput.value = profileName.textContent.trim();
//   jobInput.value = profileText.textContent.trim();
// };

// /**
//  * Обработчик отправки формы редактирования профиля
//  */
// const handlerSubmitFormAddEdit = () => {
//   profileName.textContent = nameInput.value.trim();
//   profileText.textContent = jobInput.value.trim();
// };

// createPopupWithFrom({
//   popup: '.popup_js_edit',
//   open: '.profile__edit',
//   close: '.popup__close_js_edit',
//   form: '.form_js_edit',
//   configValidation: formData,
//   onOpen: handlerOpenPopupAddEdit,
//   onSubmit: handlerSubmitFormAddEdit,
// });
