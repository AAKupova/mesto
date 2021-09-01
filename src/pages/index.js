import PopupWithImage from '../components/PopupWithImage';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithConfirm from '../components/PopupWithConfirm';
import FormValidator from '../components/FormValidator';
import UserInfo from '../components/UserInfo';
import Section from '../components/Section';
import Card from '../components/Card';
import Api from '../components/Api';
import {
  errorElement,
  mainElement,
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
  editPopupForm.renderLoading(true);
  api
    .rewriteUserInfo(valueEdit)
    .then((res) => renderUserInfo(res))
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => editPopupForm.renderLoading(false));
  editPopupForm.close();
};

/** Объявляем класс создание попапа потверждения на удаления. */
const popupWithConfirm = new PopupWithConfirm(popupConfirm, {
  // eslint-disable-next-line no-use-before-define
  api: (id) => deleteCard(id),
});

/**
 * @function deleteCard - сабмита удаление карточки.
 * @param {Number} id - карточки которую нужно удалить.
 */
const deleteCard = (id) => {
  popupWithConfirm.renderLoading(true);
  api
    .deleteCard(id)
    .then(() => popupWithConfirm.delete())
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => popupWithConfirm.renderLoading(false));
  popupWithConfirm.close();
};

/** Объявляем класс PopupWithImage - создает попап с формой. */
const openPopupPreview = new PopupWithImage(
  popupPreview,
  previewImage,
  previewCaption
);

/**
 * @function createCard - создает экземпляр класса.
 * @param {Object} item - объект с данными карточки.
 * @return {HTMLElement} - возрощает готовую карточку.
 */
const createCard = (item, dataUser) => {
  const card = new Card(item, dataUser, cardTemplate, {
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
 * @function renderCard - вставляет карточки на страницу.
 * @param {[Object]} item - массив объектов с данными.
 */
// eslint-disable-next-line no-use-before-define
const renderCard = (item, dataUser) =>
  sectionClass.addItem(createCard(item, dataUser));

/** Объявляем класс Section для вставки данных на страницу. */
const sectionClass = new Section(containerCards, { oneRender: renderCard });

/**
 * @function errorNotFound - вставляет на страницу информацию о ошибки 404.
 * @param {Boolean} isError
 */
const errorNotFound = (isError) => {
  if (isError) {
    errorElement.classList.remove('error__404_hidden');
    mainElement.classList.add('main_hidden');
  } else {
    errorElement.classList.add('error__404_hidden');
    mainElement.classList.remove('main_hidden');
  }
};

/** Получаем данные с сервера. */
Promise.all([api.getUser(), api.getInitialCards()])
  .then((data) => {
    errorNotFound(false);
    userInfo.getUserInfo(userInfo.setUserInfo(data[0]));
    sectionClass.render(data[1], data[0]);
  })
  .catch((err) => {
    console.error(`Ошибка: ${err}`);
    errorNotFound(true);
  });

/** Объявляем класс PopupWithForm для создания и обработки формы добавления карточки. */
const addPopupForm = new PopupWithForm(formAdd, popupAdd, {
  // eslint-disable-next-line no-use-before-define
  onSubmit: (dataCard) => addCard(dataCard),
});

/**
 * @function createCard - сабмит формы для для добавление карточки.
 * @param {Object} dataCard - объект со значениями полей формы.
 */
const addCard = (dataCard) => {
  addPopupForm.renderLoading(true);
  api
    .createCard(dataCard)
    .then((result) => sectionClass.render([result], result.owner))
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => addPopupForm.renderLoading(false));
  addPopupForm.close();
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
  updatePhotoPopupForm.renderLoading(true);
  api
    .updatePhoto(valueEdit)
    .then((res) => renderUserInfo(res))
    .catch((err) => console.error(`Ошибка: ${err}`))
    .finally(() => updatePhotoPopupForm.renderLoading(false));
  updatePhotoPopupForm.close();
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
