/**
 * @typedef TPopupWithFormConfig
 * @type {Object}
 * @property {String} popup селектор попапа
 * @property {String} form селектор формы
 * @property {String} open ссылка на кнопку открытия попапа
 * @property {String} openByElem css класс который должен присутствовать на элементе для открытия попапа
 * @property {String} close ссылка на кнопку закрытия попапа
 * @property {Function} onOpen колбек на открытие попапа
 * @property {Function} onClose колбек на закрытие попапа
 * @property {Function} onSubmit колбек на отправку формы
 */

/**
 * Функция создания попапа с формой
 *
 * @param {TPopupWithFormConfig} config
 */
const createPopupWithFrom = (config) => {
  /** @type {HTMLElement} dom элемент формы */
  const form = document.querySelector(config.form);

  /** @type {{ reset: Function }} создания экземпляра класса с методом сброса валидации */
  const validation = () => {
    const formValidator = new FormValidator({
      ...config.configValidation,
      formSelector: config.form,
    });

    return formValidator;
  };

  /**
   * Обработчик открытия попапа
   *
   * @param {Event} e
   */
  const handlerOpen = (e) => {
    if (config.onOpen) {
      config.onOpen(e);
    }

    validation().enableValidation;
  };

  /**
   * Обработчик закрытия попапа
   *
   * @param {Event} e
   */
  const handlerClose = (e) => {
    form.reset();

    if (config.onClose) {
      config.onClose(e);
    }
  };

  /** @type {{ hide: Function }} объект с методом закрытия попапа */
  const popup = createPopup({
    ...config,
    onClose: handlerClose,
    onOpen: handlerOpen,
  });

  /**
   * Обработчик отправки формы
   *
   * @param {Event} e
   */
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (config.onSubmit) {
      config.onSubmit(e);
    }

    popup.hide(e);
  };

  form.addEventListener('submit', handlerSubmit);
};
