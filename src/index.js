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

/**
 * Функция создает экземпляр класса Card.
 *
 * @param {Event} item - данные для создания карточки.
 * @return {HTMLElement} - вернет готовую карточку.
 */
const renderCard = (item) => {
  const card = new Card(item, cardTemplate, {
    handleCardClick: (e) => {
      const openPopupPreview = new PopupWithImage(popupPreview);
      openPopupPreview.open(e);
    },
  });

  return card.newCard();
};

/**
 * Функция вставки элементов на страницу.
 * @param {Event} item - данные для вставки.
 */
const renderer = (item) => {
  // eslint-disable-next-line no-use-before-define
  section.addItem(renderCard(item));
};

/** Объявляем класс Section. */
const section = new Section(
  {
    initialCards,
    renderer,
  },
  containerCards
);

section.render();

/** Объявляем класс userInfo. */
const userInfo = new UserInfo(profileName, profileText);

/** Функция сабмита формы редактирование профиля. */
const handlerSubmitFormAddEdit = (valueEdit) => {
  userInfo.setUserInfo(valueEdit);
};

/** Объявляем класс FormValidator для формы добавления карточки. */
const validationAdd = new FormValidator({
  ...formData,
  formSelector: formAdd,
});

/** Объявляем класс FormValidator для формы редактирование профиля. */
const validationEdit = new FormValidator({
  ...formData,
  formSelector: formEdit,
});

/** Объявляем класс PopupWithForm для создания и обработки формы добавления карточки. */
const addPopupForm = new PopupWithForm(formAdd, popupAdd, {
  onSubmit: renderer,
});

addPopupForm.setEventListeners();
validationAdd.enableValidation();

/** Объявляем класс PopupWithForm для создания и обработки формы добавления карточки. */
const editPopupForm = new PopupWithForm(formEdit, popupEdit, {
  onSubmit: handlerSubmitFormAddEdit,
});

editPopupForm.setEventListeners();
validationEdit.enableValidation();

/** Объявляем класс editPopup для создания попапа редактирование профиля. */
const editPopup = new Popup(popupEdit);

/** Функция открывает попап редактирование профиля и вставляет данные в форму. */
const openPopupEdit = () => {
  const valueEdit = userInfo.getUserInfo();
  nameInput.value = profileName.textContent.trim() || valueEdit.name;
  jobInput.value = profileText.textContent.trim() || valueEdit.job;

  validationEdit.resetValidation();
  editPopup.open();
};

/** Объявляем класс addPopup для создания попапа добавления карточки. */
const addPopup = new Popup(popupAdd);

/** Функция открывает попап добавления карточки. */
const openPopupAdd = () => {
  addPopup.open();
  validationAdd.resetForm();
  validationAdd.resetValidation();
};

/** Вешаем слушателей на кнопку для открытия попапа редактирование профиля. */
buttonPopupAdd.addEventListener('click', openPopupAdd);

buttonPopupEdit.addEventListener('click', openPopupEdit);
