import { initialCards } from '../utils/data';
import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import FormValidator from '../components/FormValidator';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section';
import Card from '../components/Card';
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
  previewCaption,
  previewImage,
  formAdd,
  popupAdd,
  formEdit,
  popupEdit,
} from '../utils/constants';

import './index.css';

/** Объявляем класс userInfo. */
const openPopupPreview = new PopupWithImage(
  popupPreview,
  previewImage,
  previewCaption
);

/**
 * Функция создает экземпляр класса Card.
 *
 * @param {Event} item - данные для создания карточки.
 * @return {HTMLElement} - вернет готовую карточку.
 */
const renderCard = (item) => {
  const card = new Card(item, cardTemplate, {
    handleCardClick: (e) => {
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

validationAdd.enableValidation();

/** Функция сабмита формы редактирование профиля. */
const handlerSubmitFormAddEdit = (valueEdit) => {
  userInfo.setUserInfo(valueEdit);
};

/** Объявляем класс PopupWithForm для создания и обработки формы добавления карточки. */
const editPopupForm = new PopupWithForm(formEdit, popupEdit, {
  onSubmit: handlerSubmitFormAddEdit,
});

validationEdit.enableValidation();

/** Функция открывает попап редактирование профиля и вставляет данные в форму. */
const openPopupEdit = () => {
  const valueEdit = userInfo.getUserInfo();
  nameInput.value = profileName.textContent.trim() || valueEdit.name;
  jobInput.value = profileText.textContent.trim() || valueEdit.job;

  validationEdit.resetValidation();
  editPopupForm.open();
};

/** Функция открывает попап добавления карточки. */
const openPopupAdd = () => {
  addPopupForm.open();
  validationAdd.resetValidation();
};

/** Вешаем слушателей на кнопку для открытия попапа редактирование профиля. */
buttonPopupAdd.addEventListener('click', openPopupAdd);

buttonPopupEdit.addEventListener('click', openPopupEdit);
