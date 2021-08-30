import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';
import FormValidator from '../components/FormValidator';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section';
import Card from '../components/Card';
import Api from '../components/Api';
import {
  buttonPopupEdit,
  buttonPopupAdd,
  buttonUpdatePhoto,
  profileName,
  profileText,
  cardTemplate,
  containerCards,
  profilePhoto,
  formData,
  formUpdatePhoto,
  popupUpdatePhoto,
  nameInput,
  jobInput,
  popupPreview,
  previewCaption,
  previewImage,
  formAdd,
  popupAdd,
  popupConfirm,
  formEdit,
  popupEdit,
} from '../utils/constants';

import './index.css';

/** Объявляем класс Api для работы с сервером. */
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-27/',
  headers: {
    authorization: '88e85c38-3673-4758-b064-e9b8bb0341f1',
    'Content-Type': 'application/json',
  },
});

/**
 * @function validation -  объявляет класс через new
 * @param {ClassDecorator} constructor - Экземпляр класса.
 * @param {object} data - данные формы.
 * @param {string} form - селектор попапа.
 */

/** Объявляем класс FormValidator - для формы для редактирование профиле. */
const validationEdit = new FormValidator({
  ...formData,
  formSelector: formEdit,
});
validationEdit.enableValidation();

/** Объявляем класс FormValidator - для формы добавления карточки. */
const validationAdd = new FormValidator({
  ...formData,
  formSelector: formAdd,
});
validationAdd.enableValidation();

/** Объявляем класс FormValidator - для формы обновления фото. */
const validationUpdata = new FormValidator({
  ...formData,
  formSelector: formUpdatePhoto,
});
validationUpdata.enableValidation();

/** Объявляем класс userInfo - обработка и вставка данных профиля. */
const userInfo = new UserInfo(profileName, profileText, profilePhoto);

/** Объявляем класс PopupWithForm для создания и обработки формы добавления карточки. */
const editPopupForm = new PopupWithForm(formEdit, popupEdit, {
  // eslint-disable-next-line no-use-before-define
  onSubmit: (valueEdit) => handlerSubmitFormEdit(valueEdit),
});

/**
 * @function renderUserInfo - вставка на страницу данных профиля.
 * @param {Object} valueEdit - объект со значениями полей формы.
 */
const renderUserInfo = (valueEdit) => {
  userInfo.setUserInfo(valueEdit);
};

/**
 * @function handlerSubmitFormEdit - сабмита формы редактирование профиля.
 * @param {Object} valueEdit - объект со значениями полей формы.
 */
const handlerSubmitFormEdit = (valueEdit) => {
  api
    .rewriteUserInfo(valueEdit)
    .finally(() => editPopupForm.renderLoading(false))
    .then((res) => renderUserInfo(res));
};

/** Объявляем класс создание попапа потверждения на удаления. */
const popupWithConfirm = new PopupWithConfirm(popupConfirm, {
  api: (id) =>
    api.deleteCard(id).then((res) => {
      console.log(res);
      popupWithConfirm.delete();
    }),
});

/** Объявляем класс PopupWithImage - создает попап с формой. */
const openPopupPreview = new PopupWithImage(
  popupPreview,
  previewImage,
  previewCaption
);

/**
 * @function renderCard - создает экземпляр класса.
 * @param {Object} item - объект с данными карточки.
 * @return {HTMLElement} - возрощает готовую карточку.
 */
const renderCard = (item) => {
  const card = new Card(item, cardTemplate, {
    handleCardClick: (e) => {
      e.preventDefault();
      openPopupPreview.open(item);
    },
    handleCardDelete: (e, id, element) => {
      e.preventDefault();
      popupWithConfirm.open(id, element);
    },
    like: (id) => api.like(id),
    disLike: (id) => api.disLike(id),
  });
  return card.newCard();
};

/**
 * @function section - вставляет карточки на страницу.
 * @param {[Object]} result - массив объект с данными.
 */
const section = (result) => {
  const sectionClass = new Section(
    {
      result,
      oneRender: (item) => {
        sectionClass.addItem(renderCard(item));
      },
    },
    containerCards
  );

  sectionClass.render();

  return sectionClass;
};

/** Получаем данные с сервера. */
api.getUser().then((dataUser) => {
  userInfo.getUserInfo(userInfo.setUserInfo(dataUser));
  api.getInitialCards().then((result) => {
    section(result);
  });
});

/** Объявляем класс PopupWithForm для создания и обработки формы добавления карточки. */
const addPopupForm = new PopupWithForm(formAdd, popupAdd, {
  // eslint-disable-next-line no-use-before-define
  onSubmit: (dataCard) => createCard(dataCard),
});

/**
 * @function createCard - сабмит формы для для добавление карточки.
 * @param {Object} dataCard - объект со значениями полей формы.
 */
const createCard = (dataCard) => {
  api
    .createCard(dataCard)
    .then((result) => {
      section([result]);
    })
    .finally(() => addPopupForm.renderLoading(false));
};

/** Объявляем класс updatePhotoPopupForm для обновление фото. */
const updatePhotoPopupForm = new PopupWithForm(
  formUpdatePhoto,
  popupUpdatePhoto,
  {
    // eslint-disable-next-line no-use-before-define
    onSubmit: (valueEdit) => updatePhoto(valueEdit),
  }
);

/**
 * @function updatePhoto - сабмит формы для обновление фото.
 * @param {Object} valueEdit - объект со значениями полей формы.
 */
const updatePhoto = (valueEdit) => {
  api.UpdatePhoto(valueEdit).then((res) => renderUserInfo(res));
};

/**
 * @function openUpdatePhoto - открывает попап обновление фото.
 * Добавляет валидацию на форму.
 */
const openUpdatePhoto = () => {
  updatePhotoPopupForm.open();
  validationUpdata.resetValidation();
};

/**
 * @function openPopupAdd - открывает попап добавления карточки.
 * Добавляет валидацию на форму.
 */
const openPopupAdd = () => {
  addPopupForm.open();
  validationAdd.resetValidation();
};

/**
 * @function openPopupEdit - открывает попап редактирование профиля.
 * Вставляет данные в форму.
 * Добавляет валидацию на форму.
 */
const openPopupEdit = () => {
  const valueEdit = userInfo.getUserInfo();
  nameInput.value = profileName.textContent.trim() || valueEdit.name;
  jobInput.value = profileText.textContent.trim() || valueEdit.job;

  validationEdit.resetValidation();
  editPopupForm.open();
};

/** @listens buttonPopupAdd - Вешаем слушателей на кнопку для открытия попапа добавление карточки. */
buttonPopupAdd.addEventListener('click', (e) => openPopupAdd(e));
/** @listens buttonPopupEdit - Вешаем слушателей на кнопку для открытия попапа редактирование профиля. */
buttonPopupEdit.addEventListener('click', (e) => openPopupEdit(e));
/** @listens buttonUpdatePhoto - Вешаем слушателей на кнопку для открытия попапа обновление фото. */
buttonUpdatePhoto.addEventListener('click', (e) => openUpdatePhoto(e));