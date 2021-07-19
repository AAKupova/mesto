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
const formData = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__submit-btn',
  inactiveButtonClass: 'form__submit-btn_inactive',
  inputErrorClass: '.form__input_type_error',
  errorClass: 'form__input-error_active',
};

/**
 * Обработчик открытия попапа просмотра картинок
 *
 * @param {Event} e
 */
const handlerOpenPopupPreview = ({ target }) => {
  const previewImg = document.querySelector('.preview__image');
  const previewText = document.querySelector('.preview__caption');

  previewImg.src = target.src;
  previewImg.alt = target.alt;
  previewText.textContent = target.alt;
};

createPopup({
  popup: '.popup_js_preview',
  open: '.cards__list',
  openByElem: 'card__image',
  close: '.popup__close_js_preview',
  onOpen: handlerOpenPopupPreview,
});

/** @type {HTMLElement} dom элемент инпута тайтла формы дабавления карточки */
const titleInput = document.querySelector('.form__input_type_title');
/** @type {HTMLElement} dom элемент инпута ссылки формы дабавления карточки */
const linkInput = document.querySelector('.form__input_type_link');

/**
 * Обработчик отправки формы добавления карточки
 */
const handlerSubmitFormAddCard = () => {
  renderCard({
    name: titleInput.value,
    link: linkInput.value,
  });
};

createPopupWithFrom({
  popup: '.popup_js_add',
  open: '.profile__add-btn',
  close: '.popup__close_js_add',
  form: '.form_js_add',
  configValidation: formData,
  onSubmit: handlerSubmitFormAddCard,
});

/** @type {HTMLElement} dom элемент инпута - имени, формы редактирования профиля */
const nameInput = document.querySelector('.form__input_type_name');
/** @type {HTMLElement} dom элемент инпута - описания, формы редактирования профиля */
const jobInput = document.querySelector('.form__input_type_description');
/** @type {HTMLElement} dom элемент имеи профиля */
const profilName = document.querySelector('.profile__title');
/** @type {HTMLElement} dom элемент описания профиля */
const profilText = document.querySelector('.profile__text');

/**
 * Обработчик открытия попапа редактирования профиля
 */
const handlerOpenPopupAddEdit = () => {
  nameInput.value = profilName.textContent.trim();
  jobInput.value = profilText.textContent.trim();
};

/**
 * Обработчик отправки формы редактирования профиля
 */
const handlerSubmitFormAddEdit = () => {
  profilName.textContent = nameInput.value.trim();
  profilText.textContent = jobInput.value.trim();
};

createPopupWithFrom({
  popup: '.popup_js_edit',
  open: '.profile__edit',
  close: '.popup__close_js_edit',
  form: '.form_js_edit',
  configValidation: formData,
  onOpen: handlerOpenPopupAddEdit,
  onSubmit: handlerSubmitFormAddEdit,
});
