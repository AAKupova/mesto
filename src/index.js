import { initialCards } from './data';
import PopupWithImage from './components/PopupWithImage';
import PopupWithForm from './components/PopupWithForm';
import FormValidator from './components/FormValidator';
import UserInfo from './components/UserInfo';
import Section from './components/Section';
import Card from './components/Card';
import {
  buttonPopupEdit,
  buttonPopupAdd,
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
} from './utils/constants';

import './pages/index.css';
import Popup from './components/Popup';

const renderCard = (item) => {
  const card = new Card(item, cardTemplate, {
    handleCardClick: (e) => {
      const openPopupPreview = new PopupWithImage(popupPreview);
      openPopupPreview.open(e);
    },
  });

  return card.newCard();
};

const renderer = (item) => {
  // eslint-disable-next-line no-use-before-define
  section.addItem(renderCard(item));
};

const section = new Section(
  {
    initialCards,
    renderer,
  },
  containerCards
);

section.render();

const userInfo = new UserInfo(profileName, profileText);

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

const addPopupForm = new PopupWithForm(formAdd, popupAdd, {
  onSubmit: renderer,
});

addPopupForm.setEventListeners();
validationAdd.enableValidation();

const editPopupForm = new PopupWithForm(formEdit, popupEdit, {
  onSubmit: handlerSubmitFormAddEdit,
});

editPopupForm.setEventListeners();
validationEdit.enableValidation();

const editPopup = new Popup(popupEdit);

const openPopupEdit = () => {
  validationEdit.resetValidation();

  const valueEdit = userInfo.getUserInfo();
  nameInput.value = profileName.textContent.trim() || valueEdit.name;
  jobInput.value = profileText.textContent.trim() || valueEdit.job;

  editPopup.open();
};

const addPopup = new Popup(popupAdd);

const openPopupAdd = () => {
  addPopup.open();
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
